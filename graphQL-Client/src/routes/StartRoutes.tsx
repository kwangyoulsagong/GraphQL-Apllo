import { Routes, Route } from "react-router-dom";
import Home from "../containers/home/home";

// 시작 페이지 라우트
function StartRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default StartRoutes;
