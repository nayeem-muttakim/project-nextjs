import Card from "@/components/ui/Card"

export const metadata = {
  title: "Dynamic Fetching",
};
export const revalidate = 0;
export default async function Home() {
  const response = await fetch("http://localhost:5500/products");
  const products = await response.json();
  console.log(products);
  return (
    <main className="">
      {products.map((product) => (
        <Card key={product.id} product={product}/>
      ))}
    </main>
  );
}
