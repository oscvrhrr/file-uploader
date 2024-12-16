import Navbar from "./Navbar"
import { ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }:LayoutProps) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("token")
  }

  return (
    <div>
      <Navbar>
        <button
          className="hover:bg-radixindigo-700 rounded px-2 py-0.5 cursor-pointer flex items-center ml-6"
          onClick={ handleLogOut }
        >
          <ExitIcon className="mr-1"/>
          Logout
        </button>
      </Navbar>
      {children}
    </div>
  )
}

export default Layout