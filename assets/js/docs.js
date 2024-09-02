import { algoliasearch } from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { hits, searchBox } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('NDCLQHIM62', 'df23e2ffa22a485068544b25dc69d708');

const docsSearch = instantsearch({
  indexName: 'linkace_docs',
  searchClient,
  searchFunction: function (helper) {
    const searchResults = document.querySelector('#docsearch-results');
    if (helper.state.query === '') {
      searchResults.classList.add('d-none');
      return;
    }
    helper.search();
    searchResults.classList.remove('d-none');
  }
});

const hitTemplate = `
  <a href="{{{ permalink }}}" class="docsearch-result-link">{{{ title }}}</a>`;

docsSearch.addWidgets([
  searchBox({
    container: '#docsearch-searchbox',
    placeholder: 'Search...',
    showSubmit: false,
    showReset: false,
    cssClasses: {
      form: 'my-form',
      input: 'form-control'
    }
  }),

  hits({
    container: '#docsearch-results',
    cssClasses: {
      emptyRoot: 'd-none',
      list: 'list-unstyled mb-0',
      item: 'docsearch-result'
    },
    templates: {
      item: hitTemplate,
      empty: 'No results for <strong>{{ query }}</strong>'
    }
  })
]);

window.addEventListener('DOMContentLoaded', () => {
  docsSearch.start();
});
