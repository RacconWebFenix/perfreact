import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2>Total: {totalPrice}</h2>

      {results.map((p) => {
        return (
          <ProductItem
            product={p}
            key={p.id}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
}

/* useMemo
1. Calculos pesados
2. Igualdade referencial (quando passa uma informação a um componente filho)
*/
