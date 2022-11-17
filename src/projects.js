import f1 from "./assets/projects/f1.png";
import poke from "./assets/projects/poke.png"
import todo from "./assets/projects/todo2.png"
import finder from "./assets/projects/gh.png"

export const projects = [
  {
    name: "F1-react",
    src: f1,
    description: "An informative unofficial Formula 1 page for fans.",
    gh_link: "https://github.com/BatuhanUlucay/F1-react",
    live_link: "https://f1-react.vercel.app/",
  },
  {
    name: "react-pokedex",
    src: poke,
    description: "Simple ui for displaying pokemons.",
    gh_link: "https://github.com/BatuhanUlucay/react-pokedex",
    live_link: "https://react-pokedex-alpha.vercel.app/",
  },
  {
    name: "Github Finder",
    src: finder,
    description: "Simple ui for searching github users, viewing their repos and some other details.",
    gh_link: "https://github.com/BatuhanUlucay/github-finder",
    live_link: "",
  },
  {
    name: "popupsmart-todo",
    src: todo,
    description: "A to do list with basic CRUD operations with a mock api.",
    gh_link: "https://github.com/BatuhanUlucay/popupsmart_todo",
    live_link: "https://popupsmart-todo.vercel.app/",
  },
];
