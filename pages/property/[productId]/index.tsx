import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  console.log("productId", productId, "router:", router);

  return <div> Detail. {productId}</div>;
};

export default PropertyDetail;
