import { mergeStyleSets } from "@fluentui/merge-styles";

export const styles=mergeStyleSets({
    carouselContainer:{
        height:"100%",
        width:"100%",
        border:"1px solid red",        
        display:'flex',
        "overflow-x":"scroll",
        ":hover":{
            cursor:"pointer"
        },
        "@media (orientation:portrait)": {
            gridColumn:"1 / -1",
            "@media (height >= 1023px)": {},
            "@media(765px < height < 1023px)": {},
            "@media(320px < width < 480px)": {},
          },
          "@media (orientation:landscape)": {
            "@media (width >= 1023px)": {},
            "@media(765px < height < 1023px)": {},
            "@media(320px < height < 480px)": {},
          },
    },
   
});