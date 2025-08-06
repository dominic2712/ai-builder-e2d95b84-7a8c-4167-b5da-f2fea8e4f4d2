import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Article } from '../types';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (error) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-2">
            <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;