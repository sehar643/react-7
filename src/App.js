import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import usersData from './data/UsersList';

function App() {



  return (
    <div className="App">
      <Users abc={usersData} />

    </div>
  );
}

export default App;