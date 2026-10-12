---
title: "I Built KingBench 4 (HARD): Opus 5.5 vs GPT-6 Astra vs Sol vs Haiku 5.5 vs GLM 5.3"
author: "AICodeKing"
site: "YouTube"
published: 2026-10-10T02:15:23-07:00
source: "https://www.youtube.com/watch?v=cAIvhxVx0kU"
domain: "youtube.com"
language: "en"
description: "In this video, I'll put GPT 6.1 Sol and GPT 6 Astra through Codex, Opus 5.5 and Haiku 5.5 through Claude Code, and GLM 5.3 through OpenCode against the same ..."
word_count: 5005
---

![](https://www.youtube.com/watch?v=cAIvhxVx0kU)

## Transcript

### Intro 5 models, 6 projects

**0:03** · Hi, welcome to another video. So, I gave five AI coding models, the same six projects, including a Game Boy, DS, and 3DS emulator, a Docker alternative, a 3D room designer, and a playable recreation of Pokémon Red through the first gym.

**0:18** · One model built a game where you could defeat Brock, earn the badge, and then lose that progress because the save menu wouldn't stay open. Two others built keyboard configurators that looked ready to use but couldn't actually remap a connected keyboard. And Haiku ended up much closer to the larger models than I expected. We're comparing GPT 6.1 Soul and GPT6 Astra through Codeex, Opus 5.5 and Haiku 5.5 through Claude Code, and GLM 5.3 through Open Code. That's 30 projects in total. I'll go through what each one built, where the apps broke, and how much API usage went into them.

### The models, the rules and how scoring works

**0:50** · The models got the same task prompts and delivery instructions with a fresh implementation session for each project.

**0:56** · Each run had a 60-minute cutoff with high reasoning selected where supported and the apps were evaluated as delivered. I didn't finish missing features for them before assigning the scores. Some runs timed out or were interrupted. So, their unfinished output is part of the result. The first four models ran on October 3rd and Haiku ran on October 8th with a newer claude code version. These are model and tool combinations with the capabilities available inside their respective coding agents. It's a small test set, so I wouldn't use a tiny difference here to declare a permanent winner for every coding task.

**1:25** · Each project gets a score out of 10, and the six projects have equal weight in the final percentage.

**1:31** · The checks cover the requested features, actual workflows, visual quality, error handling, and avoidable performance costs. A percentage here represents points earned across these projects. It doesn't tell you what percentage of commercial games an emulator can run.

**1:44** · So, let's start with the emulator because this is where the gap between the request and the delivered software is the largest. The prompt asks for a fully functional Game Boy, DS, and 3DS emulator in Rust written from scratch apart from libraries with save states and compatibility with most games. Those are three separate systems. Reading the title from a DS cartridge file doesn't provide the hardware simulation needed to play it. Saul builds a substantial experimental Game Boy emulator. It has real CPU execution, graphics, cartridge handling, and a sound implementation.

### Game Boy / DS / 3DS emulator

**2:18** · It passes all 12 of the selected hardware diagnostics, and its safe state checks include deterministic replay and rejection of damaged or mismatched states. That earns credit. The problem is that DS and 3DS support stop at inspecting file headers. You can have a usable Game Boy Workbench and still leave 2/3 of this particular request unimplemented. So, gets 2.2 out of 10.

**2:42** · Astra lands in almost the same place.

**2:44** · The Game Boy core passes the same 12 selected diagnostics and its safe state behavior holds up in the tested cases.

**2:51** · The player is readable with the game centered and controls grouped around it, but again, there is no working DS or 3DS system. Astra also gets 2.2. Haiku has more actual Game Boy than its final score might initially suggest. Its unit tests pass. It clears 15 serial blog test cases and it passes 10 of the 12 selected Mooneyi diagnostics. input changes the rendered frame and ordinary replay and battery save checks work.

**3:15** · Then the boundary tests expose timer and interrupt problems. A sound accuracy failure and a malformed color pallet state that is accepted but crashes when the next frame runs. Loading a valid state while paused can also leave the old image on screen. Its DS code can execute ARM instructions, but the surrounding machine is missing. In the DS fixtures, the instruction counter runs into the millions while the video state stays at zero. graphics, device scheduling, and the other systems needed to produce a working DS are absent.

**3:45** · Haiku gets 1.8. GLM doesn't reach a usable player. The executable prints the project name, and exits. There is some Game Boy library code, but no connected application for selecting a ROM, playing it, and saving progress. The diagnostic checks also find failures, a panic, and several timeouts. It gets 0.6. Opus makes the most progress here at 3.7. It has Game Boy execution and actually runs two DS diagnostic or homebrew programs, Arm Wrestler and Bunny Garden.

**4:12** · Both screens produce output and DS save states restore and continue deterministically. The output is rough.

**4:22** · Text overlaps in one test and the other scene is sparse. There are missing DS features and 3DS execution is absent. I can give Opus credit for a functioning piece of DS emulation without pretending that two test programs establish broad game compatibility. So, nobody delivers the complete emulator. Opus wins this task because it implements more of the requested systems. The others don't get the missing platform points just because their Game Boy portion has a nice interface or a long list of passing tests.

**4:51** · The next request is a Docker alternative that can use Docker images, is built without Docker's libraries or copied code, and is more efficient than Docker. There are several jobs inside that request. You need to retrieve images, apply their fall system layers correctly, start processes with the right isolation, and manage those processes. You also need a comparison that demonstrates the efficiency claim.

### Docker alternative

**5:14** · None of these projects proves that it's faster or more efficient than Docker.

**5:18** · Independent Linux isolation testing also remains incomplete across the five submissions. The image handling checks tell us more about what works here than the presence of a run command in the source. Soul gets the highest score at 5.0. Docker archive import, image export, and reload tags, digest preservation, and simple scratch image builds work. It also passes the four common archive boundary checks, including attempts to escape through file system links and cases involving deleted files and image layers.

**5:45** · The source contains a substantial Linux runtime, but several expected features are missing, including published ports, a full interactive terminal workflow, and broad Docker file support. So, this is useful image engine work with an execution path still awaiting independent verification. Opus exposes the broadest set of container commands.

**6:02** · There is code for creating, starting, restarting, and stopping containers, plus mounts, ports, logs, and terminal handling. Its portable image workflows work, too, but it mishandles white outs.

**6:11** · These are markers that tell an image layer to remove files inherited from an earlier layer.

**6:16** · In two tests, Opus deletes new files created within the same layer. You can end up with the wrong file system before the application inside the container even starts. Opus gets 4.6. Astra also gets 4.6, although its strengths are different. It passes those four extraction boundary checks and handles the tested build, save, load, and tagging workflows. Its runtime is narrower with missing resource quotas and several Docker features including Docker file run volumes and publish ports.

**6:44** · GLM can pull a public Alpine image and save and reload it while preserving the image identity. However, its archive extraction can write outside the intended directory and another test can delete a file outside that directory. Those were controlled test files and the escapes were reproduced.

**7:03** · GLM gets three. Haiku gets 30 O as well.

**7:05** · Its registry and image management workflow works, including skipping redundant extraction when an image is pulled again. But a crafted layer makes it change the permissions and timestamp of an existing file outside the extraction directory. The files contents stay intact in Haiku's case. The defect is that an archive can change permissions on something it shouldn't be touching. That is enough to cap the result. Even though the ordinary image management commands work, there is useful engineering in these projects, especially the image tooling. None of them gives me evidence for the full replacement or the efficiency advantage that the prompt asks for.

**7:35** · The room designer is a much better showing across the board. Here the request is to set room dimensions, create furniture with different sizes, shapes, and colors, place it in a 3D space, and make the lighting and materials look realistic.

### 3D room designer

**7:48** · All five produce applications where you can actually edit the room. Saul's version has a clear control layout, a furniture tray, working dragging and rotation, undo, colored lighting, and save and export features. Changing the room dimensions changes the geometry, so the controls are connected to the scene.

**8:02** · One small looking mistake makes furniture creation awkward. Clicking a custom color swatch submits the form before you finished because the swatch button behaves like a submit button. The materials also remain fairly matte. The upholstery is blocky and the foliage is primitive. Moving furniture causes broader rebuilding than necessary.

**8:18** · Instead of updating that object's position, the app rebuilds all the furniture meshes. that can still feel fine in a small room, but it creates unnecessary work as the project grows.

**8:29** · Soul gets 8.0. Opus wins this one at 8.5. It has the strongest material and lighting treatment in this set with fabric and wood detail, differentiated surfaces, contact shadows, and reflections. Placement controls include dragging, rotation, numerical positioning, elevation, and support snapping. The result still has boxy furniture, repeated wood grain, and some overly bright lamp surfaces. I'd keep refining those materials, but the differences between fabric, wood, and reflective surfaces already give the room more character. The save feedback has a bug, though.

**9:01** · When the storage is forced to reject a save, the interface still says saved locally. The room on screen has changed while the stored room still contains the old dimensions.

**9:11** · Normal saving works. The failure is that the interface tells you the wrong thing when saving fails. Astrogates 8.3. Its editing workflow is broad and functional with custom furniture dimensions and colors, placement, lighting, undo and reload. It also rejects duplicate object IDs in imported projects. The scene looks clean, but the furniture and foliage are simplified, and the lighting leaves some walls looking flat. It keeps rendering and recomputing contact shadows even while the room is unchanged. The resource checks also show substantial allocation churn during edits, although they don't establish a memory leak. GLM gets 7.8.

**9:42** · The core editor works, including dimensions, placement, rotation, and duplication, but some wood accents ignore the selected color and stay white. The import rules and the room size slider also disagree about the minimum room size. Visually, the plants look like stacked geometric shapes. The cabinets are blocky and some surfaces are too bright. You can plan a room with it, but the prompt also asks for realism, and that part remains limited. Haiku ties Astra at 8.3.

**10:11** · It supports nine custom shapes, numerical rotation and elevation. Dragging, undo, and lighting controls. A custom glossy red cylinder gets the requested dimensions and material, and changing a fixture color actually changes the illumination. I like the material variety here. There is recognizable wood, upholstery, glass, and bookshelf detail. Some highlights blow out to white. The foliage still looks like clusters of balls, and the window view is flat. Imported projects also need better validation. Haiku handles idle rendering better than the others.

**10:42** · When nothing changes, it stops drawing in the tested movement path. It also keeps the existing mesh instead of repeatedly recreating it. So, Opus has the best room overall, while Astra and Haikutai for second with different trade-offs. All five deliver a useful part of the request here. The differences come from realism, small broken controls, save recovery, and how much work the renderer does unnecessarily. The fourth project is a VA alternative for QMK keyboards with a yellow theme and a full set of customization features. The connected keyboard part is central to this task.

### QMK / VIA keyboard configurator

**11:11** · Editing a picture of a keyboard and saving a local profile is only part of the workflow. The app also has to communicate with compatible firmware and read or change the configuration. The protocol checks here use independent simulated firmware. The tests didn't use a physical keyboard that lets us inspect the actual messages and responses, but it doesn't prove compatibility with every board or that changes survive on a real device. Soul has an attractive yellow interface, local editing, undo, validation, and saved profiles.

**11:41** · It even has a real diagnostic path that can request the protocol version and number of layers. But connected keymap reads and writes are missing. The app can't perform the central remapping job. So, Soul gets 30A. Astra gets 30A for the same missing workflow. It has polished local profiles, undo, and export. and it can use the browser's device picker. But selecting a device isn't followed by opening it and sending the remapping protocol. The interface goes further than the hardware integration.

**12:12** · GLM makes a substantive attempt at that integration. Layered key reads and key write packets work in the fixtures and bulk reading is reasonably organized. It gets 4.6, but there are failures in both basic remapping and the additional features. Incomplete key replies and replies for the wrong key position can be accepted. Standard keyboard definitions are rejected. A lighting command uses the wrong payload. And even a plain high macro is encoded incorrectly. Some early responses can also be lost until the request times out. Opus wins at 7.5.

**12:43** · Its implementation covers opening the device, serialized communication, layered keymap reads and writes, standard keyboard definitions, macros, lighting, and backup workflows. The tests independently read back changed keys from the simulated device. The yellow interface has large keys and clear sections, and the features connect to much more of the protocol. It still handles some malformed replies badly. A truncated response can silently become an empty key assignment, and incorrect coordinate echoes are accepted. Haiku comes second at 6.7.

**13:12** · It also implements substantial device communication with working core key map packets, encoders, macros, lighting, and ordinary backup, and restore in the fixtures. The yellow and near black interface is clear with raised key caps and useful editing forms. Its most visible failure comes from ordinary text entry. Type an accented character into the macro field and the whole app can go blank because a validation error escapes into rendering.

**13:39** · The app could simply explain that the character isn't supported. Instead, it crashes the interface. A deliberately malformed backup exposes another issue.

**13:48** · It can write a key before discovering invalid macro data and the cached state then causes a later restore to claim success without correcting that key.

**13:55** · Disconnecting, reconnecting, and restoring recovers the tested case, but the normal feedback is misleading. This task separates the models quite clearly.

**14:04** · Opus and Haiku implement much more of the actual configuration workflow. GLM attempts it, but gets several protocol details wrong. Soul and Astra deliver useful local editors while leaving connected remapping absent. Now, the Pokemon task asks for an HTML recreation of Pokemon Red with Pallet Town and the quests through the rock gym working.

### Pokémon Red through the first gym

**14:21** · There is a whole sequence to support here. You need to get your starter, handle the parcel quest, travel through the routes and forest, fight battles, reach Brock, and keep the progress you've earned. The game's appearance and mechanics also need to resemble the thing being recreated. Astra is the strongest result at 8.5. The normal route reaches and defeats Brock, and the earned badge survives reloading.

**14:38** · Battles, captures, items, and party progression have working paths in the testing. Its green Game Boy style palette and battle sprites give it the best resemblance of this set. The surrounding controls are polished and the game remains readable. I would still call it an adaptation. The maps are rearranged. The gym is simplified and combat uses only two fixed moves per species without the full PP status and evolution system. Soul gets 8.2. The starter and rival sequence, parcel quest, forest trainers, and journey to pewtor are connected.

**15:07** · Normal play can earn the badge, catch another Pokémon, and retain that progress after reloading. The town and characters are readable, and the interface gives you clear objectives and party information, but the maps and battle art take more liberties, and the battle system has similar omissions. Even the rival encounter uses a Pidgey, where the expected counterstarter would change the experience. It's a playable chapter with a lot of the requested flow, but the resemblance only goes so far. GLM gets 7.1. The opening quests connect properly.

**15:38** · The forest and pewtor are reachable and ordinary save and continue retain the tested progress. Battles, items, and training work in the normal route. The independent playthrough reaches Brock and verifies defeat and recovery, but doesn't establish a normal route victory. I'm keeping that distinction in the score. There are also combat mistakes such as moves remaining usable after their PP runs out. And the visuals are much crudder. Characters, trees, and buildings look like simple blocks with a small game area surrounded by a lot of empty space. Haiku gets 6.3.

**16:11** · Its normal playthrough chooses Bulbasaur, completes the parcel quest, catches a Pidgey, and travels to Pewtor.

**16:16** · The testing includes losing to Brock, recovering at the Pokémon Center, walking back, and winning. Saving and reloading keep the earned badge and party. So, the chapter has a working route. The presentation is what immediately stands out as unfinished.

**16:28** · Bulbasaur is a green circle, and Onyx is an ogre circle. The forest is sparse.

**16:33** · The buildings are simple and some essential text is tiny. There are substantial gameplay cuts as well. The rival encounter is absent. The forest has no trainer interactions and manual party switching and usable healing items are missing. A separate battle test also finds a dead end when all moves run out of PP. Haiku reaches the requested destination, but too much of the surrounding game has been reduced. Then there's Opus, which gets 3.0 despite having a substantial playable chapter.

**17:03** · The route reaches Brock, wins the battle, and awards the badge, training, move PP, healing, and defeat recovery work. This is more than a title screen or a disconnected battle demo. But pressing the advertised start key opens and immediately closes the menu that makes the normal save option unreachable along with several field menus. The earned chapter progress disappears on reload because you couldn't save it. The same menu bug appeared with both short and long key presses.

**17:31** · I can't give a high score to a delivered game that prevents you from saving an earned badge, even when a lot of the rest is playable. For this task, Astra and Soul produce the strongest usable chapters.

**17:42** · Opus shows how one broken control path can undermine a much larger amount of working code. The final request is a desktop app for Fitbit Air workout analytics and cardio load with a Rust backend and the feature depth of the Whoop mobile app. This gives the models another opportunity to build something that looks finished before all the data paths are connected. A dashboard can display attractive recovery rings with demo data, but the app also has to ingest useful records and calculate sensible results when information is missing. The checks use synthetic records and documented data formats without a personal Fitbit account.

### Fitbit desktop app (Rust)

**18:13** · Live tracker sync remains unverified. The native desktop interactions also weren't established equally across these apps, so browser behavior and back-end tests only earn the credit they can support.

**18:26** · Soul gets 6.6. It has a substantive Rust analytics core and a polished local fitness dashboard. Workout history, trends, sleep summaries, and a save journal provide useful functionality.

**18:39** · Its ingestion is limited to its own normalized JSON format. It doesn't directly handle the provider export workflow requested by a Fitbit user. So you would need to convert the records yourself. The journal also stops short of relating habits to recovery and the advice lacks much of the adaptive depth the prompt asks for. The large history checks find another practical issue. It renders the entire workout list without pageionation. A thousand rows produce more than 20,000 page elements. It completes the tested workload, but the implementation does more work than it needs to. Astro gets 7.3.

**19:09** · It can import a narrow official format Fitbit activity log, convert units and times, and merge records. Its tested core calculations also handle optional missing inputs appropriately. The light dashboard is orderly, but some small decorative heart rate and HRV charts turn missing days into zero. With a single imported measurement, the chart can draw a rise from a zero baseline that was never measured. The main calculations can be correct while the visual presentation still implies something false. The app also lacks live account sync and the full coaching and sleep planning depth.

**19:41** · Its backup roundtrip misses journal and preference restoration. So exporting a file doesn't yet guarantee that every part of the app comes back when you import it. Opus leads at 7.4. It implements more of the requested analytics, sleep need and debt, consistency, adaptive baselines, training load advice and logic that relates recorded behaviors to recovery.

**19:59** · Its dark interface has clear rings, sleep stages, and missing data states.

**20:03** · The backend can import the supported Google Health data format and its persistence and repeat import behavior have working tests. The browser presentation here was inspected using results from the actual analytics core through a test adapter that doesn't establish working live account onboarding or every native interaction.

**20:22** · There is a serious calculation bug in partial heart rate coverage. A 1-hour workout at an average heart rate of 150 produces a load of about 100. Add a single unrelated resting heart rate sample from 2 in the morning and the daily load drops to zero. The presence of that once sampled disables the fallback that was accounting for the workout. So, Opus has the broadest feature implementation, but one ordinary kind of incomplete data can make a main metric wrong. GLM gets 4.4.

**20:46** · It has a runnable Rust analytics core and valid input calculations can work, but missing heart rate can be replaced with invented values such as 120 or 150. Missing dates can become assumed sedentary history and duplicate workout IDs can double the aggregate load. Those assumptions can turn incomplete records into confident looking numbers. Its native interface also wasn't successfully verified. So I can't make a visual quality claim from a screenshot that doesn't exist. Haiku gets 6.4.

**21:15** · Its Rust backend, SQLite storage, and actual format file imports provide a useful base. In the browser test, uploading an exercise file correctly stores 5 km, 30 minutes, and a heart rate of 150. Reimporting doesn't duplicate the workout, and the record survives reload. The interface is coherent with useful chart and table views. But a workout with missing heart rate information can get a measured looking load of zero.

**21:40** · A first recorded day can also produce a high-risisk label without enough history to support that interpretation, and a short imported workout can receive more credited time than its actual duration. There are smaller workflow bugs, too. Filtering the workout table can leave the summary cards showing totals for all activities, and a startup rendering bug can leave discarded charts, scheduling redraws after you've moved to settings. The measured CPU cost was small, but the unnecessary work is reproducible. So, Opus and Astra lead the fitness task with different weaknesses.

**22:12** · None establishes the complete live Fitbit to Desroe experience and the full Hoop style feature set. The better submissions are useful local analytics projects that still need work on integration, missing data, and recovery from errors. Now, here's the final chart across all six projects. Opus 5.5 finishes first at 57.8% followed by GPT 6 Astra at 56.5%.

### Final chart: overall results

**22:37** · GPT 6.1, Soul gets 55.0%, haiku 5.5 gets 54.2% and GLM 5.3 gets 45.8%. Opus wins four individual tasks, the emulator, the room designer, the keyboard configurator, and the fitness app. Soul wins the container task, while Astro wins Pokémon. Haiku doesn't win a task outright, but it ties Astra on the room designer and comes second on the keyboard app. Across the whole set, it finishes only 0.8 percentage points behind Soul. That is close enough that I'd look at the actual project I wanted to build before choosing between them from this chart.

**23:06** · The task breakdown also explains why a single overall percentage can hide a lot. Opus leads most categories, but its save menu failure is severe. Soul and Astro produce strong playable games while both leave connected keyboard remapping unimplemented. Haiku produces a useful room editor, but doesn't get anywhere close to the complete emulator request, and the overall winner is still below 60%. The prompts include some very large pieces of software and the scores reflect the gap between those requests and what arrived in one session. A working slice of a project can be useful without fulfilling the rest of the specification.

**23:36** · Now, let's look at the tokens and cost because that changes how I'd interpret Haiku's result. These are API equivalent estimates calculated from the recorded usage and the list prices captured for this benchmark. They aren't the amount charged to a clawed code or codec subscription. They covered generation with the later evaluation and reporting work excluded. Some of the runs don't have complete final usage records. Adding the available numbers for all six tasks would understate their totals.

### Tokens and API cost

**24:04** · For a comparison with complete usage across all five models, I'm using the same three projects, the room designer, the keyboard configurator, and the Fitbit app. On those three tasks, Soul uses about 9.26 million tokens with an estimated cost between $342 and 337s.

**24:20** · Haiku uses about 41.18 million tokens with an independently calculated cost between $3.79 and $35.66.

**24:28** · The ranges cover missing per request context and cash details. These totals include instructions, files, tool results, and conversation history read across many requests with reasoning counted once. Much of the repeated input can be served from a cheaper cache. So, Haiku records more than four times Souls tokens on the same three projects. But the token count alone doesn't rank their expense. The input, output, and cash prices all contribute to the bill. For the same three projects, Haiku's estimated API cost is about 85% lower than Opus'. Its average score on that subset is 71.3% compared with Opus at 78.0%.

**25:00** · So, Opus scores higher on those tasks, while Haiku gets reasonably close at a much lower API equivalent cost.

**25:07** · Soul and Haiku's price ranges overlap.

**25:09** · So, these records don't establish which is cheaper. Across all six Hiku projects, the recorded total is about 78.19 million tokens. Roughly 76.65 million are input, including reused cached context, and 1.54 million are output. Claude Code reports an API equivalent estimate of about $7.40, while independent repricing puts it between $7.40. Seek thinks. Personally, Opus gives me the strongest starting point across the widest range of these tasks.

### Verdict: which model for what

**25:37** · The room designer keyboard implementation and broader fitness logic are the reasons I choose it here. I would still test the save path and the calculations before trusting those apps because both produced concrete failures.

**25:51** · For the browser game, I choose Astra from this set. It combines a completed saved first gym route with the best resemblance to the requested game. Soul is close and its container image tooling also has the strongest result in that category. Haiku is the one I'd be most interested in trying first on another bounded app project where cost matters.

**26:11** · Its room designer and keyboard protocol work give me reasons to do that. I wouldn't choose it for the emulator based on this run and I wouldn't assume its attractive dashboards make the underlying calculations reliable. GLM's room designer and connected game quests show that it can produce substantial applications. In this set, the unfinished emulator, archive escapes, and invented fitness data pull it behind the others. Those are specific problems I'd want another run to overcome before changing that verdict. What I take from these projects is a practical testing habit. Follow the feature all the way through. Change the key and inspect the device message.

**26:43** · Beat the gym and reload the game. Import a workout with a missing measurement and check what the chart displays. Those actions explain the scores far better than the number of files the model created. Overall, it's pretty cool. Anyway, let me know your thoughts in the comments. If you like this video, consider donating through the super thanks option or becoming a member by clicking the join button.

**27:05** · Also, give this video a thumbs up and subscribe to my channel. I'll see you in the next one. Until then, bye.
