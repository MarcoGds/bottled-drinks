import '../App.css';

import { DrinkDisplay } from '../components/index';
import React from 'react';

export function Home() {

  return (
    <React.Fragment>

      <DrinkDisplay />

      <div className='divider'>
        <h1>Destilados</h1>
      </div>
      <div className='spirits'>
        <div className='product1'>
          <img src='https://www.receiteria.com.br/wp-content/uploads/dry-martini-01.jpg' alt='' />
        </div>
        <div className='product2'>
          <img src='https://cdn.diffords.com/contrib/stock-images/2021/07/60f5620fe95e5.jpg' alt='' />
        </div>
        <div className='product3'>
          <img src="https://drinkoteket.com/wp-content/uploads/old-fashioned-640x640.jpg" alt="" />
        </div>
      </div>

      <div className='divider'>
        <h1>Acessórios</h1>
      </div>
      <div className='acessories'>
        <div className='product1'>
          <img src="https://cdn.diffords.com/contrib/products-and-services/2022/01/61e81c988da8f.jpeg" alt="" />
        </div>
        <div className='product2'>
          <img src="https://cdn.rhumattitude.com/wp-content/uploads/2021/10/50-ml-cocktail-kingdom-324x324.jpg" alt="" />
        </div>
        <div className='product3'>
          <img src="https://cdn.shoplightspeed.com/shops/647991/files/41192979/1652x1652x1/cocktail-kingdom-koriko-tin-28oz-gold.jpg" alt="" />
        </div>
      </div>

      <div className='footer'>Bottled Drinks LTDA.</div>
    </React.Fragment>
  );
}