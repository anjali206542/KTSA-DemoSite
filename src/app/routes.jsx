import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layouts/root-layout";
import { AdminLayout } from "./components/layouts/admin-layout";
import { HomePage } from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import { RankingsPage } from "./pages/rankings-page";
import { BlogPage } from "./pages/blog-page";
import { BlogDetailPage } from "./pages/blog-detail-page";
import { AdminLoginPage } from "./pages/admin/login-page";
import { AdminDashboardPage } from "./pages/admin/dashboard-page";
import { AdminRankingsPage } from "./pages/admin/rankings-page";
import { AdminTournamentsPage } from "./pages/admin/tournaments-page";
import { AdminBlogsPage } from "./pages/admin/blogs-page";
import { AdminGalleryPage } from "./pages/admin/gallery-page";
import { NotFoundPage } from "./pages/not-found-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "rankings", Component: RankingsPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:id", Component: BlogDetailPage },
    ],
  },
  {
    path: "/admin/login",
    Component: AdminLoginPage,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboardPage },
      { path: "rankings", Component: AdminRankingsPage },
      { path: "tournaments", Component: AdminTournamentsPage },
      { path: "blogs", Component: AdminBlogsPage },
      { path: "gallery", Component: AdminGalleryPage },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
