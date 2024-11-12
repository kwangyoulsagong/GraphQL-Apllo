# GraphQL-Apllo

리액트를 활용한 GraphQL 과 아폴로 서버 공부

# 스키마와 리졸버 설정

## 스키마

- Query : 데이터베이스에서 데이터를 읽는 요청
- Mutation : 데이터베이스를 수정하는 요청

- 스키마엔 Movie의 구조와 자료형도 정의해야 한다. 그래야 GraphQL 서버에서 데이터베이스 구조를 알고 처리할 수 있다.

- 위 파일은 다음을 의미한다. 서버에 Query 형태로 movies를 요청하면 Movie의 배열이 반드시 반환된다.

- 서버에 Mutation 형태로 파라미터와 함께 addMovie를 요청하면 Movie가 반드시 반환된다.

- ! : Not Nullable. 데이터가 꼭 있어야 한다.
- [] : 배열

## 리졸버

개인 적인 생각으로는 rest api 에서 라우터와 비슷한 역활을 하는 느낌이 있다.
요청을 처리하고 응답을 반환하는 부분이 매우 비슷하다.

- Query와 Mutation 객체는 각각 GraphQL의 query와 mutation 요청을 처리하는 엔드포인트 역할.
- Query는 데이터를 조회하는 역할을 하고, Mutation은 데이터를 변경(추가, 수정, 삭제 등)하는 데 사용.
