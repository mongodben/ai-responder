import Head from "next/head";

export default function Four03() {
  return (
    <>
      <Head>
        <title>StoryTime</title>
        <meta name="description" content="403 Error" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>403 Error: Permission Denied</h1>
        <p>Make sure you include the secret in the request</p>
      </main>
    </>
  );
}
