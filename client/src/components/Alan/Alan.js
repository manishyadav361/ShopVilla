import React, { useEffect, useRef, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import wordsToNumbers from "words-to-numbers";

const Alan = ({}) => {
  const navigate = useNavigate();
  const alanBtnInstance = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (user) {
      if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
          bottom: "5%",
          right: "5%",
          key: "ddadb16accb12b088729088618c355502e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: ({ command, search, index, savedProducts }) => {
            if (command === "go to products page") {
              navigate("/products");
            }
            if (command === "current product") {
            }
            if (command === "go to home page") {
              navigate("/");
            }
            if (command === "search") {
              let searchString = search?.split(" ").join("+");
              navigate(`/products/search?searchString=${searchString}`);
            }
            if (command === "show cart") {
              navigate("/cart");
            }
            if (command === "show product") {
              let number = wordsToNumbers(index);
              console.log(number, savedProducts?.length);

              if (number <= savedProducts?.length) {
                let id = savedProducts?.[number]?._id;
                navigate(`/products/${id}`);
              }
            }
            if (command === "show profile") {
              navigate("/profile");
            }
            if (command === "go back") {
              navigate(-1);
            }
            if (command === "thanks") {
            }
            if (command === "admin panel") {
              navigate("/admin");
            }
            if (command === "admin products") {
              navigate("/admin/products");
            }
            if (command === "checkout") {
              navigate("/checkout");
            }
            if (command === "payment") {
            }
          },
        });
      }
    }
  }, []);
  return <div></div>;
};

export default Alan;
