import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/user-api";
import { useEffect } from "react";

const Infinite = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: getAllUsers,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 5 ? allPages.length + 1 : undefined;
      },
    });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  return (
    <div className="">
      {data?.pages?.map((page, index) => {
        return (
          <ul
            key={index}
            className="flex justify-center items-center mt-10 flex-col space-y-3.5"
          >
            {page?.map((user) => {
              return (
                <li className="border w-1/3 p-4" key={user._id}>
                  <h1>name: {user.name}</h1>
                  <h2>email: {user.email}</h2>
                  <h2>username: {user.username}</h2>
                  <h2>password: {user.password}</h2>
                  <h2>phone: {user.phone}</h2>
                  <h2>address: {user.address}</h2>
                  <h2>gender: {user.gender}</h2>
                  <h2>role: {user.role}</h2>
                </li>
              );
            })}
          </ul>
        );
      })}
      {isFetchingNextPage && <div>loading more..</div>}
    </div>
  );
};

export default Infinite;
