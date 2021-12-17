import './App.css';
import { useState } from 'react'
import {List} from './components/List'

function App() {
  const [kind, setKind] = useState('');
  const [length, setLength] = useState('');
  const [masterList, setMasterList] = useState([]);
  const [displayList, setDisplayList] = useState(masterList);

  const outOfWarranty = masterList.filter(word => word.includes('2020'));
  const inWarranty = masterList.filter(word => word.includes('2021'));

  function renderCount(num) {
    if (num === 0) {
      setLength(inWarranty.length);
      setDisplayList(inWarranty);
      setKind('In Warranty');
    } else if (num === 1) {
      setLength(outOfWarranty.length)
      setDisplayList(outOfWarranty)
      setKind('Out of Warranty')
    } else if (num === 2) {
      setLength(masterList.length)
      setDisplayList(masterList)
      setKind('Total Bad Units')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMasterList([...masterList, e.target[0].value])
    setDisplayList([...masterList, e.target[0].value])
    e.target[0].value = ''
  }

  const handleDelete = (strToRemove) => {
    setMasterList(masterList.filter(str => str !== strToRemove))
    setDisplayList(displayList.filter(str => str !== strToRemove))
  }

  const home = (
    <div>
      <header className="my welcome">
          WELCOME
      </header>
      <div>
          <p>
              <strong>Here you can see what is in/out of warranty!</strong>
          </p>
      </div>
      <p>
          <a className="space button-base padding bg-green" href="proj2.js">proj2.js</a>
          <a className="space button-base padding bg-red" href="index.css">index.css</a>
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text"/>
      </form>
      <p id="count">{kind} Count: {length}</p>
      <button className="button-base padding bg-green" onClick={() => renderCount(0)}>In warranty
      </button>
      <button className="button-base padding bg-red" onClick={() => renderCount(1)}>
          Out of warranty
      </button>
      <button className="button-base padding bg-blue" onClick={() => renderCount(2)}>
          Total Bad Units
      </button>
      <List list={displayList} handleDelete={handleDelete}/>
      <a href="/new-page">
        go to other page
      </a>
    </div>
  );

  const page2 = (
    <div>
      <h1>PAge2</h1>
    </div>
  )

  return (
    window.location.pathname === "/new-page" ? 
    page2 : home
  );
}

export default App;
