import './App.css';
import Address from './Component/Profile/Address.js';
import ProfilPhoto from './Component/Profile/ProfilPhoto.js';
import FullName from './Component/Profile/FullName.js';


function App() {
  return (
    <div className="App">
     <ProfilPhoto />

     <FullName />
     <Address />

    </div>
  );
}

export default App;
