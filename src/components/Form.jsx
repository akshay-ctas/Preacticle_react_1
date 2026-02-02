import React, { useState } from "react";

const Form = ({ setTableData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    age: "",
    phone: "",
    address: "",
    gender: "",
    role: "",
  });
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [age, setAge] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [role, setRole] = useState("");
  //   const [error, setError] = useState([]);

  //   const handleName = (e) => {
  //     if (e.target.value === null) {
  //       setError([...error, "please enter your name"]);
  //     }
  //     setName(e.target.value);
  //   };
  //   const handleEmail = (e) => {
  //     if (e.target.value === null) {
  //       setError([...error, "please enter your email"]);
  //     }
  //     if (!e.target.value.includes("@")) {
  //       setError([...error, "please enter valid email"]);
  //     }
  //     setEmail(e.target.value);
  //   };
  //   const handleUsername = (e) => {
  //     if (e.target.value === null) {
  //       setError([...error, "please enter your user name"]);
  //     }setTableData
  //     setUsername(e.target.value);
  //   };
  //   const handlePassword = (e) => {
  //     if (e.target.value === null) {
  //       setError([...error, "please enter your password"]);
  //     }
  //     setPassword(e.target.value);
  //   };

  //   const handleAge = (e) => {
  //     if (e.target.value === null) {
  //       setError([...error, "please enter your Age"]);
  //     }
  //     setAge(e.target.value);
  //   };

  //   const hanldePhone = (e) => {
  //     if (e.target.value === "") {
  //       setError([...error, "please enter your phone number"]);
  //     }
  //     setPhone(e.target.value);
  //   };

  //   const handleAddress = (e) => {
  //     if (e.target.value === null) {
  //       setError([...error, "please enter your address"]);
  //     }
  //     setAddress(e.target.value);
  //   };

  //   const handleGender = (e) => {
  //     setGender(e.target.value);
  //   };

  //   const handleRole = (e) => {
  //     setRole(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log({
  //       name,
  //       email,
  //       username,
  //       password,
  //       phone,
  //       age,
  //       role,
  //       address,
  //       gender,
  //     });
  //   };
  const [errors, setErrors] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    let errors = [];
    e.preventDefault();
    // console.log(formData.name);

    // if (!formData.name.trim()) {
    //   setError((prev) => [...prev, "name is required"]);
    // }
    // console.log(error);

    if (!formData.name.trim()) {
      errors.push("Name is require");
    }
    if (!formData.email.trim()) {
      errors.push("Email is require");
    }
    if (!formData.username.trim()) {
      errors.push("Username is require");
    }
    if (!formData.password.trim()) {
      errors.push("Password is require");
    }
    if (!formData.age.trim()) {
      errors.push("Age is require");
    }
    if (!formData.phone.trim()) {
      errors.push("Phone is require");
    }
    if (!formData.gender.trim()) {
      errors.push("Gender is require");
    }
    if (!formData.role.trim()) {
      errors.push("Role is require");
    }
    if (!formData.address.trim()) {
      errors.push("address is require");
    }
    if (errors.length > 0) {
      setErrors(errors);
    }
    if (errors.length === 0) {
      setTableData((prev) => [...prev, formData]);
    }
  };
  return (
    <div className="flex flex-col  mt-10">
      {errors?.map((error) => {
        return <span className="text-red-500">{error}</span>;
      })}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-full gap-4 mb-7">
          <div className=" flex flex-col w-1/3 ">
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
          <div className="flex flex-col w-1/3 ">
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
          <div className=" flex flex-col w-1/3 ">
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
          <div className="flex flex-col w-1/3 ">
            <label className="text-sm" htmlFor="name">
              password
            </label>
            <input
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
          <div className=" flex flex-col w-1/3 ">
            <label className="text-sm">Gender</label>
            <div>
              <span className="mr-4">
                <input
                  className="mr-1"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === "male"}
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
                  checked={formData.gender === "female"}
                  onChange={handleInput}
                />
                <label htmlFor="female" className="text-sm">
                  Female
                </label>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-1/3 ">
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
          <div className=" flex flex-col w-1/3 ">
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
          <div className="flex flex-col w-1/3 ">
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
        <div className="flex flex-col w-1/3 ">
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
