import { ReactNode } from "react";

interface SocialProfileBioProps {
    children: ReactNode,
    className?: string,
}

export default function SocialProfileBio(props: SocialProfileBioProps) {
    const { children, className } = props;

    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            { children ? children : "Sem biografia" }
        </div>
    );
}