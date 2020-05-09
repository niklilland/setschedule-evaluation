
// http://api.eventful.com/json/events/search?app_key=KdsvX45pW65MXqsm&q=rock&location=92677&within=10
function queryEventful(term, location, radius) {
  return new Promise((resolve) => {
    const args = {
      app_key: 'KdsvX45pW65MXqsm',
      q: term,
      location: location,
      within: radius
    };
    /* eslint-disable-next-line */
    EVDB.API.call("/events/search", args, response => resolve(response));
  });
}

export { queryEventful }