
# HW-FE-Task

## 개요

이 프로젝트는 Vue.js를 사용하여 개발된 프론트엔드 애플리케이션입니다.
개인 정보, 주소 정보, 결제 정보 등의 등록 절차를 위한 다양한 구성 요소와 뷰를 포함하고 있습니다.

## 목차

- [사전 준비](#사전-준비)
- [설치](#설치)
- [프로젝트 실행](#프로젝트-실행)
- [프로젝트 구조](#프로젝트-구조)
- [스크립트](#스크립트)
- [패키지 설명](#패키지-설명)
- [기여](#기여)
- [라이센스](#라이센스)

## 사전 준비

시작하기 전에 다음 요구 사항을 충족했는지 확인하세요:

- **Node.js** (버전 14.x 이상)
- **npm** (버전 6.x 이상)

## 설치

1. 리포지토리를 클론합니다:
   ```sh
   git clone https://github.com/your-username/hw-fe-task.git
   ```
2. 프로젝트 디렉토리로 이동합니다:
   ```sh
   cd hw-fe-task
   ```
3. 종속성을 설치합니다:
   ```sh
   npm install
   ```

## 프로젝트 실행

프로젝트를 로컬에서 실행하려면 다음 명령어를 사용하세요:
```sh
npm run dev
```
이 명령어는 개발 서버를 시작하고, 웹 브라우저에서 `http://localhost:3000`으로 애플리케이션을 확인할 수 있습니다.

## 프로젝트 구조

```
hw-fe-task/
├── public/
│   ├── favicon.ico
├── src/
│   ├── assets/
│   │   ├── 404page.jpg
│   │   ├── base.css
│   │   ├── main.css
│   ├── components/
│   │   ├── AddressInfo.vue
│   │   ├── Complete.vue
│   │   ├── PaymentInfo.vue
│   │   ├── PersonalInfo.vue
│   ├── router/
│   │   ├── index.js
│   ├── store/
│   │   ├── user.js
│   ├── utils/
│   │   ├── rules.js
│   ├── views/
│   │   ├── NotFoundView.vue
│   │   ├── RegisterView.vue
│   ├── App.vue
│   ├── main.js
├── .gitignore
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```

### 주요 파일 및 디렉토리

- **public/**: 정적 자산을 포함합니다.
- **src/**: 애플리케이션의 주요 소스 코드를 포함합니다.
  - **assets/**: 스타일 시트와 이미지.
  - **components/**: 애플리케이션에서 사용되는 Vue 구성 요소.
    - `AddressInfo.vue`: 주소 정보 입력을 위한 컴포넌트
    - `Complete.vue`: 완료 페이지를 위한 컴포넌트
    - `PaymentInfo.vue`: 결제 정보 입력을 위한 컴포넌트
    - `PersonalInfo.vue`: 개인 정보 입력을 위한 컴포넌트
  - **router/**: 라우팅 구성.
  - **store/**: 상태 관리를 위한 Vuex 스토어.
    - `user.js`: user form 정보
  - **utils/**: 유틸리티 함수와 유효성 검사 규칙.
    - `rules.js`: user form의 validation 체크를 위한 함수와 데이터 정보
  - **views/**: 다양한 경로에 대한 Vue 뷰.
    - `NotFoundView.vue`: 페이지 리소스를 찾을 수 없을 때 보여지는 페이지
    - `RegisterView.vue`: 회원가입 페이지
  - **App.vue**: 루트 컴포넌트.
  - **main.js**: 애플리케이션의 진입점.
  

## 스크립트

- `npm run dev`: 개발 서버를 시작합니다.
- `npm run build`: 프로덕션용 애플리케이션을 빌드합니다.
- `npm run serve`: 빌드된 애플리케이션을 로컬에서 서빙합니다.

## 패키지 설명

### 프로젝트 정보

- **이름**: hw-fe-task
- **버전**: 0.0.0
- **설명**: (없음)

### 주요 스크립트

- `dev`: `vite` - 개발 서버를 시작합니다.
- `build`: `vite build` - 애플리케이션을 빌드합니다.
- `preview`: `vite preview` - 빌드된 애플리케이션을 미리보기합니다.

### 주요 종속성

- `vue`: ^3.4.21 - Vue.js 프레임워크
- `vue-router`: ^4.3.0 - Vue.js 라우터

### 개발 종속성

- `@vitejs/plugin-vue`: ^5.0.4 - Vite와 Vue를 통합하는 플러그인
- `vite`: ^5.2.8 - 빠른 프론트엔드 빌드 도구

## 기여

프로젝트 기여를 환영합니다. 기여하려면 다음 단계를 따르세요:

1. 리포지토리를 포크합니다.
2. 새로운 브랜치를 만듭니다:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. 변경 사항을 만들고 커밋합니다:
   ```sh
   git commit -m 'Add some feature'
   ```
4. 브랜치에 푸시합니다:
   ```sh
   git push origin feature/your-feature-name
   ```
5. 풀 리퀘스트를 생성합니다.

## 라이센스

이 프로젝트는 MIT 라이센스에 따라 라이센스가 부여됩니다.
