---
title: "OpenMausBot — the Open-Source Grok Bot (Full Tutorial)"
author: "Full Stack"
site: "YouTube"
source: "https://www.youtube.com/watch?v=zA3Zu8RPJF8"
domain: "youtube.com"
language: "en"
description: "👍 Like | 💬 Comment | 🔔 Subscribe | ⭐ Star the repoOpenMausBot turns Claude Code, Codex and the Grok CLI on your own machine into a roster of bots in a cha..."
word_count: 2445
---

![](https://www.youtube.com/watch?v=zA3Zu8RPJF8)

👍 Like | 💬 Comment | 🔔 Subscribe | ⭐ Star the repoOpenMausBot turns Claude Code, Codex and the Grok CLI on your own machine into a roster of bots in a cha...

## Transcript

### Four contacts, none of them people

**0:00** · Four names in the chat sidebar, and not one of them is a person.

**0:04** · Brody just finished a research job and is reporting back.

**0:08** · The way a coworker would in a direct message. Every one of those contacts is a real agent.

**0:13** · Claude or Codex running on the laptop itself.

**0:16** · Each with its own model, its own computer, and its own apps. Grox Maker sells this exact shape as Grox Bot inside a paid plan on their cloud running only Grox. Open Mouse Bot moves every piece of it to your side of the line. By the end, you'll have it installed with a bot on the model you already pay for, a computer it can use, and the one setting I'd change before letting it touch anything. We'll go task by task, Grox Bot against Open Mouse Bot and finish on the two things. The closed one still does better.

### Same roster, other side of the line

**0:50** · Both products start from the same complaint. One assistant in one box is the wrong shape for agents, so you get a roster instead, and you message them like people. Grox Bot puts that roster on one shared cloud computer. Your transcripts sit on their servers, and Grox is the only model on the menu.

**1:09** · To get it, you need Super Grox at $30 or Cursa Pro at $20 plus a weekly usage cap whose size isn't published. Open Mouse Bot costs nothing. There's no paid tier inside the app.

**1:22** · So the only bills are the model subscriptions you hold today, paid straight to the providers, and it isn't the only closed product in this shape. According to its readme, four closed agent products shipped in seven weeks this year, Meta's Muse, OpenAI's Dots, and Q by Mannis among them. Each one keeps the model, the computer, and your data on the maker's side. That's the gap this repo was built for, which is why it started life called Open Grox Bot.

**1:50** · And people noticed. About 17,000 developers started in under three months.

**1:55** · So this isn't a weekend experiment. It's also moving at a speed I'd carefully.

**2:00** · The latest release landed yesterday and a setting you learned last month may have moved since.

### One download, no server

**2:06** · Installing is the easy part because the desktop builds carry the server inside them, so there's nothing else to keep running in the background.

**2:13** · On a Mac, you drag the signed disk image into applications and Apple Silicon and Intel each get their own build. On Windows, the installer runs for user with no admin rights, but it isn't code signed yet. So smart screen will warn you and you click more info then run anyway. Ubuntu 24.04 gets a Debian package or an app image and that one is still labeled beta with Gnome as the supported desktop.

**2:40** · The one thing you must bring is an agent, CLI, Cloud Code Codex or the Grok CLI installed and logged in and it shows up in the model picker on its own. If you live in a terminal, there's a second route. One install command puts it on your path and the first launch walks you through arrow key choices for access model and phone. One detail from that setup is worth knowing. API keys you paste that are saved in plain text in a config file only your user can read, not in a keychain.

### Two processes on your laptop

**3:11** · Here's what's actually running. There are two processes. The app is the chat window and a harness server owns every agent. The app sends typed commands to the harness and gets back one event stream which it falls into what you see on screen. The harness listens only on localhost and starts each agent's command line tool as a child process with your own logins intact.

**3:34** · Those three tools speak three different protocols and the harness translates all of them into one stream logged per conversation \[snorts\] on your disk. That's why a driver that Jakes shows up as unavailable instead of taking the whole fleet down with it. It's also why adding a provider is one file. The driver contract is about 600 lines and a new engine is a file in the driver's folder plus a one line registration.

**3:59** · You often don't need even Any agent that speaks ACP or any OpenAI compatible endpoint plugs in through a config entry with no code at all. One safety detail I liked.

**4:13** · Other engines API keys are stripped from a custom tools environment.

**4:18** · So a wrapper can never bill against your Claude or Grok account.

### Give every bot its own brain

**4:21** · On Grok bot every bot runs Grok. Here the model picker has a provider rail down the side.

**4:28** · So a writing bot can run on Anthropic while a refactoring bot runs Codex.

**4:33** · Defaults are marked. Providers you haven't logged into are dimmed with the reason.

**4:38** · And you can switch a bot's model halfway through a conversation. If you already pay for two of these and resent picking one this is the strongest argument for switching. If you only ever want Grok it buys you nothing.

### Three places for a bot's computer

**4:51** · Grok bots bots share one computer in the cloud. Here every bot gets its own and the computer panel gives you three places for it to live. Cloud box is a remote Linux desktop from Bot the project sponsor. Open the panel and it spins up by itself with a live preview of the bot screen. Hit open desktop and you can take over in your browser. Just know that Bot is a paid service after its trial.

**5:17** · So that part of the free app costs money. The second option is a local VM.

**5:22** · A Linux desktop in a Docker or Podman container on your own machine.

**5:27** · For downloads and browser work you don't want on your real desktop. The third is this Mac.

**5:33** · And that means the bot moves your actual mouse. It runs through a pinned native driver whose files are hash checked at build time.

**5:41** · And the install app never downloads automation code on its own. Your platform matters here. On macOS host control is supported. On Ubuntu's X org session it's a beta you opt into.

**5:54** · And on Wayland it's switched off until an input safety issue is fixed.

### The approval card, switched off

**5:59** · This is the feature the README leads with. Shell commands file edits and questions show up as cards in the chat, and you press allow or deny. The maker's comparison post puts it plainly. Every risky action is a decision you make, not one you audit afterwards. Now open the approval docs. Every new bot and every new conversation starts at full access.

**6:24** · Full access \[snorts\] runs each engine in its most permissive mode. Commands and edits go straight through, and a bot with a connected email app sends with no daily limit unless you tell it to ask.

**6:35** · So the card the readme sells is off by default.

**6:38** · While a hosted company workspace starts at ask. I think the desktop should too.

**6:43** · And this is the setting I promised you earlier. There are four levels to pick from. Ask for approval and auto accept edits. Approve for me where the provider's own reviewer waves routine actions through and full access.

**6:57** · My rule is simple. Put every new bot on ask before you give it a computer or an app and loosen it only once you watched what it does. One thing never asks at any level. A bot reading its own files, its instructions, its skills, and its memory just reads them.

**7:15** · Growth bot signs into your tools directly. Open mouse bot goes through composio, a marketplace of over 500 apps from Gmail to GitHub. You sign \[snorts\] in once with OAuth, and from then on every bot can use that app as a tool.

### Plug in the apps you use

**7:31** · That part needs a project key from composio.

**7:34** · Though plain chat works with no keys at all. The keys live in app settings and they're write only. Once a key is saved, the interface only ever sees a configured flag, never the key itself.

### Memory you can open in an editor

**7:47** · Memory is the part I'd point a skeptic at first. Each bot's memory is plain markdown files in a folder on your own disk. There's a main notes file, topic files the bot reads when it needs them, and a daily log of what it did written in its own words. Only the first 200 lines or 24 kilobytes load into each turn, and a gauge in the settings shows exactly where that cut falls. When the notes get long, the oldest entries move to an archive so the main file never overflows and nothing is silently thrown away.

**8:17** · And if a bot reads an API key from an NB file and tries to remember it, the key becomes a redacted marker before it ever reaches the disk. You can read every line a bot believes about you, fix the wrong ones in any text editor, and a journal lets you undo every change.

**8:36** · Bots don't have to work alone. Channels keep work, personal, and each project apart, each with its own roster, instructions, and folder. In a room set to auto, a small decision model reads each message nobody tagged and picks who should answer in a few hundred milliseconds. If no bot scores at least 0.6, the room's lead answers instead.

### Rooms, triggers and whole teams

**8:59** · And if the model takes longer than 1.5 seconds, the lead answers then too.

**9:04** · Then there are triggers. Tell a bot every weekday at 9:00, summarize my inbox, and it sets the schedule up itself.

**9:12** · With a card you can edit, pause, or undo. Schedules run once on chosen weekdays or every 5 to 1,440 minutes. If the last run is still going, the next one is skipped so a slow job can't pile up a queue. Webhooks get their own small receiver on a separate port. It exposes a health check and the secret hook parts, nothing else, and the app has to be running to catch them. Connected apps can fire triggers too. Gmail is checked every 15 minutes while Slack and GitHub events arrive at once.

**9:41** · You can even install a whole team from one markdown file. Bots, channels, playbooks, and routines arrive together with connections switched off until you approve them and every routine paused.

**9:55** · Sharing works the same way in reverse. A department exports to one file and chat history, keys, model choices, and computers never go in it. Some may bots can also talk back. Pick a voice from 11 Labs, Fish audio, Grok, or a local chatterbox server, and you can call a bot, which then asks for approvals out loud.

### Driving it with no screen

**10:17** · Everything so far happens in a window.

**10:19** · The open mouse bot command drives the same workspace from a script. You apply a team from a YAML file, give the room lead one job in plain English, and it waits until that bot and every teammate it asked are done, then exports what they made. Every command can print a single JSON document, and the exit code tells your CI whether the run worked. I like one small decision in there. There's no token flag because anything on a command line can be read by other programs, so tokens only ever come from a file.

**10:52** · There's also an MCP server, so Claude desktop or Cursor can list your bots, send them work and wait for results.

**10:59** · What it can't do is approve requests, delete anything, or touch credentials.

**11:04** · To run it on a server, one command starts it with the way in you choose, Tailscale, your own domain, or a free tunnel, and it prints one pairing link for the desktop app. The docs are blunt about one thing, never forward port 8,799 yourself because anything on that machine counts as its owner.

### What you give up

**11:24** · So, what do you lose by switching? The maker's own comparison gives two rows to Grok bot and says pretending otherwise would waste your time. The first is learning by watching.

**11:34** · Show Grok bot a task once, and it saves it as a routine. Here you write routines yourself, and nothing learns by observation yet.

**11:44** · The second is the laptop lid. Grok bot's agents live in the cloud and keep going overnight. These run on your computer, and a closed computer runs nothing. You can work around that with server mode on a machine that stays on, but that's your setup to maintain, not a checkbox. Phones are behind too. Grok bot ships native apps everywhere.

**12:05** · While this has companion apps that pair with a computer running the real thing, and it calls itself early. The README's own status line says early but real with hosted and mobile connectivity still being built.

### Who should switch

**12:18** · So here's where I land.

**12:20** · If you already pay for Claude or ChatGPT and want several agents with your data on your disk, this is the one to try. If you need work to carry on with the lid shut or you only ever use Grok, stay where you are. And the first thing to do, install it, make one boat on whichever model you pay for now and set it to ask before it gets a computer. If this helped, star the repo so the maintainers see it.

**12:45** · Grab the installer from the releases page, then like the video and tell me in the comments which boat you'd build first and subscribe for the next one.
