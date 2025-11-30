
      const snowCount = 60;
    for (let i = 0; i < snowCount; i++) {
      let snow = document.createElement("div");
      snow.className = "snowflake";
      snow.innerText = "❆";
      snow.style.left = Math.random() * 100 + "vw";
      snow.style.animationDuration = 3 + Math.random() * 5 + "s";
      snow.style.fontSize = (Math.random() * 10 + 10) + "px";
      snow.style.opacity = Math.random();
      document.body.appendChild(snow);
    }
  

/* ===== INLINE JAVASCRIPT ===== */


let isPlaying = true;
const music = document.getElementById('bg-music');

function toggleMusic() {
  isPlaying ? music.pause() : music.play();
  isPlaying = !isPlaying;
}


/* ===== INLINE JAVASCRIPT ===== */


const music = document.getElementById("bg-music");

// Try autoplay after slight delay (helps on some browsers)
window.addEventListener('load', () => {
  setTimeout(() => {
    music.play().catch(() => {
      // Fallback: wait for user interaction
      document.body.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  }, 500);
});


/* ===== INLINE JAVASCRIPT ===== */


  fetch("https://api.github.com/repos/superstar-zimtk/Pretty-md")
    .then(response => response.json())
    .then(data => {
      const releaseDate = new Date(data.created_at).toLocaleDateString();
      const stars = data.stargazers_count;
      const forks = data.forks_count;
      const watchers = data.watchers_count;

      document.getElementById('console').innerHTML = `
        <p>> Bot Repository Info:${json.name}\
        <p>> ⭐ Stars:${json.stargazers_count}\n`
        <p>> 🍴 Forks:${json.forks_count}\n`
        <p>> 👀 Watchers:${json.watchers_count}\n`
      `;
    })
.catch(err => {
      document.getElementById('console').innerHTML = "<p>> Failed to load data.</p>";
      console.error("GitHub API error:", err);
    });
  <div class="footer">
    &copy; 2025 TECH WORLD 🌎. All rights reserved.
  </div>
