# basic_react_project

번들러로 `vite`를 사용한 `react` + `typescript` boilerplate 입니다.  
클라이언트 상태관리는 `react-redux`와 `redux-toolkit`, 서버 상태관리는 `react-query`를 사용합니다.  
스타일링은 `emotion`를 사용합니다.  
개발시 `GUIDE.md`를 읽어보시고 코딩 컨벤션을 지켜 개발해 주시기 바랍니다.


## 개발 환경 및 사용 Framework & Library
> _node -v : v18.16.1_  
> _npm -v : 9.5.1_  
> 
> 번들러:		vite(^4.4.5)  
> 코어:			react(^18.2.0), @types/react(^18.2.15), react-router-dom(^6.16.0)  
> 상태관리:	react-redux(^8.1.3), @reduxjs/toolkit(^1.9.7), react-query(^3.39.3)  
> api통신:	axios(^1.5.1)  
> 스타일:		@emotion/react(^11.11.1), @emotion/styled(^11.11.0)  


## Project setup & dev server
```shell
npm install
npm run dev
```


## Memo
프로젝트 초기 설정시 `.env` 파일을 생성 후 설정해야합니다.  
api 통신은 `VITE_BASE_URL=주소`로 설정해야합니다.  

### 사용 z-index
1. sample: 10,

### TODO
- sample (`src/pages/sample`)

### 해결
- ~~sample~~
