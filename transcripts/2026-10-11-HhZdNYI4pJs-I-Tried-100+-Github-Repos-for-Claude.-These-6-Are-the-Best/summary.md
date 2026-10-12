---
title: "I Tried 100+ Github Repos for Claude. These 6 Are the Best"
source: "https://www.youtube.com/watch?v=HhZdNYI4pJs"
published: 2026-10-11
---

# I Tried 100+ Github Repos for Claude. These 6 Are the Best

## 한 줄 요약

Nate Herk가 Claude용 GitHub 저장소 100개 이상을 써 본 뒤, 제목의 6개와 달리 실제로는 10개를 골라 고객을 얻는 도구, 실제 프로젝트를 만드는 도구, 검증과 노출 도구로 나누어 소개하고, 토큰 절약 도구는 효과가 광고보다 작다고 평가합니다.

## 고객을 얻는 도구 (1~5번)

- Hyperframes(HeyGen): 평범한 말로 HTML과 애니메이션을 만들고 내 컴퓨터에서 MP4로 렌더링합니다. 오픈소스에 렌더링 비용이 없고, Remotion보다 결과가 좋았다고 합니다
- Google Workspace CLI: Drive, Gmail, Calendar, Docs, Sheets, Slides를 다루는 CLI로 40개가 넘는 스킬이 딸려 옵니다. Claude Code와 Codex에서 쓸 수 있고 설정에 Google Cloud 프로젝트가 필요합니다
- Apify MCP 서버: Instagram, TikTok, Amazon 등 Claude가 직접 못 읽는 사이트의 기성 스크레이퍼를 연결합니다. 스크레이퍼는 Apify 클라우드에서 돌아가 비용이 들 수 있고 무료 요금제는 월 5달러 크레딧입니다
- Scrollcraft(발표자가 직접 만듦): 스크롤 엔진, 디자인 규칙, 스크린샷으로 위치를 검증하는 검사기를 Claude에게 줍니다
- Humanizer: Wikipedia 편집자의 AI 글 식별 가이드에 기반해 "이것이 아니라 저것" 구조, 서론, 세 항목 묶기, 과장어를 걷어 냅니다

## 실제 프로젝트를 만드는 도구 (6~8번)

- Addy Osmani의 Agent Skills: /spec, /plan, /build로 계획을 채팅 밖 파일로 옮겨, 세션이 길어져도 새 세션에서 이어 갈 수 있습니다. 스펙 단계에서 이중 예약, 환불, 시간대 같은 엣지 케이스를 물어 줍니다
- Expo 공식 스킬: 오후 안에 내 iPhone에 앱을 띄우게 하며, AI 티가 나는 20가지 항목과 앱 스토어 규칙이 들어 있습니다. Claude에게 이름을 지정해 쓰라고 해야 하고 Apple 개발자 계정은 연 99달러입니다
- Supabase와 Stripe 공식 스킬: Stripe는 전체 플러그인 대신 best practices 스킬만 설치하고, Supabase 커넥터는 읽기 전용으로 두며, 출시 전 테스트 사용자로 로그인해 다른 사람의 데이터가 안 보이는지 확인하라고 합니다

## 검증과 노출 (9~10번)

- Playwright CLI: 진짜 브라우저로 고객처럼 클릭하며 반복 가능한 테스트를 씁니다. MCP가 아닌 CLI라 컨텍스트에 페이지를 쏟지 않아 토큰이 적고 빠릅니다
- Claude Security: 에이전트 팀이 서로 반박하며 결함을 찾고, 쉬운 영어 보고서와 패치를 줍니다
- Open SEO: 실제 키워드 데이터, 순위, 백링크로 감사합니다. 무료 크레딧이 적고 직접 호스팅하지 않으면 데이터가 그들의 서버에 남습니다

## 토큰 절약 도구의 실제 효과

- JetBrains의 실제 코딩 테스트에서 Caveman은 광고 65% 대비 출력 토큰 약 8.5% 절약, RTK는 절약 없음, Ponytail은 작업당 약 10%로 광고의 절반이었습니다. Ponytail에는 Windows에서 메시지마다 지연되는 열린 버그가 있습니다
- Codeburn은 토큰이 어디로 가는지 보여 주고 안 쓰는 MCP 서버 같은 낭비를 짚어 줍니다
- 5월에 추천했던 Claude Mem(기본 사용 데이터 전송)과 Context Mode(사용 한도를 빨리 소진시키는 열린 버그)는 당분간 쓰지 말라고 합니다

## 시작하는 법

- 처음이라면 한꺼번에 설치하지 말고 지금 문제를 푸는 것만 고릅니다. 확신이 없으면 Google CLI, Apify, Scrollcraft, Humanizer가 쉽습니다
- 저장소는 무료이므로 팔 것은 그 주변에 만든 해결책입니다. 예를 들어 웹사이트 없는 기업 목록을 뽑아 샘플 페이지를 만들어 링크를 보냅니다
