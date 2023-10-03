import "@code-hike/mdx/dist/index.css"
import Head from "next/head"
import "../global.css"
import "../custom-ch.css"

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
        <div>Zuora</div>
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
