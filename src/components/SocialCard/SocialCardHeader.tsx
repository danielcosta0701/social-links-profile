import { ReactNode } from "react";

interface SocialCardHeaderProps {
    children: ReactNode,
    className?: string,
}

export default function SocialCardHeader(props: SocialCardHeaderProps) {
    const { 
        children, 
        className = "" 
    } = props;

    return (
        <div className={`flex flex-col justify-center items-center bg-blue-200 gap-3 ${className}`}>
            { children || "Sem conteúdo no cabeçalho" }
        </div>
    );
}