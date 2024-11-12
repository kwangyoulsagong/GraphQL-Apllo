import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// 아폴로 클라리언트 설정 서버와 통신 하기 위해 인스턴스 생성
const client = new ApolloClient({
  // GraphQL 서버 주소
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  // 캐시 관리
  cache: new InMemoryCache(),
});
export default client;
