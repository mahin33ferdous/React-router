
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Layout from './Layout/Layout';

function App() {

  const router= createBrowserRouter([

    {path:'/', element:<Layout></Layout>, children:[
      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
    {path:'/about', element:<About></About>},
    {path:'/friends',element:<Friends></Friends>}
    ]},
    
    {path:'/products',element:<Products></Products>},
    {path:'*', element:<div>Not Found</div>}

           

            
             
            
  ])
  return (
    <div className="App">
          <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
