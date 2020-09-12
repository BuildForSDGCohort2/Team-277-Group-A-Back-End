const { body, validationResult } = require('express-validator');

const signUpValidator = [
  body('firstName')
    .isLength({ min: 3 })
    .withMessage(
      'firstName should not be empty and should be atleast 2 characters'
    )
    .isAlpha()
    .withMessage('firstName should be an alphabet')
    .trim(),
  body('lastName')
    .isAlpha()
    .withMessage('lastName should be an alphabet')
    .isLength({ min: 3 })
    .withMessage(
      'lastName should not be empty and should be atleast 2 characters'
    )
    .trim(),
  body('email')
    .isEmail()
    .withMessage('email should not be empty and should be a valid email')
    .normalizeEmail(),
  body('password')
    .trim()
    .isAlphanumeric()
    .withMessage('password should be alpanumeric')
    .isLength({ min: 8 })
    .withMessage(
      'password should not be empty and should be atleast 2 characters'
    ),
  body('dateOfBirth')
    .trim()
    .isDate()
    .optional()
    .withMessage('Date of birth should be a valid date'),
  function signUpValidation(req, res, next) {
    const errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(422).json({
        status: 422,
        error: errorValidation.array()
      });
    }
    return next();
  }
];
export default signUpValidator;
