// Currently not formated for Mobile View
import Image from "next/image";
import Content from "./content";

export default function Home() {
    return (
        <Content picture={"/Home.jpg"}>
            <div className="w-1/2 h-[50%] ml-[4%] relative">
                <Image
                    src="/Temp-PortfolioPic.png"
                    alt="Portfolio Pic"
                    sizes="100vw"
                    fill
                    style={{
                        objectFit: "contain"
                    }}
                    priority
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center pr-8 pl-8 text-center">
                <p className="text-4xl font-mono">
                    My Name Is Nathaniel Rojas
                </p>
                <p className="text-lg pt-5">
                    I'm currently exploring different skills from building C# applications, Web applications and
                    IoT devices. My current projects range from web technologies such as Express.js and Next.js to
                    using communicating to IoT modules on C. Feel free to explore my portfolio and I'd love the chance to display
                    my skills.  
                </p>
                <p className="pt-2">
                    Below are some of the different technologies I have used:
                </p>
                <div className="relative">
                    <Image
                        src="/Technologies.png"
                        alt="Technology Skills"
                        sizes="10vh"
                        height="450"
                        width="350"
                        style={{objectFit: "contain"}}
                        priority
                    />
                </div>
            </div>
        </Content>
    );
}
{/*
    I'm currently exploring different skills from building C# applications, Web applications and
    IoT devices. My current projects range from web technologies such as Express.js and Next.js to
    using communicating to IoT modules on C. Feel free to explore my portfolio and I'd love the chance to display
    my skills.    
*/}