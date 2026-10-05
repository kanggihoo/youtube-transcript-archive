---
title: "Top Open-Source GitHub Projects : fmt, Tile Language, SkillSpector, QDuo, seiso & DroidDeck"
source: "https://www.youtube.com/watch?v=ACTYK6Cnuos"
published: 2026-10-04
---

# Top Open-Source GitHub Projects : fmt, Tile Language, SkillSpector, QDuo, seiso & DroidDeck

## 한 줄 요약

주간 GitHub 트렌딩 오픈소스 20개를 프로젝트당 30초 안팎으로 훑는 영상입니다. 절반 이상이 Claude Code·Codex·Cursor 같은 코딩 에이전트용 스킬이나 도구이고, 나머지는 GPU 커널, C++ 라이브러리, 앱입니다.

## 에이전트와 함께 쓰는 도구

- **Hyperframes** — HTML/CSS를 쓰고 명령 하나로 MP4 렌더링. 에이전트 스킬로 프롬프트에서 영상 제작
- **Claude Motion Design** — HTML, Playwright, FFmpeg만으로 모션 디자인 영상 제작. 리메이크 모드는 런칭 영상을 내 브랜드로 재제작
- **ReelMimic** — 마음에 든 영상을 분해해 기법만 배우고 에셋은 복사하지 않은 채 같은 스타일의 새 영상 제작. 스토리보드 승인 단계 있음
- **ECC** — 스킬, 메모리, 스택별 규칙, 보안, 리서치 우선 워크플로를 얹어 에이전트가 계획, 테스트 검증, 새 컨텍스트 리뷰를 하게 함
- **SkillSpector** — Nvidia의 스킬 보안 스캐너. 프롬프트 인젝션, 데이터 유출, 악성 코드, 공급망 위험을 정적 분석과 선택적 LLM 평가로 검사
- **Cuckoo** — 노치에서 코딩 에이전트를 지켜보는 펫. 권한 요청 승인/거부 가능
- **Agent Office** — 3D 사무실에서 GitHub 저장소별로 코딩 에이전트를 고용
- **Universal Modder** — 에이전트가 가진 PC 게임을 스캔, 백업, 에셋 생성, 검증, 게시하는 루프로 모딩
- **Logo Design Skill**, **ReelDraw**(상대 위치로 쓰는 다이어그램 언어), **CAS**(AI 문서용 마크다운 린터)

## 인프라와 모델

- **Agent Substrate** — 쿠버네티스에서 에이전트 워크로드를 높은 밀도로 실행. 유휴 액터를 중단/재개하며 gVisor로 격리
- **FreeLLMAPI** — 34개 제공자의 무료 티어를 OpenAI 호환 엔드포인트 하나로 묶는 프록시
- **UniMotion** — 텍스트 프롬프트로 어떤 리깅된 3D 스켈레톤이든 애니메이션하는 파운데이션 모델. MIT, 초기 단계
- **TileLang** — 타일 단위로 GPU/CPU/가속기 커널을 쓰는 파이썬 DSL. TVM 기반

## 라이브러리와 일반 앱

- **fmt** — 컴파일 타임 검사를 하는 타입 안전 C++ 포매팅 라이브러리. C++20 `std::format`, C++23 `std::print` 구현
- **QDuo** — 텍스트를 선택하면 다듬기, 읽기, OCR, 번역 액션이 뜨는 맥OS 방사형 메뉴. 선택한 내용은 맥 밖으로 나가지 않음
- **DroidDeck** — 안드로이드에서 Valve의 ARM64 Steam 클라이언트 실행. 베타, Adreno 기기 필요
- **Zulu** — 토픽을 일급으로 다루는 Zulip 네이티브 iOS/맥OS 클라이언트
- **Paper Mono Shopping List** — M5Stack Paper e-paper를 냉장고용 장보기 목록으로

> 영상에서 프로젝트 이름 일부는 자동 자막의 음성 인식 결과라 표기가 어긋나 있습니다(예: fmt가 "mpend", SkillSpector가 "Skill spectre"). 위 이름은 제목과 문맥으로 바로잡은 것입니다.
