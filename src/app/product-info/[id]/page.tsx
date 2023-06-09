import { ProductObj } from "../../../utils/interface";
import ProductPage from "../../../components/ProductDetail";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = params;

  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent)?.openGraph?.images || [];
  const appTitle = (await parent)?.title?.absolute || [];

  return {
    title: appTitle + " - " + product.title,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const allPaths = data?.map((each: ProductObj) => {
    return {
      id: each.id.toString(),
    };
  });

  return allPaths;
};

const getProduct = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: "force-cache",
  });
  const product = await res.json();

  return product;
};

export default async function Product({ params }: { params: { id: string } }) {
  const detail: ProductObj = await getProduct({
    params,
  });

  return <ProductPage detail={detail} />;
}
