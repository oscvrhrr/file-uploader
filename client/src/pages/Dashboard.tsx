/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/Navbar"
import Drive from "../components/Drive"
import { DriveType } from "../types/drive"
import { Link } from "react-router"
import { useEffect, useContext, useState } from "react"
import { UserContext } from "../components/context/UserContext"





const Dashboard = () => { 
 const { setUser } = useContext(UserContext)
 const [drive, setDrive] = useState<DriveType>({id: null, ownerId: null, folders: null, files: null})


  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async() => {
      try {
        const response = await fetch("http://localhost:4001/users/me", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        if(response.ok) {
          const parsedData = await response.json();
          console.log(parsedData)
          setUser(parsedData.user)
          setDrive(parsedData.drive)
        }
      } catch(error) {
        console.log(error, "error fetching user")
      }
    }
    fetchUser()
  }, [])


  return (
    <div className="bg-radixindigo-200 h-screen">

      <Navbar>
        <Link className="hover:bg-radixgray-300 rounded-lg px-1 py-0.5 cursor-pointer" to="/" >Logout</Link>
      </Navbar>
      <div className="mx-10 my-4">
        
      </div>
      <Drive drive={drive}/>
    </div>
  )
}

export default Dashboard