---
title: "Shopify Just Released The Greatest AI Coding Workflow Ever"
author: "AI LABS"
site: "YouTube"
published: 2026-09-24T08:41:09-07:00
source: "https://www.youtube.com/watch?v=bBMp5tLxShQ"
domain: "youtube.com"
language: "en"
description: "This Claude Code workflow is how Shopify rebuilt a 300-screen app with AI coding agents. We rebuilt it ourselves: a Claude Code setup where an orchestrator r..."
word_count: 3309
---

![](https://www.youtube.com/watch?v=bBMp5tLxShQ)

## Transcript

### Intro

**0:00** · Shopify just rebuilt their main mobile app and in the process released an amazing AI coding workflow. To make you understand why this is a big deal, you need to understand that this is a huge task. They rebuilt a huge app with 300 screens and they did it all using AI coding agents. But they didn't just give the whole job to an agent in one go.

**0:19** · They used a structured workflow all the way to the end. So the app stayed up to their standard, but they just talked about the method and they never showed us how it was done. So, we retraced it and rebuilt the same workflow for ourselves. The steps in Shopify's workflow give your agent a process it can't talk its way out of. But even with their workflow in place, the agent still tried to mess up. And a change that we made fixes that problem entirely. If you're new here, welcome. We're a software company and this is our channel, AI Labs.

**0:45** · And in this video, we're going to show you Shopify's workflow and how we set it up so that you can run the same AI coding loop on your own app as well. Now, Shopify calls the tool behind their loop Helix. They built it because they were rewriting their app in a different way than it was built originally. To summarize what they did, they took one screen from the old app and asked the agent to convert it to the new version. Helix then read that screen and split the work into smaller tasks called checkpoints. A person on their team then reviewed these checkpoints first.

### Core Mechanism

**1:15** · Then, after they were approved, each checkpoint had to pass four strict checks before Helix started working on the next one. These checks made sure that the app was up to their standards. Helix uses sub aents to carry out most of the work. The main reason they used sub aents for everything is the fresh context window. If an agent is working on a very long task and keeps everything in the same context window, this leads to problems. When everything is collected in the same context window, all of that becomes too much for the agent and it starts forgetting the important things in between. So the quality of its work starts to go down.

**1:49** · Sub agents prevent that by keeping a separate context window for each task.

**1:53** · The whole loop is also built around two things. The first is the checkpoints which are the small pieces of work we talked about. The second is the four checks which Shopify calls gates. A gate is a check the work has to pass. And any work that fails the check is stopped from going to the next task until that gate is cleared. Now even though they use this workflow for changing an app from one form to another, it can be used way beyond that. This process lets you build huge features by making sure that what you build is up to your app's standards and also looks good.

**2:20** · Now, Helix is actually still internal and we don't have access to it, but they released their whole setup. So, we created our own workflow and tested it on a demo HR system project. We had the whole app built and we were just adding features to it. We are going to tell you what each step does in detail so that you can replicate the same workflow when you are working on your app. Since running every step of this loop ourselves would need a lot of our input, we created a skill and called it the orchestrator. The orchestrator is the only skill you need to prompt and it handles all the other parts itself.

**2:50** · Your input is just needed twice and the rest of the time the orchestrator handles everything on its own. But before we build with it, we're going to go to the core parts of the loop. Starting with checkpoints. Just like how we mentioned before, checkpoints are actually small parts of a big feature. Shopify worked this way that until one checkpoint is completed properly, the next checkpoint cannot start. They divided their work in checkpoints in order of increasing complexity. What this means is that the smallest tasks should be the ones built first and then the next more complex task and so on.

### Checkpoints

**3:20** · That's because each checkpoint is built on top of the one before it. So if an early decision is wrong, you catch it while it's still small and cheap to fix. So to split our feature into smaller parts, we created an agent called Checkpoint Planner. The checkpoint planner takes the large feature we give to the orchestrator and splits it into checkpoints. It writes these checkpoints into a JSON file format. This is because its structure is easy for the agent to understand and it can easily find what it needs in the file. But there's one thing you need to do and that's review these checkpoints.

**3:52** · Even though JSON is structured, it's actually hard for you as a human to read that file and understand it directly.

**3:58** · That's because the file becomes a huge block of structured text that is too much for a person to follow. So for that reason we also built a simple webpage viewer where we can easily see what the agent planned. Now what happens is that we tell the orchestrator about the feature we want to add to the app. The orchestrator then starts two sub aents.

**4:16** · One sub agent checks the current state of the app and make sure it's running.

**4:20** · The other is the checkpoint planner agent that we created. If the checkpoint planner has any questions, it will ask them from you. Then it writes down all checkpoints and the orchestrator opens the viewer for you so that you can review them. The viewer shows you each step in order, which steps are in progress, and what each task would need to be called done. We also instructed the checkpoint planner to keep the language simple so that you can understand the wording easily. At this point, the orchestrator also gives another sub aent the job of planning the tests.

**4:47** · That sub agent writes down in detail how each checkpoint will be tested so that everything is documented from the get-go. This review is one of the steps you need to do thoroughly so that you know the plan isn't missing any features and all the time agents spent implementing isn't going to be wasted.

**5:02** · Once you've reviewed the plan, you either ask for changes or approve it.

**5:06** · Once you approve the plan, the orchestrator starts building with checkpoint one. But before we see how checkpoint one gets built, you need to understand what a checkpoint has to pass before it counts as done. And before we discuss those, it would be great if you subscribe to the channel and hit the hype button. This small gesture of support goes a long way for us. Now, the thing that lets a checkpoint pass is actually a review point. And Shopify calls these review points gates. You usually give these review in forms of prompts.

### Gates

**5:33** · But a gate is different from a rule in your instructions that you give in your prompts or files because a rule is only advice. The agent forgets the rule when it's working and you have to remind it again. A gate is different because unless a gate is passed, it won't let the agent move to the next task. To make sure that our setup didn't let the agent work on the next task until a gate is passed, we created a hook. The hook we created runs every time the agent tries to stop. When it does try to stop, the hook throws an exit code too.

**6:00** · This exit code two is not used to show an error has occurred during work, but it is just used to prompt the agent to do the thing so that it can continue working. Our hook tells the agent that the work isn't done, so it has to keep going until the gates are passed. This is the same concept we borrowed from the Ralph loop. There are four gates that Shopify used in their workflow. The first is the behavior gate which checks whether the feature works or not. Then the UI gate checks if the screen looks like the design we wanted.

**6:29** · After that, the code review gate checks that the code underneath is good. And the last gate is your final review. So we'll start by setting up the behavior gate. But before we set it up, let's have a word by our sponsor, Hedra. Your agent already works right beside you in the editor, but the moment your build needs real media, it stalls and you have to leave for a separate tool. Hedra closes that gap. We added the Hedra MCP server to Claude code in about a minute and suddenly the agent could make the media itself without leaving the session. It's the same Hedra models underneath just reached from inside our agent.

### Sponsor

**6:59** · So we asked for what the build needed a short clip for the landing page and instead of a silent spinner, Hedra streamed its real progress as it moved from generating to finalizing so we could watch it genuinely render the clip in real time, not just hand over a file.

**7:13** · A moment later, the finished video landed right there in our session. It's one more thing your agent can suddenly do without opening another tab. If your agents ever stalled out needing real media, Hedra closes that gap. Try it for free at hedra.com and use our code for 50% off your first month. The link and code are in the description. Now, the behavior gate involves all the testing that can be done without using the browser and agent at all. Instead of checking the app by clicking through it, the agent writes small checks in the form of code that use the feature the same way a person would.

### Gate 1: Behavior

**7:43** · These small checks are called tests, and we already saw them planned in the viewer earlier.

**7:49** · The reason we plan the tests first, just like we've always mentioned in our previous videos, is that we want the agent to have a clear standard to check its work against so it can verify that the feature is working as intended.

**8:00** · These tests make sure to cover as many cases as possible so that we can verify the workflow underneath the app is working right with different inputs. For making that easier, we modified our previous TDD planner skill so that it fits this workflow. This skill basically plans and writes the tests for the feature that is given to it. This skill makes sure that everything that can be verified without a browser gets tested at this point. That's because a lot of things don't need a browser to be checked, such as whether a manager is allowed to approve someone's leave.

**8:28** · For that, the agent can use a piece of code to verify that part directly, and it doesn't need to press buttons to see if it's approved or not. The sub agent that planned the tests earlier was following this skill. This step comes after our last step where we created the checkpoints using the agent. Once you approve the checkpoints that were showed to you, the orchestrator starts working on the checkpoint one. What the orchestrator does first is start a few sub agents to write the tests which are needed for the first gate. They will all be failing at first because the feature that the tests are written for isn't written yet.

**8:59** · Once the tests are done, the orchestrator starts another sub agent that actually writes the code for this checkpoint. Then the orchestrator uses one more sub aent to run the tests and make sure every one of them passes.

**9:11** · And once every test passes, gate one is marked as passed for checkpoint one.

**9:15** · Then the orchestrator moves on to the next round of review, which is the UI gate. The UI review gate is one of the most important gates because it directly affects the user experience. Since Shopify was converting one app into another form, keeping the design exact same became really important. For this gate, Shopify used Gemini models as a perfectionist design reviewer. That's because when they were testing, they found that these models have very good spatial awareness, which means the models can tell where things are on a screen and how big they are.

### Gate 2: UI

**9:44** · So, Gemini can catch small differences in spacing and size between two screens. But when you're working on your own projects or when you're building for clients, you normally don't have anything to review against. So in those cases, we create HTML prototypes first. Creating prototypes lets us quickly demo the products visuals and experiment with directions without worrying about affecting the main project. The prototype is also what we show our clients to get their approval. To create these prototypes, we use another skill called prototype.

**10:13** · The prototype skill builds the whole prototype as one file that we can open and click through so we can see if what we want is actually being created. This skill follows the project's own guidance like the design file. It is a structured file listing all the design details for building the design. We had already created one for our app by using the design.md planner skill that we've provided in our AI labs design system in the community. With that file in place, the prototypes get created before UI gets built.

**10:41** · To compare the prototype with the app we built, we use a separate skill. This skill makes sure the visuals match and it also makes sure both of them behave the same way when you interact with them. Before comparing anything, the skill also checks that the prototype and the app are in the same state. For example, a button that's not been submitted and has been submitted are in two different states. So, the skill makes sure the prototype and the app are both showing the form in the same state. But we didn't use Gemini for this.

**11:08** · Instead, the skill hands the comparison to Claude in a new session by launching it from the session itself. Not every checkpoint needs this gate because gate one already tests most things without a browser.

**11:21** · That's why only some of our checkpoints that were shown on the viewer earlier were missing this gate. So, when the orchestrator gets to a checkpoint that needs this gate, it starts two separate clawed sub aents side by side. One reviews how the screen looks and the other reviews how it behaves. Neither of them sees the project's instructions. So they judge the app only against the prototype and the design file. Each one returns a review of the differences and the orchestrator combines the two. That combined review then decides whether this gate passes or fails.

**11:49** · Now the feature works and it looks like the prototype, but the code underneath can still be a mess. So that's where the next gate comes in. The third gate is actually the adversarial review gate.

### Gate 3: Code Review

**12:01** · The adversarial review means it's set up to argue against the code. Shopify has heavy review processes because they need to make sure what they ship is up to their standards. Their method uses two adversarial agents that check the code against a standard Shopify wrote down.

**12:15** · Every problem they find has to be fixed and only when both of the agents approve is this gate passed. So we also did this with two agents but rather than having both of the agents criticize the code, we went with an adversarial loop where one agent is criticizing and the other is fixing. The first agent is the adversarial agent which basically assumes that the code is wrong and tries to find issues with it. The second one is the fixer agent which actually fixes the issues the adversarial agent finds.

**12:41** · To coordinate the workflow, we have a skill called adversarial loop that manages the communication between the two agents. When the behavior gate and the UI gate are passed, the orchestrator starts the adversarial agent and waits for its review. If the adversarial agent reports back with no issues, the orchestrator just marks the gate as done. Otherwise, the orchestrator starts the fixer agent to make the fixes and then the adversarial agent checks the code again. The two agents go back and forth like this and the gate is only done once the adversarial agent approves the code.

### Gate 4: Human Review

**13:11** · The last step is the human in the loop and it's a really important step because even if agents have standards and things to review against, they won't be able to review from the perspective of a human. You need to make sure that the feature works properly when a person actually uses it. So when all of the checkpoints are done, you need to test the feature to make sure it works the way you wanted. You also check whether anything in it would work or look better so that you can ask for small changes to the feature.

**13:35** · When you ask for changes, the orchestrator turns them into new checkpoints that go through all the same gates and it writes your feedback down in a learnings file that every agent reads before it starts work. Now the whole workflow that we just went through is run by a single skill called the orchestrator that we talked about earlier. When you just prompt this skill, it runs it through the whole workflow from checkpoints to giving you the end feature to review.

### The Orchestrator

**14:00** · The orchestrator will only stop for you twice. It stops once after it plans the checkpoints so you can approve them and again when it's done so that you can check the app and complete the cycle. So the agent can get things wrong along the way, but the gates never let unfinished work through. Shopify puts it this way that an attempt is allowed to be wrong.

**14:17** · It is not allowed to ship until it isn't. So the whole workflow is something you can create on your own by prompting Claude telling the task you want this skill to perform. But if you want the skills that we have created in this workflow, you can get them in AIABS Pro which is our community. So if you found value in what we do and want to support the channel, this is the best way to do it. The links in the description. That brings us to the end of this video. If you'd like to support the channel and help us keep making videos like this, you can do so by using the super thanks button below. As always, thank you for watching and I'll see you in the next one.
