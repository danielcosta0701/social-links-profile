import { ReactNode } from "react";

interface SocialProfileContentProps {
    children: ReactNode,
    className?: string,
}

export default function SocialProfileContent(props: SocialProfileContentProps) {
    const { children, className } = props;

    return (
        <div className={`flex flex-col bg-blue-300 ${className}`}>
            {  children ? children : "Sem conteúdo" }
        </div>
    );
}