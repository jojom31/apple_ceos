

const express = require('express');
    router = express.Router();




const ceosModel = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals:
        {
            title: 'List of  CEOs',
            data: ceosModel
        },
        partials: {
            body: 'partials/ceo-list'
        },
    })
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params;
    const executive = ceosModel.find((executive) => {
        if (executive.slug === slug) {
            return executive;
        }
    })
    if (executive ) {
    res.render('template', {
        locals:
        {
            title: `An Apple CEOs: ${executive.name}`,
            executive,
        },
        partials: {
            body: 'partials/ceo-details',
        },
    });

    } else {
        res.status(404).send(`No Ceo found that matches slug, ${slug}`);

    }      
});
    












module.exports = router;