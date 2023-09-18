import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Auth}/>
        <Route path='/dashboard' Component={Dashboard}/>

      </Routes>

    </Router>
    </>
  )
}

export default App
