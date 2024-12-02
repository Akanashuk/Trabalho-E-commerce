import React from 'react';
import { useStore } from '../store'; 
import Headset from './Popular/Headset';
import Mouse from './Popular/Mouse';
import Teclados from './Popular/Teclados';


function Home({ isAuthenticated }) {
  const totalItems = useStore((state) => state.totalItems());
  const catalogProducts = useStore((state) => state.catalogProducts); 
  const removeProduct = useStore((state) => state.removeProduct); 

  
  const handleRemoveProduct = (productId) => {
    removeProduct(productId); 
  };

  return (
    

    <div class='body'>

      <main class='main1'>
        <h2>Bem-vindo ao E-commerce!</h2>
        <p>Offerta Black das Black Friday apenas hoje!!!</p>
      </main>

      
      <div className="produtos-exibidos">
        <h3>Produtos do Catálogo</h3>
        <div className="produtos-lista">
          {catalogProducts.map((product) => (
            <div key={product.id} className="produto">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>R${product.new_price}</p>
              <button onClick={() => handleRemoveProduct(product.id)}>Remover</button> {}
            </div>
          ))}
        </div>
      </div>
          <Headset/>
          <Mouse/>
          <Teclados/>
 
    </div>
  );
}

export default Home;
