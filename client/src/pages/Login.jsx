import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Login = () => {
  const [isEyeClick, setIsEyeClick] = useState(false);
  const handleEyeClick = () => {
    setIsEyeClick(!isEyeClick);
  };
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-96 rounded-2xl p-4 shadow-md bg-white"
      >
        <h1 className="text-center mb-4 text-2xl font-bold">Welcome Back</h1>
        <form className="space-y-6 w-full">
          <div className="flex gap-2 items-center border-b border-gray-200">
            <Mail className="text-gray-500" size={20} />
            <input
              type="email"
              className="focus:outline-none w-full"
              placeholder="Enter Email..."
            />
          </div>
          <div className="flex gap-2 items-center relative border-b border-gray-200">
            <Lock className="text-gray-500" size={20} />
            <div
              onClick={handleEyeClick}
              className="absolute right-2 text-gray-500"
            >
              {isEyeClick ? <Eye /> : <EyeOff />}
            </div>
            <input
              type={isEyeClick ? "text" : "password"}
              className="focus:outline-none w-full"
              placeholder="Enter Passw0rd..."
            />
          </div>
          <Button fullWidth>Login</Button>
          <p className="text-center text-gray-800">
            Don't have account?{" "}
            <Link to="/register" className="text-sky-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
