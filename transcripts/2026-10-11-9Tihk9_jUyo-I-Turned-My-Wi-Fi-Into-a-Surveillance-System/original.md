---
title: "I Turned My Wi-Fi Into a Surveillance System"
author: "Better Stack"
site: "YouTube"
published: 2026-10-11T09:56:50-07:00
source: "https://www.youtube.com/watch?v=9Tihk9_jUyo"
domain: "youtube.com"
language: "en"
description: "We tested RuView, the viral open-source project that claims it can detect people and their movements using nothing but WiFi signals. After digging into its c..."
word_count: 2007
---

![](https://www.youtube.com/watch?v=9Tihk9_jUyo)

## Transcript

### WiFi that knows what I'm doing

**0:00** · Okay, folks. This is wild. Check this out. The app on the right side of the screen is guessing what I'm doing in my room, whether I'm sitting, standing, walking around, or even doing squats.

**0:11** · And it's doing all of this guessing using nothing but the Wi-Fi signal in my room. The video on the left is from my own camera, and it's only there so you can see for yourself that my laptop's webcam is obscured, and the app itself can't see me at all. And when I tested this live in a separate session after initial model training, it guessed what my movements were about 80% of the time.

**0:34** · Now, how is that possible? Well, this is all based on an open- source project called Ruview, which has been going viral on GitHub because it claims it can detect people and their movements using nothing but Wi-Fi signals. So, in this video, we're going to take a look at how RU View works. And then I'm going to show you how I flashed its firmware onto three cheap $10 boards and built my own Wi-Fi sensing setup at home.

**0:57** · And in the end, we also need to talk about privacy because once you see what this technology can do, it's honestly a little bit scary, but nonetheless, it's going to be a lot of fun. So, let's dive into it.

### How WiFi sensing works

**1:14** · So, first let's talk a little bit about how Wi-Fi sensing works. So, when your router sends out a signal, it doesn't just travel in a straight line to your laptop or your phone. It actually bounces around the room off the walls, off the furniture, and also off of you.

**1:30** · And every time your router sends a packet of data, it sends it over dozens of tiny frequency bands at the same time. The device that receives that packet then measures how each of those frequency bands arrived, how much weaker the signal got, and how much it shifted along the way. That measurement is called channel state information or CSI for short.

**1:54** · \[screaming\] And your router actually calculates this for every single packet because it needs to decode the data properly and then it just throws it away. But if you hold on to those numbers, you'll notice that they change every time you move because your body is changing the way signal bounces around the room. Now, the tricky part is figuring out what those numbers actually mean because to us, they just look like a bunch of random values that keep changing all the time. And the way researchers solved this problem was actually pretty clever.

### The camera as a teacher

**2:22** · Back in 2022, a team at Carnegie Melon University put a regular camera in a room and ran a pose detection model on the video so that for every moment they knew exactly what position the person's body was in. At the same time, they recorded the Wi-Fi signals and then they trained a second AI model to look only at the Wi-Fi data and try to come up with the same answer that the camera gave.

**2:48** · So basically the camera acted like a teacher and once the Wi-Fi model had learned enough from it, they could take the camera away and the model would keep working using Wi-Fi alone. And Ru is built on top of that same idea. Its main pose model claims to be a little over 82% accurate based on a public data set called MMFI where researchers in Singapore recorded 40 people doing different movements in four different rooms with cameras and Wi-Fi recording at the same time.

### RuView's claims and the catch

**3:17** · But when I downloaded this model and ran it on my MacBook, I started noticing a few problems. First of all, the way the model was tested was a bit unfair because the test examples were taken from the same recordings that the model was trained on. And when the author tested the model on a room it had never seen before, the accuracy dropped all the way down to 11%.

**3:37** · And on top of that, if you've seen the viral ru demo where a skeleton follows a person around the room in real time, it turns out to be that the skeleton is actually coming from the webcam and the Wi-Fi part of that demo is simulated. So, I wanted to find out for myself, what can you actually do with this at home with real Wi-Fi network and some real cheap hardware. So, here's what I did.

**4:00** · I bought three ESP32S3 boards which cost about $10 each and I flashed them with Ru's open- source firmware. I did make two small changes to it though. First, I made each board light up in its own color so it's easier to tell them apart. And second, I made the boards listen to each other's signals as well and not only to the router. That way, instead of having just three sensing lines across the room, I get to have nine of them, which gives the model a lot more information to work with.

### My three-board ESP32 setup

**4:30** · And then I place these three boards in different areas around my living room so that the sensing lines cross the room from different angles where the detection happens. So for example, when I walk past my dining table, you can see that the line between board two and board three lights up. And that's because my body is getting in the way of the signal between those two boards. And this screen over here shows the raw signal that the boards are picking up. You can see that when I move around, everything starts rippling. And as soon as I stand still, the signal calms right back down.

**5:01** · Okay, so now that the boards were picking up my movements, the next step was to actually teach the model to recognize what I'm doing. And for this, I used the exact same trick that the researchers used when the camera acts as a teacher. So my webcam is watching me, and the pose detection model running on my Mac figures out what I'm doing at each moment, whether I'm sitting, standing, squatting, and so on.

### Training the model with my webcam

**5:26** · At the same time, the boards are recording the Wi-Fi signals. And then I train a small model to look only at the Wi-Fi data and predict what the camera said. And to collect enough training data, I had to do three rounds of every single movement, which in total came out to be about 9 minutes of jumping, squatting, and moving around, which was honestly a nice little exercise session at home. And in case you're wondering, the pose detection on the camera side is done with Google's media pipe library, which runs right inside the browser.

**5:54** · So the webcam video never actually leaves the browser, and the only thing that gets passed along is the label like squatting or sitting. And by the way, folks, if you want to try this project on your own, I've put all the code on GitHub. So if you want to try building this yourself and training your own pose detection model, you can find the link in the description below. All right. So once the model was trained, I did a completely separate live test session that the model had never seen before.

### Test results

**6:24** · And across all eight movements, it guessed correctly 79.5% of the time. And when the room was empty, it got it right every single time. Jumping was 97%, sitting was 93%, spinning was 92%, standing was 84%, squats were 79%, and walking was 70%.

**6:46** · The one movement it really struggled with was waving, which it only got right 13% of the time. And most of the time it thought I was jumping instead. My guess is that your arms are just pretty small compared to the rest of the body, so waving them around doesn't change the Wi-Fi signal enough for the model to pick it up. And now, let's go back to the clip from the beginning of the video. In this part, I covered up my webcam, so the app has no way of seeing me. And all it has to work with is the Wi-Fi signal. The video on the left is again from my own separate camera.

### WiFi only, camera covered

**7:17** · And it's only there so you can see what I was actually doing and check whether the app got it right. And as you can see, it was terrifyingly accurate. It could pick up most of the movements with similar accuracy as the one in the test. So now, let's talk about why I find this a bit unsettling. Out of everything this setup can do, the easiest thing for it to figure out is whether there's anyone in the room at all. And in my room, it got that right 96% of the time.

### The privacy problem

**7:45** · And keep in mind that Wi-Fi signals go through walls. And in my case, the boards were connected to my own Wi-Fi network, but your router is sending out signals all the time. So, in principle, someone could put a cheap board like this on the other side of the wall and pick up the same kind of signal, and that could tell them whether you leave your house and when you're asleep, which is exactly the kind of information a burglar would love to have.

**8:12** · And on top of that, last year a new official Wi-Fi standard was published called 802.11bf, which was built specifically for this kind of sensing. So, it's quite possible that at some point in the future, regular home routers will just be able to do this out of the box. But to be fair, the same technology could also be very useful since it's basically a motion sensor that doesn't need a camera. You could use it as a home alarm system while you're away. Or you could make sure that an elderly parent who lives alone is up and moving around during the day.

### Where this could actually be useful

**8:44** · And Ru actually already has a fall detection feature built in.

### Limitations and final thoughts

**8:49** · Now, I do want to point out that my test was pretty limited. It was one person in one room and I trained the whole thing in one afternoon. So, if I moved one of the boards to a different spot or if someone else walked into the room, I would most likely have to retrain the model. But even so, I think it's pretty impressive that $30 worth of hardware can tell the difference between me sitting down and me doing squats about 80% of the time just from Wi-Fi signals alone. So, Wi-Fi sensing is very real, folks.

**9:18** · And although it's still in its early days, it's definitely something worth keeping an eye on. So, there you have it, folks. That is how Wi-Fi sensing basically works. And I would love to hear your thoughts on this topic. Do you know any other cool projects that are doing something similar? Have you tried playing around with this technology yourself? I would love to hear your thoughts in the comment section down below. And folks, if you like these types of technical breakdowns, please let me know by smashing that like button underneath the video. And also, don't forget to subscribe to our channel.

**9:48** · This has been Andress from Better Stack, and I will see you in the next videos. \[music\] \[music\]
