import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticles from './ElementsArticles';
function ListArticles() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/produits")
        .then((response)=>setArticles(response.data));
       }, []);

    
          const deleteProd = async (id) => {
            if (!window.confirm("Are you sure you want to delete")) {
              return;
            }
        
            axios.delete('http://localhost:3001/produits/' + id)
              .then(() => {
                console.log('successfully deleted!')
                setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
              }).catch((error) => {
                console.log(error)
              })
        
          }
      

    return ( 
        <>
        <h2>Liste des articles </h2>
        <ElementsArticles articles={articles} deleteProd={deleteProd}/>
        </>
     );
}

export default ListArticles;
