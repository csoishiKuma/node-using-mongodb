import { addnewProduct,
        getProducts,
        getProductWithID } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
        //Get multiple products
        .get(getProducts)
    
        //Post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')

        //Get a specific product with an ID
        .get(getProductWithID);
}

export default routes;