---
title: "Muse Wonder Full (Fully Tested): META's BIGGER MODEL vs Opus 5.5, GPT-6 Astra & Sol on KingBench 4!"
author: "AICodeKing"
site: "YouTube"
published: 2026-10-13T03:01:31-07:00
source: "https://www.youtube.com/watch?v=k3t3catymeM"
domain: "youtube.com"
language: "en"
description: "Join this channel to get access to perks:https://www.youtube.com/channel/@aicodeking/joinIn this video, I'll put Meta's Muse Wonder Full through the same six..."
word_count: 4221
---

![](https://www.youtube.com/watch?v=k3t3catymeM)

## Transcript

**0:00** · \[music\] Hi, welcome to another video. Before starting the video, I have been posting many tutorials of open-source projects that I like in membersonly videos as well. I am posting more regularly. So, if you want to support the channel, please hit the join button and the videos are available on all tiers from bronze and up. So, please go ahead and check them out. Now, back to the video.

**0:25** · So Meta has released Muse Wonder and Muse Wonder full. And today I'm putting full through the same six Kingbench 4 projects as standard Wonder. We're building an emulator, a Docker alternative, a 3D room designer, a keyboard configurator, a Pokémon game, and a Fitbit desktop app. Then we're opening the results and checking what actually works. Standard Wonder finished this set at 45.8%.

**0:48** · Its room designer and Pokémon game had useful working flows while the systems and device integration tasks left major requirements unfinished. Full gives us a chance to see how much changes when we keep the requests and coding tool the same and select the other model. Muse Wonder is Meta's proprietary reasoning model family announced on October 12th.

**1:05** · Wonder supports a context window of just over a million tokens. Takes several kinds of input and generates text through Muse code. It can use tools to inspect a project, write files, run commands, and test its work. The weights aren't publicly available, so this isn't a model you download and run locally.

**1:21** · Full is a separate variant. Selecting maximum reasoning on standard Wonder doesn't switch you to full. For this run, I explicitly selected Muse Wonder full 1 AO in the native Muse CLI, and the completed model records confirm that identity. Both Wonder runs use high reasoning, the same CLI version, two concurrent tasks, and fresh project folders. Full is available through the power usage and maximum usage subscriptions listed at $50 and $200 a month in the launch pricing. Standard wonder also has pay as you go API access. Full doesn't have a published pay as you go tariff.

**1:51** · So the subscription price and the token estimate will calculate later answer different question. Now on the public benchmarks, full has some stronger headline results. In the October 12th snapshot, Val places it fifth on its index at 64.57% compared with Standard Wonder in 10th at 61.06.

**2:11** · That index combines several professional task categories. It isn't a ranking of every possible use for an AI model. On Terminal Bench 4, full is listed fifth at 58.08%.

**2:23** · Fable has the same displayed score one place above it, so I'd keep that tie visible. On Vibe Code Bench, full scores 86% and is listed 12th, while standard wonder scores 83.09% and is 18th. The improvement isn't across every row. On code migration, Fullspoint estimate is 61.03%.

**2:43** · And standard wonders is 62.55. These individual benchmarks have uncertainty and their agents and tasks differ. They help set expectations without telling us how these six applications will turn out. Artificial analysis gives full 56 on its intelligence index compared with 52 for standard wonder. Its separate coding agents index gives muse code with full 68 versus 63 with standard wonder.

**3:06** · That second result measures the coding agent with the model. These published AA configurations use maximum effort while our Kingbench builds use high. Val also lists maximum effort as its default with settings that can vary by benchmark. For pricing, I'm applying the same standard wonder rates to both runs. $4 per million fresh input tokens, 20 cents per million cached input token. F's dollar figure is therefore an assumed API equivalent estimate.

**3:32** · It isn't an official full API price, and it isn't an extra charge recorded on the subscription. All six builds were allowed to finish without an added generation deadline or model step budget. After each finished, I froze the files and tested a copy. The score comes from working requirements, correctness, presentation, and efficiency with missing or unverified features reflected in the points. I didn't repair the apps before scoring them. So, let's open the results. The first project is the Game Boy, DS, and 3DS emulator. The request is deliberately broad.

**4:04** · Build the systems in Rust, add the normal player features, and make most games work. Each console has to earn its own points. A good Game Boy implementation can't fill in the missing DS and 3DS functionality. Full produces a project called Try Emmu. And there is real work here. It has a Game Boy processor, graphics and audio code, two ARM processors for the DS, and an ARM 11 path for the 3DS. These aren't just three buttons pointing to the same demonstration. The strongest part is Game Boy.

**4:33** · I ran 29 public diagnostics and 23 passed, including all 11 of the CPU instruction tests. An independent input test changes the rendered pixels.

**4:43** · The audio code produces non-zero samples and a battery save with actual data survives a file round trip. Restoring a valid state also resumes deterministically. But six diagnostics fail and the independent checks expose timing and state problems. There's an interrupt sequence that leaves interrupts enabled when they should be disabled. Timer behavior is wrong. The first window scan line is offset and restoring the real-time clock produces an incorrect result. A corrupt state can also be accepted and then crash when the emulator uses it. Those 23 diagnostic passes don't mean 23 games work.

**5:14** · Diagnostics ask narrow questions about the hardware. And this run doesn't include a representative games library.

**5:19** · So the Game Boy result earns useful execution credit without earning the requested most games compatibility. On DS, both processors can execute a tiny independent test and write their own markers to memory. There is also a limited tile rendering path, but ordinary program counter of ARM instructions read the wrong location.

**5:40** · Several interrupt and communication paths fail and the standard frame buffer test comes out black. The 3D graphics and audio systems are missing. The 3DS side is even narrower. A small ELF program reaches a frame buffer, but the standard homebrew format loading check fails. There is no working set of GPU, operating system, and audio services that would turn that into general 3DS compatibility. Then there's rewind. A single 3DS state is roughly 141 megabytes and the default history retains up to 100 states. That projects to around 14.1 GB just for those saved payloads.

**6:11** · I didn't force the machine to run out of memory. The problem is visible from the measured state size and the actual history limit. Serializing one state also takes around a tenth of a second in this test. Full score is 3.1 out of 10 for the emulator compared with 2.4 for standard wonder. There is more working implementation, especially on Game Boy. The DS and 3DS requirements still account for most of the missing points. The second task is a Docker alternative. It has to accept Docker compatible images, run containers, provide the surrounding life cycle and configuration features, and support the claim that it is more efficient.

**6:42** · Full builds, lightbox, and go. The interface covers much more than starting a process. There are image operations, build commands, configuration, and life cycle paths. The Linux source includes name spaces and resource controls while the Mac development path is explicitly different. Compiling that Linux code doesn't establish that the isolation works. So I keep that part of the result qualified. The image handling has a more immediate failure.

**7:05** · In an independent fixture, importing an image writes through a symbolic link and changes a marker outside Lightbox's intended storage directory. Both the image and the marker belong to the evaluation, so no unrelated files are involved. The result demonstrates a real storage boundary failure. There's also a portability problem in its own export workflow. Lightbox changes the layer archive when saving, but retains the old content hash in the image configuration.

**7:34** · Loading the exported image then rejects the mismatched hash. A format compatible file name isn't enough if the generated image fails its own integrity check and there is no comparable Docker performance measurement. A small binary or a design with fewer processes can be interesting, but the requested efficiency advantage needs the same workload measured on both tools. The normal workflow checks find two more problems. Starting an existing container with attached output returns a success code even when its payload exits with an error.

**8:03** · Running an extra command in a live container also replaces the saved main process identifier that can leave later life cycle operations pointing at the wrong process. There are working features to credit. A real busy box image downloads and passes independent hash checks and the small native build environment logging and cleanup workflows run. The final result is 3.0 out of 10. The same score as standard wonder. The storage boundary failure caps it there. The third task is the 3D interior designer. This is where full gives us a much more usable application called atalier.

**8:32** · You have a room in the middle, a furniture catalog on the left, and editing controls on the right. The dark interface has a consistent hierarchy and the scene contains recognizable furniture with shadows and procedural material. The basic editing is functional. Changing the room dimensions changes the actual geometry.

**8:48** · I can create boxes, cylinders, spheres, and cones. Give them specific dimensions and colors and move them in the room.

**8:56** · Dragging, rotating, raising, duplicating, and deleting objects all work in the targeted checks. The lighting controls also change real light sources with a visible effect on the scene. So, there's a useful starting point here. But some everyday controls break the connection between what the interface promises and what the app does. Switch the units to feet and the label changes while the numeric entry still behaves as meters. Entering 10 gives you a 10 m room. Undo can leave the new room width or object color unchanged. The autosave problem is easy to demonstrate.

**9:27** · Start with an 18 item scene. Add one default box and reload.

**9:32** · You are back to 18 items. The app saves before adding the object. The earlier scene survives and this particular box can be restored with the same catalog click, but the advertised autosave has still missed the user's last action.

**9:44** · Explicit export and import work and editing the new box before reloading saves it in the follow-up check. Custom sunlight color also gets stored without being restored as the emitted color.

**9:55** · Imported furniture accepts invalid sizes and duplicate identifiers and imported labels are interpreted as HTML. Those are separate reliability problems. Even though the normal scene roundtrip succeeds, the visual result has strengths, but the request was to make it look as realistic as possible. Here, the default bloom washes out the lighting. A huge bright sky plane is visible behind the room, and the floating dust looks more like snow. The furniture remains visibly assembled from rounded primitive shapes. It's a stylized room editor, and it doesn't earn all the realism points just because physically based materials are present.

**10:27** · Repeated editing also leaves graphics resources behind. Five room edits take allocated textures from 53 to 83. While the scene still uses just 14 textures after clearing 19 objects, the renderer still has 629 geometries allocated for only 28 active geometries. The source confirms missing cleanup. That matters in a design application where adding, changing, and removing objects is the normal workflow. Attelier scores 7.0 0 out of 10. Standard Wonder scored 7.6 on this task.

**10:59** · Full has a substantial usable editor, but its editing and resource management defects bring this result below the standard model. The fourth task is a yellow themed alternative to VA for configuring QMK keyboards. Full calls its app Hive Key. It has a clear keyboard editor, a searchable QR palette, layers, macros, lighting, layout options, and a device panel. The yellow theme is consistent, and the selected key is easy to identify. Here we need to look beyond the demo board. A keyboard editor can show a changed key while sending the wrong value to the device.

**11:31** · So I check the messages against the actual QMK and VA contracts. The browser tests use an independent firmware fixture. No physical keyboard was programmed and the integration points reflect that limit. Full does implement discovery connection, keymap reading, and key map writing. Ordinary keys work in the fixture and an imported custom keyboard layout sends changes to the correct matrix positions.

**11:54** · disconnecting and reconnecting also works. Those tests establish a working basic remapping flow within the fixture, but several of the advanced functions are wrong.

**12:04** · Common layer switching keys generate incorrect numeric codes. Clockwise and counterclockwise encoder assignments are reversed. A macro that is supposed to press enter sends the written brace expression as ordinary text because the action isn't encoded into the firmware's macro format. Lighting is another example of the interface claiming more than the device receives. The app sends the wrong addressing format. The fixture keeps its original brightness and the UI still says the lighting was saved. A keyboard reporting four layers can also get a fifth layer added in the editor.

**12:36** · The app claims a successful write, but reading back from the fixture removes that unsupported layer. Error recovery needs work, too. If a key write is rejected, the editor can keep showing the unscent key with no pending change indicator. Its exported via file doesn't match via save format and reloading losses an imported board definition from the selector. Repeated connections accumulate input listeners while returning to demo mode leaves the device open. Hivekey scores 5.5 out of 10 compared with standard wonders 3.5.

**13:03** · Full gets more of the connected workflow running, but I'd still need to fix those protocol and error handling problems before trusting it with a daily keyboard configuration. The fifth task is the opening of Pokémon Red from Pallet Town through Brock's gym. This is a good test of whether all the individual systems actually join together. You need the quests, navigation, encounters, combat, progression, and saving to support one continuous journey. Full delivers a browser game inside a Game Boy style shell. The controls are clearly explained.

**13:33** · There are onscreen buttons, and the page fits the tested phone width. It looks like a complete little game page when you open it. I started from the beginning and used normal controls. The oak introduction, starter choice, and rival battle work. So do getting the parcel, returning for the Pokédex, buying supplies, catching a wild Pokémon, switching the party, and healing at the Pokémon center. The path continues through Vidian Forest to Pewer City. Brock also has working win and loss outcomes. I first lost at level seven, which returned the party to the center, healed it, and reduced the money without awarding a badge.

**14:05** · Then I trained through ordinary battles. Squirtle entered the final Brock attempt at level 10, reached 11 after Geodude and 12 after Onyx, and earned the boulder badge. Saving and selecting continue preserves the earned badge, party money, and location. The model's own smoke test uses teleports and level changes, but this result comes from playing the route. That distinction gives us a much better picture of what a player can actually finish. The main weakness is fidelity. Oak's lab uses grassy ground and a row of outdoor trees with cratelike furniture. The gym has similar problems.

**14:35** · Towns and roads are simplified into broad corridors, and the Pokémon are crude drawn silhouettes. The browser shell has more polish than the world inside it. Some mechanics are simplified or incomplete as well. The northward quest gate is missing. The PC can store Pokémon without a corresponding withdrawal workflow. And the awarded move item acts as a souvenir. Those details matter for a recreation, even though they don't stop this particular route to Brock. The game scores 7.8 out of 10, up from standard wonders 7.2. It earns the full gym completion point because the route and both outcomes were demonstrated.

**15:05** · The missing fidelity and secondary mechanics keep it from scoring as a faithful finished recreation. The last task is the Fitbit application. I asked for a desktop app with a Rust backend, workout analytics, cardio load, and the kind of connected features you get in Hoop full builds pulseboard with a Rust server, a SQLite database, and a browser interface. This is one of its better looking results. The dashboard has readable cards, charts, and navigation, and the layout still fits at a phone width.

**15:30** · You can log a workout, filter the history, open its details, keep a journal, edit your profile, and import supported local data. I also stopped the server completely and restarted it. The profile, workouts, daily records, sleep, and journal all survived. The basic training load formula passes an independent numerical check. That sounds promising, but following the number through the rest of the app exposes the problem. Importing a workout changes the load while leaving the stored strain score unchanged.

**16:02** · Changing your heart rate profile also leaves previous calculations using the old values. A workout on a date without a separate daily record can be missing from the dashboard entirely. The date windows have similar issues. Weekly load uses seven recorded observations, even when they span almost 2 weeks. The sleep page can calculate debt from the oldest seven nights in the returned history.

**16:22** · Missing sleep can be replaced by a 7-hour assumption inside recovery. While the interface still shows sleep as unknown, those charts can look convincing while describing the wrong period or incomplete data. The import checks also find duplicate workouts and incorrect duration units. A documented Fitbitshaped activity is skipped because the app expects a different date field.

**16:41** · Adding that field exposes a second problem. A 1-hour duration in milliseconds becomes 3.6 million minutes. That was a synthetic test object based on the API documentation, not a download from a personal account.

**16:54** · There is OOTH and sync code and the local authorization URL has the expected challenge and redirect structure, but I haven't verified a real Fitbit login, token exchange or device sync. So, those features only receive limited credit.

**17:07** · The delivered app also opens in the browser. There is no native desktop package. Even the documentation gets the device wrong, saying Fitbit Air isn't current when Google's device documentation lists it. That mistake doesn't make every local feature useless, but it helps explain why I would check the provider integration before entering my own data. Pulseboard scores 5.4 out of 10 compared with 3.8 for standard wonder. Full delivers a more useful local application, and the working persistence deserves credit.

**17:34** · The health calculations and ingestion still need substantial work before I would rely on its recommendations. Now, this is the final Kingbench chart. Full gets 3.1 for the emulator, 3.0 for the container runtime, 7.0 for the room designer, 5.5 for the keyboard configurator, 7.8 for Pokémon, and 5.4 for the Fitbit app. That adds up to 31.8 out of 60 or 53.0%. Standard Wonder finished at 45.8%.

**18:02** · So, full gains about 7.2 percentage points. It improves four projects, ties one and falls behind on the room designer. The biggest improvements are the keyboard configurator and fitness application. There is more functional coverage in both even though their connections to device protocols and calculated data remain unreliable.

**18:21** · Across the seven recorded models, Opus 5.5 leads at 57.8%.

**18:26** · Followed by GPT6 Astra at 56.5, GPT 6.1 Soul at 55.0, and Haiku 5.5 at 54.2.

**18:36** · Full takes fifth at 53.0. Standard wonder and GLM 5.3 share 45.8%. These are scores for one set of six generated applications from each model. The older runs used clawed code, codecs, and open code, their own reasoning settings, and a 60-minute generation watchdog. Both Muse runs used the native Muse CLI without an added deadline. So, the chart compares the results we actually obtained. It doesn't isolate the model from every difference in the tools or execution conditions. The individual rows also tell you more than the final position. Opus wins the aggregate while scoring only 3.0 on the Pokémon task.

**19:09** · Fool's game reaches 7.8 below Soul and Astra, but ahead of Opus. I'd look at the kind of work I need done before treating a one place difference as a buying recommendation. Now, let's look at the tokens and cost across all six tasks. Full made 333 recorded model calls and used about 30.54 million tokens. Standard Wonder made 248 calls and used about 17.56 million. Full used roughly 74% more counted tokens in this run. That 30.54 million figure includes input reused across calls.

**19:39** · Full had about 861,000 fresh input tokens. 29.28 million cached input tokens and 397,000 output tokens. Cached input is already part of input and reasoning is already part of output, so neither gets added a second time. This also means the total is a measure of the whole agent session, not 30 million tokens of newly written code. At the same wonder rates, the full estimate is $1725 for all six projects compared with $10.52 for standard wonder. That is about $6.73 more or a 64% increase.

**20:12** · Again, full is being valued at Standard Wonders published rates for this comparison. The number doesn't tell us what Meta would charge for a full API, and it doesn't replace the subscription price. The container project accounts for the largest full estimate about $512 and still finishes at 3.0.

**20:29** · The emulator goes the other way. Full uses fewer tokens and costs about 287s compared with standard wonders $3.97s while gaining some points. More spending didn't produce the same kind of return on every task. For the earlier models, the complete shared accounting covers three projects. The room designer, keyboard configurator, and Fitbit app.

**20:49** · On those three, full comes to about $6.3 and standard wonder to $311. Haik coup is roughly $3.79 to $3.95. Soul is $342 to $6.37. GLM is $659. OPUS is $26.26 and Astra is $18.77 to $35.66.

**21:09** · Those historical estimates retain their dated rates and pricing sensitivity ranges, including confirmed tool charges where recorded. Muse's figure here covers model tokens. We can compare the recorded estimates within that scope, but we can't put a three project bill beside a six project bill and call it a cost ranking. The saved report includes the exact token totals and assumptions for each comparison. Full also took longer. With two tasks running concurrently, its generation span was about 58 minutes and 36 seconds.

**21:40** · Standard wonder took about 15 minutes and 34 seconds. That is around 3.8 eight times the elapse generation time in this pair of runs. It includes the agents commands and tool work, so it isn't a measurement of raw model response speed.

**21:55** · For me, the most convincing full result is the Pokémon game. I can start fresh, work through the quests, lose, train, beat Brock, and keep the result after reloading. The room editor also gives you a lot to interact with, although it's saving units and graphics cleanup need attention. The weaker results show where I would spend my review time. In the keyboard app, a success message doesn't guarantee the intended configuration reached the device. In the fitness app, a working formula doesn't guarantee every chart was updated.

**22:21** · In the emulator, executing a small test doesn't establish compatibility with the games people actually want to play. So, would I choose full over standard wonder? For these six prompts, full produces a better overall set of applications, and the added keyboard and fitness functionality is visible. If I already had access through the subscription and could wait longer, I'd use full for another attempt at those projects. I'd still keep the standard models room designer around because that was the stronger result on that task.

**22:49** · I wouldn't buy the plan expecting one prompt to deliver a finished emulator, container platform, or trustworthy health app. full made substantial progress, but its best work here still benefits from someone playing the game, changing the settings, reloading the data, and checking whether the promised behavior holds. That is where the difference between a convincing demonstration and an application I'd keep using becomes visible. Overall, it's pretty cool.

**23:16** · Anyway, let me know your thoughts in the comments. \[music\] If you like this video, consider donating through the Super Thanks option or becoming a member by clicking the join button. Also, give this video \[music\] a thumbs up and subscribe to my channel. I'll see you in the next one.

**23:29** · Until then, bye.

**23:43** · \[music\]
