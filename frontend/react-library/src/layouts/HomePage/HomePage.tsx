import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
  return (
    <div>
      <ExploreTopBooks></ExploreTopBooks>
      <Carousel></Carousel>
      <Heros></Heros>
      <LibraryServices></LibraryServices>
    </div>
  );
};
