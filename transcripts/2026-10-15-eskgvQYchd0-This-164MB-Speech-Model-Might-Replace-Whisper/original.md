---
title: "This 164MB Speech Model Might Replace Whisper..."
author: "Better Stack"
site: "YouTube"
published: 2026-10-15T08:00:23-07:00
source: "https://www.youtube.com/watch?v=eskgvQYchd0"
domain: "youtube.com"
language: "en"
description: "Phonon-2 is a new 164MB open-source speech-to-text model from Fermion Research that claims to transcribe an entire hour of audio in just 21 seconds on a MacB..."
word_count: 1669
---

![](https://www.youtube.com/watch?v=eskgvQYchd0)

## Transcript

### Phonon-2: 164MB Speech Model, 21-Second Transcription

**0:00** · An hour of audio transcribed in 21 seconds on a MacBook Air with no internet. And the model doing it is 164 megabyte download. Whisper Turbo, the model most people would reach for, is 10 times that size. It comes from a lab that's barely 6 weeks old and it claims to be more accurate than Whisper and six times faster than its closest rival. But when I looked at who ran those benchmarks and how they ran them, something didn't add up.

### Phonon-2 vs Parakeet Redux: What's Different?

**0:31** · So, in another video, we tested Parakeet Redux. It took Nvidia's 2 and a half gigabyte parakeet model and compressed it down to just 178 megabytes using 1.58 bit weights. Now, there's another model called Phon 2 from a small lab called Firmion Research and it starts with the exact same Nvidia model, but instead of using Redux's approach, Firmion retrained the encoder. So every weight uses just one of five learned values.

**1:00** · That's about 2.1 bits per weight with everything else stored in six bit tables. Now you'd expect that to make Phoneon 2 bigger, but it doesn't. It's 164 megabyte download that expands to about 178 megabytes, exactly the same size of Redux. The difference is what each model is trying to do. Redux spreads its capacity across 25 languages. Phon 2 focuses everything on English and according to Fermion that trade-off makes a pretty big difference.

**1:31** · If you enjoy coding tools to speed up your workflow, be sure to subscribe. We have videos coming out all the time. So, how fast is this? Well, let me show you.

### Installing Phonon-2 on Mac & Transcription Demo

**1:40** · Getting it running is pretty darn simple. Yeah, you need Python 310 or newer. Mac OS still ships with 3.9, so you'll want a fresh virtual environment.

**1:50** · Then install firm on research with the MLX extra. All we're going to do is run Phon transcribe on an audio file that I'm going to execute right here.

**2:02** · Now, Firm claims Phoneon 2 can transcribe audio at 174 times realtime speed on a 16 GB M5 MacBook Air. That really means an entire hour of audio in about 21 seconds. And remember, this is all running locally. No uploading anything to a cloud. and no paying by minute, which is a reason why we love these tools. Now, for comparison, Whisper Large V3 Turbo is about 1.6 GB in download. Phon 2 is a fraction of that size, but there's something important about how it gets that speed.

**2:35** · Now, Phoneon 2 uses MLX to run on the max GPU, but it also has something called a fast path decoder, which is enabled by default, and that makes a huge difference. Firm reports 174 times real time with the fast path. Switch to exact decoding and that number drops to about 109 times. CPU only about 40 times. Their benchmark also puts Whisper Turbo running through Whisper CPP with Metal at just 17 times.

### How Phonon-2 Achieves 174x Real-Time Speed

**3:00** · So on paper, Phon 2 looks ridiculously fast, but speed doesn't mean much if the transcription is just plain wrong. And this is where things start to get a little more interesting on the accuracy.

### Accuracy Test: Phonon-2 vs Whisper vs Redux

**3:14** · Firmian tested Phoneon 2 against Redux Whisper Turbo in the original Nvidia model. They measured word error rate, which is basically how many transcription mistakes a model makes.

**3:26** · Obviously, the lower the better. Across seven test sets, Phon 2 scored 5.21.

**3:33** · Redux scored 5.69, Whisper Turbo came in at 6.58, and the original 2 and 1/2 GB Nvidia model scored 4.96.

**3:43** · Think about that for a moment. A 164 megabyte download gets within about a quarter point of a model roughly 15 times its size. Firm even calls it the most accurate open English speech model under 900 megabytes which sounds impressive. A lot of testing needs to go into this though. But why specifically 900 megabytes? And more importantly, who actually ran these benchmarks? All right. Now, every single number I've shown you so far came from Firmian, including the numbers from Redux.

### The Catch With Phonon-2's Benchmarks

**4:11** · And Redux's own model card reported a different average of 6.55. Now, that doesn't automatically mean anything is wrong. They're using different testing methods. So, you can't directly compare the two model cards. And even in Fermion's own results, Redux actually beats Phon 2 on AMI, the meeting audio benchmark, 9.16 versus 9.37. So, Phon 2 isn't winning everything. But remember that claim about being six times faster.

**4:40** · This is where I started questioning the whole comparison. Firm didn't test Redux using Moondream's own runtime. They used a third-party core ML port called Fluid Audio. And that version of Redux only reached 27.8 times real speed. But look at this. In the exact same table, the original Nvidia model, which is about 14 times bigger, reached 105 times through that same port. So somehow the much larger model was nearly four times faster. That's a pretty strong sign that the port is affecting performance.

**5:12** · Not necessarily that Redux itself is slow.

**5:16** · And Moonream reports 38 to 43 times real speed on an older M2 MacBook Air. So, Phoneon 2 looks fast, but that six times comparison doesn't prove it's six times faster than a properly optimized Redux implementation. And there's one more benchmark worth looking at. The Open ASR leaderboard team independently tested Phoneon 2 and added it to their leaderboard on October 2nd, and their results tell more of a different variety here. Phon 2 averaged 7.23. The original Nvidia model scored 6.51 and Whisper Turbo scored 8.39.

### Independent Speech-to-Text Benchmark Results

**5:47** · So, Phoneon 2 still beats Whisper on average, but Whisper actually wins on three individual test sets. The biggest one is Noisy Speech.

**5:59** · On Urgent 2024, Whisper scored 13.69 compared to Phoneon 2's 14.90. It also won on SPGI Speech and Voice Arena Monsoon. And there's another limitation.

**6:11** · Redux isn't even on the leaderboard, so we don't have an independent head-to-head comparison between the two smallest models. Now, benchmarks are one thing, but there are a few features that make Phoneon 2 interesting for us devs.

### Live Transcription, Captions & Custom Hotwords

**6:25** · First up here is live captions. Just run phoneon listen and it starts transcribing audio directly from your microphone. Here I am just talking to my microphone running a test. Now, that's pretty useful. But here's another feature that I like. Hot words. You can give Phoneon to a list of names or specific words that you want to actually recognize, which is especially helpful when you're transcribing any type of technical conversations, really anything you're constantly repeating. Let me show you the difference.

**6:56** · The first one is without hot words, then with hot words.

**7:02** · Now, one thing I haven't verified is how long the actual streaming latency is.

**7:07** · Those are two, one without hot words, one with hot words. The underlying model is an offline model. So if you're building something that depends on real-time transcription, I'd measure that latency first. But there's another feature that's even more useful for us.

### Running a Local OpenAI-Compatible Transcription API

**7:21** · Phoneon 2 comes with its own local server. Just run Phoneon serve. And that starts a server on port 8000 with an OpenAI compatible transcription endpoint and a web socket stream. And that's already useful. Let's build on that. If your application already uses OpenAI's transcription API, you can point the base URL at localhost instead. So you're running a speechtoext locally through an API your code and you already actually understand. You can just fire up a request just like this and it's going to execute.

**7:53** · But before you start building around this, let's touch on something cuz there's one more thing we need to look at. Because with small open- source speech models that are popping up these days, the license is going to be the biggest catch on a lot of these as we learned before. And this time though, good news. It's actually pretty straightforward. Phon 2's code and CLI are Apache 2.0 and the model weights use CC by 4.0 inherited from Nvidia. So commercial use is allowed. And as long as you give the required credit to Nvidia and Firmion, that's nice.

### Phonon-2 Licensing, Commercial Use & Limitations

**8:23** · Go ahead. But the project is still really new. As I said, it's about 6 weeks old and it comes from a small lab that well kind of blew up in the last week or so.

**8:35** · So clearly people are interested. But the hacker news post got only a few points and no comments. That Twitter post was the big bang. The main real world user so far is Firmian's own Mac dictation app data. Which brings us to the actual question. Should you use PhoneOn 2 instead of Redux or Whisper?

### Phonon-2 vs Whisper vs Redux: Which Is Best?

**8:52** · Well, I'll let you be the judge of that.

**8:54** · Probably not. It's just cool to test these models to see where they're actually going to go, what's going to come out on top and what's not. So using Phoneon 2 and experimenting with it might just be the right play here. If you're working with English audio on Apple silicone or you want fast local transcription with an API, this looks like a really great option. Don't change anything yet. Just experiment with it.

**9:16** · I'm Josh from Better Stack. If you enjoy coding tips and tricks like this, be sure to subscribe. We'll see you in another video.
