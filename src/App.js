import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beastBios from './data.json'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Header title="The Horned Beasts of Springfield" />
      <Main message="Big and strong or small and quick? Elegant and graceful or brash and brave?" beastBios={beastBios}/>
      <Footer text="There are no wrong answers!" />
    </Container>
  );
}

export default App;
