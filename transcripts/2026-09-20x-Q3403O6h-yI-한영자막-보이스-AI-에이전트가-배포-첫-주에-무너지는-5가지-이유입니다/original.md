---
title: "[한영자막] 보이스 AI 에이전트가 배포 첫 주에 무너지는 5가지 이유입니다"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=Q3403O6h-yI"
domain: "youtube.com"
language: "en"
description: "보이스 AI 에이전트를 데모 환경에서 만들 때는 완벽해 보이지만, 실제 프로덕션에 배포하는 순간 지연 시간과 데이터 수집 오류 등으로 처참하게 무너집니다.매달 10억 건 이상의 음성 통화를 처리하는 텔레포니 플랫폼 Plivo의 창업자이자 CEO Venky B가 현장에서 목격한 5가..."
word_count: 5357
---

![](https://www.youtube.com/watch?v=Q3403O6h-yI)

보이스 AI 에이전트를 데모 환경에서 만들 때는 완벽해 보이지만, 실제 프로덕션에 배포하는 순간 지연 시간과 데이터 수집 오류 등으로 처참하게 무너집니다.매달 10억 건 이상의 음성 통화를 처리하는 텔레포니 플랫폼 Plivo의 창업자이자 CEO Venky B가 현장에서 목격한 5가...

## Transcript

### 데모와 실전 배포 사이에서 보이스 에이전트가 무너지는 이유

**0:00** · Let's just do a couple of quick questions and then we'll jump right in.

**0:04** · Uh, how many of us in the room here have built voice AI agents?

**0:12** · Okay, that's a that's a pretty good audience here. And how many of you guys have built AI agents that have been deployed in production?

**0:22** · Not bad. Okay, cool. So, uh, we'll talk about what typically happens, right?

**0:28** · like everyone's talking about wise AI agents. Uh the you know one pill solution to pretty much everything in the world today uh is is wise agents. So everyone's building one and trying to deploy that. They sound great when you're sort of building that in your dev sort of landscape and then the moment you take this to from a proof of concept to production things start failing.

**0:51** · Uh so we'll walk through these five different angles of like how uh or what we have seen uh at Cleo with WA agents but just before that a quick u intro from my side uh I am Wenke the

**1:07** · founder and CEO uh she used the title agent engineering manager u I'm calling myself chief agent officer uh from a from a title standpoint u okay so what is what is uh you know why why are even qualified for this this discussion and and like uh what what are we seeing that a lot of companies don't get to see? I I'll talk a bit about our journey in terms of like how we've uh come along so far and then jump right in. Uh you know we were we've been around for about 14 years.

**1:39** · Our journey has been a developer API platform and then now an uh you know an AI agent business. We started with voice and SMS APIs back in the day uh 2011 and then uh you know now we are primarily focused on our AI agent offering uh the the full stack on our platform. We we see over a billion voice calls each month across the globe. Uh and which is where we've seen a lot of these uh you know patterns emerge in terms of like how when we work with our customers what happens on their voice agents in in production.

### 매달 10억 건의 통화를 처리하는 Plivo

**2:11** · Uh we're a uh 90 member team and uh we've we have uh 50 million funding in the bank. Fun fact, this is not from external VC investors. This is all from being a profitable company having put that cash in the bank over over these years. Uh some customers we we power across the globe. Uh you know, we've just left some some logos in there. But primarily from an offering standpoint, uh I would sort of cohort this into three different buckets.

**2:42** · One is a programmable AI agent offering. We call it uh I mean it's a speech pipeline, not a true speechtoech product yet, but that's a that's a programmable offering. We also have an AI agent studio. It's a no code visual uh builder. And then we like I said, we started with voice APIs. So we obviously have built this out over the last 14 years, the SIP trunking and the audio streaming layer.

**3:06** · So we don't rely on other folks for the telefony or the carrier layer like that's the breadandbut business we've built over all these years and and that's on top of which our AI uh agent platform sits.

**3:20** · Okay, with that uh let's get into this, right, which I'm I'm sure since you guys have all built AI agents, you've all seen this or you know built this in in one manner or another and we'll spend more time on this in terms of like how uh the entire pipeline looks, right?

**3:35** · Um what we see with customers is and and I'm sure you guys can all relate to this is you know anyone thinking about AI agents what they do is they pick a bunch of these orchestration frameworks and they do a pretty good job live kit or a pipecat you know build their AI oen on top of that uh they think they can just sort of orchestrate these different four layers speechtoext LLM uh and and TTS

**4:01** · with turn detection in between and we're off to the races like my AI agent works in a in a P and it's good to work in production. Uh typically that's what happens. They sort of measure their latencies and you can see some indicative latencies on on this slide at at each layer and they're like yeah this this uh seems good for me for what I need. So let let's position production and then the the production w uh sort of start to kick in and and you see all sort of failure modes which we are going to spend you know most of the time on on in this talk at least.

### 누구나 처음 구축하는 4단계 파이프라인

**4:32** · Uh I've kept some time at the end for Q&amp;A if you guys want to have uh you know questions but we'll jump right in from from this to uh you know different failure modes we see.

**4:45** · Let's start with you know the first one which everyone talks about like this is the most spoken about failure mode which is latency. U I think we have a few AI agent talks today or wise agent talks today. Um I'm pretty sure like everyone everyone's going to touch upon this specific failure mode which is why I'm bringing this right up uh in in terms of uh you know some like

**5:08** · how this entire experience is for uh users right uh typically most folks measure this by time to first audio so the time when you user stop speaking to your agent starts speaking right and I think you've you probably seen this if you guys have built a agents on, you know, what uh good or natural feels like, what uh sort of annoying feels like or noticeable feels like, and then what annoying feels like, which is, you know, different tiered steps.

### 실패 요인 1: 지연 시간과 첫 음성 응답 시간(TTFA)

**5:38** · Uh we notice, you know, most people want to be under 550 cuz that's what's advertised by, you know, platforms or uh you know, solutions or or or or layers. But I think most end up between 750 to 1.2. uh that's where most of the folks end up at. Uh the really bad performing ones end up you know more than 1.2 and then you start to see users uh hang up.

**6:02** · Uh now I I'll share with you like what we've seen practically in in uh production with uh customers using this with at at different layers and then you know solutions to uh some of these. The way we want to think about this layer is sort of a balance between these three which is cost intelligence and latency

### 비용, 지능, 지연 시간의 3대 균형

**6:30** · right and and and why do I bring these three up because they're sort of interrelated I think one of the things I was just chatting with uh you know a couple of folks outside one of the things last one year we've seen lot of innovations lot of intelligence spike on the LLM side of uh things right and most of the you know intelligence has come in in terms of thinking or uh you know reinforcement learning and and so on and so forth.

**6:54** · The irony with voice agents is like almost always your the the LLM or the agent that's talking has to have thinking turned off, right? So all the advancements we've had in the LLM layer in the last one year like none of that even apply here now, right? you obviously you have, you know, better models that can do, you know, better instruction following or tool calling, but pretty much all of your intelligence that's been built in on the thinking layer is all off by default if you want it to be fast enough. So, so that's one of the ironies that we come up with.

**7:26** · So, then how do you sort of balance intelligent cost and latency? Let's let's look at some of these uh you know, options uh that are out there in the market, right? So, and I'm specifically picking LLM because if you looked at the previous chart, LLM is u you know sort

### 추론(Thinking) 모델을 음성 에이전트에 쓸 수 없는 이유

**7:44** · of your highest latency bucket that adds to this right and uh if you look at you know frontier models which I think most folks start by default your your OpenAI your clouds your Geminis u you know P50 TTFD is roughly around 450 to 500 on on a good day and it can get spiky right it can it can uh you know P90 P95 can go easily upwards of 1.2 1.3 seconds even u and and that's not good for the overall agent experience.

**8:17** · So so that so that's your frontier model. Now there's another options which is your your cerebris or or the gro that is famous and popular for spitting out a lot of tokens or or tokens very fast right uh these work but for you to get

**8:33** · dedicated latency or time to first token on these you need dedicated capacity and that is really expensive that's where I spoke about the cost uh as as being one of the things to balance right it's really expensive and then like you talk to anyone from the gro team or the cerebrus team they'll tell you you need to book 12 months in advance for dedicated capacity. They're booked out for the next 12 months. So, so that's that's a pretty expensive option. And then you really need to be sure that the model you're deploying on some of these infra layers uh will be here 12 months from now.

**9:04** · And and it's a it's a big investment and a big unknown. So, so what's a realistic option for production grade uh agents that are that are good quality and end up balancing uh three of these u this is what has worked for us u which is the open source models u there are obviously a lot of them in terms of like the variety and and variations you can pick I'm specifically talking about the two we work with u quen 3.5 and gemma 4

**9:38** · these are uh you know kind of cutting edge open source models right uh out in the market right now and we've done a lot of benchmarking around this in how they work it it can be scary to think like okay I have the models now I have to host them you know run them on my own GPUs and so on and so forth but if you are consistently targeting under 300 ms uh this we've seen this to be a a great option to balance between latency, cost and intelligence.

### 오픈소스 모델 선택과 적정 크기 가이드 (Qwen, Gemma)

**10:09** · Now some more deep dive here. If you're doing only English, uh Quen 3.5 or Gemma both work fine. But if you're doing multilingual uh right international audiences, different languages, uh Gemma 4 is a much better model for that. Uh we've seen uh token fertility evals. Essentially what that means is if if I were to dejargonize that is like how many tokens does it take to generate one word in that language. Okay.

**10:36** · So Gemma is much much better at least 2.5 to 3x better than quen 3.5 from that perspective. So your time to words is much faster on Gemma 4 everything else equal right on a on a multilingual basis. Now what sizes do you pick at the LLM layer? uh the mixture of expert usually works fine. Uh the 3 or 4 billion mixture of expert usually works fine.

**11:03** · The the problem with mixture of expert is like if anyone goes down wants to go down the direction of fine-tuning that can be a challenge uh cuz fine-tuning mixture of experts models are not easy. Uh you can end up breaking the model uh a lot of times. So so that's one challenge we see with mixture experts. But usually out of the box it gets you 90% closer to where you want to be like even without any fine-tuning or or or custom work done on the model. Uh so that's the advantage of mixer experts.

**11:32** · Uh now if you want to fine-tune and and you you want to go deeper and say like look I'm working for a specific domain healthcare what have you right uh and I want to make sure I I'm able to fine-tune my model you want to start at least with uh the 8 billion 12 billion at least uh from where we are today maybe maybe 6 months from now a 4 billion 4 billion model beats the 8 billion model uh hands down but for today uh what we've seen is you minimum

**12:00** · need a 8 billion or 12 billion model uh cuz you're looking over two things in these models. One obviously fast tokens but uh good instruction following. Okay.

**12:11** · And the second thing is like very high uh success ratio in tool calling cuz if you can do these two things well then you are on to like 70 80% there from not even having to fine-tune it fine-tune any model like models will work out of the box right u so so that's uh been our recipe. We've actually uh we run two flavors. One a fine tune model for specific industries and then for uh you know most generic use cases uh uh model just works out of the box.

**12:41** · Uh there are a few more tips and tricks we'll talk about in the upcoming slides where we see failure models but but that's where we stand from a from a latency LLM standpoint. Um, all right.

### 실패 요인 2: 본질적으로 취약한 음성 전사(STT)

**12:54** · I'm running tight on time, so I'm going to fast track this. U, now there are a couple of other flavors in this. Uh, people build agents with a a mixture of models. What they do is, you know, for u the the talking part of it, they have a conversational model which is a much lower smaller model and then you know maybe even a three billion model and then for tool calling they have a much larger model so that they have a improved tool calling success ratio there. uh

**13:23** · sorry the second one is uh assume your transcriptions are going to be brittle like that's that's uh something you want to sort of uh live by when you're building AI agents even if you have the best transcription engine out there and I I I'll show you why right like the the the state-of-the-art transcription engines out out in the market u you know sort of get you to uh 4 to 6% word error

**13:50** · rate right u and this is on known eval sets u on real world noisy calls with you know sort of uh accents like people having different sort of accents uh domain vocabulary and so on and so forth like those usually end up in the double digits from a word erate perspective right uh now you obviously you can fine-tune you know pick up an open source model and fine-tune uh but we see typically like what breaks here often and there are patterns here in terms of what breaks.

**14:19** · So, proper nouns, jarens, uh phone numbers like random missing digits with phone numbers, uh wrong substitutions. I I'll walk through some examples of like how you solve for these addresses when you're trying to collect a long address. Uh you know, the the transcription engine could just end up missing some parts of it.

**14:39** · Code switch languages. I I'll just take an example of a language I speak because that's was easy for me to put on the slide. uh where you know like if you were to sort of take English but written in a different script uh that's what's used for Hindi right like this is English written in that script right whereas like the actual English version of this is hello how are you so if if I'm addressing an audience in a different country where I have code switched languages and I start getting my English in a different uh sort of

### 다국어 혼용(코드 스위칭)이 전체 파이프라인을 망치는 과정

**15:09** · script everything starts breaking from the transcription engine to the LLM layer and then beyond cuz your LLM starts then producing output in that sort of script a lot of times and then your TTS messes up. Okay. So, so this is uh very important to be careful about and if you want to build your agent independent of the transcription engine, you need to build a layer that normalizes all of this, right? We'll talk about solutions in a minute. And there is the other case which is Hindi in Latin or or or you know Roman, right?

**15:38** · Which is like this is Hindi but it reads English which again messes up everything uh you know downstream. Those are just examples. This applies to, you know, Arabic, Mandarin, uh, Japanese, what have you. Uh, pretty much any language.

**15:52** · So, what actually moves the needle with a at the transcription layer? Uh, for prop proper nouns, we recommend uh you using not just keyword boosting. I think a lot of transcription engine engines provide you keyword boosting where you can put in specific words into their engine, but doing dynamic keyword boosting. What that means is don't keep the keyword for the entire state of the call. just add that dynamically when you think you need that as an answer so that you get the highest accuracy.

### 동적 키워드 부스팅과 LLM 기반 전사 후처리

**16:19** · Meaning at different states of the call, the transcription engine will have different uh keywords boosted during different phases. Right? Uh and that's what we've seen works best because if you just pollute your context of the transcription engine with tons of keywords, it'll start hallucinating again, right? So, so that's what we see typically working best. Uh yeah, post-process post-process your transcripts with an LLM, right? Cuz your LLM has domain context. Your transcription engine does not.

**16:48** · So a lot of words that it would say uh I'll give you some examples may not make sense.

**16:54** · This is transcription like a phone number from a transcription engine.

**16:58** · Right? Like what do you think that E is?

**17:01** · Right? If you give it to an LLM, it knows that's a three. Similarly, like what that one is, it's a digit one. So, so your transcription engine a lot of times could mess that up, but when you postprocess it with the LLM layer, it'll instantly correct that from a collection standpoint. I mean, uh, and and the last one, like I said, uh, transliteration is your ST output that's sort of u, you know, multilingual also gets normalized

**17:27** · using either an NLM you first transliterated or, you know, use some kind of a neural uh, transliteration engine. There are a lot of them open source. You can just pick one of them, right? Uh that would do all of that work for you. Send cleaned transcripts consistently independent of the transcription engine to your LLM.

**17:48** · All right. The third one we typically see is collecting data. This is where I think 50 to 60% of AI agents mess up pretty badly. Uh and like we like to think of it as a UX problem. Uh but just for voice. So think data models uh and not a transcript coming into an LLM and and trying to figure out what the transcript said.

**18:10** · So let's take some inspiration from uh I'm assuming most of us are developers here um you know take inspiration from Python's data classes pantic zod from Typescript or form fields in the UI right like if you start thinking of it from that problem statement we have seen accuracy grow up from grow from 30% to like 95% from a data collection standpoint when you start thinking in that manner. So like decide your shape before you ask, right?

### 실패 요인 3: 데이터를 타입이 지정된 필드로 수집하기

**18:40** · Like instead of keeping it open-ended, can you keep it constrained? So can can a phone number be a phone number type field? The moment you do that, right, you know like how many digits it needs to have. You can do validation on on top of that, right? And then what sort of allowed values can even be there.

**18:56** · So in the previous example we saw if an E comes in in middle of a phone number and you know it's a phone number you instantly know like either you smart guess that to three and confirm that with a user or you know that's an error and then you validated that and ask the user to repeat again right so so that's I think one of the common patterns we've seen here from from a a collection pattern name I think is the is the interesting one I've just picked a you know a a hard to pronounce name like

**19:28** · There's no way a human is going to get this right and and no way a transcription engine will get this right. How many ever times you do this right? So the moment you start thinking of this as fields and then have rules and then confirmation mechanisms on on spelling this uh you know sort of uh letter by letter only then you kind of get it right otherwise it's going to mess up pretty badly in terms of how you collect this on a voice call and and that's just an example of you know what u I'm talking about in terms of the the data collection piece of it.

**19:59** · Another place where it goes badly dramatically is relative uh values. Date being one of the examples. If somebody says next week uh Wednesday 8, 8 could mean 8:00 a.m. 8:00 p.m. and then figuring out what that date actually is.

**20:15** · Again, now becomes a very constrained problem. If you knew this was a datetime field and I I'm collecting a datetime field and then you take the current date and then figure out what this value would be bases that, right? So, so that's how you want to make sure like uh you do this with a combination of the LLM with the tool calling and the tool calling is doing a lot of this heavy lifting for you from a from a field standpoint.

### 상대적 날짜 계산과 실전 데이터 수집의 함정

**20:38** · Yeah. And then you make you you run like this from a unit test perspective. So all of your uh evals need to start treating these fields as unit tests. And as long as your unit tests uh sort of validate and pass, you know, your agent is going to be uh sort of reliable and repeatable. You don't, you know, run uh hundreds of end to- end agent test cases just to find out, you know, one field collection is broken. You do your eval at a field level and a unit test uh level.

**21:12** · And then yeah, like I said, I think u you this this mindset makes everything more structured instead of hoping I'll put a ton of prompt keep changing you know the prompt by a few uh characters every time and somehow my prompt engineering is going to make LLM much more instruction tuned and sort of magically start following some of these things.

### E2E 대신 필드 단위 유닛 테스트 평가

**21:32** · So in fact u like I said right like we have seen us get to 95 97% accuracy without having to fine-tune a model right and then and the trick is basically like just breaking down your context of what the agent is doing at that point with specific u states of what the agent is going through.

**21:52** · All right u I'm just going to quickly uh skip through this from a time standpoint. I just see I got three more minutes. Um hopefully that's a bug but but we'll leave it at that. Okay. Um so so this is the fourth area where we see issues coming in. Most folks take the LLM output and then we send it to a TTS. Obviously I think there are a lot of good TTS in the market that take care of a lot of heavy lifting but a lot of times it it messes up.

**22:21** · Uh what we recommend and what we've seen is you usually want to have a normalization layer between your LLM and what is fed to a TTS. You don't send your LLM output directly to a TTS, right? And and we'll just walk through some examples. The basics which is strip emojis uh markdown before before any synthesis into the TTS. Most orchestration pipelines do this like you know a live kit or a pipecat would do that for you if you just set a few flags.

### 실패 요인 4: TTS 음성 합성 전 텍스트 정규화

**22:51** · So I but but just make sure if you're not using them or buildings from scratch that you've set this explicitly because you don't want an emoji showing up on on on something read out or you know markdown showing up there.

**23:05** · Okay. I think I think some more common ones uh custom uh dictionaries most TTS engines provide this to you like how to pronounce custom words whether it's you know proper nouns brands uh acronyms and so on and so forth. to set those in uh when you go from your LLM to your TTS output because if you don't, you're going to mess that up. And I I'll I'll show you an example of like how we test that. Uh the the other one is like most engines also give you speed. So if you know you're pronouncing an entity, slow down. Have your agent slow down.

**23:36** · So at point 8x or 7x so that it it's able to like inunciate on that specific entity and and doesn't mess up how it's pronouncing an email or a phone number or a name letter by letter

**23:53** · and yeah just normalize all the messy stuff right like emails currency dates don't leave it to the TTS to do it uh most of them do it but don't leave it to the TTS to do it like build your normalization layer at your end so that tomorrow you think you need to switch TTS or you know for whatever reason the first one's down and you want to use another TTS you're able to sort of not rely natively on the TTS's engine but

**24:19** · you are building this in-house uh for for this to be managed and then yeah u I think I don't have my batch here but uh I I don't have my last name on that so my first test is if it cannot pronounce my last name or my company's name it's already dropping the ball so my last name is uh Balos Subramanion and if you cannot pronounce that using a voice AI agent uh like that's a check for me. I I know like uh you know the agent will mess up a lot of words that uh you know need to be spelled out day by day.

### 실패 요인 5: 턴 감지와 끼어들기(Barge-in) 제어

**24:51** · The second one is our company name PO. So a lot of engines pronounce pronounce it pivo or uh pleo and and so on and so forth. But but I think specifically being able to control this in your pipeline is super critical. And then if you're building a if you're building a customerf facing product then then um you know sort of give this option to your customers. All right I'm just going to skim through the the the last two slides. U I'm I'm running badly over time. Uturn detection.

**25:21** · I think this is it own separate topic but I'm just going to quickly pull up all the points so you guys can skim through that and if if you need a chat u after this we can we can talk about this. Right. Uh I'm just going to leave that for like five seconds and then and then we can chat about this offline. I'm quite over time. And then the the the last one is uh bargin and and back channeling. I think there's a lot of talk around speech to speech models that do some of this. But we've been able to see how we could do all of this in speech to speech pipelines.

**25:51** · You really don't need a speech to speech model to do all of this up. Uh again, I'll just I'll just put put this up on the slide and and sort of close at that. Um all right I don't think we have time for questions we can take them offline if you have any time but uh hopefully this was helpful and gave you some insights on uh what we are seeing in productions uh with billions of calls at scale. All right. Thanks,
