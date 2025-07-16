# 🔐 Supabase 설정 가이드

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 접속하여 계정을 만들거나 로그인합니다.
2. "New Project" 버튼을 클릭합니다.
3. 프로젝트 이름을 입력하고 데이터베이스 비밀번호를 설정합니다.
4. 지역을 선택하고 "Create new project"를 클릭합니다.

## 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 환경 변수 값 찾는 방법:

1. Supabase 대시보드에서 프로젝트를 선택합니다.
2. 왼쪽 사이드바에서 "Settings" → "API"를 클릭합니다.
3. "Project URL"과 "anon public" 키를 복사하여 `.env.local` 파일에 붙여넣습니다.

## 3. 인증 설정

1. Supabase 대시보드에서 "Authentication" → "Settings"를 클릭합니다.
2. "Site URL"에 `http://localhost:3000`을 추가합니다.
3. "Redirect URLs"에 `http://localhost:3000`을 추가합니다.

## 4. 이메일 확인 설정 (선택사항)

1. "Authentication" → "Settings" → "Email Templates"에서 이메일 템플릿을 커스터마이징할 수 있습니다.
2. "Confirm signup" 템플릿을 수정하여 브랜드에 맞게 조정하세요.

## 5. 개발 서버 실행

환경 변수를 설정한 후 개발 서버를 다시 시작하세요:

```bash
npm run dev
```

## 6. 테스트

1. 브라우저에서 `http://localhost:3000`에 접속합니다.
2. "회원가입" 버튼을 클릭하여 새 계정을 만듭니다.
3. 이메일과 비밀번호로 로그인합니다.
4. 로그인 후 감정일기 기능을 사용할 수 있습니다.

## 🔧 문제 해결

### 환경 변수가 인식되지 않는 경우:
- 개발 서버를 완전히 종료하고 다시 시작하세요.
- `.env.local` 파일이 프로젝트 루트에 있는지 확인하세요.

### 로그인/회원가입이 작동하지 않는 경우:
- Supabase 프로젝트의 URL과 키가 올바른지 확인하세요.
- 브라우저 개발자 도구의 콘솔에서 오류 메시지를 확인하세요.

### 이메일 확인이 필요한 경우:
- Supabase 대시보드에서 "Authentication" → "Users"에서 사용자를 확인할 수 있습니다.
- 개발 중에는 이메일 확인을 비활성화할 수도 있습니다.

## 📚 추가 리소스

- [Supabase 문서](https://supabase.com/docs)
- [Next.js 환경 변수](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase Auth](https://supabase.com/docs/guides/auth) 