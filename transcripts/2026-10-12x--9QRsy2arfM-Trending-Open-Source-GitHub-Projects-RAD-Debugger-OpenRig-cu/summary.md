---
title: "Trending Open-Source GitHub Projects : RAD Debugger, OpenRig, cua, Hindsight & mygo #300"
source: "https://www.youtube.com/watch?v=-9QRsy2arfM"
published: 2026-10-12
---

# Trending Open-Source GitHub Projects : RAD Debugger, OpenRig, cua, Hindsight & mygo #300

## 한 줄 요약

ManuAGI가 이번 주 인기 오픈소스 GitHub 프로젝트 20개를 프로젝트당 30초에서 1분 안팎으로 소개하는 주간 업데이트로, 에이전트 메모리와 에이전트 운영 도구가 절반 가까이를 차지합니다.

## 에이전트 메모리와 검색

- Hindsight: git 기록과 과거 세션으로 저장소별 메모리 뱅크를 만들어 에이전트 시작 시 주입합니다. retain, recall, reflect를 SDK와 REST로 제공하고 LiteLLM으로 100개 넘는 모델을 지원합니다
- Agent Memory Repo: 에이전트 메모리를 Markdown 노트의 git 저장소로 다루는 열린 사양입니다. 별도의 dreaming 에이전트가 중복 병합과 오래된 항목 제거를 맡습니다
- Leviathan: JSONL, CSV, SQLite 등을 로컬 SQLite 전문 검색 인덱스 하나로 바꿔 에이전트가 출처 달린 짧은 결과 카드만 받게 하는 Rust 단일 바이너리 CLI입니다

## 에이전트 운영과 접근

- OpenRig: 코딩 에이전트 팀을 YAML로 정의하고 명령 하나로 부팅합니다. 리드 에이전트와 대화하고 전문가들이 각자 터미널에서 작업을 넘깁니다. tmux 기반입니다
- Agent Reach: Twitter, Reddit, GitHub, Bilibili, 샤오홍슈, 영상 사이트, 웹 페이지를 API 비용 없이 읽고 검색하는 CLI로, 플랫폼별 대체 백엔드로 자동 전환합니다
- Knowledge Work Plugins: 영업, 법무, 재무, 데이터, 마케팅용 스킬, 명령, 커넥터, 서브에이전트를 Markdown과 JSON으로 묶은 Claude Cowork 플러그인 모음입니다
- cua: 데스크톱 샌드박스, 네이티브 앱 드라이버, Apple silicon VM(Lume), 벤치마크(cua-bench)를 묶은 컴퓨터 사용 에이전트 툴킷입니다
- Open Dots: 채팅, 음성, Slack으로 일하는 지속형 에이전트의 TypeScript 템플릿으로, 각자 역할, 권한, 격리된 컴퓨터를 가지며 사람 검토 카드가 동작을 멈춰 세웁니다
- BOPS: 약 1,400개 앱에 연결된 업무용 AI 봇을 클라우드 컴퓨터에서 돌리는 Mac 앱으로, 보내거나 결제하기 전에 묻습니다
- Omnirush GUI: 데스크톱 AI 코딩 에이전트로, 무료 모델을 쓰면 비밀 정보를 가린 채팅 세션과 작업 공간 스냅샷이 업로드됩니다

## 검증과 평가

- ClearAI: 프레임, 가설, 계획, 관찰, 검증, 평가, 기록의 7단계 루프로 증거 없이 끝났다고 선언하는 문제를 막는 DeepSeek 하네스 플러그인입니다
- LiveNerf: 프런티어 모델이 출시 후 나빠졌는지, 고정된 어려운 문제 묶음을 매일 Claude Code CLI로 돌려 출시 주 기준선과 비교하는 벤치마크입니다
- gdp-ts: 권한 검사를 거쳤다는 증명을 인자에 묶어 요구해, 검사 누락을 컴파일 시점에 잡는 TypeScript 라이브러리와 린터, 스킬입니다

## 개발 도구와 앱

- RAD Debugger: Epic Games의 네이티브 그래픽 디버거로 자체 RDI 형식과 MSVC 링커 대체용 RAD 링커를 포함합니다. Windows x64, Linux는 초기 알파입니다
- mygo: 시스템 웹뷰를 써서 CGO 없는 순수 Go 단일 바이너리 데스크톱 앱을 만드는 프레임워크입니다
- Hairline: 포인터에 반응하는 아이소메트릭 라인 도형 6종의 의존성 없는 TypeScript 라이브러리입니다

## 그 밖의 프로젝트

- God's Eye View: 항공기, 선박, 위성, 산불, CCTV를 3D 지구본에 얹는 브라우저 공간 정보 콘솔로, 공개 데이터를 쓰고 사람이 아닌 자산과 시스템만 추적합니다
- Remove Mac AI: Apple Intelligence와 그 모델, 분석, 광고를 끄고 모든 변경을 미리 보여 주며 되돌릴 수 있게 하는 Swift 앱입니다
- bloodborne_pc: 원본 PS4 빌드의 Bloodborne를 x86-64 Linux에서 실행하는 실험적 런타임으로 게임 덤프는 직접 준비해야 합니다
- FreeVideo: ComfyUI 안에서 MiniMax H3 영상 모델을 내 GPU로 돌리는 데스크톱 런처입니다
