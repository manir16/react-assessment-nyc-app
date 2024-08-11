import React from 'react';
import { useParams } from 'react-router-dom';
import { Article } from './../models/article-types';
import { Divider, Typography } from '@mui/material';

interface ArticleDetailProps {
  articles: Article[];
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articles }) => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) return <div>Article not found</div>;

  return (
    <div>
       <Typography sx={{
                fontSize: "16px",
              }}variant="h6">Detail Page</Typography>
   
      <Typography variant="h5">{article.title}</Typography>
      <Typography
              sx={{
                fontSize: "12px",
              }}
              variant="h6"
            >
              {article.updated}
            </Typography>
            <Divider/>
      <Typography variant="body1">{article.abstract}</Typography>
      <Typography variant="body2" color="text.secondary">
        By {article.byline}
      </Typography>
     
    </div>
  );
};

export default ArticleDetail;