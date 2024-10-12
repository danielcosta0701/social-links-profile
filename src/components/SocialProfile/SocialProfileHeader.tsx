import { ReactNode } from "react";

interface SocialProfileHeaderProps {
    children: ReactNode,
    className?: string,
}

export default function SocialProfileHeader(props: SocialProfileHeaderProps) {
    const { children, className } = props;

    return (
        <div className={`flex flex-col justify-center items-center bg-blue-200 gap-3 ${className}`}>
            { children ? children : "Sem conteúdo no cabeçalho" }
        </div>
    );
}