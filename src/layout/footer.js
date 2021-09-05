const footerObject = (page) => {
  return {
    name: "footer.footer-contents",
    childElement: [
      {
        name: "div.context-footer",
        childElement: [
          {
            name: "span.footer-info",
            text: "Developed By: "
          },
          {
            name: "span.footer-info",
            text: "Mohd. Sabbir Hossain"
          },
          {
            name: "a.footer-link",
            text: "source-code",
            attributes: {
              href: "https://github.com/sabbir-hossain/cipher-text"
            }
          }
        ]
      }
    ]
  }
};

export default footerObject;