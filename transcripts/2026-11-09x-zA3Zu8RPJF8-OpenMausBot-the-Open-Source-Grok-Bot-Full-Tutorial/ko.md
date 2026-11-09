---
title: "OpenMausBot — the Open-Source Grok Bot (Full Tutorial)"
author: "Full Stack"
site: "YouTube"
source: "https://www.youtube.com/watch?v=zA3Zu8RPJF8"
domain: "youtube.com"
language: "ko"
description: "👍 Like | 💬 Comment | 🔔 Subscribe | ⭐ Star the repoOpenMausBot turns Claude Code, Codex and the Grok CLI on your own machine into a roster of bots in a cha..."
word_count: 2445
---

![](https://www.youtube.com/watch?v=zA3Zu8RPJF8)

👍 Like | 💬 Comment | 🔔 Subscribe | ⭐ Star the repoOpenMausBot turns Claude Code, Codex and the Grok CLI on your own machine into a roster of bots in a cha...

## Transcript

### 연락처 넷, 사람은 하나도 없습니다

**0:00** · 채팅 사이드바에 이름이 네 개 있는데, 그중 사람은 한 명도 없습니다.

**0:04** · Brody가 방금 리서치 작업을 끝내고 결과를 보고하고 있습니다.

**0:08** · 동료가 다이렉트 메시지로 보고하는 것과 똑같은 방식입니다. 이 연락처들은 모두 실제 agent입니다.

**0:13** · 노트북 자체에서 돌아가는 Claude 또는 Codex입니다.

**0:16** · 각각 자기만의 모델, 자기만의 컴퓨터, 자기만의 앱을 가지고 있습니다. Grox Maker는 이와 똑같은 구조를 유료 플랜 안의 Grox Bot으로 판매하는데, Grox만 돌아가는 자사 클라우드에서 실행됩니다. Open Mouse Bot은 이 모든 요소를 여러분 쪽으로 옮겨 옵니다. 영상이 끝날 때쯤이면 이미 결제 중인 모델 위에서 돌아가는 bot, 그 bot이 쓸 수 있는 컴퓨터, 그리고 무언가에 손대게 하기 전에 제가 바꾸라고 권하는 설정 하나까지 갖춘 상태로 설치를 마치게 됩니다. 작업별로 Grox Bot과 Open Mouse Bot을 비교해 보고, 폐쇄형 쪽이 여전히 더 나은 두 가지로 마무리하겠습니다.

### 같은 roster, 선의 반대편

**0:50** · 두 제품은 같은 불만에서 출발합니다. 상자 하나에 assistant 하나를 넣는 것은 agent에게 맞지 않는 형태라서, 대신 roster를 두고 사람에게 하듯 메시지를 보내는 것입니다. Grox Bot은 이 roster를 공유 클라우드 컴퓨터 한 대에 올립니다. 여러분의 transcript는 그쪽 서버에 쌓이고, 선택할 수 있는 모델은 Grox뿐입니다.

**1:09** · 이를 쓰려면 월 $30의 Super Grox나 $20의 Cursa Pro에 더해, 크기가 공개되지 않은 주간 사용량 상한이 붙습니다. Open Mouse Bot은 무료입니다. 앱 안에 유료 티어가 없습니다.

**1:22** · 그래서 나가는 돈은 지금 보유한 모델 구독료뿐이고, 이는 제공자에게 직접 지불합니다. 이런 구조의 폐쇄형 제품도 이것만이 아닙니다. readme에 따르면 올해 7주 동안 폐쇄형 agent 제품 네 개가 출시되었고, Meta의 Muse, OpenAI의 Dots, Mannis의 Q가 그에 포함됩니다. 이들은 모두 모델, 컴퓨터, 여러분의 데이터를 만든 회사 쪽에 둡니다. 이 repo는 바로 그 틈을 메우려고 만들어졌고, 그래서 처음 이름도 Open Grox Bot이었습니다.

**1:50** · 그리고 사람들이 알아봤습니다. 3개월도 안 되는 사이에 약 17,000명의 개발자가 쓰기 시작했습니다.

**1:55** · 그러니 주말 실험 수준이 아닙니다. 동시에 제가 조심스럽게 접근하게 되는 속도로 움직이고 있기도 합니다.

**2:00** · 최신 릴리스가 어제 나왔고, 지난달에 익힌 설정이 그사이 바뀌었을 수 있습니다.

### 다운로드 하나, 서버는 없습니다

**2:06** · 데스크톱 빌드 안에 서버가 들어 있어서 백그라운드에서 따로 돌려 둘 것이 없기 때문에 설치는 쉬운 부분입니다.

**2:13** · Mac에서는 서명된 disk image를 applications로 끌어다 놓으면 되고, Apple Silicon과 Intel은 각각 별도 빌드를 받습니다. Windows에서는 관리자 권한 없이 사용자 단위로 설치 프로그램이 실행되지만 아직 코드 서명이 되어 있지 않습니다. 그래서 smart screen이 경고를 띄우는데, more info를 누른 뒤 run anyway를 누르면 됩니다. Ubuntu 24.04는 Debian 패키지나 app image를 받을 수 있고, 이쪽은 아직 beta로 표시되어 있으며 지원 데스크톱은 Gnome입니다.

**2:40** · 반드시 직접 준비해야 하는 것은 agent 하나입니다. Claude Code, Codex, Grok CLI 중 하나를 설치하고 로그인해 두면 model picker에 저절로 나타납니다. 터미널에서 지내는 분이라면 두 번째 방법이 있습니다. 설치 명령 하나로 path에 올라가고, 첫 실행 때 화살표 키로 access, model, phone을 고르는 과정이 안내됩니다. 그 설정에서 알아 둘 만한 점이 하나 있습니다. 붙여 넣은 API key는 keychain이 아니라, 해당 사용자만 읽을 수 있는 config 파일에 plain text로 저장됩니다.

### 노트북에서 도는 프로세스 둘

**3:11** · 실제로 무엇이 돌아가는지 보겠습니다. 프로세스는 두 개입니다. 앱은 채팅 창이고, harness server가 모든 agent를 소유합니다. 앱은 typed command를 harness에 보내고, 하나의 event stream을 돌려받아 화면에 보이는 모습으로 풀어 냅니다. harness는 localhost에서만 listen하며, 각 agent의 command line tool을 여러분의 로그인 상태 그대로 child process로 시작합니다.

**3:34** · 이 세 도구는 서로 다른 세 가지 protocol을 쓰는데, harness가 이를 모두 하나의 stream으로 번역해 대화별로 디스크에 기록합니다 \[snorts\] 그래서 driver 하나가 죽으면 전체 fleet이 같이 내려가는 대신 그 driver만 unavailable로 표시됩니다. provider를 추가하는 일이 파일 하나인 것도 같은 이유입니다. driver contract는 약 600줄이고, 새 engine은 driver 폴더의 파일 하나와 한 줄짜리 등록이면 됩니다.

**3:59** · 그마저도 필요 없는 경우가 많습니다. ACP를 쓰는 agent나 OpenAI 호환 endpoint는 코드 없이 config 항목만으로 연결됩니다. 마음에 들었던 안전 장치가 하나 있습니다.

**4:13** · 다른 engine의 API key는 custom tool의 environment에서 제거됩니다.

**4:18** · 그래서 wrapper가 여러분의 Claude나 Grok 계정으로 과금되는 일은 없습니다.

### bot마다 자기만의 두뇌를

**4:21** · Grok bot에서는 모든 bot이 Grok을 돌립니다. 여기서는 model picker 옆에 provider rail이 있습니다.

**4:28** · 그래서 글쓰기 bot은 Anthropic으로, 리팩터링 bot은 Codex로 돌릴 수 있습니다.

**4:33** · 기본값은 표시되어 있습니다. 로그인하지 않은 provider는 사유와 함께 흐리게 표시됩니다.

**4:38** · 대화 도중에 bot의 모델을 바꿀 수도 있습니다. 이미 이 중 두 곳에 돈을 내면서 하나만 골라야 하는 것이 불만이었다면, 갈아타야 할 가장 강력한 이유입니다. Grok만 쓸 생각이라면 얻는 것이 없습니다.

### bot의 컴퓨터가 있을 수 있는 세 곳

**4:51** · Grok bot들은 클라우드의 컴퓨터 한 대를 공유합니다. 여기서는 bot마다 자기 컴퓨터를 갖고, computer 패널에서 그 컴퓨터가 있을 곳을 세 가지 중에서 고릅니다. Cloud box는 프로젝트 스폰서인 Bot이 제공하는 원격 Linux 데스크톱입니다. 패널을 열면 저절로 뜨고 bot의 화면을 실시간 preview로 보여 줍니다. open desktop을 누르면 브라우저에서 직접 넘겨받아 조작할 수 있습니다. 다만 Bot은 체험 기간이 끝나면 유료 서비스라는 점은 알아 두세요.

**5:17** · 그러니 무료 앱의 그 부분은 돈이 듭니다. 두 번째 옵션은 local VM입니다.

**5:22** · 여러분의 컴퓨터에서 Docker나 Podman 컨테이너 안에 띄운 Linux 데스크톱입니다.

**5:27** · 실제 데스크톱에서는 하고 싶지 않은 다운로드나 브라우저 작업에 쓰입니다. 세 번째는 이 Mac입니다.

**5:33** · 즉 bot이 여러분의 실제 마우스를 움직인다는 뜻입니다. 빌드 시점에 파일 hash를 확인하는 pinned native driver를 통해 실행됩니다.

**5:41** · 그리고 설치된 앱은 automation 코드를 스스로 다운로드하지 않습니다. 여기서는 플랫폼이 중요합니다. macOS에서는 host control이 지원됩니다. Ubuntu의 X org 세션에서는 직접 선택해 켜는 beta입니다.

**5:54** · Wayland에서는 입력 안전성 문제가 고쳐질 때까지 꺼져 있습니다.

### 꺼져 있는 approval card

**5:59** · README가 맨 앞에 내세우는 기능입니다. shell command, 파일 편집, 질문이 채팅에 카드로 나타나고, allow나 deny를 누릅니다. 만든 쪽의 비교 글은 이를 분명하게 말합니다. 위험한 행동은 모두 사후에 감사하는 것이 아니라 여러분이 내리는 결정이라는 것입니다. 이제 approval 문서를 열어 보겠습니다. 모든 새 bot과 모든 새 대화는 full access로 시작합니다.

**6:24** · Full access \[snorts\]는 각 engine을 가장 permissive한 모드로 실행합니다. command와 편집이 그대로 통과하고, 이메일 앱이 연결된 bot은 묻도록 설정하지 않는 한 일일 한도 없이 메일을 보냅니다.

**6:35** · 그러니 readme가 내세우는 카드가 기본값으로는 꺼져 있는 것입니다.

**6:38** · 반면 호스팅되는 회사 workspace는 ask로 시작합니다. 저는 데스크톱도 그래야 한다고 생각합니다.

**6:43** · 그리고 이것이 앞서 약속드린 그 설정입니다. 고를 수 있는 단계는 네 가지입니다. Ask for approval, auto accept edits, 그리고 provider 자체 reviewer가 일상적인 행동을 통과시켜 주는 Approve for me, 마지막으로 full access입니다.

**6:57** · 제 규칙은 간단합니다. 컴퓨터나 앱을 주기 전에 모든 새 bot을 ask로 두고, 그 bot이 무엇을 하는지 지켜본 뒤에야 풀어 주세요. 어떤 단계에서도 묻지 않는 것이 하나 있습니다. bot이 자신의 파일, instructions, skills, memory를 읽는 것은 그냥 읽습니다.

**7:15** · Growth bot은 여러분의 도구에 직접 로그인합니다. Open mouse bot은 composio를 거치는데, Gmail부터 GitHub까지 500개가 넘는 앱을 갖춘 마켓플레이스입니다. OAuth로 한 번 로그인하면 \[snorts\] 그 뒤로는 모든 bot이 그 앱을 tool로 쓸 수 있습니다.

### 쓰는 앱을 연결하기

**7:31** · 그 부분에는 composio의 project key가 필요합니다.

**7:34** · 다만 일반 채팅은 key가 전혀 없어도 됩니다. key는 앱 설정에 저장되며 write only입니다. key를 한 번 저장하면 인터페이스는 configured flag만 볼 뿐 key 자체는 절대 보지 못합니다.

### 에디터에서 열어 볼 수 있는 memory

**7:47** · 회의적인 사람에게 가장 먼저 보여 주고 싶은 부분이 memory입니다. 각 bot의 memory는 여러분 디스크의 폴더에 있는 plain markdown 파일입니다. 메인 notes 파일이 있고, bot이 필요할 때 읽는 topic 파일이 있으며, bot이 한 일을 자기 말로 적은 daily log가 있습니다. 매 턴에 로드되는 것은 처음 200줄 또는 24킬로바이트뿐이고, 설정의 gauge가 그 잘리는 지점이 정확히 어디인지 보여 줍니다. notes가 길어지면 가장 오래된 항목이 archive로 옮겨져서 메인 파일이 넘치지 않고, 아무것도 조용히 버려지지 않습니다.

**8:17** · 그리고 bot이 NB 파일에서 API key를 읽고 그것을 기억하려 하면, key는 디스크에 닿기 전에 redacted marker로 바뀝니다. bot이 여러분에 대해 믿고 있는 내용을 한 줄도 빠짐없이 읽을 수 있고, 틀린 것은 아무 텍스트 에디터로 고칠 수 있으며, journal을 통해 모든 변경을 되돌릴 수 있습니다.

**8:36** · bot이 혼자 일해야 하는 것은 아닙니다. Channel은 업무, 개인, 각 프로젝트를 서로 분리해 주며, 각각 자기만의 roster, instructions, 폴더를 가집니다. auto로 설정된 room에서는 작은 decision model이 아무도 태그하지 않은 메시지를 읽고 몇백 밀리초 안에 누가 답할지 고릅니다. 점수가 0.6 이상인 bot이 없으면 그 room의 lead가 대신 답합니다.

### Room, trigger, 그리고 팀 전체

**8:59** · 그리고 모델이 1.5초보다 오래 걸리는 경우에도 lead가 답합니다.

**9:04** · 그다음은 trigger입니다. bot에게 평일 매일 9시에 내 inbox를 요약하라고 말하면, 스케줄을 스스로 설정합니다.

**9:12** · 편집하거나 일시 정지하거나 되돌릴 수 있는 카드와 함께입니다. 스케줄은 선택한 요일에 한 번 실행하거나 5분에서 1,440분 간격으로 실행합니다. 지난 실행이 아직 진행 중이면 다음 실행은 건너뛰기 때문에 느린 작업이 queue에 쌓일 수 없습니다. Webhook은 별도 포트에서 자체 소형 receiver를 갖습니다. 이 receiver는 health check와 비밀 hook 경로만 노출하고 그 밖에는 아무것도 노출하지 않으며, 이를 받으려면 앱이 실행 중이어야 합니다. 연결된 앱도 trigger를 발동시킬 수 있습니다. Gmail은 15분마다 확인하고, Slack과 GitHub 이벤트는 즉시 도착합니다.

**9:41** · markdown 파일 하나로 팀 전체를 설치할 수도 있습니다. bot, channel, playbook, routine이 함께 들어오고, connection은 여러분이 승인하기 전까지 꺼져 있으며 모든 routine은 일시 정지 상태입니다.

**9:55** · 공유도 반대 방향으로 같은 방식으로 이루어집니다. 부서 하나를 파일 하나로 export하는데, 채팅 기록, key, 모델 선택, 컴퓨터는 그 파일에 절대 들어가지 않습니다. 일부 bot은 말로 대답할 수도 있습니다. 11 Labs, Fish audio, Grok, 또는 로컬 chatterbox server 중에서 목소리를 고르면 bot에게 전화를 걸 수 있고, bot은 approval을 소리 내어 묻습니다.

### 화면 없이 구동하기

**10:17** · 지금까지의 모든 일은 창 안에서 일어납니다.

**10:19** · open mouse bot command는 같은 workspace를 스크립트로 구동합니다. YAML 파일로 팀을 적용하고, room lead에게 평이한 영어로 일 하나를 주면, 그 bot과 그 bot이 요청한 모든 팀원이 끝날 때까지 기다린 다음 그들이 만든 결과물을 export합니다. 모든 command는 JSON 문서 하나를 출력할 수 있고, exit code로 CI가 실행의 성공 여부를 알 수 있습니다. 그 안에서 마음에 든 작은 결정이 하나 있습니다. token flag가 없습니다. command line에 있는 것은 다른 프로그램이 읽을 수 있으므로, token은 오직 파일에서만 가져옵니다.

**10:52** · MCP server도 있어서 Claude desktop이나 Cursor가 여러분의 bot 목록을 보고, 작업을 보내고, 결과를 기다릴 수 있습니다.

**10:59** · 할 수 없는 것은 요청 승인, 무언가 삭제하기, credential 건드리기입니다.

**11:04** · 서버에서 돌리려면, 원하는 접속 경로인 Tailscale, 자체 도메인, 무료 tunnel 중 하나로 시작하는 명령 하나면 되고, 데스크톱 앱용 pairing link 하나를 출력합니다. 문서는 한 가지를 분명하게 못 박습니다. 포트 8,799를 직접 forward하지 마세요. 그 머신에 있는 무엇이든 소유자로 취급되기 때문입니다.

### 포기해야 하는 것

**11:24** · 그러면 갈아타면 무엇을 잃을까요? 만든 쪽의 자체 비교는 Grok bot에 두 줄을 내어 주면서, 아닌 척하는 것은 여러분의 시간을 낭비하는 일이라고 말합니다. 첫째는 관찰을 통한 학습입니다.

**11:34** · Grok bot에게 작업을 한 번 보여 주면 그것을 routine으로 저장합니다. 여기서는 routine을 직접 써야 하고, 관찰로 학습하는 것은 아직 없습니다.

**11:44** · 둘째는 노트북 덮개입니다. Grok bot의 agent는 클라우드에 살아서 밤새 계속 돕니다. 이쪽은 여러분의 컴퓨터에서 돌고, 닫힌 컴퓨터는 아무것도 돌리지 않습니다. 계속 켜 두는 머신에서 server mode로 우회할 수는 있지만, 그것은 체크박스가 아니라 여러분이 유지해야 하는 설정입니다. 휴대폰도 뒤처집니다. Grok bot은 모든 곳에 native 앱을 내놓습니다.

**12:05** · 반면 이쪽은 실제로 돌아가는 컴퓨터와 pair되는 companion 앱이 있고, 스스로 early라고 부릅니다. README의 status 줄 자체가 early but real이라고 하면서 호스팅과 모바일 연결은 아직 만드는 중이라고 적고 있습니다.

### 누가 갈아타야 할까

**12:18** · 그래서 제 결론은 이렇습니다.

**12:20** · 이미 Claude나 ChatGPT에 돈을 내고 있고 여러 agent를 여러분의 데이터를 디스크에 둔 채로 쓰고 싶다면, 이것이 써 볼 만한 도구입니다. 덮개를 닫은 상태에서도 작업이 이어져야 하거나 Grok만 쓴다면 지금 있는 곳에 머무르세요. 그리고 가장 먼저 할 일은 설치하고, 지금 돈을 내는 모델 중 아무것에나 bot 하나를 만들어서 컴퓨터를 주기 전에 ask로 설정하는 것입니다. 도움이 되었다면 maintainer들이 볼 수 있게 repo에 star를 눌러 주세요.

**12:45** · releases 페이지에서 설치 프로그램을 받으시고, 영상에 좋아요를 누르고 어떤 bot을 가장 먼저 만들지 댓글로 알려 주시고, 다음 영상을 위해 구독해 주세요.
