function ouvrirDoc(docPath) {
  const modal = document.getElementById('modalDoc');
  const iframe = document.getElementById('iframeDoc');
  const downloadLink = document.getElementById('downloadDoc');

  // Affichage via Google Docs Viewer
  iframe.src = `https://docs.google.com/gview?url=${window.location.origin}/${docPath}&embedded=true`;
  downloadLink.href = docPath;

  modal.style.display = 'block';
}

function fermerModal() {
  const modal = document.getElementById('modalDoc');
  const iframe = document.getElementById('iframeDoc');
  iframe.src = '';
  modal.style.display = 'none';
}

// Fermer le modal si clic en dehors
window.onclick = function(event) {
  const modal = document.getElementById('modalDoc');
  if (event.target == modal) {
    fermerModal();
  }
}
