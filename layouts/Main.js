import Head from 'next/head';

export default ({ children }) => (
  <main>
    <Head>
      <title>Moisés Ñañez</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    </Head>
    {children}
    <style jsx global>{`
      a {
        text-decoration: none;
        color: inherit;
      }
      body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </main>
)
