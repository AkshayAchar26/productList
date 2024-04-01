import conf from "../conf/conf";

class ProductService {
  async getAllProducts() {
    try {
      const productsResponse = await fetch(`${conf.dataUrl}/products`).then(
        (res) => res.json()
      );
      return productsResponse;
    } catch (error) {
      console.log("Error in getAllProducts :: ", error);
    }
  }

  async getSingleProduct({ productId }) {
    try {
      const product = await fetch(`${conf.dataUrl}/products/${productId}`).then(
        (res) => res.json()
      );

      return product;
    } catch (error) {
      console.log("Error in getting single product :: ", error);
    }
  }

  async getAllProductsCat() {
    try {
      const categories = await fetch(
        `${conf.dataUrl}/products/categories`
      ).then((res) => res.json());

      return categories;
    } catch (error) {
      console.log("Error while getting categories :: ", error);
    }
  }

  async getProductsByCategories({ category }) {
    try {
      const productsByCategory = await fetch(
        `${conf.dataUrl}/products/category/${category}`
      ).then((res) => res.json());

      return productsByCategory;
    } catch (error) {
      console.log("Error while getting products by category :: ", error);
    }
  }
}

export const productService = new ProductService();

export default productService;
