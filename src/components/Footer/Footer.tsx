import { ReactNode } from "react";

interface FooterProps {
    children?: ReactNode,
    className?: string,
}

export default function Footer(props: FooterProps) {
    const { 
        children, 
        className = "" 
    } = props;

    return (
        <footer className={`flex flex-row justify-center items-center p-3 ${className}`}>
            { children || "Sem conteúdo" }
        </footer>
    );
}