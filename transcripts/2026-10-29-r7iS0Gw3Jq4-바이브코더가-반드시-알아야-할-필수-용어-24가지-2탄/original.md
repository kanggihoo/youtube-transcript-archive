---
title: "바이브코더가 반드시 알아야 할 필수 용어 24가지 2탄"
author: "코드깎는노인"
site: "YouTube"
published: 2026-10-29T01:28:45-07:00
source: "https://www.youtube.com/watch?v=r7iS0Gw3Jq4"
domain: "youtube.com"
language: "en"
description: "원하는 움직임은 분명히 있는데, AI에게 설명하려니 '뿅', '통통' 같은 말밖에 떠오르지 않은 적 있으신가요?지난 UI 용어 편에 이어, 바이브 코딩에서 자주 쓰는 모션 용어 24가지를 실제로 움직이는 화면으로 정리했습니다.용어마다 AI에게 그대로 쓸 수 있는 요청 문장도 함께 ..."
word_count: 2420
---

![](https://www.youtube.com/watch?v=r7iS0Gw3Jq4)

## Transcript

### 지난 UI 용어 편에 이어서

**0:00** · In our last video, I introduced the names of the UI components you see on the screen. You left so many kind comments, which made me really happy, so I’ve prepared a follow-up with 24 names for motion effects. When you look at well-made websites, you notice these kinds of movements. The whole screen shifts, cards expand to fill the screen , and confetti bursts out. You might want to add them to your own site, but it’s daunting when you actually try to ask an AI.

### 원하는 효과, 말로 하기 애매하다

**0:30** · You clearly have an effect in mind, but it’s really ambiguous to explain it in words. So, you end up writing something like this.

**0:38** · Make the button go "pop" and look bouncy. Of course, the AI will create something. But will the "pop" you imagined be the same as the "pop" the AI imagined? "Pop,""glide,""bouncy,"" smooth." The words we use to describe movement actually have accurate, technical names. If you know the names, your requests change like this. When the card enters the screen, have it spring into view over 0.4 seconds with a slight bounce.

### 이름을 알면 부탁이 달라진다

**1:05** · It captures what, how, how fast, and when it should move, all in one sentence. Now, let's look at everything from the basics of motion to text and image movements, and even reactions to the mouse and screen.

**1:21** · I’ve prepared a cheat sheet with all 24 effects on one page at the end of this video, so please stay tuned until the end. Instead of trying to memorize them, just try to connect them, like " Oh, so\*that\*was the 'pop' I meant."

### 1부 움직임의 기본 · Fade

**1:33** · First, let's look at the basic terminology that serves as the foundation for all motion. The effect where a transparent element gradually darkens into view is called a "fade."

**1:42** · We call it "fade-in" when it appears and "fade-out" when it disappears. It is the most basic movement and fits in anywhere without looking out of place.

**1:51** · You can ask an AI like this. When the modal opens, make the background fade in over 0.2 seconds, and fade out when it closes. The movement where something slides in from off-screen is called a " slide." The key to a slide is the direction. Make sure to specify whether it enters from the top, bottom, or the sides. In reality, we often combine it with a fade so that it slides in slightly from the bottom while appearing. Have the notification banner slide down from the top of the screen and slide back up after 3 seconds.

### Slide

**2:20** · The effect where something starts small and grows in size with a "pop." This movement that changes size is called " scale." If it grows slightly larger and then returns to its original size, it feels like it's popping out. That’s why it’s also called a "pop effect."

### Scale

**2:36** · When I add an item to the cart, make the number badge pop out using a scale-pop effect. Even though they travel the same distance in the same amount of time, the feel is different.

### Easing

**2:46** · The top one moves at a constant speed, while the bottom one starts fast and slows down at the end. The way the speed changes during this movement is called "easing." Ease-out for slowing at the end, ease-in for starting slow; combining them into "ease-in-out" is the standard. Using ease-in-out is usually most natural for elements entering or exiting the screen. Use ease-out when opening a menu. Set it to move with ease-in for 0.3 seconds when closing.

**3:13** · A spring animation is a movement that slightly overshoots the target and bounces back into place. Its spring-like elasticity makes it feel lively and tactile. You usually adjust the amount of oscillation using stiffness and damping. When the card is pressed, use a spring animation to slightly enlarge it with a subtle, single bounce. The movement of a ball dropping and bouncing on the floor until it stops. That is "bounce."

### Spring

### Bounce

**3:40** · While a spring overshoots and returns, a bounce feels like hitting the ground and springing back up. Too much bouncing can look playful, so it’s best reserved for cute details. Make the payment complete check icon drop from above, bounce twice, and stop.

### Duration · Delay

**3:59** · Make it fast. Make it slow. But how fast should it be? The time taken for a movement is the duration, and the waiting time before movement starts is the delay. 0.1 to 0.2 seconds is standard for small reactions like buttons, 0.3 to 0.5 seconds for larger screen elements. The "stagger" from the last video is just applying these delays in sequence. Set the title to appear immediately and the description to follow with a 0.2-second delay, both with a 0.4-second duration.

**4:28** · A loop animation is a movement that repeats continuously without stopping. An effect where an icon gently hovers is also called "floating." It’s great for grabbing attention, but it gets distracting if too many things move at once. Use it only in one or two essential places. Add a floating loop to the hero illustration so it bobs up and down very slowly. Make one full cycle take about 4 seconds. That covers the basics of all motion. Now, let's look at effects for text, numbers, lines, and icons.

### Loop

### 2부 글자와 그림 · Typewriter

**4:58** · The typewriter effect makes letters appear one by one like a typewriter. Adding a blinking cursor at the end makes it feel like someone is typing right now. Apply the typewriter effect to the hero title and add a blinking cursor at the end. An effect where random characters shuffle rapidly before snapping into place to form a word. This is "text scramble." It fits well when creating a technical vibe, like a hacker screen in a movie.

### Text Scramble

**5:25** · When the section title enters the screen, have it scramble for 1 second before revealing the text. The title splits into letters or words and slides into view. This is "split text" animation.

### Split Text

**5:38** · It is also called "text reveal" because hidden text is being exposed. It’s basically applying a stagger to each individual character. Show the main title as a split-text reveal, breaking it down by word and having them slide up from the bottom one by one. This is the count-up effect, where numbers start from zero and quickly tick up to a stop. It’s much more eye-catching than just displaying a number when you have figures you want to show off, like subscriber counts or total downloads.

### Count-up

**6:03** · When the statistics section becomes visible, have the numbers count up from zero to the target value over two seconds. Make it slow down toward the end. This is the line-drawing effect, where invisible lines are drawn as if by a pen. It is mainly used for lines in SVG graphics, such as logos, icons, and charts, which don't lose quality when scaled. When the graph appears, add a line-drawing animation that traces the lines from left to right over 1.5 seconds. This is the morphing effect, where one shape smoothly transforms into another.

### Line Drawing

### Morphing

**6:31** · Like when the three-line icon, often called a " hamburger menu," changes into an X.

**6:37** · Since the before and after states are connected, it naturally signals that the status has changed. When the hamburger menu icon is clicked, have the three lines morph into an X as the menu opens. This is called a marquee effect, where logos or text scroll endlessly to the side like a banner.

### Marquee

**6:54** · It’s great for displaying many client logos or short reviews in a limited space. If you set it to pause on hover, it makes reading much easier. Show the client logos in an endless marquee, and set it to pause when the mouse hovers over it. A movement that flies along a pre-defined curved path instead of a straight line. This is a motion path.

### Motion Path

**7:14** · When a product flies into the shopping cart in an arc, you can visually track where it went. When the "Add" button is clicked, have the product image fly along a curved path to the shopping cart icon. Now for the final part, Part 3. These are transitions that change the entire screen, along with movements that react to scrolling and the mouse.

### 3부 화면과 마우스 · Page Transition

**7:32** · Instead of the screen abruptly changing when a link is clicked, it gets covered and the new page appears. This is a page transition. It's using the fades or slides we saw earlier, but applied to the whole page. When it sweeps across the screen, it’s called a wipe . Add a page transition where the screen fades out for 0.3 seconds and the new page slides up slightly from the bottom when navigating. When you click a card in a list, it expands to become the detail screen. Because both screens share the same element, it’s called a shared element transition.

### Shared Element Transition

**8:05** · Since you don't lose track of where the item you clicked went, the two screens feel seamlessly connected. On the web, you can create this using a browser feature called View Transitions. When a product card is clicked, create a shared element transition where the card image expands directly into the detail page. You scroll down, but the screen stays fixed in place while the content inside changes sequentially.

### Pin · Scrollytelling

**8:27** · Fixing the screen in place like this is called pinning. Pages that unfold a story as you scroll using pins are called "scrollytelling," a combination of scroll and storytelling. Create a scrollytelling feature section where it’s pinned to the screen and cycles through three features one by one as you scroll. The mouse wheel scrolls down, but the screen slides across sideways. This is a horizontal scroll section. It's an application of the pinning we saw earlier. You fix the section in place and push the inner content sideways as you scroll.

### Horizontal Scroll

**8:55** · Create a project showcase section that is pinned, where cards slide horizontally as you scroll vertically. And a vertical list for mobile. When the cursor gets close, the button sticks to it as if pulled by a magnet. This is a magnetic button. It’s fun because it reacts before you click, but if it follows too much, it’s actually harder to click. It’s best to use it subtly. Add a magnetic effect to the main CTA button. Have it pulled by a maximum of 10 pixels when the cursor gets close.

### Magnetic Button

**9:23** · A small circle follows the mouse around instead of the default arrow. This is called a custom cursor or cursor follow. The circle can grow or contain text when hovering over links. However, since there is no cursor on touch screens, it’s standard to turn it off on mobile. For desktop only, make a small circular cursor follow the mouse with a slight delay and grow when over a link. When you move the mouse over a card, the card tilts in that direction. This is a 3D tilt effect.

### Custom Cursor

### 3D Tilt

**9:52** · If the reflection moves along with it, you get a 3D effect as if looking at a real card from different angles. Add a 3D tilt effect to the pricing cards that tilts up to 10 degrees based on mouse position, and have the reflection move too. Confetti pops the moment a payment is completed.

### Confetti

**10:10** · This is the confetti effect. It’s most effective when saved for celebratory moments like sign-ups or first payments. If it happens every time, it quickly loses its impact.

**10:19** · After the first payment is complete, have confetti pop from the top of the screen for 2 seconds. Skip it for users who have reduced motion settings enabled. Now, shall we make a real request using the terms we learned today? First, an informal request. Make the landing page feel more alive. Have the title appear coolly, numbers scroll , and buttons pop. Even if you say it like this, the AI will add some movement on its own. However, the AI will just guess what moves, how, how fast, and when.

### 실전: 이름으로 AI에게 부탁하기

**10:49** · This time, let's try again using the terms from today. For the title, use a word-by-word split text reveal. For statistics, use a 2- second count-up. For client logos, use a marquee. For the CTA button, use a subtle magnetic effect. For feature cards, use a spring-in animation. For the first payment, use the confetti effect. Set all entrance animations to ease-out at 0.4 seconds. Writing it this way allows both me and the AI to understand exactly what movement each sentence translates to on screen.

**11:17** · Looking at what I've written, it’s full of "Pangyo dialect" again. The important thing isn't using complex jargon, but applying the correct name, speed, and conditions. Summarized as a formula, it’s effect name, speed, and start condition. For a spring effect, you add a condition to start when the card enters the screen at a speed that ripples gently for 0.4 seconds. And more movement doesn't necessarily mean it's better. A single main movement is enough for one screen.

**11:43** · Also, be sure to add a request to follow reduce motion settings for users who have enabled them on their devices. There's no need to memorize all 24 effects we looked at today. I've collected them in a moving cheat sheet at the end of the video for you to look up when needed. Next time you ask an AI for a movement and wonder , "What do I call this pop effect?", you can just look it up. If this video was helpful, please subscribe, like, and turn on notifications. Go was an old man. Thank you.
