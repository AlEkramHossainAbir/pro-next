"use client"

import { useRouter } from "next/navigation";

const Button:React.FC<{children:string}> = ({children}) =>{
    const router = useRouter();
    const handleClick = () => {
        router.push('/dashboard/analytics');
    }
    return <button onClick={handleClick} className="bg-blue-500 px-3 py-2 mt-6 rounded text-gray-200">{children}</button>;
}
export default Button;