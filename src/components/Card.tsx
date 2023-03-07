import { Icon } from '@fluentui/react';
import * as React from 'react';
import { Logos } from '../utils/helpers';
import { styles } from '../styles/Card.css';
import CardSpecs from './CardSpecs';

export interface CardProps{
    image:string;
    isTrending:boolean;
}


export const Card = (props:CardProps) => {
    const imageSize = React.useMemo(()=>{
        if(props.isTrending){
            return{'maxHeight':"80%"}
        }else{
            return{
                'maxHeight':'60%'
            }
        }
    },[props.isTrending])
    return (
        <div className={styles.cardContainer}>
          <img
            className={styles.cardImage}
            src={props.image}
            alt={`Carousel Item`}
            style={{...imageSize}}
          />
          <div className={styles.cardWrapper}>
            <div className={styles.cardBookmark}>
              <Icon
                className={styles.cardIcon}
                iconName={Logos.Bookmark_Empty}
              />
            </div>
            <CardSpecs isTrending={props.isTrending} />
          </div>
        </div>
    )
}

export default Card;