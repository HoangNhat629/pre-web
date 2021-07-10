const Router = require("express").Router();

const {
  createProduct,
  readAllProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/ProductController");

Router.get("/", (req, res) => {
  res.render("managePage", {
    sku: "new main page",
    title: "new main page"
  });
});
Router.get("/create-product", async (req, res) => {
  let san_pham_moi = {
    sku: "ADT" + Math.floor(Math.random() * 100000),
    title: "Ao 4",
    description: `ao dep vl`,
    availableSize: ["M", `L`,"XXL"],
    style: `kin dao`,
    price: Math.floor(Math.random() * 100000),
    installments: Math.floor(Math.random() * 100),
    currencyID: "USD",
    currencyFormat: "$",
    isShippingFree: true,
    imgLink: "/img/anh4.jpg"
  };
  await createProduct(san_pham_moi);
  res.render("managePage");
});

Router.get("/read-product", async (req, res) => {
  let data = await readAllProduct();
  let htmlContent = "";
  data.forEach(element => {
    htmlContent = htmlContent +
      `
    <br>
    <p style="color:red;">${element.sku}</p>
    <p>${element.title}</p>
    
    `;
  });
  // for(let i= 0;i<data.length;i++){
  //   htmlContent = htmlContent +
  //   `
  //   <br>
  //   <p style="color:red;">${data[i].sku}</p>
  //   <p>${data[i].title}</p>

  //   `
  // }

  res.render("mainPage", {
    // htmlContent: htmlContent
    data: data
  });
});

Router.get("/update-product", (req, res) => {
  res.render("mainPage");
});
Router.get("/delete-product", (req, res) => {
  res.render("mainPage");
});

module.exports = Router;
