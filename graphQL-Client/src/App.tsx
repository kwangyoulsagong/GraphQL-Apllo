import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import StartRoutes from "./routes/StartRoutes";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <Router>
      <RecoilRoot>
        <StartRoutes />
      </RecoilRoot>
    </Router>
  );
}
export default App;
