import { SearchByCity } from "./styles";

export function SearchByCitySection() {
  return (
    <SearchByCity>
      <div className="mainDiv">
        <div className="divTitle">
          <h1 className="mainTitle">
            Navegue pelos Free's que estão acontecendo pertinho de você!
          </h1>
        </div>
        <img src="/images/map-g9ede9da23_1280.png" alt="" />
      </div>
      <input
        id="local-search"
        className="search-by-city"
        type="text"
        maxLength={40}
        placeholder="Joinville, SC"
      />
    </SearchByCity>
  );
}
