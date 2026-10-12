---
title: "I Built KingBench 4 (HARD): Opus 5.5 vs GPT-6 Astra vs Sol vs Haiku 5.5 vs GLM 5.3"
source: "https://www.youtube.com/watch?v=cAIvhxVx0kU"
published: 2026-10-10
---

# I Built KingBench 4 (HARD): Opus 5.5 vs GPT-6 Astra vs Sol vs Haiku 5.5 vs GLM 5.3

### 한 줄 요약

AI 코딩 모델 다섯 개에 어려운 프로젝트 여섯 개를 한 세션씩 맡긴 결과, Opus 5.5가 57.8%로 1위, Astra 56.5%, Sol 55.0%, Haiku 5.5 54.2%, GLM 5.3 45.8% 순이었고 1위도 60%에 못 미쳤습니다. 점수 차는 작으니 실제로 만들 프로젝트를 보고 고르라는 결론입니다.

### 실험 방식

- 모델 5개: Codex로 GPT 6.1 Sol과 GPT 6 Astra, Claude Code로 Opus 5.5와 Haiku 5.5, OpenCode로 GLM 5.3
- 프로젝트 6개를 모델마다 새 세션에서 60분 제한으로 진행했고, 납품된 상태 그대로 10점 만점으로 평가해 동일 가중으로 합산했습니다
- 표본이 작아 작은 차이로 영구적인 승자를 정할 수 없다고 밝힙니다

### 작업별 결과

- **게임보이/DS/3DS 에뮬레이터**: 완성한 모델은 없음. Opus 3.7점이 DS 진단 프로그램 두 개를 실행해 1위, Sol과 Astra는 2.2, Haiku 1.8, GLM 0.6
- **도커 대체품**: 효율 우위를 입증한 모델은 없음. Sol 5.0이 1위, Opus와 Astra 4.6. GLM과 Haiku(각 3.0)는 아카이브 추출이 디렉터리 밖의 파일을 건드리는 문제
- **3D 방 디자이너**: 전반적으로 양호. Opus 8.5, Astra와 Haiku 8.3, Sol 8.0, GLM 7.8. Opus는 저장 실패 시에도 저장됐다고 표시하는 버그
- **QMK/VIA 키보드 설정 도구**: 연결된 기기 리매핑이 핵심. Opus 7.5, Haiku 6.7이 구현했고 GLM 4.6은 프로토콜 세부 오류, Sol과 Astra는 3.0으로 로컬 편집기만 있음
- **포켓몬 레드 첫 체육관**: Astra 8.5, Sol 8.2, GLM 7.1, Haiku 6.3. Opus는 시작 키가 메뉴를 바로 닫아 저장이 불가능해 3.0점
- **Fitbit 분석 데스크톱 앱(Rust)**: Opus 7.4, Astra 7.3, Sol 6.6, Haiku 6.4, GLM 4.4. 대부분 누락 데이터를 잘못 처리해 불완전 기록이 자신 있어 보이는 숫자로 바뀌는 문제

### 비용과 Haiku의 위치

- 방, 키보드, Fitbit 세 작업만 보면 Haiku의 추정 API 비용은 Opus보다 약 85% 낮고 평균 점수는 71.3%로 Opus 78.0%에 가깝습니다
- Haiku 토큰은 Sol의 4배 이상이지만 Sol과 Haiku의 가격 범위가 겹쳐 어느 쪽이 싼지는 입증되지 않습니다
- 이 수치는 구독 청구액이 아닌 API 환산 추정치입니다

### 발표자의 선택

- 가장 넓은 범위의 시작점으로는 Opus. 다만 저장 경로와 계산은 먼저 확인할 것
- 브라우저 게임에는 Astra, 비용이 중요한 범위 한정 앱에는 Haiku를 먼저 써 보겠다고 합니다
- 테스트 습관: 기능을 끝까지 따라가 볼 것. 키를 바꿔 기기 메시지를 확인하고, 체육관을 깬 뒤 다시 불러오고, 측정값이 빠진 데이터를 가져와 차트를 확인합니다
