import Head from 'next/head';

import Container from 'components/Container';
import Information from 'components/Information';
import Elsewhere from 'components/Elsewhere';
import Activity, { Film } from 'components/Activity';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Kevin H. Chung</title>
      </Head>
      <Information />
      <Elsewhere />
      <Activity />
    </Container>
  );
}
