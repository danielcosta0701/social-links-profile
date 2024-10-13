interface SocialCardTextProps {
    text: string;
    className?: string;
}

export default function SocialCardText(props: SocialCardTextProps) {
    const { 
        text, 
        className = "" 
    } = props;

    return (
        <p className={`text-white text-center font-bold ${className}`}>
            { text ?? "Sem texto" }
        </p>
    );
}