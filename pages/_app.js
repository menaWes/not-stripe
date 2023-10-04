import "@code-hike/mdx/dist/index.css"
import Head from "next/head"
import "../global.css"
import "../custom-ch.css"
import logo from "../logo.svg";
import Image from 'next/image';
function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  console.log(Component);
  return (
    <div>
      <Head>
        <title>Zuora SDK Tutorials</title>
      </Head>
      <nav>
        {/* Todo: Add Zuora logo here */}

        <a href="http://localhost:3000/">
          <Image src={logo} className="App-logo" alt="logo" height={75} />
        </a>
     
      </nav>
      <article>
        <div>
          <Component {...pageProps} />
        </div>
      </article>
    </div>
  )
}

export default MyApp
