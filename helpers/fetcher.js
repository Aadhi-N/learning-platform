const fetcher = (url) => fetch(url).then((res) => {return res.json()});

export default fetcher;