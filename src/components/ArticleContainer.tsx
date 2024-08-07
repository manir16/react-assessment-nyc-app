import React, { useEffect, useState } from 'react';
import {fetchMostPopularArticleData} from './../services/articleService'
import ArticleList from './ArticleList';
import { Paper, Typography } from '@mui/material';

const ArticleContainer: React.FC = () => {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getArticleData = async () => {
    try {
      const articleData = await fetchMostPopularArticleData('7');
      const {results} = articleData
      if (results) {
          setArticle(results);
      }     
    } catch (error) {
      // Handle error
      console.error('Failed to fetch Articles', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { 
    getArticleData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>No Article data</p>;

  return (
    <>  
    <Paper sx={{padding:'10px'}}>
        <Typography variant='h2'>
            Most Popular Articles
        </Typography>
    {article.length && <ArticleList articles={article}/>}
    </Paper>
    </>
    
  );
};

export default ArticleContainer