import type { PostType } from "../model/types/post";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { RoutePath } from "@/shared/config/routes";

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  const { id, title, body } = post;
  return (
    <Card
      sx={{
        maxWidth: "100%",
        marginBottom: "24px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: "14px",
        }}
      >
        <Typography color={"primary.dark"} variant="h5" component="div">
          {id}
        </Typography>
        <Typography sx={{ flexShrink: 0 }} variant="h6">
          {title}
        </Typography>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          component={Link}
          to={`${RoutePath.POSTS}/${post.id}`}
          sx={{ width: "min-content" }}
          size="medium"
          variant="text"
        >
          Просмотр
        </Button>
      </CardActions>
    </Card>
  );
};
