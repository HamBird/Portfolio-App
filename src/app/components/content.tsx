import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ContentProps {
    children: React.ReactNode;
    picture: string | StaticImport;
    container?: string;
}

export default function Content({children, picture, container = "container bg-white bg-opacity-75 text-black flex items-center justify-between h-[calc(100vh-4.4rem)] sm:h-[91vh] p-9 rounded-3xl mx-auto"}: ContentProps) {
    return (
    <div className="sm:m-7 m-2">
        <Image
            className="dark:invert -z-10"
            src={picture}
            style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", objectFit: "cover"}}
            alt="Background Pic"
            fill={true}
            priority
        />
        <div className={container}>
           {children}
        </div>
    </div>
    )
}