---
title: "Gemini 4 Argon (In-depth benchmark analysis): Did Google make a big comeback?"
author: "AICodeKing"
site: "YouTube"
published: 2026-10-01T02:15:33-07:00
source: "https://www.youtube.com/watch?v=ctP3nhMwsEM"
domain: "youtube.com"
language: "en"
description: "In this video, I'll be analyzing Google’s new Gemini 4 Argon model, including its performance across business workflows, coding, spreadsheets, long-context r..."
word_count: 2538
---

![](https://www.youtube.com/watch?v=ctP3nhMwsEM)

## Transcript

**0:05** · Hi, welcome to another video. So, Google has announced Gemini 4 Argon and there are some pretty interesting results here. It leads an independent benchmark for business workflows, takes the top spot on the valves index, and looks much better at admitting when it doesn't know something. But the coding results are mixed and the pricing has a catch that changes the value comparison quite a bit. I've gone through Google's announcement, the evaluation footnotes, and results from artificial analysis, Val, Zapier, Serge, Arena, and the people behind CWE.

**0:38** · This is an analysis of their published testing. I haven't run my own hands-on tests with Argon yet. My initial take is that this looks like a serious option for professional work with enough weaknesses that I wouldn't move my entire coding workflow over just because of the launch charts. So, let's get right into it. And there's a reason I'm cautious with Google. I've been disappointed by some of the previous Gemini releases, especially when the impressive reasoning scores didn't match what I wanted from a coding agent. With Gemini 3.1 Pro, my oneshot Kingbench result was actually very good at 96%.

**1:12** · But my agent testing had repeated planning, problems using the tools, and basic coding mistakes. On one go task, it duplicated a method and caused a compiler error. That's the kind of thing a headline reasoning score doesn't tell you. Those were particular runs in a particular setup, but they were enough to make me question its usefulness for my workflow. Then Gemini 3.5 Flash disappointed me on value. Its standard prices were one power at $50 for input and nine tars for output per million tokens compared with 50 and $3 for Gemini 3 Flash.

**1:43** · That's three times the token price. For something carrying the Flash name, I wanted a much stronger reason to pay that difference. And there was the wait for Gemini 3.5 Pro at IO in May. Google said it expected to roll it out the following month. By its July 22 earnings call, it was still in testing.

**2:03** · Now we're looking at another flagship announcement with limited initial access. I understand taking more time to get a model ready, but the earlier timeline gives me a reason to wait for actual availability before getting too excited. So Argon has some confidence to earn back. that makes the independent results especially useful here. I want to give Google credit where it has improved while checking whether it has fixed the things that made those earlier releases frustrating. First, access. The initial roll out is through Google's Fairwind program for selected cyber security partners.

**2:33** · Google says wider access will start with paid API customers and Google AI ultra subscribers, but the announcement doesn't give a public release date. So, buying a subscription today shouldn't be treated as a guarantee that you can immediately use Argon. Now, let's start with the independent results because these help put the announcement in context. On artificial analysis, Argon at high reasoning scores, 53 on the intelligence index. That's the same rounded score as GPT6. Astra at max reasoning and one point above GPT 6.1 soul at max.

**3:04** · Opus 5.5 scores 58 and Sonnet 5.5 scores 56. Both at max with default fallback routing for refusals.

**3:13** · So, Google is competitive here, although Anthropic is still ahead on this particular overall measure. Also, these are index points. A score of 53 doesn't mean it completes 53% of your work. And a one-point lead doesn't mean you're going to notice an improvement on every task. The Val's index gives Argon a stronger result. It scores 68.9% ahead of Sonnet 5.5 at about 67% and Opus 5.5 at about 67%. Valves combines finance, coding, legal, and tax benchmarks with weights based on those sectors shares of the US economy.

**3:43** · One detail I like here is that Val already uses Argan's higher standard token prices in its cost calculation. Even then, it reports about $1568 per test versus $2134 for Sonnet and $32.14 for Opus. So, there's a real value argument within this suite, but finance accounts for a little over half of that index is waiting. If most of your day is fixing code, that overall ranking might not reflect your priorities. I'd look at the coding components before deciding which model to use.

**4:13** · Zapier's automation bench is another strong result. Argon at high reasoning gets 51.29% compared with 44.75% for sonnet 5.5 at max with its default fallback routing. This benchmark checks whether an agent actually completes workflows across simulated business apps. That means checking the records and other changes it leaves behind. the model saying that it completed the task doesn't earn it a pass. Every required check has to succeed, which I think is a useful way to evaluate automation. Argon is ahead here, and that's good to see.

**4:45** · But roughly half the tasks still don't pass every check. For me, that supports using it to assist with these workflows while checking the results. It doesn't establish that you can leave it to run a business without supervision. There's another independent win on Serge's GDP.xlsx spreadsheet benchmark. Argon scores 38.3% compared with 30.3% for Opus 5.5 and 29.1% for Sonnet 5.5. This is a rubric based score, so don't read it as the percentage of spreadsheets it completed perfectly. Taken together, those results make the professional work pitch look pretty credible.

**5:16** · I'd be interested in testing it on a messy workbook where it has to follow references across sheets and explain how it arrived at the answer. That's the sort of task where checking a few easy cells isn't enough. Anyway, now let's come to coding because this is where the picture gets more complicated. Google reports 77.9% on Deep SWU version 1.1 ahead of Opus 5.5 at 74.2% and Astra at 74.1% in its comparison.

**5:45** · That's a strong result. But on Frontier Sway version 2, Argon gets 55% while Astra gets 65.5% and Opus gets 62.3%.

**5:55** · And on Google's terminal bench 4 comparison, Argon is at 57.4% versus 66.4% for Opus. So even within Google's own table, the answer changes depending on which software engineering test you look at. There's a methodology detail here too. Google computed Argon's deepu result with miniway agent while Astras comes from the benchmark leaderboard and claudes from system cards. These are separately published evaluations. I'd want a controlled comparison in the same agent setup before attributing every difference to the model.

**6:25** · Valves independently puts Argon second on both its app building and code migration benchmarks behind Sonnet 5.5. That is encouraging, but the app building gap is less than half a percentage point, smaller than the reported standard errors. I wouldn't make a big deal out of who is first or second there for coding. My reading is that Argon deserves testing on substantial tasks, especially migrations and app building. The results don't give me a reason to assume it will consistently beat your current agent on debugging, terminal work, and difficult repository changes. This is also why I wouldn't just count how many rows Google wins.

**6:56** · A chart reading improvement and a repository fixing improvement aren't interchangeable when you're choosing something for your daily work. One more example is the legal result. Argon's 19.6% looks dominant against the models Google selected for its chart, but Val's own Argon report lists it fifth for the Harvey legal evaluation. That doesn't erase the result. The launch comparison simply doesn't establish that it leads the whole field. Now, the hallucination result is probably the most interesting part of this release for me.

**7:22** · Artificial analysis reports a 15% hallucination rate on AA omniscience, the lowest among the models scoring at least 45 on its intelligence index. Astra at max is at 51%. However, Argon's knowledge accuracy is 50% compared with Astra's 63%. Those numbers can sound contradictory until you check the definition. The hallucination metric looks at the responses that weren't correct and measures how often the model gave an incorrect answer instead of a partial answer or an admission that it didn't know.

**7:53** · Correct answers aren't in that denominator. So 15% doesn't mean 15% of everything Argon says is false. It also doesn't mean it has solved hallucinations. The useful result is that it is more willing to acknowledge gaps even though it answers fewer of these questions correctly than Astra.

**8:08** · Personally, I like that trade-off for research. If a model can't support a claim, I'd like it to say so. a confident answer with a madeup API or reference can waste a lot of time. But I still want to check how that behavior carries over to browsing and coding where the model has tools available to verify things. Arena gives us a different kind of evidence. Its September 30th text leaderboard puts Argon high at number one with a score of 1525 and around 4,900 votes. The result is marked preliminary. That's encouraging for how people respond to its answers.

**8:38** · It also helps explain why a model can look excellent in chat without topping every technical benchmark. Human preference, factual knowledge, and successfully changing a codebase are separate things. I'd use the arena result as another signal alongside the taskbased tests. Now, Google also highlights a million token output limit.

**8:55** · The output part matters. This gives a reasoning trajectory much more room to continue working. It isn't just a claim about how much material you can put into the prompt. Artificial Analysis says it tested a feature called long decode continuation, which pauses long responses and resums them through follow-up calls, allowing reasoning to reach that limit without request timeouts. So, the practical question is whether that extra thinking produces a better result at a cost you're happy with. I don't need a model to write a million tokens for a small bug fix for a difficult optimization problem.

**9:24** · I'd be more willing to spend that time and money if it produces something I can verify. There's a separate long context result too. Google's reported graph walks result covers context between 256,000 and 1 million tokens. Argon scores 84.2 on the F1 metric compared with Astra's 71.8. That's promising for following relationships across long inputs, although one graph benchmark can't establish how well it understands every large repository. And the video results need a footnote.

**9:53** · Google reports 91.7% on LVbench, but its methodology uses one frame per second for Gemini and fixed frame caps for competitors because of their API limits. That can be a practical advantage for the Gemini setup, but it isn't an equal input test of visual reasoning. Cyber security has some similarly useful detail on C.WE bench version 1. Argon ties Astra and Grock 4.7 at 68% under the programmatic single attempt measure.

**10:21** · Under the separate judge panel measure, Argon gets 62% while Opus gets 67%.

**10:29** · The benchmark also lists $63 per roll out for Argon and 79 for Opus. Those figures use different agent harnesses and the Argon calculation uses a cash input price that differs from Google's introductory discount. So, I wouldn't turn that into a universal cost ratio, but it does show why the score, grading method, and spending all deserve a look before calling something the best security agent. Now, let's talk about the API pricing because this could change whether Argon makes sense for you.

**10:58** · Google advertises $2 per million input tokens and $10 per million output tokens with a 95% discount on cashed input. The footnote says the prices become $4 and $20 after the introductory period. Google hasn't given an exact end date in the announcement. That is a doubling of the input and output rates.

**11:20** · If you're budgeting for an application, I would calculate the cost at the standard rate and treat the launch price as a temporary benefit. Artificial analysis measures about $1.99 per intelligence index task at the promotional rate. It calculates $3.98 after the discount ends. Astra at max costs about $3.26 on that same evaluation, while GPT 6.1 Soul at max costs about 72. That changes the comparison quite a bit. Argan looks cheaper than Astra at launch, but more expensive after the promotion on this workload.

**11:51** · Soul is much cheaper while scoring only one index point lower. Your own task mix could produce a different result, but you shouldn't choose based only on the price per million tokens.

**12:02** · Artificial analysis also reports around 62,000 output tokens per task for Argon compared with around 27,000 for Astra.

**12:10** · So that lower unit price is doing a lot of work. The amount the model generates matters too and efficiency isn't the same across evaluations. Remember that Val still puts argan below sonnet and opus in cost per test using its standard price. That's why I want to measure the bill for the actual job. how much it costs to get a patch accepted or a workbook checked, including any retries.

**12:32** · I also wouldn't promise that Argan feels fast in an editor yet. Artificial analysis doesn't publish an output speed measurement for it on the model page.

**12:41** · Val has task duration numbers, but those don't tell us how responsive the eventual public service will feel while you're working. So, how good is Gemini for Argan looking? Overall, I think the strongest case is professional work where it needs to follow information across documents and tools plus tasks where admitting uncertainty is useful.

**13:00** · There are several independent results supporting that case. So, I wouldn't dismiss this as a model that only looks good in Google's own charts. For coding, I'm more cautious. It has strong results in some areas and clear losses in others. I'd try it on a migration or a difficult task that my usual model struggled with, then compare the finished result and the total cost. I wouldn't assume a new model name means I should rebuild my workflow around it.

**13:23** · The things I want to test when access opens are fairly practical. Can it finish changes without quietly dropping requirements? Can it recover after a failed approach? And does giving it more time actually improve the patch enough to justify the extra tokens? At the introductory price, Argon looks at the standard price. I would be more selective about which jobs I send to it.

**13:45** · The evidence gives Google a credible contender here after the earlier disappointments. Consistent results in the tools we actually use would do the most to win back my confidence. Overall, it's pretty cool. Anyway, let me know your thoughts in the comments. If you like this video, consider donating through the super thanks option or becoming a member by clicking the join button. Also, give this video a thumbs up and subscribe to my channel. I'll see you in the next one. Until then, bye.

**14:13** · Heat. Heat.
