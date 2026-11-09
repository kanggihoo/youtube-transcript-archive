---
title: "[한글자막] Claude Code 에이전트 요약에 비용 12%? 사용량 실험과 끄는 방법"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=Cz9vbmmBNTc"
domain: "youtube.com"
language: "en"
description: "Claude Code의 백그라운드 에이전트 상태 요약은 얼마나 많은 비용을 차지할까요? Better Stack이 두 차례 측정한 결과와 앤스로픽이 공개한 수치를 비교합니다. 수치는 사용 환경과 실험 조건에 따라 달라질 수 있습니다.에이전트 요약이 호출되는 방식, 프롬프트 캐시의 영..."
word_count: 1193
---

![](https://www.youtube.com/watch?v=Cz9vbmmBNTc)

Claude Code의 백그라운드 에이전트 상태 요약은 얼마나 많은 비용을 차지할까요? Better Stack이 두 차례 측정한 결과와 앤스로픽이 공개한 수치를 비교합니다. 수치는 사용 환경과 실험 조건에 따라 달라질 수 있습니다.에이전트 요약이 호출되는 방식, 프롬프트 캐시의 영...

## Transcript

### 소개

### 에이전트 요약의 비용

**0:22** · So, if you haven't seen this bar before, it's the one that claude code uses when work is handed off to background agents.

**0:27** · And I've seen some people claiming this impacts the status line, but it's the status line of the agents in the agent panel and not the main clawed one.

**0:34** · Anyways, to test the impact of these summaries, I turned on Claude Code's open telemetry export and sent it to Better Stack where every request comes through tagged with a query source saying what it was for. Then I started a normal session with no special settings and just asked a background agent to run sleep 20 eight times. After about 3 minutes, I had five requests with a query source of agent summary almost exactly 30 seconds apart. And the debug log shows the context growing every time from 18 messages to 42 because each recall sends the whole conversation so far.

**1:04** · Each one of those calls is about 40,000 input tokens. All to get back about 130 tokens of output and labels like running 7th 20 second sleep. Once you group these by query source, you see the agent summary was 12% of the whole session's cost. I did also give this a more realistic test. This one was to use opus to build a tan stack site with three background agents. This run came out to about 8% of my usage for the agent summary. And interestingly, every one of those summary calls run on Opus as well and not a cheaper model like Haiku.

### 실제 작업에서의 측정

**1:34** · Now, both of my results here are a bit lower than the 15 to 20% that Flamerix found, but it's still usage that I'd rather not spend. And that figures actually came from a whole team's open telemetry data running lots of background agents every day. This is also really easy to miss because none of these summaries actually get logged in Claude codes JSONL transcripts. So, anything that works out your usage from those files, like CC usage, never actually sees these costs. Anthropic's own numbers are a little bit lower.

### 앤스로픽 수치와 차이

**2:00** · Someone on the claw code team did reply on Hacker News saying that across all of their telemetry, it was about 2% of the cost last week and about 6% in the terminal. And other people measuring their own usage in this thread landed around 8 to 10% right where my Tanstack test did as well. One reason this can vary so much is because it runs on wall clock time. Any agent that's working and whose transcript gets changed gets summarized every 30 seconds. So lots of longrunning agents add up pretty fast.

**2:26** · In my first test, an agent taking a tiny step every 20 seconds is pretty much close to worst case scenario. Now, one defense of all of this is that most of these input tokens are going to be prompt cash reads since it only sends over a small difference each time. And yes, on the API, they are about a tenth of the normal price. But on a subscription, Anthropic only says they still draw usage and not how much. And again, usage is still usage. Do these words really seem worth it to you? I think this definitely hit a nerve this week because I've seen lots of people complaining that their claude usage limits are draining way faster.

### 캐시와 사용량 논란

**2:55** · On October 28th, Claude codes lead actually said they found no single root cause and pointed at heavy sessions with lots of agents. And then about 4 hours later, this gist hit the front page of hacker news. But it's also worth noting this isn't actually a new finding. A GitHub issue from August measured it at almost a quarter of all requests in one session and it's still open with no reply from Anthropic. So, can you actually turn this off? Well, not easily. There is no setting for this. One workaround that I've seen is the setting claude code fork sub agents.

### 설정을 끌 때의 절충

**3:24** · If you set this to zero, it disables fork sub agents and so the summaries go with them. I reran both tests with this set and agent summary did go to zero while the agents still ran in the background. The catch is that you lose fork sub agents, which are the ones that inherit your whole conversation. So, to be clear, you don't lose background agents. Claude can still spin up normal sub aents in the background. They just start fresh with only the task that Claude hands them instead of full copy of your conversation before it and its prompt cache. So, there could be some trade-off when using this approach.

**3:53** · The other solution is the workaround by Flamerix, but this one is a bit more hacky. They used a bun preload script which hooks set timeout and blocks the summary timer. I do like the approach that's been used here, but I'd be very careful when installing this. It hooks into every claw code process and the install command curls whatever the latest version is. So, make sure you read it and pin your own copy. I just think that is really important advice in the current times that we're in where there seems to be an hourly critical CVE and daily massive attacks.

### 타이머 우회법의 주의점

**4:20** · Overall, I do actually think these summaries do provide some value, and Anthropic actually says that Claude uses these summaries itself to understand what the agent is doing, but running it on the full conversation every 30 seconds with no switch to turn it off isn't great.

### 요약 기능의 가치와 한계

**4:34** · And I do hope that the cheaper version they're apparently working on does fix this. I personally won't be modifying my Claude code, though, because to be honest with you, I don't use clawed code much in the terminal anymore. I actually use T3 code, which handles summaries its own way. But I just wanted to keep you guys up to
