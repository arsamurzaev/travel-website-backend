const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        if (file.fieldname === 'hotels') cb(null, 'images/hotels')
        if (file.fieldname === 'toures') cb(null, 'images/tourse')
        cb(null, 'images/organiz')
    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

const types = ['image/jpeg', 'image/jpg', 'image/png']

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})