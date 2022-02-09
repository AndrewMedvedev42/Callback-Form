import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormPage } from "./modules/FormPage";
import GlobalStyles from "./globalStyles"
import { SuccessfullSubmitMessage } from "./modules/SuccessfullSubmit";

function App() {
  return(
    <div>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage/>}></Route>
          <Route path="/success" element={<SuccessfullSubmitMessage/>}></Route>
        </Routes>
      </Router>
    </div>)
}

export default App;
