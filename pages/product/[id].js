import React from "react";
import { useRouter } from "next/router";
import Router from "next/dist/next-server/lib/router/router";

const ProductItem = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Esta es la página de prueba del producto: {router.query.id}</h1>
    </div>
  );
};

export default ProductItem;
