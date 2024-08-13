import { Badge } from "@/components/ui/badge"
import { Section } from "../components/Section"
import { ReactLogo } from "../logo/ReactLogo"
import { Code } from "../components/Code"
import { TailwindLogo } from "../logo/TailwindLogo"
import { NodeLogo } from "../logo/NodejsLogo"
import { FlutterLogo } from "../logo/FlutterLogo"
import { DartLogo } from "../logo/DartLogo"
import { JavascriptLogo } from "../logo/JavascriptLogo"
import { PhpLogo } from "../logo/PhpLogo"
import { HtmlLogo } from "../logo/HtmlLogo"
import { CssLogo } from "../logo/CssLogo"
import { MysqlLogo } from "../logo/MysqlLogo"
import { SqliteLogo } from "../logo/SqliteLogo"
import { LinuxLogo } from "../logo/LinuxLogo"
import { UbuntuLogo } from "../logo/UbuntuLogo"
import { GithubIcon } from "../icons/GithubIcon"
import { GitLogo } from "../logo/GitLogo"
import { AndroidLogo } from "../logo/AndroidLogo"
import { SocketLogo } from "../logo/SocketLogo"
import { VscodeLogo } from "../logo/VscodeLogo"
import { SublimeLogo } from "../logo/SublimeLogo"
import { PostmanLogo } from "../logo/PostmanLogo"
import { FirefoxLogo } from "../logo/FirefoxLogo"

export const Stacks = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">Stack</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">My technologies and my tools</h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-1 gap-2">

               
            <HtmlLogo size={42} />
                <CssLogo size={42} />
                <JavascriptLogo size={42} />
                <ReactLogo size={42} className="animate-spin" style={{ animationDuration: "15s" }} />
                <TailwindLogo size={42} />


                {/* <NodeLogo size={42} className="animate-spin" style={{animationDuration: "10s"}} /> */}
            </div>


            <div className="flex gap-2  flex-1">
            <DartLogo size={42} />
                <FlutterLogo size={42} />
                <PhpLogo size={42} />
                <NodeLogo size={42} />
                
            </div>
            <div className="flex gap-2  flex-1">
            <MysqlLogo size={42} />
            <SqliteLogo size={42} sizee={125} />
            </div>
            <div className="flex gap-2  flex-1">
            <LinuxLogo size={42} className="animate-spin" style={{ animationDuration: "15s" }}  />
            <UbuntuLogo size={42} className="animate-spin" style={{ animationDuration: "15s" }}  />
            <AndroidLogo size={42} />
            <GithubIcon size={42} className="animate-spin" style={{ animationDuration: "15s" }}  />
            <GitLogo size={42} className="animate-spin" style={{ animationDuration: "15s" }}  />
            </div>

            <div className="flex gap-2  flex-1">
            <SocketLogo size={42} className="animate-spin" style={{ animationDuration: "15s" }}  />
            <VscodeLogo size={42} />
            <SublimeLogo size={42} />
            <PostmanLogo size={42}  className="animate-spin" style={{ animationDuration: "15s" }}/>
            <FirefoxLogo size={42}  className="animate-spin" style={{ animationDuration: "15s" }}/>
            </div>
        </div>
    </Section>
}
