---
title: "This New Design Tool Just Fixed Claude Code's Design Problem"
author: "AI LABS"
site: "YouTube"
published: 2026-09-18T08:16:36-07:00
source: "https://www.youtube.com/watch?v=Ow_z94c3wKk"
domain: "youtube.com"
language: "en"
description: "Claude Code design: free Claude MCPGet your Monid key at https://monid.ai?fpr=autometa56 and connect your AI agent to 1,900+ tools with one API key.Claude Co..."
word_count: 2786
---

![](https://www.youtube.com/watch?v=Ow_z94c3wKk)

## Transcript

### Intro

**0:00** · If you've ever designed a site with AI, you'll know how generic the designs these models generate can look. There are a lot of tools and skills out there that try to fix that problem, and some of them do give pretty solid designs.

**0:11** · But, there's one gap that every single one of them has, and that's why their designs still feel generated. To fill that gap, there's a tool called Inspo, and it was made by the same person behind Hallmark, which has been one of the top trending design skills on GitHub for a long time. And, Inspo solves the problem in a way that not only makes your agent design better, but also gives it a better taste for design. And, while the other tools that do this for your agent are paid, this one is absolutely free. So, if this is your first time here, we're a software company, and this is our channel AI Labs.

**0:39** · And, in this video, we're going to show you exactly how Inspo fixes your agent's design problem. But, before \[snorts\] we get into what the tool does, you need to understand why models actually build sites that look generic. A model is actually trained on a huge amount of data, and when it is being trained, it learns the patterns that show up the most in the designs it sees during training. Since they appear so many times, the model thinks that that design is the safest.

### Why AI designs look generic

**1:04** · That's why when you don't provide much design direction in your prompt, it just chooses the patterns it has seen most often, because that is what the model thinks of as safe. Those choices might look good at first, but once you've seen them across a lot of sites, they get recognized as the model's own style. Each model has its own pattern that shows up in all its sites. For some models, it was the color choice of purple or blue on white backgrounds. For other models, it became the warm orange and cream colors.

**1:29** · That's why you need something so that you can guide the model away from this generic look in order to make your site stand out from the others. Now, there are plenty of design skills that already fix this problem, and we have also covered a lot of them on our channel. They all do work really well, each helping in its own way by giving the model's design direction so that they can generate a good design. One of them is the one we mentioned earlier, Hallmark, which we already have a video on.

**1:54** · It is one of the skills that we also use a lot because it gives the model a design direction and checks the page against the patterns that models fall into. We also use other design skills and the ones we use in our workflows are in our AI Labs Pro design system, which we have provided to you in our community as well. All these skills give the model instructions on what it should do and tell it which common patterns to avoid.

**2:18** · Some of these skills like Hallmark also have references from popular sites that worked so that the model can get inspiration from them as well when it's working on the design because these are the ones that have worked previously.

**2:29** · But most of those references and instructions are described in mock down files, which are the text from which the agent has to work out what the finished page should look like. It can read which fonts to use and how to arrange the page, but that description doesn't help the model figure out how the site should look when all the components work together. Models also don't understand the kind of design the site needs and they just design whatever is listed in their instructions. That's exactly why Inspo was needed because it gives the models much more than the design instructions.

**2:58** · But before we move on to the tool, it would be great if you subscribe to the channel and hit the hype button. This small gesture of support goes a long way for us. Inspo \[snorts\] is actually an MCP server that solves the problem we talked about by giving your coding agent access to real websites instead of just design instructions. This helps because now with this tool, the agent knows which design has worked for the type of site you are designing and can actually study the design. And from that, it creates a new one for you.

### What Inspo is

**3:25** · It contains 832 sites with 2,320 captured pages in the form of images. It also has screenshots of those sites captured on both desktop and mobile, so your agent can see how the design changes to fit a smaller screen and design for all screen types. It also has references for individual parts of a page like the navigation menu or the pricing section. So when the agent is working on a specific part of your site, it can look through examples of that part. The agent can also get the code for the one it wants to use.

**3:55** · But most importantly, every site in it also comes with a design.md file, which describes the design in a structured way that the agents can understand better. It contains the color palette with the exact color values along with the exact fonts and the measurements it captured for things like text sizes and spacing.

**4:14** · The agent can use this file to understand the design components rather than figuring out the fonts and styles from just the image and references. You can check out the sites on their landing page, where you'll find a bunch of different sites, each with its own design style. And you can also visit their original sites. And it is actually free to use, and you don't need an account or an API key to connect your agent. But before we actually install Inspo, you need to understand how it actually works underneath. When you give your agent a prompt, the agent sends a description of what you want to build to Inspo through a tool called recommend.

### How it works

**4:47** · Inspo then searches the captured pages for matches and checks how the pages in the closest results are arranged. It then chooses the layout that appears most often among those top results and returns up to five examples that use it.

**4:59** · So, the agent gets several references that follow a similar arrangement, which it compares before deciding how to design your page. Along with those examples, Inspo also returns matching component references and a suggested color palette. And the response includes up to three screenshots. So, the agent actually looks at the pages and sees how those design choices work together. All of them are combined and sent to the agent, which then uses them to decide how to build what you're asking for.

**5:24** · Inspo has search filters for different industries and different page layouts, along with options for whether the design uses a light or dark theme. So, you can tell the agent in your prompt what direction you want specifically, and it then narrows down the results using those filters to get more suitable references. Once the agent has found references that fit, it requests more detail on those pages and their design.md files before it starts building. And Inspo also tells it to study only a few of those in detail before building.

**5:52** · This is because every additional search adds more results to the conversation, which gives the model a lot to look at and can make it unsure about which style to pick. So, the agent doesn't need to keep searching once it has enough references to work from. But before we install it, let's have a word by our sponsor, Manifold. Every real build eventually needs data it doesn't have yet, and getting it means signing up for yet another API and wiring in another key by hand. Manifold is the open router for agent tools. So, one key reaches every API and you skip all that setup.

### Sponsor

**6:21** · We drop its skill into Claude code, then ask for exactly what the build needs. Say the search volume on a keyword or the contact behind a profile, and it finds the right endpoint, fires the call, and the data lands back in our session in seconds. No server to stand up, no config. That same key covers 1,900 more tools. Scraping, contact lookup, search data, video generation, for whatever comes next. Stripe just bought open router for $7 billion, and Manifold is that same idea for agent tools. One key, every API. There's no subscription, either.

**6:52** · You pay per call, so cost scales as you grow, and you get free credits the moment you sign up.

**6:57** · Grab your key and make your first call today. The link's in the description.

**7:01** · Now, in order to install Inspo, you just need to copy this installation command available on its website, which will be linked in the description, and then paste it in your terminal. When you run the command, the installer automatically detects which coding agents you already have installed and asks whether you want to add Inspo to all of them. You can install it for all of them if you want, but if you only want it in a specific agent, the installation path doesn't let you choose for now. When you type no, it straight up cancels the installation completely.

### Installing Inspo

**7:28** · So, if you want to install it only for a specific coding agent, you need to run the installation command with a client flag and then mention your coding agent's name. It actually installs in user scope, which means Inspo is available whenever you open your agent in any folder and won't be just limited to the project you've installed it in. Once the installation is done, you need to reopen whichever agent you're using and run the MCP command. And then you'll see Inspo listed alongside your other MCP servers that you've installed with all 15 tools available for the agent to use.

**7:58** · So, in order to use Inspo, you just need to give your agent a prompt for the site you want to build. We tested it on a demo fashion landing page. In our prompt, we also asked the agent to give us a few styles to choose from before it started building. You don't have to ask for alternatives, but asking it first before it starts designing lets you stop before it has built the complete site and ask for a different direction. So, when we gave our prompt, even though we hadn't asked it explicitly to use Inspo, the agent called the Inspo MCP we'd connected earlier.

### Demo build

**8:28** · Instead of directly sending the prompt you give it, the agent first adds in more keywords related to the style you've asked for in the prompt. This helps especially when you give it a prompt that is not very descriptive of the site you want, so that the search can be narrowed properly to exactly what you want, and the MCP can find exact references that fit what you're asking for. It then studies the references that come back and compares the patterns they have in common, so it works out which design choices belong to that style. In our case, the agent studied around 24 sites and used those references to make its design decisions.

**9:01** · For our site, the agent gave us three design directions and described each one so we could choose. Once we picked a direction, it started building the page, and when it was done building the site, the result looked different from the designs we'd been getting from models on their own, even with a design skill. The first section of the page uses images instead of putting huge text across the entire width, which is something models tend to do. The agent used bold fonts and neutral colors matching the theme we asked for.

**9:27** · Now, if you've ever given the agent a site to use as a reference, you would know that it most of the time ends up copying that site's design exactly instead of using it as inspiration. So, we wanted to see whether our page had done the same thing or whether it had actually followed the style across the references. For that, we asked the agent which sites it had referenced, and it gave us the links to all the sites it used. When we checked those sites, they all looked different from each other, and our page hadn't copied any of them exactly.

**9:54** · It borrowed the hero section style from one site, the buttons from another one, and the way the products were arranged from a third. So, the agent combined parts of those references into a design that didn't look like any of them. The agent also referenced the mobile layouts, so it had examples of how those sites arrange their content on a smaller screen. That's why the design also worked well when we checked it on a smaller screen. But, even though the design was closer to what we'd asked for, the page was still static and didn't have any animations. That is one thing that makes the site complete, and Inspo doesn't handle that bit.

### Adding animations

**10:24** · For that, we use the UI skills MCP server. This MCP gives the agent access to a library of design skills from different authors.

**10:34** · So, you can ask the agent to find a skill for the site you're working on, and it will look through its library and narrow it down to the skills that match your request. We have also covered this MCP in our previous video. So, for our site, we prompted the agent to add in animations on the site using the MCP.

**10:51** · So, when we gave the prompt, it loaded Emil Kowalski's animation skill and Meng To's scroll animation skill. And the agent then added the animations, and they were timed properly together. We tested Inspo on several other sites, too, and the results worked well most of the time for us across those builds.

**11:07** · Now, even though this tool designed the site pretty well for us, it's still new, so there were a few problems. When we were testing, on two occasions, it got the wrong references, even though our prompt had explicitly stated the kind of site we wanted. The references Inspo returned were from other types of sites that were completely unrelated. In one test, our prompt asked for a coffee subscription site, but we got references from health and business sites. When we searched again with the food and beverage industry filter selected, we got references from coffee sites. And there are some issues in the screenshots it gives.

### Where it falls short

**11:38** · Some of them have parts of the design covered by the pop-up that appears when you open the site. In our earlier test, one of the screenshots had a privacy pop-up in the middle of the page, so the agent couldn't see the design behind it, and it just used its own thinking to build that part of the design instead, which is exactly what you installed the tool to avoid. That's why, just like we mentioned earlier, you need to ask for design directions first, just like how we did when we were testing, so that you can catch it if it's drifting in the wrong direction, and then re-prompt so that it can fix these issues.

**12:08** · Now, the design system we showed you here, along with other resources, are all available in AI Labs Pro, which is our community. So, if you found value in what we do and want to support the channel, this is the best way to do it. The link's in the description. That brings us to the end of this video. If you'd like to support the channel and help us keep making videos like this, you can do so by using the Super Thanks button below. As always, thank you for watching, and I'll see you in the next one.
