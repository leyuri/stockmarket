# stockmarket



##### 2020-04-16

- add components
  - Chart.js
  - CompanyDetail.js
  - CompanyList.js
  - CompanyNews.js
  - CompanyNews.js
  - Footer.js
  - NavBar.js

- news api test

  - Config.js

  https://rahmanfadhil.com/fetch-data-with-react-hooks/ 참고..!

  회사뉴스 중 헤드라인, 요약만 가져와봄,,,나중에 이미지 등의 다른 정보 추가해보자

- chart test
  - react-chartjs-2 ..추후에 더 좋은 거 있으면 ....사용해보자



 App.js에서 계속 에러 발생 ㅜㅜ

To test a component (with Jest) that contains <Route> and withRouter you need to import Router in you test, not in your component

```
import { BrowserRouter as Router } from 'react-router-dom';
```

https://stackoverflow.com/questions/50025717/jest-enzyme-invariant-violation-you-should-not-use-route-or-withrouter-ou 

해결완료

##### 2020-04-17

- News 컴포넌트 나누기 (이미지카드/리스트)
  - 깔끔한 카드 찾고 싶은데....
-  add Home.js(홈페이지 안에 쪼개서 컴포넌트 배치하기)
- 회사...리스트 선정해야함...


