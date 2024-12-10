/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/Navbar";
import Drive from "../components/Drive";
import UploadFile from "../components/UploadFile";
import { DriveType } from "../types/drive";
import { Link } from "react-router";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../components/context/UserContext";
import { Button, Container } from "@radix-ui/themes";
import { UploadIcon, PlusIcon } from "@radix-ui/react-icons";


const Dashboard = () => {
  const { setUser } = useContext(UserContext);
  const [toggle, setToggle] = useState(false)
  const [drive, setDrive] = useState<DriveType>({
    id: null,
    ownerId: null,
    folders: null,
    files: null,
  });

  const handleButtonToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async() => {
      try {
        const response = await fetch("http://localhost:4001/users/me", {
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
  }, []);

  return (
    <div className="bg-radixindigo-200 h-screen">
      <Navbar>
        <Link
          className="hover:bg-radixgray-300 rounded-lg px-1 py-0.5 cursor-pointer"
          to="/"
        >
          Logout
        </Link>
      </Navbar>
      <Container className="flex justify-end px-10 py-4 ">
        <div className="flex">
          <Button className="flex text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 rounded" size="2" variant="soft" radius="large">
            <PlusIcon/> Create folder
          </Button>
          { toggle && 
            <UploadFile toggle={ handleButtonToggle }/>

          }
          <Button onClick={handleButtonToggle} className="flex text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 ml-4 rounded" size="3" variant="soft" radius="large">
            <UploadIcon/> Upload file
          </Button>
        </div>
      </Container>
      <Drive drive={drive} />
    </div>
  );
};

export default Dashboard;
