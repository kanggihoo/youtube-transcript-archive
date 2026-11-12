---
title: "If You're in Computer Science, Watch This Now"
author: "The Coding Gopher"
site: "YouTube"
published: 2026-11-06T08:30:31-08:00
source: "https://www.youtube.com/watch?v=cGngUYGfU0A"
domain: "youtube.com"
language: "en"
description: "♥︎ Check out Inngest: https://inngest.link/coding-gopher-yt🎓 My System Design course: https://codinggopher.com/y/sd/cGngUYGfU0A🤖 My AI Engineering course: ..."
word_count: 1455
---

![](https://www.youtube.com/watch?v=cGngUYGfU0A)

## Transcript

### The CS degree crisis

**0:00** · If you're in computer science, watch this now. If your plan is just to go to lectures, get a good GPA, and wait for a six-figure drop at graduation, you are going to get completely cooked.

**0:08** · Wait, what?

**0:09** · Universities are still teaching like it's 2015. If you don't lock in right now, you're spending four years and tens of thousands of dollars just to graduate with the exact same skill set as a free chatbot.

**0:18** · I turned it down just to do this.

**0:20** · Here is why the traditional CS degree is failing students right now and how to actually get cracked at programming. The biggest lie in university computer science is the auto-grader bubble. Think about how a normal college programming assignment works. The professor hands you a pre-built skeleton repository where the architecture is already designed, the built system is already configured, and 90% of the boilerplate is already written. Your entire job is to fill in a 50-line function and submit it to GradeScope at 11:58 p.m. until the unit tests turn green.

### The autograder trap

**0:46** · Green giant.

**0:48** · And the second the semester ends, you throw that code in the trash and never look at it again. Stanford economist Eric Brynjolfsson pointed out the exact problem with this. Clean, isolated textbook coding problems are the exact kind of book learning that large language models have completely memorized. If your homework assignment can be graded by a simple input-output script, an AI can already one-shot it.

**1:07** · Even worse, many university classes teach computer science in a vacuum that ignores physical hardware. In data structures and algorithms, you're taught big O notation where traversing a linked list of a million items and traversing a flat array of a million items are both considered linear time or big O of n. So on a chalkboard, they look identical.

### Hardware ignorance

**1:25** · Try doing that on a real CPU. A flat array stores elements side by side in contiguous RAM, so when the processor fetches 164-byte cache line, it pulls the next several items into its fast L1 cache for free. A linked list scatters nodes randomly across the heap, forcing the CPU to follow a pointer and stall for hundreds of clock cycles on almost every single hop. On paper, they have the same time complexity. In production, one is 20 times slower than the other.

### Missing professional tools

**1:49** · The second problem is that universities teach you theoretical computer science, but almost never teach you how to actually operate a computer. Even MIT admitted this. Three instructors at MIT noticed that brilliant who could prove compiler theorems and build neural networks on a whiteboard had almost zero proficiency with the actual tools of software engineering. They saw MIT students holding down the arrow key for 30 seconds to scroll to the bottom of a file, manually renaming variables across 20 files by hand, and fixing a Git merge conflict by copying their code to the desktop, deleting the entire repository, and cloning it all over again.

**2:20** · MIT literally had to create a special class called the Missing Semester of Your CS Education just to fill this gap. In a four-year degree, almost nobody sits you down and teaches you how to pipe data streams through the Unix shell, how to attach an interactive debugger, to inspect corrupted stack frames, or how to read a CPU flame graph to find a performance bottleneck. You won't find classes on how to untangle a messy Git merge conflict, resolve a cascading database deadlock in production, write a clean Docker file, or navigate a million-line legacy codebase without documentation.

**2:50** · Nobody teaches you that Git isn't a mysterious cloud backup button. It's a content-addressed, directed acyclic graph where every commit is an immutable snapshot pointing to a tree of hashed binary blobs. Once you understand the graph, you can rebase, bisect a regression across 500 commits in 30 seconds, and cherry-pick changes without panicking. Until you learn your tools, you're trying to build software with one hand tied behind your back. Let's take a quick break to talk about today's sponsor, Ingest.

### Infrastructure solutions

**3:16** · When you're building AI agents or workflows that run for minutes, hours, or weeks, a single HTTP request won't cut it. APIs time out and deploys restart your servers mid-run. Normally, fixing that means babysitting worker fleets, queues, and hand-rolled idempotency. Ingest puts durable execution right inside your TypeScript, Python, or Go codebase. You break your workflow into steps, and Ingest saves state as each one finishes.

**3:43** · If a call fails or you deploy mid-run, your agent doesn't lose progress or waste tokens starting over. \[music\] It just retries the failed step and keeps going. You can pause runs for days waiting on human approval at zero compute and cancel them automatically when a user replies. You also get one line per tenant concurrency and rate limits to protect your model quotas. And since execution and observability share the same layer, tracing, replay, live experiments, and outcome-based evals come built-in without a second vendor.

**4:11** · Hit the link in the description to build for the long run with Ingest. Thank you to Ingest for sponsoring. Now back to the video. Once CS students realize their classes aren't enough, they usually fall into the next trap, the clone resume. Open a hundred new grad resumes right now, and 90 of them have the exact same three projects, a full stack to-do app, a React movie dashboard, and a wrapper around the OpenAI API with a Tailwind landing page.

### Building a standout portfolio

**4:35** · Hiring managers skip right past these because when you build a basic web wrapper, 90% of the actual computer science is hidden inside third-party packages. Calling an API and rendering a JSON array doesn't prove you can engineer systems. It just proves you can read a quick start guide. If you want your resume to stop a senior engineer in their tracks, delete the five tutorial clones and build one infrastructure tool from scratch. Instead of importing a web framework, open a raw TCP socket in C, Rust, or Go and write your own multi-threaded HTTP server.

**5:02** · Parse the raw byte stream yourself, handle keep-alive connections, and implement gzip compression from the specification.

**5:10** · Or build a toy in-memory Redis clone that parses the Redis wire protocol over a non-blocking event loop and handles concurrent client connections and key expirations. Or write your own Unix shell that parses command tokens, forks, child processes, and wires up operating system file descriptors for input and output redirection. When you build the infrastructure layer yourself, you aren't competing with people who prompt engineered a weekend web app anymore.

**5:33** · You walk into interviews able to talk about socket buffers, race conditions, and memory allocation like someone who has already been working in the industry for years. So if you're in school right now, here's how you actually lock in and play your cards to win. First, stop optimizing your schedule for an easy 4.0 GPA. Nobody at a tech company is going to ask you what you got in your easy elective classes. Take the brutal upper-level systems courses that scare everyone else away, operating systems, compilers, computer networks, and database internals.

### Strategy for success

**6:00** · The classes where you lose sleep writing a virtual memory page table manager, an instruction parser, or a B+ tree storage engine are the exact classes that build the mental model AI can't replace. Second, break out of the classroom early. A single summer internship, a merged pull request to a real open source systems project, or building software that real students on your campus actually use is worth a million times more than 50 isolated

**6:25** · homework assignments because real engineering only starts when requirements change, users send malformed data or try to DDoS your service, and you have to maintain code you wrote 6 months ago. A computer science degree is not a golden ticket anymore. It's like a gym membership. If you just pay tuition, copy paste your way through the autograder, abuse ChatGPT for 4 years and do the bare minimum, you'll graduate with a piece of paper and zero leverage.

**6:46** · But if you use these 4 years to master your tools, take the hardest systems classes in the catalog, get internships at top tech companies, and build real infrastructure from the ground up, there has never been an easier time to lap the entire field.
