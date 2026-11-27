# PICSEL Web

포토부스를 찾고-찍고-사진 보관까지 한번에! Next.js(정적 export) + React 기반 랜딩 페이지입니다.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

| 명령              | 하는 일                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| `npm run dev`     | 개발 서버 (저장하면 바로 반영)                                          |
| `npm run build`   | 타입 검사 → 페이지마다 완성된 HTML을 `out/`에 생성 (`output: 'export'`) |
| `npm run preview` | `out/`을 배포 환경처럼 로컬에서 확인                                    |
| `npm run lint`    | ESLint (+ Prettier) 검사                                                |
| `npm run format`  | Prettier로 전체 포맷                                                    |

## 배포 (Cloudflare Pages)

| 항목                   | 값              |
| ---------------------- | --------------- |
| Framework preset       | `None`          |
| Build command          | `npm run build` |
| Build output directory | `out`           |

Node 버전은 `.node-version`(22)으로 고정합니다.

서버 없이 정적 파일만 배포합니다. 빌드하면 페이지마다 HTML이 미리 만들어지므로 (`out/service.html`, `out/features/qr.html` …) 자바스크립트를 실행하지 않는 검색엔진·카카오톡 미리보기도 페이지 내용과 제목·설명을 볼 수 있습니다.

페이지를 추가할 때:

1. `src/app/<경로>/page.tsx`를 만들고 `export const metadata = pageMetadata('<경로>')`를 둡니다.
2. `src/shared/constants/seo.ts`의 `PAGE_META`에 제목·설명을 추가합니다. `sitemap.xml`은 여기서 자동으로 만들어집니다.

- 없는 주소는 `src/app/not-found.tsx`(→ `out/404.html`)가 404로 응답합니다.
- 기존 Next 사이트 주소 `/features`는 `public/_redirects`에서 `/features/map`으로 301 이동합니다.
- `next/image`, API 라우트, 서버 액션처럼 서버가 필요한 기능은 정적 export에서 동작하지 않습니다.

## 기술 스택

Next.js 16 (App Router, 정적 export) · React 19 · TypeScript 5.9 · Tailwind CSS 4 · ESLint 9 · Prettier 3

---

## 코드 컨벤션

### 📂 1. 프로젝트 구조

```
📦 src
┣ 📂 app             # 라우트 (page.tsx = 메타데이터 + views 연결), layout, sitemap, robots, 아이콘
┣ 📂 views           # 페이지 화면 (Next의 pages 폴더 규칙과 겹치지 않도록 views)
┣ 📂 widgets         # 페이지를 구성하는 섹션 단위 UI
┃ ┣ 📂 home
┃ ┣ 📂 features
┃ ┗ 📂 layout        # Navbar, Footer
┣ 📂 shared
┃ ┣ 📂 ui            # 여러 페이지에서 쓰는 공용 컴포넌트
┃ ┣ 📂 lib           # 스크롤 등장 애니메이션 등
┃ ┗ 📂 constants     # 상수 데이터 (UPPER_CASE), SEO
┗ 📄 index.css       # Tailwind 테마 토큰 (@theme)
📦 public/assets     # 이미지 (kebab-case, WebP)
```

`@/` 경로 별칭 = `src/` (예: `import Phone from "@/shared/ui/Phone"`)

### 📝 2. 명명 규칙

#### 2.1 기본 규칙

| 스타일     | 용도                                    | 예시          |
| ---------- | --------------------------------------- | ------------- |
| PascalCase | 클래스, 인터페이스, 타입, 컴포넌트 폴더 | `TitleTitle`  |
| camelCase  | 변수, 함수, 기본 폴더                   | `titleTitle`  |
| kebab-case | 파일명(이미지)                          | `title-title` |
| UPPER_CASE | 상수변수                                | `TITLE_TITLE` |

#### 2.2 명명 세부 규칙

**Boolean 타입** — `is`로 시작

```tsx
let isAvailable = false;
```

**함수** — 이벤트 핸들러는 `handle`로 시작, 이름은 역할을 명확히 반영

```tsx
const handleClick = () => {};
const handleKeyDown = () => {};

// Bad
const a = 5;
const isPaginatable = a > 10;

// Good
const postCount = 5;
const hasPagination = postCount > 10;
```

축약은 최소한만 사용 (가독성 우선)

```tsx
// Bad
const onItmClk = () => {};

// Good
const onItemClick = () => {};
```

### 🔄 3. 순서 규칙

#### 3.1 import 순서

린트 설정을 통해 통일

#### 3.2 컴포넌트 내 선언 순서

1. `useRouter`, `useParams`, `useAppSelector`
2. `useQuery`
3. customHook
4. `useRef`
5. `useState`
6. 일반 변수들
7. mutation
8. 함수
9. 조건문
10. **`useEffect` (필수 최하단)**

