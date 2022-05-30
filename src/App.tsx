import React from "react";
import { FilterableProductTable } from "./components";
import { PRODUCTS } from "./products";

const App = () => {
  const [products, setProducts] = React.useState(PRODUCTS);

  return (
    <>
      <FilterableProductTable products={products} setProducts={setProducts} />
    </>
  );
};

export default App;
