import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
const Home = React.lazy(() => import('../Pages/Home'));
const Details = React.lazy(() => import('../Pages/Details'));
const WishList = React.lazy(() => import('../Pages/WishList'));
const Search = React.lazy(() => import('../Pages/Search'));
const Error = React.lazy(() => import('../Pages/Error'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}
