---
title: "클로드 코드에 택시 미터기 달았습니다 | Claude Mods 직접 만드는 법"
author: "개발동생"
site: "YouTube"
published: 2026-10-04T06:21:55-07:00
source: "https://www.youtube.com/watch?v=dElhMRoArgQ"
domain: "youtube.com"
language: "en"
description: "클로드 코드에 택시 미터기를 달았습니다. 🚕Claude Mods로 사용량 미터기부터 영수증 창까지 만들면서, 나만의 모드를 직접 만드는 과정을 보여드립니다.완성된 택시 팩을 설치해보고, 원하는 기능과 화면을 프롬프트로 설명해서 내 Mods로 바꿔볼 건데요. 화면 어디에 그릴 수 ..."
word_count: 2455
---

![](https://www.youtube.com/watch?v=dElhMRoArgQ)

## Transcript

**0:00** · I’ve attached a taxi meter to Claude Code; as it keeps running, the fare goes up based on actual token usage.

**0:12** · What I just showed you was a demo run.

**0:17** · The meter I just showed you was built using the new "Modes" feature released for Claude Code. By installing and using this custom meter mode, I can visualize exactly how much the current session has cost in API fees in a fun way.

**0:38** · So, in this video, I’d like to explain what this "Modes" feature for Claude Code is, what you can do with it , and how you can go about building your own modes. According to the description, a "Mode" is a plugin that changes the look and feel of Claude Code. You can think of it as a feature that allows you to customize the layout or UI of the Claude Code you use to suit your personal preferences.

**1:06** · Internally, it’s composed of JavaScript, TypeScript, and event handlers. You can think of the "Modes" feature as one where Claude Code triggers a handler when a specific event occurs, allowing the handler to observe, modify, or handle that event directly.

**1:22** · Claude Code’s existing hooks also allow you to execute certain code during its event lifecycle, but the difference is that those existing hooks execute shell commands defined in your configuration file from outside of Claude Code. However, the key difference with this newly released " Modes" feature is that it allows you to execute functions or shell scripts you’ve created directly inside the Claude Code environment.

**1:52** · This means that with "Modes," we can now perform tasks like re-rendering the Claude Code interface, which wasn’t possible with existing tools like hooks, skills, or MCP. For instance, you can draw custom interfaces for your own use. You can redraw the Claude Code interface itself . You can also intervene in tool calls or requests. These are the kinds of things we can now do with the new Modes feature. The image shown here illustrates the layout areas where you can apply these modes in Claude Code.

**2:22** · First, you can see that areas with solid lines allow modes to add new UI elements, and the areas marked with dotted lines indicate that a mode can redraw existing UI components. You can assume that modes cannot modify the grayed-out prompt area, but for all other sections, they can either add new elements or redraw the existing ones.

**2:42** · So, what kind of tasks can you perform?

**2:46** · For example, you can continuously monitor Claude Code's actions, modify specific content before passing it back , or even intercept and block certain original behaviors of Claude Code directly. Since rendering the screen is also considered one of these events, you can understand that adding or removing visual elements is possible in the exact same way.

**3:05** · Previously, I showed you how the mode works when running Claude Code in a terminal environment, but please note that you can also customize the layout through modes in the Claude desktop app, not just in the terminal. I’ve created a custom mode that transforms Claude Code into a taxi, utilizing the new mode feature recently released in Claude Code. I have uploaded everything to GitHub, so you can easily download it and install it as a plugin.

**3:34** · You can proceed with the installation by using the installation commands provided below. So, I’m going to install the mode by using the 'claude plugin marketplace add' command. With the marketplace added, the second step is to install this taxi meter mode. I will proceed with the installation by running the 'claude plugin install taxi-meter-dev-brothers' command. Once you run Claude like this, the Claude taxi meter will be installed as you can see here. Let me go ahead and enter a prompt here.

**4:06** · If I ask it to summarize the new 'mode' feature in Claude Code, you can see Claude Code start running like this. The currently selected model is Opus 3.5, and I’ve installed a meter that calculates the cost based on Opus 3.5's pricing, showing the actual API cost converted from the tokens used by Claude Code so far.

**4:33** · Once the response for the current session is complete, it transitions from the " driving" phase to the "payment" phase, where the final fare is displayed. " Empty" means before the first response, and it changes to "Driving" when Claude is generating a response. As for the surcharge level, if you select Opus, it applies the "Deluxe" rate, and if you select Haiku, it applies the "Black" rate. For Sonnet or Haiku, the surcharge level is set to "Standard.""

**5:07** · Complex" is displayed when you use over 50%of the context window, and as mentioned, the "Payment" phase is triggered once the response is finished , confirming the fare or when the limit is reached. In addition, I've created three more modes: Black Box, Feed Cam, and Navigation; let’s run Claude Code like this.

**5:32** · One of the features I added to my plugin mode is this navigation function, which you can use when enabling tools in Claude Code; for example, if I write a prompt to analyze the repo structure, summarize the readme pricing rules, calculate the 3km fare, and then add a new task to the todo list once step 3 is done, it will guide me to start by analyzing the repo structure.

**6:00** · Starting route guidance. There are four waypoints.

**6:03** · It even provides voice feedback saying there are four waypoints. I passed the first waypoint, and after passing the second one, I will add a new waypoint here.

**6:11** · Searching for a waypoint. There are five waypoints.

**6:15** · Since I asked to add one more, you can see that a fifth waypoint has been added.

**6:19** · Arrived at the destination. Ending guidance.

**6:22** · So, I added a concept where Claude Code completes its operation upon arrival at the destination, and the next feature I’ll show you is a speed enforcement camera I’ve also built. For example, I set it up so this mode triggers right before executing a dangerous Bash command; if you run a command like a forced push or one that deletes an entire folder, the hook triggers at the hook level, and the mode can intercept and handle it.

**6:50** · So, let's try entering a command to force a push to the remote repository like this. A vehicle driving in the wrong direction has been detected.

**7:02** · Yes.

**7:02** · In this way, you can also route permission requests through the mode. Next, there is the black box feature. Regarding the black box feature, you can see "REC" under the taximeter, indicating that it is recording, and if you type "/blackbox," you can see the black box appear on the right side of Claude Code.

**7:26** · In that black box, we’ve added a feature that lets you check Claude Code’s tool invocation history and any incidents detected at the hook level, as seen earlier, right in the right-hand panel of Claude Code.

**7:43** · So, you can use this feature when you want to change the layout or interface of a specific area of Claude Code, or when you want to control how Claude Code behaves by triggering this mode during specific event life cycles. As I mentioned earlier, this mode applies not only to the Claude Code terminal environment but also allows you to customize the Claude Code desktop app exactly as you like.

**8:13** · If I try opening the receipt from the mode I created, it opens, and you can also check the black box in the desktop app; essentially, this mode feature allows you to customize both the Claude Code terminal and desktop environments to your preference. Now, I will explain how you can create this mode, and the process is actually very simple. The mode feature is already built into Claude Code.

**8:44** · So, as long as you are using Claude Code version 2.1.28 or higher, you can create and utilize these modes.

**8:53** · So, I've launched Claude Code, and I think you only need to include four main points in your prompt. You'll need to structure your prompt to define where to place the mode, what to display there, where to fetch the data from, how to show it once the task is complete, and finally, what to do if it fails. So, I went ahead and wrote my prompt like this. Create a mode that shows the cost of the current request in KRW next to the spinner while Claude is working.

**9:23** · For the cost, use the session usage cost in USD and set the exchange rate to 1,400 KRW. And I provided an example of how I wanted it to look. So, when you input it like this, Claude Code can build the mode right away. And as the mode is nearly finished, it will ask if you want to enable hot reloading; don't just press enter here, but select the second option to enable it for this session.

**9:49** · Then, you can consider it set up so that Claude automatically reloads whenever it modifies a file. The loading spinner area is this part here.

**9:57** · The area above the prompt window is the loading spinner zone, and since I requested it to be displayed next to this spinner earlier, we will check to see if it appears here. Since it says the task is complete, let me try making another request. As you can see, while Claude Code's loading spinner is active , you can confirm that the cost is appearing right next to it. It even implemented the cost increasing while it works.

**10:21** · So, the mode I asked to add this time doesn't replace the entire existing screen; rather, it performs a task that slightly modifies the existing Claude Code UI, and in this case, it resulted in redrawing the spinner. Now, let's try creating a second mode, and this time, I requested that the mode also be drawn in the band above the prompt. The band above the prompt refers to this section here.

**10:46** · You can think of this space between the spinner and the prompt as the band area , and I'm going to request that it display the current request cost, 5- hour limit, usage rate, and reset time in a single line—like "120 KRW, 5 hours, 3%, 7:30 reset"—while ensuring it doesn't obscure what other modes have drawn. So, when you're creating modes, you can look at this schematic table and just tell Claude Code where you want to add each mode.

**11:14** · Now that the band area is all set up, I’m going to ask it to make this band area look a bit more like a taxi meter. I requested it to style this band line like a real taxi meter, with a rounded border box, a black background, large LED-style fare digits using quadrant block characters, and a bottom row that shows "Empty,""Driving," or "Pay" based on the background color, with the "Driving " light on if Claude is working.

**11:39** · As you can see, the taxi meter in the band area now has graphics that look much more like an actual meter. However, since these pixel graphics are terminal-specific, we need to ensure compatibility if we want to display them in the Claude Code desktop app as well. That’s why in my last prompt, I asked it to display as a single line, just like before, if it’s not in a terminal or if the window is too narrow . So, it’s good to keep in mind that these pixel graphics are only supported in a terminal environment.

**12:11** · Finally, I asked it to add a "/receipt" command, and I’ll request that when this command is entered, it shows a list and a total in the pane area, just like a taxi receipt. The "pane area" refers to this region on the right side. It's the same area where I displayed the receipt earlier. In the Claude Desktop app, you can think of this area on the right as the pane area.

**12:38** · Now that the receipt feature is done, let's enter the "/ receipt" command, and as you can see, the receipt is displayed perfectly in the pane area on the right. Adding modes to Claude Code is really not difficult at all. You just need to request what kind of task you want, how to add the mode, and which area to place it in; I'll wrap up this video by summarizing where these can be positioned.

**13:08** · First, there is the "band area," which is the space right above the window where we actually type our prompts. Second, there is the "pane area"; if you're in a wide full-screen mode, a sidebar appears next to the chat. Otherwise, a window will appear right above the prompt, and I'll also explain in this table whether or not it's supported in Claude Desktop as shown here. And third is the spinner area, which you can think of as the line that moves while Claude is working .

**13:36** · Also, looking inside the conversation area, you can see that the line where tools are executed and the area where result windows appear can also be registered as mods. And then there are the conversation messages. And the window where Claude asks questions, the execution line, and the progress. You can also manage areas like the hints below the prompt or the guide area below the logo by adding mods to them as well.

**13:58** · And it's important to note that these mods you create will only run within the specific Claude Code session you've opened; to use them across any Claude Code session, you'll need to move the folder out and launch it using the--plugin-dir flag, or upload it to a repository and install it via the marketplace to share and use the mods you've created. I recommend taking a look at the taxi-meter repo that I shared earlier.

**14:30** · I encourage you all to try creating your own mods as well. If you make good use of this newly added mod feature, I believe it’s a function that can make the Claude Code you use much more convenient and efficient. So, I will wrap up this video here and look forward to seeing you in the next video with even more helpful information.
