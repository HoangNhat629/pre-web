const Router = require("express").Router();

const {
  createProduct,
  readAllProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/ProductController");

Router.get("/", async (req, res) => {
  let data = await readAllProduct()
  console.log(data)
  let renderHTML = ""
  data.forEach(element => {
    renderHTML = renderHTML +
      `
      <div class="item">
        <img src="${element.imgLink}" alt="">
        <p>${element.title}</p>
        <span>${element.availableSize}</span>
        <div class="price">
          
          <small>$</small>
          <b>${element.price}</b>
          <span></span>
        </div>
        <div class="buy-btn">
            Mua ne
        </div>
      </div>
    
    `;
  });
  res.render("mainPage", {
    HTML: renderHTML
  });
});


module.exports = Router;


var a = [5, 8, 6, 4, 9, 2, 4, 7, 8, 6, 4]

for (let i = 0; i < a.length; i++) {
  lamgi(a[i])
}

a.forEach((value, index) => {
  console.log("FE: " + value + " index " + index)
})
var amap = a.map((value, index,array) => {
  if(index==array.length-1) return ""
  else return "Gia tri " + value + " chi so " + index
})
console.log(amap) 
var areduce = a.reduce((pre,cur)=>{
  return pre + cur;
})
console.log(areduce)
function lamgi(x) {

}

function afunc(a=1,b=2,c=3,d=4){
  console.log("co a: " +a)
  console.log("co b: " +b)
  console.log("co c: " +c)
  console.log("co d: " +d)
}

afunc(10,undefined,30)