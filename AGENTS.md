# youtube

YouTube 영상 주소를 받아 자막을 추출해 파일로 남기는 프로젝트입니다. 

## 사용법

```bash
node extract.mjs "https://www.youtube.com/watch?v=..."   # 저장 경로를 출력
node --env-file=.env sync.mjs                            # 재생목록에서 안 받은 것만 받기
node --env-file=.env sync.mjs --dry-run                  # 받을 목록만 출력
node --env-file=.env sync.mjs --clean                    # 받은 뒤 재생목록에서 삭제
node extract.test.mjs && node sync.test.mjs              # 성공하면 ok
node viewer.mjs                                          # transcripts/ 뷰어를 브라우저로 연다 (삭제 가능)
```

URL은 붙여넣은 그대로 주면 됩니다. zsh 이스케이프(`watch\?v\=...`), 따옴표, 앞뒤 공백, `?si=` 같은 추적 파라미터는 스크립트가 걷어냅니다.

## sync.mjs

재생목록을 훑어 `transcripts/`에 없는 영상만 `extract.mjs`로 넘깁니다. 처리 여부는 폴더 존재로 판단하니 상태 파일이 없습니다.

API 키와 재생목록 ID는 `.env`에 둡니다. 형식은 [.env.example](./.env.example)을 보세요.

공식 API는 목록만 받아옵니다. **자막은 API로 받을 수 없습니다.** `captions.download`는 영상 편집 권한이 있는 사람만 호출할 수 있어서 남의 영상에는 403이 떨어집니다. 자막은 계속 defuddle이 맡습니다.

- 하루 할당량 10,000 units, 태평양시 자정 리셋. `playlistItems.list`는 호출당 1 unit이라 영상 200개 재생목록이 4 units입니다. 걸릴 일이 없습니다
- `search.list`는 하루 100회짜리 별도 버킷을 씁니다. 쓰지 마세요. 재생목록 ID로 직접 접근하면 됩니다
- 할당량 초과는 429가 아니라 403 `quotaExceeded`로 옵니다
- **나중에 볼 동영상(WL)과 시청 기록(HL)은 API로 못 읽습니다.** 2016년 9월부터 빈 목록이 옵니다. 일부 공개 재생목록을 따로 만들어 쓰세요
- 폴더명의 게시일은 defuddle에서 옵니다. API에서 가져오려면 `contentDetails.videoPublishedAt`을 쓰세요. `snippet.publishedAt`은 재생목록에 담은 시각이라 다릅니다

### --clean과 OAuth

`--clean`은 받아온 영상을 재생목록에서 지웁니다. 재생목록을 처리 대기함으로 쓰는 방식입니다.

쓰기 작업이라 API 키로는 안 됩니다. `playlistItems.delete`는 `youtube.force-ssl` 범위의 OAuth를 요구하고 호출당 50 units입니다. 하루 200개까지입니다.

준비는 한 번만 합니다.

1. Cloud Console에서 OAuth 클라이언트 ID를 만듭니다. 애플리케이션 유형은 **데스크톱 앱**. 리디렉션 URI는 등록하지 않아도 됩니다. 데스크톱 클라이언트는 루프백 주소를 포트 상관없이 허용합니다
2. Google Auth Platform의 Audience(대상)에서 게시 상태를 **프로덕션**으로 바꿉니다. 개인용 앱은 검증 없이 사용할 수 있지만 미확인 앱 경고와 사용자 수 제한이 적용될 수 있습니다. Testing으로 두면 이 프로젝트의 권한으로 발급한 refresh token은 7일 후 만료됩니다. Testing에서 이미 발급했다면 프로덕션 전환 후 다시 인증합니다
3. `.env`에 `YOUTUBE_CLIENT_ID`와 `YOUTUBE_CLIENT_SECRET`을 넣습니다
4. `node --env-file=.env auth.mjs`를 실행하고 출력된 주소를 브라우저에서 열어 승인합니다. 스크립트가 `YOUTUBE_REFRESH_TOKEN`을 `.env`에 자동 저장합니다

`YOUTUBE_REFRESH_TOKEN`이 있으면 목록을 읽을 때도 그 토큰을 씁니다. 그러면 비공개 재생목록도 읽힙니다. API 키만 있으면 공개와 일부 공개만 됩니다.

`sync.mjs`는 실행할 때 refresh token으로 access token을 자동 발급받습니다. 매번 브라우저 인증을 할 필요는 없습니다. 다만 refresh token도 권한 철회, 6개월 미사용, 발급 한도 초과, 계정 정책 등의 이유로 무효화될 수 있습니다. `invalid_grant`가 나오면 `auth.mjs`로 재인증합니다.

OAuth 범위는 `https://www.googleapis.com/auth/youtube.force-ssl`입니다. 특정 재생목록 하나로 제한되는 권한은 아니며, 처리 대상은 `.env`의 `YOUTUBE_PLAYLIST_ID`로 지정합니다. API는 일반 재생목록 항목 추가·수정·삭제를 지원하지만 현재 스크립트는 목록 조회와 `--clean`의 항목 삭제만 구현합니다. `--clean`의 완료 기준은 **자막 저장**이며 번역·요약 생성이나 시청 가치 판정 완료를 뜻하지 않습니다.

공식 문서: [토큰 갱신과 만료](https://developers.google.com/identity/protocols/oauth2/), [개인용 앱의 검증 예외](https://support.google.com/cloud/answer/13464323), [재생목록 항목 삭제](https://developers.google.com/youtube/v3/docs/playlistItems/delete).

삭제 전에 결과를 확인합니다. `extract.mjs`가 0으로 끝나고, 출력한 경로에 파일이 있고, 그 안에 `## Transcript`가 있어야 지웁니다. 하나라도 어긋나면 항목을 그대로 두고 실패로 셉니다.

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

`summary.md`를 새로 쓰거나 수정할 때는 먼저 [templates/summary.md](./templates/summary.md)를 읽고 시청 가치 판정, 근거 검토, 두괄식 요약 규칙을 적용합니다. 프론트매터에 시청 가치와 짧은 이유를 남깁니다.

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
