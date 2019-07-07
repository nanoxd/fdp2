module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const localeDate = dateObject.toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return localeDate;
};
