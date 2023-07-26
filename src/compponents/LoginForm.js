import React from "react";

const LoginForm = () => {
  return (
    <div className="flex h-screen">
    <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:"url('../asserts/Image.png')", 

        }}
      ></div>
      <div className="w-1/2 bg-white-200 flex items-center justify-center">
        <form className="w-3/4 p-6 bg-gray-200 rounded-lg shadow-md">
      <h1>Sign In</h1>
          <label className="font-medium text-paragraph font-fwRegular">
            Email
          </label>
          <input
            type="text"
            className="w-full px-4 my-3 py-2 border rounded-lg border-gray-400"
            placeholder="Enter Email Address"
          />
          {/* <span className="text-red-500">This field is required</span> */}
          <br />
          <label className="font-medium text-paragraph font-fwRegular">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 mt-3 py-2 border rounded-lg border-gray-400"
            placeholder="Enter Password"
          />
          {/* <span className="text-red-500">This field is required</span> */}
          <button
            type="submit"
            className="bg-btn my text-paragraph rounded-lg py-2 text-red-600 w-full mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default LoginForm;
