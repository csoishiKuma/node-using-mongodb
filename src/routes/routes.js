import { addnewProduct } from '../controllers/controllers';
import { getProducts } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
    
        //Post endpoint
        .post(addnewProduct);

    app.route('/products')

        //Get endpoint
        .get(getProducts);
}

export default routes;