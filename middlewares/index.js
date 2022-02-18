const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
        res.redirect('/auth/login')
        return
    }
    next();
}

const isExpert = (req, res, next) => {
    if (!(req.session.currentUser.role === 'expert'||req.session.currentUser.role === 'admin')) {
        res.redirect('/auth/login')
        return
    }
    next();
}
const isAdminM= (req, res, next) => {
    if (! req.session.currentUser.role === 'admin') {
        res.redirect('/auth/login')
        return
    }
    next();
}

module.exports = {
    isLoggedIn, isExpert, isAdminM
}