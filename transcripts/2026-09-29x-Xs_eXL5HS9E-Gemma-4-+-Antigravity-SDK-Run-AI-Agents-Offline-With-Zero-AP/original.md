---
title: "Gemma 4 + Antigravity SDK: Run AI Agents Offline With Zero API Cost"
author: "AI Stack Engineer"
site: "YouTube"
source: "https://www.youtube.com/watch?v=Xs_eXL5HS9E"
domain: "youtube.com"
language: "en"
description: "Google added local model support to the Antigravity SDK on September 23, 2026, with Gemma 4 26B A4B running on LiteRT-LM. It also supports OpenAI-compatible ..."
word_count: 1722
---

![](https://www.youtube.com/watch?v=Xs_eXL5HS9E)

Google added local model support to the Antigravity SDK on September 23, 2026, with Gemma 4 26B A4B running on LiteRT-LM. It also supports OpenAI-compatible ...

## Transcript

### Intro

**0:00** · Google added local model support to the anti-gravity SDK and the model behind it is Gemma 4, not Gemini. That means an agent that can plan, write files, run tests, and fix its own mistakes with no internet connection and no API bill.

**0:16** · Most of the coverage focuses on anti-gravity, but I think Gemma 4 is the better story because it's the reason any of this works. And there's one number in Google's own demo that looks great at first, then reads differently once you check what it actually counts. I'll get to that near the end. Gemma 4 came out in early April 2026. And the first change was the license. It's Apache 2.0 now. Earlier Gemma versions used Google's own custom terms, and a lot of company legal teams didn't love those.

### Apache 2.0 license

**0:47** · Apache 2.0 removes most of that friction, so a business can build on it without a long review. For anyone thinking about work use, that matters more than any benchmark chart. E2B and E4B are the small ones built for phones and small devices. The E means effective parameters around 2.3 billion and 4.5 billion and both take audio input too.

### Model sizes and memory

**1:10** · Then there's a 31 billion dense model which is the strongest one. There's also a 26 billion mixture of experts model with the label A4B and that's the one anti-gravity uses. A 12 billion model was added in June for text, image, and audio on mid-range machines. The larger models handle up to 256K tokens of context and the small ones handle 128K.

**1:36** · Only about 3.8 billion parameters are active for each token in the 26 billion model. So, it runs at the speed of a small model while landing close to the 31 billion1 in quality. At launch, Google said the 31 billion ranked third among open models on the Arena text leaderboard and the 26 billion ranked sixth. But active parameters save compute, not memory. All 26 billion still have to be loaded. And that's why Google recommends more than 24 GB of VRAM or unified memory. Speed isn't the problem here. Memory is.

**2:07** · Adoption is a good sign, too. One guide I found says the Gemma family passed 1 billion downloads on August 20th with over 100,000 community variants on Hugging Face. The same guide says Android Studio started shipping Gemma 4 as a fully local coding model on September 1st. I couldn't confirm that second one from Google directly, so take it with some caution. But the direction is clear.

**2:33** · Google isn't treating Gemma as a side project anymore. It's building the runtime, the SDK, and the IDE support around it. And anti-gravity is one piece of that. Setup is short. You create a virtual environment, then run pip install Google- anti-gravity litter-lm.

### Setup

**2:52** · Lite RT-LM is Google's runtime for running models on your own device. The same family of tools that runs Gemma on phones, now pointed at desktop GPUs. Next, one command. liter-lm import pulls the model from a hugging face repo in the light RT community and saves it in a hidden folder in your home directory. The file you end up with is called model.letr RTLM.

### First agent script

**3:17** · The sample script is about 15 lines. You import agent and light RT agent config from google.anti.

**3:24** · Set the model path to that file and open the agent as an async context manager.

**3:30** · Then you call chat with your prompt and print the tokens as they stream back.

**3:34** · The blog example just asks what files are in the current directory which is a small test on purpose. There's also a call to lightweight on the config which trims prompt overhead and compacts context so a local model doesn't drown in instructions. In the newest SDK release, the release notes say that preset gets applied automatically so you don't have to add it yourself.

### Permissions and context

**3:55** · The second example asks the agent to build a terminal dashboard with the psutil and rich libraries. It shows CPU memory and the top five memory hungry processes, saves as monitor.py, writes a requirements file, and tests itself. Two extra settings make that possible. A workspaces list tells the agent which folder it can write in. And a policy called allow all lets tools run without asking you. The SDK readme says agents start in readonly mode for safety.

**4:26** · So permissions are a real part of this setup. For anything beyond a test, I'd skip allow all and use the deny, allow, and ask user rules instead.

**4:38** · So it needs your approval before running shell commands. A local model that can run commands on your machine still needs guardrails. Google suggests 64k context for this model and agents fill that fast because every file read and every tool result goes into it. The model file itself supports around 195k but longer context uses more memory and memory is already the tight part.

**5:02** · The SDK also has a config called local OpenAI agent config which connects to any OpenAI compatible server that covers Olama LM Studio and VLLM.

### Ollama, local servers and speed

**5:16** · And the Gemma account on X lists llama.cpp too. Your agent logic tools and policies stay the same and only the engine underneath changes.

**5:30** · Light RT-LM has its own serve command as well, which opens an OpenAI style endpoint on port 9379. Guom Leforge, a Google Cloud developer advocate, released an unofficial Java version of the SDK. The same day, and his example points at Olama on localhost port 11434 with the small Gemma 4 E2B model. So, if your machine can't handle the 26 billion one, that's a reasonable place to start.

**6:00** · One warning for the Olama route, set the context window yourself because the default cuts it far below what the model can handle. And that's the usual reason people say the model forgot their code.

**6:11** · Google says a run can take several minutes and community numbers explain why. One developer reported about 30 to 40 tokens per second on an M3 Max with 128 GB using a 4-bit version and 20 to 30 on an M4 Pro with 48 GB. Another got roughly 24 tokens per second out of a GTX 1080 with only 8 GB of VRAM by keeping the expert weights in system RAM and using Llama CPP with speculative decoding. That trick only works because of the mixture of experts design.

**6:43** · Google's demo screen shows two of the local workers at 14 and 31 tokens per second. That's fine for a background agent and slow if you're sitting there watching. Now, the hybrid demo, a cloud model, Gemini 3.8 Flash acts as the architect, and it only sees file names and task descriptions. Three local Gemma 4 instances then handle O. py, billing.

### Hybrid demo

**7:07** · py, and database. py. On the demo screen, each file starts by proving the bug with a real PI test. Those red failures aren't the agent failing, they're the bugs being caught, a hard-coded fallback secret, a billing balance that drifted after 10 debits, and an injection probe that returned two rows and bypassed off. After that, two builders write competing patches, a blind critic picks one, and the tests run again. It's an actual review loop, and all of it runs on the local GPU.

**7:35** · The cloud planner used 95 tokens and the local models used 3,322 which is where the 97.2% comes from.

**7:46** · That's a share of tokens, not a share of the work or the judgment. Those 95 tokens made the plan and everything downstream followed it. The planner also still sees file names and descriptions, so Hybrid isn't fully private. Google is clear that no source code was uploaded and that's accurate, but it's a different claim than nothing leaving the machine. For a regulated team, file names alone can be sensitive, so that's worth a review before picking hybrid over fully local.

### Limits

**8:12** · Back in April, a hacker news commenter who ran Gemma 4 in codec CLI said it scored close to top models on one-shot coding tests, but fell back to earth on agentic tasks with tools and a custom harness. Their guess was context handling on small models.

**8:28** · That was a different harness and it's 5 months old. Anti-gravity's harness is tuned for this model, so it may do better, but nobody has published independent numbers yet and the announcement is only 3 days old. Treat the demo as a best case. The light RTLM build of the 26 billion model is also texton for now. The model card says image, audio, and multi-token prediction come in a later update. Multi-token prediction is the speed feature that other runtimes report at 1.4 to 2.2 times faster with no quality loss. So, the faster path exists.

**9:00** · It just isn't in this build yet. None of this is completely new. People have been wiring Gemma 4 into other coding agents through Olama for months. What changed is that Google now supports it officially inside its own SDK with hooks, policies, and orchestration included. The Java release even ships a version with native binaries for airgapped deployments, which tells you who this is aimed at.

### Who it's for

**9:25** · Teams with strict data rules, people who keep hitting rate limits, and anyone who works with bad internet. If I were testing this, I'd start with one small task. Keep permissions tight and watch memory use. With 32 GB or more, the 26 billion model makes sense. With less E4B through Olama is the easier way in, and I'd watch for three things. independent tool calling tests, multi-token prediction, landing in light RT-LM, and the issue tracker on GitHub where Google asked for feedback.

**9:55** · Links to the blog post and the SDK are in the description.
