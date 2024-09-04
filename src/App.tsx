import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import TaskOverview from './pages/TaskOverview.tsx';
import RequestPage from './pages/RequestPage.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/task-overview' element={<TaskOverview />}></Route>
        <Route path='/request' element={<RequestPage />}></Route>
      </Routes>
    </>
  );
}

export default App
