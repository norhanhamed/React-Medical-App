import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Contact from './Pages/Contact';

const routes = createHashRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route path='/home' element={<Home />} />
    <Route path='/contactUs' element={<Contact />} />
  </Route>
))
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
