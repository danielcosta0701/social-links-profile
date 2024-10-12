import { ReactNode } from "react";

interface SocialProfileRootProps {
    children: ReactNode,
    className?: string,
}

export default function SocialProfileRoot(props: SocialProfileRootProps) {
    const { children, className } = props;

    return (
        <div className={`bg-slate-500 rounded-lg p-5 min-w-80 flex flex-col gap-5 ${className}`}>
            { children }
        </div>
    );
}