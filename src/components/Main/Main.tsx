export default function Main({ children }) {
    return (
        <main className="flex-grow flex justify-center items-center bg-red-300 p-4">
            { children }
        </main>
    );
}