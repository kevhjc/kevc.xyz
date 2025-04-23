import Head from 'next/head';

import Container from 'components/Container';
import NotFound from 'components/NotFound';

const Custom404 = () => {
  return (
    <Container>
      <Head>
        <title>404 — Kevin H. Chung</title>
      </Head>
      <NotFound />
    </Container>
  );
};

export default Custom404;
