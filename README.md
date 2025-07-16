# 📘 내 감정일기

마음의 위로와 자기 치유를 위한 정서적 지원 공간

## 🎯 프로젝트 개요

10대 청소년들을 위한 감정 중심의 일기 서비스입니다. 사용자가 감정을 선택하고 일기를 작성하면, AI가 감정을 분석하여 위로의 말과 공감 문장을 제공합니다.

## ✨ 주요 기능

### MVP 기능
- 🔐 **이메일/비밀번호 인증**: Supabase를 통한 안전한 사용자 인증
- 🎭 **감정 선택형 입력**: 6가지 감정(행복, 슬픔, 화남, 신남, 평온, 불안) 중 선택
- ✍️ **감정과 함께 일기 작성**: 텍스트 입력으로 자유롭게 감정 기록
- 🤖 **AI 감정 분석 및 위로**: 선택된 감정과 일기 내용을 바탕으로 AI가 위로와 공감 문장 제공
- 💭 **상황별 질문 제공**: 감정에 따라 다음에 생각해볼 질문 제시

### 향후 업데이트 예정
- 📊 감정 통계 차트 (감정 변화 추이 시각화)
- 📅 날짜별 감정일기 조회
- 🔐 사용자 인증 및 개인화

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (권장)

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트를 생성합니다.
2. 프로젝트 루트에 `.env.local` 파일을 생성하고 Supabase 설정을 추가합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

자세한 설정 방법은 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)를 참조하세요.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
```

### 4. 프로덕션 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── Header.tsx           # 헤더 컴포넌트
│   ├── EmotionSelector.tsx  # 감정 선택 컴포넌트
│   ├── DiaryEditor.tsx      # 일기 작성 컴포넌트
│   ├── AIResponse.tsx       # AI 응답 컴포넌트
│   ├── LoginForm.tsx        # 로그인 폼
│   ├── SignUpForm.tsx       # 회원가입 폼
│   └── AuthPage.tsx         # 인증 페이지
├── contexts/
│   └── AuthContext.tsx      # 인증 상태 관리
├── lib/
│   └── supabase.ts          # Supabase 클라이언트
├── types/
│   └── auth.ts              # 인증 관련 타입 정의
├── package.json
├── tailwind.config.js       # Tailwind CSS 설정
├── tsconfig.json           # TypeScript 설정
├── SUPABASE_SETUP.md       # Supabase 설정 가이드
└── README.md
```

## 🎨 디자인 시스템

### 감정별 색상 테마
- **행복** (Happy): #FFD93D (노란색)
- **슬픔** (Sad): #6C5CE7 (보라색)
- **화남** (Angry): #FF6B6B (빨간색)
- **신남** (Excited): #4ECDC4 (청록색)
- **평온** (Calm): #A8E6CF (연두색)
- **불안** (Anxious): #FF8E53 (주황색)

### 애니메이션
- 감정 선택 시 부드러운 전환 효과
- 컴포넌트 등장 시 슬라이드 업 애니메이션
- 호버 시 스케일 효과

## 🎯 사용자 플로우

1. **감정 선택**: 6가지 감정 중 오늘의 기분 선택
2. **일기 작성**: 선택된 감정과 함께 자유롭게 일기 작성
3. **AI 분석**: AI가 감정과 내용을 분석하여 위로의 말 제공
4. **추가 질문**: 감정에 맞는 다음 생각해볼 질문 제시

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**내 감정일기**와 함께 마음의 위로를 찾아보세요! 💕 