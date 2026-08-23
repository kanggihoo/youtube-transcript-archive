---
name: ce-compound
description: "최근에 해결된 문제를 지속 가능한 리포지토리 학습(durable repo learning) 내용으로 문서화합니다. 작업 후 학습한 내용을 기록할 때 사용합니다."
argument-hint: "[선택사항: 간단한 컨텍스트] [mode:non-interactive] [depth:lightweight|full]"
---

# /ce-compound

**결과물:** 해결된 하나의 문제가 `<root>/solutions/` 아래에 지속 가능한 학습 내용으로 작성되어 현재 트리를 기반으로 하며 다음 에이전트가 발견할 수 있게 됩니다.

**완료 조건:** 문서가 작성되거나 업데이트되고, 프론트매터 및 주장이 검증되며, 적합한 항목이 없더라도 어휘 캡처가 기록되고, 해당 모드의 완료 보고서가 출력되었을 때입니다.

**실행당 하나의 학습 내용.** 여러 문제를 발생시킨 세션은 하나의 배치 실행이 아니라 여러 번의 순차적 실행을 거칩니다 — 일괄 처리가 망가뜨리는 내용은 `references/research.md`에 포함되어 있습니다.


## 사전 조건 (Preconditions)

해결되고 정상 작동이 검증되었으며 사소하지 않은(non-trivial) 문제를 문서화합니다. 이는 권장 사항입니다: 사용자에게 질문하는 대신 세션에서 판단하세요. 세션에 그러한 문제가 분명히 없는 경우 아무것도 작성하지 않고 이유를 보고하세요.

`ce-compound`는 `CONCEPTS.md` 부트스트랩 도구가 아닙니다 — 부수 효과로 학습 자체의 영역을 시딩할 뿐 리포지토리 전체를 시딩하지 않습니다. 해당 파일을 생성하거나 부트스트랩하라는 독립 실행형 요청은 `ce-compound-refresh`로 보내고 종료하세요.

## 모드 감지 (Mode Detection)

```bash
/ce-compound [간단한 컨텍스트]
/ce-compound mode:non-interactive depth:lightweight [컨텍스트]
/ce-compound mode:non-interactive depth:full [컨텍스트]
```

호출된 인수에 `mode:non-interactive` 토큰 또는 지원 중단된 별칭 `mode:headless`가 포함되어 있거나, 호출이 비대화형 의도를 명확하게 하는 경우(호출자 또는 기존 지침이 `ce-compound`를 "헤드리스(headless)", "비대화형(non-interactively)", "무인(unattended)" 또는 "프롬프트/질문 없이(without prompts/questions)" 실행하도록 요청) **둘 중 하나**에 해당하면 비대화형 모드로 진입합니다. 두 토큰이 함께 있는 것은 충돌이 아닙니다. 단순 "자동으로(automatically)" 또는 "자동 실행(auto-run)"은 그 자체로 비대화형 신호가 **아닙니다** — 이는 프롬프트 억제가 아니라 스킬 *호출*을 의미하므로 모호하거나 신호가 없으면 대화형이 기본값입니다. `mode:` 또는 `depth:`로 시작하는 토큰은 플래그이며 컨텍스트가 아닙니다: 나머지를 간단한 컨텍스트 힌트로 취급하기 전에 이를 제거하세요. 감지되면 전체 실행에 비대화형 모드가 적용됩니다.

깊이(depth)는 명시적인 비대화형 전용 선택자이며 최대 하나의 깊이 토큰이 허용됩니다. `depth:lightweight`는 경량 모드(Lightweight Mode)로 직접 라우팅합니다. `depth:full` 또는 깊이 토큰이 없으면 자동 세션 히스토리 조사를 포함하여 전체 모드(Full Mode)로 진입합니다. 따라서 깊이 토큰이 없는 비대화형 호출은 이전과 동일하게 동작합니다. 비대화형 경량 모드는 블로킹 질문을 하지 않고 서브에이전트를 실행하지 않습니다. 호출에 알 수 없는 `depth:` 토큰, 여러 개의 `depth:` 토큰, 또는 비대화형 의도가 없는 `depth:` 토큰이 포함된 경우 추측하지 마세요: 이유가 포함된 비대화형 실패 보고서를 출력하고 `Documentation skipped`로 종료합니다.

**비대화형 모드는 아무것도 묻지 않습니다** — 이 경로에 도달한 호출자에게는 응답할 사람이 없기 때문에 어떤 단계에서도 어떤 종류의 블로킹 질문도 하지 않습니다. 어떤 단계가 실행되기 전에 취해진 종료를 포함하여 모든 비대화형 종료는 호출자가 파싱하는 터미널 신호로 끝납니다: `Documentation complete`, 또는 문서가 작성되지 않은 경우 이유와 함께 `Documentation skipped`. 대화형 모드는 해당 단계의 자체 참조 문서에서 지시하는 위치에서만 질문하며, 이는 발견 가능성 검사(Discoverability Check) 동의와 오래된 문서가 여러 개 있을 때 어떤 새로고침을 실행할지 여부입니다.

