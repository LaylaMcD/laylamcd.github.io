function fetchMusicData() {
  const artistInput = document.getElementById('artistInput').value;
  const searchUrl = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(artistInput)}&fmt=json`;

  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      if (data.artists.length > 0) {
        const artist = data.artists[0];
        const artistName = artist.name;
        const artistId = artist.id;
        const releasesUrl = `https://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`;

        fetch(releasesUrl)
          .then(response => response.json())
          .then(releasesData => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';

            if (releasesData.releases.length > 0) {
              document.getElementById('tableContainer').classList.remove('d-none');
              document.getElementById('artistName').textContent = artistName;

              releasesData.releases.forEach(release => {
                const row = document.createElement('tr');
                const releaseDate = document.createElement('td');
                releaseDate.textContent = release.date || 'N/A';

                const title = document.createElement('td');
                title.textContent = release.title || 'N/A';

                row.appendChild(releaseDate);
                row.appendChild(title);
                tableBody.appendChild(row);
              });
            } else {
              document.getElementById('tableContainer').classList.add('d-none');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            document.getElementById('tableContainer').classList.add('d-none');
          });
      } else {
        console.error('Artist not found.');
        document.getElementById('tableContainer').classList.add('d-none');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('tableContainer').classList.add('d-none');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('musicForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    fetchMusicData();
  });
});
