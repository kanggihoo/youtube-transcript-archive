---
title: "Gemini 4 Argon, Google's STRONGEST Model Is Here, This Changes Everything..."
source: "https://www.youtube.com/watch?v=JawnbowIuzE"
published: 2026-09-30
---

# Gemini 4 Argon, Google's STRONGEST Model Is Here, This Changes Everything...

## 한 줄 요약

몇 달 지연 끝에 나온 구글 딥마인드의 Gemini 4 Argon은 Vals 인덱스, 자동화 벤치, Deep SWE 등 다수 벤치마크에서 Opus 5.5와 GPT6 Astra를 앞서며 리더보드에 복귀했지만, 아직 사이버 보안 파트너에게만 공개되어 있고 구글 내부 직원들은 실제 코딩 작업에서는 성능이 떨어진다고 말한다는 Bloomberg 보도도 있다.

## 지연 끝에 나온 Gemini 4

- 올해 초 Gemini 3.1 Pro 이후 Flash 모델만 나왔고, 6월로 약속했던 Gemini 3.5 Pro는 7월과 8월에도 나오지 않았다. 결국 성능이 부족하고 경쟁력이 없다며 폐기하고 Gemini 4에 집중하겠다고 밝혔다
- 이후 새 Flash 모델이 나왔고, LMArena에서 Gemini 3.8 Flash가 더 강한 모델(Gemini 4)로 라우팅된다는 유출이 있었다
- 이번 주 OpenAI 개발자 행사 다음 날 Gemini 4 Argon이 공개됐고, 구글은 이를 프런티어 지능의 다음 시대라고 부른다

## 내부 사용과 단계적 공개

- 구글 팀이 내부에서 이미 쓰고 있다. 양자 알고리즘 최적화, 메모리 효율화, 코드베이스 작업, 구글 인프라의 C/C++에서 Rust로의 이전 등이다
- 새 프런티어 모델이라 미국 정부와의 협력과 사전 출시 접근을 거쳐 단계적으로 접근을 넓힌다. 현재는 사이버 방어자를 위한 Fairwind 프로그램으로만 이용 가능하다

## 가격: 소개 가격과 이후 가격

- 현재는 백만 입력 토큰당 2달러, 출력 10달러로 Sonnet 5.5, GPT6 Soul과 같은 수준이다
- 블로그 하단의 추가 정보에 따르면 소개 기간(종료 시점 미정) 이후 4달러와 20달러가 되어 Opus 5.5 수준이 된다. 그래도 Fable 5.1이나 GPT6 Astra만큼 비싸지는 않다
- 할인이 끝나면 Sonnet 5.5가 67점 대 68.9점으로 비슷한 결과를 더 싸게 내므로 그리 나빠 보이지 않는다

## 벤치마크 결과

- **자동화 벤치**: Argon 51.3%, Fable 5.1 31.4%, Opus 5.5 42.5%. Gemini가 강점으로 알려지지 않았던 분야다
- **Vals 인덱스**: 법률, 금융 등 지식 산업 작업을 재는 지수에서 68.9%로 최고이며 다음은 Opus 5.5의 67%다
- **에이전트 코딩**: Deep SWE에서 77.9%로 1위(Opus 5.5는 74.2%), Vibe Code Bench에서 91.9%(Opus 5.5 90.3%, Astra 89.6%)다
- **1위가 아닌 곳**: Frontier SWE에서는 Astra 65.5%, Opus 5.5 62.3%에 이어 Fable 다음인 55%로 최하위다. Terminal Bench, Poster Bench, Terminal Bench Science 01에서도 1위가 아니다
- **멀티모달**: Gmail과 휴대폰 등에 적용되는 모델이라 멀티모달 이해가 중요한데, 차트 읽기와 LVBench에서 91.7%로 1위다. 다른 모델은 80점대이고 다음은 Astra의 87.5%다

## Artificial Analysis에서의 큰 도약

- 지능 지수에서 1위는 여전히 Opus 5.5(58점)이고 Argon은 53점으로 사실상 세 번째다
- 직전까지 구글 라인업은 Kimi K3, GLM 5.3 Flash, Muspark, Grok 4.7 같은 모델에 밀렸다. Gemini 3.1 Pro가 30점, 최신 Flash가 41점이었으므로 30에서 53은 큰 도약이다
- 할인 가격 기준이지만 지능당 비용이 낮아, 일부 영역에서는 Fable 5.1과 Opus 5.5보다 싼 비용에 더 높은 점수를 낸다
- 발표자는 Opus 5.5와 Sonnet 5.5가 이미 Fable 5.1보다 낫기 때문에 Fable 5.1도 업데이트 시점이 됐을 것이라고 본다. 또 연구소들이 모델에 코드명 같은 이름을 붙이는 흐름이 보이고, Argon이라는 이름이 Gemini 4 Pro보다 낫다고 말한다

## 내부 직원들의 엇갈린 평가

- Bloomberg에 따르면 구글 내부 직원들은 벤치마크 성적에 비해 실제 업무에 투입했을 때 성능이 떨어지고 특정 코딩 작업에서 어려움을 겪는다고 한다
- 발표자는 이것이 긍정적인 신호는 아니라면서, 공개 후 프로덕션에서 유지될지는 곧 알게 될 것이고 출시 전에 개선될 수도 있다고 말한다
- 오늘은 오랜만에 구글 딥마인드의 새 모델이 나온 것만으로 기쁘다는 입장이다

## 초기 데모

- 공개된 데모 출력은 모델이 아직 대부분에게 공개되지 않아 LMArena에서 이용할 수 있던 체크포인트로 만든 것이다
- 기계식 벌 같은 출력물을 보고 Gemini 3.8 Flash가 만들 수준이 아니며 지금까지 본 것에서 큰 개선이라고 평가한다
