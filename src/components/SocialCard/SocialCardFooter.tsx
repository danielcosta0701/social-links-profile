import { ReactNode } from "react";

interface SocialCardFooterProps {
    children?: ReactNode,
    className?: string,
}

export default function SocialCardFooter(props: SocialCardFooterProps) {
    const { 
        children, 
        className = "" 
    } = props;

    return (
        <div className={`flex flex-col bg-purple-300 p-3 ${className}`}>
            { children || "Sem conteúdo no rodapé" }
        </div>
    );
}