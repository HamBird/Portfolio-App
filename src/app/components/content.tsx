import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ContentProps {
    children: React.ReactNode;
    picture: string | StaticImport;
    container?: string;
}

export default function Content({children, picture, container}: ContentProps) {
    return (
    <div className="m-7">
        <Image
            className="dark:invert -z-10"
            src={picture}
            alt="Background Pic"
            fill={true}
            priority
        />
        {/* <div className="container bg-white bg-opacity-75 text-black flex items-center justify-between h-[77vh] sm:h-[91vh] p-9 rounded-3xl mx-auto"> */}
        <div className={container}>
           {children}
        </div>
    </div>
    )
}

Content.defaultProps = {
    container: "container bg-white bg-opacity-75 text-black flex items-center justify-between h-[77vh] sm:h-[91vh] p-9 rounded-3xl mx-auto"
}