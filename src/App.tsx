import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PagesTabs from "./components/PagesTabs";
import Vieweye from "./components/Vieweye";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesTabs />} />
        <Route path="/vieweye" element={<Vieweye />} />
      </Routes>
    </Router>
  );
}

export default App;