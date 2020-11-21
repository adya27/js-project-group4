const getYearFromReleaseDate = releaseDate => {
  if (releaseDate !== undefined) {
    return releaseDate.slice(0, 4);
  }
};

export default getYearFromReleaseDate;
