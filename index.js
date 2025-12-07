/** @format */

const { initializingDatabase } = require("./db/db.connect");
initializingDatabase();
const ProductSchema = require("./models/Ecommerce.models");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const products = [
  {
    title: "Fjallraven Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Ring.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    title: "Pierced Owl Rose Gold Plated Stainless Steel",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    title: "WD 2TB Portable External Hard Drive",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility. High capacity in a compact design.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description:
      "Easy upgrade for faster boot-up, shutdown, application load and response.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    title: "BIYLACLESEN Women’s 3-in-1 Snow Jacket",
    price: 56.99,
    description: "Note: The jackets are US standard sizes.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
];

async function createEcommerce(data) {
  try {
    const products = new ProductSchema(data);
    const productsSave = await ProductSchema.insertMany(data);
    console.log("New Ecommerce Data:", productsSave);
  } catch (error) {
    throw error;
  }
}
// createEcommerce(products);

async function readAllProducts() {
  try {
    const allProducts = await ProductSchema.find();
    return allProducts;
  } catch (error) {
    console.log("Error in fetching Products:", error);
    throw error;
  }
}

app.get("/products", async (req, res) => {
  try {
    const products = await readAllProducts();
    if (products.length != 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No Products found." });
    }
  } catch (error) {
    console.log("Error while fetching data:", error);
    res.status(500).json({ error: "Failed to fetch Products" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
