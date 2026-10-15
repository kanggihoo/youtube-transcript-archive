---
title: "Top Dev Tool Projects : Ghidra, AirLLM, xtool, Shaders, ts-rust & DigUp"
source: "https://www.youtube.com/watch?v=Qed85xmiaY0"
published: 2026-10-15
---

# Top Dev Tool Projects : Ghidra, AirLLM, xtool, Shaders, ts-rust & DigUp

## 한 줄 요약

ManuAGI가 이번 주 트렌딩 오픈소스 개발 도구 20개를 프로젝트당 한 문단씩 빠르게 소개하며, 리버스 엔지니어링, 에이전트 스킬, WebGPU 효과, 로컬 LLM, 크로스 플랫폼 빌드 도구가 중심입니다.

## 코딩 에이전트용 스킬과 도구

- Skills for real engineers는 방향 불일치, 장황한 출력, 깨진 코드, 지저분한 구조를 다루는 작은 지침 파일 모음으로, Grill me와 TDD 스킬이 포함됩니다
- Skills는 Versal Labs의 CLI로, GitHub, GitLab, 로컬 폴더의 스킬을 Claude Code, Codex, Cursor, Open Code 등 설치된 에이전트의 디렉터리에 넣어 줍니다
- Cursor 플러그인은 에이전트 스킬, 규칙, MCP 서버 정의를 묶는 공식 명세와 플러그인 저장소입니다
- Shipyard는 VPS, 클라우드, 데스크톱에서 코딩 에이전트를 돌리고 Mac 앱에서 지휘하게 해 주며, 노트북이 절전 모드여도 에이전트는 계속 실행됩니다
- DeepSeek Bot은 Deepseek Harness를 Chief 봇이 이끄는 장기 실행 봇 팀으로 바꿔 줍니다

## 리버스 엔지니어링

- REA는 AI 에이전트가 소스 코드 없이 네이티브 바이너리, JavaScript와 Electron 앱, 웹사이트를 검사하게 하는 MCP 서버이자 CLI이며, 증거 기반 결과를 돌려주고 모두 로컬에서 실행됩니다
- Ghidra는 NSA의 오픈소스 프레임워크로 다양한 명령어 집합과 파일 형식에서 디스어셈블과 디컴파일을 하며, Java나 Python으로 확장할 수 있습니다
- anyPS5는 PS5 실행 파일을 리링커와 셰이더 재컴파일러로 Linux와 Windows용 네이티브 프로그램으로 변환하는 이식 도구입니다

## 그래픽, 영상, 시각화

- Shaders는 WebGPU 효과를 React, Vue, Svelte, Solid, JavaScript 컴포넌트로 제공하며 CLI와 MCP 서버로 연동합니다
- Anatomy는 개념을 인터랙티브한 아이소메트릭 기계 일러스트로 설명하는 에이전트 스킬입니다
- Manim GX는 Rust와 WGPU 기반으로 수학 및 3D 영상을 MP4로 렌더링하는 Manim CE API 호환 엔진입니다
- openfilm은 코딩 에이전트가 만든 영상을 사람이 스튜디오에서 편집할 수 있게 하는 도구입니다
- ascii는 웹 페이지에 움직이는 ASCII 아트를 넣는 라이브러리로 React, Astro, 단일 HTML 태그로 쓸 수 있습니다

## 로컬 실행과 개인 데이터

- AirLLM은 모델을 디스크에서 레이어 단위로 나눠 한 번에 한 레이어만 GPU에 올려, 양자화 없이 4GB 카드에서 70B 모델을 돌립니다
- Dig Up은 Gemma 2 임베딩 모델로 이미지, PDF, 녹음, 영상, 코드를 하나의 벡터 공간에 넣어 Mac 파일을 의미로 검색하는 메뉴 막대 앱이며 모든 것이 기기에 남습니다
- Taleris는 Cloudflare 계정 안에서만 돌아가는 단일 사용자용 개인 AI 에이전트이며 데이터 추적이 없습니다

## 플랫폼과 언어 도구

- XTool은 Linux, Windows(WSL), macOS에서 Xcode 없이 Swift PM 패키지를 iOS 앱으로 빌드, 서명, 설치합니다
- ESP32 iPhone Agent는 ESP32S3 보드를 USB 마우스와 키보드처럼 연결하고 AirPlay 미러링으로 화면을 봐서, 개발자 계정이나 탈옥 없이 AI가 실제 iPhone을 제어합니다
- ts-rust는 Microsoft 네이티브 타입스크립트 컴파일러를 AI 모델이 Rust로 포팅한 실험적 프로젝트로, 동일한 CLI, 언어 서버, 진단을 목표로 하는 교체형 타입 검사기입니다
- AI Engineering from Scratch는 선형대수에서 자율 에이전트까지 20단계로 직접 만들며 배우는 커리큘럼입니다
