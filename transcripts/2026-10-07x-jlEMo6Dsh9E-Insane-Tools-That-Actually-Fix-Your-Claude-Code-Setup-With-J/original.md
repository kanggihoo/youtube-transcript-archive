---
title: "Insane Tools That Actually Fix Your Claude Code Setup With Jev"
author: "AI LABS"
site: "YouTube"
source: "https://www.youtube.com/watch?v=jlEMo6Dsh9E"
domain: "youtube.com"
language: "en"
description: "Jev with Claude Code does more with the right tools. We tested every Jev AI tool we found and kept the 8 best Jev use cases. What is Jev? Jev, TypeSafe AI's ..."
word_count: 3175
---

![](https://www.youtube.com/watch?v=jlEMo6Dsh9E)

Jev with Claude Code does more with the right tools. We tested every Jev AI tool we found and kept the 8 best Jev use cases. What is Jev? Jev, TypeSafe AI's ...

## Transcript

**0:00** · Jev with Claude Code lets you do a lot more than Claude Code can on its own.

**0:04** · And to make that even better, there are a lot of tools out there, but most of the tools don't live up to their promise the moment you put them to use. So, we put every one of them to the test and found eight tools that actually make a real difference to your workflow with Jev. One of those makes sure that Claude doesn't mark a task as done before Claude has actually finished it. Another one fixes the problem you have when you're prompting Claude. There's also a tool that basically tells the main reason why your site isn't showing up in search results. If this is your first time, we're a software company and this is our channel, AIABs.

**0:34** · And in this video, we're going to go over all the tools we found, how each one actually helps your setup, and how to use each one of them. But before we start with the first tool, we're not going to cover what Jev is or how to set it up because we already have a full video on that.

**0:50** · So, if you need it, you can go ahead and give that one a watch. Now, let's get into our first tool. When Claude works on its own, the first problem is dangerous commands. To handle them, Claude Code already has a mode called auto mode. It stops Claude from running dangerous commands, but it lets Claude run the safe ones without asking you.

**1:08** · The first tool is Toolgate, and it basically does the same job, but it's stricter than auto mode. This is because before Claude takes any action, toolgate asks Jev whether that action is allowed.

**1:18** · If Jev says yes, Claude runs the action, but if Jev says no, toolgate blocks it.

**1:22** · This tool works with any provider that offers jev, so you can use types safe's own API key or a key from open router or versal's AI gateway as well. Toolgate blocks any action that changes something in a way you can't undo. It also blocks prompt injection attacks and any downloaded tool that tries to send your data to an outside server. And Toolgate doesn't let Claude use permissions you never gave it, like switching to the admin mode that can change anything on your computer. On top of that, toolgate also checks whether Claude is about to do something outside the task you gave it.

**1:53** · And if you said you'd make a decision yourself, Claude has to leave that decision to you. To use Toolate, the first step is to copy this install command and run it in your terminal.

**2:02** · Once toolgate is installed, you add your API key with the key command. If you're using Typesafe's key, that command works as it is. But if you're using Open Router or another provider, you would need to copy the correct name of your provider from the repo. Then run that command in your terminal so your terminal has the key. After that you run the toolgate init command. It connects toolgate to claude code and saves the blocking rules and your API key in a folder. That way toolgate can read them the next time you open claude code. Once you open claude code and give Claude any task, Toolgate starts working.

**2:32** · To test it, we ask Claude to delete one folder and rearrange those files in another folder. Claude started deleting the first folder without copying what was inside it and Toolgate gave that action a destructive risk of 77%. A score like that normally means toolgate asks you to confirm first. But we were running Claude in bypass permissions mode where Claude doesn't ask for any permission.

**2:55** · So it blocked the action instead of risking by allowing it. So after that Claude copied the files somewhere safe and completed the task as needed. But there's one small problem which is that it doesn't let agent delete even the things that are needed to be deleted. So you would have to handle that part on your own. Claude still breaks the rules you've set for your own project which is a problem we run into a lot when we work with agents. There's a tool called Abide that actually deals with that problem.

**3:21** · Abide checks every edit Claude makes against your rules and then has Claude fix anything that breaks them. Abide works with most coding agents like Codeex and Claude Code. Before Abide checks anything, it turns your agents.m MD and claude.m MD files into a separate rules file called a rubric for Jev to read. To use it, you first need to install it by copying the login command and running it on your terminal. The command then asks you two questions. The first is which key you have. We've been using the Versal AI gateway, so we picked that one, but you can pick any option on the list.

**3:52** · The second question is where to install Abide, either for all of your projects or just this one, and we pick this project only. Once abide is installed, you run its init command. It connects abide to claude code and adds the files that tell Claude how to work with abide. After that, Claude code recognizes Abide. But a newly installed project doesn't have a rubric yet. So in your Claude code session, you need to ask Claude to create one. Claude then creates aabide folder and inside that folder is the rubric with all the details of your rules.

**4:21** · The folder also holds the compile skill which has the steps Claude followed to turn your instruction files into that rubric. And there's also a file that records each step along the way. In that rubric, Abide basically turns every rule into a yes or no question because Jev is a decision model that's built to answer these kind of questions. Our rubric had 49 rules and 33 of those needed Jev to decide before anything ran. Once the rubric is ready, Abide flags anything Claude does that breaks a rule, and Claude has to fix every flag before it can finish the task.

**4:52** · But before we move on to the next tool, it would be great if you subscribe to the channel and hit the hide button.

**4:58** · This small gesture of support goes a long way for us. The next question is whether the app actually works, and that's what Jev Browser is for. Jeff Browser is the open-source version of the tool from our previous video.

**5:09** · Basically, it's a browser testing tool where Claude does the testing and Jev makes the yes or no calls. The way it works is that you ask Claude code to test something and Claude uses Jev browser to read what's on the screen.

**5:21** · Jeff browser passes what it reads back to Claude while Claude runs the test. So to install Jev browser, there's one command that includes all the setup steps. But when we ran that command, it installed an older version even though Jev browser is updated often. So instead, you need to ask Claude to install the latest version and get it ready to use straight away. After that, Jeff Browser is installed, but it doesn't have an API key yet. And by default, Jeff Browser actually only works with Typesafe's own API key.

**5:46** · So if you don't have a types safe key, you can ask claude to make some changes to the tool so that you can use whichever provider you want. But if you're using typesafe's own key, you can add it directly. Once installed, this tool will be available in Claude as an MCP with all its tools available for use. Now you can ask Claude to run tests in the browser by mentioning in your prompt to use Jev browser's tools. So with that in your prompt, Claude uses Jev browser several times. And then at the end, it gives you a report mentioning a list of all the bugs it finds.

**6:17** · When we tested it, our task took around 2 minutes, which would have taken much longer if we were testing without this tool. There's a problem working with agents, and that is that these agents tend to say that the task is done even though it actually isn't. To fix that, there's a plug-in called Jev Ble that keeps Claude from quitting before a task is actually finished. This tools works in a similar way to Ralph Loops, but the only difference is that Jev decides whether Claude is really done. Basically, when Claude says it's done with the task you gave it, Jev Ble reads the whole conversation.

**6:48** · It looks for proof that shows that Claude actually did complete the task. If this tool doesn't find anything, it asks Claude to prove if it actually did the task that it was asked to do. If the agent couldn't prove it, this tool reprompts the agent to complete the task. To install Jeb Blelay in claude code, you first copy the command that adds a marketplace. That command also reloads your plugins. So Jev ble is ready to install. Then the plug-in install command does the rest.

**7:14** · After that, it asks you a few setup questions, and the first is where to install it. We installed it just for this project, but you can install it for your other projects, too. The next question asks for your Typesafe API key.

**7:25** · So if you're using one, you can enter it there. But if you're not, you can ask Claude to connect it to your own provider. The same way we did with Jev browser. You also pick a threshold, which is how sure Jev has to be that the task is done before Claude is allowed to stop. We set it to 75%. And if you want to see Jev's decisions, you can enable the decision log. There's also a second option that shows what would have happened if this tool hadn't stepped in.

**7:48** · You can turn it on if you want to see the difference in the working with the tool installed. Once everything is installed, you can ask Claude to do any task. And this tool keeps asking Jev whether the work is really finished. So Claude can't say it's done without checking. But before we move on, let's have a word by our sponsor, Dodo. If you build with AI agents, you know the wall.

**8:07** · The second the agent needs live data, it reaches for requests and beautiful soup and the site blocks it instantly. That's the real problem. An AI agent is only as good as the data it can actually reach.

**8:18** · So we handed Claude code the Dakota skill. Now, the moment it needs to scrape a page or pull product data, it routes to Dakota's web scraping API instead of the fragile stuff that gets blocked. We send a URL, Dakota handles the hard parts, the IP rotation, the captures, the retries, and hands back clean, structured data ready to drop straight into the build. It even has readymade templates for sites like Amazon, so there's nothing to build from scratch. We had a price tracker pulling live prices in minutes. It all runs on the free plan. Up to 2,000 requests for a full year, no credit card.

**8:48** · And when you're ready to scale, our code gets you 10% off your first paid plan. The links in the description. Something else that happens a lot in the middle of a task is that you give Claude code a prompt and then remember something you didn't add.

**9:03** · So, you send a new message while Claude is still working. By default, Claude Code actually holds that message and gives it to Claude once the step it's on is done. But that's a problem when your new message could wait until Claude finishes its current task. Claude still gets the message halfway through, so it gets distracted and starts working on two tasks at once. So to solve that, there's a plugin called Jev Steer or Q.

**9:24** · It basically lets Jev decide whether your new message should change what Claude is doing, wait until later, or stop the current work. Jev has three choices, and the first is steer. Steer means Claude gets your new message once the step it's on is done. And that's what Claude code already does by default. The next choice is Q, which is for a message about a different task that can wait. The plug-in holds that message until Claude finishes everything it's doing and then sends it as a new request.

**9:49** · And the last choice is interrupt, which means your message is so urgent that Claude stops right away instead of waiting for its current step to finish. The plug-in only acts on Jev's choice when Jev is at least 90% sure. So nothing changes for Claude unless Jev is confident. And the plug-in works with both Codeex and Claude code.

**10:07** · Jevsteer or Q installs like any other plug-in. You can install this and add in your API key to get started. Once this has been installed, all the new sessions will have start using this tool. When you send a new message while Claude is working, the plug-in basically checks it first. If the message is urgent, Claude gets it right away. For example, in our test, we told Claude to change the color theme while it was building a landing page. That request was more urgent than the page, so the plug-in sent it straight through. But a message that isn't that urgent waits until later.

**10:36** · Long sessions also mean compacting, but if you compact at the wrong time, you lose important details that Claude may need to remember. So, Compact Advisor actually gives you advice on when to compact, and it uses Jev to decide whether it's the right time. It looks at how far into the session you are and checks whether you can compact now without losing important context. To install Compact Advisor, you run the commands from the GitHub repo and once the install finishes, a new session starts. The first time you run Compact Adviser, it asks you a few setup questions like your API key and the minimum context.

**11:08** · From then on, Compact Adviser tells you after every reply whether it's the right time to compact.

**11:14** · Once installed, we gave it some tasks to do. It didn't ask to compact if there was some question at the end of the agent's response. But if there was nothing and the agent has used around 100,000 tokens and there isn't anything new to continue from the session, it would advise to compact. and the quality of compaction was much better because it did remember all the details that we mentioned in the session. Now, there's another tool called Quicksilver that basically uses Jev as a decision layer in between your agent and your files. A big share of Claude's work is reading lots of files just to find the few it needs.

**11:46** · Quicksilver basically turns that searching into quick yes or no decisions and hands them to Jev instead of Claude.

**11:52** · Jev reads the files and shortlists what Claude is looking for. And then Claude reads only the files on that short list.

**11:59** · So Claude saves tokens and can focus on the more important work. And because Jev handles the searching, Claude's context window stays clean and there's less in the conversation for Claude to keep track of. To install Quicksilver, you run a single command in your terminal.

**12:13** · After that, you can ask Claude to use Quicksilver on any task. On our own app, we told Claude to use Quicksilver and asked which parts still weren't following the rest of the app's shared color settings. Jev checked 37 files in about 2 seconds, so Claude never had to read about 67,000 tokens. Lastly, there is a tool that basically uses Jev to analyze your website for how well it ranks on search results. You basically give Jev SEO a web address and it makes you an SEO report which shows how easily search engines like Google can find your site.

**12:44** · To build that report, Jev SEO visits every page it can find by following links. Then it runs a fixed set of checks for all kinds of issues like broken links or problems with your sitemap. On top of that, Jev gets the same set of questions about every page, like whether the page is helpful or whether the title fits the page. Those answers show how good your content is.

**13:04** · Jev SEO puts all of that into a PDF report with a separate score for each area. You also get an Excel tracker, which is a to-do list of fixes you can tick off so you always know what to do next. Jev SEO is a skill that installs from the commands on screen and after that you run the /jv SEO command with the web address you want checked. When the check finishes, you get an overall score. The site we tested got around 76 and the report listed the actions that matter most. It also showed which parts of the site were unhelpful and generic.

**13:34** · And the report measures whether the site is ready for AI search. It tells you what's stopping the site from doing better and which tasks you need to do.

**13:42** · And it adds other numbers that give you a fuller picture. So every time you improve your site, you can run Jev SEO again. Now all the skills and workflows and everything else we build and show you in all our videos can be found in AIAS Pro, which is our community. So if you found value in what we do and want to support the channel, this is the best way to do it. The links in the description. That brings us to the end of this video. If you'd like to support the channel and help us keep making videos like this, you can do so by using the super thanks button below. As always, thank you for watching and I'll see you in the next one.
