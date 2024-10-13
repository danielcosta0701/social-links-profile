import { ReactNode } from "react";

interface SocialCardContentProps {
    children: ReactNode;
    className?: string;
}

export default function SocialCardContent(props: SocialCardContentProps) {
    const { 
        children, 
        className = ""
    } = props;

    return (
        <div className={`flex flex-col ${className}`}>
            { children ?? "Sem conteúdo" }
        </div>
    );
}