import * as React from "react";
import { styles } from "../styles/Searchbar.css";
import { Icon } from "@fluentui/react";
import { Logos, TextContent } from "../utils/helpers";

export const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <Icon className={styles.searchIcon} iconName={Logos.Search} />
      <label htmlFor={"searchbar"}></label>
      <input
        id={"searchbar"}
        className={styles.searchBarInput}
        placeholder={TextContent.SearchPlaceholder}
        type="text"
      />
    </div>
  );
};
export default SearchBar;
