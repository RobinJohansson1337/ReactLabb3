import Head from 'next/head'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Välkommen till labb3!
        </h1>

        <a>http://localhost:3000/photos för att titta på bilder</a><br></br>
        <a>http://localhost:3000/users för att titta på användare</a><br></br>
        <a>http://localhost:3000/ssr för att titta på bilder (getServerSideProps)</a><br></br>
        <a>http://localhost:3000/x för att titta på bilder där X är id (getServerSideProps)</a><br></br>
      </main>

    </div>
  )
}
