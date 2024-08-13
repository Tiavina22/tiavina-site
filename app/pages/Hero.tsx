import { cn } from "@/lib/utils";
import { Section } from "../components/Section"
import Image from "next/image";
import { ComponentPropsWithRef } from "react"
import { LinkedinIcon } from "../icons/LinkedinIcon";
import Link from "next/link";
import { Code } from "../components/Code"
import { ProfileTiavina } from "../images/ProfileTiavina";
import { FlutterLogo } from "../logo/FlutterLogo";
import { JavascriptLogo } from "../logo/JavascriptLogo";
import { NodeLogo } from "../logo/NodejsLogo";
import { DartLogo } from "../logo/DartLogo";



export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <p>Hello, i&apos;m</p>
            <h2 className="font-caption font-bold text-5xl text-primary">Tiavina</h2>
            <h3 className="text-3xl font-caption">
                I build mobile <br /> <span className="text-blue-500 font-bold">&</span> web application
            </h3>

            <p className="text-base">Welcome to my world of tech magic! I’m all about crafting innovative digital experiences.
                I am driven by a desire to continuously learn and embrace new challenges, always striving to explore new horizons and enhance my skills.
            </p>
            <div>
            <Code className="inline-flex items-center gap-1"><FlutterLogo size={12} className="text-foreground"></FlutterLogo> <span className="font-bold">Flutter</span></Code>
            <Code className="inline-flex items-center gap-1 ml-1"><DartLogo size={12} className="text-foreground"></DartLogo> <span className="font-bold">Dart</span></Code>
            <Code className="inline-flex items-center gap-1 ml-1"><JavascriptLogo size={12} className="text-foreground"></JavascriptLogo> <span className="font-bold">Javascript</span></Code>
            <Code className="inline-flex items-center gap-1 ml-1"><NodeLogo size={12} className="text-foreground"></NodeLogo> <span className="font-bold">Node</span></Code>
            </div>
            <a
                href="/CV/CV_TiavinaRamilison.pdf"
                download
                className="inline-block mt-4 w-36 px-2 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 text-center"
            >
                Resume
            </a>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
             {/* 
            <ProfileTiavina size={56} className="inline w-full h-auto max-w-xs max-md:w-56" />
       */}
       <img src="/images/Dev.png" className="inline w-full h-auto max-w-xs max-md:w-56" alt="" />
            </div>
    </Section>
}
