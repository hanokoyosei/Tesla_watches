// import React from 'react';
// import Header from './components/Header/Header';
// import ProductsList from './components/ProductsList/ProductsList';

// const App = () => {
//   let logo ="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png"
//   let cars = [
//     {
//       model: "Model S",
//       image:
//         "https://www.ixbt.com/img/n1/news/2021/5/3/maxresdefault_0_large.png",
//       id: 1,
//     },
//     {
//       model: "Model Y",
//       image:
//         "https://www.ixbt.com/img/n1/news/2021/9/0/tesla%20model%20y_large.jpg",
//       id: 2,
//     },
//     {
//       model: "Model X",
//       image: "https://electrodrivemoscow.ru/img/b3s1.jpg",
//       id: 3,
//     },
//     {
//       model: "Model 3",
//       image:
//         "https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png",
//       id: 4,
//     },
//   ];
//   function getInfo(item){
//     console.log(item)
//   }
//   return (
//     <div>
//       <Header logo={logo} cars={cars} getInfo={getInfo}/>
//       <ProductsList cars={cars} getInfo={getInfo}/>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components2/ProductList/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components2/Header/Header';

const App = () => {
  return (  
    // указываем что роутинг будет в браузере
    <BrowserRouter>
    {/*  header будет на всех наших страницах */}
    <Header />
    {/* для перечисления роутов */}
      <Routes>
        {/* роуты */}
        <Route path="/" element={<ProductList />}/>
        <Route path="/add-product" element={<h1>Add Product page</h1>}/>
        <Route path="/edit-product" element={<h1>Edit product</h1>}/>
        <Route path="/contacts" element={<h1>Contacts</h1>}/>
        <Route path="/about-us" element={<h1>About us</h1>}/>
      </Routes>
    <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default App;