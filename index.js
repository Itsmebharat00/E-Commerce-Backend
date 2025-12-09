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
    category: {
      name: "men's clothing",
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    },
    image: "https://images.unsplash.com/photo-1616627981303-1b3a6ec0d78a",
    rating: { rate: 3.9, count: 120 },
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    category: {
      name: "men's clothing",
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    },
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: { rate: 4.1, count: 259 },
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: {
      name: "men's clothing",
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    },
    image: "https://images.unsplash.com/photo-1585386959984-a4155226e2a1",
    rating: { rate: 4.7, count: 500 },
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: {
      name: "men's clothing",
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    },
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    rating: { rate: 2.1, count: 430 },
  },
  {
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: {
      name: "jewelery",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    },
    image: "https://images.unsplash.com/photo-1545519031-78b1c8c2c7f2",
    rating: { rate: 3.9, count: 70 },
  },
  {
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Ring.",
    category: {
      name: "jewelery",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    },
    image: "https://images.unsplash.com/photo-1522312346375-4a9fa1a0c85a",
    rating: { rate: 3, count: 400 },
  },
  {
    title: "Pierced Owl Rose Gold Plated Stainless Steel",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: {
      name: "jewelery",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    },
    image: "https://images.unsplash.com/photo-1549887534-8f08017b27ab",
    rating: { rate: 1.9, count: 100 },
  },
  {
    title: "WD 2TB Portable External Hard Drive",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility. High capacity in a compact design.",
    category: {
      name: "electronics",
      image: "https://images.unsplash.com/photo-1580910051073-33a2abebd6cb",
    },
    image: "https://images.unsplash.com/photo-1580910051073-33a2abebd6cb",
    rating: { rate: 3.3, count: 203 },
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description:
      "Easy upgrade for faster boot-up, shutdown, application load and response.",
    category: {
      name: "electronics",
      image: "https://images.unsplash.com/photo-1580910051069-fd46015e01a1",
    },
    image: "https://images.unsplash.com/photo-1580910051069-fd46015e01a1",
    rating: { rate: 2.9, count: 470 },
  },
  {
    title: "BIYLACLESEN Women’s 3-in-1 Snow Jacket",
    price: 56.99,
    description: "Note: The jackets are US standard sizes.",
    category: {
      name: "women's clothing",
      image: "https://images.unsplash.com/photo-1600185360480-869d48a5ee90",
    },
    image: "https://images.unsplash.com/photo-1600185360480-869d48a5ee90",
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
