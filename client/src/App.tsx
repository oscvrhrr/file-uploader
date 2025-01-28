import { BrowserRouter } from "react-router"
import { Route, Routes } from "react-router"
import ProtectedRoutes from "./lib/protectedRoutes"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import FolderDetails from "./pages/FolderDetails"
import { useState } from "react"
import { RefreshContextProvider } from "./components/context/FolderContext"


function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <BrowserRouter>
        <RefreshContextProvider value={{ refresh, setRefresh}}>
          <Routes>
            <Route element={ <ProtectedRoutes/> }>
                <Route path="/dashboard" element={ <Dashboard/> }/>
                <Route path="/folder/:folderid" element={ <FolderDetails/> }/>
            </Route>
            <Route path="/" element={ <Landing/> } />
          </Routes>
        </RefreshContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
