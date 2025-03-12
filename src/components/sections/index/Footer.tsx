import Divider from "@/components/Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <Divider />
                <p className="text-center font-semibold text-base pt-2">
                    valor.gg - Made with Vercel, NextJS, TailwindCSS, TypeScript and Framer Motion.
                </p>
                <p className="text-center font-medium brightness-75 text-base">
                    Last updated: Mar 12th, 2025
                </p>
            </footer>
        </>
    );
}
