import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { PiX } from "react-icons/pi";
import Logo from './assets/Logo.png';
import C1 from './assets/c1.png';
import C2 from './assets/c2.png';
import Cups from './assets/Cups.png';
import { Container, DivTitulos, Header, Imagens, Blurs1, Blurs2 } from './styles';


function App() {

  const [menuMobile, setMenuMobile] = useState(false);

  console.log(menuMobile);

  return (
    <Container>
      <Header>
        <div className='logo'>
          <img src={Logo} alt='logo' />
          <h2>ROCKETSEAT</h2>
        </div>
        <nav style={{ top: menuMobile ? "7.4rem" : "-100rem"}}>
          <p><hr /> Home</p>
          <p>Menu</p>
          <p>Recompensas</p>
          <p>Gift Cards</p>
          <p>Loja</p>
        </nav>
        <button className='pegar'>
          PEGAR MEU CAFÉ
        </button>
        <button onClick={() => setMenuMobile(!menuMobile)} className='menu-mobile'>
          {menuMobile? 
            <PiX size={20} color='#8257E5' />
          : 
            <RxHamburgerMenu size={20} color='#8257E5' />
          }
        </button>
      </Header>

      <div className='mobile'>
        <p>
          O café que fará seu código decolar para 
          o próximo nível.
        </p>
        <button>
          PEGAR MEU CAFÉ
        </button>
      </div>
      <DivTitulos>
        <h1>Great Coffe</h1>
        <h2>{"<Great Code/>"}</h2>
        <Imagens>
          <div>
            <img className='grao1' src={C2} alt='img-grao1' />
            <img className='copos' src={Cups} alt='img-copos' />
            <img className='grao2' src={C1} alt='img-grao2' />
          </div>
        </Imagens>
      </DivTitulos>

      <Blurs1 />
      <Blurs2 />

    </Container>
  );
}

export default App;
