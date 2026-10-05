---
title: "10 Open-Source AI Projects You Need to Try Right Now"
author: "Cloud X Berry"
site: "YouTube"
published: 2026-09-20T08:07:15-07:00
source: "https://www.youtube.com/watch?v=1Dxdwjc1FYc"
domain: "youtube.com"
language: "en"
description: "In this video, Cloud X Berry walks through ten open source projects that take an AI agent from a demo that works once to one that can actually finish real wo..."
word_count: 1206
---

![](https://www.youtube.com/watch?v=1Dxdwjc1FYc)

## Transcript

**0:00** · Building an AI agent that works in a demo is easy. Building one that can actually finish a real task is much harder. A coding agent may need to read a repository, change several files, run tests, and fix the code when something fails. Another agent may need to use tools, work with a website, return structured data, or remember what a user told it earlier. So, the model is only one part of the system. Let's look at 10 open-source projects that can help with the rest. Number one, Open Hands. Let's start with coding agents.

### 1\. OpenHands — coding work in a real repository

**0:29** · Suppose you give an agent a GitHub issue and ask it to fix a bug. It needs to read the repository, find the right files, make the changes, run the tests, and keep working when something goes wrong. Open Hands is built around this kind of software work. It gives agents tools and a workspace where they can inspect code, edit files, run commands, and work through the task.

**0:53** · You can use the Open Hands software agent SDK to build these kinds of coding agents, and the agent can work in a local environment or an isolated workspace. Number two, OpenAI agent SDK. Now, suppose you want to build an agent inside your own application. You want it to follow instructions, call a tool, get the result, and continue the task. The OpenAI agent SDK gives you the runtime and the main building blocks for that flow, including tools, hand-offs, guardrails, sessions, and tracing.

### 2\. OpenAI Agents SDK — the agent loop and hand-offs

**1:25** · You define what the agent can do and what tools it has, while the SDK provides the pieces for running that interaction.

**1:35** · Here, the agent can use the tool and continue the interaction instead of your application having to manage every step itself. Number three, Google ADK. Now, let's say the task has several steps.

### 3\. Google ADK — one task, several ordered steps

**1:48** · One part collects information, another checks the result, and another prepares the final answer. Google ADK is built for agent and workflow development. You can define agents, tools, and the order in which the work should happen instead of putting the whole process into one large prompt. The key idea is that the workflow itself is explicit, so you can decide how the different steps should run.

**2:11** · Number four, Pydantic AI.

### 4\. Pydantic AI — typed output, not a paragraph

**2:14** · Here's another problem that comes up quickly. Your agent gives you an answer, but your application needs specific fields from that answer. Maybe a support system needs a priority, a category, and a summary. Pydantic AI lets you define that output as a typed model, so the result can be validated before the rest of your application uses it. That matters when the agent's output is going directly into normal application code.

**2:39** · Now the application knows the shape of the result instead of just hoping the model returned the right fields.

**2:44** · Pydantic AI supports structured output, tools, and other pieces for building typed agent applications.

### 5\. Browser Use — when the browser is the interface

**2:51** · Number five, browser use.

**2:53** · So far, our agents have been calling functions in APIs, but what happens when the system you need to use is a website?

**3:01** · Browser use lets an agent work with a browser, so it can navigate pages, click controls, enter information, and read the result.

**3:10** · This can be useful when there isn't a convenient API, and the browser is the interface you need to work with.

**3:17** · Of course, websites can change, and access can be restricted, so browser automation isn't a replacement for a stable API when one is available. Number six, GitHub Spec Kit. Coding agents create another problem. You can give an agent a large feature request, and it may start changing code before the requirement is really clear. Spec Kit adds a development process before implementation. You describe what needs to be built, create a technical plan, break that plan into tasks, and then implement those tasks. So Spec Kit isn't another agent runtime.

### 6\. Spec Kit — requirements before code

**3:48** · It gives the coding agent a clearer set of requirements and tasks before it starts changing the code base.

### 7\. LiteLLM — model routing and fallbacks

**3:55** · Number seven, Light LLM. Now, think about the models behind your agent. You may use one model for a difficult task and another for something simple. Your application might also need to switch providers or use a fallback when one model isn't available. Light LLM gives you a common interface across model providers. Your application can largely talk to one interface while you switch the model behind it. That becomes useful when you start adding model routing, fallbacks, or cost controls. Number eight, Leda. Now, let's talk about memory.

### 8\. Letta — memory beyond today's chat

**4:25** · Suppose a user tells your agent something today and expects it to remember that next week. A simple chat history isn't always enough for that.

**4:34** · Leda is built around stateful agents that can keep memory and identity across interactions. That makes it useful for assistants and other agents that keep working with the same user over time.

**4:44** · The important part is that the agent has a persistent state instead of starting from zero every time. Number nine, DSPy.

### 9\. DSPy — the task as a program, optimised

**4:51** · Here's a different problem. Most developers write a prompt, try it, change it, and try again. DSPy takes a different approach. You define the task as a program, break it into steps, and then use examples and evaluation results to improve how that program works.

**5:07** · So, instead of manually rewriting prompts every time the result isn't good enough, you can measure the result and use optimization to improve the program.

**5:15** · That's what makes DSPy different from another agent framework. Number 10, Promptfoo. And finally, you need to test the agent. A prompt change can change the result. A model change can change the result. Even changing one tool can change the result. Promptfoo lets you turn those cases into repeatable evaluations, so you can run the same checks again after changing the system.

### 10\. Promptfoo — test the agent before your users do

**5:38** · Now, you can run the same test again after changing the prompt or the agent and see whether the behavior actually changed. That makes it much easier to catch a problem before your users do.

**5:48** · And that's what I find useful about these projects. Building the agent is one problem. Giving it tools is another.

**5:55** · Making sure the output fits your application is another. Then you have websites, different models, memory, coding tasks, and testing. You probably won't use all 10 in one project. But once an agent has to do real work, these are the kinds of problems you need to think about.
