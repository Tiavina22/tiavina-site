import { Badge } from "@/components/ui/badge"
import { Section } from "../components/Section"
import { ReactLogo } from "../logo/ReactLogo"
import { Code } from "../components/Code"
import { TailwindLogo } from "../logo/TailwindLogo"
import { OpenAILogo } from "../logo/OpenAiLogo"
import { NodeLogo } from "../logo/NodejsLogo"

export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">I love working on ...</h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2  flex-1">
               
                  <ReactLogo size={42} className="animate-spin" style={{animationDuration: "10s"}} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">React</h3>
              <p className="text-sm text-muted-foreground">My main framework is <Code> React </Code>. I also use <Code>Next.js</Code> as a backend and frontend framework.</p>
          </div>
          <div className="flex flex-col gap-2  flex-1">
               
                  <TailwindLogo size={72} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Tailwind</h3>
              <p className="text-sm text-muted-foreground">I can create <u>beautiful</u> application <i>in seconds</i> using <Code>TailwindCss</Code> </p>
          </div>
          <div className="flex flex-col gap-2  flex-1">
               
                  <OpenAILogo size={42} className="animate-spin" style={{animationDuration: "10s"}} />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">OpenAI</h3>
              <p className="text-sm text-muted-foreground">My main framework is <Code> React </Code>. I also use <Code>Next.js</Code> as a backend and frontend framework.</p>
          </div>
          <div className="flex flex-col gap-2  flex-1">
               
                  <NodeLogo size={42}  />
              <h3 className="text-2xl font-semibold tracking-tight mb-2">OpenAI</h3>
              <p className="text-sm text-muted-foreground">My main framework is <Code> React </Code>. I also use <Code>Next.js</Code> as a backend and frontend framework.</p>
          </div>
        </div>
    </Section>
}
