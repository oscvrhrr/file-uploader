import File from "./File";
import { FileType } from "../types/drive";
import { useState } from "react";
import FileImage from "./FileImage";

interface FolderTableProps {
 files: FileType[];
}

const FolderTable = ({ files  }: FolderTableProps) => {
  const [activeFile, setActiveFile] = useState<FileType | null>(null)


  const handleIsFileActive = (file: FileType) => {
    if(activeFile && activeFile.id == file.id) {
      setActiveFile(null);
    } else {
      setActiveFile(file)
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
      { activeFile && (<FileImage toggle={() => { handleIsFileActive(activeFile)}} filename={activeFile.name || "loading"} path={`https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/public/Files_fileupload/${activeFile?.path}`}  />) }
      {
        files && files.length > 0 ? files.map((file, index) => (
          <File key={index} id={file.id} name={file.name} created={file.created} size={file.size} openFile={() => handleIsFileActive(file)}/>
        )) :
        (
          <h1 className="flex py-2 items-center px-2 border-b text-radixgray-1000">This folder is empty..</h1>
        )
         
      } 
    </div>
  )
}

export default FolderTable