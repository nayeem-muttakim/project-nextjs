import Card from "@/components/ui/Card";


interface Products {
  id: number;
  title: string;
  category: string;
  description: string;
}

export const revalidate = 0;
export default async function Home() {
  const response = await fetch("http://localhost:5500/products");
  const products: Products[] = await response.json();
 
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </main>
  );
}
