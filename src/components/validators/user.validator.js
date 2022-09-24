import Joi from "joi";

const joiValidator = Joi.object({

    name: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇґҐєЄ ,.'-]{1,20}$/).required().messages({
        "string.pattern.base": "Тільки букви,мінімум 1 максимум 20!"
    }),
    username: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇґҐєЄ]{1,20}$/).required().messages({
        "string.pattern.base": "Тільки букви,мінімум 1 максимум 20!"
    }),
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,40}$/).required().messages({
        "string.pattern.base": "Тільки букви,мінімум 1 максимум 9!"
    }),
    phone: Joi.string().regex(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/).required(),
    website: Joi.string().regex(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/).required().messages({
        "string.pattern.base": "Тільки букви,мінімум 1 максимум 20!"
    }),
});

export {
    joiValidator
}