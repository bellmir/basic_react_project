# Cording Style Guide v1.2

| 문서 수정 | 작성자  |
| --------- | ------- |
| 2023.09.  | Bellmir |
| 2023.10.  | Bellmir |

실무자들 간의 원활한 협업을 위해 코딩 스타일 가이드를 사내 업무 시스템에 도입합니다.  
아래 기재된 가이드를 숙지하여 업무에 적용해 주시기 바랍니다.  

<br />
<br />

## 네이밍 가이드

공통적으로 한 단어만으로 이름을 작성하는 것은 피해 주시기 바랍니다.  
여러 단어를 조합할 때는 동사 + 명사 순으로 작성해 주시길 바랍니다.

### 파일명 작성법

컴포넌트 파일명과 `pages` 아래의 폴더명은 파스칼 케이스로 작성합니다.  
축약어를 사용하지 않고 최대한 직관적으로 작성해 주시기 바랍니다.

> ex. `FileName.vue`

그 외의 폴더명과 파일명은 카멜 케이스로 작성합니다.

> ex. `useAxios.js` / `pages`

### 컴포넌트명 작성법

컴포넌트명은 파스칼 케이스로 작성합니다.  
축약어를 사용하지 않고 최대한 직관적으로 작성해 주시기 바랍니다.

> ex. `ComponentName`

```
등록페이지와 수정페이지는 한 페이지로 개발이 되는 관계로 앞의 동사를 Save로 통일합니다.
기존에 따로 분리해두었던 2페이지는 하나로 통합하여 생성해 주시기 바랍니다.
> ex. `RegisterProfile`, `ModifyProfile` -> `SaveProfile` 하나로 통일
```

### 이미지 파일명 작성법 (디자이너)

순수하게 아이콘의 역할만 하는 파일에만 "icon*"을 붙여주시기 바랍니다.  
컨텐츠 영역에 노출되는 이미지는 일러스트 또는 사진 형식에 무관하게 "img*"를 사용해 주시기 바랍니다.

> ex. `icon_[name]` / `img_[name]`

### 클래스명 작성법

클래스명은 카멜 케이스로 작성합니다.

> ex. `className`

축약어를 사용하지 않고 최대한 직관적으로 작성해 주시기 바랍니다.  
다만 아래처럼 매우 직관적이면서 원단어가 긴 축약어는 사용해도 무방합니다.

> button -> `btn`  
> image -> `img`  
> password -> `pwd`  
> CompanyIdentity -> `CI`  
> BrandIdentity -> `BI`

BEM 방식을 차용하여 일부 커스텀 하였습니다.  
BEM 참고자료: https://mynameishomin.com/css-bem-bangbeobron-css-keulraeseu-neimeul-eoddeohge-jieulgga/

BEM 방식은 (Block**Element--Modifier) 순으로 클래스 네이밍을 합니다.  
저희는 BEM 식으로 작성하되 '--' '**'는 '-'과 '\_' 하나씩으로 대체합니다.

> ex. `.customProduct_list-row`

이외에 추가로 접두사를 사용합니다.  
여러 컴포넌트 공통적으로 사용되어 `common.css`등에 들어가야하는 클래스는 `c_` 접두사를 붙입니다.

> ex. `c_section_title`

너무 BEM에 집착할 필요는 없고 전체적인 네이밍 원칙은 이렇다라는 것만 유념하시고 적당히 유도리있게 작성하시면 됩니다.

<br />
<br />

## CSS 가이드

### 기본 형태

기본적으로 계단형식으로 작성합니다.

```css
/* ex */
.codingConvention {
	margin: auto;
}
.codingConvention .text_box {
	width: 12rem;
}
.codingConvention .text_box .title {
	font-size: 2rem;
}
```

크로스 브라우징용 CSS 초기화는 `reset.css`를 사용합니다.  
CSS 파일 구분은 각 페이지나 컴포넌트 별로 분리하여 작성하되, 프로젝트 전체에서 쓰일 공통적인 스타일은 `common.css`에 포함됩니다. 여기에 들어가는 클래스들은 `c_`접두사를 붙여 주시기 바랍니다.

### CSS 적용 우선순위

`!important`와 inline 선언은 최대한 지양합니다.

