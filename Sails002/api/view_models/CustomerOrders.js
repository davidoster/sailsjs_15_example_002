class CustomerOrders {
    constructor(customer, productOrders, compactData = true) {
        this.customer = customer;
        this.productOrders = [];
        if(compactData == true) {
            productOrders.forEach(productOrder => {
                this.productOrders.push({
                    orderId: productOrder.id,
                    products: productOrder.products
                });    
            });
        } else {
            this.productOrders = productOrders;
        }
    }
}

module.exports = { CustomerOrders }