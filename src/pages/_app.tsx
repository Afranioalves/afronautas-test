import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../styles/boxicons-2.1.4/css/boxicons.css'
import '@/styles/aos-css/aos.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
