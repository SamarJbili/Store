import { useState, useEffect } from 'react';
import axios from 'axios';
import ElementArticleCard from './ElementArticleCard';

function ListArticleCard() {
  const [articles, setArticles] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/produits');
        const data = response.data;
        setArticles(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategoryFilter(selectedCategory);
  };

  const filteredArticles = categoryFilter
    ? articles.filter((article) => article.categorie === categoryFilter)
    : articles;

  return (
    <div className="container">
      <h2>Liste des articles</h2>
      <form>
        <label>
          Choisissez une catégorie :
          <select value={categoryFilter} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="">Tous</option>
            <option value="femme">Femme</option>
            <option value="Homme">Homme</option>
            <option value="enfants">Enfant</option>
          </select>
        </label>
      </form>
      <ElementArticleCard articles={filteredArticles} />
    </div>
  );
}

export default ListArticleCard;
