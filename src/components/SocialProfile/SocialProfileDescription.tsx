interface SocialProfileDescriptionProps {
    description?: string,
    className?: string,
}

export default function SocialProfileDescription(props: SocialProfileDescriptionProps) {
    const { description, className } = props;

    return (
        <p className={`text-center ${className}`}>
            { description ? description : 'Descrição' }
        </p>
    );
}