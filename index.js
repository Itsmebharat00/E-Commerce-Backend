/** @format */

const { initializingDatabase } = require("./db/db.connect");
initializingDatabase();
const ProductSchema = require("./models/Ecommerce.models");
const OrderSchema = require("./models/Order.models");
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
      name: "men'sclothing",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    },
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    rating: { rate: 3.9, count: 120 },
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    category: {
      name: "men'sclothing",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    },
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    rating: { rate: 4.1, count: 259 },
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: {
      name: "men'sclothing",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    },
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    rating: { rate: 4.7, count: 500 },
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: {
      name: "men'sclothing",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    },
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    rating: { rate: 2.1, count: 430 },
  },
  {
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: {
      name: "jewelery",
      image:
        "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    rating: { rate: 3.9, count: 70 },
  },
  {
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Ring.",
    category: {
      name: "jewelery",
      image:
        "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    rating: { rate: 3, count: 400 },
  },
  {
    title: "Pierced Owl Rose Gold Plated Stainless Steel",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: {
      name: "jewelery",
      image:
        "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    rating: { rate: 1.9, count: 100 },
  },
  {
    title: "WD 2TB Portable External Hard Drive",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility. High capacity in a compact design.",
    category: {
      name: "electronics",
      image:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    rating: { rate: 3.3, count: 203 },
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description:
      "Easy upgrade for faster boot-up, shutdown, application load and response.",
    category: {
      name: "electronics",
      image:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    rating: { rate: 2.9, count: 470 },
  },
  {
    title: "BIYLACLESEN Women’s 3-in-1 Snow Jacket",
    price: 56.99,
    description: "Note: The jackets are US standard sizes.",
    category: {
      name: "women'sclothing",
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    },
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
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

async function readProductsByCategory(categoryName) {
  try {
    const Products = await ProductSchema.find({
      "category.name": categoryName,
    });
    return Products;
  } catch (error) {
    throw error;
  }
}

app.get("/products/category/:categoryName", async (req, res) => {
  try {
    const { categoryName } = req.params;
    const products = await readProductsByCategory(categoryName);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No products found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
});

async function readProductById(id) {
  try {
    const products = await ProductSchema.findById(id);
    return products;
  } catch (error) {
    console.log("Error in fetching Product by title:", error);
    throw error;
  }
}

app.get("/products/:productId", async (req, res) => {
  try {
    const products = await readProductById(req.params.productId);
    if (products) {
      res.status(201).json({ message: "Product Found", products });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product by ID" });
  }
});

// Orders
app.post("/orders", async (req, res) => {
  try {
    const newOrder = new OrderSchema(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.log("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await OrderSchema.find();
    res.json(orders);
  } catch (error) {
    console.log("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
