import File from "./File";
import { FileType } from "../types/drive";

interface FolderTableProps {
 files: FileType[];
}

const FolderTable = ({ files  }: FolderTableProps) => {
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
      {
        files && files.length > 0 ? files.map((file, index) => (
          <File key={index} name={file.name} created={file.created} size={file.size} openFile={() => {}}/>
        )) :
        (
          <h1 className="flex py-2 items-center px-2 border-b text-radixgray-1000">This folder is empty..</h1>
        )
         
      } 
    </div>
  )
}

export default FolderTable