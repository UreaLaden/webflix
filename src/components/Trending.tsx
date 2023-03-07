import * as React from "react";
import { styles } from "../styles/Trending.css";
import { TextContent } from "../utils/helpers";
import "react-alice-carousel/lib/alice-carousel.css";
import CustomCarousel from "./CustomCarousel";

export const Trending = () => {
  return (
    <div className={styles.trendingContainer}>
      <div className={styles.trendingHeader}>
        {TextContent.TrendingSubheader}
      </div>
      <CustomCarousel />
    </div>
  );
};

export default Trending;
