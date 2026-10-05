---
title: "GPT-6 Sol VS Opus 5.5 (Fully Tested): I DID A SIDE-BY-SIDE Comparison of BOTH MODELS!"
author: "AICodeKing"
site: "YouTube"
published: 2026-09-23T04:14:04-07:00
source: "https://www.youtube.com/watch?v=2BPJrtelkJQ"
domain: "youtube.com"
language: "en"
description: "https://bambooed.ai is in Alpha. Use Coupon Code: 1000KINGS & get 50% OFF for the first 12 months (applicable for first 1000 users only).In this video, I com..."
word_count: 2459
---

![](https://www.youtube.com/watch?v=2BPJrtelkJQ)

## Transcript

**0:02** · \[music\] Hi. Welcome to another video.

**0:07** · So, OpenAI has launched GPT-6 Soul and Anthropic has launched Claude Opus 5.5.

**0:14** · Both arrived on September 22nd, and both are promising better results at a lower cost. But, after putting them through my own tests, the difference between them was pretty obvious in some places. The contact lens case, the elevator simulation, and the bigger app builds tell you a lot more about that difference than a launch headline does.

**0:30** · There are also several where both models did equally well. So, I want to show you those, too. First, let's talk about what these models bring. Look at the public benchmarks, and then come to KingBench 3 and my longer app tests. So, let's get right into it. GPT-6 brings some of the advances behind Astra into a more affordable model. OpenAI is highlighting improvements in coding, computer use, factual reliability, and how the model communicates.

**0:54** · In its internal factuality test, Soul made roughly half as many mistakes as GPT-5.6. Soul, that is. OpenAI's evaluation, so it doesn't mean every answer you get will be twice as reliable. The price reduction is easier to measure. Soul costs $2 per million input tokens and $10 per million output tokens, half the previous GPT-5.6 Soul promotional rates.

**1:15** · It launched in ChatGPT, Codex, and the API.

**1:19** · There are also improvements to prompt caching across GPT-6. When an agent repeatedly reads the same instructions and context, more of that work can be reused. Developers get new controls and diagnostics for this, which matters when you're running longer coding sessions and paying for all those repeated requests. Opus 5.5 is focused on longer coding jobs and knowledge work.

**1:39** · Anthropic says it produces output over 30% faster than Opus 5, with typical workloads costing around 40% less at default settings.

**1:47** · Those are Anthropic's measurements, but the direction is pretty good, for sure.

**1:50** · It also brings more precise reading of dense charts and screenshots.

**1:54** · Adaptive thinking is now always enabled, and the default effort is medium.

**1:59** · That matters because carrying over your old effort setting doesn't necessarily give you the same behavior or cost. For the API, Opus costs $4 per million input tokens and $20 per million output tokens. So, Sol's standard input and output rates are half the price.

**2:16** · Cached input reads are 20 cents per million on both.

**2:19** · Both have roughly a million tokens of context and a standard maximum output of 128,000 tokens. Sol's exact context limit is 150,000.

**2:29** · One pricing detail to remember is that Sol charges higher rates once the input passes 272,000 tokens. So, the headline price isn't the price for every possible request. Now, let's look at the benchmarks. On Artificial Analysis's Intelligence Index version 4.3.2, GPT-6, Sol at medium scores 40, while Opus 5.5 at medium scores 51. At max effort, Sol scores 48 and Opus scores 58. These are index points, not percentages, and Opus leads at both settings, but the cost gap is substantial.

**2:59** · At medium, Artificial Analysis reports a weighted cost of about 25 cents per evaluation task for Sol, compared with $1.34 for Opus.

**3:09** · That's roughly 5.4 times the cost for Opus in that evaluation. The Opus entries include fallback to other Claude models when safeguards intervene. Also, medium on one provider doesn't mean the same amount of computation as medium on another. So, these are results for the tested configurations, which is what you should compare. Looking at the individual tests, Artificial Analysis reports a rounded 53% for Opus at medium on Terminal Bench 4.0, compared with 19% for Sol at medium. That's a large gap on tasks that require coding and working through a terminal. On side code, Opus gets 59% against Sol's 54.

**3:43** · On Humanities Last Exam, it's 55 against 41.

**3:48** · And on Automation Bench-AA, the gap is smaller, 61 against 58. So, Opus leads across these tests.

**3:56** · But, the size of that lead varies quite a lot. These are all artificial analysis measurements. Its tools and scoring can differ from the launch charts. So, I'm keeping those numbers together instead of mixing different testing setups.

**4:07** · The public results give Opus a strong showing, while Soul has a clear cost advantage. Now, let's come to my testing, because this is where I care about the actual result you get after giving the model a prompt.

**4:18** · Before we go through the results, I ran these tests on Bambood. I kept my existing harness with Bambood underneath to make the overall experience better. It also helps me see how many tokens I'm using and understand the usage as I work through these builds, which is pretty useful when comparing models. First, this is Kingbench 3.

**4:35** · There are eight tasks, each scored out of 10, and both models were tested at medium effort. These are my scores for the outputs I got, with functionality, visual quality, and how well they followed the request, all contributing to the result.

**4:48** · The first test is the elevator simulation.

**4:50** · I asked for three elevators, with each elevator carrying only one person.

**4:55** · People need to wait for another elevator when one is full.

**4:58** · And each person has a destination floor, so the behavior matters quite a lot here.

**5:02** · Opus did pretty well. The mechanics were on point, and the simulation handled the core idea properly. The design wasn't particularly great, but honestly, that's fine. I can accept an ordinary-looking simulation when the actual simulation works. Soul gave me that generic AI-looking design again, and the mechanics weren't on point, either. So, I wasn't especially happy with either part of it. Opus gets eight out of 10 here, while Soul gets seven. Next is the 3D contact lens case.

**5:28** · This needs left and right compartments with caps you can click to open.

**5:32** · The Opus version was such a treat.

**5:34** · It looked right, and it even had the contact lenses inside the case.

**5:37** · That little detail makes the object feel complete, and I really like the result.

**5:42** · The Soul version in Codex was much worse in comparison. The caps clipped through the geometry, which is something you immediately notice when interacting with it. You can have all the code there, but when the pieces pass through each other, the object just doesn't behave properly.

**5:54** · So, this was the biggest gap in the benchmark. Opus gets 10 out of 10, and Soul gets six. Chef's kiss for the Opus generation. Really good stuff.

**6:03** · Then we have the folding table.

**6:05** · The prompt asks for a 3D table that folds and unfolds as you move a slider.

**6:10** · Both were acceptable here, although neither result completely won me over. I preferred the Opus generation, and it was the better of the two for me.

**6:17** · But this was a much closer result than the contact lens case. Eight for Opus, seven for Soul. The panda eating a burger SVG was great from both of them.

**6:26** · I liked both outputs, and there wasn't a meaningful reason to put one above the other. So, that's 10 out of 10 each.

**6:32** · Now, the bow and arrow simulators is another test where the difference really shows. The request is for four targets, with faster completion helping you climb the leaderboard. Soul's version was really basic, and the arrows didn't have a curved trajectory. That took a lot away from the experience for me.

**6:49** · Opus made a much better game, and added mechanics that made it harder, which gave the interaction more substance. So, Opus gets nine here, and Soul gets six.

**6:58** · When I ask for a game, those mechanics are a large part of what I'm looking for.

**7:02** · There's also a combinatorics problem in the benchmark, with an expected answer of 20,460.

**7:08** · Both received full marks on that one, so that's another 10 out of 10 each. Then comes the panda fine-tuning task. This asks the model to create a data set of panda facts, fine-tune Gemma 2B, and provide a local web interface for generating a panda fact on refresh.

**7:25** · Both results were great in my testing. I rated them equally, so they both get 10.

**7:30** · This was one of the stronger results for Soul as well, and it deserves credit for that.

**7:34** · The final task is the 3D wristwatch.

**7:38** · The prompt calls for a working clock based on the current time, smooth hands, a date and day display, and support for two time zones. Again, both were great and I gave both 10 out of 10. So, even though I've been critical of Soul in some of these tests, there are four tasks here where it matched Opus with full marks. Now, this is the final score. Soul gets 66 out of 80, which is 82.5%.

**8:00** · Opus gets 75 out of 80, which is 93.75%.

**8:04** · That's a lead of 11.25 percentage points for Opus.

**8:07** · On my current Kingbench 3 leaderboard, that puts Opus 5.5 at the top, ahead of Fable 5.1 at 92.55, GLM 5.3 at 91.25, and GPT-6 Astra at 90. Soul sits at 82.55, tied with Fable 5. So, Soul can absolutely produce good results.

**8:24** · The gap came from the tasks where physical behavior, interaction, and the completeness of the object or game needed more attention. Anyway, I also tested some larger prompts. I'm calling these long horizon Kingbench, and these are separate from the eight scored tasks. There are four app builds here, and I wanted to see how well each model could pull several requirements together. The first is a movie tracker for the terminal.

**8:45** · It needs to use the TMDB API, display posters through supported terminal image protocols, and adapt to different window and font sizes. Soul's version was basically not working for me. The posters weren't loading, and the whole app felt unfinished. When poster rendering is a central part of the request, that is a pretty big problem.

**9:01** · Opus was way better.

**9:02** · It did what I wanted. The features worked in my testing.

**9:06** · And it felt like an app I could actually ship.

**9:09** · That's my impression of the result.

**9:11** · And the difference from Soul was substantial.

**9:14** · The second app is a poster creator and printer. I wanted to enter a file API key, generate images that fit an A4 poster, print them, and see a framed image in a 3D preview.

**9:25** · All of that should fit into an aesthetic single-page app.

**9:29** · Soul followed that familiar GPT-like visual style again.

**9:33** · And I didn't think the front end was particularly good. Opus looked better to me and its API functionality worked well. This one was closer overall though. I'd call it more of a tie with a preference for how Opus presented the app.

**9:46** · It wasn't the same kind of gap as the terminal movie tracker. Next is the 3D Blu-ray collection. I wanted a library with movie cases arranged sideways where clicking one brings it to the front. The prompt also asks for TMDB artwork and readable spine colors based on the movie poster. Soul did pretty well here. The 3D rendering and placement were on point and there was actual functionality to the app. I liked that and this was a good generation from Soul, but Opus was still better.

**10:13** · The transitions felt much more realistic. The cover images were used better and there were lots of small details that Soul missed. This is where Opus starts feeling like the king of front end for me.

**10:24** · The extra care is visible when you actually use the thing. The last app is a more modern Obsidian clone. I asked for markdown files, animations, inline image generation through file and an agent on the right using the open code SDK with context from the open files.

**10:38** · Soul had functionality so I wouldn't call this a broken result, but visually it went back to that same generic style which I really didn't like. Opus did much better. The open code agent worked well.

**10:48** · The image generation worked well and the overall result was much closer to what I wanted.

**10:53** · This was another clear win for Opus in my testing.

**10:57** · So, what do I think after all of this?

**11:00** · Personally, I prefer Opus 5.5 for these kinds of builds.

**11:04** · The contact lens case, the movie tracker, the Blu-ray library and the notes app all showed why.

**11:10** · I kept getting results that felt more complete with more attention paid to the details I would otherwise have to fix myself. Soul's pricing is attractive and its full marks on four king bench tasks show that it can do good work. If you're running lots of tasks through an API, that lower cost is a real reason to consider it. But for my own app building tests, I wasn't satisfied with how often Soul returned to generic front end or missed important interactions.

**11:33** · A lower token price only helps me so much if I'm then spending more time repairing the result.

**11:38** · Uh I haven't measured that total repair cost here, but it is part of how I judge these tools. My preference isn't just about which model makes the prettier screenshot.

**11:45** · Opus's elevator wasn't especially pretty and I still preferred it because the mechanics worked. Soul's Blu-ray app was good and uh I gave it credit. What I want is for the whole thing to come together. In these tests, Opus did that more consistently. It takes the top spot on my current King Bench 3 leaderboard and it is the model I'd pick first for the kind of front end and interactive app work I've shown here. Overall, it's pretty cool. Anyway, let me know your thoughts in the comments.

**12:07** · \[music\] If you like this video, consider donating through the Super Thanks option or becoming a member by clicking the join \[music\] button. Also, give this video a thumbs up and subscribe to my channel. I'll see you in the next \[music\] one. Until then, bye.
