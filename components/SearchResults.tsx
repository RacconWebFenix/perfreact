import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((p) => {
        return <ProductItem product={p} key={p.id} />;
      })}
    </div>
  );
}
