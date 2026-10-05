---
title: "Don't Attend a JAVA Interview Before Watching This Video"
author: "Cloud X Berry"
site: "YouTube"
source: "https://www.youtube.com/watch?v=ySu-7tNmDkw"
domain: "youtube.com"
language: "en"
description: "In this video, we go through 10 Spring Boot interview questions that test whether you really understand what's happening behind the annotations. Each answer ..."
word_count: 2385
---

![](https://www.youtube.com/watch?v=ySu-7tNmDkw)

In this video, we go through 10 Spring Boot interview questions that test whether you really understand what's happening behind the annotations. Each answer ...

## Transcript

**0:00** · In this video, we'll go through 10 Spring Boot interview questions designed to test whether you actually understand what's happening behind the annotations, and we'll go through them with some practical examples along the way. Number one, what is Spring Boot and how is it different from Spring Framework? Let's say you're building a Java web application using the Spring Framework.

### Q1. What is Spring Boot, and how is it different from Spring Framework?

**0:19** · Spring provides core capabilities such as dependency injection, the IOC container, transaction management, and web development. But, in a traditional Spring application, there could be a lot of configuration involved to connect all these pieces together. You might have to explicitly configure beans, infrastructure, and other application settings before you can actually start building your business logic. This is where Spring Boot comes in. Spring Boot is built on top of the Spring ecosystem and makes application development much easier by providing things like auto configuration, starter dependencies, and embedded servers.

**0:52** · So, suppose you add the web starter to your project, Spring Boot can configure the infrastructure required for a web application and allow you to run the application with an embedded server instead of manually setting up a separate application server. So, in an interview, don't say Spring Boot replaces Spring Framework.

**1:12** · Spring Framework provides the core capabilities, while Spring Boot simplifies how those capabilities are configured and used. Number two, what is dependency injection and how does Spring manage beans? Now, take a simple example. You have an order service and it needs an order repository to save orders into a database. You could create the repository yourself inside the service, but then your service becomes responsible for creating its own dependency. It's tightly coupled to that implementation, and testing or replacing it becomes more difficult.

### Q2. What is dependency injection, and how does Spring manage beans?

**1:40** · With Spring, the service can simply declare what it needs, and Spring can provide it. That's dependency injection. For example, if you're using Spring Data JPA, you can define an order repository by extending JPA repository. Spring Data JPA creates a repository implementation at runtime and makes it available as a Spring Bean.

**2:03** · The Spring container manages these objects and those objects are called beans. Beans can also be discovered using annotations such as @Component, @Service, and @Repository or you can explicitly define one using @Bean. And if the interviewer asks which injection style you prefer, constructor injection is generally the preferred approach for required dependencies because the dependency is explicit and the object can be created in a valid state. Number three, what does that Spring Boot application actually do?

### Q3. What does @SpringBootApplication actually do?

**2:31** · Here's something you'll see in almost every Spring Boot application, @SpringBootApplication on the main application class. You probably already know that this starts the application, but there is more happening here than it first appears.

**2:46** · @SpringBootApplication combines three important pieces of Spring configuration, @SpringBootConfiguration, @ComponentScan, and @Enable auto configuration. So, essentially, you're telling Spring, "This is my application configuration, scan for my components, and automatically configure the application based on what's available."

**3:05** · That's why one annotation can give you so much functionality, and this leads directly to auto configuration because this is where Spring Boot starts doing some of the work for you automatically.

### Q4. How does Spring Boot auto-configuration work?

**3:15** · Number four, how does Spring Boot auto configuration work? Here's the interesting part about Spring Boot. You can add a dependency, write almost no configuration, and suddenly the application knows how to configure a large part of the infrastructure it needs. So, where did that configuration come from? Spring Boot uses conditions to decide whether a particular auto configuration should apply. Those conditions can depend on things such as classes available on the class path, existing beans, or configuration properties.

**3:43** · For example, suppose a library is available on the class path and you haven't already provided a particular bean, Spring Boot can create a default configuration for you, but if you provide your own configuration, Boot can back off and let your configuration take control. This is why it's better to think of auto configuration as smart defaults rather than magic. And here's the interview trap. If they ask whether Spring Boot always creates the default bean, the answer is no. Auto configuration is conditional, and your own application configuration can change the outcome.

**4:13** · If they want to go one level deeper, you can mention conditions such as @ConditionalOnClass and @ConditionalOnMissingBean.

**4:22** · And you can use Spring Boot's condition evaluation information to troubleshoot why an auto configuration matched or didn't. The first four questions are really about understanding Spring and how the application gets started. Now, let's get into what actually happens when a request enters that application.

**4:36** · Number five, what happens inside Spring MVC when a request arrives? Now, let's take a simple HTTP request, get/users/10.

### Q5. What happens inside Spring MVC when a request arrives?

**4:46** · The request first reaches the servlet container. And for a Spring MVC application, it is handled by the dispatcher servlet. The dispatcher servlet acts as the front controller. It uses mechanisms such as handler mapping to determine which handler should process the request, and a handler adapter is then used to invoke that handler. So, at a high level, the flow looks like this: HTTP request, servlet container, dispatcher servlet, handler mapping, handler adapter, and finally the handler. Notice that the last step is handler, not controller. That's deliberate.

**5:17** · A controller method is a common type of handler, but Spring MVC's handler abstraction is broader. The dispatcher servlet doesn't contain your business logic. Its job is to coordinate the request processing pipeline and find the appropriate handler. So, if an interviewer asks, "What happens when a request arrives?" don't just say, "It goes to the controller." Explain the role of the dispatcher servlet, handler mapping, and handler adapter. Now, let's move from what's happening inside Spring MVC to the part you'll actually write every day, handling rest API is.

**5:45** · Number six, how does Spring Boot handle a rest API request? Suppose the client wants to create a new user, so it sends a post request to {slash} users with some JSON in the request body. Your controller might have a method mapped to that endpoint. At post mapping maps the HTTP request to the controller method, while at request body tells Spring to convert the JSON request body into the Java object expected by the method. Then, there's validation. Suppose the request contains an empty name or an invalid email address.

### Q6. How does Spring Boot handle a REST API request?

**6:17** · Ideally, we validate that input at the API boundary before passing it deeper into the application. For example, the request DTO can use annotations such as at not blank and at email. And at valid on the controller parameter tells Spring to validate that incoming object. And this is where DTOs are useful. Instead of accepting your database entity directly from the client, you define a request object specifically for the API. That keeps the external API contract separate from your persistence model.

**6:47** · So, the rest part of the flow is basically the client sends the request, Spring maps it to the controller, the request body is converted into a DTO, validation is performed, and then the controller can pass that data to the service layer. So, when an interviewer asks how you handle a rest request, don't stop at at rest controller. Talk about request mapping, request body conversion, validation, and DTOs. Now, we're getting into the questions where interviewers can quickly tell whether you understand the technologies behind the code.

**7:16** · Number seven, what is the difference between JPA, Hibernate, and Spring Data? JPA.

### Q7. What's the difference between JPA, Hibernate, and Spring Data JPA?

**7:23** · Here's a question that sounds simple, but a lot of developers mix these three up. The answer you want to remember is JPA is the specification, Hibernate is an implementation, Spring Data. JPA provides the repository abstraction.

**7:38** · Now, let's understand what that actually means. Suppose your application needs to save users into a relational database.

**7:44** · You don't want every service in your application writing JDBC code manually.

**7:49** · This is where JPA comes into the picture. JPA is a specification. It defines standard APIs and rules for object-relational persistence. Hibernate is an implementation of that specification, and then you have Spring Data JPA, which provides a repository abstraction on top of JPA. For example, you can define a user repository by extending JPA repository, and now you get common repository operations without having to implement all of that database access code yourself.

**8:17** · So, don't think of JPA, Hibernate, and Spring Data JPA as three competing technologies. They operate at different layers, and understanding that relationship is exactly what the interviewer is usually testing. Now, we're getting into the questions where knowing the annotation isn't enough. You need to understand what Spring is doing underneath it.

### Q8. What does @Transactional actually do?

**8:36** · Number eight, what does a transactional actually do? Here's a Spring question that sounds ridiculously simple. What does a transactional do? If your answer is just rollback, you might be about to get a follow-up question. Let's say you're building a banking application, and you need to transfer money from account A to account B. First, you debit account A, then you credit account B.

**8:56** · Now, suppose the first operation succeeds, but the second operation fails. You don't want the database to keep only half of that operation. This is where a transactional comes in. The annotation defines a transaction boundary around the operation, allowing the database work to be committed or rolled back according to the transaction rules. But, here's the part that makes this a good interview question.

**9:15** · @Transactional is metadata that Spring's transaction infrastructure uses to apply transactional behavior, commonly through proxies. That means the way the method is called matters. For example, in the default proxy-based mode, if one method in a class directly calls another method in the same class, that internal call doesn't pass through the Spring proxy.

**9:36** · So, putting that transactional on the second method does not automatically mean the transactional advice will run for that self-invocation. So, don't just answer "@Transactional provides rollback." Explain that it defines a transaction boundary and that Spring applies that behavior through its transaction infrastructure. And this next question has another common interview trap, especially when people casually say, "We use JWT for authentication." Number nine, how does Spring Security handle authentication and authorization? Suppose you've built an orders API and not every user should be allowed to perform every operation.

### Q9. How does Spring Security handle authentication and authorization?

**10:10** · The first thing to separate is authentication and authorization.

**10:14** · Authentication is about establishing who the user is. Authorization is about deciding what that user is allowed to access. Spring Security provides the infrastructure for handling these concerns and in a modern configuration, you'll commonly work with a security filter chain. For example, you can define which endpoints are public and which require authentication. Here we're saying that requests under {slash} public don't require authentication while everything else does. Now, here's the important distinction. OAuth 2.0 and JWT are not the same thing.

**10:43** · OAuth 2.0 is an authorization framework while JWT is a token format. Spring Security can use JWT bearer tokens when an application is configured as an OAuth 2.0 resource server. And if you hear OpenID Connect, that's another related concept. It adds an identity layer on top of OAuth 2.0 for authentication use cases. So, when you're explaining security, don't just say, "We use JWT."

**11:10** · Explain how the user is authenticated, how the token or credentials are validated, and how authorization decisions are made. We've now covered how the application starts, how requests are processed, how data is persisted, and how access is controlled.

**11:26** · But there's one more thing we need to deal with, running the application in production. Number 10, how do you monitor a Spring Boot application in production? Let's say your application works perfectly on your laptop and you've deployed it to production. Now, something goes wrong. At that point, you need useful information about the application's health, metrics, and availability. This is where Spring Boot Actuator comes in. Actuator provides production-oriented management and monitoring endpoints.

### Q10. How do you monitor a Spring Boot application in production?

**11:50** · For example, the health endpoint is commonly exposed as {slash} You can also configure which management endpoints are exposed and are secured.

**12:01** · And in containerized environments, you'll often care about readiness and liveness as well. Liveness tells the platform whether the application is alive and should be restarted if it isn't. Readiness tells the platform whether the application is ready to receive traffic. But Actuator is only one part of production observability. In a real system, you normally also think about logs, metrics, and traces with Spring Boot integrating with Micrometer for metrics and observations.

**12:24** · So, Actuator gives your application useful operational information, while the larger observability setup helps you understand what is happening across the whole system. And that's really the point of these 10 questions. Don't memorize Spring annotations in isolation. Understand the life cycle.

### Wrap-up: how it all fits together

**12:42** · The Spring container creates the objects. Spring Boot configures the application. Spring MVC processes the request. Your business logic runs.

**12:51** · Persistence handles the data.

**12:53** · Transactions protect the operation.

**12:55** · Security controls access. Actuator helps you monitor the application. Once you understand that flow, Spring Boot stops looking like a collection of annotations and starts looking like one system. And that's exactly what interviewers are looking for.
