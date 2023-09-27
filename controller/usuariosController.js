const productos = require("../models/index").productos;

// const ObtenerProductos = (req, res) => {
//   // const productos = req.session;
//   // res.json({ productos });
//   const products = fs.readFileSync("productos.json", "utf-8");
//   const productsParse = JSON.parse(products);
//   res.send(productsParse);
// };

// const crearProducto = (req, res) => {
//   // const { id, nombre, price } = req.body;
//   // const data = { id, nombre, price };
//   // const productos = req.session.productos || [];
//   // productos.push(data);
//   // req.session.productos = productos
//   // res.send("producto creado");
//   const { id, nombre, price } = req.body;
//   const data = { id, nombre, price };
//   let productos = [];
//   const productosString = fs.readFileSync("productos.json", "utf-8");
//   if (productosString) {
//     productos = JSON.parse(productosString);
//   }
//   productos.push(data);
//   const productosStringify = JSON.stringify(productos, null, 2);
//   fs.writeFileSync("productos.json", productosStringify);
//   res.send("producto creado con éxito");
// };

// const obtenerUnProducto = (req, res) => {
//   const products = fs.readFileSync("productos.json", "utf-8");
//   const productsParse = JSON.parse(products);
//   const id = req.params.id;
//   const product = productsParse.filter((param) => param.id === id);
//   res.send(product);
// };

// const actualizarProducto = (req, res) => {
//   const products = fs.readFileSync("productos.json", "utf-8");
//   const productsParse = JSON.parse(products);
//   const params = req.params.id;
//   const { nombre, price } = req.body;
//   const data = { nombre, price };
//   const product = productsParse.map((product) => {
//     if (product.id === params) {
//       return {
//         ...product,
//         ...data,
//       };
//     } else {
//       return product;
//     }
//   });
//   const productosStringify = JSON.stringify(product, null, 2);
//   fs.writeFileSync("productos.json", productosStringify);
//   res.send("producto actualizado con éxito");
// };

// const eliminarProducto = (req, res) => {
//   const products = fs.readFileSync("productos.json", "utf-8");
//   const productsParse = JSON.parse(products);
//   const id = req.params.id;
//   const deleteProduct = productsParse.filter((param) => param.id !== id);
//   const productosStringify = JSON.stringify(deleteProduct, null, 2);
//   fs.writeFileSync("productos.json", productosStringify);
//   res.send("producto eliminado con éxito");
// };

// module.exports = {
//   ObtenerProductos,
//   obtenerUnProducto,
//   crearProducto,
//   actualizarProducto,
//   eliminarProducto,
// };

const addProducts = async (req, res) => {
  const { ...newProduct } = req.body;
  const { Nombre, Price } = newProduct;
  console.log(newProduct);
  if (!Nombre || !Price) {
    return res
      .status(500)
      .json({ message: "Debes ingresar Nombre y Precio" });
  }
  const product = await productos.create(newProduct);
  res.json({ message: "Agregado con éxito", data: product });
};

const readProducts = async (req, res) => {
  const products = await productos.findAll();
  res.status(200).json({ data: products });
};

const readProduct = async (req, res) => {
  const product = await productos.findByPk(req.params.id);
  res.status(200).json({ data: product });
};

const deleteProduct = async (req, res) => {
  const product = await productos.findByPk(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "producto no encontrado" });
  }
  await product.destroy();
  return res
    .status(200)
    .json({ message: "Producto eliminado con exito", data: product });
};

const updateProduct = async (req, res) => {
  const product = await productos.findByPk(req.params.id);
  const { ...newProduct } = req.body;
  if (!product) {
    return res.status(404).json({ message: "producto no encontrado" });
  }
  await product.update(newProduct);
  return res
    .status(200)
    .json({ message: "Producto actualizado con exito", data: product });
};

module.exports = {
  addProducts,
  readProducts,
  readProduct,
  deleteProduct,
  updateProduct,
};