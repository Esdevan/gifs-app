import { useState } from "react";
import { GiftsList } from "./gifs/components/GiftsList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["naruto"]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string) => {
    query = query.trim().toLowerCase();
    if (query.length <= 0 || previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 7));
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte maravillosos gifs"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

      {/* Previous Searches */}
      <PreviousSearch
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GiftsList gifs={mockGifs} />
    </>
  );
};
