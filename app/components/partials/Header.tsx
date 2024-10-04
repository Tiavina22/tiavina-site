import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "../../icons/GithubIcon";
import { Section } from "../Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { FacebookIcon } from "../../icons/FacebookIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 z-50 backdrop-filter backdrop-blur-md">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-blue-500">tiavina</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/Tiavina22" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground"></GithubIcon>
                    </Link>
                    <Link href="https://linkedin.com/in/tiavina-ramilison" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground"></LinkedinIcon>
                    </Link>
                    <Link href="https://facebook.com/tiavinaramilison" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <FacebookIcon size={12} className="text-foreground"></FacebookIcon>
                    </Link>
                </ul>
            </Section>
        </header>
    );
}

