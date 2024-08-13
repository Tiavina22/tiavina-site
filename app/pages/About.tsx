import { cn } from "@/lib/utils";
import { Section } from "../components/Section"
import { Code } from "../components/Code"
import { ProfileTiavina } from "../images/ProfileTiavina";
import { Badge } from "@/components/ui/badge";
import { Work, WorkProps } from "../components/Work";
import { Card } from "@/components/ui/card";
import { NodeLogo } from "../logo/NodejsLogo";
import { PhpLogo } from "../logo/PhpLogo";
import { DartLogo } from "../logo/DartLogo";
import { JavaLogo } from "../logo/JavaLogo";
import { FlutterLogo } from "../logo/FlutterLogo";
import { AndroidLogo } from "../logo/AndroidLogo";
import { EducationProps } from "../components/Education";



export const About = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">

        <div className="flex-[3] w-full flex flex-col gap-2">
            <Badge variant="outline" className="self-start">About me</Badge>
            <p>My name is Tiavina Ramilison, I&apos;m from <Code className="inline-flex items-center gap-1"><img src="/icons/DrapeauMada.png" width="16" height="16" className="inline" alt="Icons de codeline" /><span className="font-bold">Madagascar</span> </Code> and currently living in Antananarivo. I have been passionate about technology since childhood.  </p><br />
            
            <p>With a strong passion for backend development, I derive immense satisfaction from crafting backend systems using  <Code className="inline-flex items-center gap-1"><NodeLogo size={12} className="text-foreground"></NodeLogo> <span className="font-bold">Nodejs</span></Code> and <Code className="inline-flex items-center gap-1"><PhpLogo size={12} className="text-foreground"></PhpLogo> <span className="font-bold">Php</span></Code> . <br /><br /> I have a particular fondness for <Code className="inline-flex items-center gap-1"><DartLogo size={12} className="text-foreground"></DartLogo> <span className="font-bold">Dart</span></Code>    due to its simplicity, speed, and the enjoyment it brings to programming.</p><br />
            <p>Having gained significant experience with <Code className="inline-flex items-center gap-1"><FlutterLogo size={12} className="text-foreground"></FlutterLogo> <span className="font-bold">Flutter</span></Code> and <Code className="inline-flex items-center gap-1"><AndroidLogo size={12} className="text-foreground"></AndroidLogo> <span className="font-bold">Android</span></Code> , I am well-acquainted with the potential of mobile development platforms. During my tenure at <Code className="inline-flex items-center gap-1"><img src="/images/logo.jpg" width="16" height="16" className="inline" alt="Logo Mistery" /> <span className="font-bold">Mistery</span></Code>, I had the opportunity to enhance my knowledge of Flutter, even if only to a certain degree.</p>
        </div>
       
    </Section>
}

