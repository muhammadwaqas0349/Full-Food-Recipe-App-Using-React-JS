import './App.css';
import Pages from './Pages/Pages';
import Category from './Components/Category';
import {BrowserRouter} from "react-router-dom"; 
import Search from './Components/Search';
import styled from "styled-components"; 
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    
    <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicious</Logo> 
        </Nav>
        <Search />
        <Category />
        <Pages />

    </BrowserRouter>
  )
}
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: cursive;
`; 
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`; 

export default App;
