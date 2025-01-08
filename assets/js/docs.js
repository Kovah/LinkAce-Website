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
  onStateChange: function ({uiState}) {
    const searchResults = document.querySelector('#docsearch-results');
    if (uiState.linkace_docs.query) {
      searchResults.classList.remove('hidden');
      return;
    }
    searchResults.classList.add('hidden');
  }
});

docsSearch.addWidgets([
  searchBox({
    container: '#docsearch-searchbox',
    placeholder: 'Search...',
    showSubmit: false,
    showReset: false,
    cssClasses: {
      input: 'form-control w-full'
    }
  }),

  hits({
    container: '#docsearch-results',
    cssClasses: {
      emptyRoot: 'hidden',
      list: 'list-none mb-0',
      item: 'docsearch-result'
    },
    templates: {
      item(hit, { html }) {
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
