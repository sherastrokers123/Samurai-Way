import './App.css';
import PageTitle from './components/PageTitle/PageTitle';
import Accardion from './components/Accordion/Accardion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
      <PageTitle title={"This is App Component"} />
      <PageTitle title={"My frends"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accardion titleValue={"Menu"} collapsed={true} />
      <Accardion titleValue={"User"} collapsed={true} />
    </div>
  );
}
export default App;
