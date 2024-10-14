import { Card } from "@/components/ui/card"
import { Section } from "../components/Section"
import home, { ALargeSmall,  LucideIcon, MessageCircle, Rss, StickyNote, Weight } from "lucide-react"
import { title } from "process"
import { SideProject, SideprojectProps } from "../components/SideProject"
import { ContactCard } from "../components/ContactCard"
import { Work, WorkProps } from "../components/Work"
import { EducationProps } from "../components/Education"
import { Code } from "../components/Code"
import Image from "next/image"

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">

        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2 ">
                <p className="text-lg text-muted-foreground">My project</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject key={index}
                            {...project} />
                    ))}
                </div>
            </Card>
        </div>

        <div className="flex-[2] w-full flex flex-col  gap-4">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Work</p>
                <div className="flex flex-col gap-4">
                    {WORKS.map((work, index) => (
                        <Work
                            key={index}
                            {...work} />
                    ))}
                </div>
            </Card>
            {/*
            <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard name="@tiavina.io" image="/images/profile.jpg" mediumImage="icons/codeline.png" description="16'000" url="/" />
                <ContactCard name="@tiavina.io" image="/images/profile.jpg" mediumImage="icons/codeline.png" description="16'000" url="/" />
                </Card>*/}
                 <p>I am currently in my third year of studying computer science at the public university known as
                     <Code className="inline-flex items-center gap-1">
                        <Image src="/icons/Cntemad.jpeg" width={16} height={16} className="inline object-cover" alt="Logo Cntemad" />
                        <span className="font-bold">Cntemad</span>
                    </Code>  . Below is an overview of my academic journey.</p>
            <Card className="p-4 flex-1">
                <div className="flex flex-col gap-4">
                    {EDUCATION.map((education, index) => (
                        <Work
                            key={index}
                            {...education} />
                    ))}
                </div>
            </Card>
        </div>
    </Section>
}

const SIDE_PROJECTS: SideprojectProps[] = [
    {
        imageSrc: "/images/lyrica.jpg",
        title: "Lyrify",
        description: "Lyrify is an app that brings your music to life with perfectly synced lyrics. Dive into a unique musical journey where every song reveals its story, one lyric at a time. In addition to featuring lyrics powered by the lrclib library, Lyrica also includes Malagasy songs from the renowned Tononkira collection. Enjoy a rich and authentic experience that combines precise lyric synchronization with the cultural diversity of Malagasy music and currently features 500 lyrics.",
        url: "https://lyrica-two.vercel.app",
        previewUrl: "https://lyrica-two.vercel.app",
        githubUrl: "https://lyrica-two.vercel.app"
    },
    {
        imageSrc: "/images/matematico.jpg",
        title: "Matematico",
        description: "This is a plugin for matematics, available integration numeric and matrix functionnality, OpenSource. Build with Nodejs.",
        url: "https://www.npmjs.com/package/matematico",
        previewUrl: "https://www.npmjs.com/package/matematico",
        githubUrl: "https://github.com/Tiavina22/matematico"
    },
   
    {
        imageSrc: "/images/tiny.jpg",
        title: "Tiny",
        description: "Tiny is a command-line CLI note manager developed in Dart. It enables users to add, list, delete, update, and search notes stored locally in a JSON file.",
        url: "https://github.com/Tiavina22/tiny",
        previewUrl: "https://github.com/Tiavina22/tiny",
        githubUrl: "https://github.com/Tiavina22/tiny"
    },
    {
        imageSrc:"/images/appistery.jpg",
        title: "Appistery",
        description: "A streaming app that immerses you in the world of Malagasy literature. Discover captivating stories and unique experiences that transport and inspire with every page. Perfect for lovers of traditional and modern Malagasy tales. ",
        url: "/",
        previewUrl: "/",
        githubUrl: "/"
    },
    {
        imageSrc: "/images/morpion2.jpg",
        title: "Morpion2",
        description: "A simple morpion game built with Node.js, featuring multiplayer functionality using Socket.io. Player 1 creates the game, and Player 2 joins to play.",
        url: "https://morpion-nodejs.onrender.com/",
        previewUrl: "https://morpion-nodejs.onrender.com/",
        githubUrl: "https://github.com/Tiavina22/morpion2"
    },
    {
        imageSrc: "/images/truncated.png",
        title: "Truncated Package",
    
        description: "Truncated is a simple Flutter widget that truncates long text and appends an ellipsis or any custom suffix. It supports expanding the text with a tap and provides smooth animation for opening and closing the text.",
        url: "https://pub.dev/packages/truncated",
        previewUrl: "https://pub.dev/packages/truncated",
        githubUrl: "https://github.com/Tiavina22/truncated"
    },



]



const WORKS: WorkProps[] = [
    {
        image: "/images/logo.jpg",
        title: "Mobile developer",
        role: "As a member of the Mistery Facebook page team, I work as a mobile developer responsible for developing our book streaming and booking application.",
        date: "2023 - Present",
        url: "/",
        freelance: true
    }
]

const EDUCATION: EducationProps[] = [
    {
        image: "/icons/Cntemad.jpeg",
        title: "Computer Science (L3 - CNTEMAD)",
        role: "Software Engineering and Database",
        date: "2024 - Present",
        url: "/"
    },
    {
        image: "/icons/Ispm.jpeg",
        title: "Computer science & Telecom (ISPM)",
        role: "Computer Management, Software Engineering and Artificial Intelligence",
        date: "2021 - 2023",
        url: "/"
    },
    {
        image: "/icons/ThomasBevan.jpeg",
        title: "Bacc (Lycée Thomas Bevan Toamasina)",
        role: "Scientific Baccalaureate, Series C",
        date: "2021",
        url: "/"
    }
]
