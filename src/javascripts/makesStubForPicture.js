const makesStubForPicture = src => {
  if (src === 'https://image.tmdb.org/t/p/w400') {
    return (src = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png');
  } else {
    return src;
  }
};

function replaceImages() {
  const images = document.querySelectorAll('.js-image-src');
  const brokenLink = 'https://image.tmdb.org/t/p/w400';
  const defaultImage =
    'https://bytes.ua/wp-content/uploads/2017/08/no-image.png';
  images.forEach(image => {
    if (image.src === brokenLink) {
      image.src = defaultImage;
    }
  });
}

export default replaceImages;
