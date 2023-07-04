import React from 'react';
import ReactDOM from 'react-dom/client';
// import Loginform from './Loginform';
import Navbnb from './Navbnb/Navbnb';
import Herobnb from './Herobnb/Herobnb';
import Cards from './Cards/Cards';
// import Antd from './Antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Navbnb/>
    <Herobnb/>
    <Cards/>

    </div>
   
  </React.StrictMode>
);


