import Container from 'components/Container';
import Information from 'components/Information';
import Elsewhere from 'components/Elsewhere';
import Music from 'components/Music';

export default function Home() {
  return (
    <Container>
      <Information />
      <Elsewhere />
      <Music />
    </Container>
  );
}
