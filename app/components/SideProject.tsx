import { EyeIcon } from "lucide-react"; 
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import Image from "next/image"

export type SideprojectProps = {
    imageSrc: string;       
    title: string;
    description: string;
    url: string;
    previewUrl: string;     
    githubUrl: string;      
}

export const SideProject = (props: SideprojectProps) => {
    return (
        <Link href={props.url} className="block">
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            
            <Image height={50} width={25} src={props.imageSrc} alt={`${props.title} logo`}  className="w-100 h-100" />
            
                
            
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <div className="flex flex-col items-center ml-auto gap-2"> 
                <Link href={props.previewUrl} className="hover:text-accent transition-colors">
                    <EyeIcon size={20} /> 
                </Link>
                <Link href={props.githubUrl} className="hover:text-accent transition-colors">
                    <GithubIcon size={20} /> 
                </Link>
            </div>
        </div>
        </Link>
    );
}
