import type { PostType } from "../model/types/post";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  const { id, title, body } = post;
  return (
    <Card sx={{ maxWidth: "100%", marginBottom: "12px" }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "12px",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        <Typography sx={{ flexShrink: 0 }} gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          variant="body2"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/posts/${post.id}`}
          sx={{ flex: 1, textAlign: "center" }}
          size="small"
          variant="text"
        >
          Просмотр
        </Button>
      </CardActions>
    </Card>
  );
};
