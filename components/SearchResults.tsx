import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>Total: {totalPrice}</h2>

      {results.map((p) => {
        return <ProductItem product={p} key={p.id} />;
      })}
    </div>
  );
}

/* useMemo
1. Calculos pesados
2. Igualdade referencial (quando passa uma informação a um componente filho)

*/
