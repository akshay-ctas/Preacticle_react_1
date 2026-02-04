import React, { useState } from "react";

const UpdateModel = ({ setIsUpdateOpen, user, updateMutation }) => {
  const [formData, setFormData] = useState(user);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation({ id: user._id, data: formData });
    setIsUpdateOpen(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-200 px-6 py-4 rounded shadow-lg ">
        <h1>Edit User</h1>
        <div className="flex flex-col  mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row w-full gap-4 mb-7">
              <div className=" flex flex-col w-1/2 ">
                <label className="text-sm" htmlFor="name">
                  name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  name="name"
                  className="bg-gray-200  px-2 py-1 rounded "
                  placeholder="Enter your full name..."
                  onChange={handleInput}
                />
              </div>
              <div className="flex flex-col w-1/2 ">
                <label className="text-sm" htmlFor="name">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="bg-gray-200  px-2 py-1 rounded "
                  placeholder="Enter your email..."
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-4  mb-7">
              <div className=" flex flex-col w-1/2 ">
                <label className="text-sm" htmlFor="name">
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  className="bg-gray-200  px-2 py-1 rounded "
                  placeholder="Enter your user name..."
                  onChange={handleInput}
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-col w-1/2 ">
                <label disabled className="text-sm" htmlFor="name">
                  password
                </label>
                <input
                  disabled
                  type="password"
                  value={formData.password}
                  name="password"
                  autoComplete="current-password"
                  className="bg-gray-200  px-2 py-1 rounded "
                  placeholder="Enter your password..."
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-4  mb-7">
              <div className=" flex flex-col w-1/2 ">
                <label className="text-sm">Gender</label>
                <div>
                  <span className="mr-4">
                    <input
                      className="mr-1"
                      type="radio"
                      name="gender"
                      id="male"
                      value="fale"
                      checked={formData.gender === "Male"}
                      onChange={handleInput}
                    />
                    <label htmlFor="male" className="text-sm">
                      Male
                    </label>
                  </span>
                  <span className="">
                    <input
                      className="mr-0.5"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === "Female"}
                      onChange={handleInput}
                    />
                    <label htmlFor="female" className="text-sm">
                      Female
                    </label>
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-1/2 ">
                <label className="text-sm" htmlFor="name">
                  age
                </label>
                <input
                  type="date"
                  name="age"
                  value={formData.age}
                  className="bg-gray-200  px-2 py-1 rounded "
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-4 mb-7">
              <div className=" flex flex-col w-1/2 ">
                <label className="text-sm" htmlFor="name">
                  phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  name="phone"
                  className="bg-gray-200  px-2 py-1 rounded "
                  placeholder="Enter your phone number..."
                  onChange={handleInput}
                />
              </div>
              <div className="flex flex-col w-1/2 ">
                <label className="text-sm" htmlFor="name">
                  role
                </label>
                <select
                  id="role"
                  name="role"
                  className="bg-gray-200  px-2 py-1 rounded"
                  value={formData.role}
                  onChange={handleInput}
                >
                  <option value="" disabled>
                    select a role
                  </option>
                  <option value="frontend">Frontend developer</option>
                  <option value="backend">Backend developer</option>
                  <option value="fullstack">Fullstack developer</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-1/2 ">
              <label className="text-sm" htmlFor="address">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                placeholder="Enter your address"
                rows={4}
                value={formData.address}
                className="bg-gray-200  px-2 py-1 rounded"
                onChange={handleInput}
              ></textarea>
            </div>
            <button className="mt-10 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
              update
            </button>
            <button
              onClick={() => setIsUpdateOpen(false)}
              className="mt-10 ml-10 border text-black border-gray-900 px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
