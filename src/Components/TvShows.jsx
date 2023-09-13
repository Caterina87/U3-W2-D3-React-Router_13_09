import FilmSection from "./FilmSection";

const TvShows = () => {
  return (
    <>
      <FilmSection title="Trending Now" saga="star wars" />
      <FilmSection title="Watch It Again" saga="transformers" />
      <FilmSection title="New Releases" saga="lord rings" />
    </>
  );
};
export default TvShows;
