

module.exports = {
    read: (req, res) => {
		const db = req.app.get('db');

		db.get_inventory()
			.then(products => {
				res.status(200).send(products);
			})
			.catch(err => console.log(`Cannot read DB: ${err}`));
    },
    
    create: (req, res) => {
        const db = req.app.get('db')
        const{image_url, prod_name, price} = req.body
        db.create_product([image_url, prod_name, price])
        .then(() => {
            res.status(200).send('Product Created!')
        })
        .catch(err => console.log(`Cannot create Product: ${err}`))
    }
}