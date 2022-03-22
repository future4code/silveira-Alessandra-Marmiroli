import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemAlessandra from './img/ale.jpg';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemAlessandra}
          nome="Alessandra Sandeski Marmiroli" 
          descricao="Oi, eu sou a Alessandra. Estou migrando de carreira. Atualmente estou me dedicando aos estudos na Labenu com foco no formação para me tornar Full Stack!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>
      
      <CardPequeno info="E-mail: alessandramarmiroli@gmail.com" className="pequenocard-container">
      </CardPequeno>

      <CardPequeno info="Rua Guadalajara, 185"
      className="pequenocard-container">
      </CardPequeno>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="" 
          descricao="Atuei como Vendedora de Empréstimo Consignado no Banco Real em maio de 2008 à outubro de 2010. Atuei como Vendedora de Automação na Duralex Informática em agosto de 2010 à abril de 2011. Gerente de vendas e atendimento ao público na Loja Maison Rosangela em julho de 2011 à março de 2019. No Rick´s Burger atuei como caixa em outubro de 2019 à outubro de 2020." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
