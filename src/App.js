import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./Components/Portfolio/portfolio";
import { Helmet } from "react-helmet";
import structuredData from "./StructuredData";

function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
          <meta property="og:title" content="Mohd Aarif Ansari" />
          <meta
            property="og:url"
            content="https://aarifansari99.github.io/aarifansari/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:description"
            content="Hi, I am a Front-End Developer, This is my portfolio"
          />
        </Helmet>

        <Portfolio />
      </div>
    </>
  );
}

export default App;
