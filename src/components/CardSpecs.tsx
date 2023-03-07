import * as React from "react";
import { styles } from "../styles/CardSpecs.css";
import { Icon } from "@fluentui/react";
import { Logos } from "../utils/helpers";

export interface CardSpecsProps {
  isTrending: boolean;
}

export const CardSpecs = (props: CardSpecsProps) => {
  const cardPosition = React.useMemo(() => {
    if (props.isTrending) {
      return { bottom: 70, left: 50 };
    } else {
      return { bottom: 0, left: 0,'overflow-y':'visible' };
    }
  }, [props.isTrending]);

  return (
    <div className={styles.specsContainer} style={{ ...cardPosition }}>
      <div className={styles.specWrapper} >
        <span>2019</span>
        <span className={styles.specDivider} />
        <Icon iconName={Logos.Nav_Movies} />
        <span>Movie</span>
        <span className={styles.specDivider} />
        <span>PG</span>
      </div>
      <div className={styles.specTitle}>Beyond Earth</div>
    </div>
  );
};

export default CardSpecs;
