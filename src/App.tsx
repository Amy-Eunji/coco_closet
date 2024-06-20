import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/page/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </Router>
  );
}

export default App;
