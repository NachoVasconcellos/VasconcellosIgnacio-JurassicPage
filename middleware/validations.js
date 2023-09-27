// const { body, validationResult } = require("express-validator");

// const validateProducts = [
//   body("id")
//     .notEmpty()
//     .withMessage("Debes ingresar un id")
//     .isNumeric()
//     .withMessage("Debes ingresar solo números")
//     .isInt({ min: 1, max: 3 })
//     .withMessage("Solo números entre 1 y 3"),
//   body("nombre").notEmpty().withMessage("Debes ingresar el nombre"),
//   body("price")
//     .notEmpty()
//     .withMessage("Debes ingresar el precio")
//     .isNumeric()
//     .withMessage("Debes ingresar solo números"),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ ERRORES: errors.array() });
//     }
//     next();
//   },
// ];

// const validateUpdateProducts = [
//   body("nombre").notEmpty().withMessage("Debes ingresar el nombre"),
//   body("price")
//     .notEmpty()
//     .withMessage("Debes ingresar el precio")
//     .isNumeric()
//     .withMessage("Debes ingresar solo números"),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ ERRORES: errors.array() });
//     }
//     next();
//   },
// ];

// module.exports = { validateProducts, validateUpdateProducts };

const { body, validationResult } = require("express-validator");

const validateAddedProducts = [
  body("Nombre").notEmpty().withMessage("Debes ingresar un nombre"),
  body("Price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

const validateUpdatedProducts = [
  body("Nombre").notEmpty().withMessage("Debes ingresar el nombre"),
  body("Price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

module.exports = { validateAddedProducts, validateUpdatedProducts };