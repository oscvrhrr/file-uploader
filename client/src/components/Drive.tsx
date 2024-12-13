import { DriveType } from "../types/drive"
import { FileIcon, ArchiveIcon } from "@radix-ui/react-icons";
import FileImage from "./FileImage";
import { useState } from "react";
import { FileType } from "../types/drive";
import Options from "./Options";

interface DriveProps {
  drive: DriveType;
}

const Drive = ({ drive }:DriveProps) => {
  const[isFileActive, setIsFileActive] = useState(false);
  const [file, setFile] = useState<FileType | null>(null)


  const handleFileActive = () => {
    setIsFileActive(!isFileActive);
  }




  const handleFile = async(fileId: number) => {
    const response =  await fetch(`${import.meta.env.VITE_BASE_URL}folders/file/${fileId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if(response.ok) {
      const data = await response.json();
      setFile(data)
    }
  }

  return (
    <div className="mx-10 my-1 border bg-radixindigo-200 border-radixindigo-700 rounded">
      <div className="flex p-2 bg-radixindigo-400">
        <p className="w-1/2">Name</p>
        <div className="w-1/2 flex justify-between ">
          <p>Size</p>
          <p>Created</p>
          <p>Options</p>
        </div>
      </div>
      {drive && drive.folders ? (
          drive.folders.map((folder, index) => (
            <div className="flex hover:bg-radixgray-300 p-2 border-b items-center" key={index}>
              <ArchiveIcon/>
              <p className="w-1/2 ml-1">{folder.name}</p>
              <div className="w-1/2 flex justify-between">
                <p className="w-16">-</p>
                <p>{folder.created}</p>
                <Options/>
                {/* <div className="hover:border-radixindigo-700 h-full p-1 rounded border">
                  <DotsHorizontalIcon/>
                </div> */}
              </div>
            </div>
          ))
        ) : (
            <div>Loading</div> )
        }

        {isFileActive && <FileImage filename={file?.name || 'loading'} toggle={ handleFileActive } path={`https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/public/Files_fileupload/${file?.path}`}/>}
        
        { drive && drive.files?
          drive.files.map((file, index) => (
            <div className="flex hover:bg-radixgray-300 items-center px-2 border-b" key={index}>
              <FileIcon/>
              <p onClick={async() => { await handleFile(file.id); handleFileActive()}} className="w-1/2 py-2 ml-1 cursor-pointer">{file.name === "" ? "untitled" : file.name}</p>
              <div className="w-1/2 flex justify-between cursor-text">
                <p>{file.size} bytes</p>
                <p>{file.created}</p>
                <Options/>
                {/* <div className="hover:border-radixindigo-700 h-full p-1 rounded border">
                  <DotsHorizontalIcon/>
                </div> */}
              </div>
            </div>
          )): (
            <div>loading</div>
          )

        }
    </div>
  )
}

export default Drive