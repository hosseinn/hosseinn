const BLOG_URL = `https://blog.documentfoundation.org/feed/`;
const PLANET_URL = `https://planet.documentfoundation.org/atom.xml`;

function strip(html){
   var doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}

fetch(BLOG_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let html = ``;
    let count = 0;
    for (const el of items) {
      let summary = el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "");
      let link = el.querySelector("link").innerHTML;
      html += `
        <article>
            <a class="blog-link" href="${link}" title="Continue Reading ${el.querySelector("title").innerHTML}">${el.querySelector("title").innerHTML}</a>
            <p class="blog-body"><a href="${link}">${summary}</a></p>
            <footer>
                <span>${el.querySelector("pubDate").innerHTML}</span>
            </footer>
        </article>
      `;
      count++;
      if (count === 3) break;
    }
    document.getElementById('blogitems').insertAdjacentHTML("afterbegin", html);
  });

fetch(PLANET_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const entries = data.querySelectorAll("entry");
    let html = ``;
    let count = 0;
    for (const el of entries) {
      if (el.querySelector("source id").innerHTML === 'https://blog.documentfoundation.org') continue;
      let summary = '';
      if (el.querySelector("summary") !== null) {
          summary = strip(el.querySelector("summary").innerHTML).substring(0, 300) + "[…]";
      } else {
          summary = strip(el.querySelector("content").innerHTML).substring(0, 300) + "[…]";
      }
      let link = el.querySelector("link[rel='alternate']").getAttribute("href");
      html += `
        <article>
            <a class="blog-link" href="${link}" title="Continue Reading ${el.querySelector("title").innerHTML}">${el.querySelector("author name").innerHTML + " - " + el.querySelector("title").innerHTML}</a>
            <p class="blog-body"><a href="${link}">${summary}</a></p>
            <footer>
                <span>${el.querySelector("published").innerHTML}</span>
            </footer>
        </article>
      `;
      count++;
      if (count === 3) break;
    }
    document.getElementById('planetitems').insertAdjacentHTML("afterbegin", html);
  });
