import { BrowserRouter } from "react-router"
import { Route, Routes } from "react-router"
import ProtectedRoutes from "./lib/protectedRoutes"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <ProtectedRoutes/> }>
            <Route path="/dashboard" element={ <Dashboard/> }/>
          </Route>
          <Route path="/" element={ <Landing/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
