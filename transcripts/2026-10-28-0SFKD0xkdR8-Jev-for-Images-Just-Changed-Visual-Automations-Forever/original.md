---
title: "\"Jev for Images\" Just Changed Visual Automations Forever"
author: "Jay E | RoboNuggets"
site: "YouTube"
published: 2026-10-28T18:36:46-07:00
source: "https://www.youtube.com/watch?v=0SFKD0xkdR8"
domain: "youtube.com"
language: "en"
description: "Get the Jev for Images PDF guide for free ➡ https://www.skool.com/robonuggets-free/classroom/750914f0?md=53a372f97988470f801a17763a1430d4 search for n87Learn..."
word_count: 2905
---

![](https://www.youtube.com/watch?v=0SFKD0xkdR8)

## Transcript

### Intro

**0:00** · So on this demo interface is a sample photo of a receipt. And just to show you how fast J for images is, I'll send the same four questions to it and to Claude.

**0:07** · And if I send that prompt, you can see it is blazingly fast. And it is also magnitude cheaper versus another AI model. And that was not sped up. That is all real time. And this matters even more once you have a whole pile of images that you need to analyze. So here we have 100 more receipt photos. And if we send this prompt in this demo environment, you can see Jev is sorting all of that in really really quick speeds and it's only costing me about 1 cent in total. On Sonic for comparison, which you can see here, those same 100 would be much slower to categorize and is also much more expensive.

**0:38** · This is now all possible because of Jeff for images with the newest update to type safe's breakthrough decision model. So today I'll show you what Jev for images is, how to set it up in a few minutes in eight use cases from easy to advanced along with all of the prompts to get you started so that by the end of this you'll know exactly where this new model fits in your business. And if you're new, my name is Jay. I spent over a decade working with brands you probably know, have been in AI since my masters in data science and now I'm leading our AI business and one of the largest AI communities globally.

**1:08** · So first let's do a quick refresher. Jev is basically a tiny AI model from a company called Typesafe and it works a bit differently to Claude or Chat GPT because it doesn't really write you paragraphs the same way an LLM would. What it does is it only makes decisions. And because it only makes decisions, it can be up to 200 times faster and up to 400 times cheaper than the big frontier models. And to recap, Jev can answer three types of questions. It can answer a yes or no question.

### What Jev is

**1:36** · It can pick from a list that you give it. if you want to categorize things for example or it can also give you a score based on a scale. Now up until recently everything that you gave Jev had to be text but with the latest version of Jev it can now look at images as well. So a photo a screenshot a scanned receipt or even a page of a document if it can be converted to an image Jev can now look at it and that alone opens up a whole lot of new business use cases but apart from its basic functionality there's this other new feature in this launch that they are calling box.

### What's new in Jev

**2:06** · Now box is essentially just telling you where something is in a picture. So let's say as part of your business you have multiple images of parcels or deliveries and you actually want to ask AI which of these parcels have damage in them and apart from that maybe you also want to ask where exactly the damage is in. Well, now Jev is a great AI model for this too because not only can it identify if there is a damage in this one picture, but with the box feature, which I'll go through more in a bit, it can also mark where exactly that damage is.

**2:35** · So that if a person needs to review this later on, they'll be able to manually review it much faster. And broadly speaking, the reason that this matters is that before Jev or Jev for images, if you wanted AI to look at thousands of images, you either need to pay a big model to study every single one, which is incredibly expensive and can also take a lot of time. Now, you can just describe what you want checked for a batch of images in plain English, and Jev can do it fast and cheap. Now, before we go through the use cases, let's get you set up first so that you can start using Jev and Jeff for images.

### Set it up in one prompt

**3:06** · And it's really simple because with a lot of things you can just open up cloud codeex or whatever AI agent that you use and you can use a prompt like this to get you started and your agent will guide you through the whole setup. In short, what that does is it just connects your agent to type safe which is the company behind Jev. It takes you to their website to get your API key which would basically let Claude access your type account and connect you to their Jev model.

**3:27** · By the way, all of these use cases and some prompts related to them to get you started I just put into this PDF guide which I will publish down below for free. so that you can just grab it, send that to Claude, and that also includes the prompt to get you set up with Jev so that you can start using this new model. Now, a few limits worth knowing. Right now, it accepts PNG and JPEG files for images and up to 16 megabytes per image. There's obviously no video and no audio, but if you've got a video, you can actually pull still frames out of that first. And later, I'll show you a use case exactly for that.

### Free PDF guide: every use case and prompt

### Limits and cost

**3:58** · As for the cost, input tokens is about 4 cents per million tokens. And similar to Jev for text output tokens which is basically what you get in return from Jev is free which is part of the reason why it is so cheap. Now let's go through some use cases so that by the end of it you will understand how this works and where you can use too for your business and we'll also go through these from easy to advanced starting with the

### Use Case 1

**4:21** · ones that you can try today and number one is the one we already showed sorting receipt and just to dive deeper into that let's say in your business paper trail is still really important and if you got a thousand receipts for each one of these what you can do is to have Jev answer three small questions is this actually a receipt which category is it and is it over your dollar limit and even if it is hundreds of images of receipts, Jeff can cover all of that really quick without costing you a lot as well.

**4:45** · So, what this means is that any business now, yours or even your clients, if you need a paper trail and you need to get your receipts sorted and your big spends flagged, you can now do that with Jev for images. A second use case example is sorting a messy photo folder. If your business deals with photography, say you have a thousand photos from an event and you need to sort them, Jev can actually look at each of these photos and drop it into the category that you describe.

### Use Case 2

**5:09** · So if you want to sort these based on which are product shots, which are theme photos, and even which ones are blurry ones that you need to discard, Jeb for images can do all of that. And as you can see here, it does all of it in just a few seconds.

**5:22** · Now, someone has already shared a build for this actually that sorted about 900 images in 40 seconds. So if you or a client is working with a lot of photography, you can now set up an automation that sorts every shoot for you just by pointing Jev at that folder.

### How it works

**5:35** · Now, let's actually look at what's happening under the hood whenever you use Jev for images because this also helps you understand and set it up better. When you send an image to Jev together with a few small questions, you can see that all three answers come back together in just a fraction of a second.

**5:50** · Now, what really happens for each of those questions, even if they are yes or no questions, is that Jev actually returns to you a confidence score, which is just a measure of how confident it is in its answer. So let's say if it's a categorization question, it gives you a confidence score for each of those categories. And this is quite important whenever you set up your automations because then you can set up a threshold.

**6:11** · Let's say if Jev is 80% confident on this answer, then you can already route it to your automated processes. But if for some reason, let's say the image that you fed is quite blurry and Jev isn't really sure and it gave a confidence score of let's say 20%, then those trickier images you may want to route to an actual person in order to still review them. Now this is extremely important when we talk about the J for image feature that is called box. And this brings us to use case number three which is using the box feature to spot check any damaged parcels.

### Use Case 3

**6:38** · Let's say you run an e-commerce store and if in your outfit customers send you photos of damaged parcels all the time when they ask for a refund. Now you can feed those photos to Jev and in almost real time it can tell you if there is an actual damage or not. And with box it also can mark exactly where the damage is. So this way when it goes to a person to review the refund for example then your automation has already drawn where the damage is and they can decide in mere seconds.

**7:05** · Now relatedly this can be used when it comes to proof of delivery photos because if you run deliveries your drivers could take a photo of every parcel at the door and you of course want to know whether your product is being handled well or not. So, if the delivery photo is blurry, then that is obviously a red flag. And if the parcel isn't even in the shot, that is also a red flag. And usually, you only find these out when a customer complains. But with J for images, the check can happen the second the driver takes the photo.

### Use Case 4

**7:31** · So, theoretically, you can integrate with Jev for images so that the applications that your drivers use can detect if there's a parcel in the shot, yes or no, how sharp the photo is. And if that fails, then the app can just ask the driver to take it again before they leave. And this can happen in real time because Jev for images is now enabling it to be so. Next use case is a classic one for Jev which is routing support tickets. But now we can also extend that to screenshots because if you run any kind of software your support inbox is probably full of screenshots especially if users are reporting a bug.

### Use Case 5

**8:01** · Now Jev could already sort tickets by their text of course but now it can look at their screenshots as well. So for example it can directly tell which screen this is in your app. Is there even an error message showing? Is it the checkout or payment page? And once you identify that, then you can have the ticket route straight to the right person or department. Of course, with the urgent ones up depending on the contents of the customer's email as well. So, with those use cases, I hope you had a good idea of how to use Jeb for images.

**8:28** · Now, these are some more advanced ones and they can be pretty niche, but I'm sure if you listen to them, you'll have some nugget of an idea around how to apply them to your business as well. And by the way, if you want to learn how to build and sell AI systems that businesses actually pay for, then that's pretty much all we do over at the Robbernuggets community, where not only do you get access to the Claude Living Masterass, which we update every week and takes you from zero to mastery with the latest on AI, but you also get access to our agents as a service course, which walks you through how to actually get paid for all these AI skills that you are learning.

**8:58** · You also get to be part of a genuinely great community of AI builders. In fact, you can see just some of the recent wins our members are getting from the program right here. So if you want to start earning from AI then check that just in the pin comment below. Now back to the video and the first of the advanced use cases is around content creation in creating shorts where you ensure that your face is in frame. Now Jev cannot watch video but of course there is a workaround because you can always have Claude pull still frames out of your video every second or so.

### Use Case 6

**9:25** · And Claude can do this using a free open source tool like FFmpeg and it can just send those to Jev. So, for example, if your business or your client runs a vlog, you can just feed the frames to Claude along with the timestamps of that particular still. And using the box feature, you can just let Jeff find the face on the screen, so that Claude immediately knows where the face is in every frame, which also means that it now knows exactly where to crop it when it turns the video into vertical.

**9:53** · So, if you're into content creation and you need to clip videos from more dynamic long- form footages, then you can use Jev for images for this purpose without dragging a crop box around or letting an LLM spend a lot of tokens in order to crop the video for you. The next one is real-time alerts for physical products.

### Use Case 7

**10:11** · Let's say you run vending machines or really any sort of display where you need to keep things in stock. What you can theoretically do is to put a small camera that takes a photo of this vending machine every hour. And with these photos, Jev can check if there is an empty slot in which product is missing. So this way you can set up an automation to get an alert with the empty slots. And you can string this together with a larger automation that keeps these vending machines in stock.

**10:35** · Now, this one is obviously quite niche, but it gets you in the frame of mind of how you can use this to give your systems smarter vision quickly and cheaply for use cases just like this.

### Use Case 8

**10:45** · And lastly, which is a bit more general, is sorting a big pile of pages. Because remember, pages of documents can still be pictures. So Jev can sort a big pile of pages without having to read every word. In fact, someone already gave Jemages a full construction plan set.

**11:00** · And as you can see here, it labeled every single sheet in 2.9 seconds for about half a cent. And you can use this anywhere that there's a pile of pages to sort, by the way. So, if you're an accountant or a bookkeeper with client documents or let's say you're a mortgage broker with loan application packs, then all of that data that is contained in those documents, you can classify them using Jev. Now, this obviously will require you to just compare it to just parsing everything through an LLM because LLMs work with text.

**11:24** · But if your documents have a lot of visuals in them, let's say for architecture or the examples that I gave earlier, then it's highly likely that Jev for images will be applicable to that use case as well.

**11:35** · So, there you go. That is Jev for images. I think this move makes sense for type safe and it's awesome that apart from large language models, we are getting new developments in other types of models such as Jev in order for us to come up with newer and better business use cases for AI. As usual, thanks for watching till the end. I usually do sessions like these where I teach you how to use AI better for your business.

**11:56** · So, if that's your thing, then feel free to subscribe down below. I'll see you all next time. Cheers.
