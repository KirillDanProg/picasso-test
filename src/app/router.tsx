import { NotFoundPage } from "@/pages/error-page";
import { MainPage } from "@/pages/main-page";
import { PostDetailsPage } from "@/pages/post-details-page";
import { PostsPage } from "@/pages/posts-page";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route index element={<PostsPage />} />
      <Route path="posts/:id" element={<PostDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
