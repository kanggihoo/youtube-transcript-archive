---
title: "[한영자막] Vercel은 어떻게 AI 에이전트 개발 문제를 해결했을까요?"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=scnU1ON5wBY"
domain: "youtube.com"
language: "en"
description: "Vercel의 소프트웨어 총괄 Andrew Qu가 사내 데이터 사이언스 에이전트를 구축하며 겪은 시행착오와, Claude Code에서 영감을 얻어 파일 시스템 기반의 에이전트 프레임워크 'Eve'를 탄생시킨 실전 개발 여정을 공유합니다.단순 메가 프롬프트와 체인형 구조의 한계를 짚..."
word_count: 3788
---

![](https://www.youtube.com/watch?v=scnU1ON5wBY)

Vercel의 소프트웨어 총괄 Andrew Qu가 사내 데이터 사이언스 에이전트를 구축하며 겪은 시행착오와, Claude Code에서 영감을 얻어 파일 시스템 기반의 에이전트 프레임워크 'Eve'를 탄생시킨 실전 개발 여정을 공유합니다.단순 메가 프롬프트와 체인형 구조의 한계를 짚...

## Transcript

### Vercel과 AI SDK

**0:00** · Hey everyone.

**0:01** · Thanks for coming. I'm Andrew. I'm the chief of software at Vercel.

**0:06** · And I'm here to talk to you about how we solved agent building at Vercel.

**0:11** · I'm the chief of software, so I work on a mix of internal engineering, external experimentation, and generally being at the frontier and building new libraries, frameworks, and technologies.

**0:21** · For those of you that don't know Vercel, Vercel builds agentic infrastructure so people can build what's next. We got started in the web world helping people ship websites and web apps without having to worry about the infrastructure that doesn't make their app any better.

**0:36** · It can scale to a million and scale down to zero effortlessly.

**0:40** · But we're seeing a change in what people want to build. You know, people started by building pages, but now we see them want to build agents. And we've been embarking on a similar journey to make it easy for people to build agents and agentic applications easier.

**0:54** · We built this thing called the AI SDK.

**0:56** · So instead of needing to switch out 300, 400 lines of provider-specific code, you can switch out one line of code and we have the same model interface underlyingly for all these different providers.

**1:08** · We built a lot of other tools to make it easier to have model fallbacks, secure code execution, better pricing when it's inactive and waiting for responses, as well as for durability and resumability.

**1:20** · And I'm here to talk to you about how I went on this crazy experiment roughly a year ago that led to a agentic explosion at Vercel and led to a really cool thing that we built recently.

### 모든 책상 위에 에이전트를

**1:33** · About uh this is 1980. Uh Bill Gates, before my time, had this quote saying he imagined there'd be a computer on every desk and in every home.

**1:43** · You know, that was probably pretty contrarian then and today it seems like very normal to have that happen.

**1:49** · And me and the CTO had this thought, you know, instead of a computer on every desk, could we potentially have an agent on every desk? You know, today we only really use agents for coding and technical workloads, but we're starting to see expansion into things like design and product management and other verticals.

**2:09** · And this was maybe about a year ago. So, I would say I'm pretty early to this, but that was when it was like Sonic 4 and things weren't as sophisticated as they were today.

**2:17** · And I tried to actually explore this out, see what we could do about it. I went around to various job functions at Vercel. Marketing, sales, finance, legal. And I asked them, what do you hate most about your job?

**2:31** · And the most compelling use case I heard was at the data team. What they were growing, they were a very lean team, but Vercel was growing faster. You know, they had so much more data from customers, analytics, metrics, sales.

### 데이터 팀이 사내 병목이 된 이유

**2:46** · They just have to keep on aggregating and keep on making available for themselves to use.

**2:52** · And at this time, if you think about what the data science people at Vercel have to do, whenever someone from marketing or sales has a question about customer or products, the data science team has to drop everything they're doing, write the query, process it, do an analysis, and come back with some recommendation on what to do.

**3:09** · And this was really killer to productivity. You know, the data team did not want to drop everything and just write queries all day.

**3:16** · And so, I worked with our VP of data to try to build a better way for them to operate this way.

**3:23** · And so, if you think about the very first thing you'd ever do if you want to try to use AI to solve a problem, you may just build like a huge mega prompt.

### 버전 1: 하나의 거대한 메가 프롬프트

**3:31** · You know, you just have a question, you pass into an LM, you have it respond, and that's it. You know, this was how the first version really looked, honestly. I asked them for a dump of of the Snowflake schema. I pasted it into a system prompt with a question, and then when it generated SQL, I actually copy and pasted that in and just ran myself.

**3:50** · You know, I just want to see, are the models good enough today in order to write valid SQL given some decent structure?

**3:58** · And I'd say this gave us a little bit of confidence that, you know, models today aren't that good, but maybe we can harness engineer or make the context around it a little better and give it some more guardrails to operate a little better.

**4:10** · And so if you actually think about what a data scientist actually needs to do when they get a question, you know, they have to process the question, they may have to explore the semantic layer and actually figure out what the join patterns are.

**4:20** · They will actually go and execute the SQL. They may go back and do that again if the SQL did not execute or if it was too expensive. And they'll eventually report on it, including visualize the data, maybe write some paragraphs, maybe do a retro, maybe do some other stuff.

**4:35** · And so if you think about those different phases, me and the VP of data tried to sit down and map those out into specific agent workloads.

### 버전 2: 역할별 에이전트 체인 연결

**4:42** · And so the second version of this data science agent, uh, called D0, I'm going to reference D0 from now on, is you ask a question, we have a query agent that passes on a query to the planning agent that will then have an execution agent, etc.

**4:56** · And if you chain all of these together, you actually get something that looks like this, where each agent has a very dedicated system prompt focused to what that does with tools scoped to exactly that function. So example here, you can see that for the first one, the planning agent has a read entity YAML and a and a search schemas tool. And so it will only use those capabilities until it has an answer to pass on to the planning agent and then to the SQL agent and then to reporting.

**5:26** · And this was getting better, you know, we were able to get away from having to copy and paste the SQL and have to come back and report on it. It was now actually doing like the end-to-end loop from question to answer.

**5:38** · But we started hitting some walls with this architecture. And around this time we came to the conclusion that, you know, what you actually need is you need one agent with all the mega contacts within it and for it to sort of manage its own memory.

### 버전 3: 자체 상태를 관리하는 단일 에이전트

**5:52** · You know, this was around the time when we realized that you want to actually have the agent be able to look back on what it's done. Sort of reflect and figure out the steps that I got to get here. And with the previous model, you may have noticed that the only thing that the next agent gets is a summary and a small snippet of the previous thing that was done.

**6:11** · Now, this way you can imagine that you have one mega agent and it internally it manages its own state. At some points it's planning, some points it's building, some points it's executing, and some points it's reporting.

**6:22** · And this is sort of what it looked like.

**6:24** · You know, you have one big AI call, maybe max steps 100, and you give it the ability to manage its own state based on where it's at inside of its execution journey.

**6:35** · And so you can see similar tools, you can see a similar shape, but the best part about this is if it ever ran to an error when executing or joining, it could go back and explore more or it could go and read more and figure out what it was doing wrong.

**6:47** · And it was very good at this point. We were pretty confident in the actual system at hand and we actually spread it to a few trusted members of our cell.

**6:56** · You know, this is a very powerful tool and we didn't really want to put in the hands of the wrong people or people that were using very critical workloads.

**7:02** · So it got into a few people's hands and the immediate response was it was awful.

### 쓰라린 첫 배포와 '파일 시스템' 돌파구

**7:06** · You know, we thought we were cooking. We thought this was, you know, nailing 30% of our evals, but we couldn't have anticipated some of the questions that were being asked. And for us to spend more time manually mapping out some of these scenarios, it didn't seem like a very scalable way to do this.

**7:22** · And then Claude Code and Opus 4.5 came out. Well, more like Opus 4.5 came out and it in tangent with Claude Code, which is so powerful. You know, they sort of unlocked the concept of a file system agent. And we, on the side, were like, "Wow, Claude Code and Opus 4.5 is basically AGI compared to what we had before. You know, it would answer most of our questions without even without even missing a beat um compared to the hand-grown agent we had.

**7:50** · And when we try to step back and wonder what we were doing wrong and why this was so much better, we realized that the big unlock was that it was just a file system. You know, we it had a very minimal set of tools, list file, read file, run bash, and we gave a few more here for uh our own data agent use case.

**8:11** · But the biggest thing was it was able to use the tools that agents are well trained on, and was able to explore and write work where it needs to. You know, we weren't giving it Cod code was not giving it a very prescriptive set of tools. It was sort of just letting it go wild and explore emergent behavior.

**8:28** · And so from this we learned that you can really just use a file system. You know, we we saw the learnings from Cod code and how powerful it was given that it just executes locally.

**8:38** · And we tried to rebuild in a way that was very Cod code-esque. You know, it was now going to run in a sandbox. That sandbox would dump the whole semantic layer into it. You could the agent would be able to grep, bash, read file, write file all around to figure out what it needs.

**8:53** · And we would just sprinkle a few tools on top to make sure it could do everything that is Vercel specific.

**8:59** · And this was actually the biggest unlock ever, you know. The leap from single agent to Cod code SDK, and then from Cod code SDK to file system agent in general, fine-tuned or purpose-built for our use case, was an amazing leap. At this point we were starting to get ready to give it away to more people at Vercel.

**9:19** · And at this point the eval score basically doubled. And I wrote this uh this is basically how it looks. Um it's very simple. You just give it bash tool.

**9:28** · We have a nice helper called bash tool on npm. And you attach it to a sandbox, and you can attach files to sandbox for it to read, write, and execute.

**9:37** · And after this revelation, and after I saw that we were passing so many of the questions that we failed to do before, I wrote this banger blog post. It's It's actually up today, and the week that I wrote this, it was responsible for 70% of our vercel.com traffic. So, you know it's a banger.

**9:54** · And after that, the next logical step was that we want to figure out the common use cases we had. So, by then we've already sort of let it leash on all of Vercel.

### 반복 질의를 '스킬'로 자동 정제하기

**10:06** · And we were getting thousands of queries a day from people wanting everything from customer metrics, sales metrics, number metrics, NPM downloads.

**10:15** · And it turns out that a lot of these queries are actually the same in shape.

**10:18** · You know, there's only so many ways you can do an aggregation, only so many ways you can look up a product, only so many ways you can do billing info.

**10:24** · And so, we actually have a recurring job that takes the most recent queries and tries to distill them into a skill. And right now we have roughly 100 skills that do a mix of aggregation all the way through looking up specific data about certain people.

**10:38** · And we found this very effective because if you think about every new agent run, it sort of just starts from nothing. You know, there's really no pre-established context besides, you know, the semantic layer and the system prompt. But with a skill, it already starts off with a lot of contextual knowledge that has otherwise already been done.

**10:56** · And this is roughly how it looks. It's very similar to the previous one, but the inclusion of a skills folder is actually very powerful.

**11:02** · Um we also built this tool at Vercel called skills.sh. It's the most popular way to find agent skills and run them yourself.

**11:10** · And I I'm saying all this because this journey is something that most of you may hit once in a while, where you start from something simple and you gradually add complexity, and you eventually hit a system in which you can ship to prod.

**11:22** · And I'm telling you this because at every step along building this agent, someone at Vercel was agent curious, and they tried to fork off of my D0 agent and build their own.

**11:34** · And every step, we sort of had a better way to do something that was not previously known.

**11:39** · And we were wondering, like, what if people today could start from the very last insight and not have to ever start from just a simple prompt or from reinventing best principles from first principles?

### 에이전트를 위한 Next.js, 'Eve'

**11:51** · And so, we actually thought, what if we built the Next.js for agents?

**11:56** · For those that don't know, Next.js is a popular web framework that Vercel built.

**12:00** · They invented this thing of file system uh framework defined infrastructure. You don't have to worry about where things go. You just have to write files in the right conventions, and it automatically declares where they should go. Your pages go to the CDN. Your serverless functions go there. Your caching goes in the middle.

**12:19** · And we thought, you know, building agents should be this simple. You should only have to create a skills folder, a tools folder, a channels folder, and you should be able to just declare these very easily, and the framework should know exactly how to make an agent out of it.

**12:32** · And that's why 2 weeks ago, we released Eve. Eve is a agent framework, like the Next.js for agents, where it's very easy from just starting with a sample template to having a fully agent ready, and being able to add in your own custom knowledge, your own custom tools, and even integrate it into the channels that you are familiar with.

**12:51** · This is roughly what we think an agent actually looks like. You know, an agent has a runtime, and it has channels. And in that runtime, you're going to have durability. You're going to want to run things in an isolated environment.

**13:01** · You're going to want to call into different models. And you're going to want to have connections.

**13:05** · And we built this with open source in mind. You know, we built Eve so you can plug in your own open source adapters for Postgres, OpenAI's uh responses API, Docker, other connectors.

**13:16** · But, we also made it incredibly easy to deploy on Vercel. The only thing here you see different is that everything here is using a Vercel product that we've been building over the years in order to make it easy to build these experiences.

**13:26** · Vercel workflows for durability, sandbox for secure execution, and Vercel connect, something we just released, to make it easy to generate short-lived OIDC tokens for connections.

**13:38** · And we actually rewrote the whole D0 agent in Eve as we were building Eve.

**13:42** · And from the convoluted structures behind the scenes that you did not see from the code, um this is roughly how the file system looks. It's very simple.

**13:49** · You have a bunch of system instructions, a couple skills, a couple tools, and it's very easy to compose this into a real agent, and it's very easy to iterate on.

**13:59** · We actually gave this out to a few beta customers before we actually fully released it 2 weeks ago at our London event. And there's one company that partners closely with us, Aura. They rebuilt their agent that's sort of like a mini claw to go and test people's services. It goes to websites, installs them, it tries to use them.

### 초기 도입 성과와 시작하는 방법

**14:17** · And they've seen incredible success on building their own agent from the ground up using Eve compared to using an off-the-shelf Claude code.

**14:26** · Fewer steps, better successes, as well as better insights.

**14:32** · And when you deploy Eve to Vercel, you get observability observability out of the box. You can see here that you get all the agent runs, you see all the tool calls, you see each step it takes, as well as maybe some estimated costs and some optimizations you could potentially take.

**14:47** · And you can get started today at eve.dev. You can just clone it, and you can just start a template, deploy easily, self-host if you need.

**14:55** · And the reason why I bring this up is because I hope that there'll be more and more business-specific use case agents.

**15:02** · You know, before we built D0, we actually battle-tested a lot of the industry-well-funded startups that were doing these vertical agents that were dedicated to taking your Snowflake instance and making it so their agent could run Snowflake queries against it.

**15:18** · But we found out that what really makes this agent good is it has a lot of very specific uh company knowledge. You know, the way that Vercel is a web-based company, we have a lot of customers that have websites and web properties.

**15:32** · That goes a lot deeper into when you should query for what and what things link to what.

**15:38** · And so, a lot of these off-the-shelf agents, they're great, they're good to try, but I think if you really want to get the most juice out of a squeeze, you should really try to build your own agent and add in as much company-specific knowledge as you can.

**15:51** · Today, you know, we've had 20 roughly decently PMF agents at Vercel that range from anything from marketing retros to figure out who to reach out to to the first ever redline of a contract when legal sees a new negotiation all the way to my data science agents helping with with data queries.

**16:12** · And that goes to show that we at Vercel have been very agent-built. You know, all of this stuff is actually saving us a lot of time. The data team has never been more productive. They have more time to go and improve the performance of Snowflake, to add new data sources that were missing, to fill the gaps that they previously did not have time to because they were so busy writing queries.

**16:34** · And I think it's never been easier for you at your big, small, medium-sized company to sort of automate away some of the things that you do not want to do or some of the things that you're spending too much time doing.

**16:45** · You know, I think a lot of HR, finance, sales can be somewhat automated with agents, and I think Eve is the best way to build said agents today.

**16:57** · And these are my socials. Thank you all for coming and listening. I'm Andrew, and I'll be around if you want to chat outside.
