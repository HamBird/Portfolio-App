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
            <div className="bg-white bg-opacity-75 text-black flex items-center justify-between h-[77vh] sm:h-[91vh] p-9 rounded-3xl">
                <div className="w-1/2 h-10 bg-green-600">
                    <p>Welcome to my portfolio</p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center pr-8">
                    <p>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    <p>Lorem IpsumLorem IpsuLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </div>
            </div>
        </div>
    );
}