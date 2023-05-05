react-router-dom, styled-components, redux를 사용해서 My Todo List 를 다시 만듭니다.


구현할 기능들 : Features
Create Todo : 새로운 할일을 생성합니다.
Read Todos, Todo : 저장되어 있는 할일 목록과 할일을 가져옵니다.
Update Todo : 할일의 상태를 변경합니다.
Delete Todo : 할일을 제거합니다.



요구 사항 : Requirement
공통
todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.
todos 모듈은 **Ducks 패턴**으로 구현합니다.



메인 페이지

디자인과 화면 구성은 자유
Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현
Todo를 추가하면 제목 input과 내용 input은 다시 빈 값이 되도록 구현
input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현
Todo의 완료상태가 true이면, 상태 버튼의 라벨을 “취소”, false 이면 라벨을 “완료” 로 보이도록 구현
전체 화면의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 컨텐츠를 화면의 가운데로 배치
상세보기 클릭하면 Todo의 상세 페이지로 이동 합니다. 상세 페이지에서 보여야 하는 내용은 아래에서 별도 기술



상세 페이지
상세페이지의 디자인과 화면 구성은 자유이나 아래 항목이 반드시 포함되도록 할 것
Todo의 ID
Todo의 제목
Todo의 내용
이전으로 버튼
이전으로 버튼을 구현하고, 이전으로 버튼을 클릭하면 리스트 화면으로 되돌아 가도록 구현


제한사항
map을 사용할 때 반드시 key을 넣어야 하며, map 의 index를 사용을 금지
Todo Id 생성 시 todos.length 사용해서 생성하지 않습니다. todos.length 을 사용해서 id 생성 시 발생할 수 있는 문제점에 대해 고민해볼 것


기타
todos 모듈의 initialState 는 있어도 되고, 없어도 됩니다.







기능별로 컴포넌트 구분

App : 최상위 부모 컴포넌트, 기능 동작에 필요한 함수를 자녀 컴포넌트로 내려줌

DetailPage : 상세보기를 구현 한 컴포넌트: URL 매개변수에 따라 Redux 스토어에서 데이터를 검색하고 
스타일이 적용된 섹션 요소에서 해당 항목을 표시하며 홈 페이지로 돌아가는 버튼이 있는 React 컴포넌트임.

Form : 데이터 입력을 수행하는 컴포넌트

Header: 화면상의 제일 위에 놓이는 컴포넌트

ListDone: 할일 완료

ListMap: Dispatch 사용하여 할일 완료,취소 그리고 삭제 

ListWorking: 해야 할 일을 표시해주는 컴포넌트

Main: 메인 화면으로 가는 컴포넌트 / 상세보기에서 메인화면으로 돌아갈때 필요로서 사용될수있음



File Tree:
📦src
 ┣ 📂components
 ┃ ┣ 📜DetailPage.jsx
 ┃ ┣ 📜Form.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜ListDone.jsx
 ┃ ┣ 📜ListMap.jsx
 ┃ ┣ 📜ListWorking.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜GlogbalStyle.jsx
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
