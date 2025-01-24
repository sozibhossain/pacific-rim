"use client";
import { ReactNode } from "react";

interface Props {
  routes: string[];
  children: ReactNode;
  currentPath: string;
}

const Hideon = ({ children, routes, currentPath }: Props) => {
  // Check if the current pathName starts with any hideRoutes item
  const shouldHideNavbar = routes.some((route) =>
    currentPath.startsWith(route)
  );

  // If the Navbar should be hidden, return null
  if (shouldHideNavbar) {
    return null;
  }
  return <div>{children}</div>;
};

export default Hideon;