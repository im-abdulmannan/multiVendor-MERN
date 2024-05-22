import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/style"; // Adjust the path to your styles
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = productData?.sort((a, b) => b.totalSell - a.totalSell);
    const firstFive = sortedData?.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:gap-20 xl:grid-cols-5 xl:gap-30">
          {data.map((i, index) => (
            <ProductCard key={index} data={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
