---
title: "Top Open-Source GitHub Projects : OpenBao, Magnitude, herdr, Compositor, WeKnora & BongoCat #296"
source: "https://www.youtube.com/watch?v=4ku5CJB-x5k"
published: 2026-09-29
---

# Top Open-Source GitHub Projects : OpenBao, Magnitude, herdr, Compositor, WeKnora & BongoCat #296

### 한 줄 요약

이번 주 GitHub에서 화제인 오픈소스 프로젝트 20개를 소개합니다. 에이전트 메모리, 로컬 모델 실행, 개발자 도구, 셀프 호스팅 플랫폼이 중심이고, 프로젝트마다 무엇을 하는지와 설치 후 할 일을 짧게 정리합니다.

### AI 에이전트를 위한 기반 도구

- **Hindsight**: Git 히스토리와 과거 세션으로 저장소별 메모리 뱅크를 만들어 에이전트 시작 시 주입하는 장기 메모리. retain, recall, reflect API를 제공하고 Claude Code, Codex, Cursor, LangGraph, CrewAI와 연동됩니다
- **QM**: Y Combinator가 공개하고 내부에서 쓰는 멀티플레이어 에이전트 하네스. 직원마다 격리된 작업 공간, 범위가 지정된 메모리, 파일, 자격 증명, 샌드박스를 주고 Slack에서 협업합니다. 아직 초기 단계입니다
- **herdr**: 코딩 에이전트의 터미널을 소유하는 백그라운드 서버. 뚜껑을 닫거나 네트워크가 끊겨도 에이전트가 살아남고, 각 패인이 작업 중, 막힘, 유휴로 표시됩니다. Rust 바이너리 하나입니다
- **Open Muse**: Copilot Kit이 만든 개인 에이전트. 크로미움과 리눅스 작업 공간을 갖추고 브라우저와 터미널을 언제든 넘겨받을 수 있으며 AG-UI로 하네스를 바꿀 수 있습니다
- **Reverse Skill**: 리버스 엔지니어링과 허가된 침투 테스트 작업을 알맞은 방법론과 Ghidra, Radare2, Frida 같은 도구로 연결하는 스킬 라우터
- **MobileNext**: iOS와 안드로이드 자동화를 위한 MCP 서버. 비전 모델 없이 접근성 트리로 앱을 조작하고 필요하면 스크린샷과 좌표로 대체합니다

### 로컬 실행과 모델 학습

- **Magnitude**: 자체 추론 엔진으로 로컬 모델에서 도는 비공개 오프라인 에이전트. 하드웨어를 분석해 모델을 추천하고 내려받아 튜닝하며 토큰 비용과 API 키가 없습니다
- **NVIDIA Model Optimizer**: PyTorch나 ONNX 모델을 양자화(FP8, INT8, INT4, NVFP4), 희소화, 가지치기, 증류로 압축해 TensorRT-LLM, vLLM, SGLang에 배포합니다
- **Soup**: YAML 파일 하나로 LLM을 파인튜닝하는 도구. 레이어 스트리밍으로 4GB 노트북 GPU에서도 8B 모델을 파인튜닝하고 GGUF로 내보냅니다
- **Mini AGI**: 8GB 노트북 GPU에서 처음부터 학습하며 계속 배우는 바이트 수준 언어 모델. 가중치를 디스크에 두므로 크기는 VRAM이 아니라 디스크 여유 공간이 정합니다. 실험적 프로젝트입니다

### 지식 관리와 업무 플랫폼

- **WeKnora**: 텐센트의 지식 플랫폼. RAG 질의응답, ReAct 에이전트, 자동 유지되는 마크다운 위키 모드로 문서를 지식으로 바꿉니다
- **Open Glean**: Hydra DB 위의 셀프 호스팅 AI 지식 작업 공간. 인용이 달린 답변과 하위 질문을 병렬 처리하는 딥 리서치 모드를 제공합니다
- **DeskCom CRM**: 채팅으로 판매하는 기업을 위한 셀프 호스팅 CRM. AI 에이전트와 WhatsApp을 결합하며 MCP를 지원하고 멀티 테넌트입니다
- **OpenBao**: HashiCorp Vault에서 포크된 오픈소스 시크릿 관리 도구. 저장 시 암호화, 수명이 짧은 동적 자격 증명, 서비스형 암호화, 감사 로그를 제공합니다
- **Open Code Review**: 알리바바의 AI 코드 리뷰 CLI. 결정론적 파이프라인과 LLM 에이전트를 결합해 줄 단위 코멘트를 남기고 수정을 자동 적용할 수도 있습니다

### 데스크톱과 Mac 앱

- **Compositor**: Mac용 무료 오픈소스 포토샵 대안. 블렌드 모드, 레이어 마스크, 조정 레이어, 비파괴 변환, PSD 가져오기를 지원하고 AI 에이전트도 프로젝트를 만들 수 있습니다
- **Search**: 툴바와 계정 없이 탭과 페이지만 있는 macOS용 WebKit 브라우저. 앱 크기가 3MB이고 Chrome 확장 프로그램을 실행합니다
- **vphone-cli**: 애플 실리콘 Mac에서 가상 아이폰을 만들고 부팅하는 명령줄 도구. IPA 설치, 파일 전송, 화면 녹화를 지원합니다
- **God's Eye View**: 3D 지구본 위에 항공기, 선박, 위성, 산불, CCTV를 실시간으로 겹쳐 보여 주는 브라우저 기반 공간 인텔리전스 콘솔. 설계상 사람이 아닌 자산과 시스템만 추적합니다
- **Bongo Cat**: 키보드와 마우스에 맞춰 연주하는 데스크톱 펫. 입력은 로컬에서만 읽고 기록하거나 업로드하지 않으며 Windows에서 실행됩니다

### 채널 공지

발표자는 AI 에이전트 프로젝트, 튜토리얼, 도구만 다루는 새 채널 AI Agent Studio를 열었다고 알립니다.
