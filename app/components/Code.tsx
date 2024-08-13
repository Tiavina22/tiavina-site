import { cn } from "@/lib/utils"
import { ComponentPropsWithRef } from "react"




export const Code = ({className,...props}: ComponentPropsWithRef<"span">) => {
    return <span className={cn("bg-accent/30 hover:bg-accent/50 transition-colors font-mono border border-accent text-primary px-1 py-0.5 rounded-sm", className)} {...props} />

}