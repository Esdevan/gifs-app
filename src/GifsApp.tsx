import { GiftsList } from "./gifs/components/GiftsList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte maravillosos gifs"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs..." />

      {/* Previous Searches */}
      <PreviousSearch searches={["Naruto", "Eren", "Itachi"]} />

      {/* Gifs */}
      <GiftsList gifs={mockGifs} />
    </>
  );
};
