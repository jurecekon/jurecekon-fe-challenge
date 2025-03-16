'use strict';

const tableDataContainerEl = document.querySelector('.table-data-container');
const searchInputEl = document.querySelector('.search-toolbar-text-input');

const createListItemElement = ({ id = '', name = '', email = '' } = {}) => {
  const item = document.createElement('div');
  item.classList.add('table-data-row');
  item.innerHTML = `
    <p class="table-data-item id">${id}</p>
    <p class="table-data-item company-name">${name}</p>
    <p class="table-data-item email">${email}</p>
  `;
  return item;
}

const renderDataTable = (companies = []) => {
  const listFragment = document.createDocumentFragment();
  companies.forEach((company) => {
    const element = createListItemElement(company);
    listFragment.append(element);
  });
  tableDataContainerEl.innerHTML = '';
  tableDataContainerEl.append(listFragment);
}

const readSearchFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const search = urlParams.get('search');
  return search;
}

const updateSearchParamInUrl = (newSearchValue) => {
  if (!newSearchValue) {
    window.history.replaceState(null, '', '/');
    return;
  }
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  urlParams.set('search', newSearchValue);
  window.history.replaceState(null, '', `?${urlParams.toString()}`);
}

const handleSearchInputChange = async (event) => {
  const newValue = event.target.value;
  updateSearchParamInUrl(newValue);

  try {
    const companies = await fetchCompanies(newValue);
    renderDataTable(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
  } finally {
    tableDataContainerEl.classList.remove('is-loading');
  }
}

const debouncedHandleSearchInputChange = debounce((e) => handleSearchInputChange(e));

searchInputEl.addEventListener('input', (e) => {
  tableDataContainerEl.classList.add('is-loading');
  debouncedHandleSearchInputChange(e);
})

document.addEventListener('DOMContentLoaded', async () => {
  const searchFromUrl = readSearchFromUrl();
  searchInputEl.value = searchFromUrl;
  try {
    const companies = await fetchCompanies(searchFromUrl);
    renderDataTable(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
});