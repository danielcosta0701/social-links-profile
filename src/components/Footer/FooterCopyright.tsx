import { ReactNode } from "react";


interface FooterCopyrightProps {
    children: ReactNode,
    className?: string,
}

export default function FooterCopyright(props: FooterCopyrightProps) {
    const { 
        children,
        className = ""
    } = props;

    return (
        <p className={`text-white text-center ${className}`}>
            { children ?? "Sem conteúdo" }
        </p>
    );  
}