import Head from "next/head";

import { Products } from "../main/components";
import { get } from "../main/services/API";

export const getServerSideProps = async () => {
  const res = await get("products");

  return {
    props: {
      products: res.data,
    },
  };
};

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>آخرین محصولات فروشگاه اینترنتی ابزارچی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>آخرین محصولات فروشگاه اینترنتی ابزارچی</h1>
        <Products products={products} />
      </main>
    </div>
  );
}
