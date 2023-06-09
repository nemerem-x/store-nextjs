import HomePage from "./home/page";
import { ProductObj } from "../utils/interface";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export default async function Index() {
  const data: ProductObj[] = await getProducts();
  return (
    <>
      <HomePage data={data} />
    </>
  );
}
