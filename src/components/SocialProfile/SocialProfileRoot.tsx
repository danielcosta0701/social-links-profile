export default function SocialProfileRoot({ children }) {
    return (
        <div className="bg-slate-500 rounded-lg p-5 min-w-80 flex flex-col gap-5">
            { children }
        </div>
    );
}