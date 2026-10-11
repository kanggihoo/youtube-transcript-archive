---
title: "[한영자막] AI 에이전트의 엉망진창 결과물(Slop)을 없애려면 '이 구조'를 도입해야 합니다"
author: "Tech Bridge"
site: "YouTube"
published: 2026-10-07T20:00:37-07:00
source: "https://www.youtube.com/watch?v=D7q8fa589FY"
domain: "youtube.com"
language: "en"
description: "AI 에이전트에게 긴 프롬프트 하나만 주고 모든 것을 위임하면, 통제되지 않는 엉망진창 결과물(Slop)과 예측 불가능한 오류가 발생하기 쉽습니다.Stately 창립자이자 XState 제작자인 David Khourshid가 명시적인 유한 상태 머신(Finite State Machi..."
word_count: 3795
---

![](https://www.youtube.com/watch?v=D7q8fa589FY)

## Transcript

### 소개 및 배경

**0:00** · Hello, everyone.

**0:02** · So, goodbye slop, welcome to determinism. I know this seems contrary to a few of the talks here, but I'm going to show you there's actually a lot of overlap here. Our goal at Agent Comp, we want to make it agents that are predictable, and we really want to get rid of the slop because our users don't really want to see that. So, who am I?

**0:20** · Just real quick, I'm @DavidKPiano pretty much everywhere.

**0:25** · Uh that's my handle. My name is David Khourshid.

**0:28** · I created a state machine library called XState. How many of you have used or uh know what XState is?

**0:36** · All right, thank you for the lights because I'm blind up here. I can't see your hands. But, yeah, a good amount of you. And I am also the founder of a company called stately.ai. I'm not trying to sell you anything. You could do this with uh pretty much anything.

**0:49** · XState's an open-source library. And also, piano's not my last name. I'm a pianist just like this guy. You might know him. Chopin, I hope you do. We're in Poland. All right, so first of all, some, you know, groundwork. What is a state machine? Now, I I could give you the mathematical definition, or I could show you a visual diagram, which of course I'm going to do. But, instead, I want to point you to this very simple relation.

### 상태 머신과 결정론적 동작

**1:14** · Given a state and given an event, you are expected to reach a next state. This is how pretty much every single application that you've ever built works. You're in a state, some event happens, and predictably, you're in some next state. And this is what we call deterministic, and this is going to be a key point in this entire talk.

**1:39** · So, I recently um well, I didn't have the baby, but I um am a father to a uh baby. It It's like my new thing right now, and and uh he is 6 months old right now, but when he was born, it was actually embarrassingly deterministic.

### 단순 루프에서 그래프 구조로

**1:58** · He's crying, you feed him, he's eating, he's fed, and now he's sleeping, and then he he wakes up, and then you repeat this process every half hour or every hour, you know, you you you have no sleep. Uh but basically, this is the simple infant loop. And then, at around 3 months, it got a little bit crazier. So, this state machine got a lot more complicated, and right now it is it's even worse than this. There's some mysterious discontent. I had trouble figuring that out. Right now, we're going through sleep regression, so like nothing works.

**2:32** · You just have to pray for a miracle, and then they'll go to sleep. Um but yeah, so babies pretty much went from loops to graphs for me, just like our whole hype cycle of agents. You saw everyone talking about loops, and now people are talking about graphs.

### 에이전트 엔지니어링과 그래프

**2:51** · They're the same picture. They're the same thing, actually. Loops are graphs.

**2:55** · And so, uh what I'm going to be doing is doubling down on this whole theme here about using graphs in agent engineering.

**3:04** · So, funny enough, I actually talked about this, or a related topic, at the previous Agent Conf, which was 3 years ago. And back then, it was more about constraining agent behaviors to state machines. So, today I'm actually going to be talking about how we could use state machines and determinism to improve agent behavior, and to remove slop.

### 에이전트의 Slop은 어디서 오는가

**3:28** · So, where does slop in agents come from?

**3:31** · In my opinion, it comes from unstructured delegation. And here's what I mean by this.

**3:36** · When you tell an agent to basically do everything, you let it do judgments, you give all the structure over to an agent, you let it do all the implementation and taste, agents and models are getting smarter and more powerful, and it could actually do a lot more things now where it's not hallucinating or doing silly things.

**3:59** · However, there's still always a risk of slop when you're just throwing things over the wall and you're hoping for the best from the agent. So, I'm not arguing that we throw this away and that we say no, agent, you must do these specific things. I'm going to demonstrate the opposite soon. And of course, we say it works, so who cares? The problem is it works until it doesn't and when it stops working, what can we actually point to to tell the agent this is what you need to fix?

### 결정론의 정의

**4:29** · So, one of the key things to fixing this is determinism where in simple terms, determinism means given the same input, you get the same predictable output every single time. Again, this seems opposite to what agents and AI are, but I promise you it is actually going to be useful specifically for how we improve agent behavior.

**4:52** · So, I'm going to do this because I only have around 15 minutes. We're going to be doing this with a simple example.

### 이메일 작성 에이전트 예시

**4:59** · And the example is it's an email drafter. So, you say, I want to draft an email about this and then this agent that we're building is actually going to help you draft an email. So, again, very simple and it is a distillation of some of the most complex problems that I've been working on for the last few months.

**5:19** · But I wanted a simple example to explain it.

**5:22** · So, where does determinism fit in here?

**5:24** · Because obviously, emails, there could be infinite possibilities for them, but determinism lives in the rules. For example, you must draft an email before you send it. You can only send approved emails, so emails that the user says "Yes, I approve. This is the email I want to send." And you must never invent a recipient, obviously.

**5:45** · Uh the non-deterministic parts are, for example, the email content, uh, the questions that the agent may ask you to clarify what you want to include in the email, and of course, the drafts made when it is going through that feedback loop and iterating over your requests.

### 메가 프롬프트 내부의 흐름 제어

**6:06** · So, you might think, "You know what? I I know how to do this. I'm just going to write a mega prompt. I'm going to have some rules over here. I'm going to give it a tool call to send the email."

**6:15** · This works, of course, but there is a problem with this.

**6:19** · First of all, we're encoding control flow inside the prompt. We're saying, \[snorts\] "First do this, then do that.

**6:27** · If the user asks for changes, revise the draft, and never call send email until the user explicitly approve the email."

**6:34** · And we're also repeating that in the tool call, too. So, in the description, we're saying, "Only call this after the user approves it."

**6:41** · Obviously, you should never write tools like this where the tool is part of the control flow, but if you're doing a mega prompt and you're trying to have the agent do everything, that's the problem you have. And also, when you don't split up the steps, you're you're pretty much restricted to a single model, a single, you know, system prompt, single settings, instead of having variety in each of the steps that happen.

**7:05** · So, of course, this works most of the time, but the problem is, when you have this black box of a prompt, you can't prove that it works, you can't even see what the agent is thinking or how it's working, even if you turn reasoning on, etc. Uh, you can't guarantee that it's going to work every single time, and the rules decay with context because that prompt, the rules in there, are just it's text, just like the rest of your context. So, as your context builds up, the rules get a little bit less significant over time.

**7:39** · And like I said, with one prompt, you're limited to one strategy instead of having different strategies for different parts of your agentic workflow.

### 명시적 상태 머신 모델링

**7:49** · So, what would this look like with a more deterministic system? Um for example, if we create a state machine, this is what that state machine may may look like where, you know, we initially make the request to drafting and then we go into the reviewing state and um in the reviewing state we could say, you know, we need clarification or we need to make modifications, things like that.

**8:12** · And we also have some safeguards. For example, we should never send an email without a recipient. Um and so when we provide a recipient, then we're sending.

**8:21** · And then once we decide to send it, only then can the email be sent. So, in this, it's actually mathematically impossible to send an email when you're in one of in the drafting state or the reviewing state because there just doesn't exist any transition there.

**8:40** · So, let's do a quick demo and see how this might look.

### 라이브 데모: 이메일 작성 및 전송

**8:46** · All right, here we go. So, here is an example of an email drafter and this is being automatically visualized from a state machine that I actually an agent wrote this, but um still works. So, I'm going to say email Jenny, invite them for coffee after my talk. It's intentionally vague. It's saying it needs more info and it says, "Hey, there's some details missing.

**9:08** · What's her email address, etc." And I'm just going or what is the subject?

**9:14** · Subject is coffee.

**9:18** · And so it's going to add that information. It's still going to ask for more info like what should the body say?

**9:24** · I'm going to say draft anyway just because I don't have too much time. It's reviewing. Oh, wait, it says best your name. Okay, my name is David.

**9:37** · And so you could see it's actually going through each of the steps uh and then we're we're just sending the email. But of course, we forgot the email address.

**9:49** · And you might be looking at this and saying, you know, this is pretty cool, but it's not the best workflow. And that is exactly the point that I'm going to show next.

**9:59** · So then finally, we have the email sent to a simulated outbox. But that is um that's an agent working from from a state machine.

**10:10** · Now, one of the things you might be asking yourself is, isn't this too much ceremony? In my opinion, I would say that modeling is not ceremony when it actually replaces confusion, both for you and for the agents. It's actually extremely useful to to basically have a common understanding of how your agent behaves uh for both your agents to introspect and for you to understand each of the steps. And of course, not everything needs to be formally modeled as a state machine.

### 혼란을 걷어내는 모델링

**10:40** · I'm not saying that you should do this with every single one of your agents, but where it applies, it's really, really useful.

**10:48** · And with this, you also have observability. You have logs where it's not just plain text, it's not just uh agent thinking or something. You have structured logs for what states you are in, what events happened, and like this is a simpler example, this is a more complex example, but at the end of the day, both of them you could see have reached the same state, which is sent, and that we have sent an email.

**11:17** · So, I'm not arguing that explicit, like just modeling everything as a state machine or a workflow, is good.

### 구조 검증과 관측 가능성

**11:24** · And this is this is the next point. I'm saying that when things are explicit and you have an explicit structure like a state machine, it's inspectable and in my opinion, that's a lot more useful than yeah, just having an implicit structure because you cannot draw arrows in paragraphs. You can't say like, you know, in this prompt, this is where it failed or this is where we're having problems or this is where we could adjust things. It's all just text. And so with a state machine, you actually have that ability.

**11:56** · And so this is what got me thinking and experimenting a few months ago where when we have a state machine workflow representing agent behavior, we could do evals on each of the steps of course. So we could say when we're drafting an email, this is the expected output from this input. Um or we could evaluate the entire outcome of the workflow where we could say uh given this initial set of input, assuming that we go through the whole process, the overall output should be, you know, as we expected and we could use LLM as judge, etc.

### 상태, 전이, 결과물 평가

**12:29** · But one thing we're missing is actually evaling the edges. So when you saw the previous demo, you were probably thinking like as a user, okay, this works. It does get me to the end state of having an email, but it's a little bit annoying.

**12:44** · So this is where you could actually take that state machine as a durable artifact and you could pass it to an agent and say, "Here's my state machine. Here's all the traces from a few of the sample workflows that we've done through this with. It could be real users. It could be simulated users like you dogfooding your agent. And here's actually all of the evals from each of the steps and the overall evals from the machine. Please propose some changes to this agent."

### 에이전트에게 개선안 요청하기

**13:13** · And I've done this with with software factories at Stately.

**13:19** · We've done it with our state generation or state machine generation and editing pipeline. And so this actually works really well because you're essentially saying, "Hey, here's a state machine that you're working from. Look at it and see how you could actually improve it yourself." And so, um I'm hitting the wrong key command.

**13:41** · I actually did that and here we go.

### 워크플로우 버전 2

**13:47** · So, what it actually produced was a V2 over here.

**13:51** · And if you find me after the talk, I could show you um a diff of it and you know, go into more detail. But now, this state machine changed. It found improvements. It saw that we were doing multiple passes just to fix small issues in the email when instead we could actually draft the email first and then figure out what's needed after. So, it goes straight to reviewing. It drafted an email. I could make changes like, "My name is David."

**14:23** · And it could add that, go to reviewing, and then it could send the email. And this is actually a much quicker workflow. And then you could actually compare this against what you did before and you could see like, "Hey, this actually feels better." So, all of your evals could pass uh with the first machine, but unless you're dog fooding and you're going through these iteration processes where you're actually having the agent improve its own state machine, you know, you're not going to get the optimal results until you actually do that.

**14:51** · And with state machines, you actually have something where uh where you could do that.

**15:00** · So, I would argue that to implement this, again, you don't need a special library. You don't need a special tool.

**15:06** · In fact, this is pretty much the only loop you need where you have some sort of initial state and so while the state is active or whatever your definition of not done is, you're executing, for For LLM calls, tool calls, uh async processes that might be outside of the agent. And you're determining what is the next state and the effects to execute based on the current state and the events that just happened.

### 최소 실행 루프

**15:33** · And so that machine, that logic, it could be XState, you could write a switch statement, a reducer function. Um coding agents are really good at updating these things regardless of whatever you use.

**15:48** · You could use LangGraph, I guess, which actually is um one of the uh most popular tools for using state machines with agents.

**15:58** · And updating an agent and an agent's logic follows this loop. And this is what I talked about previously, but you create the model, so you create the state machine.

### 생성, 관찰, 개선, 비교

**16:08** · Then you observe it. So um given the state machine, you're able to observe every one of the transitions that happened. And from that, you could actually have the agents propose. Not the exact same agent, but a different agent that's actually introspecting and looking at its own state machine and saying, "I have ideas for how we could use our current workflow and use the traces to actually improve this workflow."

**16:34** · And then you could compare the two and actually run pretty much the same uh scenarios on machine version one and machine version two, and you could see did this actually make an improvement?

**16:49** · And there's a lot of prior arts over here, uh Agent Spec, AIFlow, and also even older than that, about 20 years older, process mining as well, where it's essentially the same thing. We're going over traces of events and we're distilling that into some sort of formal model, which is a state machine, and using that we're identifying where we could optimize. So I'm not saying that you could use a state machine and say, "This is the way that the agent should always run."

### 관련 연구

**17:18** · Instead, I'm saying, "The state machine is how you could have the agent self-improve."

**17:25** · So, again, in 2023, at the last Agent Conf, I was talking about how the graph keeps the agent honest. It gives it guardrails. It gives it boundaries to work from. And in 2026, I'm talking about how using that exact same graph thinking can make the agent improve on its own behavior.

### 안전장치에서 자기 개선으로

**17:48** · And um obviously, I'm excited about graphs and state machines. A couple days ago, I was pretty much nerd sniped when Type Safe announced Jev. How many of you have heard of Jev or uh played around with it? No? So, um of course, I got excited about this and um but I was busy working on my talk. But last night at like 1:00 a.m. because I couldn't sleep because the baby was awake, I was like, "You know what? I I really want to try making a demo of this." So, in 2023, I was showing how an espresso machine, which is a state machine, um can be used with an agent.

### 커피 머신 라이브 데모

**18:23** · And an agent, you could give it drink orders and it would know exactly how to operate the machine to reach that state where it uh produced a drink. And I I was um yeah, just to show I was nerd sniped, I said, "This is going to pair really well with state machines." And the creator said, "You're absolutely correct." So, you know what? Let's Let's just try this real quick. I have like a minute.

**18:46** · Uh this is All right, here's my updated espresso machine. And this is using Jev. So, basically, this is a giant state machine under the hood, and Jev is given the exact state machine and also all of the possible events that can that the the virtual barista can do. So, we could say, "I want a cap and also a shot of I'm going to spell this wrong on purpose.

**19:16** · ex- expresso And so we press order and it's actually doing the order and um it's uh hopefully you could see that.

**19:28** · It it it's doing each of the steps and also I introduced chaos here so sometimes uh parts of the machine would break. So let's say also a cortado.

**19:37** · cortado definitely getting one after this talk.

**19:43** · And so you could see that this is real time. This is Jev actually doing every single one of the steps for um for making each one of these drinks. It's it's not pre-programmed. Jev just knows like hey given uh it it's showing the likelihood over here so you know it's saying okay we probably want to do a steam wand. Uh let's let's break some stuff. So let me break the grinder.

### 마무리 및 요약

**20:04** · So Jev's going to decide while it's working I should probably fix the grinder because you know obviously you can't grind beans and make espresso drinks unless the grinder is fixed. Um and so you could see it's uh it's all working.

**20:23** · I'm actually surprised.

**20:24** · \[laughter\] All right.

**20:27** · Thank you.
