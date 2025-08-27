"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({path, children}){
    const pathname = usePathname()
    console.log("CustomLink", pathname, path)
    return(
        <Link href={path}>{children}</Link>
    )
}