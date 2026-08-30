---
title: "I replaced my entire tech stack with Postgres"
author: "Better Stack"
site: "YouTube"
published: 2026-08-28T00:00:23-07:00
source: "https://www.youtube.com/watch?v=MZfhhl6ej-k"
domain: "youtube.com"
language: "en"
description: "Modern web apps get expensive fast, mostly because we bolt on twenty services to do things Postgres already does. Caching, vector search, full text search, g..."
word_count: 1360
---

![](https://www.youtube.com/watch?v=MZfhhl6ej-k)

## Transcript

### The poor man's web stack

**0:00** · Building modern web apps can get pretty expensive. Just getting a simple service up means relying on 20 different tools or services, and unfortunately, all my money gets spent on five cloud max subscriptions. So, I need the poor man's web stack to help me out. Luckily, a 30-year-old technology somehow universally loved by all developers can replace every single one of these expensive tools. Postgres has decades of development and a rich plugin ecosystem, making it one of the most versatile tools in software engineering.

**0:27** · So, today, not because we should, but because we can, damn it, we're going to replace our entire tech stack with just Postgres. We'll look at six areas: caches, vector databases, full-text search, geospatial, cron and scheduling, and no SQL.

### unlogged tables

**0:48** · One of the first places we turn when our database is being hammered is a distributed cache like Redis or Memcached. But, that's a separate dependency, and our app with five users probably doesn't need it. For a simple distributed cache, we can use Postgres's native feature, unlocked tables. These are just regular Postgres tables marked with the unlocked keyword, and they provide drastically faster writes, and they're automatically emptied if the server crashes. Read speeds are about the same, but Postgres reads are incredibly fast anyway.

**1:15** · When you write data to a normal Postgres table, the change is written to the write-ahead log, a safety file that records all database changes before they're written to the main storage. If the server loses power or crashes, Postgres replays the WAL to restore lost work and keep data safe. For unlocked tables, this step is skipped. The trade-off is that unlocked tables are wiped whenever the server crashes, but for a cache, that's the behavior we want anyway. Combine this with a simple wrapper, and we have a fast, easy-to-use cache with no extra infrastructure.

**1:46** · That's Redis and Memcached out of the stack. Next up is vector search. Since every man and his dog are building AI wrappers, vector databases have become extremely popular.

### pgvector

**1:56** · But again, it's adding more dependencies to our stack like Pinecone or Quadrant, but we can already handle this perfectly inside Postgres with the PG vector extension. With this installed, we can store both our embeddings and our data for full context-aware search. Let's say we want to learn everything about the Dutch Eurodance music group Vengaboys.

**2:14** · We start by creating a table with a vector column, then I chunk their Wikipedia article, convert each chunk into an embedding, store them both into Postgres with a simple insert. Now, I can ask a question like when did Vengaboys form? Convert the question to an embedding, then run a vector search.

### tsvector search

**2:31** · Next up is full-text search. Postgres has powerful full-text search already built in, so relying on external tools like Elasticsearch can actually be overkill. Postgres provides a column type called TS vector. So, say we want to store some posts, let's create a simple table for them. Then, to make them searchable, we can add a TS vector column, which is generated from the body column. We've called this TSV. To keep this fast, we also create a gin index.

**2:57** · Now, we can just start to store data in our table. What this does is split each sentence out into searchable chunks. So, with the example, the quick brown foxes were jumping over the lazy dogs. This would become brown dog fox jump lazy and quick with numbers assigned based on their positions. The were and over are gone completely, they're stop words and they carry no meaning. Jumping has been cut down to jump and foxes down to fox.

**3:22** · That's called stemming, every word reduced to its root, so the search for jump still matches jumping and jumped.

**3:29** · So, back to our posts example. Using web search to TS query against the TSV column, we can now search for our posts.

**3:36** · And of course, we get the results we expect, and because of the index we applied, this happens really quickly.

### PostGIS

**3:42** · Next up is geospatial. Postgres has powerful extensions for geographic and spatial data through an extension called PostGIS. With this, you can plot points on a map, capture large areas like flood zones, and search data within a given radius. PostGIS gives you a new column type called geography to store your locations in. 4326 is just the coordinate system that most GPS systems use, such as your phone, so plain latitude and longitude.

**4:09** · Then we add a gist index. It's a spatial version of indexes we already use every day. Now we can just store some places.

**4:16** · Longitude actually goes first here, which catches everyone out. I actually spent 30 minutes debugging this the first time I did it. And now I can query everything within 500 m of the given lat long. And because the column is a geography, that 500 is 500 real meters across the surface of the earth. There's no trigonometry or heavy math we need to do. PostGIS just handles it like a boss.

**4:37** · And if you want them in order of how close they are, PostGIS gives you a distance operator as well. But beyond the single points, you can also store shapes that we call polygons. And then you can ask which shape a point falls inside. So delivery areas, flood zones, or a congestion charge boundary are all just rows in a table that you can query.

**4:55** · There's so much more in this single extension than I could fit in just one video, such as projections, buffers, rasters, data geocoding. This extension is absolutely massive. So next up is cron and scheduling. Nearly every app ends up reading something to run on a schedule, a nightly cleanup or a report that goes out at 6:00 a.m. Normally that means configuring cron jobs through an external service, but it's already possible straight from PostgreSQL with pg\_cron. Here, I'm deleting log rows older than 30 days every night at 3:00 a.m. You give it a name, a normal cron expression, and the SQL you want to run.

### pg\_cron

**5:29** · Every job lives in a table, so you can see exactly what's scheduled. Every run gets recorded, too, so that job that dies at 3:00 a.m. leaves a trace behind it. Deleting a job is simple, too. Just call the unscheduled function. And now you have a simple cron with direct access to your database, no wiring together multiple services. The last one is document storage. You could reach for no SQL options like MongoDB, but Postgres has actually had a way to store unstructured JSON for years called JSONB. First, we create a table with a JSONB column. Then add an index to keep things fast.

### JSONB

**6:01** · Then we can store whatever unstructured JSON we like. Then we can use things like the containment operator to check if a document on the left contains the one on the right. So, this means we can search with JSON itself. To search on keys, the question mark operator tells you whether one exists.

**6:17** · And if you want to go even further, there's DocumentDB, which is a MongoDB compatible document database built on top of Postgres, which takes the idea even further. You can also handle durable crash proof workflows inside Postgres, which I filmed a dedicated video on that you can watch here. So, check that out if you want a deeper dive. But look, if you're building a service that doesn't need to target hundreds of thousands of users, many of these extensions are genuinely powerful and can be viable options compared to a lot of third-party tools. But hopefully, you enjoyed that one, guys. Thank you so much for watching.

### So should you actually do this?

**6:48** · And of course, I'll see you in the next one.

**6:51** · \[music\]
