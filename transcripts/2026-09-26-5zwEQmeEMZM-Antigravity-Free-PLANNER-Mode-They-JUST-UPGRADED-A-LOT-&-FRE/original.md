---
title: "Antigravity Free /PLANNER Mode: They JUST UPGRADED A LOT & FREE TIER IS NOW EVEN BETTER!"
author: "AISeeKing"
site: "YouTube"
published: 2026-09-26T09:39:16-07:00
source: "https://www.youtube.com/watch?v=5zwEQmeEMZM"
domain: "youtube.com"
language: "en"
description: "In this video, I’ll be talking about the new Antigravity updates!"
word_count: 980
---

![](https://www.youtube.com/watch?v=5zwEQmeEMZM)

## Transcript

**0:00** · Hi. Welcome to another video.

**0:02** · So, Google Antigravity has a new {slash} plan command, and this is a pretty useful update if your coding agent keeps building something different from what you actually wanted. And yes, Gemini 3.8 flash is available on the free tier, so you can try this without a paid AI subscription.

**0:19** · The interesting part is how these fit together. You can take a feature idea, work through the decisions with the agent, and review what it wants to build. If you're working on an existing project, that gives you a chance to catch assumptions before they turn into changes across a bunch of files. So, let's get right into it. The planning update arrived in Antigravity version 2.17-or on September 22nd. You can ask the agent to work through your idea before it starts writing code. Google rolls updates out gradually, so availability can take a few days.

**0:48** · Now, according to the documentation, {slash} plan works in Antigravity 2.0 and the Antigravity CLI.

**0:56** · It looks through your project, checks the relevant files and dependencies, and asks questions when your requirements need clarification.

**1:03** · Then it puts together an implementation plan with tasks and verification checkpoints. For example, let's say you want to add team invitations to an existing app. You could type {slash} plan followed by add team invitations, use our existing email provider, make invitations expire after 7 days, and ask me about anything that needs a decision.

**1:20** · Now, there are a few things I'd want that plan to cover. Who can invite people? What happens if someone opens an expired link?

**1:26** · Can the same invitation be used twice?

**1:29** · Those details affect what gets built, and they're easy to leave out of a short prompt. I'd also tell it what belongs in this first version. Maybe we only need an invitation form, an email, and a page for accepting the invitation. We don't need a complete redesign of the team dashboard. Being specific about that gives you something concrete to check when the plan comes back. You can leave comments on the plan, ask for changes, or cut unnecessary work before proceeding.

**1:52** · If it proposes replacing your email setup, for example, you can tell it to keep the existing one. Once you're satisfied, click proceed to move into implementation. And when you're reviewing, try to make the feedback specific. You could say, "Keep our existing email templates, allow only team admins to send invitations, and include a test for an expired link."

**2:10** · That's much easier to act on than simply telling the agent to make the feature better. Personally, I'd want to see how it intends to verify the result as well.

**2:18** · Sending one successful invitation would only cover part of this example. I'd also check an already used invitation and an account that shouldn't have permission to invite anyone. A plan gives you somewhere to raise those cases before the build starts. There is one setting I'd check first. The latest release calls it plan review policy. You can require a review for every plan. Let the agent decide when to ask or skip review. If you want that checkpoint, choose to review every plan. Now, let's talk about the free Gemini 3.8 flash part, because that's a big reason this is interesting for students and anyone trying to keep their coding costs down.

**2:49** · Google's model availability table explicitly includes Gemini 3.8 flash on the free tier. You can select it from the model drop-down below the conversation prompt box before sending your task. {slash} plan is also available across all plans, so the planning command itself doesn't require an upgrade. So, Gemini 3.8 flash is the model you're choosing, and {slash} plan is the workflow you're asking it to follow.

**3:10** · If you want to try the combination, open your project, select flash, check the review policy, and send a planning request for one feature you actually need. But free access has usage limits.

**3:20** · Google says accounts without pro or ultra get a quota that refreshes weekly.

**3:24** · How far it goes depends on the work the agent does, so a complicated project can use more allowance than a simple change.

**3:31** · I wouldn't promise a fixed number of prompts. You can check your remaining quota in settings. I'd start with a small complete feature and see how far your allowance goes. Give it the requirements you already know, mention anything it should preserve, and read the plan before adding more work. That also makes it easier to judge whether the result is useful, because you have a clear task to compare it against. I also wouldn't assume that planning automatically saves quota. Exploring the project and discussing requirements is work, too. The reason I'd use it is to reduce avoidable rework.

**3:58** · Whether that actually uses less of your allowance would depend on the task, and you'd need to measure it. For me, the useful part is being able to catch a wrong assumption while it's still in the plan.

**4:07** · I'd use this for features that touch several parts of an app, especially when I haven't worked out all the requirements yet. For a tiny text change, a planning session would probably be unnecessary. And a good-looking plan still needs checking, just like the code that comes after it.

**4:21** · But having this workflow available with free Gemini 3.8 flash is pretty cool, and it gives you a practical starting point without another subscription.

**4:28** · Overall, it's pretty cool. Please share your thoughts below and subscribe to the channel.

**4:33** · \[music\] I'll see you in the next video. Until then, bye.

**4:39** · \[music\] \[bell\]
