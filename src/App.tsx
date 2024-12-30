import { Container } from "react-bootstrap";
import './App.css'
import Hangman from './components/Hangman';

function App() {
	return (<Container fluid="sm">
		<Hangman word={"esternocleidomastoideo"} category={"muscles"} />
	</Container>);
}

export default App
