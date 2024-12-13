import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

const Options = () => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="hover:border-radixindigo-700 h-full p-1 rounded border cursor-pointer">
            <DotsHorizontalIcon />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="min-w-[220px] mr-8 rounded-md bg-radixindigo-200 border p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item >Delete</DropdownMenu.Item>

          
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default Options;
