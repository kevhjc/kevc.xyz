import Container from 'components/Container';
import Information from 'components/Information';
import Music from 'components/Music';
import Elsewhere from 'components/Elsewhere';

export default function Home() {
  return (
    <Container>
      <Information />
      <Music />
      <Elsewhere />
    </Container>
  );
}
