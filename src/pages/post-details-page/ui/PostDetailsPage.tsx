import { useParams } from "react-router-dom";

export const PostDetailsPage = () => {
  const { id } = useParams();
  return <main>PostDetailsPage: {id}</main>;
};
