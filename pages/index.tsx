import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../components/Home/HomePage";

export default function Home({ Component, pageProps }) {
    return (
        <>
            <ToastContainer />
            <HomePage />
            {/* <Component {...pageProps} /> */}
            
        </>
    );
}
