---
title: "[한영자막] Jev로 더 빠르고 스마트한 에이전트 하네스를 구축하는 방법입니다"
author: "Tech Bridge"
site: "YouTube"
published: 2026-09-25T15:00:16-07:00
source: "https://www.youtube.com/watch?v=BJeHhsMVc8A"
domain: "youtube.com"
language: "en"
description: "LangChain 오픈소스 팀에서 TypeSafe AI의 신규 '시스템 1(System 1)' 모델인 Jev를 활용해 차세대 에이전트 하네스를 구축하는 방법을 소개합니다.단순 텍스트 생성이 아닌 정형화된 판단에 특화된 Jev는 분류 작업에서 기존 LLM 대비 최대 200배 빠르고 ..."
word_count: 1829
---

![](https://www.youtube.com/watch?v=BJeHhsMVc8A)

## Transcript

### Jev 모델을 활용한 에이전트 하네스 구축

**0:00** · Hey folks, my name is Sydney. I'm the product manager for the open source team at LangChain, and today I'm super excited to share with you how you can build a harness with Jev, this new model that just came out from Type Safe AI.

### 기존의 핵심 에이전트 루프 복습

**0:12** · So, before we dive into what Jev is, why it's so exciting, I want to do a quick recap of kind of the core agent loop that we're all used to.

**0:20** · So, a request comes in, we send that to an LLM, and it's able to take action by using tools. So, it will call a tool, get some results back, process those, and then it can continue in this tool calling loop, or it can decide that it's done with a given task and return a result.

**0:39** · This loop is super powerful, but LLMs are a little bit unpredictable, right?

**0:43** · They get text in and then produce text out. And so, when LLMs first came out, we decided that we needed ways to impose a little bit more structure on them so that they could work well in code-driven applications that inherently depend on structured types, not just raw text.

### 도구 호출과 구조화된 출력이 필요한 이유

**1:02** · So, enter tool calling and structured outputs. Again, tool calling, a model can send a structured request, in this case a get order request with a given ID, and then the tool returns a result with structured data.

**1:16** · The other primitive we added, again, is structured outputs. The idea here is that you can bind an output type to your model, and so it produces a final result that adheres to a given JSON schema rather than just raw text. And so, these two primitives made it a lot easier to take advantage of this really powerful loop in code-based applications.

### Jev의 정체

**1:38** · Okay. So, now to the exciting piece.

**1:39** · What is Jev? There's so much buzz right now on Twitter about this new model. Why is everyone talking about it? So, Jev is what we call a system one model from this new startup that just emerged called Type Safe AI.

### '시스템 1' 모델로서의 Jev

**1:52** · So, according to their docs, system one models are for of AI models built to make fast, structured decisions that software can use directly.

**2:01** · A system one model evaluates a state and questions and returns typed answers and probabilities.

**2:08** · You can see an example of state and questions and then typed answers here on the slide.

**2:14** · The interesting thing here is that Jev actually doesn't take text in and then generate text out like the traditional LLMs that we're used to.

**2:22** · Part of the reason why Jev is so popular right now is it can be 20 to 200 times faster and 40 to 400 times cheaper on classification style tasks compared to LLMs.

**2:35** · So Jev is not a drop-in substitute for an LLM, but it can do specialized tasks that we currently ask LLMs to do much faster and much cheaper.

### '시스템 1'이라는 이름의 유래

**2:46** · In case you're curious where this system one phrase is coming from, it actually comes from psychologist Daniel Kahneman's book Thinking Fast and Slow. And in this book, he described two ways that minds think.

**2:58** · Fast and cheap system one intuition versus slow and expensive system two reasoning.

**3:05** · And so TypeSafe borrowed this sentiment for its new model called Jev, calling it a system one model that's fast and cheap returning almost instant type decisions instead of generating text, which is in deliberate contrast to standard LLMs which behave more like system two, slower and pricier, but adhering to more of this step-by-step reasoning over open-ended problems.

### 데모: Jev vs LLM 1:1 비교

**3:27** · All right, I'm going to show a quick demo here on how an LLM answers a question versus how Jev answers.

**3:36** · So the question is, is there PII in this text?

**3:40** · And so an LLM produces this text result and then also structured output.

**3:46** · Takes about 5 seconds.

**3:48** · Jev almost immediately chance that there's PII is 98%.

**3:54** · And so you can see kind of from this demo for simple classification-style tasks, Jev is super useful. And there are a lot of classification or kind of decision-style tasks that we currently ask agents to do with LLMs that could be more optimal in terms of speed and cost.

### Jev가 답변하는 세 가지 질문 유형

**4:11** · All right, so let's talk a little bit more about the types of questions that Jev can help answer.

**4:15** · There's three types of questions and we'll look at them through the lens of this example. So, the state says, "Hi, I've been trying to connect my Stripe account for 3 days and it keeps failing.

**4:25** · I'm losing sales. Please help ASAP."

**4:28** · So, question type one is a choice, multiple choice, pick one option. So, for example, which team should handle this?

**4:36** · The score shows 0.84 for billing with a confidence of 0.596.

**4:43** · The second question type is a score. So, somewhere on a scale, you know, how frustrated the customer appears from calm to frustrated to very angry. And the score here is 1.035. So, customer seems frustrated but not very angry.

**4:58** · And then the third question type is a dual. So, this is a Boolean-type answer, a yes or no. So, the message conveys urgency or time sensitivity returns 0.999. This is on a scale of 0 to 1, so certainly a high urgency probability for this case.

**5:16** · One other thing to note, you can actually send a single state with many questions that Jev answers in parallel.

**5:22** · So, Jev is actually very efficient with many questions at a time.

**5:28** · This is again in contrast to LLMs, which do more sequential reasoning rather than parallel processing.

### LangChain에서 Jev 활용하기

**5:35** · All right, so how can you use Jev in LangChain?

**5:38** · We just released a LangChain Type-Safe integration. So, from LangChain Type-Safe, you can import this Type-Safe classifier.

**5:46** · First, you'll need to acquire a API key, and then you can use this classifier to invoke Jev with a state and questions. And then the response has answers to each question that you send it.

**6:00** · Let's walk through just a couple of use cases that are super great for Jev. The first is model routing. So, if you have an agent that does both simple and complex work, you probably don't want to use the most powerful model for everything that the agent does.

### 활용 사례 1: 모델 라우팅

**6:17** · An example of this that we've been exploring at LangChain recently is that we actually want our internal coding agents to switch between fast and cheap models and more expensive and powerful models depending on the complexity of a given question or coding task.

**6:32** · And so, Jev is great for this model routing step. You can assess a given prompt against given criteria to help decide whether or not you should use a fast or more powerful model. And Jev decides almost instantaneously.

### 활용 사례 2: 위험한 도구 호출을 막는 오토 모드

**6:47** · Another interesting case is what we call auto mode.

**6:50** · So, from LangChain, we already offer this as a pre-built auto mode middleware.

**6:54** · And the idea here is that you can ask Jev to analyze whether or not given tool calls are risky, and then you can block those at runtime.

**7:02** · Anecdotally, I actually turned off auto mode in my coding agent recently because the classification step of whether a given tool call was risky was too slow for my coding agent to feel productive.

**7:14** · But, it's back on now that Jev can make decisions so quickly.

**7:18** · So, uh quick example here is like if a tool call was issued that would delete a database or delete important files, Jev would certainly classify that as risky and then block that tool call.

### 활용 사례 3: 온라인 평가 심사위원(Jev as a Judge)

**7:28** · All right, the third interesting case here, maybe the one I'm most excited about, is using Jev as a judge for online evals.

**7:36** · So, the idea with this is that you often want some sort of model to help you identify whether or not your agent has done a good job with a given task. But, when you're running evals at scale, it's not super reasonable to have human oversight over every single trace.

**7:52** · But, you often need more than just kind of code style evaluators to decide whether or not your agent is doing a good job.

**7:58** · And Jev is really great at this. So, you have your input for a given eval, so the initial question, and then the answer from the agent. And then you also have a rubric that you provide, so grading criteria.

**8:11** · Like, is this answer correct? Does it match the reference? Is it grounded? Was there a cited source? And then Jev can score the given answer along these different rubric criteria.

**8:22** · This is kind of an evolution of LLMs as a judge online evals, which are currently certainly very useful, but also very expensive.

**8:31** · We just wrote a blog on how to use Jev as a judge, and it has some really interesting results about Jev being, surprise surprise, much cheaper and much faster, but also interestingly much more reliable and consistent across evals than the LLM alternative.

### Jev 시작하기

**8:47** · All right. So, I'll leave you with this.

**8:48** · It's time to go build something cool with Jev.

**8:51** · You can get started with UV pip install LangChain typesafe.

**8:55** · You can read our accompanying blog post at the link here.

**8:58** · Easily get an API key from typesafe.ai.

**9:01** · Tag us at LangChainAI on X. We'd love to see what you're working on.

**9:05** · Thanks, folks.
