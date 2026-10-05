---
title: "Needle 3: 8MB On-Device AI for Tool Calling without LLM vs TypeSafe Jev"
author: "AI Stack Engineer"
site: "YouTube"
source: "https://www.youtube.com/watch?v=OxPEAqNzExg"
domain: "youtube.com"
language: "en"
description: "Needle 3 from Cactus Compute is an open-source automation model for phones, wearables, smart homes, and microcontrollers. One set of weights ships as an 8 to..."
word_count: 2000
---

![](https://www.youtube.com/watch?v=OxPEAqNzExg)

Needle 3 from Cactus Compute is an open-source automation model for phones, wearables, smart homes, and microcontrollers. One set of weights ships as an 8 to...

## Transcript

### Intro

**0:00** · Noodle 3 is a model that takes a sentence like turn off the porch light and set the oven to 400. And it turns into two clean function calls. It runs on a phone, a watch, or a small board with no internet connection. The full version is 29 megabytes and the smallest usable version is around 8 megabytes only. It came out same week Type-Safe AI launched Jab, a much bigger model built around the same idea. The two models approach the problem from opposite ends.

**0:31** · And comparing them tells you a lot about where AI automation is heading. There are also some weak spots in the Noodle 3 that don't show up in the headline numbers. And they matter if you plan to ship this in a product. Both models share one simple bet. Most software decisions don't need a paragraph of text. They need a choice, like which function to run and which values to go into it. A normal language model writes the answer one token at a time. You parse the JSON out of it.

### The Core Idea

**1:02** · You validate it. At some time you retry because it made up a field. Noodle and Jab skip all of that. They only produce structured output, so your code can act on it right away. So Noodle comes from Cactus Compute, a Y Combinator startup from San Francisco, and version 3 was released on September 17th.

### Needle History

**1:26** · It's the third release this year. Back in May, they put out a 26 million parameter model distilled from Gemini's tool calling. In August, they shipped Noodle 2, which had 45 million parameter total.

**1:40** · It can fit into a 14 megabytes and run a full session in about 28 megabytes of RAM. Noodle 3 goes up to 121 million parameter, but the file is still only 29 megabytes. That's because weights are compressed to roughly two bits each. So, the main idea is what they call an intelligence ladder and you can see right at the top of the needle page. The model has 20 layers and only depth from two to four works as a separate model.

### Intelligence Ladder

**2:11** · So, you can download a file and you can cut out a four-layer version for a smartwatch or keep all 20 layers for a laptop.

**2:19** · The four-layer version has 29 million parameter and every extra layer adds about 103 megabyte. The training take is pretty simple. On about 80% of training steps, they train the full model normally. On the other 20%, they pick a random depth, run only those layers, and push that smaller version to copy what the full model predicts.

**2:41** · The blog post on the intelligence ladder explains layer zero and layer 19 are always kept and the middle gets filled in by splitting the biggest gap each time. And here is a surprising part. The full model actually got better from this.

**2:59** · In their test, it ended with a 3.9 lower validation loss than the same model trained without the ladder. And under the hood, they call the architecture a simple attention network. In a normal transformer, the feed forward layer holds most of the parameter and Cactus removed it and replaced it with a Hadamard MLP. The Hadamard MLP uses about 25.6 thousand parameter per layer instead of 4.7 million.

### Architecture

**3:27** · So, most of the knowledge now lives in n-gram tables, which are hashed lookups for short two or three-word chunks.

**3:35** · So, 70.8 million of 121 million total parameters sit in those tables. The model reads the codes from them instead of multiplying through them. So, the full model does about the same math as a 50 million parameter one. On a small board, they report around 400 to 4,000 tokens per second for decoding. The output guarantees come from the grammar.

**3:58** · Needle compile your function schemas into a byte level grammar, and every token it generate has to fit that grammar. So, the JSON always parse. That doesn't mean the answer is always right, and that difference matters. If you ask for something none of your tools can handle, like the price of gold, you can get an empty list back instead of a best. Every response also has a confidence score from a separate calibrated head.

**4:25** · The engine already has a floor of 0.5.

**4:29** · Anything below that gets moved into a field called suppressed calls, and the main call list comes back empty. On the Needle page, they show a simple routing splits in if confidence is 0.7 or higher, run the call. If it's in the middle, show the user a call and ask them to confirm. If nothing came back, say you can do that. For a real product, that three-way split is honestly the most useful part of the whole page.

**4:58** · Getting it running takes one install.

**5:01** · You run pip install Cactus-Needle, and the inference engine downloads once from Hugging Face and get cached. Then put the @needle.tool decorator on top of it.

**5:12** · \[snorts\] The type hints become the argument types, and a docstring become the tool descriptions. So, you pass your tools into the Needle class and call agent.run with a plain sentence. It picks a function, fill the argument, runs your code, and hands back the result. If you just want to call without running it, agent.complete gives you the raw JSON with the function name, the argument, a short reasoning line, the confidence score, and even peak RAM usage.

**5:39** · For a request like, "Set the guest room to 68 and turn on the heater." you would see two calls come back in the right order.

**5:50** · Extraction works the same way just with one tool. You define a model with the field you want, pass in same text, and call needle.extract. For example, a shipping email goes in, a carrier tracking number, and delivery date came out as a typed object. The extraction blocks makes one point clear. Every field it fills is a span copied from the text. So, it's self-grounded, which is good. But, if the value is not actually written in the passage, the model cannot produce it.

**6:21** · So, a casual chat message with the details spread around work worse than a clear invoice or receipt.

**6:29** · The tool design guide is where most of your accuracy came in, and the team says this directly. Make one tool per action, not one big tool per category. Name option after what users actually say, and give every required argument or default when a request might have it out. If a required argument has no default and nothing in the sentence covers it, needle needle hold the calls back instead of guessing. That's safer, but it look like a failure if you don't expect it. There is also a trigger option, which takes regular expressions.

**7:03** · When a request matches a trigger, the model is forced to call that tool. So, phrasing you can't list in a description still reach the right function. And keep your tool as small because every extra tools gives the model one more way to pick the wrong one. All right. So, the benchmark claims need some context. The headline says Needle 3 beats model 10 time its size on the mobile tool calls.

### Benchmarks

**7:28** · And a fine-tuned four-layer version passes Deep Seek V4 flash. Now, look at the base score in the ladder post out of the box. The four-layer models get 11.7 on mobile action and 21 on drive calls. The full 20 layer gets 86 and 47. Fine-tuning lift every depth by 18 to 36 points on the droid call. And even the two layer model goes from basically usable to 56.5.

**7:56** · But droid call only has 200 rows. One developer on their own test and got 32.2%. An official from Cactus replied that "Needle is task-specific, so you should expect to fine-tune it before production." So, the base model is starting point, not a finished assistant. Fine-tuning is pretty light, though. Your data goes in a JSONL file, where each line has a query, the tool, and expected answer. Off-topic examples just get an empty answers list.

### Fine-Tuning

**8:27** · You run needle fine-tune on that file with 10 epochs, and it trains a LoRA adapter on a top of the frozen base. If you don't have data yet, there is a generate data command that create examples through OpenRouter. The default model is using DeepSeekV4-Flash, which is kind of funny, since that's the same model they claim to beat after tuning. The needle build merges the adapter and exports a .kct file for whatever depth and platform you pick.

**8:56** · Each platform get a pre-built engine under 1 MB that covers macOS, Windows, Linux, Android, iOS, watchOS, and even the browser through WebAssembly. So, you fine-tune once, and you can ship on eight layer version to a pie and the full model to a desktop from the same adapter.

**9:17** · The playground keep conversation state, so follow-up requests continue the same session. If you send unrelated commands back to back, like a thermostat changes and then an unrelated questions, a few turns can pull the next call in the wrong direction. Reset between independent requests. The same model also return text embedding, so you can do local semantic search or match our request to the closest tool out of the hundreds all on the same device. Jeff takes the opposite approach. Type Safe AI launched it on September 15th on early access.

### TypeSafe Jev

**9:50** · The founder is Diego Milda and the name system one called from Daniel Kahneman's fast intuitive way of thinking.

**9:57** · Jeff doesn't write output left to right at all. It produces the whole structured answer in one parallel pass. Type Safe reports 70 to 500 milliseconds per response. Their Doom demo has Jeff reading the game state as text about 10 times a second for roughly $7 an hour. Pricing is 4.2 cent per million input tokens and zero for output. They also say it cannot hallucinate. The register pointed out that this really means it cannot produce invalid structure, but it can still pick the wrong options.

**10:29** · And an engineer argued that a lot of the speed come from the infinite strategy. Since you can get similar result by pre-filling a regular model and limiting it to a single constant token. Comparing them directly, they solve different problem. Jeff is a large cloud model, so it handle harder decision and huge choices like picking a right link out of thousands in one of their demo. But Needle still decode token by token under a grammar.

### Needle vs Jev

**10:59** · So its speed came from being tiny, not from parallel decoding. It's a open source under Apache 2.0. It cost nothing per call and your data never leaves the device. Jeff gives you probabilities across options, while Needle gives you a confidence score on its calls. So in practice, you could run both together with Needle on the watch handling like pausing music and Jeff in the back end for routing decision that actually need more intelligence.

### Final Thoughts

**11:28** · If your company is paying for a frontier API to turn simple commands into function calls at high volume. That's exactly the cost these models are going after. Start with needles environment or your own narrow tools plan or fine-tuning and get everything on confidence. So, that's it from the video. All the links are available in the description.
