interface SocialCardNameProps {
    name?: string,
    className?: string,
}

export default function SocialCardName(props: SocialCardNameProps) {
    const { 
        name, 
        className = ""
    } = props;

    return (
        <p className={`text-xl text-white font-bold ${className}`}>
            { name || 'Nome' }
        </p>
    );
}