document.addEventListener('DOMContentLoaded', () => {
  const help = document.getElementById('search-help');
  if (!window.PagefindUI) return;
  help.hidden = true;
  const search = new PagefindUI({
    element: '#search', showSubResults: false, showImages: false, resetStyles: false,
    processResult(result) {
      // Match archive listings: show the introduction, not a mid-article snippet.
      if (result.meta.intro) {
        const escaped = document.createElement('span');
        escaped.textContent = result.meta.intro;
        result.excerpt = escaped.innerHTML;
      }
      return result;
    }
  });
  const query = new URLSearchParams(location.search).get('q');
  if (query) search.triggerSearch(query);
});
