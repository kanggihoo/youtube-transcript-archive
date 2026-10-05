---
title: "Don't Attend a JAVA Interview Before Watching This Video"
source: "https://www.youtube.com/watch?v=ySu-7tNmDkw"
published: 2026-10-04
---

# Don't Attend a JAVA Interview Before Watching This Video

## 한 줄 요약

Spring Boot 면접 질문 10개를 "어노테이션 뒤에서 무슨 일이 일어나는가"로 풀어 줍니다. 핵심은 어노테이션을 따로 외우지 말고 컨테이너, 자동 설정, MVC, 영속성, 트랜잭션, 보안, 모니터링으로 이어지는 하나의 생애 주기로 이해하라는 것입니다.

## 애플리케이션이 시작되는 방식 (1~4번)

- **Spring Boot와 Spring Framework** — Boot는 Spring을 대체하지 않습니다. Spring이 핵심 기능을 주고, Boot는 자동 설정·스타터·내장 서버로 설정과 사용을 단순화합니다
- **의존성 주입과 빈** — 서비스가 필요한 것을 선언하면 컨테이너가 제공합니다. 필수 의존성에는 생성자 주입이 일반적으로 선호됩니다
- **@SpringBootApplication** — `@SpringBootConfiguration`, `@ComponentScan`, `@EnableAutoConfiguration` 세 가지의 합
- **자동 설정은 마법이 아니라 조건부 기본값** — 클래스패스, 기존 빈, 프로퍼티에 따라 적용됩니다. 직접 설정을 주면 Boot가 물러납니다. "항상 기본 빈을 만드나?"의 답은 아니오입니다

## 요청이 처리되는 방식 (5~7번)

- **Spring MVC 흐름** — HTTP 요청, 서블릿 컨테이너, 디스패처 서블릿, 핸들러 매핑, 핸들러 어댑터, 핸들러. 마지막이 컨트롤러가 아니라 핸들러인 이유는 핸들러 추상화가 더 넓기 때문입니다
- **REST 요청** — `@PostMapping`, `@RequestBody`로 JSON을 객체로 변환하고, DTO에 `@NotBlank`·`@Email`을 달고 `@Valid`로 API 경계에서 검증합니다. DTO는 외부 계약과 영속성 모델을 분리합니다
- **JPA, Hibernate, Spring Data JPA** — 경쟁 기술이 아니라 계층이 다릅니다. JPA는 명세, Hibernate는 구현체, Spring Data JPA는 리포지토리 추상화

## 프록시와 보안, 운영 (8~10번)

- **@Transactional** — "롤백"이라고만 답하면 꼬리 질문을 받습니다. 트랜잭션 경계를 정의하고 보통 프록시로 적용되므로, 같은 클래스 안의 자기 호출은 프록시를 거치지 않아 어드바이스가 실행되지 않을 수 있습니다
- **인증과 인가** — 인증은 누구인지, 인가는 무엇을 할 수 있는지. OAuth 2.0은 인가 프레임워크, JWT는 토큰 형식이고 OpenID Connect는 그 위의 인증 계층입니다. "JWT를 씁니다"로 끝내지 말고 인증·검증·인가 결정 과정을 설명하라고 합니다
- **운영 모니터링** — Actuator의 health, readiness·liveness 엔드포인트와 노출·보안 설정. Actuator는 일부일 뿐이고 로그·메트릭·트레이스(Micrometer)까지 봐야 합니다

## 전체 그림

컨테이너가 객체를 만들고, Boot가 구성하고, MVC가 요청을 처리하고, 비즈니스 로직이 실행되고, 영속성이 데이터를 다루고, 트랜잭션이 보호하고, 보안이 접근을 통제하고, Actuator가 감시합니다. 이 흐름을 이해하면 Boot가 하나의 시스템으로 보인다는 것이 결론입니다.
