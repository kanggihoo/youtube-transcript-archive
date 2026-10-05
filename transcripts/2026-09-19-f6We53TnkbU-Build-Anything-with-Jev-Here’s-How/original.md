---
title: "Build Anything with Jev, Here’s How"
author: "David Ondrej"
site: "YouTube"
published: 2026-09-19T14:51:36-07:00
source: "https://www.youtube.com/watch?v=f6We53TnkbU"
domain: "youtube.com"
language: "en"
description: "Get your own Hostinger VPS: https://hostinger.com/davidondrej10Join my discord: https://discord.gg/gY3ebZnq2wFollow me on Instagram - https://www.instagram.c..."
word_count: 6675
---

![](https://www.youtube.com/watch?v=f6We53TnkbU)

## Transcript

**0:00** · So, there's a new AI model in town called Jeff from Typeface AI, and this is a completely different class of AI models. Look at this. This is the Google Trends chart for the search term Jeff.

**0:10** · It's going super viral. In fact, the release video has over 34 million views in like less than 2 days. This model is very different. It doesn't generate any tokens. It generates probabilities. It generates everything in parallel. It's ultra fast. It's ultra cheap. Yeah, there's a lot to unpack. So, the best way to explain this is imagine if you were early to GPT-3, right? Before it was available and understood by the masses. The average person on the street has not heard of Jeff, and you don't understand the implications and capabilities and possibilities that this new type of AI model unlocks.

**0:38** · So, for context, my name is David Andre, and I've been making AI videos for nearly 40 days now since 2023. I've interviewed some of the most credible people in the field, and I myself have built software with AI that generated multiple six figures of revenue. So, when I say that Jeff will unlock a new class of software, I know what I'm talking about. I've spent thousands of hours coding with AI, and this model is completely different.

**1:02** · Just for example, it is over 200 times faster than the current fastest AI models. It's over 400x cheaper than some cheap models like Haiku or GPT Luna, and it has zero hallucinations. Yeah, this model is unlike anything we've seen before. So, in this video, I'm going to explain what Jeff actually is and how it works. Then we're going to look at some of the most insane and useful use cases that people have managed to figure out with Jeff because it's a completely new type of technology, so people are kind of discovering what this can do and how this can be used.

**1:33** · And number three, I'm going to show you how you can build Jeff-powered software and how you can build this into a business. Because think about this. When AI was released, there was a wave of AI startups. Cursor was one of the first to AI coding, and they've sold for 60 billion, right? Now there's going to be another wave of Jeff-powered software. People who can build this and turn it into a startup into a real business. So, later in the video, I'll actually show you how you can take Jeff, turn it into a new software product, and package that as a real business. So first, what even is Jeff? Well, it turns your text prompt into decisions.

**2:07** · And this is what Type-Safe, the creators of Jeff, call a system one model. It returns decisions as probabilities rather than written answers. So you cannot chat with it. It's not a chat model. It will give you like decisions, real probabilities. Basically, it's something between just a programmatic if statement and a full LLM that's way faster, predictable, doesn't hallucinate, and yeah, you can embed it basically into any type of software.

**2:29** · Now, the interface has three building blocks. So for example, let's say uh it's a customer support ticket, right?

**2:35** · You get a choice, which department should handle this ticket? Then you get a score, how frustrated is this customer? And then you get a number, what's the probability that they request a refund? And this you get in like 100 milliseconds. This unlocks real-time software because when your users are on the website and they click a button, they cannot wait 10 seconds for Fable to respond or like 5 seconds for Open is to respond. But if you have Jeff, it's like 100 milliseconds, 150 milliseconds.

**2:59** · Another reason this is very powerful is because one model can handle many tasks, right? So you can have a single Jeff with a single API call, and that same model can access the support ticket, search results, agent actions, and product descriptions. You as the developer, as the person using Jeff, you simply tell it what criteria you want, and you don't have to train a separate classifier or anything like that. Jeff just understands it right away. Now, I know that it can still be understand what Jeff is and how it works. So after seeing a lot of different explanations, this one from Mattia is by far the best, okay? 45 seconds, pay attention.

**3:28** · If you watch this, you will have a good understanding of what Jeff is. So a normal LLM answers like this. You might say, "Is this a invoice a fraud?" It's like, "Based on the line items and the vendor history, this invoice appears to be legitimate." Right? Very slow, 8.5 seconds. Obviously, it's a bit exaggerated, but that's how it works.

**3:47** · Token by token, very slow. Boom, Jeff completely different. Let me replay that.

**3:52** · Jeff, you get the same prompt, right?

**3:54** · Notice that, same prompt. Is this invoice a fraud?

**3:58** · And then, you get probabilities. And it doesn't take seconds, 10 seconds, nothing like that. It's like 100 milliseconds, you know, 0.1 seconds.

**4:07** · Boom.

**4:08** · Gives you the options. And you define it what you want, right? It could be two, three, four, five, up to you. How many like probabilities you want, what categories you want. So, is this invoice a fraud? You would attach the invoice, and Jeff in 0.1 seconds says 88% it's clean, 7% it's fraud, 5% you need to review it, right? So, this is how it works. There's no output tokens, it's just one parallel pass, and every option you give it gets scored at once, and you just get a clean score. So, for example, you can use it in a game, right? There's literally thousands of different use cases, right? You have this character, and he's can shoot forward, right, left.

**4:39** · You give it the options of what it can do. And in a moment, I'll show you how that even applies to something like self-driving.

**4:45** · This character can play the game in real time, and basically on the input, right?

**4:48** · For example, here we probably like is the enemy close? Is there a platform above me? Or whatever. You just give it the relevant input, and it can make these decisions in a matter of like 50 to 150 milliseconds. Now, obviously, all of the benefits come with a trade-off.

**5:01** · So, the the positives of Jeff is that it can pick an action, classify, score, rank, root at like 100, 200x the speed, but it cannot write sentences, it cannot explain itself, write code, reason step by step. It's not going to like replace Astra or Fable. It's a different type of model. So, this is the important thing to understand. Now, before I show you some of the craziest examples I've seen of what people are doing with Jeff, let me give you a bit more detail, that way you have an understanding, not only just like a basic understanding, but you understand it better than 99% of people.

**5:32** · So, as I mentioned, Jeff avoids token-by-token sequential generation.

**5:37** · Instead, the architecture is in parallel. This is the biggest weakness of uh LLMs, right? You Even people like Yann LeCun, they were always criticizing them for being auto-regressive. Meaning, if the tokens at the start are the the answer is probably going to be right? Because it's going to head in the wrong direction. But, when you're generating in parallel, you not only is this not a problem, it's much faster because it's not like one token at a time, it's like all the probabilities are being generated at the same time. Same reason why parallel computing existed in the first place.

**6:06** · Now, as you saw in that example, one request can answer many different questions, right? The category, the urgency, refund eligibility. So, it's not like you need to like build five Jeffs into your app and constantly pay for API calls. You just have a one API call and you list out the criteria you want and you get the probabilities for all these different criterias. And unlike LLMs, which tell you that every single idea is great and that it finally find their root cause and you know, it knows what the issue is now. Jeff is trained to express uncertainty, right?

**6:34** · So, it was made with a new training method called RLCD, reinforcement learning for calibrated decisions. So, instead of saying like, "Yes, this event will happen." it'll give it a probability, right? Like, "This event will happen 80% of the time." And if it's not sure, it'll give it less probability, right? It's expressed to make calibrated, accurate decisions. Now, again, I need to really make this clear. The price and the speed are are the striking things here. The latency is between 70 and 500 uh ms.

**6:59** · I only seen like people take like 300 ms when they were processing hundreds of requests, right? So, usually it's around 100 150 ms.

**7:10** · The price is pretty insane because they literally uh don't even charge for output. It's free.

**7:16** · So, the price is only 0.042 per million uh output tokens. So, that is $42 per billion uh input tokens. So, again, output is free. You only pay for input tokens. So, for example, if your app made 1 million different API requests with 1,000 input tokens each, you'd only pay $42, right? And you can you can build a business that makes tens of thousands of dollars like that. Now, as I promised, let's dive into some of these examples of the most impressive things people have built. First, predictive spreadsheets from Nader from Cognition AI.

**7:47** · So, this again would not be possible with LLMs, or it would be possible, but it would be so slow and it would be very expensive, right? Here, you can have a spreadsheet and you can have some data and you can, for example, type in urgency and Jeff will evaluate every single row against the urgency. So, literally, as you type, it figures out you want each row rated from no follow-up needed to urgent. And again, it takes around around 100 ms and it can do that for hundreds of rows. Look at this.

**8:15** · 100, 200, 300 rows. Boom.

**8:19** · Incredible. Literally, classifying and labeling large amounts of data has never been faster, easier, and cheaper. Let's look at another example. As I mentioned, self-driving. This is pretty incredible.

**8:29** · Again, you just give it some inputs. You can see like distance from cars on the right, you know, the speed, the basic inputs. And then, it can make decisions like accelerate, slow down, stop. Okay, red light. It wants to stop and starts driving. Turn right. Okay, there's an object. It drives around it. And this is the model. It doesn't require hundreds of hours of like footage from the road. It just needs these inputs, a few radars or like a camera, and it can self-drive a car. And it can even avoid like unexpected obstacles on the road.

**8:58** · And it can do it in real time, which, you know, if you put in like Opus 5 or GPT-6, it would take a couple seconds to make the smallest decision, which is not possible for self-driving, obviously. If you need 10 seconds to react to a red light, you're probably going to get into a car crash. Another use case that I received a step change is computer use. This is something that has been possible, but not as fast and definitely not as cheap.

**9:24** · Look at this pricing. It's basically zero, right? Sam Altman and Dario and everybody, they talk about like intelligence too cheap to meter. You've heard OpenAI say that infinitely, but only now with Jeff this is actually the case, right? So, this is um getting a flight, booking a flight.

**9:39** · Jeff is navigating the interface. And look how fast he is.

**9:43** · Astra and you know, you can't even imagine this with LLMs. Like, forget about it. Even like running in a fast mode, right?

**9:50** · Doesn't matter. This is just insane. 100 milliseconds, 150 milliseconds per decision, per action.

**9:56** · And it doesn't like miss-click. It doesn't, you know, output hallucinations. Again, it's typed like Type Safe AI, right? So, not only is it super fast and super cheap, but it also always outputs the structured output you want, the decisions you want. It never will tell you like "Hello, world." when you want probabilities. So, this is an incredible improvement to computer use. All of this took like $0.004 and took just 7 seconds from loading Google Flights to actually having the specific flight.

**10:25** · So, having the ability to literally embed intelligence into your software at a fraction of the cost and like hundreds of times faster than ever before will obviously unlock a whole new sea of possible softwares. Like, your imagination is the only limit, right? And these two charts should convince you even more.

**10:46** · This is the structured output error rate.

**10:48** · And even like the best models you get like Astra, Sol, Luna, they still hallucinate on structured output, right? So, you give it a JSON schema that you want it to always output. And even like Sol and Astra, 1%, 0.8% will give you like incorrect fields or some issue. Jeff is 0% hallucination rate.

**11:08** · Zero hallucinations. Next up, tool call error rate.

**11:13** · So, you know, you say like, "Use this tool call to browse the web." and it forgets to use it. Or like, tool call to open files or or scraping or whatever.

**11:21** · These models, inc- including Astra, which again, Astra is smarter than Jeff, okay? These models are not competing.

**11:28** · They're completely different category of AI.

**11:31** · Astra will still 16% of the time use the incorrect tool or forget to use a tool, stuff like that. Anthropic models are a bit better in this, but still it's unacceptable to like have 1.3% error rate. You cannot build predictable customer experiences or like trading decisions, right? There's many people going to turn Jeff into a trading bot.

**11:50** · Obviously, uh you're going to be insanely advantaged having Jeff trading if you're beating humans, especially on like real-time news, right? Obviously, you're still going to get destroyed by Wall Street, but that's a separate topic. But look, just Jeff has 0% error rate, right?

**12:05** · So, stuff like this, combined with the cost, combined with the higher speed, is going to make so many new startups and businesses possible. So, let me show you how to actually do this. How to use Jeff, how to embed this into software, how to build Jeff-powered software, and yeah, how I would think about it if I was starting a fresh business from scratch that relies on Jeff, because again, this is not going to be an opportunity in 6 months.

**12:29** · It is a new thing right now. It is not mainstream right now. And yeah, opportunities like this just don't come around every other day. So, if you just sit down for the next 15 minutes and pay close attention, you will have an incredible advantage over everyone else in the AI field. So, step one in building Jeff-powered software or building a business on top of Jeff is the idea, right? You need to have the right idea. So, for example, what I will show you in this video is how I would build a Typeform competitor, basically an intelligent form that ranks the candidates, the applicant in real time.

**13:01** · Basically, solving my own problem when you know, I have a wait list or have I'm hiring for a position, you really cannot have a LM reason over it and take 10, 15, 20 seconds for a candidate until you decide whether to show them a Calendly or not. But 100 milliseconds does nothing, right? Another great idea is from Rafal.

**13:20** · He built this test suite, basically, adversarial testing suite that tries to break each release. And this is just Jeff like using our software, right? You can click around, open sites, and see like bugs. So, this is like really incredible. Something that, yes, you could have built this with an AI model, but nobody would put this in their CI/CD. It would take literally like a couple of extra minutes to do all of this. It would take multiple dollars, probably tens of dollars per deployment. And you know, with AI, you're probably shipping to production 20 times per day, at least I am.

**13:51** · With Jeff, this is so easy. This is like so fast, you know, it can run in parallel. He said uh it costs pennies, right? So, it's finally financially feasible, and also time. Like yes, you might allocate a 3 seconds to this, and Jeff just like clicks around and tries to break your site, tries to break your front end, tries to find all of the edge cases. And if you had to pay a human to do this, that's like a full-time job.

**14:12** · Like there's like quality assurance people that just click around and try to break releases. This is literally a full-time human job. Now, it costs a couple of pennies with uh Jeff. So, yeah, the first thing you need an idea, and again, it doesn't need to be anything like a revolutionary. Like I'm not asking you to invent electricity.

**14:28** · Just take existing software that is either fully uh programmatic, right?

**14:32** · Like deterministic, just if-else statement code, or it's powered by LLMs, where it doesn't need to be powered by LLMs. None of the AI sites you see is just code, right? They're using models in a very limited fashion. It's not a full agent. It's just like some intelligence, some decision. Jeff can do that hundreds of times faster, and hundreds of times cheaper. So, you can literally disrupt existing working product just by building a better user experience with Jeff. So, that's the idea. You need the right idea. The second thing, you just need a VPS, right? You don't need to spend five subscriptions on front end hosting, back end hosting, this and that.

**15:03** · You just need a single VPS, and you can host a full-stack web app on a VPS. I know a lot of people are scared of doing this, but it's actually super simple, especially with the latest generation of models. So, let me show you how you can set up your own VPS in a couple of minutes, and basically use it for automations powered by Jeff, for building a full-stack web app, and you can host your full business on top of a single G VPS. You can also use it to host Hermes Agent, Open Cloner, any other agent that you're running.

**15:28** · But, for the sake of this video, we're going to use it to host our full-stack web app without having to have a separate front-end deployment or separate back-end deployment, none of that. So, I'm going to use Hostinger for this.

**15:38** · It's also going to be the first link below the video. All of my VPS's run on Hostinger. Everyone on my team uses Hostinger.

**15:44** · They just make it super simple. It's one of the most affordable options and they have literally templates for everything, right? So, you don't have to be a DevOps expert or a Linux professional. You can just do a couple of clicks and have your own VPS in a matter of 2 to 3 minutes.

**15:57** · So, again, this is going to be the first link below the video. When you get there, just click on choose plan. Go with whatever plan suits your needs. I think KVM 2 is a great default for a lot of people and a lot of use cases. And it's enough to run a full-stack web app for sure. In terms of a period, I would recommend going with 24 months to get the highest savings. Now, to get even better deal, go to the right, click on have a coupon code and type in David to get additional 10% off your Hostinger plan. Now, on the left, you can select a server location. Just choose something close to you.

**16:24** · And in terms of the operating system, you can either go with a plain OS or select an application. But, for this use case of building a full-stack web app, I recommend going with a control panel and going Coolify. And this is basically an open-source platform that will replace a lot of the closed hosting solutions.

**16:40** · So, it's very easy to just deploy whatever software you're building on top of a VPS, like your own server, again, virtual private server. It's your own and to manage your own deployment. So, yeah, Coolify makes that a lot simpler.

**16:52** · As you can see, Hostinger has a one-click Coolify preset that you can just click and uh yeah, as easy as that.

**16:58** · So, next, let's click on continue and finish the checkout. And to finish the checkout, just log in with your Hostinger account or create one if you don't have it. And then, obviously, fill out your credit card and billing details. So, while the VPS is being set up, which usually takes like 2 to 3 minutes, we can literally get started on building this business. So, I'm going to be using GPT-6 Astra medium fast. And uh I mean, Fable is fine as well, but Astra is the best right now. And I'm going to literally select an empty folder.

**17:23** · Let me prove it to you. Is this folder empty? Boom. I'll check the folder including hidden files. Yes, this folder is empty. Okay.

**17:31** · Great. Now, let's build a full-stack web app powered by the new model from Type-Safe AI called Jeff.

**17:38** · Okay, this doesn't spell it correctly, so I need to spell it.

**17:41** · I used the API to browse the web to learn more about it and then help me build a basically a competitor to Typeform where we ask a couple of questions and the app is going to split in like a 60/40 view where on the left is the 60% you have the form and we can ask like three or four questions and then on the right we actually see like the admin view of what's happening with this new AI model from Type-Safe AI. Okay, it's also misspelled here. Boom. So, obviously I'm doing dictation to be faster.

**18:09** · We can nicely visualize and see the probabilities it's assigning for each user whether he's like highly qualified, qualified, or like a mediocre or disqualified, right? So, these will be the four different things we want in the structured output. And yeah, so go ahead and just build this app full-stack right now. We're going to deploy it on Coolify on our Hostinger VPS.

**18:30** · No overthinking. Get to work and build this app.

**18:34** · We're just going to launch with Astra, guys. I'm not even joking. Let's check back to Hostinger. All right, so the VPS is ready as you can see we're running Coolify on Ubuntu 24.04.

**18:43** · So, again, the same VPS you can reuse it for many different things, right? You can host your web app, you can host your agents. Like you got a lot of CPU memory usage. Uh like you you utilize it. Run it for experiments. Run it for automations.

**18:56** · Anything that needs to be available 24/7, just host it on your VPS, right?

**19:00** · Literally every single month that goes by I have more VPS servers than I had before. And if you boil it down, it makes sense because as AI gets better, the two biggest markets in the software world will be hosting and inference, right? And by far the best hosting option for your own VPS is Hostinger. So again, this is going to be the first thing below the video and thank you Hostinger for sponsoring this video. Now, let me jump back into BB to see what's happening. So, it needs a type safe API key, so I'm going to cancel that and I'm going to say we're actually going to use open router.

**19:30** · So, find an open router API key somewhere on my MacBook and use that, copy it over into this project into uh environment file. So, actually what uh Astra tried doing there is try to ask for type safe API key, which is obviously the type safe is the company that created Jeff. So, they have their own API. The problem is that it's behind a waitlist, right? And not everybody got accepted. So, obviously there is workarounds. You can either use open router and just type in Jeff, boom, there it is, or Vercel AI Gateway if you're already using Vercel.

**19:57** · Doesn't matter, it's any AI provider, inference provider that has uh type safe API integrated, you can just use it to implement Jeff into your own software. So, let's see how this is going.

**20:12** · I already have open router API key, so I just told it to find one on my MacBook.

**20:16** · Uh if you don't have one, you can just create an account, takes 20 seconds, and give it to Astra to just cook.

**20:23** · Just make sure to give it some limits so that it doesn't uh burn it. But, honestly with uh Jeff, you don't even have to worry about the limits. You can literally charge up $5 and that will last you thousands of users in your app.

**20:33** · Like, really the pricing here is incredible. And yeah, so now we have our own VPS. We have uh Astra building this thing. So, this is the life of an agentic engineer. You just kind of set the direction of the project and you were waiting for the agent to make it into a reality. I mean, with Astra, let's be honest, with Astra anything is possible, right? So, if you just have the right idea and a bit of work ethic, you can build anything.

**21:00** · Okay, so Astra is finished there. I had to tell it to stop overthinking because it It running a bit slower than my uh liking even though I had it on medium. But anyways, let's see what it built.

**21:13** · Okay, it called it signal.

**21:15** · So, we have the classic AI thing just like a lot of small text, but that's whatever. Let's focus on the main thing, right?

**21:23** · Which is the core feature, the form. So, what would you like to Okay, actually I'm going to tell it to in the meantime remove all of the small text and details like everywhere you just added a lot of unnecessary UI elements like these small text descriptions. None of that I approved, just remove them to make the front end lot simpler, cleaner, more minimal. I'm not really sure what position this is hiring for.

**21:47** · Maybe I should have told it that, but let's see.

**21:50** · Um I want to delegate recruiting and hiring.

**21:55** · Okay, continue.

**21:56** · Boom.

**21:57** · All right. So, we here we have some signal journey.

**22:02** · All right, criteria. Okay, here it is actually.

**22:05** · Evaluating fit for a business automation service, you can inspect the rules behind every decision.

**22:10** · Highly qualified. Okay, so nice. This is exactly what I was looking for.

**22:14** · So, this is how uh Jeff in real-time evaluates uh me as a potential lead. So, obviously I didn't know it was for a business automation service. So, let's uh Let's do a founder executive. Continue.

**22:29** · Let's see how that changes things. Okay, slightly more qualified. Let's do 20,000 plus. Okay, qualified now. Lot more qualified.

**22:39** · Uh would you like to make it happen as soon as possible? So, now we should be even Yeah. So, we went from qualified to highly qualified. Nice. So, obviously my first response wasn't the the best because I didn't give uh Astra the criteria. It just kind of figured that out. But yeah, this is how Jeff works.

**22:56** · You can see that like basically it's real-time like 100 milliseconds um 150 milliseconds, whatever. Actually, it's here, 488 milliseconds round trip, okay? So, it's a bit higher than average, but still pretty clean, pretty good.

**23:09** · So, see like this is insane. So, I'm just going to turn on fast mode here and go low.

**23:14** · Uh stop doing the refactor and just help me deploy this on uh my hosting VPS.

**23:20** · This is the beauty of the AI agents. You can literally have them help you deploy it, help you set it up. They are very very familiar with uh Ubuntu Linux machine, which is what a VPS is, right?

**23:30** · Even when you're using Coolify, remember that this is still running Ubuntu Linux, and the agents love Linux. It's the most documented operating system, the most open-source operating system. So, yeah, the agents, if they could definitely choose, they would want to be ran on Linux. So, that's why you should run a Linux uh VPS.

**23:48** · Most of VPSes are Linux. There's some that are uh Mac-based, like Apple Silicon, for different purposes purposes, but uh just go with a Linux one. And with Omar Cheema, a lot of people are switching their personal computer to Linux as well. So, it's a easy prediction. The rise of Linux is literally happening in front of our eyes, and you know, in 1 or 2 years, more and more people will be running will be running Linux purely because agents are uh becoming the way we interact with computers. All right, so Astra is asking, "What's my Coolify dashboard URL?"

**24:21** · Uh uh uh So, here I can just click on manage panel, and I'm just going to show you guys how to do it for the first time.

**24:27** · Literally, you don't have to know anything. Say like, I'm here right now.

**24:32** · Just have the agents help you set it up.

**24:34** · It's It's as simple as that. I know it can be intimidating, like setting up a VPS for the first time or using Coolify for the first time, but you can literally just tell what you want done.

**24:43** · Speak to Astra, speak to Fable, and these agents will guide you through all the decisions. Okay, so first we need to create an admin account, so let me do that real quick. Boom, create account.

**24:54** · Okay, so next I'm going to take a screenshot of this part and share that with label.

**25:00** · Done. I'm here now. Okay, continue.

**25:03** · Boom. So, what what do they ask for?

**25:06** · Dashboard URL.

**25:07** · What now?

**25:11** · Providing screenshots to these AI models are super OP. And to make it even easier, obviously, you could just use Cortex uh computers to click through it, but some of these setups actually do recommend you do yourself because you learn a lot by going through the setup.

**25:24** · So, let's click on this machine and create my first project.

**25:33** · Boom.

**25:37** · So, let's click on deploy your first resource.

**25:40** · And then I don't know if we're going to go through GitHub or just uh direct.

**25:44** · We'll see what's easier.

**25:45** · Yeah, so we're going to go with GitHub here. So, Astra's asking if we can create a private GitHub repo.

**25:50** · Yes, create a pri- private GitHub repo named Jeff demo.

**25:56** · And uh push the entire project in there.

**25:58** · Just make sure to get ignore everything like the environment file.

**26:02** · It was already suggesting it, but it's a good practice to just double remind it.

**26:06** · Let's click deploy and we will need to connect this.

**26:11** · So, since I'm already authenticated with GitHub CLI on my computer, Astra can just easily use it to create a new GitHub repo.

**26:19** · And then it's going to give me the link to that. All right, so here's our GitHub repo right here. Jeff demo with all of the code.

**26:26** · And uh correctly get ignored environment variable. Fully JavaScript. This is the code behind the signal app right here.

**26:33** · And we're here we have the info webhook endpoint, instance endpoint.

**26:39** · And uh should have enough. All right, so here let's click on register with GitHub. And obviously, make sure to if you don't have a GitHub account, make sure to create one. It's one of the most essential accounts to have in the AI era.

**26:53** · I have 2FA, so I need to use GitHub mobile here. Do not share your one-time code, guys.

**26:59** · I'm just joking.

**27:01** · It was a viral tweet of somebody sharing their one-time six-digit code. So, this jumps directly into creating the app.

**27:06** · So, let's just click create. And this will probably redirect us back. Boom, install ball stories. Select the ball stories. Let's select this Jeff demo.

**27:14** · All right, good like this. Install.

**27:16** · Okay. Add a resource.

**27:20** · Go to the GitHub ball story. Okay, let's select this.

**27:23** · Load repository.

**27:26** · Continue. So, on the left, let's click on build pipeline.

**27:29** · Let's go with our Dockerfile here.

**27:32** · And again, I'm just going to have a Astra help me set this up.

**27:38** · Oh, yes. The main thing is the environment variable here.

**27:44** · Things are correct. Environment variables.

**27:48** · All right, here on the left. Boom.

**27:51** · Add.

**27:54** · Add a open drawer API key. Boom. Value right here. Obviously, do not share this with anyone. Keep your API keys private.

**28:02** · I'm going to revoke this before uploading this video.

**28:05** · Add variable. Okay.

**28:07** · All right. So, we should see four different variables, two in production, two in preview.

**28:11** · Now, let's go to the left to persistent storage.

**28:14** · All right, {slash} app {slash} data.

**28:16** · Boom. Add volume.

**28:18** · Then domains. We don't have any domain for this. Okay, we should change this to HTTPS.

**28:24** · Here icon.

**28:26** · Boom. Save.

**28:29** · All right. So, let's go to top actions and deploy.

**28:34** · The build is in progress. Okay. Says finished. So, let's go to top right.

**28:40** · Go to the link. Here we need to enter the username and password. So, put in admin and the same password you put in the variable app password.

**28:49** · So, it's just rejecting my password, so I'm just going to reset it. I had to ask Astra to generate a new one.

**28:54** · Some random characters, so let's go back to the environment variables and change the app password right here.

**29:00** · Boom.

**29:03** · Make sure this is good. All right. Okay.

**29:05** · Okay.

**29:06** · Update.

**29:09** · I'm going to update this one as well.

**29:10** · Boom. Boom. Boom.

**29:12** · Looks the same. Update.

**29:14** · All right. So, again, we need to go action and redeploy.

**29:18** · This is going to create a new deployment.

**29:20** · And hopefully the password works this time. Okay, it's done. 10 seconds faster than last time. Let's click on links top right.

**29:27** · Boom. I'm going to paste the password first.

**29:30** · Admin.

**29:32** · And we're in. So, this is the new simpler version of the app like we requested. So, again, this is for building automation, right?

**29:41** · So, you can put this for anything like hiring developers, hiring lawyers, whatever. So, let's see how this works.

**29:47** · This time I'm going to be a qualified candidate.

**29:51** · I really have a lot of like repeatable processes in my business that I'm outsourcing to cheap overseas labor, and I feel like there's opportunities for automation.

**30:00** · Yeah, let's see. If I go into highly qualified, mediocre. Then why?

**30:06** · Okay, I'm just going to go try to try to completely troll it. So, I'm going to do just exploring.

**30:13** · So, that's mediocre as well. I'm going to say $100,000 that should move me more disqualified. No, okay.

**30:21** · Just researching.

**30:23** · Okay, so I'm still mediocre.

**30:26** · So, obviously we could play with the criteria a bit more for a job, but you can see that last time when I filled it out successfully, I went from like mediocre to qualified to highly qualified. Now, I was doing the worst possible um submission, and I'm staying in mediocre, right? So, again, we fully delegated to Astra. I haven't even configured the prompt for Jeff or anything like that, but it already works. We already have something that is extra intelligent compared to Google Forms or Typeform.

**30:52** · And you can see that this really unlocks a sea of possible applications that were not possible to build before. So, if you want to build a business, there's never been a better time to do this before.

**31:03** · And if you're not sure what ideas to go with, think about what is now possible with Jeff.

**31:07** · What existing softwares will be disrupted by either having a lot faster and a lot cheaper AI, if it already has some AI, or if it doesn't have AI, implementing type-safe, predictable, quick, reliable intelligence into that software to make it better. So, really, these are the three steps that it takes to build a Jeff-powered software. And by the way, I just launched a new Discord server for humans. It's literally called Humans. So, if you want to be a part of that, it's going to be the second link below the video. Make sure to join. It's completely free, and that's how you know about things like Jeff faster than everybody else.

**31:38** · So, make sure to join the Discord server. And once again, if you don't have your own VPS, what are you doing in 2026? Go ahead, click the first link below the video, and set up your own Hostinger VPS.

**31:49** · Again, one of the most affordable and easy options out there. Super easy to set up. All of my own VPSs run on Hostinger. So, with that being said, hopefully you found this video valuable.

**31:58** · And yeah, Jeff is incredible technology.

**32:01** · I cannot wait to see what this type of AI models becomes over the next year or two.

**32:07** · With that being said, thank you guys for watching, and have a wonderful productive week. See you.
