const { check, validationResult } = require('express-validator');

export const AddSchema = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('first name can not be empty!')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Minimum 3 characters required!')
        .bail()
    , (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]