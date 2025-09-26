import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Wix Logo */}
      <div className="absolute top-6 left-10 text-2xl font-bold">WIX</div>

      {/* Login Box */}
      <div className="w-full max-w-4xl bg-white p-8">


        <h1 className="text-3xl font-bold text-center mb-2">Sign UP</h1>
        <p className="text-center mb-8 text-gray-600">
          Don&apos;t have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Side - Email */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-72 p-2 mb-4"
            />
            <a href="#" className="text-sm text-gray-600 mb-4 hover:underline">
              Forgot Email?

              
            </a>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full w-72">
              Continue with Email
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-48"></div>
          <div className="md:hidden text-gray-500">or</div>

          {/* Right Side - Social Buttons */}
          <div className="flex flex-col items-center w-full md:w-1/2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded w-72">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 bg-white rounded-full"
              />
              Continue with Google
            </button>

            <button className="flex items-center justify-center gap-3 bg-[#3b5998] text-white px-6 py-3 rounded w-72">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Continue with Facebook
            </button>

           

            
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-10">
          <p>
            <span className="hover:underline cursor-pointer">Terms of Use</span>{" "}
            ·{" "}
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
          </p>
          <p className="mt-2">
            This site is protected by reCAPTCHA Enterprise.{" "}
            <span className="hover:underline cursor-pointer">
              Google&apos;s Privacy Policy
            </span>{" "}
            and{" "}
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
