const promise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

promise().then(() => {
  // const loader = document.querySelector('#loader');
  // loader.classList.add('hide-loader');
});
