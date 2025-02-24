import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 py-10">
      <h1 className="md:text-7xl text-5xl font-unbounded">hak-dari</h1>
      <div className="flex flex-row justify-between items-center w-[70%] max-w-[600px]">
        <a href="#about">about</a>
        <a href="#services">services</a>
        <a href="#agents">agents</a>
        <a href="#properties">properties</a>
      </div>
      <p>
        © 2024 All Right Reserved by <span>hak-dari</span>
      </p>
    </div>
  );
};

export default Footer;
