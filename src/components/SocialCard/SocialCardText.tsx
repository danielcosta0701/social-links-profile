interface SocialCardTextProps {
    text: string,
    className?: string,
}

export default function SocialCardText(props: SocialCardTextProps) {
    const { text, className } = props;

    return (
        <p className={`${className}`}>
            { text ? text : "Sem texto" }
        </p>
    );
}