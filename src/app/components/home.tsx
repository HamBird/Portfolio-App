// Currently not formated for Mobile View
import Image from "next/image";

export default function Home() {
    return (
        <div className="m-7">
            <Image
                className="dark:invert -z-10"
                src="/Home.jpg"
                alt="Background Pic"
                fill={true}
                priority
            />
            <div className="container bg-white bg-opacity-75 text-black flex items-center justify-between h-[77vh] sm:h-[91vh] p-9 rounded-3xl mx-auto">
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
                        Exploring different technologies
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
            </div>
        </div>
    );
}