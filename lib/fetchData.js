const fetchData = async (url) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + url);
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};
export default fetchData;
