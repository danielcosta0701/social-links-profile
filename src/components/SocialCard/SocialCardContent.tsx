import { ReactNode } from "react";

interface SocialCardContentProps {
    children: ReactNode,
    className?: string,
}

export default function SocialCardContent(props: SocialCardContentProps) {
    const { children, className } = props;

    return (
        <div className={`flex flex-col bg-blue-300 ${className}`}>
            {  children ? children : "Sem conteúdo" }
        </div>
    );
}