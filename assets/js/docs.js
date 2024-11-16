import { algoliasearch } from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { hits, searchBox } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('NDCLQHIM62', 'df23e2ffa22a485068544b25dc69d708');

const docsSearch = instantsearch({
  indexName: 'linkace_docs',
  future: {
    preserveSharedStateOnUnmount: true,
  },
  searchClient,
  onStateChange: function ({uiState, setUiState}) {
    const searchResults = document.querySelector('#docsearch-results');
    if (uiState.linkace_docs.query) {
      searchResults.classList.remove('d-none');
      return;
    }
    searchResults.classList.add('d-none');
  }
});

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
      item(hit, { html, components, sendEvent }) {
        return html`<a href="${hit.permalink}" class="docsearch-result-link">${hit.title}${hit.version ? ' (' + hit.version + ')' : ''}</a>`;
      },
      empty(results, { html }) {
        return html`No results found for "${results.query}"`;
      },
    }
  })
]);

window.addEventListener('DOMContentLoaded', () => {
  docsSearch.start();
});
