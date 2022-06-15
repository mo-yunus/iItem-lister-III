
import './App.css';
import ItemList from './components/ItemList';
import Form from './components/Form';
import MenuBar from './MenuBar';
import { useState } from 'react';

function App() {

  const [inputItem, setInputItem] = useState("");
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  }


  return (
    <div>
      <div className="container">
        <MenuBar setSearch={setSearch} items={items} search={search} handleSearch={handleSearch} />
      </div>
      <div id='main-container'>
        <div className="container-1">
          <Form items={items} setInputItem={setInputItem} setItem={setItem} inputItem={inputItem} />
        </div>
        <ItemList setItem={setItem} items={items} search={search} />
      </div>
    </div>
  )
};

export default App