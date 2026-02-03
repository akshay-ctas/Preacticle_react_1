import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/user-api";
import { useState } from "react";

const Data = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page),
    placeholderData: keepPreviousData,
  });
  const totalPages = Math.ceil(
    data?.pagination?.total / data?.pagination?.limit,
  );
  return (
    <section>
      <table className="mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              name
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              email
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              username
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              password
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              age
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              role
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              phone
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              gender
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              address
            </th>
            <th className="px-4 py-2 text-sm font-bold border text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-green-100">
          {data?.data?.length === 0 ? (
            <tr>
              <td
                colSpan="9"
                className=" text-center text-green-800 px-2 py-4 border font-bold"
              >
                no data yet
              </td>
            </tr>
          ) : (
            data?.data?.map((data) => {
              return (
                <tr key={data._id}>
                  <td className="px-4 py-2 text-sm border">{data.name}</td>
                  <td className="px-4 py-2 text-sm border">{data.email}</td>
                  <td className="px-4 py-2 text-sm border">{data.username}</td>
                  <td className="px-4 py-2 text-sm border">{data.password}</td>
                  <td className="px-4 py-2 text-sm border">{data.age}</td>
                  <td className="px-4 py-2 text-sm border">{data.role}</td>
                  <td className="px-4 py-2 text-sm border">{data.phone}</td>
                  <td className="px-4 py-2 text-sm border">{data.gender}</td>
                  <td className="px-4 py-2 text-sm border">{data.address}</td>
                  <td className="px-4 py-2 text-sm border">
                    <span className="flex flex-row gap-2">
                      <button
                        onClick={() => {}}
                        className="bg-red-300 cursor-pointer px-2 py-1 font-bold  rounded hover:bg-red-600 hover:text-white"
                      >
                        Delete
                      </button>
                      <button className="bg-green-300 cursor-pointer px-2 py-1 font-bold  rounded hover:bg-green-600 hover:text-white">
                        Edit
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
        <div className="flex justify-center items-center gap-4 mt-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="bg-gray-800 text-white px-2 py-1 rounded cursor-pointer hover:bg-gray-700"
          >
            prev
          </button>
          <p>{page}</p>
          <p>...</p>
          <p>{totalPages}</p>
          <button
            disabled={
              page >=
              Math.ceil(data?.pagination?.total / data?.pagination?.limit)
            }
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-gray-800 text-white px-2 py-1 rounded cursor-pointer hover:bg-gray-700"
          >
            next
          </button>
        </div>
      </table>
    </section>
  );
};

export default Data;
