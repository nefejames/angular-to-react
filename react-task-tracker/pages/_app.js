import "../styles/globals.css";
import ShowFormContextProvider from "../context/showFormContext";

function MyApp({ Component, pageProps }) {
  return (
    <ShowFormContextProvider>
      <Component {...pageProps} />
    </ShowFormContextProvider>
  );
}

export default MyApp;
