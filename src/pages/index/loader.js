const loaderObject = (page) => {
  return {
    name: "main.main-contents",
    childElement: [
      {
        name: "div.context-loader",
        childElement: [
          {
            name: "img.loader-img",
            attributes: {
              src: "./assets/loader.gif"
            }
          },
        ]
      }
    ]
  }
};

export default loaderObject;