---
title: "Agent-Native + Claude Code: Finally! Apps Your AI Agent Can Actually Work In (Open Source)"
author: "AICodeKing"
site: "YouTube"
source: "https://www.youtube.com/watch?v=jouKaJ4qlAg"
domain: "youtube.com"
language: "en"
description: "Agent-Native: https://www.agent-native.com/GitHub: https://github.com/BuilderIO/agent-nativeSlides docs: https://www.agent-native.com/docs/template-slides/In..."
word_count: 2890
---

![](https://www.youtube.com/watch?v=jouKaJ4qlAg)

Agent-Native: https://www.agent-native.com/GitHub: https://github.com/BuilderIO/agent-nativeSlides docs: https://www.agent-native.com/docs/template-slides/In...

## Transcript

**0:02** · Hi. Welcome to another video.

**0:05** · So, let's say you ask an AI agent to create a presentation.

**0:10** · It gives you a draft, but you want to change a heading, move a slide, and make one section more technical.

**0:16** · Those are pretty normal things to do when you're working on a presentation.

**0:19** · Now, you could keep describing every little change in chat, but sometimes you just want to click the text and fix it yourself. And when you go back to the agent, you want it to understand the presentation as it exists now, including the changes you just made.

**0:32** · That's what we're going to explore today with Agent Native, an open-source TypeScript framework from Builder, for building agents with interactive interfaces. You can use React, bring your own model, keep the application code in your own repository, and deploy on a supported host of your choice.

**0:46** · We're going to walk through their Slides app, create a small presentation, manually edit it, and then ask the agent to continue from that updated version.

**0:55** · After that, I'll show you how to start your own copy and where the actions and application context fit into the code.

**1:01** · So, let's get right into it. First, open the Agent Native website, go to Slides, and click Create a Deck.

**1:07** · Once you're signed in, you may get an optional question about your role.

**1:11** · You can answer it or choose Skip for now. Next comes the model setup. The screen offers usebuilder.io, or you can skip that option and configure your own provider. Signing in and connecting a model are separate steps, so check this before you try to generate anything. For this walk-through, the connected provider is Open Router in Model Settings. Also, check that a default model has been selected. If the composer still says Connect Agent or Connect Keys, go back and check the connection and model settings before sending a prompt. Now, this is the home screen.

**1:40** · You can describe a presentation directly in the large prompt box.

**1:44** · There's also an import menu with PDF, Google Slides, and PPT options. And below that, you can browse templates.

**1:51** · Let's take a quick look at one of those first. Opening Launch Keynote gives us a seven-slide deck. I'm naming this AI Code King walkthrough demo, so it's easy to find again.

**2:01** · On its first slide, the heading says meet Lumen. Double-click the heading and you get a text editor with formatting controls. I'm replacing that title with Agent UI. The longer wording I tried overflowed this template's fixed layout, so keeping an eye on the canvas matters.

**2:14** · There's the updated title, and it stays there when I reopen the deck. I can also drag a thumbnail in the filmstrip to move a slide. For example, I moved the three ideas slide ahead of the sample benchmark slide. So, you can start from an existing layout and make ordinary manual edits before involving the agent.

**2:31** · The sample numbers and placeholder copy still need replacing before this could become a real presentation. Once a model is available, let's go back to decks and use the prompt box for our own example.

**2:42** · Now, I want to make a short presentation for developers about adding an AI agent to a content workflow. This gives us something specific to work with, and we can keep the example small enough to inspect properly.

**2:53** · I'm going to give it this prompt. Create a six-slide presentation for React developers about building an AI content assistant. Cover the problem, a proposed workflow, shared actions, human review, a practical example, and a closing takeaway. Use short headings, a dark background, and one accent color. Keep the language practical and do not invent statistics. Let's send it and see. As the deck builds, watch the editor.

**3:17** · The documented workflow brings slides into the presentation as the agent creates them, so you can follow the work in the app itself.

**3:25** · Once generation finishes, let's click through the slides. I'm looking at whether it followed the outline, whether the text fits, and whether the explanation would make sense to somebody who hasn't used this framework before.

**3:36** · This is where I'd spend a little time before asking for more changes. A slide can look polished and still have a weak explanation. For example, if the shared action slide just says that everything is connected, I'd want an actual example of what gets connected. Now, let's make a change ourselves. Open the human review slide, double-click its heading, and replace it with always review before publishing. I'm choosing that wording because I want a clear point of view in this presentation.

**3:58** · The agent can help prepare the work, but the person using the app should be able to inspect it and decide when it's ready.

**4:05** · Next, drag that slide in the filmstrip so it comes immediately after the proposed workflow. That puts the review step earlier in the story before we get into the implementation details.

**4:15** · So, we've changed both the wording and the order through the interface. Let those edits save before continuing. Now, keep the review slide open and go back to the agent. Here's the next prompt.

**4:26** · Make this slide more technical for a React developer. Keep the heading I just edited exactly as it is. Replace the body with three concise points about validating inputs, checking permissions, and reviewing a draft before publishing.

**4:38** · Leave the other slides unchanged. Notice that I'm referring to this slide.

**4:42** · I'm also referring to the heading I changed manually without pasting that heading back into the conversation.

**4:48** · Let's send it and check the result. The things to check here are very specific.

**4:53** · Did it edit the slide that's currently open?

**4:55** · Did it preserve the new heading? And did the slide stay in the position where we put it? Those details matter because they tell us whether the agent is working with the current application. If it brings back the old heading or changes a different slide, that's something we need to correct before moving on. For an even more targeted edit, select a sentence in the slide and choose revise with AI from the bubble menu. That opens a small prompt box showing the selected text with a sent agent button. Ask it to explain that sentence using a content approval example in no more than 20 words, then send the request.

**5:25** · That selection gives the request a clear target.

**5:30** · When I say make this clearer, the app has a way to tell the agent which piece of text I'm talking about.

**5:36** · I think this is a useful interaction for everyday work. You can delegate a larger draft, handle a small wording change directly, and then hand a specific part back to the agent. You decide how much help you need at each point. Now, let's use the same deck for one more refinement. Open the practical example slide and ask the agent to describe a workflow where it drafts a video description, the creator edits it, and the agent then shortens that edited version while preserving the creator's wording where possible. I'm keeping this example close to something I would actually want from a content tool.

**6:05** · There are times when a sentence is technically fine, but it doesn't sound like you.

**6:11** · Being able to edit that sentence yourself is valuable. Once the revision is ready, read it on the slide.

**6:17** · Check that it describes a draft and a review step, and that it hasn't quietly turned our example into automatic publishing.

**6:24** · Then click present and go through the deck from the beginning.

**6:27** · Check the new slide order, the heading we changed, and the technical explanation. This is also a good time to catch text that's too small, or a slide that has become too crowded. If you want to take the presentation into another editor, open the three-dot more menu, and then export.

**6:42** · The menu has download as HTML, export as PDF, export as PPTX, and export to Google Slides. I'd still check any exported file because fonts and layouts can render differently between editors.

**6:55** · Anyway, now let's look at how you can run and customize this yourself. You'll need Node version 22.22 or later, and PNPM. Open your terminal in the folder where you keep your projects. For the slide starter, run NPX {dash} {dash} yes at agent-native/core at latest. create-my-dash-slides {dash} {dash} standalone {dash} {dash} template slides. I'll put the exact command in the description so you can copy it.

**7:19** · Then run CD my-dash-slides.

**7:21** · If PNPM isn't available, the getting started guide uses corepack enable. Run PNPM install followed by PNPM dev. Open the local address printed in your terminal.

**7:32** · The local onboarding offers continue as local dev, and you'll then need to connect a model.

**7:36** · The documented choices include builder, your own provider connection, or a local Ollama model.

**7:41** · The framework itself is free and open source. Model usage and the infrastructure you choose can still have costs.

**7:47** · Builders setup also offers free credits, but check the allowance available when you sign in. For this first experiment, I'd use a small deck and avoid generating unnecessary images. That makes it easier to concentrate on the editing workflow and understand what you're spending. Now, open the generated project in your code editor.

**8:02** · Let's look at the Slides developer guide alongside it. Starting with the simplified update slide action.

**8:08** · The example uses a function called define action.

**8:12** · Its description explains the operation, its schema defines the inputs, and its run function contains the code that performs the edit. For a slide update, those inputs include the deck ID and slide ID, along with either a targeted replacement or new slide content. The example checks editor access before changing the deck and notifies connected clients after saving. So, this gives the agent a defined operation it can call against a real presentation. You can inspect that operation, change its behavior, and decide what it is allowed to do.

**8:40** · Across the framework, React can call actions through hooks, such as use action query for reads, and use action mutation for changes.

**8:49** · Those actions can also be made available through the agent HTTP and MCP. For your own app, imagine a rename draft action.

**8:56** · A text field in the interface could call it when the user saves the title. The agent could call it when the user asks for a different title.

**9:03** · You maintain the validation and rename logic in that shared action.

**9:07** · That would also give you one place to enforce a rule such as rejecting an empty title. If you later change the rule, both callers can use the updated behavior.

**9:14** · There's a useful implementation detail in Slides though. Its browser editor sends granular editing operations through a patch deck action, while the agent also has dedicated actions such as update slide. These operations share the same underlying deck and locking mechanism. So, when you're inspecting the source, look at how the actual operations connect.

**9:32** · Different editing controls can need different inputs while still working against the same application data.

**9:38** · Now, the next question is how the agent knows what this slide means. Open the context awareness documentation.

**9:44** · The interface supplies information such as the current view and selection.

**9:48** · And a view screen action can use that information to fetch the relevant records.

**9:52** · In a presentation, that context can identify the deck you're working on and the slide or element you've selected. In a content editor, you might supply the current draft and the paragraph being edited. As a developer, you need to wire up the context that matters for your app. I'd start with a few useful IDs and the current selection, then make sure the agent can retrieve the corresponding content. For example, if somebody has selected a video description and asks to shorten it, I want that request tied to the selected draft. Having the agent guess from several similarly named documents would be frustrating.

**10:23** · You can check that behavior directly while developing.

**10:28** · Open one draft, make a manual change, and ask the agent to summarize the current version.

**10:34** · Then switch to another draft and repeat the request. The response should follow the object you've actually opened. That gives you a practical way to evaluate the context layer before you build a much larger workflow around it. The framework also supports shared database back data. That lets the UI and agent work with the same stored records, while application state describes things like the current selection. Those two pieces serve different purposes and both are useful in this kind of editor.

**11:00** · Personally, I'd start by customizing a single workflow in one of the examples.

**11:04** · For slides, that could be a repeatable presentation format for your channel.

**11:09** · For a content app, it could be drafting and revising descriptions. Choose one operation that you can perform both manually and through the agent. Then check what happens when you alternate between them.

**11:20** · Does the agent preserve the human edit?

**11:22** · Does the interface show the latest result? Can you recover if the revision goes in the wrong direction? Those are the details I'd want to get right before adding more capabilities.

**11:32** · And because you have the source code, you can also use something like Claude Code or Codex to customize the application itself.

**11:39** · This is where it gets pretty interesting.

**11:42** · Open the generated project folder in your coding agent and ask it to inspect the existing structure first, then describe the change you want in normal language. For example, I could say, "Add a review checklist to each presentation.

**11:53** · Let me mark the content design and technical accuracy as reviewed through the interface. Save those choices with the deck and let the embedded agent read and update the same checklist through shared actions.

**12:04** · Follow the existing patterns in this project." So, now we're giving the coding agent a specific feature to build, including how it should work for both the person using the interface and the agent inside the app. Once it makes the changes, run the app locally and check the result.

**12:18** · Tick an item yourself, then ask the embedded agent which checks are still incomplete.

**12:24** · That gives you a simple way to see whether both sides are working with the same saved information, and you can keep refining it.

**12:30** · Move the checklist beside the slide preview, make it more compact, or add a review status to the deck list. Describe what you want, inspect the changes, and test the workflow again. Personally, I think this makes the open-source part much more useful. You have an existing application to start from, and a coding agent can help you adapt it to the way you actually work.

**12:50** · Now, there are some limitations to keep in mind. The example apps are labeled alpha, and connecting an agent to an editor doesn't guarantee that every edit will be good. You'll still need to evaluate the model, the prompts, and the way your actions handle changes. And if your entire use case is asking a question and reading a short answer, a simple chat interface may already do the job. I think this approach becomes more useful when people need to browse, select, edit, and review the work over several rounds. A presentation is a good example because the order, layout, and exact wording all matter.

**13:21** · A content calendar or a document editor could benefit for similar reasons.

**13:25** · What I like about the architecture is that it gives you concrete places to work on those interactions.

**13:30** · You have application actions to inspect, data to update, and context to pass from the interface.

**13:36** · That makes the workflow something you can build and evaluate step-by-step. So, if you want to try this, open the Agent Native website through the link in the description. Start with an existing app, make something small, edit it yourself, and ask the agent to continue. Then, open the source and customize the part that would make it useful for your own workflow. Overall, it's a pretty cool.

**13:55** · Anyway, let me know your thoughts in the comments. If you like this video, consider donating through the Super Thanks option or becoming a member by clicking the join button. Also, give this video a thumbs up and subscribe to my channel. I'll see you in the next one. Until then, bye.
