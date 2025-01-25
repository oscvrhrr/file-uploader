import { DriveType } from "../types/drive"
import { useState } from "react";
import { FileType } from "../types/drive";
import Folder from "./Folder";
import File from "./File";
import FileImage from "./FileImage";


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
          drive.folders
          .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
          .map((folder) => (
            <Folder key={folder.id} name={folder.name} created={folder.created} id={folder.id}/>
          ))
        ) : (
            <div>Loading</div> )
        }

        {isFileActive && <FileImage filename={file?.name || 'loading'} toggle={ handleFileActive } path={`https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/public/Files_fileupload/${file?.path}`}/>}
        
        { drive && drive.files?
          drive.files.map((file) => (
            <File 
              key={file.id}
              name={file.name} 
              size={file.size} 
              created={file.created} 
              openFile={async() => { await handleFile(file.id); handleFileActive()}}
            />
          )): (
            <div>loading</div>
          )

        }
    </div>
  )
}

export default Drive