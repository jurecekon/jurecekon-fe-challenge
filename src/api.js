const url = 'https://dummyjson.com/posts/search';

const fetchCompanies = async (search) => {
  try {
    const searchParamsString = new URLSearchParams({
      limit: 10,
      ...(search ? {q: search } : {})
    }).toString();

    const response = await fetch(`${url}?${searchParamsString}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseObject = await response.json();
    // We ignore the response here and use hardcoded data instead
    const hardcodedDemoData = getFilteredDemoData(search);
    return hardcodedDemoData;
  } catch (error) {
    console.error(error.message);
  }
}