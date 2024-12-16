import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { PlusIcon } from "@radix-ui/react-icons";



interface ToastFolder {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ToastFolder = ({onClick}: ToastFolder) => {
	const [open, setOpen] = React.useState(false);
	const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);

	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<Toast.Provider>
			<button
				className="flex text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1 rounded"
				onClick={(event) => {
					onClick(event)
					setOpen(false);
					window.clearTimeout(timerRef.current);
					timerRef.current = window.setTimeout(() => {
						setOpen(true);
					}, 100);
				}}
			>
				<PlusIcon/>
				New Folder
			</button>

			<Toast.Root
				className="bg-radixindigo-200 grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md border-radixgray-700 border p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
				open={open}
				onOpenChange={setOpen}
			>
				<Toast.Title className="mb-[5px] text-[15px] font-medium text-slate12 [grid-area:_title]">
					Untitled Folder created
				</Toast.Title>
				<Toast.Description asChild>
					<time
						className="m-0 text-[13px] leading-[1.3] text-slate11 [grid-area:_description]"
						dateTime={eventDateRef.current.toISOString()}
					>
					</time>
				</Toast.Description>
				<Toast.Action
					className="[grid-area:_action]"
					asChild
					altText="folder created"
				>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
		</Toast.Provider>
	);
};




export default ToastFolder;

