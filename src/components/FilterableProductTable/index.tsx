import { Product } from "../../typings/Product";
import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";
import _ from "lodash";

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

function FilterableProductTable(props: Props) {
  return (
    <div>
      <SearchBar products={props.products} setProducts={props.setProducts} />
      <ProductTable products={props.products} />
    </div>
  );
}

export default FilterableProductTable;
