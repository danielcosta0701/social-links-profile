interface SocialCardImageProps {
    href?: string,
    src?: string,
    alt?: string,
    className?: string,
}

export default function SocialCardImage(props: SocialCardImageProps) {
    const { 
        href, 
        src, 
        alt, 
        className = ""
    } = props;

    return (
        <a 
            href={href ?? "#"} 
            target={href ? "_blank" : "_self"}
        >
            <img 
                src={src ?? "Sem endereço da imagem"} 
                alt={alt ?? "Sem descrição"}
                className={`w-16 h-16 flex bg-gray-700 rounded-full ${className}`} 
            />
        </a>
    );
}