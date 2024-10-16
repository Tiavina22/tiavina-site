import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <Link href={props.url} className={cn("w-full", props.className) }>
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative w-10 h-10">
                <Image width={500} height={500} src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                
                {props.children}
                <Image width={500} height={500} src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>

                </div>

                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <MessageCircle className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
        </Link>
    );
};
