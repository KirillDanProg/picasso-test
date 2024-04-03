export enum AppRoutes {
  MAIN = "MAIN",
  POSTS = "POSTS",
  POST = "POST",
  NOT_FOUND = "NOT_FOUND",
}

export type RoutesType = Record<AppRoutes, string>;

export const RoutePath: RoutesType = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.POSTS]: "posts",
  [AppRoutes.POST]: "posts/:id",
  [AppRoutes.NOT_FOUND]: "*",
};
