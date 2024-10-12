import { ReactNode } from "react";

interface SocialCardBioProps {
    children: ReactNode,
    className?: string,
}

export default function SocialCardBio(props: SocialCardBioProps) {
    const { 
        children, 
        className = ""
    } = props;

    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            { children || "Sem biografia" }
        </div>
    );
}