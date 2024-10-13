import { ReactNode } from "react";

interface SocialCardListProps { 
    children: ReactNode,
    className?: string,
}

export default function SocialCardList(props: SocialCardListProps) {
    const { 
        children, 
        className = ""
    } = props;

    return (
        <ul className={`flex flex-col gap-3 ${className}`}>
            { children ?? "Sem itens na lista" }
        </ul>
    );
}