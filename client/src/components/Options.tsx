// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon, TrashIcon, Pencil2Icon, Cross1Icon } from "@radix-ui/react-icons";
import * as Toggle from "@radix-ui/react-toggle";
import { useState } from "react";
import { useContext } from "react";
import { RefreshContext } from "./context/FolderContext";


interface OptionsProps {
  id: number | null;
  type: "folders" | "file"
}

const Options = ({ id, type }: OptionsProps) => {
  const [inputValue, setInputValue] = useState({ name: "" })
  const [isActive, setIsActive] = useState(false)
  const { refresh, setRefresh } = useContext(RefreshContext)


  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setInputValue((prev) => ({...prev, [name]: value}))
  }
  
  const handleisActive = () => {
    setIsActive(!isActive)
  }

  const handleRefresh = () => {
    console.log('handleRefresh called');
    setRefresh(!refresh);
  }

  const updateFolderName = async() => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}${type}/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(inputValue)
    });
    if(response.ok) {
      console.log(`${type} name updated`)
    }
  }

  const deleteFolder = async() => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}${type}/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if(response.ok) {
      console.log(`${type} deleted`)
    }
  }



  return (
    <>
      <div onClick={handleisActive} className="hover:border-radixindigo-700 h-full p-1 rounded border cursor-pointer z-10">
           <DotsHorizontalIcon />
      </div>
      {
        isActive && (
          <div className="min-w-[220px] flex flex-col items-end absolute right-11 mr-8 z-10 cursor-pointer rounded-md bg-radixindigo-200 border p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
            <Toggle.Root onClick={handleisActive} className="border mb-1 rounded p-0.5 hover:bg-radixgray-300">
              <Cross1Icon/>
            </Toggle.Root>  
            <div className="w-full">
              <input  onChange={handleInputValue} value={inputValue.name} type="text" name="name" placeholder={`Rename ${type}...`} className="inline-flex h-[25px] flex-1 w-full items-center justify-center rounded text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8" />
              <p onClick={async() => { await updateFolderName(); handleisActive(); handleRefresh()}} className="hover:bg-radixindigo-400 rounded flex items-center">
                <Pencil2Icon className="mx-1"/>
                edit
              </p>
            </div>

            <p onClick={async() => { await deleteFolder(); handleisActive(); setRefresh(!refresh) } } className="hover:bg-red-200 rounded flex w-full items-center">
              <TrashIcon className="mx-1"/>
              delete
            </p>
          </div>
        )
      }

      
    </>
  );
};

export default Options;

