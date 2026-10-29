import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioApp from "./PortfolioApp";
import WhyIBuiltAbc from "./blogs/WhyIBuiltAbc"; // 👈 Naya Blog Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="/blog/why-i-built-abc" element={<WhyIBuiltAbc />} />
      </Routes>
    </Router>
  );
}

export default App;
