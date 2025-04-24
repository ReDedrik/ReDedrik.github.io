window.addEventListener("DOMContentLoaded", () => {
  fetch('blog-data.json')
    .then(response => response.json())
    .then(posts => {
      const container = document.getElementById("blog-container");
      posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // still sort by Date object

      posts.forEach(post => {
        const [year, month, day] = post.date.split("-");
        const formattedDate = `${month}/${day}/${year}`;

        const postHTML = `
          <div class="blog-post-preview">
            <a href="${post.link}" class="blog-link">
              <h3>${post.title}</h3>
              <p>${post.snippet}</p>
              <p class="blog-date">${formattedDate}</p>
            </a>
          </div>
        `;
        container.innerHTML += postHTML;
      });
    });
});