## 아티팩트 루트 (Artifact Root)

`<root>/solutions/` 경로를 처음 구성할 때 `<root>`를 결정하고 설정 대신 결정된 경로를 서브에이전트에 전달합니다.

<!-- ce-docs-root:start -->
**아티팩트 경로를 구성하기 전에 CE 아티팩트 루트 `<root>`를 확인하세요.**

- `docs_root`는 `<repo-root>/.compound-engineering/config.yaml`에서만 **읽습니다** (`<repo-root>` = `git rev-parse --show-toplevel`). `config.local.yaml`에서는 읽지 않습니다. 설정되지 않은 경우 -> 이전과 동일하게 `<root>`는 `docs`입니다.
- 설정된 값을 **검증합니다**: 심볼릭 링크가 해석된 실제 경로가 리포지토리 내부에 유지되고 리포지토리 루트도 아니며 `.git/` 아래도 아닌 리포지토리 상대 디렉토리여야 합니다. 그렇지 않은 경우 `docs_root`와 해당 값을 명시하는 오류와 함께 중단합니다. 절대 `docs`로 대체(fallback)하지 마세요.
- `<root>`를 유일한 아티팩트 위치로 **사용합니다**: 없으면 생성하고, 각 경로를 이 스킬의 자체 하위 디렉토리가 포함된 `<root>/<subdir>`로 구성하며, `docs`를 함께 읽지 마세요.
<!-- ce-docs-root:end -->

## 쓰기 경계 (Write boundary)

**오케스트레이터만 프로덕션 파일을 작성합니다.** 1단계 서브에이전트는 실행별 스크래치에만 작성하며 `<root>/`, 프로젝트 지침 파일 또는 기타 추적 경로를 절대 건드리지 않습니다.

오케스트레이터는 `<root>/solutions/` 아래에 하나의 학습 내용을 작성하고, 해당 단계가 관리하는 두 가지 유지 관리 부수 효과를 수행합니다: 어휘 캡처 중 `CONCEPTS.md` 작성, 그리고 **대화형 Full 모드에서 동의를 얻은 후에만** 프로젝트 지침 파일에 작은 발견 가능성 라인을 추가합니다. `CONCEPTS.md`가 없을 때 생성하는 것은 위반이 아니라 예상되는 동작입니다. 지침 파일은 편집만 가능하며 새로 생성되지 않습니다. 트리의 다른 어떤 것도 작성되지 않습니다: *다른* 문서에 대한 편집은 `ce-compound-refresh`의 영역이며, 이 스킬은 좁은 범위로 이를 추천하거나 호출하지만 절대 대신 수행하지 않습니다.

## 경로 선택 (Choosing the path)

**1단계 전에 `references/modes.md`를 읽으세요.** 대화형 실행은 사용자에게 묻지 않고 자체적으로 깊이를 선택하며, 해당 참조 문서에서 깊이 선택과 세션 기록 모두 질문 대상이 아닌 이유를 설명합니다. 기본값은 **Full**입니다. 실제 컨텍스트 압박이 있는 경우에만 **Lightweight**를 선택하세요: 세션이 컨텍스트 한계에 가깝거나 수정 사항이 너무 사소해서 상호 참조가 아무것도 추가하지 않는 경우입니다. 비대화형 모드에서는 선택을 건너뛰고 모드 감지(Mode Detection)에서 결정된 깊이를 실행합니다.

경량 모드는 세션 기록을 완전히 건너뜁니다. 비대화형 Full 모드는 동일한 자동 조사를 실행하며 아무것도 묻지 않으므로 비대화형 계약을 유지합니다.

## 전체 모드 (Full Mode)

다음 단계를 순서대로 실행하세요. 각 참조 문서는 이를 명시하는 단계에서 필수 읽기 자료입니다.

1. **조사(Research)** — `references/research.md`를 읽으세요.
2. **세션 히스토리(Session history)** — `references/session-history.md`를 읽고 병렬 블록을 실행한 *후에* 시작하여 두 작업이 직렬화되지 않고 겹치도록 합니다. 세션 히스토리는 1단계의 최종 입력이며 워크플로우 중단점이 아닙니다. "관련 이전 세션 없음"을 포함하여 반환되면 일시 중지하거나 요약하지 않고 곧바로 어셈블리로 이동합니다.
3. **어셈블리 및 작성(Assembly and write)** — 모든 1단계 입력을 기다린 다음 `references/assembly.md`를 읽으세요.
4. **새로고침 검사 및 발견 가능성(Refresh check and discoverability)** — `references/refresh-and-discoverability.md`를 읽으세요.
5. **선택적 향상(Optional enhancement)** — `references/enhancement.md`를 읽으세요. 대화형 전용입니다.
6. **보고서(Report)** — 해당 모드가 담당하는 형식에 대해 `references/report.md`를 읽은 다음 턴을 종료합니다.

**경량 모드(Lightweight Mode)**는 1-6단계를 단일 패스로 대체합니다. 두 모드 모두에 대해 자체 완료 출력을 소유하는 `references/lightweight.md`를 읽으세요.
