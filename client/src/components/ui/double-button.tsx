import React from "react";
import { cn } from "~/lib/utils";

export interface DoubleButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    asChild?: boolean;
    children: React.ReactNode;
    as?: React.ElementType;
}

export default function DoubleButton({ children, as, className, ...props }: DoubleButtonProps) {
    const Comp = as ?? "button";
    return (
        <Comp
            {...props}
            className={cn(
                "group overflow-hidden relative cursor-pointer bg-background border-border border rounded-r-md [&>*]:duration-300 [&>*]:ease-smooth [&>*]:size-full [&>*]:grid [&>*]:place-items-center text-foreground/70 brutalHover",
                className
            )}
        >
            <span className="group-hover:translate-x-full group-hover:-translate-y-full">{children}</span>
            <span className="absolute inset-0 group-hover:translate-x-0 group-hover:-translate-y-0 -translate-x-full translate-y-full">
                {children}
            </span>
        </Comp>
    );
}
