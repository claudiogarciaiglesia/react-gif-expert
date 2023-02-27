export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QzBgef9jsgl7F0xzkx5S1e3g6mys77Bk&q=${category}&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json();


    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;


}