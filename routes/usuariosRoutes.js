// const express = require("express");
// const {
//   ObtenerProductos,
//   obtenerUnProducto,
//   crearProducto,
//   actualizarProducto,
//   eliminarProducto,
// } = require("../controller/usuariosController");
// const { validateProducts, validateUpdateProducts } = require("../middleware/validations");
// const routerUsuarios = express();

// //GET Recupera Datos de un recurso
// routerUsuarios.get("/productos", ObtenerProductos);

// //GET Recupera Datos de un recurso solo
// routerUsuarios.get("/productos/:id", obtenerUnProducto);

// //POST Envia datos para crear un recurso
// routerUsuarios.post("/productos", validateProducts, crearProducto);

// //PUT Actualiza un recurso existente con datos nuevos
// routerUsuarios.put("/productos/:id", validateUpdateProducts,actualizarProducto);

// //DELETE Elimina un recurso
// routerUsuarios.delete("/productos/:id", eliminarProducto);

// module.exports = routerUsuarios;

const express = require("express");
const {
  addProducts,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/usuariosController");
const {
  validateAddedProducts,
  validateUpdatedProducts,
} = require("../middleware/validations");
const router = express();

router.post("/productos", validateAddedProducts, addProducts);
router.get("/productos", readProducts);
router.get("/productos/:id", readProduct);
router.put("/productos/:id", validateUpdatedProducts, updateProduct);
router.delete("/productos/:id", deleteProduct);

module.exports = router;
