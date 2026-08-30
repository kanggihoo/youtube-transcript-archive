---
title: "[한영자막] 품질 저하 없이 조직에 코딩 에이전트를 성공적으로 도입하는 방법 | Figma"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=OSd69LTMi3w"
domain: "youtube.com"
language: "en"
description: "Figma 소프트웨어 엔지니어 에얄 블룸(Eyal Blum)이 사내 코드베이스에 코딩 에이전트를 성공적으로 도입하고 품질을 유지하기 위해 터득한 실전 가이드를 공유합니다.📌 핵심 포인트• AI 도입의 3막 구조: 초기 성공(1막)과 실패의 골짜기(2막)를 넘어 체계적인 검증과 가..."
word_count: 3505
---

![](https://www.youtube.com/watch?v=OSd69LTMi3w)

Figma 소프트웨어 엔지니어 에얄 블룸(Eyal Blum)이 사내 코드베이스에 코딩 에이전트를 성공적으로 도입하고 품질을 유지하기 위해 터득한 실전 가이드를 공유합니다.📌 핵심 포인트• AI 도입의 3막 구조: 초기 성공(1막)과 실패의 골짜기(2막)를 넘어 체계적인 검증과 가...

## Transcript

### AI 도입의 3막 구조

**0:00** · Good afternoon. My name is Al Bloom. I am a software engineer at Figma and in my talk today we're going to talk about how we've adopted or are adopting soft agent into our workflow at Figma while maintaining high quality for our code base.

**0:19** · So do you may know Figma is the browser-based editor where design and engineering and now AI agent collaborate together to ship code.

**0:31** · This Figma has pivoted very strongly from being a traditional tool to an AI first tool.

**0:39** · But in this talk I'm not going to talk about our product. I'm going to talk more about our internal organization and how our engineering org has been adopting AI agents.

**0:51** · Um what we found internally is both organizations, companies, and individual there's kind of a three-act process of AI adoption.

**1:04** · You start with picking up something whether it was a lot of the people in this room who have been doing using our AI field and have been using AI for a while and they picked up something and got some simple things to work very well. 10x faster.

**1:19** · Then you start applying those same practices to bigger problems and AI fails pretty badly at that. Gives you bad stuff.

**1:28** · Lots of bugs. And the trust that you build breaks down.

**1:33** · And then from that point you start building the real skill which is learning how to use AI correctly and put the right guardrails, the right prompting, and the right contact, and all the stuff that we've been talking all day about here in all the talks in order to actually build the real skill.

**1:51** · And one thing that is happening internally as we we adopted either teams or individuals.

**1:59** · The adoption is uneven. We have teams that are very AI forward and have already transformed their entire workflows and then we have teams that are um still experimenting in the earlier act and or have lost confidence and they all need to work together in order to ship uh our product. Um So, they need to coexist um in the organization and we need to find way to support them and while bringing on everybody along for the journey and getting everybody to the third act of the story.

### 속도가 다른 팀들의 공존 방식

**2:32** · Um aside from that main friction point, we have also noticed other friction points that happened um as we adopt AI.

**2:40** · Um one thing that we've heard a lot from developers and managers have been noticing is a reduced developer agency causes um engineers to lose some of their job satisfaction. So, if a lot of people used to take a lot of pride and enjoyment in writing code and getting into the flow, and a lot of people feel like that's been lost or they're losing a lot of that uh element and getting into more of a prompt cycle where they just wait on output from AI and then speak to the AI that's like not as much fun as they used to have and they be getting burned out.

**3:12** · Um we've noticed another interesting thing. It's actually our best engineer, the one that hold all their context in their brain, um they end up getting a lot of the burden and what ends up happening is they they know where all the pitfalls are. They are like holding together with with like their mental duct tape all the places

### 최고의 엔지니어들이 AI 도입에 가장 신중한 이유

**3:31** · that agents are not working well and they're preventing all the really bad stuff from coming in or all the they have all the institutional contact that have never written down in their head and they get so much burden and and become bottlenecks and gets really frustrated. So, they actually end up being slowest to adopt because they see all the problems uh first hand.

**3:52** · That's another big big issue that we've seen.

**3:55** · And and this one I'm sure everybody can resonate or in Sorry. I'm sure everybody here will resonate um, that all of a sudden all the design docs and all the Slack messages and all the emails have gotten three or four times as long and we've gotten two or three times as many emails.

**4:13** · And they say basically as much as they did before. So, communication has gotten quite inefficient. And some of the markers of like what is high quality and important things versus not so much high quality um, has become challenging to navigate.

**4:30** · Um, so I'm going to spend uh, the next few minutes talking about some of the lessons that we've learned and how we've been trying to apply this. This is a journey we have not come out to the other end, but we've seen some really interesting progress along a lot of these lines.

### 검증(Verification) 환경에 가장 먼저 투자하기

**4:47** · Um, I think this uh, um, a lot of the speakers here have touched on this, but investing in verification is probably the highest value thing we can do in our code base.

**4:57** · Um, anytime that we can lift uh, left shift anything in our workflow from a human needing to do it to an agent being able to verify it.

**5:08** · So, for example, when Playwright uh, MCP came out, instead of having humans navigate the code, now the agent can explore the code. That was a big win unlock for productivity in a lot of our team. That's really That's always a uh, big win for us.

**5:25** · The other thing is um, it even better if when you find something that the agent has found to be useful, take the time to take that and encode it into a deterministic flow.

**5:38** · A deterministic flow that can be easily repeated and it save on token and save on time for the and then it also you also know that you're using the the LLM when it needs to reason, but when you have something that is already known and basically can be encoded into a test, spending the time always always pays dividends.

### 검증된 방식을 결정론적 플로우로 코드화하기

**5:58** · Um And another tip, if you tell your skills or your agent to write the code that you're writing, um like at the red to ring to red to green at the TDD style, it almost always gives you better results because you set the goal, and then you tell the agent to strive toward that goal, it'll almost always give you better results than writing the code and then writing the test afterward because then it will fit the test to the code rather than fit the code to pass the verification criteria.

**6:29** · And this is the testing pyramid that kind of the the classic testing pyramid from the previous just when you think about the testing themselves, what you had the end-to-end test, and the integration test, and the unit test. This is very similar move as much as you can down to the deterministic analysis, whether it's linting, the compiler, and the unit test themselves.

### 에이전트 리뷰를 위한 테스트 피라미드

**6:53** · Whatever that can be covered easily, you can have engine agent to reviews on it based on on criteria, so um architectural standard that have been easily encoded into the code base, you can move into the agent. And then only at the very top you need to have some sort of human review, which is usually around the functionality and this is the right thing to build.

**7:15** · That like only leave the human to do what the humans need to actually be involved in.

**7:22** · Um Another really important thing is the planning versus prompting. This is really ties into the giving agency back to developers and finding a replacement to the craft of writing code.

**7:36** · Um Spending a lot of time writing the plan and then selling enough to the agent basically as a as an implementation that can be done automatically is something that we find to really kind of reintroduce the joy of of building back into the process.

**7:55** · And so it's not uncommon to spend a week writing a very detailed plan, making all the decisions, flushing it out, iterating, sending it out to teammates to review.

### 프롬프팅 대신 기획(Planning)에 집중하기

**8:05** · And then only when it's ready and you've flushed out all the decision, you can send it to the agent. The agent and send it back to you when it's implemented.

**8:13** · And that that has been really successful also in accelerating and also really restoring some of the joy into the development process.

**8:26** · And so what makes a good plan? Um very important to start with the why at the top. It really helps preventing agent drift. If you have like a bold big section of kind of like when you write a design doc, you want to have the executive summary. Put that in there for the agent, otherwise they'll start drifting over time and make sure that the agent don't go back and change that because they feel like it.

**8:46** · And so we start with the why.

**8:48** · Make sure that your plan can be broken down into small parts that can each be verified independently.

**8:56** · And my personal way of knowing what is the good size is would I want to review that the PR that will correspond to that part? If it's going to be too big for me to want to review in one sitting, if kind of like the test is I'm going to get need to get a cup of coffee before I read this.

### 에이전트가 완결할 수 있는 좋은 계획서의 조건

**9:10** · That means it's too big and I'm going to want to have it broken down into pieces.

**9:15** · And then I make sure that each part can be validated independently cuz what I don't want to have is have five stages and then the first one is written but not validated and then everything else is is built on top of all the assumption. So having kind of a validation gate or an exception criteria for each phase really helps um make the plan resilient to drift. And and there's all kind of technique on how to manage the contact and do an software factory on top of that.

**9:45** · But once you have the plan, you can use whatever loop you want or whatever workflow you want in order to implement it.

**9:55** · This is a screenshot that I randomly picked up a plan, but this is what I usually look for. The executive summary at the top, the phases break it down, and then each one of them I would go into lots of details so that they can just fit it into a sub agent, and the sub agent can independently work on that and not have to worry about it. And that's that's there are other workflows that would work or other structure to the plan. I find that part of the things that create about AI workflows is that everybody can set up the thing that works best for them. Oh oh.

**10:28** · No, thank you.

**10:31** · Everybody can very easily set up the workflow that work exactly for them for them. So, there's diminishing return in trying to centralize everybody on one thing, but as long as it works for their flow and other people can iterate with them, I find that it generally works very well.

**10:47** · And this is just an example, kind of a brag of like this is could be a result from a plan.

**10:53** · There are probably 20 PRs here. Some of them would be maybe 10 lines and some of them would be 100 lines. They're probably nothing bigger than that, and that allows us to This is in the pre-AI world, this plan I probably worked on it for a week. I aligned with other with three other teams for another week on that, and then I just sent it to an agent to implement overnight, and it came back.

**11:13** · This is probably from two plans, not one, but it's it's basically six weeks of of coding work just uh it only took one week, so that's where I got a 5x speed up if I include the review cycle at the end of it, which I have to remember.

### 회의적인 시니어 엔지니어에게 안전 로드맵 맡기기

**11:33** · Um moving on from planning um back to the issue that we had with the skeptics and the people who are burdened with the most work, make sure that they you bring them in and take their feedback really seriously.

**11:47** · They're skeptic because they're seeing the the way you you're lacking validation, where your tools fail.

**11:53** · So, um their feedback is basically the road map of how to improve your agent um interacting with the code base.

**12:00** · So, just make sure uh to bring them in uh rather than trying to um figure out how to make them use the AI. Just let's have them be in charge of the road map to make AI safe your organization, and they will come along once they see that that the improvement that they're making are actually making their life better.

**12:20** · Um and as you can see, they'll not be shy about telling you what you need to fix. This is last time I was sitting with a bunch of people and uh this is the result of brainstorms.

**12:32** · Um another thing that's uh been really helpful with the my team specifically, and we're working to adopt it uh in in the broader organization as well, is to make sure that you have an attention-aware communication.

### 주의력을 배려하는 소통 문화

**12:46** · In the age of AI, human attention is a scarce resource. I think I've heard it for multiple talks, and a lot of people have noted have come to the same conclusion. You can't get more human attention. So, where you spend your time and what you're reading is really becomes really important.

**13:00** · Um so, since it's such a scarce resource, marking what was generated by AI versus what was written by human is really helpful to know how much time you need to spend reading this, and how much slop can you expect in this part of the communication.

**13:16** · Um and that can building a a new culture around that kind of communication it really helps um So, for example, and the team that team that I work with, we've decided we always Every PR description will start with something like that. Something that I wrote by hand. Could be very short to describe what this is in code and what this is doing. And then the AI description is going to come after that. It just I will probably read it. I will probably edit it to remove some wrong things. But it didn't write every line here.

**13:47** · So, they should be more suspicious and they should pay more attention to what I wrote in the top and they should override it. Things like that in Slack, in email. Just like leaning into the fact that everybody knows that you're using AI to to craft your communication, but just tell them share about tell them what they should read and what you they should pay less attention to.

**14:10** · And I remember early on, maybe like earlier in this year, I tried to I had some senior engineers in our org that had kind of were very much AI skeptic and I tried to reach out to them to say, "What was the problem with what's going on?" And say, "I tried to run an analysis on some of the PR comments that you've run." And obviously, I used the AI to do that.

**14:34** · And then I didn't distinguish very clearly what I wrote versus what they what AI generated. And they got very upset. They're like, "Why is something I did not expect somebody um that I respect this much to send me something that's clearly this sloppy."

**14:50** · And then like I I took I immediately like apologized. I realized I should have marked it clearly and marked my intention like, "This is what I wrote.

**14:58** · This is what the AI wrote and I need your feedback on it because I don't have the context to know if it is sloppy or not. And that's what I'm asking you for." So, lessons like that and change the culture is just as important as the some of the engineering challenges that we've been facing.

### 구분 없는 AI 출력물을 보냈을 때 치른 대가

**15:15** · Um another thing that's really helpful around the adoption is um as you progress through there's a lot of very fancy tools and a lot of very fancy workflow that we've we we've been implementing, but one of the really effective thing is just letting people use the eye where they're at. So, it help it really helps normalize the the use of the eyes for everyday tasks and it helps reduce the friction.

**15:42** · And really one of the most powerful thing is being able to tag an agent in the Slack message with somebody and they can you just do this for me and have the agents to close the loop in the thread.

**15:53** · And that that's kind of thing is really powerful. And then you can go on top of that and have all this thing automated and do all kind of fancy things, but if you have a new conversation with somebody who's not fully bought in and then you can target in a non like non-passive-aggressive way, you can target and say, "Let's try to see if the agent can get it this time."

**16:15** · And they close the loop and if it's a good experience, it really helps people try it out on their own in other cases.

### 기존 업무 환경(슬랙)에서 자연스럽게 에이전트 활용하기

**16:23** · And our journey continues. We're still learning even though we're shipping AI externally, our AI adoption and we're experimenting with with so many things all the time. Our automation story is not fully there yet. We're still trying to figure out when we should use how we can use cloud agent effectively given all the dependencies we have for some of our build system.

**16:47** · And so we are continuing to learn. It's a culture shift, it's an engineering shift and then I don't know about you, but for I've been I've been working in the valley for the last 15 years and this is the biggest change by orders of magnitude of everything that I've seen in term culture and technology.

**17:04** · So, we're all here together and we're all figuring it out and that's that's what I wanted to talk to you today.

**17:10** · Thank you.

**17:12** · \[applause\]
