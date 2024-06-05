const joi = require("joi")

const UserCreateDto = joi.object({
    name:  joi.string().min(2).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(25).required,
    conformPassword:joi.string().equal(joi.ref('password')).required(),
    address:joi.string().empty().optional(),
    phones:joi.string().min(10).max(15),
    images:joi.string().optional(),
})

module.export= {
    UserCreateDto
}
