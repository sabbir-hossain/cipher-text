
const routeList = [
  { text: "create new", link: "/create.html" },
  { text:  "play", link: "/index.html" },
];

function createRoute(page) {
  return routeList.map( route => ({
    name: "li.route-name",
    // text: route.text
    childElement: [
      {
        name: `a.route-link ${page === route.text ? "active-route" : ""}`,
        text: route.text,
        attributes: {
          href: route.link
        }
      }
    ]
  }))
}

const headerObject = (page) => {
  return {
    name: "header.header-contents",
    childElement: [
      {
        name: "div.context-header",
        childElement: [
          {
            name: "div.header-title",
            text: "Cipher Text"
          },
          {
            name: "ul.header-menu",
            childElement: createRoute(page)
          }
        ]
      }
    ]
  }
};

export default headerObject;