---
title: "AI Job Search:  One Posting, Two PDFs (Full Tutorial)"
author: "Full Stack"
site: "YouTube"
source: "https://www.youtube.com/watch?v=lLBWWL2YcjM"
domain: "youtube.com"
language: "en"
description: "ai-job-search is a full job-application pipeline built on Claude Code. It scrapes the portals youalready have, ranks postings against your profile, drafts a ..."
word_count: 2312
---

![](https://www.youtube.com/watch?v=lLBWWL2YcjM)

ai-job-search is a full job-application pipeline built on Claude Code. It scrapes the portals youalready have, ranks postings against your profile, drafts a ...

## Transcript

### One posting, four tabs

**0:00** · You have one job posting open and four tabs of work behind it. Your CV says team player. Your letter says \[snorts\] you're passionate about synergy. One application is a small project. Rewrite the CV for this posting. Write the letter for this company. Then discover that page two ends on a job title. An applicant tracking system reads the text inside the PDF, not the page you spent an hour arranging. and Latex can hand it glyphs where your email should be.

**0:27** · This repository turns that project into a pipeline on your own machine with a second agent reading every draft before you do. It's called AI job search.

**0:40** · 56,000 people start it and the license is MIT. By the end of this, you'll know whether it belongs on your machine. The person who wrote it is a geoysicist. In late 2025, his position was cut. He built this to run his own search, then used it the way you use a tool you actually depend on every week on his own career. 69 tailored applications, 21st interviews, one signed contract. And in June 2026, he became an AI engineer. A hiring funnel is not a benchmark.

### A geophysicist, position cut

### Sixty-nine applications, one contract

**1:10** · One person, one field, one country. But the shape is the argument volume with tailoring, not volume instead of it.

### Thirteen commands, three that matter

**1:20** · What it is \[snorts\] concretely.

**1:23** · 13/comands on top of the agent. Three do the work. Setup, scrape, apply. The other 10 clean up around the edges. The core workflow is country and language.

**1:35** · Agnostic. The portal searches Danish.

**1:38** · That split is going to matter later.

### First opinion: does this fit you

**1:41** · First opinion, and it decides whether you install this. The writing is the cheap part. Every model writes a fluent cover letter. The product is the measuring tape after it.

### Claude Code is the runtime, no free tier

**1:52** · Lord Code is the runtime and there's no free tier. A Pro Max or Team Plan or API credits. That's the first real cost.

**2:00** · Then Python 3.10 or newer. Bun for the portal tools and a Latex installed with both engines. Two engines for a reason.

**2:10** · The CV uses Luualex because PDF Latex breaks on modern MCTX with the font awesome package. The letter uses Excel because its class needs font spec. Now the part the readme puts in a warning box. A fork of a public repo cannot be made private. And setup writes your name, phone number, employment history, and salary expectations into tracked files. So if this is your own search, don't fork. Create a private repository, push there, and add this one as upstream.

### Don't fork it, clone it private

**2:41** · You still get every update and your salary expectations stay yours. If you do fork, there's a second trap. Fork and clone makes upstream the default remote. So an issue your agent files later lands on the public tracker under your name. Install the portal tools with one script. It globs every portal folder instead of a handwritten list. So a board you add later is included on the next clone. Six portals ship. Four Danish plus LinkedIn and free hire.

**3:10** · Each is a small TypeScript C LI with the same contract. Search detail JSON or table.

### Setup has three doors

**3:19** · Setup has three doors. Point it at a documents folder. Paste one CV or answer an interview section by section. The documents folder is the one to use if you have it. It reads your CV, your LinkedIn export, diplomas, and old applications together, and it's safe to rerun as you add more. It writes eight files. profile, behavioral notes, writing style, the evaluation rubric, CV and letter templates, interview examples, and the search queries.

**3:49** · Second opinion, the profile is the product, not the prompt. A thin profile produces generic applications. Python gives it nothing. Built churn pipelines in Python for a subscription business gives it something to reframe. Expand goes further. It reads the public links already in your profile. GitHub, a portfolio, Kaggle, Scholar, and full syllabi for the courses you list.

### The profile is the product

**4:17** · Discovered skins arrive with a source tag. Upskill goes the other way. It compares your profile with the postings you ranked and tracked, and returns a heat map of gaps with a learning plan and time estimates.

### Six portals, one shortlist

**4:29** · Scrape searches the portals you have, dduplicates the results, and sorts them by fit against the profile you just wrote. The two country agnostic tools are the interesting pair. LinkedIn uses the public guest endpoints with zero dependencies and the repo says plainly personal use only. Keep the volume low.

**4:49** · Free hire is a public API. No key no dependencies and its back end is MIT so you can point it at your own instance.

**4:58** · When a scrape returns more than you want to eyeball rank scores them all.

**5:02** · Parallel agents fetch each posting and score five dimensions. skills, experience, culture, logistics, career alignment. Deal breakers veto. Deadlines get flagged and a posting it can't reach is marked unreachable and retried, not expired because a 4003 is not a closed job. Two gates run before any score. A citizenship or residency requirement you don't meet stops it. Silence is not permission. It's marked unverified. The language gate is the subtle one.

**5:33** · The language you never declared is a hard stop, a bar higher than yours, fluent against your B1 is a flag and you decide. Then apply with one URL or the posting pasted in a separate fetcher agent reads the page. It can read and fetch, but it cannot edit or write. The part touching the wild web has no hands.

### The drafter and the reviewer

**5:57** · It tries the installed portal tool first, then a normal fetch, then a browser header retry that respects robots.txt, then the employer's own careers page.

**6:08** · That last step matters more than it sounds. Aggregators drop the requisition ID and the grade. The grade is often the most decision relevant line in the posting. Before any of that, the posting goes through an integrity gate. hidden HTML, invisible characters, instruction shaped lines, hidden links, mixed script words. It prints a oneline verdict and quotes what it found. Then the host is classified. An installed portal, a known applicant tracking domain, or unverified.

### Classifying the host

**6:39** · 6 ATS domains count, look alike hosts fail, closed. Evil greenhouse is not greenhouse. The evaluation is five scores and a recommendation. Salary benchmarking is optional and only works with data you supply. Then it stops and asks you. And that's not a formality.

**7:00** · This is the point where an agent holding your career history is about to write two documents in your name. The drafter writes a two-page CV and a one-page letter. The CV stays in your language.

**7:11** · The letter follows the postings. Then a second agent reads it with a fresh context. It researches the company, audits every claim against three sources, and looks for the generic sentence the first agent left in. Every requirement gets matched or honestly gapped. A skill you don't have stays visible as a gap. The rule is never to stuff a keyword the profile can't support. If the CV runs long, it doesn't cut the oldest job first. It scores every line on relevance, uniqueness, and whether the letter depends on it.

**7:41** · Then cuts the lowest total. That reviewer is the part I'd steal even if I never use the rest. One model writing alone produces the same four paragraphs it always produces. A second model with no memory of writing them is a cheap rude editor. Then it compiles. Not the source looks fine. It runs latex, reads the rendered pages, and fixes the layout until it's clean. Exactly two pages for the CV, exactly one for the letter. No job title alone at the bottom of page one with its bullets overleaf.

### Two PDFs, measured

**8:13** · Signature visible bullet font matching the body and it measures the PDF, not just looks at it. A hole over a 100 points about seven blank lines fails. So does a page that ends a quarter early or a final page a third empty. The whole is the failure you can't see in the source.

**8:36** · Each job entry is an unbreakable block.

**8:38** · If it doesn't fit, the whole entry jumps and leaves the gap behind and the page count still says two. Then the ATS check. It extracts the PDF's text layer and reads it the way a passer does.

**8:52** · Contact details as literal text. No replacement characters. Reading order intact. Dates that survive an import.

**8:59** · There's a flag for one specific bug. A year joined to a unicode dash. one workday import dropped the date and kept the year see the check phase on it now then keywords in a table covered synonym only missing but you have it missing and you don't that last column is the honest one a gap stays a gap every application

### After you hit send

**9:22** · lands in a tracker 14 columns from company and channel to fit rating deadline and the two file paths the posting itself is archived with the gates counts How many hidden blocks? How many invisible characters? Never the removed text, so a hostile posting isn't reread later. Outcome records. What happened?

**9:43** · Interview stages, offers, rejections, silence. After 10 days of quiet, it drafts a follow-up in your style. From claims you already sent, drafts only, never sends at most twice. Interview starts from the archive, the posting, the CV and letter the interviewer read and the feedback from earlier rounds.

**10:03** · Company research with a verify before use rule and likely questions mapped to your examples. Then it offers a mock interview. GA gaps get bridge answers, not invented experience. The rest is plumbing. Gmail sync proposes status changes for you to approve with the email cited. Notion gets a read only mirror. The HTML report is one offline file you can open at your desk. Upstream moves fast, so updates are the other half.

**10:30** · A version stamp on each methodology file tells you which of your personalized files a release touch and a triage script drops the commits you've already taken. Now the limits because they decide the fit and the portals are Danish. Four of the six are Danish boards. If you're in Berlin or Bangalore, you're building your own. Add portal will do it. It investigates the search URL, the result structure, the access rules, scaffolds the CLI, and test runs a live query before registering anything.

### Where it still fails

**11:00** · Ow boards are declined. If you'd rather not use latx template registers any tool chain that compiles to PDF, a different type setter or something else with a test compile before it goes live. And the community fox index is a practical part. Someone has probably already wired up your board. Copy the one folder. Read the code first. Run its tests offline. The cost is real too. Claude code has no free tier. And apply is not one prompt.

**11:31** · It's a fetch, an evaluation, two drafts, a review, and several compile and inspect loops. The permissions are tighter than most agent repos and still not a sandbox. An exact path allow list prompts before anything that changes permissions and deny rules on upload.

**11:49** · shape commands and reads of your SSH and cloud keys. No hooks ship at all. A hook runs without asking, which is the vector, a supply chain worm used in August 2026, and the bash sandbox doesn't run on native Windows and is off by default on Mac OS and Linux. The prefix rules are trip wires, not walls.

### Windows takes more work

**12:10** · One spelling of a curl upload is denied.

**12:12** · A slightly different one is not. Web fetch is unrestricted by domain. So the rule never to fetch links from a posting is doing real work and the gate is deterministic, not an oracle. It catches payloads that leave a trace. A sentence written to read naturally to a human and an agent leaves none. Though the workflow can't apply for you, it can draft, measure, and catch its own bad page breaks. You still read what it wrote before you send it. So here's where I land.

### Who it's for

**12:42** · If you're applying somewhere with the bold you're willing to wire up and you already pay for the subscription, this is the most complete job search workflow I've seen in a repo.

**12:51** · If you want something that applies while you sleep, it isn't that. And if you won't keep a private repo, it will publish more about you than you expect.

**13:00** · The first thing to try private repo set up on your documents folder, then one real posting through apply before you touch scrape. One application tells you more than 100 scrape listings. If that's useful, start the repo. It's how the next person finds it. Fork it private, run setup, and send one application through the whole pipeline. Like, comment, subscribe, and tell me which board you'd add first.
