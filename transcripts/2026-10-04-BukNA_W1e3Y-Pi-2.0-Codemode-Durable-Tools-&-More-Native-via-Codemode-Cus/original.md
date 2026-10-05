---
title: "Pi 2.0 (Codemode, Durable Tools & More!): Native via Codemode, Custom Model Routing & Pi Durable"
author: "AICodeKing"
site: "YouTube"
published: 2026-10-04T02:15:19-07:00
source: "https://www.youtube.com/watch?v=BukNA_W1e3Y"
domain: "youtube.com"
language: "en"
description: "In this video, I'll go through the Pi 1.0 release from Earendil and the new Pi Durable package. We'll start with native MCP support through Codemode, where t..."
word_count: 3142
---

![](https://www.youtube.com/watch?v=BukNA_W1e3Y)

## Transcript

**0:02** · \[music\] Hi, welcome to another video. So, PI 1.0 is out and there is quite a bit to talk about here. We have native MCP support through code mode, custom model routing, improvements to how tools and prompts enter the conversation, and a refresh terminal interface. Arendelle also released PI durable, which takes some of these ideas into applications that need to keep working across restarts. The announcement came out on October 1st.

**0:29** · Some of these capabilities arrived during the releases leading up to 1.0.

**0:33** · So, this is the full launch picture, including the smaller changes in the final release. So, let's get right into it. If you're new to PI, it is an open source agent harness. That means it handles the conversation, gives the model tools, runs those tools, and brings the results back so the model can continue working. You can use it from the terminal to inspect a project, edit files, run commands, or work through tasks involving documents and data. You connect the model you want to use. A lot of PI's appeal comes from customization.

**1:01** · You can add skills and extensions, change the interface, and build your own workflows around the agent. And I like that approach. When you spend a lot of time with a coding tool, eventually you run into something you wish it handled differently. Being able to change that behavior yourself is useful. 1.0 builds on that idea. The interesting part is how much control these updates give you over the work happening inside a session. Now the first big change is MCP because PI previously made a point of not including native MCP support. The team has explained why they changed their minds.

**1:31** · They wanted a better way to combine tool calls and the infrastructure for that also turned out to be useful for things like classifiers. Their criticism of MCP was partly about how integrations dump tool descriptions and large text results into the model's context. They now favor discovering tools when needed and getting structured data that a script can work with. That makes sense to me.

**1:54** · Imagine looking through a busy issue tracker. You probably want to collect the relevant issues, filter them, and then read the useful results. Making the main model read every field from every intermediate response is an expensive way to get there. Pi's answer is to put a JavaScript orchestration environment around those calls. That is where code mode comes in. With code mode, the agent writes a small JavaScript program that can call tools, combine the results, and return the useful output. For example, suppose you want to report on a project's recent activity.

**2:22** · A script could fetch several independent pieces of information in parallel, group the results, and send back a compact report.

**2:29** · The practical benefit is that the intermediate data can stay inside the script. You control how much of it comes back into the conversation. Code mode also has explicit storage helpers for JSON data that should survive between calls. Ordinary JavaScript variables do not automatically stay alive between separate executions. And there is a distinction here. The JavaScript runs in a sandbox, but the tools it calls still have their own permissions. A shell tool can still change files and external integration can still perform an action.

**2:59** · Also, if a script fails halfway through, tool calls that already completed are not automatically undone. So, the workflow still needs sensible error handling. For MCP setup, PI supports local servers over standard input and output and remote servers over HTTP.

**3:14** · Configuration can live at the user level or inside a project. MCP servers using code mode exposure enable it automatically. That is the default, so their tools are discovered through code mode instead of all being placed directly in front of the model. You can choose a different exposure mode for tools you want the model to see immediately. There is also OOTH support for servers that need account signin. So if your workflow already depends on MCP integrations, this is a meaningful change. You can bring those integrations into PI and decide how the agent discovers and combines them.

**3:45** · I would start with one integration you already use and give it a bounded task.

**3:50** · Something like collecting unresolved issues for a release that gives you a useful result to inspect before you build a more complicated workflow around it. Code mode also gives the agent access to specialist models, including Jev and image generation models. Jev is a classifier. You give it structured state and questions and it returns choices, yes or no answers or scores with probabilities. For example, a workflow could ask whether an issue describes a bug or a feature request.

**4:18** · Those probabilities are still model judgments. So, I would check a sample before relying on the classification.

**4:24** · Image models can take a text prompt and optional reference images. Code mode can call them using the session's configured credentials and attach the generated images to its result. These specialist models do not appear in the normal chat model picker. The main agent reaches them through code mode and extensions can call them too. Image and classifier usage contributes to session accounting when reported. However, missing catalog pricing can mean usage appears without a dollar cost. Generated images also are not automatically saved to disk.

**4:49** · So, if you want an asset file for your project, includes saving that file in the workflow. Now, let's talk about virtual models. I think this is one of the most useful additions for people who already switch between several models. An extension can register one selectable model that acts as a router. Before each request, it chooses the physical model that should handle that request. You could create a policy that uses a stronger model for difficult planning and a cheaper model for routine implementation.

**5:19** · The routing logic can inspect the conversation and choose an appropriate thinking level too. PI keeps the actual responding model and its usage visible so you can inspect what happened underneath your router, but the policy comes from your extension. You still need to decide what a good routing decision looks like. There are trade-offs as well. Changing physical models can lose prompt cache reuse, and a classifier used to make routing decisions adds latency. I would compare a router against a single model baseline on real tasks.

**5:48** · A cheaper request is only useful if the whole job still finishes correctly and costs less. The launch demo shows PI writing an extension that plans with Claude Opus and implements with GPT with Jev deciding when to switch. After reloading and selecting the custom router, the demo moves from Opus to GPT 6 Luna for implementation.

**6:10** · It then shows the session's model costs and cache usage. That is their demonstration and it gives us a concrete example of how these pieces fit together.

**6:19** · It would be interesting to test how consistently that routing decision works across different coding tasks. The next update is deferred tool loading. When you add more integrations, you also add more tool descriptions and argument definitions. Loading all of that upfront uses context before the agent has even started your task. PI now lets extension authors distinguish between tools that are declared directly, tools reached through code mode, and deferred tools that search can find and activate. Some tools can also be restricted to direct model calls, which is useful for operations that coordinate other tools or need user interaction.

**6:51** · Think about a project with several integrations installed. A small local code edit should not need detailed instructions for every unrelated service. Deferred loading gives you a way to keep those capabilities available while bringing in their declarations when needed. The quality of the tool description still matters because the agent needs to find the right operation. I would test discovery with ordinary requests, not just prompts that already name the exact tool. So, this is a practical context management improvement, especially as your setup grows.

**7:20** · Now, cache warming is another update I like, especially for anthropic workflows with a large amount of contact. A long tool run can outlast a prompt cache. Pi can issue a refresh to keep an eligible cache warm when it estimates that doing so is worthwhile.

**7:36** · The default streaming setting applies during active runs. You can also enable idle warming between runs or turn warming off. PI requires cash lifetime information for the model and it only warms when it estimates at least 5 cents in avoided cash miss cost. That refresh still uses resources. PI includes the usage in the session totals while keeping the refresh out of the model's conversation context. You can inspect the next warming decision through / session. So I would look at the actual session accounting before deciding whether idle warming makes sense for my workload.

**8:06** · Someone who comes back every few minutes has a different usage pattern from someone who leaves the session open all weekend. There is also support for system messages in the middle of a conversation. These are the harness's instructions and tool definitions. A session starts with its initial configuration and later system messages can record changes to individual instruction sections or available tools. For example, imagine an extension changes the agents role or adds a tool after work has started. PI can record that change at the point where it happened.

**8:35** · When you resume or navigate a branch, it can reconstruct the corresponding prompt and tool state from the transcript. I like this because a long conversation can contain decisions made under different instructions. Keeping track of those changes makes the history more useful.

**8:50** · It also helps with prompt caching on supported models. PI can preserve an earlier cache prefix while representing later changes in the conversation. That support depends on the model and provider. I would treat cache preservation as a supported capability to check for your setup rather than assume every endpoint handles it identically. Now the terminal gets a new default theme called system pi reads the terminals foreground background and ani colors then builds its interface around that palette. It also adjusts contrast so the text remains readable.

**9:20** · If your terminal changes between light and dark pi can query the colors again and update the theme. There are fallbacks for terminals that report only part of that information and you can still select the built-in light or dark themes or use your own. You change the theme through / settings. This is a smaller feature, but I appreciate it. If I have already configured a terminal that is comfortable to read for hours, I want the tools inside it to fit that setup.

**9:46** · You should spend your time checking the agents work, not fixing a color combination that makes the output difficult to read. The other visible change is that full screen mode is now the default. The prompt editor and status area stay fixed while the conversation scrolls inside the terminal window. That keeps the input area available while you look through earlier output. If you prefer normal terminal scroll back, regular mode is still available through slash settings. You can also start pi with the--2e mode flag followed by regular. So you can try the new default and switch back if it does not fit how you work.

**10:18** · For me, this is the kind of interface choice where both options make sense. When I am having a long conversation with an agent, a fixed editor is useful. When I want everything in my usual terminal history, regular mode is convenient. There are a few more changes in the final 1.0 release. The team reports that a GPT 5.6 request with the default tools and code mode drops from about 5,300 prompt tokens to 3,300.

**10:43** · That is roughly 40% in that specific setup. So, it should not be read as a 40% reduction in every task's total cost. Code mode errors now provide more useful recovery hints, including suggestions for incorrect tool names and guidance on malformed arguments. Radius signin is available through /lo with an option to configure its MCP server.

**11:03** · Anthropic also gets a copycode login flow for setups where the browser runs on another machine. MCP authentication receives stronger issuer checks, support for overwriting authorization server metadata, separate credentials by server name and URL, and better handling of additional permission requests. There is also a quieter startup option that keeps the version and keyboard hints visible while hiding the longer resource listing. Those are useful improvements for people who use PI everyday. Anyway, now let's come to PI durable because this deserves its own explanation.

**11:33** · Pi durable is an experimental foundation for building applications with long running agent conversations. It is a separate package alongside the coding agent. A single harness can run multiple conversations concurrently. Each conversation can have its own model, tools, instructions, and working directory. You can fork a conversation at a particular point and continue independently from there. Multiple clients can connect to the same harness, follow its state, and steer work or add follow-ups.

**12:01** · It also supports application data as typed JSON documents that can be committed together with transcript updates. That opens up useful possibilities for an application where the conversation and its work need to stay coordinated. For example, I could imagine a support workspace where several people follow an investigation and ask related questions in separate threads. The developer would still build that product experience, but PI durable provides machinery underneath it. The durability comes from storing checkpoints for the work.

**12:29** · After a process stops, a new process can reopen the same persistent storage and resume a unfinished tasks. A tool interrupted during execution is only automatically replayed if it declares that replay is safe. Otherwise, the agent receives information about the interruption and the output committed so far. That distinction matters. Retrying a search and retrying an action that changed an external system can have very different consequences. Reusing the same request ID prevents a retrieded submission from being admitted twice.

**13:01** · That does not make every external action automatically happen exactly once. PI durable offers memory, SQLite, and JSONL storage.

**13:11** · Memory storage does not survive a restart, so the storage choice matters.

**13:16** · There are also deployment limits. One process owns a storage backend at a time, and the default SQLite configuration does not guarantee that the newest commits survive a host or power failure. and the APIs are experimental. I would account for changes if I were building a product on top of it. Longunning conversations still have model context limits. The supplied compaction example shows summarization and recovery from context overflow. So durability does not mean unlimited model memory.

**13:42** · There is also an example of persistent background sub aents with their own conversations status and messaging while the main agent stays available. Those workflows are implemented using the underlying conversation and task primitives.

**13:56** · Developers choose the behavior they need. Another example shows updating an extension while an existing tool call finishes on its original implementation.

**14:05** · Later calls use the replacement. I think that is a useful direction for agents that need to stay available while their application evolves. But these are building blocks and example implementations. So I would expect engineering work before turning them into a dependable service. So if you want to try the regular PI coding agent, start at pi.dev and use the installer for your operating system. There is also an npm installation option that requires node 22.19 or newer and the current package is under the Irandil Works organization. After installing, run pi- version to check the version.

**14:38** · Open your project folder. Run pi and use /lo to connect a supported account or API key.

**14:47** · then use /model to choose the model you want. For a first task, I would ask it to explain the project structure and how to run its checks. You can review that answer before asking it to make changes.

**14:58** · PI durable has its own npm package for developers building applications. You do not need to install it just to use the terminal coding agent. Now, on pricing, both PI and PI durable are MIT licensed.

**15:10** · You still need to account for the models and services you connect. An API bill, a supported subscription, local hardware, or hosting for your application can all be part of the cost. Open- source software gives you control over the tool, but you still have to decide how to pay for the work it performs. I would pay particular attention to the full session cost when combining a main model, a classifier, image generation, and a custom router. It is easy to focus on one cheap component and miss the cost of the complete workflow. My favorite part of this release is the control over how much work reaches the main model.

**15:42** · You can discover tools as needed, process intermediate results in code, and define your own model routing. That gives you several things to measure and improve. Does the answer stay accurate?

**15:53** · Does the agent finish with fewer retries? Does the total cost go down?

**15:57** · Those are the tests I would use to decide whether a custom workflow is worth keeping. PI still leaves things like a dedicated plan mode and sub agent workflows to extensions or packages. If you enjoy configuring your tools, that flexibility is a big part of the appeal.

**16:10** · If you want a particular workflow ready immediately, check that it is available before switching. Overall, I think 1.0 makes PI much more interesting for people who want to shape their coding agent. Native MCP removes a practical limitation and PI durable gives application developers a separate way to explore longer running work. Anyway, let me know your thoughts in the comments.

**16:30** · Are you more interested in code mode, the custom model routing, or building something with PI durable? Overall, it's pretty cool. Anyway, let me know your thoughts in the comments. \[music\] If you like this video, consider donating through the super thanks option or becoming a member by clicking the join button. Also, give this video a \[music\] thumbs up and subscribe to my channel. I'll see you in the next one. Until then, bye.

**16:52** · \[music\] \[music\]
