import { mergeStyleSets } from "@fluentui/merge-styles";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  navBarContainer: {
    width: "100%",
    height: "100%",
    "@media (orientation:landscape)": {
      maxHeight: "100vw",
      gridRow: "1 / -1",
      gridColumn: "1",
      padding:"10%",
      "@media (width >= 1024px)": {},
      "@media (765px < width < 1023px)": {
      },
      "@media (320px < height < 480px)": {
        padding: "0",
      },
    },
    "@media (orientation:portrait)": {
      maxWidth: "100vw",
      gridRow: "1",
      gridColumn: "1 / -1",
      padding:"2%",
      "@media (height >= 1024px)": {
      },
      "@media (765px < height < 1023px)": {
      },
      "@media (320px < width < 480px)": {
        padding: "0",
      },
    },
  },
  navBarWrapper: {
    backgroundColor: Colors.SemiDarkBlue,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4%",
    "@media (orientation:landscape)": {
      flexDirection: "column",
      height: "100%",
      width: "80%",
      "@media (width >= 1024px)": {
        borderRadius: "25px",
      },
      "@media (765px < width < 1023px)": {
        borderRadius: "10px",
        padding: "3%",
      },
      "@media (320px < height < 480px)": {
        borderRadius: "0",
        padding: "4%",
      },
    },
    "@media (orientation:portrait)": {
      flexDirection: "row",
      width: "100%",
      height: "80%",
      "@media (height >= 1024px)": {
        height: "90%",
        borderRadius: "25px",
      },
      "@media (765px < height < 1023px)": {
        borderRadius: "10px",
        padding: "3%",
        height: "80%",
      },
      "@media (320px < width < 480px)": {
        height: "80%",
        borderRadius: "0",
        padding: "4%",
      },
    },
  },
  logo: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    "@media (orientation:landscape)": {
      justifyContent: "center",
      height: "30%",
    },
    "@media (orientation:portrait)": {
      width: "15%",
    },
  },
  navIcon: {
    "@media screen and (orientation:landscape)": {
      "@media (height >= 1024px)": {
        transform: "scale(2)",
      },
      "@media (765px < height < 1023px)": {
        transform: "scale(1)",
      },
      "@media (320px < height < 480px)": {
        transform: "scale(1)",
      },
    },
    "@media (orientation:portrait)": {
      "@media (width >= 1024px)": {
        transform: "scale(2)",
      },
      "@media (765px < width < 1023px)": {
        transform: "scale(1)",
      },
      "@media (320px < width < 480px)": {
        transform: "scale(1)",
      },
    },
    ":hover":{
        cursor:"pointer",
        svg:{
            path:{
                fill:Colors.PureWhite
            }
        }
    }
  },
  filterIcons: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    "@media (orientation:landscape)": {
      height: "100%",
      flexDirection: "column",
      rowGap: "9%",
    },
    "@media (orientation:portrait)": {
      width: "40%",
      flexDirection: "row",
      justifyContent: "center",
      columnGap: "12%",
    },
  },
  persona: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (orientation:landscape)": {
      // height: "40%",
      alignItems: "end",
      paddingBottom: "20%",
    },
    "@media (orientation:portrait)": {
      width: "15%",
      justifyContent: "end",
    },
  },
  personaImage: {
    borderRadius: "50%",
    border: `2px solid ${Colors.PureWhite}`,
    "@media (width >= 1024px)": {},
    "@media (765px < width < 1023px)": {},
    "@media (320px < width < 480px)": {},
    "@media (orientation:landscape)": {},
  },
});
