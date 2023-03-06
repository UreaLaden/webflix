import * as React from "react";
import { styles } from "../styles/Navbar.css";
import { Image, Icon } from "@fluentui/react";
import { Images, Logos } from "../utils/helpers";
import { WindowSize } from "../utils/windowDimensions";

export const NavBar = () => {
  const windowSize = WindowSize();
  const [iconSize, setIconSize] = React.useState<number>(0);

  React.useEffect(() => {
    console.log({...windowSize,iconSize});
    setIconSize(() => {
      if (windowSize.width > windowSize.height) {
        // Landscape
        if (windowSize.width >= 1200) {
          return 70;
        }
        if (windowSize.width >= 765 && windowSize.width < 1200) {
          return 40;
        }
        return 30;
      } else { // Portrait
        if (windowSize.height >= 1200) {
          return 70;
        }
        if (windowSize.height > 765 && windowSize.height < 1200) {
          return 30;
        }
        return 30;
      }
    });
  }, [windowSize, iconSize]);

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarWrapper}>
        <div className={styles.logo}>
          <Icon iconName={Logos.MainLogo} className={styles.navIcon} />
        </div>
        <div className={styles.filterIcons}>
          <Icon className={styles.navIcon} iconName={Logos.Nav_Home} />
          <Icon className={styles.navIcon} iconName={Logos.Nav_Movies} />
          <Icon className={styles.navIcon} iconName={Logos.Nav_TV_Series} />
          <Icon className={styles.navIcon} iconName={Logos.Nav_Bookmark} />
        </div>
        <div className={styles.persona}>
          <Image
            className={styles.personaImage}
            height={iconSize}
            src={Images.Persona}
            alt={"Persona Image"}
          />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
