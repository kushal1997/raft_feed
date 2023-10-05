import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Navbar from './cmponents/Navbar';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas,far);
function App() {
  return (
    <div className="App">
     <Navbar/>
  
    </div>
  );
}

export default App;
