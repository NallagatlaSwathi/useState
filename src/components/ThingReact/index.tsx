import React from "react";
import { PRODUCTS } from "../../products";
import FilterableProductTable from "../FilterableProductTable";

const ThinkingReact = () => {
  const [products, setProducts] = React.useState(PRODUCTS);

  return (
    <>
      <FilterableProductTable products={products} setProducts={setProducts} />
    </>
  );
};

export default ThinkingReact;