### 📏 4. 개행 규칙

return문 바로 위는 한 줄 개행

```tsx
// Bad
const getResult = () => {
  ...
  return someDataInFalse;
}

// Good
const getResult = () => {
  ...

  return someDataInFalse;
}
```

### 🧰 5. 기타 컨벤션

- **ESLint와 Prettier 적용** 필수
- **화살표 함수 사용**
- **삼중 등호 연산자만 사용** (`===`)

```tsx
// Bad
if (numberB == '777') { ... }

// Good
if (numberB === 777) { ... }
```

### 📌 6. Attributes

- 인라인 스타일 사용 최소화
- Boolean 애트리뷰트 값 생략

```html
<!-- Good -->
<button disabled></button>
```

### 🔷 7. TypeScript 규칙

- `any` 사용 금지 → `unknown` 사용
- 가능한 모든 변수, 함수 매개변수, 반환 값에 명시적 타입 지정
- 재사용 가능한 타입은 별도 파일에 정의
- 객체 타입은 `interface` 사용
- Props와 State의 타입 정의 필수

```tsx
// Good
interface EpicStatusBoxProps {
  project?: ProjectData;
  statuses?: WorkspaceStatus[];
}

const EpicStatusBox = ({ project, statuses }: EpicStatusBoxProps) => {
  // ...
};

// Bad
const EpicStatusBox = ({
  project,
  statuses,
}: {
  project?: ProjectData;
  statuses?: WorkspaceStatus[];
}) => {
  // ...
};
```

### 📦 8. 상태 관리 (Zustand)

비구조화 할당 사용

```tsx
const { count, increment } = useStore();
```

### 🔄 9. 데이터 패칭 (TanStack Query)

쿼리 키는 API명과 최대한 일치하도록 설정 (GET 메소드일 때 `get` 제외)

```tsx
// getUserAPI → 쿼리 키: ['user', userId]
// patchUserAPI → 쿼리 키: ['patchUser', userId]
```

### 🌿 10. Git 규칙

#### 10.1 브랜치 전략: Git Flow

1. `main`에서 배포된 코드 관리
2. `develop`에서 새로운 기능 개발
3. 새로운 기능 개발 시 `feature` 브랜치에서 작업
4. 기능 완료 → `develop`에 Merge
5. 배포 준비 → `release` 브랜치에서 최종 수정 및 QA
6. `release` 완료 → `main`에 Merge & 배포
7. 긴급 버그 → `hotfix` 브랜치 생성 후 `main`과 `develop`에 반영

#### 10.2 브랜치 네이밍

```
main
└── develop
    └── feat/{이슈번호}    # 기능 개발
└── hotfix/{이슈번호}      # 긴급 버그 수정
```

예: `feat/23/auth/login`

#### 10.3 커밋 메시지 규칙 (picsel-app과 동일)

형식: `✨ Feat : 메시지` — 커밋할 때 commitlint가 검사하고, 형식이 틀리면 커밋이 막힙니다.

| Type          | 설명                                                    |
| ------------- | ------------------------------------------------------- |
| `✨ Feat`     | 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정 |
| `🐛 Fix`      | 기능에 대한 버그 수정                                   |
| `🚑️ Hotfix`   | 급하게 치명적인 버그를 고치는 경우                      |
| `📦️ Chore`    | 패키지 매니저 수정, 그 외 기타 수정 (ex. .gitignore)    |
| `📝 Docs`     | 문서(주석) 수정                                         |
| `🎨 Style`    | 코드 스타일, 포맷팅에 대한 수정                         |
| `💄 Design`   | CSS 수정                                                |
| `♻️ Refactor` | 기능의 변화가 아닌 코드 리팩터링 (ex. 변수 이름 변경)   |
| `🔨 Modify`   | 단순한 코드 수정 (ex. 오타, 문자열 변경)                |
| `🚚 Rename`   | 파일 및 폴더 구조 변경                                  |
| `➖ Remove`   | 파일 삭제                                               |
| `🔖 Release`  | 버전 릴리즈                                             |
| `🧪 Test`     | 테스트 코드 관련                                        |

- VS Code의 Gitmoji 확장을 쓰면 위 목록에서 골라 넣을 수 있습니다 (`.vscode/settings.json`).
- 커밋 전에 lint-staged가 `src`의 바뀐 파일에 Prettier와 ESLint를 자동 실행합니다.
- 훅(husky)은 git 저장소에서 `npm install`을 하면 자동으로 설치됩니다.

#### 10.4 전체 플로우

1. `feat` 브랜치 생성 → 작업
2. 작업 완료 & 테스트 → PR 요청
