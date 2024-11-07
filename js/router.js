const routes = {
  home: "<h1>Home</h1><p>Welcome to the home page!</p>",
  about: "<h1>About</h1><p>This is the about page.</p>",
  contact: "<h1>Contact</h1><p>Get in touch!</p>",
  user: (id) =>
    `<h1>User: ${id}</h1><p>This is the user page for user with ID ${id}</p>`,
};

function router() {
  const hash = window.location.hash.substring(1) || "home";
  const routeParts = hash.split("/");
  const baseRoute = routeParts[0];
  const param = routeParts[1];

  if (routes[baseRoute]) {
    if (typeof routes[baseRoute] === "function") {
      document.getElementById("view").innerHTML = routes[baseRoute](param);
    } else {
      document.getElementById("view").innerHTML = routes[baseRoute];
    }

    history.pushState(null, "", `#${hash}`);
  } else {
    document.getElementById("view").innerHTML = "<h1>404 Not Found</h1>";
  }
}

window.addEventListener("hashchange", router);

window.addEventListener("load", router);
