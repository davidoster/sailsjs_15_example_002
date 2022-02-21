const customersController = require("../controllers/customers-controller");

class CustomerOrders {
    constructor(customer, productOrders, compactData = true) {
        this.customer = {
            id: customer.id,
            name: customer.firstName + " " + customer.lastName,
            email: customer.email,
            telephone: customer.tel,
            address: customer.address
        };
        this.ordersWithProducts = [];
        if (compactData == true) {
            customer.orders.forEach(order => {
                // console.log(order);
                let orderWithProducts = {};
                orderWithProducts.id = order.id;
                orderWithProducts.totalPrice = order.totalPrice;
                orderWithProducts.created = order.createdAt;
                orderWithProducts.updated = order.updatedAt;
                let products;
                productOrders.forEach(product => {
                    // console.log(product);
                    if (product.id == order.id) {
                        // this needs to be changed in order to get the quantity also!!!
                        products = product.products;
                    }
                });
                orderWithProducts.products = [...products];
                this.ordersWithProducts.push(orderWithProducts);
            });
        } else {
            this.ordersWithProducts = productOrders;
        }
    }
}

module.exports = { CustomerOrders }