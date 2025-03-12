export const getImageUrl = path =>{
    // return `/assets/${path}`;
    const url = `/assets/${path}`
    return new URL(url,import.meta.url).href;
    // return new URL(`../assets/${path}`,import.meta.url).href;
    // return new URL(`../assets/about/nitw.png`,import.meta.url).href;
}