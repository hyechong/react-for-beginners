import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
} // react-router-dom의 component들은 url이 바뀌면 어떤 걸 보여줄지 결정한다.

export default App;
