# youtube

YouTube 영상 주소를 받아 자막을 추출해 파일로 남기는 프로젝트입니다. 

## 사용법

```bash
node extract.mjs "https://www.youtube.com/watch?v=..."   # 저장 경로를 출력
node extract.test.mjs                                    # 성공하면 ok
```

URL은 붙여넣은 그대로 주면 됩니다. zsh 이스케이프(`watch\?v\=...`), 따옴표, 앞뒤 공백, `?si=` 같은 추적 파라미터는 스크립트가 걷어냅니다.

## transcripts/

한 영상이 폴더 하나입니다. 폴더 이름은 `<게시일>-<video-id>-<제목슬러그>`이고, 날짜가 앞에 있어 `ls`만 해도 게시일 순으로 정렬됩니다.

```
transcripts/<게시일>-<video-id>-<제목슬러그>/
├── original.md   원문. defuddle 출력 그대로이며 손대지 않습니다.
├── ko.md         한국어 번역본. 번역만 담고 링크는 넣지 않습니다.
└── summary.md    요약. 형식은 templates/summary.md를 따릅니다.
```

`extract.mjs`는 `original.md`까지만 만듭니다. 나머지는 같은 폴더에 파일을 추가하세요.

게시일 뒤에 `x`가 붙은 폴더(`2026-08-23x-...`)는 defuddle이 게시일을 못 가져와 **받은 날짜로 대체**한 것입니다. 실제 게시일이 아닙니다.

## summary.md

프론트매터와 본문 형식은 [templates/summary.md](./templates/summary.md)를 따릅니다. 매번 다르게 쓰지 않습니다.

## refs/

영상과 별개로 존재하는 외부 자료를 둡니다. 영상 폴더 안에는 넣지 않습니다 — 여러 영상이 같은 자료를 참조할 때 복사본이 생기기 때문입니다.

```
refs/
├── README.md    이 폴더가 무엇이고 자료를 어떻게 추가하는지
├── index.md     자료별 출처와 어느 영상과 연결되는지  ← 연결의 원본
└── compound-engineering-plugin/
```

연결은 양쪽에 겁니다.

- **자료 → 영상**: `refs/index.md`에 자료별로 참조하는 영상을 나열합니다
- **영상 → 자료**: `summary.md` 프론트매터의 `refs`에 폴더 이름을 적습니다

읽기용 자료입니다. 이 프로젝트의 스킬로 활성화하지 않습니다.
