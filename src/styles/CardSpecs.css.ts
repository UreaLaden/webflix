import { mergeStyleSets } from "@fluentui/merge-styles";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
    specsContainer:{
        position:'absolute',
        bottom:70,
        left:50,
        width:'100%',
        color:Colors.PureWhite,
        fontSize:"2rem"
    },
    specWrapper:{
        display:'flex',
        alignItems:"center",
        columnGap:"2%"
    },
    specDivider:{
        height:"6px",
        width:"6px",
        backgroundColor:"rgba(255,255,255,.5)",
        borderRadius:"50%"
    },
    specTitle:{
        fontSize:"3rem",
        fontWeight:"bold"
    },
    specIcon:{}
});