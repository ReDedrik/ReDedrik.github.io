window.addEventListener("DOMContentLoaded", () => {
  fetch('blog-data.json')
    .then(response => response.json())
    .then(posts => {
      const container = document.getElementById("blog-container");
      posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest first

      posts.forEach(post => {
        const hasImage = post.image && post.image.trim() !== "";
        const imageHTML = hasImage
          ? `<img src="${post.image}" alt="${post.title}" class="blog-image">`
          : "";

        const postHTML = `
          <div class="blog-post-preview">
            <a href="${post.link}" class="blog-link">
              ${imageHTML}
              <h3>${post.title}</h3>
              <p>${post.snippet}</p>
              <p class="blog-date">${new Date(post.date).toLocaleDateString()}</p>
            </a>
          </div>
        `;
        container.innerHTML += postHTML;
      });
    });
});
