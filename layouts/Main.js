import Head from "next/head";

export default ({ children }) => (
  <main>
    <Head>
      <title>Moisés Ñañez</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
      ></script>
    </Head>
    <div className="wrapper">{children}</div>
    <style jsx global>{`
      a {
        color: inherit;
        text-decoration: none;
      }
      body {
        background-color: #292d35;
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        margin: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .wrapper {
        margin: 0 auto;
        max-width: 960px;
      }
      section {
        padding: 20px;
      }
    `}</style>
  </main>
);
