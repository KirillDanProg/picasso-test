import { NotFoundPage } from "@/pages/not-found-page";
import { MainPage } from "@/pages/main-page";
import { PostDetailsPage } from "@/pages/post-details-page";
import { PostsPage } from "@/pages/posts-page";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RoutePath } from "@/shared/config/routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePath.MAIN} element={<MainPage />}>
      <Route index element={<PostsPage />} />
      <Route path={RoutePath.POST} element={<PostDetailsPage />} />
      <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />} />
    </Route>
  )
);
