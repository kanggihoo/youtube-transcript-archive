---
title: "바이브코더가 반드시 알아야 할 필수 용어 24가지"
author: "코드깎는노인"
site: "YouTube"
source: "https://www.youtube.com/watch?v=mlhKEy-2bgI"
domain: "youtube.com"
language: "en"
description: "AI로 웹사이트를 만들 때, 원하는 화면은 머릿속에 있는데 뭐라고 불러야 할지 몰라 설명이 길어진 적 있으신가요?바이브 코딩에서 자주 쓰는 UI·레이아웃·효과 이름 24가지를 실제로 움직이는 화면으로 정리했습니다.용어마다 AI에게 그대로 쓸 수 있는 요청 문장도 함께 담았습니다.0..."
word_count: 2325
---

![](https://www.youtube.com/watch?v=mlhKEy-2bgI)

AI로 웹사이트를 만들 때, 원하는 화면은 머릿속에 있는데 뭐라고 불러야 할지 몰라 설명이 길어진 적 있으신가요?바이브 코딩에서 자주 쓰는 UI·레이아웃·효과 이름 24가지를 실제로 움직이는 화면으로 정리했습니다.용어마다 AI에게 그대로 쓸 수 있는 요청 문장도 함께 담았습니다.0...

## Transcript

### 이거, 뭐라고 설명하지?

**0:00** · There are moments like this when building websites with AI. You clearly have the desired layout in your mind.

**0:06** · But you don't know how to explain what you want. Something that slides out from the right. Elements that appear one by one as you scroll. Even that layout with uneven card sizes. Actually , most of these things have names. Of course, you can describe them to AI in casual terms. "I want a menu-like thing to slide out from the right when the button is clicked." Even just saying that, the AI makes something quite decent.

### 이름을 알면 무엇이 달라질까

**0:31** · But if you make the same request by saying "Make the right drawer slide open when the settings button is pressed," what, where, and how to open is conveyed at once.

**0:43** · Knowing these names makes it easier to find the design you want and much smoother to make edits. Especially, it cuts down on the back-and-forth with AI trying to find the look you want. So today, I will show you 24 UI terms useful for vibe coding with actual working screens. The order is simple.

**1:03** · I'll show the result first, explain the correct name and when to use it, and then introduce prompts you can use with AI. Also, at the end of the video, I've prepared a cheat sheet screen where you can see all the terms at a glance, so please watch until the end. Instead of trying to memorize the terms, just think, "Ah, so this is what I was looking for," and connect them. First, let's look at the layout that forms the basic skeleton of a page. The main introductory area you see as soon as you enter a website is called the hero section.

### 1부 레이아웃 · Hero Section

**1:32** · It’s a space to inform visitors what the product or service is at a glance. The CTA button here refers to the key button you want visitors to click, like "Start for Free." You can request it from the AI like this. " Create a hero section on the landing screen with a short, punchy title, description, CTA button, and product image." Now, let's shrink the screen width. The layout changes to fit the width, right? This is a responsive layout. It prevents the issue where it looks good on PC but breaks on mobile.

### Responsive Layout

**2:03** · When requesting, it’s good to specify the number of columns. "Make it a responsive layout where cards are rearranged into 3 columns for desktop, 2 for tablet, and 1 for mobile." The method of dividing scattered information into independent boxes like this is called a card layout. It is commonly used to show repeated information like product lists, blog posts, or service feature descriptions.

### Card Layout

**2:27** · "Organize the service features in a card layout and add an icon, title, and short description to each card."

**2:33** · That’s how you would say it. But not all cards need to be the same size.

### Bento Grid

**2:38** · This layout, where important items are large and supporting items are small, is called a Bento Grid. It’s a name derived from 'bento,' the Japanese word for a lunch box. Create a Bento grid section with core features in large cards and the rest in smaller cards. On mobile, align them into a single column . Next is the management screen. There is a menu on the left and a workspace on the right. This structure, frequently seen in dashboards or admin pages, is called a sidebar layout. Even when you click the menu, only the content on the right changes.

### Sidebar Layout

**3:09** · Keeping the menu on the side is a way to make better use of the space. Create a dashboard layout with a fixed sidebar navigation on the left and main content on the right. Even when you scroll down the page, the header stays attached to the top. This format is called a sticky header. "Sticky" means it clings or sticks to the top. You can access menus or key buttons immediately, even after scrolling down. Make the top navigation a sticky header so it remains visible while scrolling. A layout that splits images and text into left and right.

### Sticky Header

### Split Layout

**3:42** · This is a split layout. It is very often used for product introductions or feature descriptions. Usually, it is designed to stack vertically when the screen becomes narrow. On desktop, arrange the image and description in a 50/50 split layout, and stack them vertically on mobile. These were the terms for building the main framework of a page. Now, let's look at the names of the actual UI parts that appear when you click buttons or view data. These parts are commonly called components.

### 2부 UI 컴포넌트 · Tabs

**4:11** · Tabs are used to display different types of content in one space by switching between them. You can change the content within this area without reloading the page. Configure the overview, features, and pricing information as tab components and highlight the selected tab. This UI, where you only expand the items you are curious about, is called an accordion.

### Accordion

**4:31** · Like the musical instrument, it folds and unfolds. It is often seen on pages with long content, such as FAQs. While tabs switch views horizontally, accordions expand content vertically.

**4:42** · Create an FAQ using an accordion. Make it so that clicking a question expands the answer, and clicking it again collapses it. A method of receiving important confirmation or input by displaying a separate window over the current screen. It is called a modal or a dialog. It is widely used for save or delete confirmation windows. It features a dimmed background, forcing you to handle this window first. This translucent layer that dims the background is called an overlay or backdrop. When the delete button is clicked, show a confirmation modal and make it closable via a cancel button or the ESC key.

### Modal / Dialog

**5:13** · A drawer is a panel that slides out from the side of the screen like a drawer. This is the very scene we saw at the beginning. It is useful for secondary tasks like settings, filters, or details without leaving the current page. If a modal demands focus in the middle of the screen, a drawer opens to the side and is less disruptive to your workflow. When the settings button is pressed, open a drawer from the right, and make it close by clicking outside or pressing ESC. A dropdown is a UI component where a list of options unfolds below a single button.

### Drawer

### Dropdown

**5:43** · You can easily find them in menus for selecting options or changing sorting methods. When the sort button is pressed, show a dropdown menu to select by latest, popularity, or name. A tooltip is a small info window that briefly explains the meaning of an icon or button. It provides supplementary information only to those who need it without cluttering the screen. Place a help icon next to the setting item, and make the tooltip appear when hovering or focusing with the keyboard.

### Tooltip

**6:09** · When the save button is pressed, a notification briefly appears at the bottom of the screen and then disappears. This is called a toast or a snackbar. It's a lighter way to notify results compared to pop-ups that block the screen. When saving is successful, show a "Saved" notification at the bottom of the screen. Display the toast notification for 3 seconds. A carousel is a method of displaying multiple cards by swiping through them. It literally means a rotating merry-go-round. It is frequently used for customer reviews or image galleries when space is limited. Create the customer reviews section as a carousel.

### Toast / Snackbar

### Carousel

**6:41** · Allow navigation using left and right buttons, and swiping on mobile.

### Skeleton Loading

**6:45** · Skeleton loading is a method that shows a gray outline instead of a blank screen while data is loading. By showing the skeleton first, users naturally understand that content is currently loading. Show a skeleton loading UI that mimics the actual card structure while data is being fetched.

### 3부 효과·인터랙션 · Hover Effect

**7:03** · While the previous terms were for building features, these are effects that make the screen feel smoother and more alive. Hover effects change the color or size of an element when the mouse is moved over it. They also help users recognize that an element is interactive. Add a hover effect to cards so the shadow darkens and the card lifts slightly when hovered.

### Scroll Reveal

**7:26** · Scroll reveal is an effect that lets content appear naturally as it enters the viewport during scrolling. This is exactly how the items appeared one by one on the screen we saw earlier. It is commonly seen in feature introductions on landing pages. Apply a scroll reveal effect where each feature section slides up slightly as it enters the screen. Stagger animation is an effect where multiple elements appear with a time delay instead of all at once. Even though the cards are identical, the sequence creates a sense of rhythm.

### Stagger Animation

**7:53** · Add a stagger animation so that when the card list first appears, each card fades in sequentially at 0.1-second intervals. Smooth transition allows states to change naturally without a jarring break. It's a small difference, but it greatly enhances the screen's overall polish. Make button and card hover transitions change smoothly over 200ms, or 0.2 seconds. Glassmorphism is a UI style with a frosted glass texture and a blurry background.

### Smooth Transition

### Glassmorphism

**8:25** · However, it can be hard to read text, so ensure sufficient contrast. Use a glassmorphism style for card backgrounds with backdrop blur, but maintain text contrast. Parallax scrolling creates depth by moving foreground and background elements at different speeds. It can be used in product intros or impressive landing pages. If the effect is too strong, it can cause dizziness, so it's better to use it subtly.

### Parallax Scrolling

**8:51** · Apply a subtle parallax scroll to the hero section background, and reduce the effect for mobile and reduced motion settings. Reduced motion settings refer to user preferences on devices to minimize screen movement.

### Scroll Snap

**9:05** · Scroll snap is a method where the screen aligns perfectly to a specific section once you stop scrolling. It's useful for product intros or slide-style pages that occupy the full screen without stopping awkwardly.

**9:18** · Apply scroll snap to full-screen sections so that they align naturally while scrolling. When you hit 'like', the heart pops, and when you save, it changes to a checkmark. These small reactions are called micro-interactions . It is immediate visual feedback for small actions like clicking, saving, or selecting. Sometimes, these small reactions improve usability more than grand animations. Create a brief micro-interaction where the save button shows a loading state and then changes to a check icon.

### Micro-interaction

**9:46** · Now, shall we try using the terms we've learned so far in an actual prompt? First, let's look at a common type of request. Make me a sophisticated website. Make the cards look nice, add some scroll effects, and make the settings screen look cool.

### 실전: 용어로 AI에게 요청하기

**10:03** · Even if you say this, AI can create something plausible. However, describing the layout you want, what happens when a button is clicked, and how animations should appear makes the outcome much clearer. This time, I’ll phrase it using the terms we learned today. Make the first screen a hero section, the main features a Bento grid , the top a sticky header, and the settings a right-side drawer. For the cards, add a light hover and scroll reveal, plus a stagger animation with 0.1 to 1-second intervals.

**10:34** · By writing like this, both you and the AI understand exactly which part of the screen each sentence refers to. Writing this way reminds me of the "Pangyo dialect" used by tech professionals.

**10:47** · The point isn't to use a lot of jargon, but to add specific actions and conditions to the correct terms. The formula is: UI term + desired action + application condition. For a drawer, add the action that it opens from the right, and the condition that it opens upon clicking settings and closes with ESC. You don't need to memorize all the terms introduced today. I’ve created a sheet at the end of the video for you to refer to whenever you need it.

### 정리

**11:13** · Next time you're building a website with AI and aren't sure what to call something, just look it up there. If you found this video helpful, please subscribe, like, and turn on notifications. This has been the Code-Carving Elder. Thank you.
