import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import TaskOverview from './pages/TaskOverview.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/task-overview' element={<TaskOverview />}></Route>
      </Routes>
    </>
  );
}

export default App
