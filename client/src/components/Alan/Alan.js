import React, { useEffect, useRef, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/Products";
import wordsToNumbers from "words-to-numbers";

const Alan = () => {
  const { products } = useSelector((state) => state?.Products);

  const navigate = useNavigate();
  const alanBtnInstance = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (user) {
      if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
          key: "ddadb16accb12b088729088618c355502e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: ({ command, search, index }) => {
            if (command === "go to products page") {
              navigate("/products");
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
              console.log(wordsToNumbers(index));
              console.log(products);
            }
            if (command === "show profile") {
              navigate("/profile");
            }
            if (command === "go back") {
              alanBtnInstance.setVisualState({ products });
              navigate(-1);
            }
          },
        });
      }
    }
  }, []);
  return <div></div>;
};

export default Alan;
