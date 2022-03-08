const jwt = require('jsonwebtoken');

const mid = (req, res, next) => {
    try {
        console.log("testt");
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        // console.log(decodedToken)
        const userId = decodedToken.user._id;
        if (req.body.userId && req.body.userId !== userId) {
            res.status(401).json({
                error: 'Identifcation non reussit !'
            });
        } else {
            console.log(JSON.stringify(req.body));
            next();
        }
    } catch {
        // console.log(req.headers)
        res.status(401).json({
            error: "Erreur lors de l'authentification de la requete!"
        });
    }
};
module.exports = mid;