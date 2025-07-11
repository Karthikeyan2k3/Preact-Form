import { render } from 'preact';
import SignalsForm from './Components/SignalsForm';

export function App() {

	return (
		<>
			<SignalsForm /> 
		</>
	);
}

render(<App />, document.getElementById('app'));
