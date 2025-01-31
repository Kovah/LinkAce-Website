import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from 'instantsearch.js';
import { hits, searchBox } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('NDCLQHIM62', 'df23e2ffa22a485068544b25dc69d708');

const docsSearch = instantsearch({
  indexName: 'linkace_docs',
  searchClient,
  onStateChange: function ({uiState, setUiState}) {
    const searchResults = document.querySelector('#docsearch-results');
    if (uiState['linkace_docs'].query) {
      searchResults.classList.remove('hidden');
      setUiState(uiState);
      return;
    }
    searchResults.classList.add('hidden');
    setUiState(uiState);
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
        const title = hit.version ? html`${hit.title} <span class="docsearch-version">${hit.version}</span>` : hit.title;
        return html`<a href="${hit.permalink}" class="docsearch-result-link">${title}</a>`;
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

const v2UpgradeSelect = document.querySelector('#v2-upgrade-select');
if (v2UpgradeSelect) {
  v2UpgradeSelect.addEventListener('change', (event)=>{
    const blocks = document.querySelectorAll('.upgrade-block');
    blocks.forEach((block) => {
      if (block.id === event.target.value) {
        block.classList.remove('hidden');
        block.setAttribute('aria-hidden', 'false')
      } else {
        block.classList.add('hidden');
        block.setAttribute('aria-hidden', 'true')
      }
    });
  })
}
