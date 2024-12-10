import * as Toggle from "@radix-ui/react-toggle"
import { Cross1Icon } from "@radix-ui/react-icons"

interface UploadFileProps {
  toggle: () => void ;
}

const UploadFile = ({ toggle }:UploadFileProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 z-40">
       <form className="border flex items-end justify-between flex-col bg-radixgray-100 border-radixgray-600 w-[20rem] h-[15rem]  bg-radixblue-100 mx-auto rounded-xl px-4 py-4 absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2" action="/dashboard/file" method="post" encType="multipart/form-data">
                <Toggle.Root onClick={ toggle } className="flex size-[35px] items-center border justify-center rounded bg-white leading-4 text-mauve11 hover:border-radixindigo-900 focus:shadow-[0_0_0_2px] focus:shadow-radixindigo-900 data-[state=on]:bg-violet6 data-[state=on]:text-violet12">
                  <Cross1Icon/>
                </Toggle.Root>
                <div className="">
                  <h3>Upload file into Drive</h3>
                  <input className="border mt-2 w-full mb-4 placeholder:italic placeholder:text-slate-400 block bg-white border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-radixindigo-900 focus:ring-radixindigo-900 focus:ring-1 sm:text-sm" type="text" name="file-name" id="file-name" placeholder="Name your file..." required/>
                  <input className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-radixindigo-900 file:text-white hover:file:bg-radixindigo-1000"  type="file" name="file" id="file"/>
                </div>
                 <button className="text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 rounded" type="submit">Upload File</button>
        </form>
    </div>
  )
}

export default UploadFile