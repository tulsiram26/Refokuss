import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
      live: true,
      case: true,
    },
    {
        title: "TTR",
        description:
          "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
        live: true,
        case: false,
      },
      {
        title: "YIR 2022",
        description:
          "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
        live: true,
        case: false,
      },
      {
        title: "Yahoo!",
        description:
          "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
        live: true,
        case: true,
      },
      {
        title: "Rainfall",
        description:
          "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
        live: true,
        case: false,
      },
  ];
  return (
    <div className="mt-32">
        {products.map((val, index)=> <Product val={val} />)}
    </div>
  );
};

export default Products;
