import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleContainer from "./pages/ArticleContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
