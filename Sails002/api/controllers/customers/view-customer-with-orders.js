module.exports = {


  friendlyName: 'View customer with orders',


  description: 'Display "Customer with orders" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/customers/customer-with-orders'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
