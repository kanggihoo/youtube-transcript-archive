---
title: "클로드 코드 200% 끌어올리는 6가지 비밀"
author: "Jay Choi | 인디해커 라이프"
site: "YouTube"
published: 2026-09-30T03:00:12-07:00
source: "https://www.youtube.com/watch?v=sY7lHUg7HeE"
domain: "youtube.com"
language: "en-US"
description: "Opus 5.5와 Fable 5.1이 나오면서 클로드를 쓰는 방식이 바뀌었습니다.앤트로픽이 새 모델과 함께 바꿔 놓은 설정부터, 쓰던 스킬을 전부 지운 뒤에 결국 다시 돌아온 스킬까지.지금 기준으로 클로드 코드를 제대로 쓰는 6가지 비밀을 정리했습니다.⏱ 타임라인00:00 인트로0..."
word_count: 1843
---

![](https://www.youtube.com/watch?v=sY7lHUg7HeE)

## Transcript

### 인트로

**0:00** · With the release of Fable 5.1 and Opus 5.5, I ended up rebuilding my Claude setup almost entirely from scratch. As the model changed, methods that used to work well often became tedious or expensive, while conversely, there are new features that are truly a waste to overlook. So today, I plan to summarize how to properly use Claude in the current meta.

**0:22** · In the first part, I will cover the changes Entro Pick made with the new model, and in the latter part, I will introduce the skills that remain after I deleted all the skills I was previously using. None of these are difficult; they only require a few settings, but the difference in feel is definitely noticeable, so I recommend reviewing them one by one. The first thing we need to address is the Effort Value. In Claude Code, if you input " Fort" into the slash, you can select levels like Low, Medium, High, and Max.

### 1\. 노력 값 (Effort)

**0:57** · Many people believe that higher values make the character smarter, but that is actually a bit different. Recently, a Claude Code engineer posted an article summarizing their own experiments based on Effort Values. To summarize the argument in a single sentence, the Effort Value determines how much Claude verifies things on his own and how much he acts based on his own judgment. For example, let's say someone assigns me a task and gives me a month. I would likely take my time to ensure the most complete result possible.

**1:27** · However, if they asked me to complete the same task in a single day, I would first quickly produce a result that meets the request and then make slow adjustments. The Effort Value works exactly like this.

**1:42** · In fact, it is created in Fitness. If you input this single sentence exactly, in "Raw," you get exercise records and simple graphs, but conversely, if you raise it to "Max," the functionality becomes much more robust, and it even comes with a heat map like this.

**1:57** · However, this also means Claude makes more decisions on my behalf, which could lead things in a direction I don't want. So, when should I use which one? With the Entro Authority, the default is "Medium." Medium is sufficient for most tasks, and you only need to raise it when necessary.

**2:17** · Looking at it step by step, "Raw" is better for coming up with ideas or making simple modifications. This allows me to quickly exchange ideas and guide the flow. Medium is sufficient for general tasks, while High should be used for critical tasks like bug fixing . Max is used when you want to entrust the entire process to Claude from start to finish. Additionally, if you want to find the perfect default value for you, it is a good idea to have Claude test it directly like this.

**2:48** · Recommended values are merely averages, and there may be specific values that are better suited for your specific task. You can simply set the most satisfactory level based on the results as the default.

### 2\. AGENTS.md

**3:02** · Next is the story of Entropy gradually opening its doors. Those who use the Claude Code will be familiar with the Claude .m file; it is a file that acts like a manual, which Claude reads first whenever he starts a task. However, other agents, including the Codex, read files named Agent .md. They perform the same function but differ only in name.

**3:25** · Consequently, those of us who use the Claude Codex together had to manage two files with essentially the same content . But now, the Claude Codex can read both .md and MD files. If the Claude .md file is not in the folder, you find the Agent .md file and use that as the instruction. So now, you can manage the instructions for all agents in one place with just a single Agent .md file . If we were to compromise one more time, it would be the usage reset right .

### 3\. 사용량 리셋권

**3:56** · In the last Codex video, I mentioned that the reset right was what I envied the most. It is a feature that allows you to immediately restore usage using a saved reset right once you close the limit, and this feature has now been added to Claude as well. If you go into Claude's settings and look at the Usage tab, you should see a new reset section like this. You likely received one of these to celebrate the release of the three models, but please note that they are time-limited.

**4:22** · They are valid until October 23rd, so I highly recommend using one before then, although it is a bit of a shame that they are limited.

### 4\. 스킬

**4:32** · From here, I would like to take a look at the skills. In the last video, I mentioned that Boris, who created the Claude code, told us to delete everything up to the Claude .md MD post and observe what the model does. In fact, modern models are powerful enough on their own, so I tried using them without anything for a while, and honestly, it wasn't as inconvenient as I expected. Rather, it could be a burden to use them unnecessarily.

**4:59** · However, even while using it, there were moments when I felt I really needed to use the "I Gun" skill. So, here, let's call them "proven survivors "—I intend to introduce only the skills that have survived and are still good enough to use. First is Token Saving. Honestly, when using Opus 5.5, I can definitely feel that the amount of useless chatter has decreased. Above all, the response speed is really fast.

### 5\. 토큰 절약

**5:27** · Therefore, Token skills aren't as essential as they used to be. However, if you want to save tokens, you should look at these three skills: Cave Man, I have ADHD, and Ponytail. I am currently using Ponytail. The reason is actually simple: it is effective for reducing code rather than just words. The model reduced it automatically.

**5:51** · Another good thing about Ponytail is that it doesn't just make things short; while reducing the code, it still maintains essential parts that cannot be omitted, such as error handling and security. Since you only use what is necessary, it naturally becomes shorter. To install it, simply paste these two lines into the Claude code one by one.

**6:11** · Once installed, it operates automatically, and you can adjust the intensity; with three levels—Light, Full, and Ultra —you can decide how drastically to cut out. Next, and this might be a bit surprising, I have removed Super Power.

### 6\. Superpowers는 지웠습니다

**6:31** · As those who watched my skill videos know, Super Power was my skill for quite some time. I even went so far as to say it was by far the best I had ever used. In fact, if you look at the role of Super Power, it is to set the direction before the code does. However , while using the new model, I felt that Claude seemed to have already internalized this. The model is now doing by default what Super Power used to force. As a result, I started to see the downsides of Super Power.

**7:00** · This skill takes over the entire project's execution method, so even when I want to keep things simple and fast, it runs according to a fixed procedure.

**7:12** · Therefore, when the model handles things well on its own, this can become a burden rather than a help. Of course, Super Power is a well-made skill, and I am not saying it is a bad one. However, regarding the current model and my workflow, I felt that its role had somewhat come to an end. Instead, what I find myself reaching for these days is the Mapper skill, \*Ref\*. The advantage of using this skill is that it does not take the initiative.

### 7\. mattpocock-skills

**7:35** · It contains several skills, but they all only activate when I call upon them; the project doesn't run according to the skill's whims, and I retain complete control. I believe this best embodies the inherent value of a skill: being able to retrieve and utilize it when needed. Among these, I still use\* Grimi\*the most. \*Grimi\*is a skill where Claude constantly probes me with questions before I start working.

**8:05** · Installation is also simple; you just need to paste this single line of command. There are so many useful skills included here, so I encourage you to read through them one by one and try using any that you need for your work immediately. To be honest, I believe there is a high probability that this skill will also be absorbed by the model soon. While it is still usable for now, I recommend using it with the understanding that you can switch to something else at any time.

### 8\. claude-video

**8:31** · Finally, there is Claude Video.

**8:34** · Originally, even if you give Claude a YouTube link, he could only read the title and description; however, if you install this skill, Claude will be able to watch and verify the video directly.

**8:44** · Likewise, to install it, simply copy and run these two commands one line at a time. However, while reorganizing the skills this time, I definitely felt something. These days, unless it is a special domain, it seems difficult to find new skills that truly stand out.

**9:02** · Actually, if you think about it, the reason is clear: skills that modify Claude's behavior are being absorbed one by one as the model improves.

**9:11** · Superpowers did that, and Grill Me will likely follow suit soon. Anyway, today we took a look at the changes tailored to these three models and the skills that have survived. Of course, you don't need to apply all of this at once ; you can just change the ones you need immediately for your current work, one by one. And to wrap up today's video, I want to mention that while using Claude well used to mean knowing many good skills and utilizing them effectively in the right places, it has now become almost the opposite.

**9:42** · I leave what the model can do on their own to them, and only fill in the things they can never know, such as my own work, the standards I set, and my working style.

**9:54** · Ultimately, trying it out myself, identifying where I get stuck, and filling in only those parts—I think this is the only way to use Claude effectively. Okay, that's all for today . If you found this video helpful, please subscribe and like. I will see you in the next video.
