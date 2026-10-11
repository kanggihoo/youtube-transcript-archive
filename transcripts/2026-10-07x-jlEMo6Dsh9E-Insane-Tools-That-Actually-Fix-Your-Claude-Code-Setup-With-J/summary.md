---
title: "Insane Tools That Actually Fix Your Claude Code Setup With Jev"
source: "https://www.youtube.com/watch?v=jlEMo6Dsh9E"
published: 2026-10-07
---

# Insane Tools That Actually Fix Your Claude Code Setup With Jev

## 한 줄 요약

AI LABS가 테스트 끝에 추린, Jev(예/아니오 판단 모델)를 Claude Code에 붙여 쓰는 도구 여덟 가지(Toolgate, Abide, Jev Browser, Jev Ble, Jev Steer or Q, Compact Advisor, Quicksilver, Jev SEO) 소개 영상입니다. 위험한 명령 차단, 규칙 준수, 브라우저 테스트, 완료 검증, 메시지 처리, compact 시점, 파일 검색, SEO 점검을 Jev가 판단하게 합니다.

## 막는 도구: Toolgate와 Abide

- **Toolgate**: Claude가 행동하기 전에 Jev에게 허용 여부를 물어 auto mode보다 엄격하게 막습니다. 되돌릴 수 없는 변경, prompt injection, 데이터를 외부로 보내려는 도구, 부여되지 않은 권한 사용, 작업 범위 밖의 행동이 대상입니다. 테스트에서 폴더 삭제에 파괴적 위험도 77%를 매겨, bypass permissions 모드인데도 차단했습니다. 단점은 정말 지워야 하는 것도 못 지우게 해서 그 부분은 직접 처리해야 한다는 것입니다
- **Abide**: Claude의 모든 편집을 프로젝트 규칙과 대조하고 어기면 Claude가 고치게 합니다. `agents.md`와 `claude.md`를 예/아니오 질문으로 된 rubric으로 바꾸며, 발표자의 rubric은 규칙 49개 중 33개가 Jev의 판단이 필요했습니다. Claude는 모든 플래그를 고쳐야 작업을 끝낼 수 있습니다

## 확인하는 도구: Jev Browser와 Jev Ble

- **Jev Browser**: Claude가 브라우저 테스트를 하고 Jev가 예/아니오를 판단하는 오픈소스 도구입니다. 설치 명령이 구버전을 깔아서 Claude에게 최신 버전 설치를 시키는 편이 낫고, 기본은 TypeSafe 키만 지원해 다른 provider는 Claude에게 수정을 시켜야 합니다. MCP로 제공되며 약 2분 만에 버그 목록 보고서를 받았습니다
- **Jev Ble**: 에이전트가 끝나지 않았는데 끝났다고 하는 문제를 막는 플러그인입니다. Ralph Loops와 비슷하지만 Jev가 대화를 읽고 완료의 증거를 찾아, 없으면 증명을 요구하고 다시 프롬프트합니다. 확신도 threshold(발표자는 75%)와 decision log를 설정할 수 있습니다

## 흐름을 다루는 도구: Jev Steer or Q와 Compact Advisor

- **Jev Steer or Q**: 작업 중에 보낸 새 메시지를 steer(현재 단계 끝나면 전달, Claude Code 기본 동작), queue(모든 작업이 끝난 뒤 새 요청으로 전달), interrupt(즉시 중단) 중 하나로 Jev가 분류합니다. Jev가 90% 이상 확신할 때만 동작하며 Codex와 Claude Code에서 쓸 수 있습니다. 테스트에서 랜딩 페이지 작업 중 색상 테마 변경 요청은 급하다고 판단해 바로 전달했습니다
- **Compact Advisor**: 매 응답 후 지금 compact해도 중요한 컨텍스트를 잃지 않는지 Jev로 판단해 알려 줍니다. 응답 끝에 질문이 있으면 권하지 않고, 약 100,000 토큰을 쓰고 이어 갈 내용이 없으면 권했습니다. 세션의 세부 내용이 더 잘 보존되었다고 합니다

## 아끼는 도구: Quicksilver

- Claude 대신 Jev가 파일을 읽어 후보 목록을 추리고, Claude는 그 목록만 읽습니다. 토큰이 절약되고 컨텍스트 윈도우도 깨끗하게 유지됩니다. 발표자의 앱에서는 약 2초에 파일 37개를 확인해 Claude가 약 67,000 토큰을 읽지 않아도 되었습니다

## 점검하는 도구: Jev SEO

- 웹 주소를 주면 링크를 따라 모든 페이지를 방문해 고정 검사(깨진 링크, 사이트맵 등)를 하고, 모든 페이지에 같은 질문(유용한지, 제목이 맞는지 등)을 Jev에게 던집니다. 영역별 점수가 담긴 PDF 보고서와 체크 가능한 Excel 트래커를 만들며, skill로 설치해 `/jv SEO`로 실행합니다. 테스트한 사이트는 약 76점이었고 AI 검색 준비도도 측정합니다

## 참고

- 영상 중간에 스폰서(Dodo, Dakota 웹 스크래핑 skill) 광고 구간이 있고, 설치 명령과 repo 주소는 영상 화면에만 나옵니다
