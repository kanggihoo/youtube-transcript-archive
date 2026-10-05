---
title: "Top Open-Source GitHub Projects : Flutter, VoiceStudio, Splash, KCC, upm & disktree"
source: "https://www.youtube.com/watch?v=vuQOd96oFJc"
published: 2026-10-04
---

# Top Open-Source GitHub Projects : Flutter, VoiceStudio, Splash, KCC, upm & disktree

## 한 줄 요약

주간 GitHub 트렌딩 오픈소스 20개를 프로젝트당 30초 안팎으로 훑는 영상입니다. 절반 가까이가 AI 에이전트 주변 도구(샌드박스, 병렬 실행, 디자인·영상 스킬)이고, 나머지는 로컬 추론, 크로스 플랫폼 SDK, 유틸리티입니다.

## AI 에이전트를 안전하게, 병렬로 돌리는 도구

- **OpenShell** (Nvidia) — 에이전트를 커널 수준 샌드박스에서 선언형 YAML 정책으로 통제. 자격 증명은 승인된 엔드포인트로 가는 요청에만 주입해 유출을 막음
- **Worktrunk** — git worktree 관리 CLI. 에이전트마다 별도 디렉터리를 줘서 병렬 작업 시 충돌을 피함. LLM 커밋 메시지와 한 번에 squash·rebase·merge·정리 지원
- **Staret** — 픽셀 아트 우주 정거장에 에이전트를 배치하면 그 배치가 워크플로가 되는 로컬 우선 데스크톱 하네스
- **Octop** (Tencent Cloud) — 셀프 호스팅 다중 사용자·다중 에이전트 어시스턴트. 웹 대시보드, CLI, 크론, 메신저 채널, MCP 연결
- **Whiteboard** — 사람과 에이전트가 함께 쓰는 설계 캔버스. 브랜치 리뷰 결과를 다이어그램으로 그리고 코드로 점프
- **OpenAI MCP Extensions** — 표준 MCP 위에 ChatGPT 전용 기능(파일 뷰어, 폼, 딥링크)을 얹는 SDK와 스펙

## 에이전트용 디자인·영상 스킬

- **Impeccable** — 23개 명령과 59개 결정론적 검사로 "AI 디자인 티"(Inter 일색, 보라-파랑 그라데이션)를 잡아냄
- **One Take** — 컷 없는 연속 촬영 방식의 제품 런칭 영상 스킬
- **Blueprint Before/After** — UX 결정을 블루프린트 애니메이션으로 설명
- **Anidoodle** — 같은 소스가 어디서나 같은 픽셀로 나오는, 코드로 그리는 아트·애니메이션 엔진

## 로컬에서 돌리는 AI

- **VoiceStudio** — 계정·API 키·클라우드 없이 646개 언어로 음성 복제, 더빙, 전사, 오디오북 제작하는 11Labs 대안
- **Splash** — Apple Silicon용 로컬 추론 엔진. 투기적 디코딩, GGUF·MLX 지원, Claude Code·Codex 등을 연결 가능
- **Naive N0.5 Flash** — 코딩·AI R&D용 MoE 모델. 활성 155억 파라미터, 기본 100만 토큰 컨텍스트, MIT 라이선스
- **Imagev** — 사진과 텍스트를 받아 보정된 확률로 답하는 결정 모델. LoRA 어댑터 3종

## 개발 인프라와 유틸리티

- **Flutter** — 하나의 Dart 코드베이스로 모바일·웹·데스크톱, 자체 엔진이 모든 픽셀을 그림
- **Firebase Apple SDK** — Apple 플랫폼용 Firebase 오픈소스 SDK
- **gpui-kit** — Zed의 UI 툴킷 GPUI 기반 Rust 데스크톱 UI 프레임워크, 75개 이상 컴포넌트
- **upm** — npm 레지스트리용 TypeScript 패키지 매니저. npm 명령과 .npmrc 호환, 오프라인 지원
- **disktree** — 디스크 사용량 트리맵을 그리고 바로 삭제할 수 있는 Rust·GPUI 앱
- **KCC** — 만화·망가를 Kindle, Kobo, reMarkable 등 전자잉크 리더용으로 변환

## 참고

영상 초반에 채널 운영자의 새 채널 "AI Agent Studio" 홍보가 있습니다. 프로젝트 소개는 모두 기능 설명 위주이고 비교나 평가는 없습니다.
