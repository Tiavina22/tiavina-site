import { TailwindLogo } from "@/app/logo/TailwindLogo";
import { Section } from "../Section"
import { ReactLogo } from "@/app/logo/ReactLogo";
import { NextJs } from "@/app/logo/NextJs";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Section className="py-8 flex justify-center">
                <p className="text-muted-foreground text-sm text-center flex items-center space-x-1">
                    <span className="font-bold">Tiavina © 2024</span> 
                    <span>made with</span> 
                    <ReactLogo size={16} />
                    <span>,</span> 
                    <NextJs size={16} />
                    <span>&</span> 
                    <TailwindLogo size={16} />
                </p>
            </Section>
        </footer>
    );
}

