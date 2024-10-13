import { ReactNode } from "react";

interface SocialCardRootProps {
    children: ReactNode,
    className?: string,
}

export default function SocialCardRoot(props: SocialCardRootProps) {
    const { 
        children, 
        className = ""
    } = props;

    return (
        <div className={`min-w-80 flex flex-col gap-5 p-6 bg-neutral-800 rounded-lg shadow-sm ${className}`}>
            { children ?? "Sem conteúdo" }
        </div>
    );
}