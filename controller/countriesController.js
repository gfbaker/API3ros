const fetch = require('node-fetch');

module.exports = {
    list: async(req, res) => {

        let countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        let holidays = await fetch('https://www.feriadosapp.com/api/holidays.json').then(response => response.json());

        return res.render('countries', {countries, holidays: holidays.data});
    }
};