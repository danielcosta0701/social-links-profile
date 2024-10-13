import { ReactNode } from "react";

interface FooterProps {
    children?: ReactNode;
    className?: string;
}

export default function FooterRoot(props: FooterProps) {
    const { 
        children, 
        className = "" 
    } = props;

    return (
        <footer className={`flex flex-row justify-center items-center p-5 ${className}`}>
            { children ?? "Sem conteúdo" }
        </footer>
    );
}