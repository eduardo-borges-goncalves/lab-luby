import { ReactComponent as SearchIcon1 } from "../../assets/search/search.svg"
import { ReactComponent as SearchIcon2 } from "../../assets/search/search2.svg"
import { SearchWrapper } from "./styles"

export const Search = ({style}:any) => (
  <SearchWrapper style={style}>
    <div id="search">
      <SearchIcon1 id="icon1" />
      <SearchIcon2 id="icon2" />
    </div>
    <input type="text" />
  </SearchWrapper>

)