import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=BricolageGrotesque:opsz,wght@12..96,200..800&family=CabinSketch:wght@400;700&family=DynaPuff:wght@400..700&=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="antialiased bg-[#fef5ea] overflow-x-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
