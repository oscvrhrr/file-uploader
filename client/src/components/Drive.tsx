import { DriveType } from "../types/drive"
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

interface DriveProps {
  drive: DriveType;
}

const Drive = ({ drive }:DriveProps) => {

  return (
    <div className="mx-10 my-5 border bg-radixindigo-200 border-radixindigo-700 rounded">
      <div className="flex p-2 bg-radixindigo-400">
        <p className="w-1/2">name</p>
        <div className="w-1/2 flex justify-between ">
          <p>size</p>
          <p>Created</p>
          <p>Options</p>
        </div>
      </div>
      {drive && drive.folders ? (
          drive.folders.map((folder, index) => (
            <div className="flex p-2 border-b" key={index}>
              <p className="w-1/2">{folder.name}</p>
              <div className="w-1/2 flex justify-between">
                <p className="w-16">-</p>
                <p>{folder.created}</p>
                <DotsHorizontalIcon className="mr-2"/>
              </div>
            </div>
          ))
        ) : (
            <div>Loading</div> )
        }
        { drive && drive.files?
          drive.files.map((file, index) => (
            <div className="flex p-2 border-b" key={index}>
              <p className="w-1/2">{file.name}</p>
              <div className="w-1/2 flex justify-between">
                <p>{file.size} bytes</p>
                <p>{file.created}</p>
                <DotsHorizontalIcon className="mr-2"/>
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