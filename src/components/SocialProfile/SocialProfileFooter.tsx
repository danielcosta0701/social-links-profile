import { ReactNode } from "react";

interface SocialProfileFooterProps {
    children?: ReactNode,
    className?: string,
}

export default function SocialProfileFooter(props: SocialProfileFooterProps) {
    const { children, className } = props;

    return (
        <div className={`flex flex-col bg-purple-300 p-3 ${className}`}>
            { children ? children : "Sem conteúdo no rodapé" }
        </div>
    );
}