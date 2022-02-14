import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";
import wordsToNumbers from "words-to-numbers";

const Alan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      bottom: "5%",
      right: "5%",
      key: "ddadb16accb12b088729088618c355502e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, search, index, savedProducts }) => {
        if (command === "go to products page") {
          navigate("/products");
        } else if (command === "current product") {
        } else if (command === "go to home page") {
          navigate("/");
        } else if (command === "search") {
          let searchString = search?.split(" ").join("+");
          navigate(`/products/search?searchString=${searchString}`);
        } else if (command === "show cart") {
          navigate("/cart");
        } else if (command === "show product") {
          let number =
            index.length > 2 ? wordsToNumbers(index, { fuzzy: true }) : index;
          console.log(number);
          console.log(number, savedProducts?.length);

          if (number && number < savedProducts.length) {
            let id = savedProducts[number]._id;
            navigate(`/products/${id}`);
          }
        } else if (command === "show profile") {
          navigate("/profile");
        } else if (command === "go back") {
          navigate(-1);
        } else if (command === "thanks") {
        } else if (command === "admin panel") {
          navigate("/admin");
        } else if (command === "admin products") {
          navigate("/admin/products");
        } else if (command === "checkout") {
          navigate("/checkout");
        } else if (command === "proceed with payment") {
        }
      },
    });
  }, []);
  return <div></div>;
};

export default Alan;
