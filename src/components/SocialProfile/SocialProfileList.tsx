import { ReactNode } from "react";

interface SocialProfileListProps { 
    children: ReactNode,
    className?: string,
}

export default function SocialProfileList(props: SocialProfileListProps) {
    const { children, className } = props;

    return (
        <ul className={`flex flex-col gap-3 ${className}`}>
            { children ? children : "Sem itens na lista" }
        </ul>
    );
}