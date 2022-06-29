import { Bootcss } from "./components/Bootcss";
import { Input } from "./components/Input";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (<>
    <Bootcss/>
    <div className="container my-4">
      <h2>Enter your text here..</h2>
    <Input/>
    </div>

  </>);
}

export default App;
