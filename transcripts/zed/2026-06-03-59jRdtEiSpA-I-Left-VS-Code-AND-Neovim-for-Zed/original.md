---
title: "I Left VS Code AND Neovim for Zed"
author: "Chris Titus Tech"
site: "YouTube"
published: 2026-06-03T04:15:27-07:00
source: "https://www.youtube.com/watch?v=59jRdtEiSpA"
domain: "youtube.com"
language: "en"
description: "Zed Editor isn't just a VS Code replacement — it's what you get when Neovim and VS Code have a baby. I've been using it heavily and my setup is completely di..."
word_count: 3125
---

![](https://www.youtube.com/watch?v=59jRdtEiSpA)

## Transcript

### Zed: My Hot Take

**0:00** · Zed editor. And now this is kind of out of left field. I've done a video on Zed, I think like a year ago, but I used it as like a VS Code replacement, as most videos about Zed are kind of like a replacement of VS Code. I've since kind of changed my mind. I feel like Zed is if Neo Vim and VS Code had a baby and this is what it produced. That's kind of where it is now. And I want to show you my setup because it's different from anybody else's that I've seen online and I use it a lot different.

**0:32** · But I want to just run down real fast what it is. One, it's a very fast editor. It's launches a lot faster than VS Code, but it has a lot of other cool things. It has the typical AI stuff, but there's a toggle just to turn all that crap off if you're not even into it. But I use AI pretty extensively these days, especially when it comes to coding. Parallel agents, I don't use like you see online there's these vibe coders that run like 16 agents at the same time. I don't really do anything like that.

### AI & Agents

**1:04** · I have done it in Zed, but mostly for like scaffolding or something where I haven't touched the code yet and I just kind of want a base to work off of or an idea to just kind of flesh out uh before actually, you know, smoothing over the code by actually looking at it with human eyes.

**1:22** · The edit prediction is fantastic. You can use either their built-in one from Zed or I use it a different way which I'm about to show. Git support was different from VS Code. So, the very first I did it on a live stream. Uh, first hour or two of me trying to figure out how the git workflow was. It's just different from VS Code and I've grown to really enjoy it and it's actually gotten a lot faster for me than compared to the VS Code counterpart. Vim friendly. Now, this I was unsure about.

### Git Workflow

### Vim Bindings

**1:52** · Now, I've installed like the Vim plugin in VS Code and it just never felt good. But in Zed, \[laughter\] this is uh probably my biggest shock out of everything is the Vim bindings are really awesome and they have fantastic support uh for Vim mode and they show you the great default bindings here.

**2:15** · I'll leave a link to all this as well.

**2:18** · Uh and I I did an entire article that I'm kind of working on kind of smoothing out of all the little things uh that I do with it. But the big things I do differently is I do take in the VS code base key map, but then I add Vim code, Vim mode on top of it. Um, I have my base default theme, which I kind of change around. I'm going to show you the themes in Z as well, which is pretty extensive. Uh, and they also have extensive extension support, which I didn't add here.

### My Layout Setup

**2:46** · The right side panels, I essentially took all the panels from the left side, pushed them to the right because I do a lot of streaming and I have very limited real estate. And whenever I stream with VS Code, it's kind of like jumbled together. Where Zed, it it it's just a nice clean layout. It's really easy to read what I'm doing. I can put everything on the right side so it sits right between me and and the content so I'm not like my head's not sticking in the way of everything, which is nice. And then um I did a bunch of custom bindings.

**3:16** · And then there's also something I haven't seen anybody actually talk about in Zed called custom tasks. There's a task.json JSON that you can do. Also, uh the settings and key maps and everything is in JSON format as well, which I absolutely love. So, I've actually backed these up to my own git repository, and I back this up between Windows, Mac, Linux, and I I I'm just really happy with all the different options I have here.

**3:46** · So, I've covered this in my Neovven video, but I used to have like an image clip plugin to add webp files. So, what I would do a lot of times just to kind of show this task system that I have set up, which I I haven't seen anybody do yet, uh, but let's say I wanted to add like this screenshot to this article in markdown file. Typically, you would save the file, uh maybe upload it if you're using like WordPress or some crap.

### Custom Tasks

**4:12** · Uh or you would copy it over into your images directory and then reference it in a markdown like you see here. It would be like that type of markdown. Um but let's say I want to add it right below my screenshot here. I can just do my plugin and then say what is my file name here?

**4:30** · Right now I have it as verbose because I was just debugging this. We'll just say files and then it kind of spits out everything. I put Whand and Xorg support in. So, it kind of gives me that. And then I can just use my hotkey to get rid of it. You'll see it's added right below Z screen. And if we go over to here, there's my next screenshot right below this one. Perfect. And I can just come here, go up, delete it, and you'll see this just disappear. So, really, really nice.

**5:00** · And in the back end, what's that doing? You can see like I'm going to go ahead and delete this file. Uh but it's just adding these WEBP files directly in already optimized for web. So the they won't even like this highly uh high resolution file is only like 43 KB where if it was like a PNG it'd be like 4 megs. So that's one workflow I use for it as well.

### Screenshot Workflow

**5:21** · Now, as far as the coding, now I have a GitHub copilot uh pro membership for free because I have a big repository on GitHub. So, I get a bunch of premium requests for free and I'm going to use those. They have extensive uh agent support here, which let me pull up that. Uh we'll pull up the agent support and you can actually configure these agents. Let's go settings. And you have all these agents to choose from.

### GitHub Copilot Setup

**5:51** · Now, right now I'm using C-Pilot or GitHub Copilot, but you could do Gemini CLI cursor if you have a subscription to it, claude agent, uh all of these other ones. And it would be kind of funny to have a cursor subscription in here, but I can see the a world where I would use cursor and zed because cursor has like a really good uh editor for some of like

**6:13** · let's say web pages specifically highlighting and changing elements with AI is really nice in cursor, but a lot of times I don't want that huge bloat because it's again it's a fork of VS Code and it's a bit longer to load up where Zed, you know, I can close it out, I can pull it up again and it just launches and it's just so much nicer than VS Code and most other graphic editors I've used and I can kill that add this uh I have everything hotkeyed

### Custom Keybindings

**6:45** · so I can go right to my edits or but I could also pull up different things. So like let's say I want to add or open up my Neoim one. I can go neovim and I have directly here all my neoim articles I've written in written in the past. So I can go nem the ultimate editor. Oh, okay.

**7:02** · What's going on here? And I can just kind of tab through, exit out, and s search everything right as I would in Neo Vim, but using zed. So all these custom key bindings are done in the keymaps file, which you can set right here, uh, if you want to use it just directly from text syntax, or you can just open it and do it through the guey.

**7:28** · So, it's when I say VS Code and Vim had a baby or Neoim had a baby, that's what I kind of mean. You can blend both seamlessly and if there's an extension you're using all the time in Neoim, you can pull it in and make your own in Zed and it's relatively easy. Now, earlier I talked about the threads flow.

**7:47** · The cool thing here is when I'm editing or doing things, I might be working here and then all of a sudden, oh, you know what? this is going to take a while to finish out this response uh with this agent and I want to go ahead and switch projects.

### Threads & Parallel Agents

**8:06** · Well, using this flow, not only can you do parallel processes, which they highly tout, but what I actually end up using it for is I have a whole bunch of open source projects. I'm like, hey, I need to come back to here and it'll pull up that Git repository where I made this request. Or let's say I go here and say, hey, I need to expand this. This is Zed Titus. And what was I doing last? Ah, this is when I was figuring out my cut and paste directly in zed. So it takes me exactly to the git repository where I ran that agent mode.

**8:37** · And if I run in one right now, let's say make a task that launches Neovi. Let's say I want to get just a CLI editor and pull it up in another space. And while this goes, you'll see that circle going. I can actually flip back to something else and be like, "Oh, well, already it's prompting me. Oh, it's needing this."

**8:58** · Let's just say always allow. And then come back here. It's already edited and changed it because everything can be set up perfectly in the settings file. So often in VS Code, I was using the auto and it was just grabbing whatever one and it would go into a thinking model.

**9:13** · And you know, you can change that around a little bit in VS Code. But with Zed, the nice thing is I can just say, "Hey, I'm coding mostly in here. I just want to use GPT 5.2 codecs or sometimes I might need like Sonnet 46 or even I can pull in Opus as well, which isn't on the list here, but I could. Or if let's say you're not, let's say you're using it for writing mostly markdown files, you might want to use a 5.4 instead. You could just hold control, click it, and then it would set 54 as the defaults.

### Picking AI Models

**9:44** · But right now, 52 codeex is kind of my favorite. uh at the time of this video, which you know, a week from now, it'll probably change and I can easily just go in and change those defaults. Uh I'll leave a link directly to their Vim mode.

**9:55** · If you're a big Vim NeoVim guy and you still kind of have VS Code or cursor on the side, I think zed would be a replacement for both for you. It's just that good. So, let's say I have this line here. I can actually uh take this whole line. Let's say I highlight it. I can pull that right into here. Uh let's go with a new task. Uh make better format for markdown. And here you go.

**10:23** · Bam. And then it'll go through. Look at what I've already done. Say, "Oh, yep.

**10:28** · Let's let's fix that. We'll add the context here." You can do control uh semicolon for or you can just manually drop it here. Or you can actually just take it uh and give it context by just dragging and dropping the file as well.

**10:42** · And boom, there it is. it would just grab it and grab it there. So, it works seamlessly with file browsing, just using a selected syntax, saying just grab these lines and then pulling up a new agent with that. You could spin it and just add it directly through the guey if you're a mouse user. I love that they have all these options available.

**11:03** · All right. And then it says, hey, yeah, there's a couple things here. You probably should fix this Z screenshot for the hint. probably wise you have this fixes some capitalization and then adds the actual markdown link for the Z vim binding stuff and then that's about it. So pretty straightforward. Uh since this is a list you don't need to put periods. I like it. So that actually change made all the changes over here.

### Git & Committing

**11:31** · You can see it and it's ready to go. So let's say you're now ready to push this live. What's the Git uh repository look like? Now, you can come over into your page. I'll use a hotkey. You'd see the track changes over here. Now, you could just use your keyboard and mouse and commit and push as you normally would, but a lot of times I don't necessarily want to do this unless it's like a git diff where I want to see exactly what changed like, uh, what did I change here? Well, this is a whole new file, so quite a bit changed.

**12:02** · And this is just an in new image, so it's really not going to tell me much. So, let's just go ahead and close this. And instead, uh, I'm going to close this out, which you can do control or spacew. And instead, I'll go through the CLI because I'm used to just doing most of my commits here. You can do a get status here. I have my own commit where it'll do a git add, a git comment, and a get push all in one. So, I call it lazy g.

**12:32** · And this would publish it. But before I publish it, actually, let's go up a little bit. And uh let's actually change this to a draft. So it doesn't necessarily uh go there because it does get pushed directly to my website. Uh looks like we have some. So let's go ahead and pull those changes. Merge the branch. Now we can do a get push. And it resolved all those conflicts right there. close out.

**13:02** · I'm done. So, so cool on that side of things. So, I really I was messing with it and there's lazy get and other things I actually mess with on the live stream.

**13:12** · Uh, but in the end, this is kind of the workflow I settled on. Now, you might be working on different branches. So, you could actually go back through these branches. Like this is an old uh branch I have. Probably need to delete that branch. You can see your stashes right here. And that's it. This is your work trees. and you can switch your projects.

### Switching Projects

**13:32** · The nice thing is it keeps all your projects in the top left. So it's really easy to switch between projects and it kind of remembers those recent projects.

**13:40** · Uh you can also do like a control O and hotkey pretty much anything and everything using the keybinds. I just want to kind of wet your beak a little bit with Zed and I wanted to just kind of show things that I haven't seen a lot of people do. A lot of other influencers went through and went just like went through the settings file and showed like the toggles for AI and that. I figure you're smart enough to already know all that uh or go and change those yourself. I just wanted to kind of show a little bit more of the advanced side of Zed here. I've just really enjoyed uh a lot of how fast it is, how responsive.

### Themes Tour

**14:16** · Like sometimes I'll go groove groove box dark or even a dark soft I I like or even maybe a jet brands dark if I'm going a little bit darker than usual but typically I try and go a little bit softer. Um if I want more contrast, Groove Box is my favorite. If you want to go real like retro hacker vibes, I went ahead and put like some cyberpunk or Bladeunner stuff in here as I thought. But you have like a whole bunch of community stuff in here.

**14:44** · And man, it just it's so much better than uh a lot of the alternatives where you're constantly like, "Oh, how do I change this?" Or, "Oh, it's too much of a pain to change my theme. I'm not going to do it." You can you can literally bind this to a hotkey if you want. So, if you want to change themes every 5 minutes, you can. And it's not that big a deal. It literally could be a half a second between toggles. Uh which is great. So, I I'm going to leave it here. I love this.

### Final Thoughts

**15:14** · I might make like an entire hourong video going over Zed, uh, if that's interested to you or if this video does real well. But for now, Zed is my home. And I know a lot of people from my chat earlier in live streams were like, he's going to be back on VS Code as they saw me kind of going through my workflow and going, "Oh, I'm going to change this and that." It's way different, but I love it.

**15:40** · So, with that, let me know your thoughts down in the comments below, and I'll see you in the next one.
