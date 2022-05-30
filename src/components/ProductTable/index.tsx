import _ from "lodash";
import React from "react";
import { Product } from "../../typings/Product";
import ProductCategoryRow from "../ProductCategoryRow";

type Props = {
  products: Product[];
};

function ProductTable(props: Props) {
  const productByCategory = _.groupBy(props.products, "category");

  // {
  //   "Fruits": [],
  //   "Vegetables": []
  // }

  // [["Fruits", [/**Products */]], ["Vegetables", [/**Products */]]]
  const categoriesWithProducts = Object.entries(productByCategory).map(
    (entry) => {
      return {
        category: entry[0],
        products: entry[1],
      };
    }
  );

  return (
    <div>
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      {categoriesWithProducts.map((categoryWithProducts) => {
        return (
          <ProductCategoryRow
            key={categoryWithProducts.category}
            categoryWithProducts={categoryWithProducts}
          />
        );
      })}
    </div>
  );
}

export default ProductTable;
