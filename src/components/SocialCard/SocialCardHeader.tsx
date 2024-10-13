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
        <div className={`flex flex-col justify-center items-center gap-3 rounded-xl ${className}`}>
            { children || "Sem conteúdo no cabeçalho" }
        </div>
    );
}