---
title: "The Home Repo Pattern: Run agents across ALL your repos"
source: "https://www.youtube.com/watch?v=hWe-j78vNpc"
published: 2026-11-12
watch: "요약만"
reason: "여러 repo를 다루는 에이전트 설정을 'home repo' 하나로 모으는 아이디어는 명확하지만, 설명이 개념 소개와 화면 투어에 머물러 요약으로 충분하다."
---

# The Home Repo Pattern: Run agents across ALL your repos

## 결론부터

Matt Pocock은 skills, steering 파일(agents.md), wiki, 커스텀 도구를 repo마다 복제하는 대신 하나의 "home repo"에 모아 두고 항상 그 안에서 에이전트를 실행하라고 제안한다. 여러 repo를 건드려야 하는 조직에서 monorepo가 불가능할 때 최선의 방법이라는 것이 그의 결론이다.

## 핵심 내용

- **문제 제기 (0:00-2:07):** 발표자는 storefront, payments API 등 repo가 여러 개일 때 한 repo 안에서 에이전트가 여러 디렉토리를 동시에 수정하는 것은 쉽다고 본다. 어려운 점은 skills, agents.md, wiki 링크를 모든 세션에서 쓰게 하는 것이다. repo마다 복제하면 30~40개를 동기화해야 하고, 사용자 디렉토리(user directory)에 두면 팀이 볼 수 없어 점차 어긋난다고 말한다.
- **home repo 해결책 (2:07-3:43):** 모든 skills, steering 파일, wiki, 맞춤 도구를 한 repo에 두고 에이전트를 항상 거기서 실행한다. 비공개 skills도 여기 두며, settings.json을 버전 관리해 설정이 조직 전체에 퍼지게 한다.
- **구조와 확장 (3:43-5:13):** claw.md/agents.md에 각 repo로 가는 경로를 적는다. 새 머신에서는 에이전트가 없는 repo를 clone하고, 에이전트가 동시에 돌면 worktree를 쓴다. 발표자는 20~40개 repo까지는 이대로 되고, 400개 규모에서는 frontend/backend/internal tools처럼 그룹으로 나눠 점진적 공개(progressive disclosure)를 쓰라고 한다.
- **monorepo와의 관계 (5:13-5:59):** 발표자는 Turborepo DevRel 출신으로 monorepo를 선호한다고 밝힌다. 하나로 합칠 수 있으면 그게 최선이고, 공개/비공개 혼재 같은 내부 사정으로 불가능할 때 home repo를 쓴다고 한다.
- **개인 wiki와 맞춤 도구 (5:59-7:49):** home repo가 Karpathy 스타일 LLM wiki(markdown)를 담는 곳이 되었다고 한다. `wiki help`에 Gmail, Slack, Discord, YouTube, GitHub, Gcal, Cold Turkey 등과 연동되는 도구가 있고, Discord 메시지를 찾아 crash course repo의 수정으로 이어가는 식으로 쓴다고 설명한다.
- **시작 방법 (7:49-8:40):** 그가 쓴 글 "Home Repo Pattern" 하단에 설정용 프롬프트가 있다. 이 프롬프트가 환경을 질문하고 관리할 repo를 파악해 home repo로 옮기는 작업을 시작해 준다고 한다. 영상 후반에는 자신의 AI coding crash course 홍보가 짧게 나온다.

## 배울 점과 적용 조건

- repo 전체 목록과 경로를 agents.md 한 파일에 적고, 에이전트가 없는 repo는 clone, 동시 작업은 worktree로 처리하게 하는 방식은 바로 따라 할 수 있다. 전제는 에이전트가 여러 디렉토리에 접근할 수 있는 도구(발표자 맥락에서는 Claude Code류)다.
- 규모가 커지면 agents.md를 그룹별로 나눠 계층화한다. 영상은 20~40개와 400개 두 지점만 언급하고 중간 기준은 주지 않는다.
- home repo에 비공개 skills와 비즈니스 데이터가 모이므로 repo 접근 권한 관리가 선행돼야 한다(작성자의 보충).

## 근거와 한계

- **영상의 근거:** 발표자 본인의 home repo 화면 투어와 사용 경험. 벤치마크, 비교 실험, 실패 사례는 없다.
- **평가:** 중복 관리 비용이라는 문제 설정은 설득력 있지만, 효과(시간 절감, 오류 감소)는 수치 없이 개인 경험에 의존한다. 다른 대안(git submodule, 팀 공용 plugin/skills 배포 등)과의 비교도 없다. 조직·팀 단위 협업에서 home repo의 권한과 변경 관리는 다루지 않는다.
- **확인 범위:** 영어 자막 기반 평가. 화면 투어는 자막으로 확인할 수 없다. 영상이 언급한 글 [The Home Repo Pattern](https://www.aihero.dev/the-home-repo-pattern)의 설정 프롬프트는 사용자가 붙여 넣은 본문으로 확인했고, 영상의 설명과 일치한다. 프롬프트는 (1) repo 인벤토리, (2) 공유 자료 분류(shared/duplicate/repo-specific/installed), (3) 이동 계획 합의, (4) 새 로컬 branch에서 적용 순으로 진행하며, 계획을 승인하기 전에는 읽기만 한다. 이 프롬프트를 실제로 실행해 효과를 검증하지는 않았다.
- **홍보성:** 마지막에 자신의 AI coding crash course를 소개한다. 기술 설명 자체에는 영향이 없다.
