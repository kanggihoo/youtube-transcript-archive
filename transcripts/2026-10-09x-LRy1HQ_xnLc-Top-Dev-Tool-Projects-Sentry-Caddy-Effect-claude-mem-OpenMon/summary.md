---
title: "Top Dev Tool Projects : Sentry, Caddy, Effect, claude-mem, OpenMontage & iCode"
source: "https://www.youtube.com/watch?v=LRy1HQ_xnLc"
published: 2026-10-09
---

# Top Dev Tool Projects : Sentry, Caddy, Effect, claude-mem, OpenMontage & iCode

## 한 줄 요약

ManuAGI가 이번 주 인기 오픈소스 개발자 도구 20개를 프로젝트당 1분 안팎으로 소개하는 주간 업데이트로, 절반 이상이 코딩 에이전트용 스킬, 메모리, 하네스이고 나머지는 Sentry, Caddy, Effect 같은 범용 개발 도구입니다.

## 코딩 에이전트의 컨텍스트와 메모리

- Context Mode: 도구 출력을 샌드박스의 하위 프로세스에서 처리해 답만 컨텍스트에 넣고, 파일 편집과 작업과 결정을 검색 가능한 저장소에 색인해 압축 후에도 작업이 남게 하는 MCP 서버입니다. 17개 플랫폼에서 동작합니다
- claude-mem: 에이전트의 도구 사용을 포착해 AI로 의미 기반 요약으로 압축하고 관련 내용을 이후 세션에 자동 주입합니다. SQLite와 벡터 저장소를 쓰는 로컬 워커이며 MCP로 검색을 제공합니다. Apache 2.0

## 코딩 에이전트 하네스와 제어

- Pi Agent Harness: 서브에이전트와 계획 모드를 일부러 뺀 미니멀 터미널 에이전트로, 확장, 스킬, 프롬프트 템플릿, 테마를 패키지로 추가합니다. MIT
- DSCode: Deep Seek 기반 macOS 터미널 에이전트로, 세션끼리 작업을 주고받고 독립 리뷰 모델과 세션 간 메모리를 갖습니다. MIT
- Claude Code Templates: 에이전트, 슬래시 명령, MCP 통합, 훅, 스킬을 웹이나 명령줄에서 설치하는 카탈로그이며 세션 분석과 모니터링을 제공합니다. MIT
- T3 Code: 내 기기에 설치된 Claude Code, Codex, Cursor 등을 모바일, 웹, 데스크톱 앱에서 지휘하는 제어 인터페이스입니다. MIT
- iCode: 완전 오프라인 터미널 플랫폼으로, 에이전트를 코드가 아닌 설정으로 다루고 모델은 직접 연결합니다. 텔레메트리가 없습니다. Python, Apache 2.0

## 에이전트에게 규율과 전문성을 주는 스킬 묶음

- Ponytail: 불필요한 것은 건너뛰고, 기존 코드를 재사용하고, 표준 기능을 쓰는 순서의 사다리로 코드를 덜 쓰게 합니다. 검증, 오류 처리, 보안, 접근성은 생략하지 않습니다. MIT
- pstack: Lauren Tan의 Cursor 스킬 세트를 다른 에이전트로 이식한 것으로, "potato mode"에 목표를 주면 버그 재현, 조사, 수정, 재검증 같은 워크플로를 고릅니다. MIT
- Agent Skills: 정의부터 배포까지 25개 스킬을 검증 게이트와 함께 제공하며 슬래시 명령 9개로 접근합니다. MIT
- gstack: Gary Tan의 Claude Code 설정으로, 임원, 엔지니어링 매니저, 디자이너, 리뷰어, QA, 보안, 릴리스 엔지니어 역할의 스킬로 가상 팀을 만듭니다. MIT
- Marketing Skills for AI Agents: 전환 최적화, SEO, 분석, A/B 테스트, 유료 광고, 영업 등 약 50개 마케팅 스킬입니다. MIT
- Text-to-CAD: 쉬운 말이나 이미지로 STEP, STL, 3MF, GLB를 만들고 DXF, G-code, 로봇 기술 파일까지 다루는 CAD 스킬 라이브러리입니다. Python, MIT

## 테스트, 모니터링, 서버, 라이브러리

- E2E: 목표를 쉬운 말로 적으면 에이전트가 웹과 모바일 앱을 테스트하고, 에이전트 단계는 기록돼 앱이 바뀌기 전까지 모델 호출 없이 재실행됩니다. Apache 2.0
- Sentry: 오류와 크래시를 컨텍스트와 함께 포착하고 성능 모니터링, 트레이싱, 세션 리플레이, 로그를 제공하는 플랫폼입니다. 호스팅 또는 자체 호스팅
- Caddy: 인증서를 자동 발급, 갱신해 기본으로 HTTPS를 제공하는 Go 웹 서버입니다. HTTP/3 리버스 프록시를 지원합니다. Apache 2.0
- Effect: 타입이 있는 오류, 의존성 주입, 구조적 동시성, 재시도, 트레이싱, 스키마 검증을 하나의 코어에 담은 TypeScript 라이브러리입니다. MIT

## 그 밖의 프로젝트

- OpenMontage: 코딩 에이전트가 리서치부터 대본, 에셋 생성, 편집, 합성까지 영상 제작 전체를 수행하는 시스템으로, 100개가 넘는 도구와 사람 승인 게이트, 예산 한도가 있습니다. AGPL-3.0
- NEPS5: PS5 실행 파일을 에뮬레이션 없이 Linux와 Windows에서 네이티브로 돌리도록 이식합니다. 펌웨어와 키는 포함하지 않습니다. C++, GPL 2.0
- 3js particle fluids: WebGPU로 GPU에서 입자 유체 시뮬레이션을 돌리는 Three.js 라이브러리로, WebGL 대체 수단은 없습니다. MIT
