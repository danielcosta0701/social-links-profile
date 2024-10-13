import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

interface SocialCardListItemProps {
    children?: ReactNode;
    href: string;
    title: string;
    platform?: number;
    linkClassName?: string;
    itemClassName?: string;
}

export default function SocialCardListItem(props: SocialCardListItemProps) {
    const {
        href,
        title,
        platform,
        linkClassName = "",
        itemClassName = "",
    } = props;

    let platformIcon = 
        platform == 1 ? faGithub : 
        platform == 2 ? faInstagram :
        platform == 3 ? faSpotify :
        null

    let plaftormStyle = 
        platform == 1 ? "hover:bg-[#181717]" :
        platform == 2 ? "hover:bg-[#C13584]" :
        platform == 3 ? "hover:bg-[#1DB954]" :
        null
    
    return (
        <li className={`flex flex-row gap-3 bg-gray-700 rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${plaftormStyle} ${itemClassName}`}>
            <a 
                href={href || "#"}
                target={href ? "_blank" : "_self"}
                className={`w-full flex flex-row items-center gap-3 p-3 text-white font-bold ${linkClassName}`}
            >
                { platformIcon && <FontAwesomeIcon icon={platformIcon} size="2x" /> }
                { title || "Sem título" }
            </a>
        </li>
    );
}