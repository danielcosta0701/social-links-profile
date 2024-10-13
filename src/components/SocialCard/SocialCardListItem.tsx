import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';

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

    const platformIcon = 
        platform == 1 ? faGithub : 
        platform == 2 ? faLinkedin :
        platform == 3 ? faSpotify :
        null

    const plaftormStyle = 
        platform == 1 ? "hover:bg-github" :
        platform == 2 ? "hover:bg-linkedin" :
        platform == 3 ? "hover:bg-spotify" :
        null
        
    return (
        <li className={`flex flex-row gap-3 bg-neutral-700 rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${plaftormStyle} ${itemClassName}`}>
            <a 
                href={href ?? "#"}
                target={href ? "_blank" : "_self"}
                className={`w-full flex flex-row items-center gap-4 p-3 text-white font-bold ${linkClassName}`}
            >
                { platformIcon && <FontAwesomeIcon icon={platformIcon} size="2x" fixedWidth /> }
                { title ?? "Sem título" }
            </a>
        </li>
    );
}