```css
/* bad ex */
.product {
	color: red !important;
}
```

```html
<!-- bad ex -->
<p style="color: red">sample</p>
```

id 선택자는 사용하지 않습니다.  
id는 기능 개발에만 사용하고, css에선 class만 사용합니다.

```css
/* bad ex */
#product {
	...
}
```

tag 선택자 사용을 막진 않지만 마지막 선택자가 아니라면 굳이 쓰는것이 좋진 않습니다.  
만일 사용한다면 후손 선택자가 아닌 자손 선택자를 사용해주시길 바랍니다.

```css
/* bad ex */
/* li 아래에 depth가 하나 더 들어간 또 다른 li가 있으면 깨짐 발생 */
.product_list li { ... }
.product_list li p { ... }

/* alternative ex */
.product_list > li { ... }
.product_list > li > p { ... }

/* good ex */
/* 마지막 선택자가 아닌 경우엔 왠만하면 고유의 class명을 붙이는 것이 좋습니다  */
.product_list .list_item { ... }
.product_list .list_item > p { ... }
```

### CSS 속성 순서

개인의 스타일을 남발할 경우 중구난방이 될 수 있으므로 CSS 속성 순서는 가급적 아래와 같은 형식을 지켜주시기 바랍니다.  
CSS 순서는 레이아웃을 이루는데 있어 힘이 강한 속성이 상위에 위치하게 됩니다.  
(webkit 속성은 관련 속성 하단에 작성해 주시기 바랍니다.)

```css
.sample {
	content	/* 가상클래스 사용 시 최상단 */
	z-index	/* 일반적 요소에 대해 최상단 위치 */

	/* --- position 관련 --- */
	position
	top
	left
	transform
	float	/* (사용 지양) */

	/* --- display 관련 --- */
	overflow
	display	/* display 관련속성은 하단에 위치 */
	flex-direction
	flex-wrap
	flex-basis
	flex-grow
	flex-shrink
	align-items
	justify-content
	gap

	/* 박스 관련 */
	width	/* 관련 속성 (min-width max-width)등은 같이 붙여서 작성 권장 */
	min-width
	max-width
	height
	min-height
	max-height
	margin
	padding
	border
	border-radius
	box-sizing
	box-shadow

	/* 글자 관련 */
	font-family
	font-size
	font-weight
	line-height
	word-break
	word-spacing
	text-align
	text-decoration
	text-indent
	text-overflow

	/* 색상 관련 */
	color
	background
	background-color

	/* 기타 등등 */
	cursor

	/* 애니메이션 효과 관련 */
	transition /* transition 모션관련 속성은 위 선언된 속성을 기반으로 한 부가적인 요소이므로 최하단에 위치 */
	animation
}
```

### z-index 관리

`z-index`는 범용성과 중요도에 따라 1의 자리, 10의 자리, 100의 자리 단위로 구분합니다.

1. 한 화면 내에서만 사용되는 요소일 경우 한자리 수(1~9) 사용을 권장합니다.
2. 여러 화면에서 사용되는 요소일 경우 두자리 수(10~99) 사용을 권장합니다. 중요도 별로 10단위로 구분하고 비슷한 중요도 중 미세하게 더 높아야 하는 경우에 1단위로 세분화 하는 것이 좋습니다.
3. 어느 화면에서든 거의 필수적으로 맨 앞에 보여야 하는 요소는 세자리 수(100~999) 사용을 권장합니다. 역시 중요도 별로 100단위로 구분하고 나머지는 그 아래단위로 세분화 하는 것이 좋습니다.

`z-index`는 가능한 작은 단위를 사용하는 것이 좋습니다. 아무데나 999로 설정하는 것은 피해주시기 바랍니다.  
10 이상의 단위를 사용할 경우 `README.md` 같은 곳에 별도로 목록을 작성하여 관리하는 것이 좋습니다.

```css
/* ex */
.c_modal {
	z-index: 100;
}
.c_header {
	z-index: 10;
}
.c_header-mobile {
	z-index: 11;
}
.sample {
	z-index: 1;
}
```

```
권장 예시 index값
1. splash 100
2. spinner 90
3. modal 80
4. modal(confirm) 70
5. header 50
6. bottom 50
7. side menu 50
8. ToTop 30
9. ToolTip 20
```

