import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { User } from './components/User/Info';
function App() {
  const [listView, setListView] = useState(true);

  return (
    <>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={
          <>
            <Header listView={listView} setListView={setListView} />
            <User listView={listView}/>
          </>
          
        }></Route>
      </Routes>
    </>
    
  );
}

export default App;
