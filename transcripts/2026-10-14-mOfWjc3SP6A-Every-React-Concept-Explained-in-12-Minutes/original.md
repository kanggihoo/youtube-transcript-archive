---
title: "Every React Concept Explained in 12 Minutes"
author: "Coding2GO"
site: "YouTube"
published: 2026-10-14T02:00:13-07:00
source: "https://www.youtube.com/watch?v=mOfWjc3SP6A"
domain: "youtube.com"
language: "en"
description: "⚛️ Complete React Masterclass → https://coding2go.com/products/react-masterclassEvery React concept explained simply in 12 minutes: components, JSX, props, s..."
word_count: 2593
---

![](https://www.youtube.com/watch?v=mOfWjc3SP6A)

## Transcript

**0:00** · React is the most famous JavaScript library you can learn. We use it to build interactive websites. But, whoever named these concepts like hydration, portals, and suspense really made it sound more complicated than it is. So, in this video, I'll explain what each concept does. So simple that even five coders can understand. Now, in the beginning, you have to learn about components. A component is a reusable part of your interface. In an online shop, you would have components for a product card, the search bar, or the entire shopping cart. All you have to do is to write a JavaScript function that returns what you want to display.

### Components & Component Tree

**0:28** · Now, the cool thing is we can use that same component multiple times. So, here we get three product cards without writing the entire code three times. And if you change something about the design inside that component, all three cards get the same update. Components can also contain other components, and together they form the component tree. But, how can a JavaScript function return something that looks like HTML? That syntax is called JSX. It lets us describe our interface inside JavaScript. And using curly braces, we can insert JavaScript values directly into it.

### JSX

**0:59** · For example, price calculations or even a username.

### Fragments

**1:03** · Now, a tricky part about components is that it can only return one element.

**1:07** · That element can contain multiple children, but you cannot return multiple elements next to each other. For that, we can use a fragment. It looks like an empty tag, but it will not appear on the page, which is quite useful. Now, the product cards all use the same component. But, how can they display different information? They're all showing different products. This is where props come into place. Props are inputs passed from a parent component to a child. They can contain text, numbers, objects, and even functions. When you pass a prop, it looks like assigning an HTML attribute.

### Props

**1:35** · And when receiving the prop inside the component, it works like a simple parameter. In this example, the component stays the same. Only the information we pass into it changes.

### Children & Composition

**1:45** · Now, there's another way components become reusable. Instead of only passing data, we can pass entire pieces of the interface. To do that, we need children.

**1:53** · So, this card here provides the border and background, while whatever we place inside can change, that idea is called composition, building bigger interfaces from smaller pieces. Now, this next concept is everywhere in React, conditional rendering. Our product is sold out, so the buy button should disappear and a message should take its place.

### Conditional Rendering

**2:12** · React doesn't need a special system for this. We use normal JavaScript conditions to decide what gets rendered and a very common syntax here is the ternary operator.

**2:20** · If the condition is true, I return the first thing. If it's false, I return the second thing. That same idea controls login screens, drop-downs, loading states, and basically anything that appears or disappears. Let's talk about lists and keys. Real products usually come from arrays, so we use map to turn each item into a component, but React also needs a stable way to know which item is which and that is what a key is for. Usually, you use an ID from your data.

### Lists & Keys

**2:44** · Now, if you're changing the elements on your website, the ID will always stay the same and React knows which element is which. Now, we reach one of the most important ideas in React, state. Imagine we're clicking this favorite button in the online shop. First, it needs an event handler, a function that reacts to a click, input, or other interaction.

### State & Event Handlers

**3:01** · But, the interface also needs to remember that this product is now a favorite. That memory is state.

**3:07** · Use state gives us the current value and a function to update it.

**3:11** · When the value changes, React renders again and now the filled heart appears and state belongs to a particular component, so clicking one product will not automatically update the other components. So, what actually happens when the state changes? In this case, when the favorite changes from false to true, React calls our component again to calculate what the interface should look like.

### Rendering & Declarative UI

**3:30** · That is called rendering. Then, React compares the result with what it had before and updates only what needs to change in the browser's DOM. That is the core idea behind declarative UI. We describe the result we want and React handles the update.

### Virtual DOM, Reconciliation & Commit

**3:43** · You may also hear three related terms.

**3:45** · The virtual DOM is React's in-memory description. Reconciliation is how React figures out what changed and the commit is when those changes reach the DOM. So, rendering again does not mean rebuilding the whole page. Here, only the heart needs to change. Now, state has one unexpected behavior that trips up a lot of beginners. When you update state in one line and use it immediately in the next one, your code still sees the old value.

### State Updates Are Not Instant

**4:09** · The state change hasn't happened yet. An easy fix is to use a new variable and then set the state and use it in the next line.

### Purity (Pure Components)

**4:16** · Let's talk about a very important rule in React, purity. The React documentation specifically states, "React components must be pure functions. Given the same input, they should always return the same JSX." But, what does that mean?

**4:30** · When components use values from functions like math.random or date.now directly in the rendered output, the result can change even when the props, state, and context haven't changed. And these functions don't trigger re-renders themselves. But, when another render happens, the displayed value might unexpectedly change. That is why rendering must be pure. Now, let's learn about forms. How can we change the page when the user types something? Well, you can assign an on change event handler.

### Forms & Controlled Inputs

**4:56** · Here, you store the value in state, use that value to filter a list like products, and you get yourself a search feature.

### Lifting State Up

**5:02** · In React, it is important to decide where a state should live. If two components need the same value, you should not have two separate states for the same thing. Instead, keep it in their nearest shared parent and pass it to both components using props.

**5:15** · That is called lifting state up.

### Hooks

**5:17** · Now, let's learn about hooks. We already used one, use state. But, what if we need the same state logic in multiple components? Well, you could just copy and paste it. But, then every change needs to happen in multiple places.

### Custom Hooks

**5:29** · Instead, we can put that logic inside a custom hook. Imagine several components need a counter. Each one needs a number stored in state and a function that increases it. We can move that state and function into our own function called use counter. Hooks usually start with use. Inside, we still use use state just like before. Then, we return the count and the function that increases it so the components can use them. Now, a component can call use counter and get everything it needs to work with a counter. And if you want to change how that logic works, we only need to change it in one place. That is a custom hook.

**6:02** · And state isn't the only hook we can use.

**6:04** · One of the most important hooks is use effect. To understand why we need it, let's look at the component life cycle.

### Component Lifecycle (Mounting, Updating, Unmounting)

**6:11** · A component can appear on the page, update while it's there, and eventually disappear.

**6:15** · When React adds the component to the page, we call that mounting. When its state or props change, React renders again and updates the screen if needed.

**6:23** · That is updating. And when React removes the component, that is called unmounting. But, why should we care?

**6:29** · Well, imagine a component that shows a countdown. We need to start a timer when it appears and stop the timer when it disappears. If we start that timer directly inside the rendering code, every render could start another timer.

### useEffect & Side Effects

**6:41** · That is where use effect comes in.

**6:42** · Starting timers or even fetching data means to interact with something outside rendering. And that is called a side effect.

**6:49** · Use effect lets us run that code after React finishes updating the page. The dependency array controls when the effect runs again. If this array is empty, the effect runs only when the component mounts and it doesn't rerun because of state updates. If the component unmounts and mounts again, the effect runs again, too. If you want your code to run again when certain props or state change, you can include them in the dependency array. React reruns the effect when those values change.

**7:14** · For example, if you fetch data for a user, a changed user ID means we need to fetch that data again.

### Cleanup Functions

**7:19** · Now, how do we stop the timer? You can return a cleanup function from the effect. Use it to clear timers or close connections. React will call the cleanup function when the component unmounts and before rerunning the effect with the changed dependencies. Now, what if you want to focus an input field with code?

### useRef

**7:34** · You need access to the actual DOM element. That is where use ref comes in.

**7:38** · Create a ref, pass it to to input using the ref prop, and React stores that element in ref.current. You can then call ref.current.focus to focus the field. Refs can also remember other values between renders, but unlike state, changing a ref does not trigger a re-render. So, ref can store values that need to persist between renders without updating the UI, and use state when a value should update what the user sees. Now, we often put components inside components inside other components, and sometimes data needs to travel through several levels just to reach the component that actually needs it.

### Prop Drilling

**8:10** · That is called prop drilling, and passing props is perfectly fine, but if you keep passing data through components that don't use it, context can help. Put a provider above the components that need the data, and give it the value you want to share.

### Context & useContext

**8:23** · Then use use context to read that value further down without passing it through every level.

**8:28** · This is useful for things like the current theme or logged-in user, and it doesn't have to cover the entire app.

**8:33** · You can share it with just one part of the component tree. So, context lets different components access the cart, but adding products, removing them, and changing quantities all require different update logic. When that logic gets difficult to follow, we can organize it with useReducer. A reducer is a function that receives the current state and an action describing what happened.

### useReducer

**8:54** · For example, clicking add to cart sends an action product added with that product. The reducer uses that information to return the updated cart, and React updates the screen. useReducer gives us the current state and a function called dispatch to send those actions. We can share both through context so all components can read and request changes.

### Portals

**9:13** · Now, portals let you render some children into a different part of the DOM. Imagine clicking a product to open a pop-up, but the product card has CSS that clips anything outside its edges, so the pop-up gets cut off. A portal lets us put that pop-up somewhere else on the DOM, like directly inside the page's body. Here, it does not get cut off. We use createPortal, passing it what to display and where to put it.

**9:36** · And the cool thing is the pop-up still belongs to the same React component tree, so it can still access the same context while being at a different position. Now, let's talk about suspense. Suspense lets you display a fallback while part of the interface is loading. It looks like this. React shows a loading component until the content is ready. But, the loading needs to support suspense, like components loaded with lazy or promises read with use. A normal fetch inside a use effect will not activate it automatically. Related to suspense is the use API.

### Suspense

### The use API

**10:06** · It can read context or a promise's result during rendering. If the promise is still pending, React can show the nearest suspense fallback, then display the content when the data is ready. The promise needs to be reused across renders, rather than created again each time.

**10:19** · And unlike hooks, use can be called conditionally, but still inside a component or hook. Another performance tool in React is memoization, reusing previous work when the \[clears throat\] inputs haven't changed.

### Memoization, React Compiler & useMemo

**10:30** · With React compiler enabled, much of this happens automatically. Otherwise, tools like use memo let us do this manually. React now also supports functions called actions for handling form submissions. You can pass a function to the form's action prop, and React will call it when the user submits the form. The function receives form data containing the submitted values.

### Actions

**10:49** · For that, your inputs need names, so you can read their values.

### Server Components & Client Components

**10:53** · Now, server components are a React feature usually used in frameworks like Next.js with its app router. They can load and display our product data on the server without sending their component code to the browser. That means less JavaScript to download and run. Use client components for interactive parts, like our favorite button. Client components can also produce initial HTML on the server, but their React behavior still needs to connect in the browser.

### Hydration

**11:15** · That connection is called hydration.

**11:17** · React takes the HTML already displayed in the browser, so our favorite button can respond to clicks. Your framework usually handles this automatically. Your job is to make sure the first browser render matches the server's HTML. Use the same initial data and avoid random values during rendering. And if your app renders entirely in the browser, hydration isn't needed. Now, I know some of that sounded really complicated, and that is fine. You do not need to memorize everything. Think of this video as a React roadmap. If you like the way I explain things and you want to dive deeper, you will love my React Masterclass.

### React Roadmap & Next Steps

**11:44** · A structured course that explains everything you need to know about React with practical projects that make you understand how and why everything works. You can get the React Masterclass at coding to go.com, linked in the description.
