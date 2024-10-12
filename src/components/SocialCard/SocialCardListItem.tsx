import { ReactNode } from "react";

interface SocialCardListItemProps {
    children?: ReactNode,
    href: string,
    title: string,
    platform?: number,
    linkClassName?: string,
    itemClassName?: string,
}

export default function SocialCardListItem(props: SocialCardListItemProps) {
    const {
        href,
        title,
        platform,
        linkClassName,
        itemClassName,
    } = props;

    return (
        <li className={`bg-gray-300 rounded-lg p-3 flex flex-row gap-3 hover:bg-slate-100 cursor-pointer ${itemClassName}`}>
            <a 
                href={href ? href : "#"} 
                target={href ? "_blank" : "_self"}
                className={`text-green-400 w-full flex flex-row gap-3 ${linkClassName}`}
            >
                { title ? title : "Sem título" }
                { platform ? platform : "Plataforma não definida" }
            </a>
        </li>
    );
}