import Container from 'components/Container';
import Information from 'components/Information';
import Elsewhere from 'components/Elsewhere';
import Activity, { Film } from 'components/Activity';

export default function Home() {
  return (
    <Container>
      <Information />
      <Elsewhere />
      {/* <Activity /> */}
    </Container>
  );
}
