import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component className="antialiased" {...pageProps} />
}

export default MyApp
