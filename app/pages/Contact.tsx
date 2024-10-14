import { Badge } from "@/components/ui/badge"
import { Section } from "../components/Section"
import { ContactCard } from "../components/ContactCard"

export const Contact = () => {
    const contacts = [
        {
            name: "Gmail",
            className: "flex-1",
            image: "/images/gmail.jpg",
            mediumImage: "/images/profile.jpg",
            description: "tiavinaramilison22@gmail.com",
            url: "mailto:tiavinaramilison22@gmail.com",
            
        },
        {
            name: "Linkedin",
            className: "flex-1",
            image: "/images/linkedin.jpg",
            mediumImage: "/images/profile.jpg",
            description: "Tiavina Ramilison",
            url: "https://linkedin.com/in/tiavina-ramilison"
        }]
    
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">Contact me</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">I am eager to contribute and work together</h2>
        <div className="flex max-md:flex-col w-full gap-4">
        {contacts.map((contact, index) => (
                    <ContactCard
                        key={index}
                        name={contact.name}
                        image={contact.image}
                        mediumImage={contact.mediumImage}
                        description={contact.description}
                        url={contact.url}
                    />
                ))}
              
        </div>
    </Section>
}
