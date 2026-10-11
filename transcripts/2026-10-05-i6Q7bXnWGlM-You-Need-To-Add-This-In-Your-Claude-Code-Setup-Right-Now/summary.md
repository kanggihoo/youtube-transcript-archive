---
title: "You Need To Add This In Your Claude Code Setup Right Now"
source: "https://www.youtube.com/watch?v=i6Q7bXnWGlM"
published: 2026-10-05
---

# You Need To Add This In Your Claude Code Setup Right Now

## 한 줄 요약

AI LABS가 Claude Code의 숨은 설정과 명령어를 골라 소개한 영상(원문 영어)입니다. init 개선, 낡은 지침과 안 쓰는 skills 정리, 컨텍스트 확보, plan mode 복구, 여러 세션 관리, 모델 라우팅, 단축키까지 작업 방식을 바꾸는 항목을 하나씩 보여 줍니다.

## 설정을 새로 잡는 법: init, import, auto mode

- `claude code new init`을 1로 두고 claude를 실행하면 init이 바로 쓰지 않고 작업 방식(개선인지 새로 시작인지, skills와 hooks, Git 사용법, 배포 계획)을 묻습니다. 계획을 승인하면 그에 맞는 claude.md와 skills, hooks를 만듭니다. claude.md에는 에이전트가 늘 기억해야 할 것만 넣어야 하고, 코드를 읽으면 알 수 있는 내용은 넣지 않는다는 문제의식입니다
- `import`에 이전 에이전트 이름(Codex, Cursor 등)을 주면 지침 파일과 MCP 등을 보여 주고, 고른 항목을 옮기는 skill을 만들어 복사합니다
- `auto mode setup`은 프로젝트와 과거 세션 기록을 읽고 평소 허용하던 명령어에 맞게 auto mode 규칙을 고칩니다. 확인 후 승인하면 적용됩니다
- `fewer permission prompts`는 과거 세션에서 자주 쓴 읽기 전용 명령어와 도구를 allow list에 추가해 프로젝트 설정 파일에 저장합니다. auto mode의 설정을 바꾸고 싶지 않을 때의 대안입니다

## 낡은 지침과 안 쓰는 skills 걷어내기

- 모델이 좋아지면 예전 모델용 지침이 컨텍스트만 차지해 답을 나쁘게 만듭니다. `claude api` 뒤에 `prompt audit`을 붙이면 sub agent들이 설정 전체를 검사해 문제와 수정안을 보고합니다. 새 모델이 나온 직후에 가장 필요합니다
- `skill doctor`는 skill별 사용 빈도, 마지막 사용 시점, 차지하는 토큰 수를 보여 줍니다. 안 쓰는 skills는 Claude에게 지우라고 하면 됩니다. `skills` 목록에서 T를 누르면 토큰 수 오름차순으로 정렬됩니다

## 컨텍스트 확보

- 메인 .claude 폴더의 settings.json에서 `disable claude AI connectors`를 true로 하면 notion, Slack 같은 Claude 앱 커넥터(MCP 서버)가 Claude Code 세션에 로드되지 않습니다
- `enable artifact`를 false로 하면 artifacts를 만드는 도구가 로드되지 않아 컨텍스트를 아낍니다. 이 설정들은 Claude에게 추가해 달라고 해도 됩니다

## 앱의 AI 품질 확인: build eval과 hill climb

- `claude api`의 `build eval`은 앱이 여러 상황에서 잘 동작하는지 보는 테스트 세트를 한 번 만들어, 새 버전마다 같은 테스트로 검사하게 합니다
- `hill climb`는 앱을 계속 바꾸며 매번 테스트를 돌려 점수를 매기고, 이전보다 점수가 높은 변경만 남깁니다
- 둘 다 테스트마다 모델을 호출하므로 실제 API 비용이 듭니다. 앱이 모델을 호출하지 않아도 build eval은 API 없이 테스트를 계획해 줍니다

## plan mode 되살리기

- 계획 후 컨텍스트를 비우는 옵션은 `show clear context on plan accept`를 true로 하면 돌아옵니다. 비우면 계획만 컨텍스트에 남은 채 구현을 시작합니다
- 계획은 기본으로 메인 .claude의 plans 폴더에 저장됩니다. `plans directory`에 프로젝트 안 폴더 이름을 주면 그곳에 저장되어 팀과 공유할 수 있습니다

## 출력과 화면 조정

- `output style`에는 default, proactive(먼저 행동), concise(짧은 답), explanatory(설명 많음), learning(일부를 직접 쓰게 함) 다섯 가지가 있고 명령어 뒤에 이름을 붙여 바꿉니다
- control+O로 보던 추론 요약은 `show thinking summaries`를 true로 하면 다시 나옵니다
- 긴 작업 후 스크롤을 줄이려면 `TUI`를 full screen으로 설정한 뒤 `focus`를 실행합니다. 프롬프트, 답, 짧은 요약만 남고 중간 단계는 작업이 끝나면 사라집니다

## 곁다리 작업: branch, fork, subtask

- `branch`는 지금 대화를 복사해 새 세션으로 열어, 다른 아이디어를 시도하면서 원래 위치를 지킵니다. 프롬프트는 직접 입력합니다
- `fork`는 branch와 같지만 복사본을 백그라운드로 시작해 작업을 주고, 끝나면 세션이 저절로 종료됩니다. 항상 새 세션을 만듭니다
- 현재 세션 안에서 처리하려면 `subtask`가 전체 대화를 컨텍스트로 가진 sub agent를 시작합니다. 일반 sub agent는 메인 에이전트가 준 프롬프트만 알기 때문입니다

## 여러 세션 다루기

- `list agents`로 연락할 수 있는 세션을 보고, 한 세션에게 다른 세션에 메시지를 보내라고 하면 상대가 작업 중이어도 답을 받아 이어 갑니다
- `ask user question timeout`을 60초 등으로 설정하면 시간이 지난 뒤 Claude가 제안된 답을 스스로 고르고 계속합니다. 답 없이는 진행할 수 없는 질문이면 고르지 않고 계속 기다립니다
- `config`의 local notifications에서 terminal bell 같은 알림을 켜면 Claude가 끝났거나 답이 필요할 때 알려 줍니다

## 모델 라우팅으로 한도 아끼기

- `model` 명령어에 `opus plan`을 주면 plan mode에서만 opus, 나머지는 sonnet을 씁니다. sonnet은 한도를 덜 써서 특히 pro 플랜에 유리합니다
- sub agent는 `claude code sub agent model`로 작은 모델 하나를 지정하고, `claude code sub agent model force`를 1로 두면 sub agent 자신의 파일이 다른 모델을 고르지 못합니다. 파일이 고르게 하려면 force는 건너뜁니다. 두 설정 모두 settings.json에 두며 다음 세션부터 적용됩니다

## 프롬프트 단축키와 powerup

- Ctrl+S는 쓰던 프롬프트를 보관하고 입력창을 비웁니다. 다른 프롬프트를 보내면 보관한 것이 돌아옵니다
- Ctrl+Y는 지운 텍스트를 되살리고, Ctrl+_는 마지막 변경 전으로 되돌립니다
- `powerup`은 애니메이션 데모가 있는 짧은 강의로 기능을 배우게 해 줍니다
