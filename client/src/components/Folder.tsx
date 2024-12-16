import { ArchiveIcon } from "@radix-ui/react-icons"
import Options from "./Options"
import { formatDate } from "../lib/utils";
import { Link } from "react-router";


interface FolderProps {
  name: string;
  created: string;
  id: number

}

const Folder = ({ name, created, id }: FolderProps) => {
  return (
    <>
      <div className="flex hover:bg-radixgray-300 p-2 border-b items-center">
              <ArchiveIcon/>
              <Link className="w-1/2 ml-1" to={`/folder/${id}`}>
                <p>{name}</p>
              </Link>
              <div className="w-1/2 flex justify-between">
                <p className="w-16">-</p>
                <p>{formatDate(created)}</p>
                <Options folderId={id}/>
                {/* <div className="hover:border-radixindigo-700 h-full p-1 rounded border">
                  <DotsHorizontalIcon/>
                </div> */}
              </div>
            </div>
    </>
  )
}

export default Folder