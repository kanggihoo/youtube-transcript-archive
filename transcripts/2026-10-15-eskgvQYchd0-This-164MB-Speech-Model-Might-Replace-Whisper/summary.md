---
title: "This 164MB Speech Model Might Replace Whisper..."
source: "https://www.youtube.com/watch?v=eskgvQYchd0"
published: 2026-10-15
---

# This 164MB Speech Model Might Replace Whisper...

## 한 줄 요약

Better Stack은 Fermion Research의 164MB 영어 음성 인식 모델 Phonon-2가 Mac에서 매우 빠르고 Whisper Turbo보다 평균 정확도도 높지만, 벤치마크 대부분이 Fermion 자체 결과이고 6배 빠르다는 비교도 신뢰하기 어려우므로 갈아타지 말고 실험해 보라고 권합니다.

## Phonon-2의 구조와 속도

- Nvidia의 2.5GB parakeet 모델에서 출발해 인코더를 다시 학습시켜 가중치를 다섯 개 값으로 제한했습니다. 다운로드 164MB, 풀면 약 178MB로 Parakeet Redux와 같은 크기입니다
- Redux가 25개 언어에 용량을 나누는 반면 Phonon-2는 영어에 집중합니다
- Fermion 주장으로는 16GB M5 MacBook Air에서 실시간의 174배(한 시간 분량을 약 21초)입니다. 정확 디코딩은 약 109배, CPU만은 약 40배, Whisper Turbo(Whisper CPP, Metal)는 17배입니다
- Python 3.10 이상과 MLX extra로 설치하고 phonon transcribe로 로컬에서 실행합니다

## Fermion 자체 벤치마크의 정확도

- 일곱 개 테스트 세트의 단어 오류율은 Phonon-2 5.21, Redux 5.69, Whisper Turbo 6.58, 원본 Nvidia 모델 4.96입니다
- 모든 수치가 Fermion에서 나왔고 Redux 자체 모델 카드의 평균은 6.55로 다릅니다. 회의 오디오 AMI에서는 Redux가 9.16 대 9.37로 앞섭니다

## 6배 빠르다는 주장에 대한 의문

- Fermion은 Redux를 서드파티 Core ML 포트(Fluid Audio)로 돌려 27.8배가 나왔습니다. 같은 포트에서 약 14배 큰 원본 Nvidia 모델이 105배였으므로 포트가 성능을 깎았을 가능성이 큽니다
- Moondream은 더 오래된 M2 MacBook Air에서 38~43배를 보고합니다. 따라서 최적화된 Redux보다 6배 빠르다는 근거는 되지 않는다는 판단입니다

## 독립 벤치마크 결과

- Open ASR 리더보드(10월 2일 추가)에서 평균은 Phonon-2 7.23, 원본 Nvidia 6.51, Whisper Turbo 8.39로 Phonon-2가 Whisper를 앞섭니다
- 그러나 잡음 섞인 음성(Urgent 2024: Whisper 13.69 대 14.90), SPGI Speech, Voice Arena Monsoon 세 곳에서는 Whisper가 이깁니다
- Redux는 리더보드에 없어 가장 작은 두 모델의 독립 비교는 없습니다

## 개발자에게 쓸모 있는 기능

- phonon listen으로 마이크 라이브 자막을 만들 수 있고, 핫워드로 이름이나 기술 용어 인식을 개선합니다. 기반 모델이 오프라인 모델이라 실시간 용도라면 지연 시간을 먼저 측정해야 합니다
- phonon serve는 포트 8000에 OpenAI 호환 받아쓰기 엔드포인트와 웹소켓 스트림을 열어, 기존 코드의 base URL만 localhost로 바꾸면 로컬 음성 인식을 쓸 수 있습니다

## 라이선스와 결론

- 코드와 CLI는 Apache 2.0, 모델 가중치는 Nvidia에서 물려받은 CC BY 4.0이라 Nvidia와 Fermion 크레딧을 표기하면 상업적 사용이 가능합니다
- 프로젝트는 약 6주 된 신생이며 Hacker News 글은 반응이 거의 없었고 주된 실사용 사례는 Fermion 자체의 Mac 받아쓰기 앱뿐입니다
- 영어 오디오, Apple 실리콘, API가 있는 빠른 로컬 받아쓰기가 필요하다면 좋은 선택지로 보이지만 아직 바꾸지 말고 실험해 보라는 결론입니다