### @media query 작성법

미디어 쿼리는 다음과 같이 나눕니다.  
좀 더 세부적으로 추가적인 조정이 필요할 땐 괄호도 포함하여 사용하시면 됩니다.

> 기본: `320px, 480px, 768px, 1024px, 1200px, 1440px`  
> 추가: `320px, (360px), 480px, (600px), 768px, (900px), 1024px, 1200px, 1440px, (1600px)`

```css
/* 모바일-m */
/* @media screen and (max-width: 480px) {
} */
/* 모바일-l */
/* @media screen and (max-width: 600px) {
} */
/* 모바일-xl & 태블릿-s */
/* @media screen and (max-width: 768px) {
} */
/* 태블릿-m */
/* @media screen and (max-width: 900px) {
} */
/* 태블릿-l & PC-s */
/* @media screen and (max-width: 1024px) {
} */
/* PC-m */
/* @media screen and (max-width: 1200px) {
} */
/* PC-l */
/* @media screen and (max-width: 1440px) {
} */
/* PC-xl */
/* @media screen and (max-width: 1600px) {
} */
/* PC-xxl (min-width임 주의) */
/* @media screen and (min-width: 1601px) {
} */
```

### 효율적인 CSS 작성법

#### 1. rem 사용

사이즈나 크기의 단위는 `px`말고 `rem`을 사용해주시기 바랍니다.  
`common.css`파일을 보시면 html 요소의 폰트 사이즈를 10px로 초기화 해두고, 미디어 쿼리에 따라 조절해둔 부분이 있습니다.  
이를 통해 rem을 쓰시면 일일이 미디어 쿼리를 통해 사이즈를 조정해 줄 필요 없이 어느정도 비율에 따라 조절이 됩니다.

```css
html {
	font-size: 10px;
}
@media screen and (max-width: 360px) {
	html {
		font-size: 9px;
	}
}
```

만약 해당 요소의 폰트 사이즈에 따라 여러 사이즈 속성들이 바뀌어야 하는 경우에는 `em`을 사용하는 것도 좋은 방법입니다.

```css
.button {
	font-size: 2rem;
	padding: 0.8em 1.2em;
}
@media screen (max-width: 480px) {
	.button {
		font-size: 1.5rem;
		/* padding은 따로 조정 안해줘도 됨 */
	}
}
```

#### 2. :root 변수 사용

`common.css`파일을 보시면 `:root` 가상클래스 안에 변수들이 선언되어있는 것을 보실 수 있습니다.  
이렇게 선언된 변수들은 `var(--변수명)`으로 사용하실 수 있습니다.  
이렇게 변수를 사용하시면 코드 양이 많아져도 통일감있게 작성할 수 있으며, 수정 요청이 있거나 다른 프로젝트에서 코드를 재사용 하더라도 공용 변수의 값만 변경하면 되어 효율적입니다.

```css
:root {
	--color-primary: #384bd4; /* 메인 컬러 */
}
input {
	accent-color: var(--color-primary);
}
```

#### 3. 기타 CSS TIP

- 여러 요소에서 공통적으로 재사용되는 클래스의 여백과 사이즈는 해당 클래스에 직접 포함하여 작성하는 것 보다, 매번 따로 설정하더라도 사용할 부분에서 별개로 작성하는 것이 좋습니다. 자세한 설명이 필요하면 문서 관리자(bellmir)를 찾아오세요.

- 이미지는 가급적 css의 `background` 속성으로 삽입하는 것이 아닌 html의 이미지 태그를 사용하시기 바랍니다.  
  브라우저의 구조상 이미지 태그를 사용하는 것이 성능에 더 좋고, 코드 가독성도 더 좋습니다.

<br />
<br />

## 주석 작성법

주석 작성을 매우 권장합니다. 다만 코드 수정시 관련 주석 업데이트도 항상 해주시기 바랍니다.  
필요한 경우 `jsdoc`을 사용하셔도 좋습니다.

큰 블록을 이루는 요소의 시작과 끝에는 가급적 다음과 같이 주석 처리를 해주시기 바랍니다.  
시인성을 위해 'START'와 'END'는 전부 대문자로 표기합니다.

