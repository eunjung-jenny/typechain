# Typechain

Learning Typescript by making a Blockchain with it (with Nicolas, Nomad Academy)

## 1. 환경설정

- TS 추가

```bash
npm -g install typescript # package-lock.json 자동 생성
```

- `tsconfig.json`: TS -> JS 변환 규칙 명시

- TS -> JS 컴파일 테스트 (`[파일명].ts`, `[파일명].js.map` 생성)
  - **node.js 는 TS를 이해하지 못함**

```bash
tsc
```

- `package.json` 에 `script` 추가 => `npm start` 명령어로 `tsc` + `node index.js` 명령어 실행

```json
"scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
```
