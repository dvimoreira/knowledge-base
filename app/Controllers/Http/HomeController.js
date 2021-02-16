'use strict'

class HomeController {
    index ({ view }) {
        return view.render('home')
    }

    new ({ view }) {
        return view.render('new')
    }
}

module.exports = HomeController
