import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Issue from "./Issue/Issue";
import Header from "./Header/Header";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Header />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Issue" element={<Issue />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;