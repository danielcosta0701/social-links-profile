import { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
    className?: string;
}

export default function Main(props: MainProps) {
    const { 
        children, 
        className = "" 
    } = props;

    return (
        <main className={`flex-grow flex justify-center items-center p-5 bg-neutral-900 ${className}`}>
            { children ?? "Sem conteúdo" }
        </main>
    );
}