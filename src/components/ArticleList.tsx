import React from "react";
import { Article } from "./../models/article-types";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ArticleListProps {
  articles: Article[];
}
const ArticleList: React.FC<ArticleListProps> = ({
  articles,
}: ArticleListProps) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/article/${id}`);
  };
  return (
    <>
      <Typography variant="h5">Most popular articles</Typography>
      <List>
        {articles.map((item: any) => (
          <React.Fragment key={item.id}>
     
            <ListItem onClick={() => handleClick(item.id)}>
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
            <Typography
              sx={{
                fontSize: "12px",
              }}
              variant="h6"
            >
              {item.updated}
            </Typography>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default ArticleList;
