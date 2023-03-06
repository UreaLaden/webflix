import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
    appContainer:{
        backgroundColor:Colors.DarkBlue,
        height:"auto",
        minHeight:"100vh",
        width:"100%",
        minWidth:"100vw",
        display:"grid" ,
        "@media (width >= 1024px)":{
            gridTemplate:"repeat(2,10%) 30% 10% 1fr / 10% 1fr"
        },
        "@media (orientation:portrait)":{
            gridTemplate:"10% repeat(2,5%) 20% 1fr / 1fr"
        },
        "@media (765px < width < 1023px)":{
            gridTemplate:"10% repeat(2,5%) 20% 5% 1fr / 1fr"
        },
        "@media (320px < width < 480px)":{
            gridTemplate:"10% repeat(2,5%) 20% 1fr / 1fr"
        },
        "@media (orientation:landscape)":{
            gridTemplate:"repeat(2,10%) 30% 10% 1fr / 10% 1fr"
        },
    }
})