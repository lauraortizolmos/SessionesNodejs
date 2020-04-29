const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    // para que mande los datos a la consola
    console.log(req.body)
    req.session.user_data = {email, password};
    req.flash('success', 'Registro exitoso')
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    const user = req.session.user_data;
    delete req.session.user_data;

    res.render('profile', {
        user
    });
});

router.get('/products', (req, res) => {
    res.render('products')
});

module.exports = router;