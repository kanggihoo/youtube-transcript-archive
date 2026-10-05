---
title: "Jev's CRAZY USE CASES & TOOLS WHERE YOU CAN USE IT IN DIFFERENT WAYS!"
author: "AISeeKing"
site: "YouTube"
published: 2026-09-20T07:56:19-07:00
source: "https://www.youtube.com/watch?v=YbLudSwRhNo"
domain: "youtube.com"
language: "en"
description: "In this video, I’ll be showing you how developers are using Jev, TypeSafe AI’s fast decision model, for browser automation, coding agents, context compaction..."
word_count: 3041
---

![](https://www.youtube.com/watch?v=YbLudSwRhNo)

## Transcript

**0:00** · Hi, welcome to another video. So, people are already doing some pretty wild things with Jev. Klein has given it a browser. Browser use has a flight search demo that runs in around 7 seconds.

**0:11** · Other developers are putting it in charge of which coding model gets called, which parts of an agent's memory get removed, and whether an agent has actually finished its work. And then there are people putting natural language conditions directly inside SQL, writing coding rules in English, and making Jev play vampire survivors. The interesting part is how many of these projects use the same small decision model in completely different places. So I went through the project repositories, developer posts on X, Reddit discussions, and published experiments to find the use cases that are actually worth looking at.

**0:42** · Most of these are very new. I'll point out where we're looking at an available integration, an experiment, or somebody's early demo.

**0:49** · Now, just a quick explanation. If you haven't followed Jev, it's Typesafe AI's decision model. You give it some information and specific questions and it returns choices, scores or probabilities for yes or no judgments.

**1:00** · Your application then uses those answers. That means a larger model can still plan the task and write the code.

**1:05** · While Jev handles questions like which button to click, which skill to load, or whether this result needs another check, several questions about the same information can go into one request. So, let's get right into it. Starting with the Klein integration, Klein's Jev browser plug-in gives the coding agent a separate Chromium session. Klein hands over a browser goal and Jev chooses actions from the controls the plug-in finds on the page. When something needs to be typed, a small Gemini model supplies the text through Verscell AI gateway.

**1:31** · The plug-in returns screenshots for Cline to inspect and it also exposes things like browser errors and recordings. That makes the development angle pretty obvious. Imagine fixing a broken filter, having the browser worker exercise it, and then letting Klein inspect what actually happened. Incline desktop. Open customize marketplace and plugins. Search for the Jev browser plugin. Configure your Verscell AI gateway key using the linked instructions and restart Klein.

**1:57** · One detail I like is that the plugin distinguishes finishing its loop from verified success. Klein still has to check the result. There isn't a published endto-end speed benchmark for this particular plugin yet. So the interesting thing here is the workflow.

**2:14** · Browser use makes that workflow very easy to understand visually. Their Jev Ultrafast project has a recorded Google flight search from Zurich to London that takes about 7 seconds. It finds flight options. Nobody is claiming that it completes a ticket purchase in that time. The browser supplies a fresh list of controls. Jev selects an operation and its target. The browser executes it and the loop continues. A text model is brought in when it needs to enter something like the city name. Their performance report puts the recorded run at just over 7 seconds with 17 Jev requests and two text helper calls.

**2:46** · browser setup, initial navigation, and the independent check afterwards are outside that timing. So, take it as a specific documented demo, even with that qualification, it's pretty cool. You can see why developers want the browser to keep moving without waiting for the main coding model to reconsider the entire task after every click. There's a community codeex integration that shows a more practical version of this. A project called Jev browser use was built while testing an essay feedback application. Jev handles opening evaluations, expanding notes, and moving through the interface.

**3:17** · Codeex checks whether the feedback agrees with the annotations. That's a useful division of work for anyone building an app with a lot of repetitive screens to inspect.

**3:27** · Now, browser automation also leads to one of my favorite programming ideas in this whole roundup. There's a draft stage hand integration where Jev helps extract information by choosing the page elements that contain it. Ordinary code then copies the values into the requested structure. Think about a product listing. The price and title already exist on the page. You need to identify the right fields and preserve what they say. This approach gives the judgment to Jev and the copying to code.

**3:54** · In the author's test, 37 out of 75 extraction runs finished without a language model call in roughly half a second on that path. The overall system still needed an LLM fallback to maintain its reported success rate. This was a draft opt-in feature when I researched it, but the design is really interesting for scraping, importing records, and comparing information across pages. The application can check the resulting structure and fall back when the fast path isn't enough. Anyway, now let's come to something almost every coding agent user has dealt with, context compaction. You've spent a long session debugging something.

**4:26** · The agent has read files, run tests, changed its mind, and accumulated a huge amount of tool output. Eventually, all of that has to fit into a smaller context. Fast Jev compaction is a clawed code plugin that asks Jev which older tool calls still matter. It can keep, shorten, or remove them while preserving the retained text verbatim. That's especially appealing for debugging. An exact error message or file path can be more useful than a rough description of what it said. If an old file read has been superseded by a newer one, it might be a good candidate to remove. The catch is deciding what will matter later.

**4:57** · Removing the wrong result still loses information even when everything you keep is copied perfectly.

**5:05** · This plugin falls back to Claude Code's normal summary. If Jev fails or cannot remove enough, a related project called Yoshi published some useful negative results. In one small trial, input token use fell, but the run became much slower and encountered Jev failures. So, fewer tokens doesn't automatically mean a better agent. I'd want to measure whether it still solves the task, how long it takes, and what the complete run costs. Another use case is letting Jev choose which coding model should handle your request. Jev router wraps clawed code and codecs.

**5:36** · At the start of a user turn, it selects a model tier while the coding model continues to do the actual work. Its policy includes fallbacks for uncertain decisions and checks around the cost of switching models. For a mechanical change, a cheaper model might be enough. For a difficult design problem, you may want something stronger. That's the kind of distinction a router is trying to make automatically. I think this is useful because a lot of us currently make that decision by habit. We either leave the expensive model on for everything or keep switching manually. A good router could take some of that work away. Just be careful with the savings charts.

**6:06** · One codeex router project reports a large reduction from repricing historical turns. It didn't rerun all those tasks on the cheaper models to prove that the results would be equally good. That's a promising estimate, but completed work is what determines whether you've saved money. The same idea is being applied to agent skills. Jev skillgate looks at which skills are relevant and reduces how much of the rest gets shown to claude code. Some retain a full description, some get a smaller entry, and others remain available when explicitly requested.

**6:36** · In one example, the author reduced the estimated skill manifest from around 12,700 tokens to around 3,200.

**6:47** · That's the skills list, so don't read it as a 75% reduction in the entire conversation. Still, if you've installed a huge collection of skills, you can probably see the appeal. An agent working on a Rust service doesn't need every presentation, front end, and video workflow competing for attention at the beginning of the task. The larger question is whether the right skill stays available when the task changes.

**7:08** · These projects are starting to treat that as a routing problem of its own.

**7:11** · Now, choosing the model and the skills is one thing. People are also using Jev to watch the coding agent while it works. Foreman is an experimental supervisor built around a codeex worker.

**7:20** · It observes the worker's progress and asks questions about whether requirements have been met, tests are sufficient, the worker is stuck or verification is still needed. The worker can keep running while that assessment happens. Ordinary policy code decides whether to steer it, request verification, or let it finish. The first version runs one coding worker at a at a time. What I find interesting is the completion check. You can have a model producing the implementation and a separate decision layer asking whether the evidence supports calling it done.

**7:47** · that could be valuable even when the implementation itself looks convincing.

**7:50** · PIWarden explores a related idea inside the PI coding agent. It checks project rule compliance, repeated failed approaches, and unsupported completion claims. A finding can become feedback to the coding agent so it can make another attempt. The repo gives a concrete example.

**8:05** · The agent added a hard-coded fallback database address. The checker flagged it against a project rule and the agent removed it. The feedback turned a requirement the agent had overlooked into another. There are also projects using jev to judge tool call permissions in context. The same command can make sense when you've requested a database reset and be completely inappropriate when you've only requested a small schema change. That contextual check is useful, although a model's approval still needs to sit inside the application's actual permission rules.

**8:35** · Typesafe's own documentation says jev can be influenced by adversarial content. So a probability score shouldn't become permission to do anything. On Reddit, a post called Jev as orchestrator describes Claude gathering code, test results, failed approaches, and possible explanations.

**8:51** · Jev checks whether those explanations still fit and helps select the next diagnostic. If you've watched an agent return to the same wrong idea, you can see the appeal. It's an early personal report with no controlled savings benchmark. The comments also raise a good question about who proposes the options. If every explanation is wrong, Jev needs a way to request more evidence or escalate. There's an actual experiment around that problem from the Sergeium team. They gave a codeex-based incident response agent access to Jev for ranking diagnostic tests and reviewing evidence before submitting a diagnosis or repair.

**9:21** · The agent still investigated the system and made the changes. Across 10 problems with five attempts each, the baseline passed 20 out of 50 attempts. With Jev, it passed 24. Two problems got worse. So, this is a small mixed result with a positive overall direction. One useful lesson was that a system appearing healthy now doesn't necessarily mean the repair is durable. The authors found cases where the agent restored functionality while leaving the underlying condition in place. That's a much more interesting question for an agent reviewer than whether the final response sounds confident.

**9:52** · Did the repair address the cause and what evidence shows it will hold? I think we're going to see a lot more experimentation around that. Now let's move into developer tools because there are some surprisingly simple ideas here. Jerep is a command line filter where the pattern can be a description of meaning. It reads text, asks Jev whether each item matches and returns the matching original text. It can also work with a stream of incoming lines.

**10:17** · So imagine looking through logs for messages that indicate a frustrated user or searching a pile of notes for decisions that still need followup. You may not know the exact phrase the author used, but you know what you're looking for. You can feed those matches into the rest of your terminal workflow. That's what makes it interesting to me. The model becomes one small step in a pipeline you already understand. I'd still use ordinary search for an exact error code or identifier. The useful case is where the meaning matters and a literal match doesn't express the question very well. Jevant applies a similar idea to coding conventions.

**10:48** · You write a rule as a semantic question and it checks selected files against it. Its built-in checks include symbolic strings that should use named constants and identifiers whose names are too vague for their purpose. The intended workflow is that the coding agent writes something, the llinter reports a possible violation, and the agent fixes it. The current findings are at the file level. It doesn't provide precise line diagnostics or generate the replacement code itself. For example, you might want to distinguish temporary debug logging from intentional operational logs.

**11:18** · Those can look similar syntactically, but the purpose matters. This gives teams a way to experiment with rules that are awkward to express as a conventional lint check. Then there's commit minor, which looks backwards through git history. It classifies commit messages and diffs into things like bug fixes, security fixes, and other change types with reports you can inspect afterwards.

**11:42** · That could help a coding agent narrow down a history investigation before it starts reading every commit in detail.

**11:48** · Treat those labels as leads for review, especially security related ones, but it's a useful place to put a cheap first pass. One of the more unusual projects is PGEV, which brings these decisions into Postgrace SQL. You can use a plain language condition while filtering or ranking rows. Imagine a support ticket table where you want messages suggesting that the customer is considering leaving. You can combine that semantic condition with ordinary SQL filters for the date or account. The extension sends row information to Jev, batches the judgments, and caches results. The database still does the querying around those judgments.

**12:19** · That means an existing ticket dashboard could gain a filter for cancellation intent. The user gets another way to query their data and the developer can combine it with the rest of the database logic. There are deployment constraints. This extension needs postgraql capabilities and privileges that many managed hosts don't provide and the selected data is sent to an external API but for a suitable environment it's an interesting experiment in making semantic questions available directly where the data lives.

**12:46** · There's also Zodv, which adds semantic checks to ZOD schemas. A normal schema can check that a field is a string or that a value fits a known structure.

**12:54** · This integration adds questions about the content, such as whether a category agrees with its description. Your code can then handle accepted, rejected, uncertain, or unavailable result. I like that uncertainty is part of the interface. If the service can't make the judgment, you don't have to pretend validation succeeded. You can send that case into another path and honer takes the idea into HTTP routing. You describe the kind of request a handler should receive and Jev judges whether an incoming request matches.

**13:24** · One example is serving a different documentation format to an AI client and a human browser.

**13:30** · It's explicitly experimental and every semantically routed request adds a model call. The author also says it shouldn't be used for authentication or authorization. These are small projects but they show where this is heading.

**13:42** · Developers are trying to fit model judgments into schemas, queries, routers, and command line tools that already exist. And of course, somebody had to give it a game. On Reddit, a developer used clawed code to build a Vampire Survivors mod and a Python controller powered by Jev. The mod sends game information to the controller every 250 milliseconds. The author also shared a very honest limitation. They hadn't managed to include obstacle information, so the character could get caught on walls or wander into a corner and die.

**14:09** · I think that's a great example to finish on because the failure tells you something useful. Fast decisions only help when the application supplies the information needed to make them. A browser agent needs the right controls.

**14:22** · A debugging agent needs useful hypothesis. And a game agent needs to know there's a wall in front of it. Now, let's talk about cost because that's a big reason developers are trying all of this. Typesafe's listed launch price is $42 per billion input tokens with no output token charge. That's about 4.2 per million input tokens. For a simple illustration, a million decisions averaging a,000 input tokens each would mean $42 in Jev input charges at that rate.

**14:48** · The actual bill also depends on retries, the planning or writing model, and any browser infrastructure you're using. Verscel's model page was also showing a free promotion ending September 25th, 2026 when I checked.

**15:01** · Recheck the current terms when you try it. Through Verscell's AI SDK, Jev uses the experimental evaluation API. So don't expect to select it as a normal chat model and have it write an app.

**15:12** · Personally, the use cases I'm most interested in are browser workers, better debugging checks, and targeted model or skill selection. Those solve frustrations people already have with coding agents. And you can compare the result against your existing workflow.

**15:25** · For example, I take one repetitive browser test or one debugging task. Add the jev step and check whether the agent finishes correctly with less time or cost. That's a much more useful test than counting how many decisions the model can make in isolation. Overall, it's pretty cool. Please share your thoughts below and subscribe to the channel. \[music\] I'll see you in the next video. Until then, bye.

**15:52** · \[music\] \[music\]
