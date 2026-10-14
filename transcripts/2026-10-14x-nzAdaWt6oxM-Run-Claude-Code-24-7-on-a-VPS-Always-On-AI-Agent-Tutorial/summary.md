---
title: "Run Claude Code 24/7 on a VPS (Always-On AI Agent Tutorial)"
source: "https://www.youtube.com/watch?v=nzAdaWt6oxM"
published: 2026-10-14
---

# Run Claude Code 24/7 on a VPS (Always-On AI Agent Tutorial)

## 한 줄 요약

Metics Media의 케일럽이 Bluehost VPS(Claude Code 사전 설치, 월 5달러 미만부터)에서 Claude Code를 Screen 안에 띄우고 /remote-control로 휴대폰 Claude 앱과 연결해, 컴퓨터를 꺼도 계속 일하는 상시 가동 에이전트를 만드는 과정을 보여 줍니다. Bluehost 후원 영상입니다.

## 왜 VPS에서 돌리는가

- Claude Code가 서버에서 돌아가므로 컴퓨터를 꺼도 작업이 계속되고, 어디서든 휴대폰으로 일을 보낼 수 있습니다
- 예시로 웹사이트 제작과 수정, 24시간 켜 두는 디스코드 봇, 쇼핑몰을 한 시간마다 확인해 멈추면 알려 주는 스크립트, 자기 전에 맡기는 큰 작업을 듭니다
- 필요한 것은 월 20달러부터인 Claude Pro 이상 구독과 VPS입니다. VPS가 Claude 요금제 외에 드는 유일한 비용입니다

## VPS 준비

- 결제 기간은 기본 2년 대신 1년을 추천합니다. 월 가격은 2년과 같고 덜 묶입니다
- 요금제는 추천으로 표시된 NVMe 4 대신 가장 싼 NVMe 2를 고르며, Claude Code가 문제없이 돌아가고 나중에 올릴 수 있다고 합니다
- 소프트웨어 단계에서 Claude Code가 자동 설치됩니다. 150달러짜리 Premium Support와 AI 크레딧은 필요 없어 건너뜁니다
- 결제 화면의 전문가용 이메일 체험은 한 달 뒤 월 2.99달러로 갱신되므로 원치 않으면 삭제합니다

## 서버 접속과 Screen

- My Plans에서 VPS가 구축되기를 기다린 뒤 Manage에서 IP와 루트 비밀번호를 확인하고 필요하면 재설정합니다
- Open Terminal로 브라우저 터미널에 로그인합니다
- 24시간 가동의 핵심은 Screen입니다. 그냥 실행하고 탭을 닫으면 Claude Code도 종료되므로 screen -S claude 안에서 시작합니다
- projects 폴더를 만들고 들어가 claude를 실행합니다

## Claude 계정 로그인

- 테마를 고르고 구독이 있는 Claude 계정 방식을 선택합니다
- 터미널의 긴 링크를 새 탭에서 열어 Authorise 후 코드를 복사하고, 터미널에 붙여 넣습니다. 브라우저 터미널에서는 클립보드 창을 거쳐 Control+Shift+V로 붙입니다
- 폴더 신뢰 질문은 기본값이 No이므로 방향키로 바꿔야 합니다
- 화면 아래의 auto mode on은 권한 확인을 Claude Code가 알아서 처리한다는 뜻이며, 서버가 내 컴퓨터와 분리되어 있어 적합하다고 말합니다

## 휴대폰 연결과 첫 작업

- /remote-control을 입력하고, 같은 계정으로 로그인한 Claude 앱에서 메뉴, Code로 가면 녹색 데스크톱 아이콘의 서버 세션이 보입니다. 서버에서 돌아가는 바로 그 세션입니다
- 앱에서 모델과 노력 수준도 바꿀 수 있습니다
- 커피숍 Sunday Coffee Club의 한 페이지 웹사이트를 만들어 서버에 공개하라고 보내자, 완료 후 링크가 휴대폰으로 오고 컴퓨터에서도 열립니다
- 소통은 휴대폰, 브라우저 터미널, Claude 데스크톱 앱 중 편한 것을 쓰면 되고, 터미널을 닫아도 인스턴스는 계속 돌아갑니다
