---
title: "I Wish Someone Showed Me This DevOps Roadmap When I Started"
source: "https://www.youtube.com/watch?v=SvjjPxwfhyg"
published: 2026-09-10
---

# I Wish Someone Showed Me This DevOps Roadmap When I Started

## 한 줄 요약

무작정 수많은 툴을 나열식으로 공부하지 말고, 클라우드 기본부터 AI 활용까지 단계별 마일스톤을 검증하며 공통 기반을 먼저 다진 뒤 원하는 전문 트랙(DevOps, SRE, MLOps 등)으로 수직 확장해야 한다.

## 9단계 기초 로드맵과 검증 마일스톤

| 단계 | 핵심 학습 영역 | 완료를 증명하는 마일스톤 |
|---|---|---|
| **1. Cloud Fundamentals** | AWS나 Azure 중 단 1개 집중 (컴퓨팅, 스토리지, 네트워크, DB, 보안) | 단순 앱을 클라우드에 배포하고, 사용 서비스 구조와 선정 이유를 설명하기 |
| **2. Linux** | CLI, 파일 권한, 프로세스, 서비스, 네트워크, 패키지 관리, 트러블슈팅 | GUI 없이 터미널만으로 클라우드 서버에 접속해 로그 확인 및 장애 직접 해결하기 |
| **3. Bash & Automation** | 반복 작업을 셸 스크립트로 자동화 | 수동 설정/유지보수 작업 하나를 끝까지 자동 실행되는 Bash 스크립트로 전환하기 |
| **4. Git & GitHub** | 브랜치, 커밋, 병합, 원격 저장소 협업 워크플로 | 코드, 스크립트, 설정, 문서가 체계적으로 버전 관리된 저장소 완성하기 |
| **5. Python** | 개발자 수준이 아닌 스크립팅, API 연동, 데이터/파일 처리 중심 | API 호출, 데이터 가공, 클라우드 리소스 관리 중 하나를 파이썬으로 자동화하기 |
| **6. Docker** | 이미지, 컨테이너 라이프사이클, 볼륨, 네트워크 격리 | 내 애플리케이션을 컨테이너화하여 다른 머신에서도 동일하게 구동시키기 |
| **7. Kubernetes** | 컨테이너 배포, 서비스 노출, 스케일링, 오케스트레이션 | 컨테이너를 쿠버네티스에 배포하고 롤링 업데이트와 오토스케일링 실증하기 |
| **8. Terraform (IaC)** | 콘솔 클릭 대신 선언적 코드로 인프라 정의 및 프로비저닝 | 프로젝트 전체 인프라를 Terraform 코드로 재현 가능하게 재구축하기 |
| **9. AI Fundamentals** | LLM API 연동, 임베딩, RAG 기초 및 일상 엔지니어링 도구화 | 프로젝트에 작은 AI 기능을 붙여보고 입력/출력 한계와 동작 원리 파악하기 |

## 공통 기반 이후의 세부 전문화 트랙

- **DevOps Engineer**: GitHub Actions, Jenkins, GitLab, Argo CD 등 시장 수요에 맞춘 CI/CD 파이프라인 구축 역량 집중
- **SRE (Site Reliability Engineer)**: Prometheus, Grafana, Datadog, ELK 스택을 통한 모니터링, 분산 추적, 알림, 옵저버빌리티 심화
- **Platform Engineer**: Backstage, Crossplane, Argo CD 등을 활용한 내부 개발자 플랫폼(IDP) 엔지니어링
- **Cloud Security / DevSecOps**: 클라우드 거버넌스, 인프라 보안 검사, 파이프라인 보안 통합
- **MLOps**: 공통 인프라·파이썬·컨테이너 기술을 머신러닝 모델 서빙 및 파이프라인에 적용

## 순서를 건너뛰면 실패하는 이유

리눅스와 컨테이너를 모른 채 쿠버네티스를 시작하거나, Git과 스크립트 자동화를 모른 채 고급 CI/CD 도구부터 만지면 개념이 겉돌게 됩니다. 가로 방향의 공통 인프라 기초를 단계별 실습으로 먼저 다진 뒤, 원하는 직무에 맞춰 수직으로 특화해야 학습 누수를 막을 수 있습니다.
