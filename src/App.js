
import './App.css';
import Header from './components/Header'
import  ManageTable from './components/ManageTable'
import React, {useState} from 'react'
import data from './components/data.json'
import AddForm from './components/AddForm'
function App() {
    const [employees, setEmployees] = useState(data)
    const [hidden, setHidden] = React.useState(true);

    const addEmployee = employee => {
        setEmployees([...employees,employee])
    }
  return (
    <div className="App">
        <Header setHidden={setHidden}/>
        <ManageTable employees={employees}/>
        <AddForm hidden={hidden} setHidden={setHidden} addEmployee={addEmployee}/>
    </div>
  );
}

export default App;
