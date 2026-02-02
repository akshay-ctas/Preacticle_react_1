import React from "react";

const Data = ({ tableData }) => {
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
          </tr>
        </thead>
        <tbody className="bg-green-100">
          {tableData.length === 0 ? (
            <tr>
              <td
                colSpan="9"
                className=" text-center text-green-800 px-2 py-4 border font-bold"
              >
                no data yet
              </td>
            </tr>
          ) : (
            tableData?.map((data) => {
              return (
                <tr>
                  <td className="px-4 py-2 text-sm border">{data.name}</td>
                  <td className="px-4 py-2 text-sm border">{data.email}</td>
                  <td className="px-4 py-2 text-sm border">{data.username}</td>
                  <td className="px-4 py-2 text-sm border">{data.password}</td>
                  <td className="px-4 py-2 text-sm border">{data.age}</td>
                  <td className="px-4 py-2 text-sm border">{data.role}</td>
                  <td className="px-4 py-2 text-sm border">{data.phone}</td>
                  <td className="px-4 py-2 text-sm border">{data.gender}</td>
                  <td className="px-4 py-2 text-sm border">{data.address}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Data;
