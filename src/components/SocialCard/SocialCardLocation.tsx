interface SocialCardLocationProps {
    location: string;
    className?: string;
}

export default function SocialCardLocation(props: SocialCardLocationProps) {
    const { 
        location,
        className = ""
    } = props;

    return (
        <p className={`text-center text-gray-300 text-sm ${className}`}>
            { location ?? "Sem localização" }
        </p>
    );
}