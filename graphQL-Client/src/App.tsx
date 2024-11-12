import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import StartRoutes from "./routes/StartRoutes";
function App() {
  return (
    <Router>
      <StartRoutes />
    </Router>
  );
}
export default App;
