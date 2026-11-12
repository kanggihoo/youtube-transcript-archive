---
title: "How do software projects achieve zero downtime database migrations?"
author: "Visualcoders"
site: "YouTube"
source: "https://www.youtube.com/watch?v=2XhMr0UvU0c"
domain: "youtube.com"
language: "en"
description: "Zero downtime database migrations, step by step: how to rename a column in production while every pod stays up, using the expand and contract pattern.You wor..."
word_count: 1617
---

![](https://www.youtube.com/watch?v=2XhMr0UvU0c)

Zero downtime database migrations, step by step: how to rename a column in production while every pod stays up, using the expand and contract pattern.You wor...

## Transcript

### A migration that cannot go down

**0:00** · Imagine you work on an ambulance dispatch app.

**0:03** · Today you get a ticket. Change the database. Sounds simple.

**0:07** · But this app can never go down. Not even for a second.

**0:11** · One mistake and emergency calls stop getting through.

**0:16** · So how do you do it safely?

**0:18** · Just one table.

**0:19** · The one that stores every emergency call with a column called address.

**0:25** · You want to rename it to pick up address because calls will soon record where the patient is taken to and add a new column for that hospital.

**0:34** · On paper, that is a one-line migration.

**0:37** · In production, that one line can take the whole app down.

**0:42** · The fix is a pattern called expand and contract. And by the end of this video, you'll be able to run it yourself, one safe step at a time.

**0:52** · Your app runs as three copies called pods inside Kubernetes.

**0:57** · Every pod reads and writes the address column hundreds of times a minute.

### Why one rename breaks production

**1:02** · Now you deploy version two, which expects pick up address instead.

**1:07** · Kubernetes doesn't replace all three pods at once. It rolls them out one by one, so nothing ever has zero pods running.

**1:16** · So for a while, old and new code run side by side against the same table.

**1:21** · The old pod asks for a column called address and that column no longer exists.

**1:27** · Every request that lands on it fails with a 500 error.

**1:31** · One pod in three is failing, so roughly one call in three fails with it until the roll out finishes.

**1:38** · And if you migrate after the deploy instead, it breaks the other way around.

**1:43** · The new pods ask for a column that isn't there yet.

**1:47** · Either order, someone gets an error.

**1:49** · That's downtime.

**1:51** · The old answer was a maintenance window.

**1:54** · Stop every pod, run the migration, start them again.

**1:58** · For a blog, 5 quiet minutes at 3:00 in the morning is fine.

**2:02** · For an ambulance dispatcher, those five minutes are calls nobody answers.

**2:08** · So, we need a way to change the schema while every pod stays up.

### Why maintenance windows do not cut it

**2:12** · The trick is to never make a change that the code already running can't survive.

**2:17** · Instead of one breaking step, you take several small safe ones, and you deploy each one on its own.

**2:24** · First, you expand. Add the new structure next to the old one.

**2:29** · Then you migrate. Move the data and the traffic across.

**2:33** · And only when nothing uses the old structure anymore, you contract. You remove it.

### The idea: expand, migrate, contract

**2:39** · At every single step, both old and new code keep working.

**2:44** · Let's walk through all seven.

**2:46** · Step one. Add pick up address as a brand new column, and leave address exactly where it is.

**2:53** · Here's the SQL.

**2:55** · We add the column, and while we're here, we add hospital ID the same way.

**3:00** · Notice what's missing.

**3:02** · No not null rule, because the old rows have no value yet.

**3:06** · No default, because every call has its own address.

**3:10** · And no index yet. We build that once the column is full.

### Step 1: Add the new column (expand)

**3:15** · In Postgres, adding a nullable column with no default only touches the table's description, not its rows. So, it finishes almost instantly.

**3:26** · Old code never asks for these columns, so it keeps working.

**3:30** · That's step one, deployed.

**3:33** · Step two is a code change, not a database change.

**3:37** · Whenever a dispatcher corrects an address, the app writes it to both columns.

**3:42** · Both writes go in one statement, so the two columns can never disagree about Ravi.

**3:48** · But it still reads from the old address column, because most rows haven't been copied yet.

**3:54** · Some teams do this with a database trigger instead of app code.

**3:58** · Either way works.

**3:59** · The point is that every new right lands in both places.

**4:04** · Old pods and new pods can run together here and neither one breaks.

**4:09** · New rights are covered, but most calls never get corrected.

### Step 2: Dual writes

**4:13** · Asha's call came in last night and so did Kabir's.

**4:17** · So, a background job copies them across.

**4:20** · It works in small batches, so it never locks the whole table.

**4:24** · Each batch picks only rows where the new column is still empty. So, running it twice is harmless.

**4:31** · It keeps going until a batch updates zero rows.

**4:35** · That's how you know it's done.

**4:37** · Now, the column is full, so this is the moment to add that index.

**4:42** · Built concurrently, so Postgres doesn't block rights while it builds.

**4:46** · There's one trap here and it's worth slowing down for.

**4:50** · Imagine the backfill job reads Asha's old address into memory planning to copy it a moment later.

### Step 3: Backfill in batches

**4:57** · In that moment, the dispatcher corrects Asha's address to gate two and the app writes the correction to both columns.

**5:05** · Then the job finishes and writes the old address over the correction.

**5:10** · The update is lost and the next ambulance heads to the wrong gate.

**5:14** · That's why the copy happens inside the database in a single update.

**5:19** · Pick up address equals address.

**5:21** · The database locks the row and copies whatever is there at that instant, so it can never copy a stale value. Before switching any reads, check the copy.

**5:31** · Pick a sample of rows and make sure both columns match.

**5:35** · Step four.

**5:37** · Another deploy.

**5:38** · Reads now come from pick up address.

### The backfill race condition

**5:41** · Writes still go to both columns and that's your safety net.

**5:45** · If something looks wrong, you roll back to the last version and the old column is still complete and up-to-date. Let this run for a while.

**5:53** · A day or a full release cycle is a sensible wait.

**5:57** · Before deleting anything, you have to be sure nobody else still reads address.

**6:03** · Not just your app.

**6:04** · A nightly report, an analytics dashboard, a trigger, a stored procedure someone wrote years ago.

**6:12** · Any one of them would break the moment the column disappears.

**6:15** · So, check your query logs, search every code base, and move each one onto pickup address.

**6:22** · Only when the old column has gone completely quiet, are you ready for the last two steps.

### Step 4: Read from the new column

**6:28** · Step six, the contract begins in the code.

**6:32** · The app stops writing to address at all.

**6:35** · Only pickup address gets updates now.

**6:38** · Look back at the seven cards. Every step so far could be undone by rolling back a deploy.

**6:44** · Step seven is the only one-way door.

**6:47** · So, take a backup first, and then run the one line we wanted at the very start.

**6:52** · It runs when it can no longer hurt anyone.

**6:55** · Address is gone. Pickup address and hospital ID are live, and not a single request failed along the way.

**7:02** · And the dispatch app took every call the whole time.

### Step 5: Verify the data

**7:07** · Once you see the shape, you'll find it everywhere.

**7:10** · Splitting a name column into first name and last name.

**7:14** · Add both, write all three.

**7:16** · Backfill, switch reads, drop the old one.

**7:20** · Changing a column's type, say from a small integer to a big one, works the same way through a second column.

**7:27** · Moving data to a new table follows the same steps, just with a table instead of a column.

**7:33** · Even APIs work like this.

**7:36** · You add a new field, keep sending the old one.

### Step 6: Stop writing the old column

**7:39** · Wait until every client has moved over, and only then stop sending it.

**7:44** · Anywhere two versions of something must live together for a while, this is how you change it safely. You don't always need all seven steps.

### Step 7: Drop it (contract)

**7:53** · Adding a brand new column, like hospital ID, is already safe on its own. One step is enough.

**8:00** · You need the full pattern when you rename, retype, split, or remove something that running code still depends on.

**8:08** · So, remember the shape of it. Expand, migrate, contract.

**8:13** · Add the new next to the old. Move the data and the traffic across. Prove nothing uses the old one, and only then delete it. Do that, and your callers never notice that anything changed.

### The same trick everywhere

**8:26** · If this helped, subscribe, and I'll see you in the next one.
