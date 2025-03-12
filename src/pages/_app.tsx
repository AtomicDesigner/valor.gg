import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"valor the sigma"}
        description={"fuck guns.lol make ur own"}
        canonical={`https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "valor the sigma",
          description: "fuck guns.lol make ur own",
          images: [
            {
              url: "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png",
              alt: "Zorro",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
