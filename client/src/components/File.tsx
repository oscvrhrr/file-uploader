import { FileIcon } from "@radix-ui/react-icons"
import Options from "./Options";
import { formatDate } from "../lib/utils";


interface FileProps {
  name: string;
  size: number;
  created: string;
  openFile: () => void
}

const File = ({ name, created, size, openFile }:FileProps) => {
  return (
   <>
    <div className="flex hover:bg-radixgray-300 items-center px-2 border-b">
          <FileIcon/>
          <p onClick={openFile} className="w-1/2 py-2 ml-1 cursor-pointer">{name === "" ? "untitled" : name}</p>
          <div className="w-1/2 flex justify-between cursor-text">
            <p>{size} bytes</p>
            <p>{formatDate(created)}</p>
            <Options/>
            {/* <div className="hover:border-radixindigo-700 h-full p-1 rounded border">
              <DotsHorizontalIcon/>
            </div> */}
          </div>
     </div>
      
   </>
  )
}

export default File