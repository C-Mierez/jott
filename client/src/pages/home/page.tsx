import DoubleButton from "~/components/ui/double-button";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import HomeLayout from "./layout";

export default function HomePage() {
    return (
        <HomeLayout>
            <div className="grid grid-rows-2 h-full place-items-center ">
                <div className="balance text-center w-full">
                    <h1 className="text-[11rem] leading-[1]  font-black">Jott</h1>
                    <p className="text-4xl font-light text-foreground/70">Get your money right</p>
                </div>
                <div className="flex flex-col gap-3 max-w-lg w-full">
                    <h2 className="balance tracking-wider text-xl text-center font-light">
                        Enter your most recent expense
                    </h2>
                    <div className="rounded-md has-[:focus]:bg-foreground/5 flex justify-between transition-colors duration-500 ease-smooth">
                        <div className="flex-1 border-border border-t border-b border-l rounded-l-md flex items-center">
                            <div className="aspect-square h-full grid place-items-center text-foreground/70 text-lg font-normal">
                                $
                            </div>
                            <div className="w-[1px] bg-foreground/70 h-2/3"></div>
                            <input type="text" className="w-full mx-3 focus:outline-0 h-2/3 bg-transparent text-xl" />
                        </div>
                        <DoubleButton as={"a"} className="size-11 hover:text-foreground">
                            <ArrowTopRightIcon className="size-7" />
                        </DoubleButton>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
