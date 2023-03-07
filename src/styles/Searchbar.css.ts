import { mergeStyleSets } from "@fluentui/merge-styles";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  searchBarContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding:"0 2%",
    columnGap:"1%",
    "@media (orientation:portrait)": {
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
  searchBarInput: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    color: Colors.PureWhite,
    caretColor:Colors.Red,
    fontSize:"2rem",
    "::placeholder": {
      color: `rgba(255,255,255,.4)`,      
    },
    ":focus":{
        outline:'none',
        borderBottom:`1px solid ${Colors.PureWhite}`
    },
    ":hover":{
        cursor:"pointer"
    },
    "@media (orientation:portrait)": {
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
  searchIcon: {
    ":hover":{
        cursor:"pointer",
        svg:{
            path:{
                fill:Colors.Red
            }
        }
    },
    "@media (orientation:portrait)": {
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
