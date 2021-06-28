import Head from 'next/head';
import SignIn from './signIn';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mentoring program</title>
      </Head>
      <SignIn />
    </div>
  );
}
