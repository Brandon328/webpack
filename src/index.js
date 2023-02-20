const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $nickname = document.querySelector('h2');
const $footer = document.querySelector('.footer');

const data =
{
  name: "Brandon James Huaman",
  nickname: "@Brandon328",
  description: "...",
  avatar: "...",
  social:
    [
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "BrandonJJ328",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "BrandonJJ328",
      },
    ],

  links:
    [
      {
        name: "blog",
        url: "#",
        color: "red",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "#",
        color: "yellow",
        emoji: "💬",
      },
      {
        name: "cursos",
        url: "#",
        color: "lime",
        emoji: "🎒",
      },
      {
        name: "sponsors",
        url: "#",
        color: "blue",
        emoji: "🚀",
      },
    ],
  footer: "Made with Love ❤ on Peru",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map(link => {
    return `
      <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer" 
          href="${link.url}">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>
    `;
  }).join('');

  let newItem = document.createElement('section');
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
  $footer.textContent = data?.footer;
  $nickname.textContent = data?.nickname;
}

main();