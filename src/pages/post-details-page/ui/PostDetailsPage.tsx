import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useGetPostByIdQuery } from "@/entities/post/model/api/post";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import PostDetailsSkeleton from "./PostDetailsSkeleton";

export const PostDetailsPage = () => {
  const { id = "1" } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery({ id });
  const navigate = useNavigate();

  const onGoBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Button
        onClick={onGoBackHandler}
        variant="outlined"
        sx={{ margin: "20px 0" }}
      >
        Назад
      </Button>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={20}
      >
        {isLoading ? (
          <PostDetailsSkeleton />
        ) : (
          <Card sx={{ maxWidth: 440 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post?.id}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {post?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post?.body}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Stack>
    </>
  );
};
