const jwt = require('jsonwebtoken');
const SECRET = 'sunshine'

module.exports = {
    userAuthenticated: (req, res, next) => {
        const headToken = req.get('Authorization')

        if(!headToken) {
            console.log('error in middleware')
            res.sendStatus(400)
        }

        let token

        try {
            token = jwt.verify(headToken, SECRET)
        } catch (error) {
            error.statusCode = 500
            throw error
        }

        if(!token) {
            const error = new Error('Not authenticated')
            error.statusCode = 400
            throw error
        }

        next()
    }
}