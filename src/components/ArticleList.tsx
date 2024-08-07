import React from 'react';
import { Article } from './../models/article-types'; 
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

interface ArticleListProps {
    articles: Article[];
  }
  const ArticleList: React.FC<ArticleListProps> = ({ articles }:ArticleListProps) => {
    return <>
     <List>
      {articles.map((item:any) => (
        <React.Fragment key={item.id}>
          <ListItem>
           
            <ListItemText
              primary={item.title}
              secondary={
                <>
                  <Typography variant="body2" color="text.secondary">
                    {item.byline}
                  </Typography>
                 
                  <Typography variant="body2" color="text.secondary">
                    {item.abstract}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
    </>
}

export default ArticleList