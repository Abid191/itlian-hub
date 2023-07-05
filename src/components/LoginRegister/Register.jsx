/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    setError("");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imgUrl = form.imgUrl.value;
    console.log(name, email, password, imgUrl);

    if (!/^.{6,}$/.test(password)) {
      setError("Password must be more than 6 characters");
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          updateUser(name, imgUrl)
            .then(() => {
              toast.success("Registration Successful !");
              console.log("success")})
            .catch((err) => console.log(err));
          console.log(result.user);
        })
        .catch((err) => {
          toast.error("Registration Failed! Please Provide valid email and password!!")
          console.log(err);
        });
    }
  };
  return (
    
    <div className="my-16 my-container">
      
      <div className=" md:w-4/12 mx-auto">
        <h3 className="text-3xl text-gray-600 font-semibold font-josefin-sans text-center">
          Register New Account
        </h3>

        <form onSubmit={handleRegister}>
          <input
            className="input-form mb-5 mt-10"
            name="name"
            type="name"
            placeholder="Enter Name"
            required
          />
          <br />
          <input
            className="input-form mb-5"
            name="email"
            type="email"
            placeholder="Enter Email"
            required
          />
          <br />
          <input
            className="input-form mb-5"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
          />
          {error && <p className="text-yellow-500 my-0">{error}</p>}
          <br />
          <input
            className="input-form mb-5"
            name="imgUrl"
            type="text"
            placeholder="Photo URL"
            required
          />
          <div className="flex items-center ">
            <input
              className="h-5 w-5 checkbox checkbox-error border-2 border-red-400"
              type="checkbox"
              required
            />
            
            <p className="cursor-pointer text-gray-600 ml-2">
              I accept the <span className="text-red-500">Terms of use</span> &{" "}
              <span className="text-red-500">Privacy Policy.</span>{" "}
            </p>
          </div>

          <button className="button-primary text-white w-full !py-3 my-5">
            Register
          </button>
          <p className="mb-3 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="link-hover text-red-400">
              Login
            </Link>
          </p>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Register;
