interface SocialCardDescriptionProps {
    description: string;
    className?: string;
}

export default function SocialCardDescription(props: SocialCardDescriptionProps) {
    const { 
        description, 
        className = "" 
    } = props;

    return (
        <p className={`text-white text-center ${className}`}>
            { description ?? 'Descrição' }
        </p>
    );
}