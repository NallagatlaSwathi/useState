import { Product } from "../../typings/Product";
import "./index.css";

type CategoryWithProducts = {
  category: string;
  products: Product[];
};

type Props = {
  categoryWithProducts: CategoryWithProducts;
};

function ProductCategoryRow(props: Props) {
  return (
    <div>
      <h1>{props.categoryWithProducts.category}</h1>
      <table>
        <tbody>
          {props.categoryWithProducts.products.map((product) => {
            return (
              <tr key={product.id}>
                <td className={product.stocked ? "" : "red"}>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductCategoryRow;
