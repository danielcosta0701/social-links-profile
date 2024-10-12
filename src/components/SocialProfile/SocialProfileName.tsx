interface SocialProfileNameProps {
    name?: string,
    className?: string,
}

export default function SocialProfileName(props: SocialProfileNameProps) {
    const { name, className } = props;

    return (
        <p className={`font-bold ${className}`}>
            { name ? name : 'Nome' }
        </p>
    );
}