import Auth from "./pages/auth"
import Dashboard from "./pages/dashboard"
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
        {/* <Auth/>
        <Dashboard/> */}

      </Routes>

    </Router>
    </>
  )
}

export default App
