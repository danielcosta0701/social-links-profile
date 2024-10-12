interface SocialProfileImageProps {
    href?: string,
    src?: string,
    alt?: string,
    className?: string,
}

export default function SocialProfileImage(props: SocialProfileImageProps) {
    const { href, src, alt, className } = props;

    return (
        <a 
            href={href ? href : "#"} 
            target={href ? "_blank" : "_self"}
        >
            <img 
                src={src ? src : "Sem endereço da imagem"} 
                alt={alt ? alt : "Sem descrição"}
                className={`bg-red-300 rounded-full w-16 h-16 ${className}`} 
            />
        </a>
    );
}