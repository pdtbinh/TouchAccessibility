import './Home.css';
import Canva from '../../components/canvas/Canva';
import Button from '../../components/buttons/Button';
import Holder from '../../components/holders/Holder';
import Headline from '../../components/texts/Headline';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  const goToMaze = () => navigate('/maze')

  const goToMore = () => navigate('/more')

  return (
    <Canva>
      <Holder>
        <Headline>MAZE</Headline>
        <Button onClick={goToMaze}>
          Start
        </Button>
        <Button onClick={goToMore}>
          More
        </Button>
      </Holder>
    </Canva>
  );
}