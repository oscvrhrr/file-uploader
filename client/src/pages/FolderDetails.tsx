import Layout from "../components/Layout"
import FolderTable from "../components/FolderTable"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { FileType, FolderType } from "../types/drive"
import { Flex } from "@radix-ui/themes"
import { PersonIcon } from "@radix-ui/react-icons"
import { useContext } from "react"
import { UserContext } from "../components/context/UserContext"


const FolderDetails = () => {
  const [folder, setFolder] = useState<FolderType>();
  const [files, setFiles] = useState<FileType[]>([])
  const { folderid } = useParams()
  const { user } = useContext(UserContext)


  useEffect(() => {
    const fetchFolder = async() => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}folders/${folderid}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if(response.ok) {
        const parsedData = await response.json();
        console.log(parsedData)
        setFolder(parsedData.folder);
        setFiles(parsedData.folder.files)
      }
    };
    fetchFolder()
  }, [folderid])



  return (
    <>
      <Layout>
        <Flex className="flex justify-between px-10 py-4">
            <div className="flex items-center">
            <PersonIcon className="mr-1"/>
            <h2 className="font-bold">{user && user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s Drive</h2>
            <span className=" mx-1">&lt;</span>
            <h2 className="font-bold">{folder?.name}</h2>
            </div>
            <div className="flex">
              {/* { toggle && 
                <UploadFile driveId={ drive.id } onUploadSuccess={ handleRefresh } toggle={ handleButtonToggle }/>
              }
              <Button onClick={handleButtonToggle} className="flex text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 ml-4 rounded" size="3" variant="soft" radius="large">
                <UploadIcon/> Upload file
              </Button> */}
            </div>
          </Flex>
        <FolderTable files={ files } />
      </Layout>
    </>
  )
}

export default FolderDetails