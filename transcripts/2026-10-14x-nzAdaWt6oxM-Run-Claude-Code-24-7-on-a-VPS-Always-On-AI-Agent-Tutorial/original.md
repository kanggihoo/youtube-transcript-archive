---
title: "Run Claude Code 24/7 on a VPS (Always-On AI Agent Tutorial)"
author: "Metics Media"
site: "YouTube"
source: "https://www.youtube.com/watch?v=nzAdaWt6oxM"
domain: "youtube.com"
language: "en"
description: "This video is sponsored by Bluehost. Learn how to run Claude Code 24/7 on a VPS so it keeps working after your computer is off, and send it tasks straight fr..."
word_count: 2648
---

![](https://www.youtube.com/watch?v=nzAdaWt6oxM)

This video is sponsored by Bluehost. Learn how to run Claude Code 24/7 on a VPS so it keeps working after your computer is off, and send it tasks straight fr...

## Transcript

### Intro

**0:00** · In this video, I'll show you exactly how to run Claude Code 24/7 on a VPS. That means that Claude Code runs on a server instead of on your own computer, so it can keep working after you turn your computer off. And because it's always running, you can even send it work straight from your phone, anywhere at any time. And what you're seeing on your screen right now is exactly that.

**0:21** · This is Claude Code running on a VPS, and I sent it one message from my phone asking it to build me a website. I was away from home when I sent it, and my computer was completely off. But because Claude Code is running on that server and not on my computer, it kept working the whole time. So when I got back, the website was already finished and completely live.

**0:41** · That's what makes this so different from just chatting with Claude. In a regular chat, Claude can give you answers, but you still have to go do the work yourself. Claude Code actually does the work for you, and because it's running on a VPS that never turns off, it keeps working even after you walk away, and it's always ready for your next task.

**0:58** · So if you wanna change something on that website while you're away, you just send it a quick message from your phone and it's done in seconds. And it's not just websites. You could have it build a Discord bot for your community that stays online around the clock, or a script that checks your online store every hour and sends you a message if it ever goes down.

**1:15** · And if you're working on an app, you can keep building it from your phone or hand off a bigger job before bed and check on it in the morning. The possibilities of what you could do with a Claude Code VPS are really endless. And if you've ever heard the term Always On AI Agent, that's exactly what this is, and we're building it together in this video.

**1:33** · My name is Caleb, and I'll walk you through setting this whole thing up step by step. By the end, you'll have Claude Code running on your own VPS and connected to your phone, ready to take on whatever task you throw at it. So with that said, here's what you can expect next in this video. First, we'll get a VPS that comes with Claude Code already installed.

**1:50** · Then we'll sign into your Claude account and set it up so it keeps running even after you leave. After that, we'll connect it to your phone. And finally, we'll give it a real job from your phone and watch it finish it all on its own. And before we start, there are two things that you'll need. The first is a paid Claude subscription.

### What You'll Need

**2:07** · Claude Code isn't available on the free plan, so you'll need at least the Pro Plan, which is $20 per month. And if you don't have a Claude account yet, I'll leave a link to the Claude signup page down in the description, so that way you can go there and set that up first. The second thing that you'll need is the VPS itself.

**2:22** · Beyond your Claude plan, it's the only thing in this video that's gonna cost you money. For the VPS, we'll be using Bluehost, who's sponsoring this video. So thank you to Bluehost for making that happen. Their VPS comes with Claude Code already installed, so there's nothing to instal by hand, and it starts at under $5 per month.

**2:39** · To get your Claude Code VPS at the lowest price possible, just go to this link on screen right here or click the first link at the top of the video description. Once you go to that link, you'll land on this page right here, which is Bluehost's page for running Claude Code. From here, let's go down and click View Plans. That will bring you down to the plan options here. First, you'll choose your billing term.

### Choose Your VPS Plan

**3:00** · It's automatically gonna be set to two years, but I'd recommend going with the one-year option. It's cheaper than paying month to month and you get the same monthly price as the two-year plan, but just without being locked in for so long. Now for the plan, you'll see that NVMe 4 is marked as recommended, but for this video, I'll be going with NVMe 2.

**3:19** · Since we're just getting started, the lowest cost option makes the most sense and it runs Claude Code just fine. And if you ever need more power later on, you can just upgrade your plan at any time. So under NVMe 2, I'll click Choose Plan. And that's gonna bring you to this page right here where you're able to configure your server. The first thing you'll choose is your location. Bluehost will automatically pick a data centre for you.

### Configure Your Server

**3:43** · And in my case, it's this one here in the US. So I'll just leave this how it is. I'll scroll down and click Continue. Next, you'll see your hardware. I'm going with NVMe 2, so that's selected here.

**3:55** · Click Continue.

**3:58** · Next is your software. As you can see here, Claude Code is being automatically installed, which is exactly what we want. So I'll scroll down and click Continue. Next, you have support and security. You'll see this optional add-on here called Premium Support. It gives you a dedicated team for things like server tuning and migrations, plus priority chat and phone support. This add-on is $150, so it's really meant for people running things at a large scale.

**4:25** · In my case, I don't need this, so I'll just go down and click Continue. Next is AI credits. We don't need these because we're gonna be signing in with our Claude account. So again, click Continue. And then we don't need anything here under Advanced Options. So just click Continue to check out. Now on this screen, you can create your Bluehost account here at the top, enter your billing information, then review your order here on the right.

### Check Out

**4:53** · You'll notice this professional email trial that gives you one month free, but then it renews at $2.99 per month. So if you don't want this, you can click on this trash can icon here. And after you've entered all of your information, just go down and click Submit Payment. And here we are in our Bluehost dashboard. Once your payment goes through, this is where you'll land.

### Set Your Root Password

**5:16** · And if you see any popups here, you can just close out of them. To find your new server, go down to the left here and click My Plans. And right here is your new VPS. When you first get here, it may say building your VPS while Bluehost sets everything up. That process can take a few minutes, so just pause the video and wait until that's done.

**5:38** · Now, the first thing we'll do is go to the top right and click Manage. And this right here is your server dashboard. Down here, you'll see your server's IP address, which is basically your server's address on the internet. And down here you have the root password, which is the master password for your whole server. So if you ever need to reset this password, click Reset Password and you're able to type in a strong password right here.

**6:07** · Once you have that typed in, click Reset Password. Close out of this. Next, we'll click Open Terminal. This will open up a new tab with the browser terminal, which is just a window where you're able to type in commands for your server. Here it's gonna ask you for your password, which is what we just created. So type that in right here. Once you've typed it in, press Enter on your keyboard. And now we're logged in.

### Open the Terminal

**6:40** · This message is just letting you know that Claude Code is already installed and ready to go. Now, if you've never used a terminal before, don't worry because we'll only be using a few simple commands. You're gonna be able to find every single one of them in a document that's linked in the description. So just go down to the video description and find the Google Drive link there.

**6:58** · You can have that document opened up on another monitor while you watch this video. All right, now before we launch Claude Code, there's one important step and it's the key to the whole 24/7 part of this setup. If we start Claude Code right here and then close this tab, Claude Code closes with it. So instead, we're gonna start it inside a tool called Screen, which keeps everything running on the server after we leave.

### Keep Claude Code Running 24/7

**7:20** · So here, let's type screen dash S claude, then press Enter on your keyboard. Next, we'll give Claude Code its own folder to work in. Type m-k-d-i-r projects, then press Enter, then type cd projects.

**7:51** · Press Enter again.

**7:53** · All right, so now we created a new projects folder and we're inside that folder. So now Claude Code will know to work out of this specific folder. Now let's go ahead and launch Claude Code. Type claude, then press Enter. And this will bring us into the Claude Code Setup Wizard. The first thing it asks is which textile you want. I'll be keeping this on the dark mode.

### Launch Claude Code and Sign In

**8:16** · You're able to use your arrow keys to move the selector up and down if you want to.

**8:20** · I'll press Enter.

**8:23** · Next, it asks us our login method. We'll be doing the first option, which is the Claude account with subscription.

**8:29** · Press Enter again.

**8:32** · And from here, you'll see this super long link. All you have to do is highlight it and it's gonna automatically be copied for you. Now open up a new tab and then paste in that link. Press Enter on the keyboard. And here, you may be asked to log into your Claude account. And then after you log in, you'll be brought to this screen here. Let's scroll down and click Authorise. Then click Copy Code.

**9:02** · Now you're able to close out of this tab. Now we have to paste in this code here. To do that, press Control+Alt+Shift on your keyboard. And if you're on Mac, whenever I say Control, you'll just replace that with Command. On the left, click on click to view clipboard contents. Then highlight everything here, delete this, then press Control and V on your keyboard. And this will update your clipboard in your terminal to actually have your authorization code.

**9:33** · Now to close this, press Control+Alt+Shift again. And then here, we'll click in and press Control+Shift+V. And now your authorization code is pasted in here. Now press Enter on your keyboard and we're successfully logged in. From here, just press Enter again and once again. Now it's asking if you trust this folder and be careful here because no is selected by default. So press the down arrow on your keyboard and press Enter.

**10:09** · Claude Code is now running on your server. One thing to notice here is down at the bottom where it says auto mode on. This means that Claude Code handles the permission prompts on its own, so you don't have to sit there and approve every single command. And since this server is completely separate from your own computer, that's exactly what we want. You may also see this notice here about an update being installed.

**10:29** · You can just ignore this for now. The next step is to connect this to your phone. On our keyboard, let's type slash remote-control, then press Enter, then press Enter again. Now from here, you'll just grab your phone and open the Claude app, which is free on iPhone and Android. Just make sure that you're signed in to the same Claude account. In the top left, hit these three lines, then tap Code.

### Connect Your Phone

**11:04** · And you should see your server right here with this green desktop icon.

**11:08** · Tap on that.

**11:11** · And this is the exact same session that's running on your server. So anything that you send from here will run over there. Next, let's give it some work to do. If I tap on Opus 5.5 here at the bottom, I'm able to change the model and the effort level as well. For now, I'll just leave it how it is.

### Build a Website From Your Phone

**11:29** · And then here, I'm able to type in my message and talk to my server just like I would on my computer or in any other type of Claude chat. So here I'll just say, "Build me a simple one-page website for a coffee shop called Sunday Coffee Club. Put it live on this server so I can open it in my browser." And just like that, I'll send this message.

**12:08** · Now back over here on my computer, you can see that Claude Code is actively working on this task on my server. So this gives me a few options here. I'm able to communicate with Claude Code on my phone like I just showed you. I can talk to it here in the browser terminal, and I can also talk to it using something like the Claude desktop app.

**12:25** · What you do with this and how you talk to your server is totally up to you. Now, we'll wait for a few moments here and let it build this website. Okay, so it's officially done. Back here on my phone, you can see that it sent me a message regarding the status of the website. I can open this link here and I'm able to review the website that it just created.

**12:46** · And then back here on my computer, I can scroll up here and then I can copy the link right here, open up a new tab, and then paste in that link. And I'm also able to review the website on my computer. Now from here, I can close out of this and I'm also able to close out of this terminal. And now even with that terminal closed, my Claude Code instance is still running.

**13:13** · And if I wanna get back into the terminal, I'll just click Open Terminal again. But from this point forward, it's way more convenient for me to use my phone or the Claude desktop app. You now have Claude Code fully set up on your VPS. And if you haven't gotten your VPS through Bluehost yet, make sure you go to this link on screen right here or click the first link at the top of the video description.

### Wrap Up

**13:33** · If you found this video helpful, make sure to leave a like and subscribe for more tutorials just like this one. And with that said, thank you for watching and I'll see you in the next video.
