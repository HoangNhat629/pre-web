const ProductModel = require("../models/ProductModel");

async function createProduct(product) {
  let newData = new ProductModel(product);
  await newData.save((err, data) => {
    if (err) {
      console.log("err create product: ", err);
    } else {
      console.log("create product successful");
    }
  });
}

async function readAllProduct() {
  let allData = await ProductModel.find({});
  let data = [];
  allData.forEach(element => {
    if (element.availableSize.length > 0) data.push(element);
  });
  return data;
}

async function updateProduct(product) {
  await ProductModel.updateOne({}, product, (err, data) => {
    if (err) {
      console.log("err update product: ", err);
    } else {
      console.log("update product successful");
    }
  });
}

async function deleteProduct(product) {
  await ProductModel.deleteOne({ _id: product._id }, (err, data) => {
    if (err) {
      console.log("err delete product: ", err);
    } else {
      console.log("delete product successful");
    }
  });
}

module.exports = {
  createProduct: createProduct,
  readAllProduct: readAllProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
};
