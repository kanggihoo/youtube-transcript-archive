---
title: "Claude Code Templates: SIMPLEST WAY to MAKE CLAUDE CODE WAY BETTER!"
author: "AISeeKing"
site: "YouTube"
source: "https://www.youtube.com/watch?v=iikFLC2cMvU"
domain: "youtube.com"
language: "en"
description: "In this video, I’ll show you how to use Claude Code Templates to discover, inspect, and install agents, skills, commands, MCPs, hooks, and settings. We’ll bu..."
word_count: 2538
---

![](https://www.youtube.com/watch?v=iikFLC2cMvU)

In this video, I’ll show you how to use Claude Code Templates to discover, inspect, and install agents, skills, commands, MCPs, hooks, and settings. We’ll bu...

## Transcript

**0:00** · Hi. Welcome to another video. So, if you use Claude Code, you've probably seen people sharing agents, skills, custom commands, and all kinds of configurations. But, finding something useful, understanding what it does, and putting it in the right folder can become a project of its own.

**0:16** · Today, we're looking at Claude Code Templates, which you can browse at aitmpl.com.

**0:21** · It brings these components into a searchable catalog, and it gives you installation commands for adding them to your own setup. We're going to walk through the website, put together a small review and testing setup, and look at how you'd use it inside Claude Code.

**0:32** · Then, I'll show you some extras, including its analytics dashboard and conversation monitor. The part I like is that you can open the actual instructions before installing anything.

**0:41** · You can see what you're adding, decide whether it fits your project, and change it afterward. So, let's get right into it. First, a quick explanation of what this project actually provides. Claude Code Templates is a community project with a website and a command-line installer. The repository is on GitHub under Divilla7, and I'll link both the website and the repository below. The project is free and open source under the MIT license. Some bundled components come from other projects and keep their own licenses, so check the attribution if you're planning to redistribute something. Your Claude Code access still has its usual costs and limits.

**1:15** · And if a component connects to a paid external service, that service can charge separately. The free part here is the template collection and tooling. It doesn't include unlimited model usage.

**1:25** · Now, on the website, you can see the different categories in the sidebar.

**1:28** · There are skills, agents, commands, settings, hooks, and MCPs. You'll also see mods and plugins, plus links to trending, the documentation, and GitHub.

**1:36** · Let's make the main categories simple because choosing the right one is more useful than installing a bunch of random things.

**1:44** · An agent gives Claude a specialist role for a task.

**1:47** · That could be reviewing code, investigating an error, or working on a front end. Claude can delegate work to that agent, which has its own instructions and context. A skill package is instructions for a particular capability or workflow. Claude can load it when it's relevant, and many skills can also be called directly. A front-end design skill, for example, can provide guidance on typography, layout, and visual direction. A command gives you a reusable prompt that you invoke with a slash.

**2:14** · So, if you repeatedly ask Claude to generate tests, you can put that workflow behind a short command instead of typing the whole request again.

**2:22** · There's some overlap here. Current Claude code also supports slash invocation for skills, and existing command files still work. On this website, they're organized into separate catalog sections, which makes browsing them easier. MCPs connect Claude to tools and services. Settings change parts of its configuration. Hooks run actions at particular points in a Claude code session, such as after a tool finishes. For this walk-through, we'll start with an agent and a command.

**2:50** · That's enough to demonstrate the whole process without making the setup complicated. So, open the agent section.

**2:56** · You can search within the catalog, filter by category, and switch between grid and list views. There's also the search button at the top if you want to search across component types. Let's search for code reviewer.

**3:07** · Pay attention to the type shown in the result because similar names can appear under both agents and skills. Here, we want the agent in the development tools category. Open its page, and you get the description and install command, and a link to the source on GitHub. Below that, you can read the actual content in preview or code view. This is where I'd spend a minute clicking copy. The name tells you the general purpose, but the instructions tell you how the agent is supposed to work.

**3:32** · For this reviewer, the template covers things like correctness, maintainability, testing, and potential security issues. You can also inspect the tools it can use. That matters if you're expecting a review to leave your files untouched, and this is something I'd recommend doing for any component.

**3:48** · Check its assumptions.

**3:49** · Does it expect a particular framework?

**3:51** · Does it mention another agent?

**3:54** · Does it assume you have a tool installed? A template can be a useful starting point and still need a few edits for your project. Now, let's go back to the catalog and add code reviewer to the stack using the plus button on its card. The stack builder collects your selected components and creates a combined installation command, so you can choose a couple of things through the website and copy one command for the setup. Next, open commands and search for generate tests. The one we're using is in the testing category. Open it and you'll see that it accepts a source file or component as its target.

**4:24** · Its instructions ask Claude to inspect the project's testing setup, follow existing patterns, and cover relevant behavior and error cases. That's useful because the same testing approach won't fit every project. Now we have code reviewer and generate tests, and the installation command contains both selections. Before running it, you'll need Node.js and npm available for this installer, plus a working Claude code setup. You can check Node with node {dash} {dash} version and npm with npm {dash} {dash} version. Open your terminal in the project where you want these components.

**4:53** · The folder matters because we're adding project-level configuration. I'd use a small project you're comfortable experimenting with for the first run. Now, copy the command from stack builder. It starts with npx claude-code-templates@latest.

**5:08** · Then it uses {dash} {dash} agent followed by development-tools/code-reviewer.

**5:14** · After that, it uses {dash} {dash} command followed by testing/generate-tests.

**5:20** · I'll include the exact copyable command with the video notes, so you don't have to reconstruct it from the narration.

**5:25** · Run it and follow the prompts. Some examples in the repository add the {dash} {dash} yes flag to skip confirmations. For a first walk-through, leaving the prompts visible helps you follow what the installer is doing. Once installation finishes, check the files in your project. The reviewer should be under {dot} claude agents in a file called code-reviewer.md.

**5:42** · The testing command should be under {dot} claude commands in generate-tests.md.

**5:46** · Open those files. These are the instructions Claude will use and you can edit them. If your team has specific review priorities or testing conventions, this gives you a place to make the workflow fit those expectations. Now, open Claude code in that same project. If it was already running before you created these folders, restart it so the new setup is available. Let's use a simple example.

**6:02** · Suppose you have a React project with a sign-up form and you want to review that component before adding more features.

**6:08** · Type the @ symbol and select the code reviewer agent from Claude's suggestions. Then give it a focused request, something like "Review the sign-up form for validation problems, broken interactions, and missing error handling. Report concrete findings with file locations and don't edit the application files."

**6:24** · That gives the review a clear target.

**6:26** · We're looking for problems in this component with enough detail to inspect each one. When the response comes back, check the findings against the code.

**6:33** · Can you reproduce the problem?

**6:35** · Is the proposed change relevant to this application?

**6:38** · If it flags an empty input case, try that case yourself. I wouldn't assume that a longer report is a better report.

**6:45** · One reproducible bug can be more useful than 20 general suggestions. And if it doesn't find a problem, that's also a possible result. Now, let's use the testing command on the same component.

**6:54** · Type /generate-tests, then provide the path to your sign-up form.

**6:58** · You can add a little context as well.

**7:00** · Ask it to use the existing test framework and cover empty inputs, invalid values, successful submission, and a failed request. Pick the cases that actually apply to your form. The command supplies the reusable workflow and your request supplies the target and requirements. That's the convenience here. You can reuse the same starting point when you move to another component. After Claude writes the tests, run them using your project's test command. Read failures before changing anything. A failing test might expose an application bug or the generated test might have made an incorrect assumption. Then open the app and try the form in the browser.

**7:28** · Submit it empty, enter invalid data, and check the success and failure states that your project supports.

**7:35** · The useful result is a behavior you can demonstrate and a test that checks it.

**7:39** · So, that's a small workflow you can build from the catalog. Choose a reviewer, add a testing command, and use both on a specific part of your project.

**7:46** · Now, let's come to skills because this is another interesting part of the website. For example, search for front-end design in the creative design category. Open the page and read through its guidance. This one focuses on making deliberate visual choices when you're creating or changing an interface. The install command uses the same package with {dash} {dash} skill followed by creative {dash} design {slash} front-end {dash} design. A project skill goes inside.claud skills in its own folder with a file called s k i l l in capitals {dot} m d.

**8:17** · Skills can also include supporting files. So, it's worth looking at the whole folder when you're inspecting one.

**8:23** · Once it's available in Claud code, you can invoke {slash} front-end {dash} design and describe the task. For example, improve the visual hierarchy of this sign-up page, keep the existing validation behavior, and make the layout work on a narrow screen. Give it enough direction to work with. Mention the audience, the look you're going for, and the constraints you want preserved. The skill gives Claud additional guidance, but your brief still matters.

**8:46** · And I'd try that as a separate task after the review and testing flow.

**8:50** · It makes it easier to see which changes came from which request, and you can check that the form still behaves correctly afterward. Now, what about MCPs? Open that category when you need Claud to interact with an external tool or service.

**9:03** · Read the configuration and set up requirements before installing it.

**9:06** · Depending on the integration, you may need an account, credentials, or another program running locally. Adding an MCP template puts the configuration in place. You still need to complete whatever setup that provider requires, and check the connection inside Claud code. I'd only add an integration when I have a specific task for it. Settings and hooks are worth browsing, too. A setting might adjust something like a timeout. A hook can automate a repeated action at a particular event in the session. For example, you might want formatting to happen after an edit.

**9:33** · Check which event the hook uses, what command it runs, and whether your project already has the required formatter. These are configurations you should understand before making them part of every session. Now, there's more in this project than the component catalog. The repository also includes tools for inspecting your Claude Code setup and activity. The first one is the health check.

**9:51** · Run NPX Claude-Code-Templates at latest, followed by --health-check.

**9:59** · It checks parts of the local setup and reports diagnostics and recommendations.

**10:03** · If you're having trouble getting started, this is a useful place to look.

**10:07** · Read the individual results because a general recommendation may not apply to your particular environment.

**10:13** · If it offers to run project setup afterward, you can decline when you only want the diagnostic report. Next is the analytics dashboard.

**10:20** · Use the same package command with --analytics.

**10:23** · This launches a browser dashboard for inspecting Claude Code session activity.

**10:27** · Depending on the available local history, you can review token usage, conversations, sessions, and agent activity.

**10:34** · I like the idea of having that information in one place, especially when you're working across several projects.

**10:39** · You'll need some saved session history for these views to be useful. So, a fresh setup might look fairly empty.

**10:45** · There's also a conversation monitor.

**10:46** · Start it with --chats, and you get a browser interface for viewing Claude conversations and following responses as they arrive. That could be useful while a longer task is running. You can keep the conversation view open and check progress without constantly returning to the terminal. Its beta session analytics also includes model information and estimated costs. Treat those figures as estimates from recorded usage rather than an invoice or your remaining subscription allowance.

**11:10** · The project also documents remote access through a tunnel. For this walk-through, the local view is enough.

**11:16** · If you use remote access, pay attention to who can open the URL because the conversation can contain your code and prompts. Finally, --plugins opens a dashboard for inspecting Claude Code plugins and marketplaces. If you've already built up a collection of plugins, that's another part of the project you can explore. Overall, I think the strongest reason to use Cloud Code Templates is the combination of discovery and easy setup.

**11:40** · You can find a workflow, inspect its instructions, and add a small selection to your project without manually organizing everything from scratch. The thing I'd be careful about is assuming that every template fits every code base. Some are broad, some are opinionated, and some expect tools or workflows you might not use. Read them and adjust them. I'd start with one task you repeat regularly. Maybe that's reviewing a component, generating tests, or improving an interface. Install what you need for that task, try it, and keep the parts that help.

**12:11** · For students or anyone watching their budget, the collection being free is pretty good.

**12:17** · Just keep the model usage and any connected services in mind when you're trying larger workflows. I'll leave the website, GitHub repository, and the commands from this walk-through in the description so you can explore them yourself. Overall, it's pretty cool.

**12:30** · Please share your thoughts below and subscribe to the channel.

**12:33** · \[music\] I'll see you in the next video. Until then, bye.

**12:39** · \[music\] \[music\]
