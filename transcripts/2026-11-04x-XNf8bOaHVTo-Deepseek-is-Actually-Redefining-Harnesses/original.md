---
title: "Deepseek is Actually Redefining Harnesses!"
author: "AICodeKing"
site: "YouTube"
source: "https://www.youtube.com/watch?v=XNf8bOaHVTo"
domain: "youtube.com"
language: "en"
description: "Join this channel to get access to perks:https://www.youtube.com/channel/@aicodeking/joinCline Desktop: https://cline.gg/desktop-aickClinePass: https://cline..."
word_count: 1950
---

![](https://www.youtube.com/watch?v=XNf8bOaHVTo)

Join this channel to get access to perks:https://www.youtube.com/channel/@aicodeking/joinCline Desktop: https://cline.gg/desktop-aickClinePass: https://cline...

## Transcript

**0:02** · Hi, welcome to another video. So, Deep Seek put out a video a while back showing off creator mode in Deep Seek Harness where the app basically builds its own plugins while you talk to it. They showed a 3D landmark gallery, a transformer visualizer, a pixel art skin for the whole app, and a few more. And a lot of people, including me, wanted to know what prompts they actually used.

**0:23** · Well, they have now published all of them. It's one simple page with seven prompts in English and Chinese with a copy button on each one. And I think this page is more useful than it looks because if you read these prompts closely, they are basically a guide to how you should talk to creator mode. So, in this video, I want to go through all seven, show you what each one teaches you, and then show you how I would run this without burning through API credits with client pass, client desktop, and a bit of Panda code. So, let's get right into it. First, a quick refresher. Deep Seek Harness is Deep Seek's open-source agent app. The repo is MIT licensed.

**0:52** · It has crossed 269,000 stars on GitHub, and the tagline is everything is a plugin.

**0:59** · The latest build is version from October 30th, and it has different modes.

**1:02** · Standard mode is the normal coding agent. Creator mode adds two read-only tools that let the agent look inside the running app before it writes anything.

**1:12** · It can list what is loaded and check the exact methods and types that are available.

**1:16** · Then, it packages the plugin as a bundle and installs it through the plugin manager. And the plugin belongs to your profile, so it survives a restart. The instructions on the page are really simple.

**1:25** · You copy a prompt, paste it into Deep Seek Harness, and select the creator mode option.

**1:31** · But, there is one honest line here that I really like. They say that some of these plugins were refined over several rounds of conversation. So, a single prompt may not get you exactly what you saw in the video. So, keep that in mind.

**1:43** · These are starting points, not magic spells. Now, let's go through them. The first one is a 3D gallery of famous landmarks. It asks for a plugin with a left sidebar entry that renders 3D models of the Eiffel Tower, the Great Wall of China, the Forbidden City, and one more famous building of the model's choice. And the first thing you notice is that it says where the plug-in lives, left sidebar entry. Six of these seven prompts tell the agent where the plug-in goes. Three of them use the left sidebar, two are opened from the conversation, and one lives in the right sidebar. That is lesson number one. Always say where it lives.

**2:13** · And the one more of your choice part is a nice touch because it gives the model a little room to be creative instead of making it guess everything.

**2:21** · The second one is a transformer 3D visualization. It asks for an interactive 3D demonstration game that helps you understand the computation inside a transformer.

**2:31** · And then there's this line, keep the panel title and toolbar clear of the native macOS window buttons, so they don't overlap.

**2:37** · That is clearly a line somebody added after the first attempt got it wrong.

**2:41** · And that's lesson number two. When something looks broken, don't start over. Just name the exact problem in your next message and put it in the prompt next time. The third one is my favorite. It's called the DSH pixelated interface.

**2:53** · It is a plug-in that changes the look of the entire app with five different styles to choose from, and a pixelated look as one of them.

**3:00** · So, this is not a panel inside the app.

**3:03** · This is the app changing itself. That is the whole everything is a plug-in idea in one prompt.

**3:09** · And lesson number three is right there as well. Give it a count. Five styles, not some styles.

**3:15** · Numbers are much easier to check than adjectives.

**3:18** · The fourth one is a poster design workbench.

**3:22** · This one opens from the conversation, and it tells the model to use the shader background pattern and the English font from the Deep Sea Carnage website. You can customize the title, the text, and the shader colors.

**3:35** · And then it says, keep the default page minimal with no unnecessary subheadings or information, and set the default title to everything is a plug-in. So, lesson number four, tell it what you don't want and give it the default values. Models love adding filler, and this prompt just shuts that down.

**3:52** · The fifth one is a video editing workbench, a dark interface with the familiar interactions of established video editors, multiple video uploads, editing, and exporting. A large preview on top and a timeline below. And you can also import and edit videos with natural language requests in the conversation.

**4:09** · So, this one describes the layout like a wireframe, top and bottom, and it connects the plugin back to the chat.

**4:16** · That's lesson number five. A plugin is better when the agent can drive it, too.

**4:20** · The sixth one is a paper reader from the right sidebar.

**4:24** · You upload papers, and it has to keep the original layout, fonts, images, and everything else without any loss.

**4:31** · When you select text, it shows a floating menu with three options: highlight, add a note, or ask about it in the conversation. And then the default question prompt has to match the interface language. That last line is the kind of detail that you only think of when you have actually used the thing. Lesson number six, spell out the interaction step-by-step. And the seventh one is conversation statistics.

**4:52** · It's built on your actual conversation data, and it shows total token usage, conversation count, and estimated costs, and a budget based on that usage, plus a token timeline, usage and cost per conversation, and CPU activity and utilization.

**5:08** · And that's lesson number seven, say real data, or you will get a beautiful dashboard full of fake numbers.

**5:14** · And funnily enough, this is the one prompt that doesn't say where the plugin lives. So, the model has to guess. So, if I put all of that together, a good creator mode prompt has five parts: where it lives, what it does, the numbers, and the defaults, what to leave out, and how it connects back to the conversation. That's pretty much it. But now, here's the catch. That line about several rounds of conversation is the part that costs you money. Creator mode reads the runtime, writes the plugin, installs it, and then you go back and forth on the details.

**5:42** · And that is a lot of tokens for every single plugin.

**5:45** · If you are paying per token, that adds up really fast.

**5:49** · And this is where Klein Pass is pretty cool.

**5:52** · Klein Pass is the subscription from the Klein team, and it's $9.99 per month for a lineup of open models with two to five times more usage than paying for the same models directly.

**6:02** · And it gives you an API key, so it isn't locked to client. Deep Seek Harness lets you add a custom model API. You go to settings, then models, and add a model provider.

**6:12** · Pick custom model API. Put in the Client Pass base URL. Choose the OpenAI chat completions protocol. And paste your key. Then you can hit fetch available models to pull in the model list, or just add the model IDs by hand. Client Pass speaks the OpenAI format, so it should slot right in. Then you can run creator mode on the Client Pass models, like Kimmy K 31 Pro for the bigger plugins, and the flash models for the small fixes. And you don't have to worry about every extra round of conversation.

**6:38** · Then there's Client Desktop. Not everything you want is a Deep Seek Harness plugin. Sometimes you just want to ask the agent to build a normal web app, or do a review on a repo every morning. Client Desktop is the client agent as a standalone app. It's still in beta, and it runs on the same Client Pass subscription. So, the same $9.99 too covers both apps.

**6:58** · And it has schedule, where you give it a name, a frequency, a prompt, a model, and a workspace, and it runs that job for you. It also has import. So, you can bring in a conversation from Claude code or Codex and keep going on a Client Pass model. So, Deep Seek Harness is where the app builds itself, and Client Desktop is where the regular work gets done. And if you want to go one step further, Panda code can actually run Deep Seek Harness as one of its harnesses. You install the DSH package from NPM, and Panda code launches it over ACP, lists its models, and lets you set the reasoning effort. And Client is in there as well.

**7:30** · So, you can have an architect that holds the whole task, and then send one worker to Deep Seek Harness and another to Client on Client Pass, each on its own model. So, if you wanted all seven of these plugin ideas built as standalone apps, you could hand them out in parallel and review them in one place. Which is pretty awesome, for sure. Now, I do have to mention the limitations. Deep Seek Harness is still in developer preview, and it ships release candidates very often. So, things can change between builds. Deep Seek themselves say that a single prompt may not reproduce what is in their video. So, expect iterate.

**8:01** · A plugin that changes the whole app, like the pixel style one, can also break the look of things. So, know where to turn it off.

**8:10** · The plugin manager is right there for that. And client pass is not unlimited either. So, if you run Kimmy K31 Pro on creator mode all day, you're going to hit the limits. Also, client desktop is still in beta. So, expect some rough edges there, too. So, to summarize, Deep Seek published the seven prompts behind their creator mode video, and they are a really good lesson in how to talk to a plugin building agent. Say where it lives, give it numbers and defaults.

**8:36** · Say what to leave out and connect it back to the chat, then run it on client pass. So, the back and forth doesn't cost you a fortune. Use client desktop for the regular work and panda code if you want to run all of it in parallel.

**8:49** · Overall, it's pretty cool.

**8:52** · Anyway, let me know your thoughts in the comments. If you like this video, consider donating through the super thanks option or becoming a member by clicking the join button. Also, give this video a thumbs up and subscribe to my channel. I'll see you in the next one. Until then, bye.
