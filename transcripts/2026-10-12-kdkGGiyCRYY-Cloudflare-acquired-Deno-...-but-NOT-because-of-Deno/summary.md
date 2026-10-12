---
title: "Cloudflare acquired Deno ... but NOT because of Deno"
source: "https://www.youtube.com/watch?v=kdkGGiyCRYY"
published: 2026-10-12
---

# Cloudflare acquired Deno ... but NOT because of Deno

## 한 줄 요약

Cloudflare가 Deno 팀을 인수한 목적은 런타임이 아니라 Cloudflare를 셀프 호스팅하게 해 주는 celld이며, Deno 런타임은 1년 뒤 개발이 종료됩니다.

## Deno 런타임과 Deploy의 종료

- Deno 팀 전체가 Cloudflare에 합류하고, 런타임은 월간 릴리스로 1년만 지원한 뒤 개발을 끝냅니다. 오픈소스로는 남지만 이어받을 사람이 있어야 합니다
- Deno Deploy는 6개월 더 운영한 뒤 종료합니다
- 남는 런타임은 Node.js, Bun, Cloudflare Workers를 구동하는 workerd입니다

## celld가 실제 목적

- celld는 셀프 호스팅 Cloudflare입니다. 컨테이너, D1, cron 트리거, Workers와 dynamic workers, KV, queues, durable objects를 지원하고 상태는 S3에 저장합니다
- 내 VPS에 설치해 고정 비용으로 쓰고, 데이터 위치를 직접 정할 수 있다는 점이 장점입니다. 대신 서버 운영은 직접 해야 합니다
- 발표자의 해석: 경쟁 제품을 사는 것으로 보일 수 있지만, Cloudflare Workers용으로 맞춰 만들어야 해서 생기는 락인 우려에 "언제든 celld로 나갈 수 있다"고 답하려는 것입니다. 대부분은 운영이 편한 Cloudflare에 남을 것이라는 계산입니다
- celld를 없애도 AI 에이전트 시대에는 일주일이면 비슷한 것이 다시 나온다고 보기 때문에 폐기하지 않을 것이라고 봅니다

## Deno가 정체된 이유

- State of JavaScript 설문 사용률은 2020년 6%에서 12%로 두 배가 됐지만, Bun이 1년 만에 추월했고 Node.js는 90%입니다
- Ryan Dahl 본인 말로 Deno는 Node.js 호환성의 함정에 빠져 원래 아이디어를 끝까지 밀지 못했습니다
- AI 시대에는 런타임을 갈아타기도, 직접 호스팅하기도 쉬워져 프레임워크나 런타임 회사가 호스팅 서비스로 돈 버는 길이 좁아졌고, Bun이 Anthropic에 인수된 것도 같은 맥락이라고 봅니다
- Deno 사용자는 AI의 도움으로 Node.js나 Bun으로 옮길 수 있지만 1년 뒤 사라진다는 점은 예상 밖이라고 말합니다
