// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
