import { BrowserRouter } from "react-router"
import { Route, Routes } from "react-router"
import ProtectedRoutes from "./lib/protectedRoutes"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import FolderDetails from "./pages/FolderDetails"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <ProtectedRoutes/> }>
            <Route path="/dashboard" element={ <Dashboard/> }/>
            <Route path="/folder/:folderid" element={ <FolderDetails/> }/>
          </Route>
          <Route path="/" element={ <Landing/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
