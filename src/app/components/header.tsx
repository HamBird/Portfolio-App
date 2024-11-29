import Link from "next/link";

export default function Header () {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white">
            Home
        </a>
        <div className="flex items-center space-x-4">
            <Link href="/about" className="text-white">About Me</Link>
            <Link href="/projects" className="text-white">Projects</Link>
            <a href="https://github.com/HamBird" target="_blank" className="text-white">Github</a>
        </div>
      </div>
    </nav>
  );
};


