import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import * as Toggle from "@radix-ui/react-toggle";
import { Cross1Icon, DownloadIcon } from "@radix-ui/react-icons";
import { Link } from "react-router";


interface FileImageProps {
  path: string;
  filename: string;
  toggle: () => void;
}

const FileImage = ({ path, toggle, filename }: FileImageProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-[rgba(0, 0, 0, 0.95)] bg-opacity-50 backdrop-blur-[2px] z-40">
      <div className="flex justify-between items-center w-1/2 ml-10 mt-4">
        <Toggle.Root
        onClick={toggle}
        aria-label="Toggle italic"
        className="flex size-[35px] border items-center justify-center rounded leading-4 text-mauve11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=on]:bg-violet6 data-[state=on]:text-violet12"
        >
          <Cross1Icon/>
        </Toggle.Root>
        <div className="flex text-radixindigo-300 text-lg">
          <p className="mr-1 font-medium">Filename:</p>
          <p>{filename}</p>
        </div>
        <Link to={ path + "?download=filename.jpg" }  className="flex text-sm text-radixgray-500 items-center border px-2 py-1 rounded">
          <DownloadIcon className="mr-1"/>
          Download
        </Link>
      </div>
      <div className="w-[35.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md shadow-[0_2px_10px] shadow-blackA4">
        <AspectRatio.Root ratio={16 / 16}>
          <img
            className="size-full object-full"
            src={path}
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio.Root>
      </div>
    </div>
  )
}

export default FileImage