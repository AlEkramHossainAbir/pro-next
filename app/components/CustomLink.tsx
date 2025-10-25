"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
    path: string;
    children: React.ReactNode;
  }

 const CustomLink: React.FC<CustomLinkProps> = ({path, children})=>{
    const pathname = usePathname()
    const active = pathname === path;

    return(
        <Link href={path} className={active ? "text-blue-500":""}>{children}</Link>
    )
}

export default CustomLink;