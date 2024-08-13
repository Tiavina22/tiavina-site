import { EyeIcon } from "lucide-react"; // Assurez-vous d'importer les icônes
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";

export type SideprojectProps = {
    imageSrc: string;       // Chemin de l'image à afficher
    title: string;
    description: string;
    url: string;
    previewUrl: string;     // URL pour prévisualiser le projet
    githubUrl: string;      // URL pour le dépôt GitHub
}

export const SideProject = (props: SideprojectProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            
            <img src={props.imageSrc} alt={`${props.title} logo`}  className="h-16 w-16 object-cover rounded-sm" />
            
                
            
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <div className="flex flex-col items-center ml-auto gap-2"> {/* Changement de flex-row à flex-col */}
                <Link href={props.previewUrl} className="hover:text-accent transition-colors">
                    <EyeIcon size={20} /> {/* Icône pour prévisualiser */}
                </Link>
                <Link href={props.githubUrl} className="hover:text-accent transition-colors">
                    <GithubIcon size={20} /> {/* Icône pour GitHub */}
                </Link>
            </div>
        </div>
    );
}
