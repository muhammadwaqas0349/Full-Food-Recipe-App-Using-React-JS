import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from "styled-components"

const Searched = () => {
  const [searchRecipes, SetSearchRecipes] = useState([]); 
  let params = useParams(); 

const getSearched = async (name) => {
  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9e5a10c4567e421ebb878626795b69c0&query=${name}`);
  const recipes = await data.json(); 
  SetSearchRecipes(recipes.results); 
}; 

useEffect( () => {
  getSearched(params.search); 
}, [params.search]); 



  return (
    <Grid>
        {searchRecipes?.map( (item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
              <img src={item.image} />
              <h4>{item.title}</h4>
              </Link>
            </Card>
          ); 
        })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;

  }
`; 

export default Searched