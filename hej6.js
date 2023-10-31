const products = [
  { name: "Camera", brand: "Canon", model: "EOS 70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero 4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

products.forEach(function (product) {
  console.log(product.name + ": " + product.brand);
});

const models = products.map(productModel);

function productModel(productModel) {
  return productModel.model;
}

console.log(models);
