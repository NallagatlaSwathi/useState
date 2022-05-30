import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../../typings/Product";

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export default function SearchBar({ products, setProducts }: Props) {
  const [query, setQuery] = React.useState("");
  const queryRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(function inputQueryFocus() {
    queryRef.current!.focus();
  }, []);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim() === "") {
      setProducts(PRODUCTS);
    } else {
      setProducts(
        PRODUCTS.filter((product) => {
          return product.name.includes(query);
        })
      );
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          ref={queryRef}
        />
      </div>
      <div>
        <input type="checkbox" name="show-only-stock" id="show-only-stock" />
        <label htmlFor="show-only-stock">Only show products in stock</label>
      </div>
    </>
  );
}
