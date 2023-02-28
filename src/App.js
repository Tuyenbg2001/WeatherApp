
import Sidebar from "./components/Sidebar";
import Detail from "./components/detail/Detail";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div
          className="res container position-absolute overflow-hidden d-flex"
          style={{ height: "90vh" }}
        >
          <Sidebar />
          {<Detail />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
