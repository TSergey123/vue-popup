import axios from "axios";

export default {
  async GET_PRODUCTS_FROM_API({
    commit
  }) {
    try {
      const products = await axios('https://my-json-server.typicode.com/TSergey123/mockjson/products', {
        method: 'GET',
      });
      commit('SET_PRODUCTS_TO_STATE', products.data);
      return products;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
}