```html
<!-- topBanner START -->
<div class="topBanner">
	<h4 class="title">...</h4>
	...
</div>
<!-- topBanner END -->
```

```css
/* topBanner START */
.topBanner { ... }
.topBanner .title { ... }
...
/* topBanner END */
```

START 주석 바로 아랫줄에 코멘트 주석을 추가할 수 있습니다.  
코멘트에는 작업의도 등 작업자가 알고 있으면 도움이 될 사항들을 기록해 주시면 좋습니다.  
코멘트는 간단하게 남기는 용도이며, 보다 자세하고 긴 내용의 서술이 필요할 경우 `README.md`에 작성해 주시면 됩니다. (추후 노션 도입될 수 있습니다)

```html
<!-- topBanner START -->
<!-- comment : 코멘트 문구를 작성해 주세요. -->
...
```

해야할 일이 있다면 TODO 주석을 달아주시면 좋습니다.

```html
<!-- TODO : 00작업 끝나면 해당 부분 빼기 -->
```

<br />
<br />

## Git 커밋 가이드

GitHub Desktop 사용을 권장합니다.  
`.env`등의 민감한 파일은 반드시 `.gitignore`에 포함하여 커밋에서 제외해주시기 바랍니다.

### 커밋 메세지 컨벤션

커밋 메세지를 남길때는 제목 맨앞에 태그를 달아주시기 바랍니다. 태그는 영어이고 나머지는 한국어로 작성해주세요.  
아래는 태그의 종류입니다.  
| 태그 | 용도 |
| --------- | --------------------------------------------------------------- |
| feat      | 새로운 기능 추가 |
| fix       | 버그 수정 |
| refactor  | 리팩토링 |
| design    | CSS 등 사용자 UI 디자인 변경 |
| style     | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| docs      | 문서 수정 |
| comment   | 필요한 주석 추가 및 변경 |
| test      | 테스트 코드, 리펙토링 테스트 코드 (비즈니스 로직에 변경이 없는 경우) |
| chore     | 기타 변경사항(빌드 업무 수정, 패키지 매니저 수정) |
| init      | 프로젝트 초기 생성 |
| rename    | 파일 혹은 폴더명 수정하거나 옮기는 경우 |
| remove    | 파일을 삭제하는 작업만 수행하는 경우 |

### 브랜치 가이드

TBD(Trunk-Based-Development)방식  
`feature#[이름]`으로 branch 따서 작업 후 `main`에 merge하시면 됩니다..  

<br />

## Prettier / ESlint 가이드

VSCode Extensions에서 `ESLint`(dbaeumer.vscode-eslint)와 `Prettier`(esbenp.prettier-vscode)를 다운받아서 사용하시길 바랍니다.

### Prettier

초기 설정에서 변경하실 prettier 설정은 다음과 같습니다.

> "useTabs": true  
> "tabWidth": 2  
> "printWidth": 120

```json
// .prettierrc
{
	"printWidth": 120,
	"useTabs": true,
	"tabWidth": 2,
	"arrowParens": "always",
	"singleQuote": false,
	"trailingComma": "es5",
	"bracketSpacing": true,
	"semi": true,
	"endOfLine": "lf"
}
```

### ESLint

ESLint의 경우 따로 수정할건 없습니다.  
다만 개발할때 거슬리는 경고를 끄셨다면, 배포 전 경고를 켜서 확인해주시기 바랍니다.

```json
// package.json
"eslintConfig": {
	"rules": {
		"no-unused-vars": "off",
	}
},
```

<br />

## 기타 항목

- 사용하지 않는 페이지는 파일명 앞에 `(unused)`를 붙여주시기 바랍니다.
- 퍼블리싱이 끝나고 `(unused)` 파일은 필요할 경우 개인이 백업해 주시고 개발팀에 소스 전달할때는 모두 삭제하여 전달해 주시기 바랍니다.
- 개발이 끝나고 배포하기 전 모든 `console.log()`, `console.error()`, `console.debug()`등을 지워주시기 바랍니다.  
  아래와 같이 `main.js`에서 해당 함수들을 빈 함수로 초기화 시키는것도 좋은 방법입니다.  
   ```js
   if(process.env.NODE_ENV==='production'){
      console.log = ()=>{};
      console.error = ()=>{};
      console.debug = ()=>{};
   }```
