import { mergeStyleSets } from "@fluentui/merge-styles";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
    trendingContainer:{
        padding:"0 4%",
        gridRow:"3 / 5",
        height:"100%",
        overflowY:'hidden',
        
    },
    trendingHeader:{
        color:Colors.PureWhite,
        fontSize:"2rem",
        padding:"0 0 4% 0"
    },
    
})