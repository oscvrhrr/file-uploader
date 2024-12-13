/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/Navbar";
import Drive from "../components/Drive";
import UploadFile from "../components/UploadFile";
import { DriveType } from "../types/drive";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../components/context/UserContext";
import { Button, Flex } from "@radix-ui/themes";
import { UploadIcon, PlusIcon, PersonIcon, ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router";


const Dashboard = () => {
  const { setUser, user } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const [drive, setDrive] = useState<DriveType>({
    id: null,
    ownerId: null,
    folders: null,
    files: null,
  });


  const handleButtonToggle = () => {
    setToggle(!toggle)
  }

  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("token")
  }

  const createFolder = async(event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}drives/${drive.id}/folder`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if(response.ok) {
        console.log("folder created")
      }
    } catch(error) {
      console.log(error, "error creating folder")
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async() => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}users/me`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const parsedData = await response.json();
          console.log(parsedData);
          setUser(parsedData.user);
          setDrive(parsedData.drive);
        }
      } catch (error) {
        console.log(error, "error fetching user");
      }
    };
    fetchUser();
  }, [refresh]);
  

  return (
    <div className="bg-radixindigo-200 h-screen">
      <Navbar>
        <button
          className="hover:bg-radixindigo-700 rounded px-2 py-0.5 cursor-pointer flex items-center ml-6"
          onClick={ handleLogOut }
        >
          <ExitIcon className="mr-1"/>
          Logout
        </button>
      </Navbar>

      <Flex className="flex justify-between px-10 py-4">
        <div className="flex items-center">
         <PersonIcon className="mr-1"/>
         <h2 className="font-bold">{user && user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s Drive</h2>
        </div>
        <div className="flex">
          <Button onClick={ async(event) => { await createFolder(event); handleRefresh(); } } className="flex text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 rounded" size="2" variant="soft" radius="large">
            <PlusIcon/> Create folder
          </Button>
          { toggle && 
            <UploadFile driveId={ drive.id } onUploadSuccess={ handleRefresh } toggle={ handleButtonToggle }/>
          }
          <Button onClick={handleButtonToggle} className="flex text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 ml-4 rounded" size="3" variant="soft" radius="large">
            <UploadIcon/> Upload file
          </Button>
        </div>
      </Flex>
      <Drive drive={drive} />
    </div>
  );
};

export default Dashboard;
