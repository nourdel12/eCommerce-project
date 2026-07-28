const products=[
 {
  id: 1,
  name: "Fresh Apple",
  price: 120,
  oldPrice: 150,
  discount: 20,
  image: "../images/items/apple.png",

  description:
    "Fresh and juicy green apples carefully selected from premium farms in Italy. Rich in fiber, Vitamin C, and antioxidants, these apples have a naturally sweet flavor with a crisp texture. They are perfect for healthy snacks, fruit salads, desserts, smoothies, and fresh juices.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of premium quality apples.",
    origin: "Imported directly from trusted farms in Italy under strict quality control standards.",
    storage: "Store in the refrigerator between 2°C and 6°C to maintain freshness and crispness.",
    expiry: "Best consumed within 7 days after purchase when refrigerated.",
    package: "Packed in eco-friendly recyclable packaging to ensure maximum freshness during delivery.",
    ingredients: "100% natural fresh apples with no preservatives, artificial colors, or added sugar."
  },

  customerFeedback: {
    rating: 4.8,
    reviews: 125,
    comments: [
      {
        id: 1,
        user: "Ahmed Hassan",
        rating: 5,
        comment: "Very fresh and delicious. The apples were crispy and exactly as described."
      },
      {
        id: 2,
        user: "Sara Ali",
        rating: 4,
        comment: "Good quality and carefully packed. Delivery was fast."
      },
      {
        id: 3,
        user: "Mohamed Adel",
        rating: 5,
        comment: "Excellent taste. I'll definitely order them again."
      }
    ]
  },

  seller: "Fresh Market",
  sku: "FR001",

  brand: {
    id: 1,
    name: "Fresh Farm",
    image: "images/brands/fresh-farm.png"
  },

  inStock: true,

  tags: [
    "Fruit",
    "Fresh",
    "Healthy",
    "Organic",
    "Vitamin C"
  ],

  category: {
    id: 1,
    name: "Fresh Fruit",
    image: "images/categories/fruit.png"
  }
},

{
  id: 2,
  name: "Banana",
  price: 60,
  oldPrice: 70,
  discount: 10,
  image: "../images/items/banana.png",

  description:
    "Naturally ripened bananas with a soft texture and sweet flavor. Rich in potassium, fiber, and essential vitamins, they are an excellent choice for breakfast, smoothies, desserts, or a healthy snack before and after exercise.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of carefully selected ripe bananas.",
    origin: "Locally grown in Egypt using high-quality farming practices.",
    storage: "Keep at room temperature until fully ripe. Refrigerate after ripening if needed.",
    expiry: "Recommended to consume within 5 days after purchase.",
    package: "Packed carefully to protect the fruit from damage during transportation.",
    ingredients: "100% fresh bananas with no preservatives or artificial additives."
  },

  customerFeedback: {
    rating: 4.7,
    reviews: 98,
    comments: [
      {
        id: 1,
        user: "Mona Samir",
        rating: 5,
        comment: "Fresh bananas with a great taste. Perfect for smoothies."
      },
      {
        id: 2,
        user: "Youssef Khaled",
        rating: 4,
        comment: "Good quality and arrived in excellent condition."
      },
      {
        id: 3,
        user: "Nour Ahmed",
        rating: 5,
        comment: "Sweet, fresh, and my kids loved them."
      }
    ]
  },

  seller: "Green Store",
  sku: "FR002",

  brand: {
    id: 2,
    name: "Nature Food",
    image: "images/brands/nature-food.png"
  },

  inStock: true,

  tags: [
    "Fruit",
    "Organic",
    "Healthy",
    "Potassium",
    "Breakfast"
  ],

  category: {
    id: 1,
    name: "Fresh Fruit",
    image: "images/categories/fruit.png"
  }
},
{
  id: 3,
  name: "Orange",
  price: 80,
  oldPrice: 95,
  discount: 15,
  image: "../images/items/orange.png",

  description:
    "Fresh and juicy oranges packed with natural Vitamin C and antioxidants. Carefully selected from the finest local farms to deliver a refreshing taste and premium quality. Perfect for fresh juice, fruit salads, or as a healthy snack any time of the day.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of freshly harvested oranges.",
    origin: "Locally grown in Egypt using sustainable farming methods.",
    storage: "Keep refrigerated between 3°C and 6°C to maintain freshness and juice quality.",
    expiry: "Best consumed within 6 days after purchase.",
    package: "Packed in breathable food-grade packaging to preserve freshness during transportation.",
    ingredients: "100% natural oranges with no preservatives, artificial colors, or added sugar."
  },

  customerFeedback: {
    rating: 4.9,
    reviews: 175,
    comments: [
      {
        id: 1,
        user: "Omar Mohamed",
        userImage: "images/users/user3.jpg",
        rating: 5,
        date: "15 Jul 2026",
        verifiedPurchase: true,
        comment: "The oranges were very sweet and fresh. Perfect for making juice."
      },
      {
        id: 2,
        user: "Mariam Ali",
        userImage: "images/users/user4.jpg",
        rating: 5,
        date: "11 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and carefully packed."
      },
      {
        id: 3,
        user: "Hassan Adel",
        userImage: "images/users/user5.jpg",
        rating: 4,
        date: "8 Jul 2026",
        verifiedPurchase: false,
        comment: "Very good product with a fresh taste."
      }
    ]
  },

  seller: "Fresh Market",
  sku: "FR003",

  brand: {
    id: 1,
    name: "Fresh Farm",
    image: "images/brands/fresh-farm.png"
  },

  inStock: true,

  tags: [
    "Fruit",
    "Vitamin C",
    "Healthy",
    "Fresh",
    "Juicy"
  ],

  category: {
    id: 1,
    name: "Fresh Fruit",
    image: "images/categories/fruit.png"
  }
},

{
  id: 4,
  name: "Mango",
  price: 150,
  oldPrice: 180,
  discount: 30,
  image: "../images/items/mango.png",

  description:
    "Premium Egyptian mangoes with a naturally sweet taste, rich aroma, and smooth texture. Carefully handpicked to guarantee freshness and exceptional quality. Perfect for desserts, smoothies, fruit salads, fresh juices, or simply enjoying as a healthy snack.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of hand-picked premium mangoes.",
    origin: "Harvested from carefully selected Egyptian mango farms.",
    storage: "Store at room temperature until ripe, then refrigerate for maximum freshness.",
    expiry: "Best consumed within 5 days after purchase.",
    package: "Securely packed in protective eco-friendly packaging to avoid bruising during delivery.",
    ingredients: "100% fresh mangoes with no preservatives or artificial additives."
  },

  customerFeedback: {
    rating: 4.9,
    reviews: 212,
    comments: [
      {
        id: 1,
        user: "Salma Mostafa",
        userImage: "images/users/user6.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: true,
        comment: "One of the best mangoes I've ever tasted. Sweet and juicy."
      },
      {
        id: 2,
        user: "Mahmoud Ibrahim",
        userImage: "images/users/user7.jpg",
        rating: 5,
        date: "13 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and arrived in perfect condition."
      },
      {
        id: 3,
        user: "Reem Ashraf",
        userImage: "images/users/user8.jpg",
        rating: 4,
        date: "10 Jul 2026",
        verifiedPurchase: true,
        comment: "Fresh and delicious. The packaging was very good."
      }
    ]
  },

  seller: "Fruit House",
  sku: "FR004",

  brand: {
    id: 3,
    name: "Organic Life",
    image: "images/brands/organic-life.png"
  },

  inStock: true,

  tags: [
    "Fruit",
    "Summer",
    "Fresh",
    "Organic",
    "Sweet"
  ],

  category: {
    id: 1,
    name: "Fresh Fruit",
    image: "images/categories/fruit.png"
  }
},
{
  id: 5,
  name: "Strawberry",
  price: 110,
  oldPrice: 130,
  discount: 20,
  image: "../images/items/strawberry.png",

  description:
    "Fresh, sweet, and juicy strawberries picked at the perfect stage of ripeness to ensure the best flavor and freshness. Rich in Vitamin C, antioxidants, and fiber, making them an excellent choice for desserts, smoothies, fruit salads, or a healthy snack.",

  additionalInfo: {
    weight: "Net Weight: 500 g of premium quality strawberries.",
    origin: "Freshly harvested from selected Egyptian farms using high-quality farming techniques.",
    storage: "Store in the refrigerator and wash only before serving to preserve freshness.",
    expiry: "Best consumed within 3 days after purchase.",
    package: "Packed in ventilated food-safe containers to protect the fruit during transportation.",
    ingredients: "100% fresh strawberries with no preservatives, artificial colors, or additives."
  },

  customerFeedback: {
    rating: 4.8,
    reviews: 150,
    comments: [
      {
        id: 1,
        user: "Nadia Hassan",
        userImage: "images/users/user9.jpg",
        rating: 5,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "The strawberries were fresh, sweet, and looked exactly like the pictures."
      },
      {
        id: 2,
        user: "Ali Mostafa",
        userImage: "images/users/user10.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: true,
        comment: "Very delicious and perfectly packed. Highly recommended."
      },
      {
        id: 3,
        user: "Heba Ahmed",
        userImage: "images/users/user11.jpg",
        rating: 4,
        date: "16 Jul 2026",
        verifiedPurchase: false,
        comment: "Fresh quality with a nice taste. Delivery was on time."
      }
    ]
  },

  seller: "Fresh Basket",
  sku: "FR005",

  brand: {
    id: 2,
    name: "Nature Food",
    image: "images/brands/nature-food.png"
  },

  inStock: false,

  tags: [
    "Fruit",
    "Berry",
    "Healthy",
    "Fresh",
    "Vitamin C"
  ],

  category: {
    id: 1,
    name: "Fresh Fruit",
    image: "images/categories/fruit.png"
  }
},

{
  id: 6,
  name: "Tomato",
  price: 35,
  oldPrice: 45,
  discount: 10,
  image: "../images/items/tomato.png",

  description:
    "Fresh red tomatoes harvested daily to deliver outstanding freshness, natural sweetness, and rich flavor. Ideal for salads, sauces, soups, sandwiches, and all kinds of home cooking. Carefully selected to ensure premium quality and nutritional value.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of premium farm-fresh tomatoes.",
    origin: "Locally grown in Egypt using environmentally friendly farming practices.",
    storage: "Store in a cool and dry place. Refrigeration is recommended after full ripening.",
    expiry: "Best consumed within 5 days after purchase.",
    package: "Packed in durable food-grade packaging to prevent damage during delivery.",
    ingredients: "100% natural tomatoes with no preservatives, artificial colors, or additives."
  },

  customerFeedback: {
    rating: 4.5,
    reviews: 88,
    comments: [
      {
        id: 1,
        user: "Karim Samy",
        userImage: "images/users/user12.jpg",
        rating: 5,
        date: "19 Jul 2026",
        verifiedPurchase: true,
        comment: "Very fresh tomatoes with an excellent taste. Perfect for salads."
      },
      {
        id: 2,
        user: "Aya Mahmoud",
        userImage: "images/users/user13.jpg",
        rating: 4,
        date: "17 Jul 2026",
        verifiedPurchase: true,
        comment: "Good quality and arrived in excellent condition."
      },
      {
        id: 3,
        user: "Mohamed Tarek",
        userImage: "images/users/user14.jpg",
        rating: 4,
        date: "14 Jul 2026",
        verifiedPurchase: false,
        comment: "Fresh and clean vegetables. I will definitely order again."
      }
    ]
  },

  seller: "Veggie Shop",
  sku: "VG001",

  brand: {
    id: 4,
    name: "Healthy Choice",
    image: "images/brands/healthy-choice.png"
  },

  inStock: true,

  tags: [
    "Vegetable",
    "Fresh",
    "Healthy",
    "Cooking",
    "Salad"
  ],

  category: {
    id: 2,
    name: "Fresh Vegetables",
    image: "images/categories/vegetables.png"
  }
},
{
  id: 7,
  name: "Cucumber",
  price: 30,
  oldPrice: null,
  discount: 0,
  image: "../images/items/cucumber.png",

  description:
    "Fresh cucumbers with a crisp texture and refreshing taste, harvested daily to ensure maximum freshness. Rich in water, vitamins, and minerals, they are perfect for salads, sandwiches, healthy meals, or detox drinks.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of premium fresh cucumbers.",
    origin: "Grown in carefully selected Egyptian farms using natural farming methods.",
    storage: "Keep refrigerated between 4°C and 6°C to maintain freshness and crispness.",
    expiry: "Best consumed within 5 days after purchase.",
    package: "Packed in food-safe recyclable packaging to preserve quality during delivery.",
    ingredients: "100% fresh cucumbers with no preservatives or artificial additives."
  },

  customerFeedback: {
    rating: 4.6,
    reviewsCount: 70,
    comments: [
      {
        id: 1,
        user: "Yasmine Ali",
        userImage: "images/users/user15.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Very fresh and crunchy. Perfect for my daily salad."
      },
      {
        id: 2,
        user: "Ahmed Nasser",
        userImage: "images/users/user16.jpg",
        rating: 4,
        date: "19 Jul 2026",
        verifiedPurchase: true,
        comment: "Good quality and arrived fresh."
      },
      {
        id: 3,
        user: "Mona Adel",
        userImage: "images/users/user17.jpg",
        rating: 5,
        date: "17 Jul 2026",
        verifiedPurchase: false,
        comment: "Excellent vegetables and very clean."
      }
    ]
  },

  seller: "Veggie Shop",

  sku: "VG002",

  brand: {
    id: 4,
    name: "Healthy Choice",
    image: "images/brands/healthy-choice.png"
  },

  inStock: true,

  tags: [
    "Vegetable",
    "Healthy",
    "Fresh",
    "Salad",
    "Organic"
  ],

  category: {
    id: 2,
    name: "Fresh Vegetables",
    image: "images/categories/vegetables.png"
  }
},

{
  id: 8,
  name: "Potato",
  price: 25,
  oldPrice: null,
  discount: 0,
  image: "../images/items/potato.png",

  description:
    "Premium quality potatoes carefully selected for their smooth texture and rich natural flavor. Perfect for frying, baking, boiling, mashed potatoes, and a variety of homemade recipes. A kitchen essential for every family.",

  additionalInfo: {
    weight: "Net Weight: 2 Kg of carefully selected fresh potatoes.",
    origin: "Locally grown in Egypt under strict agricultural quality standards.",
    storage: "Store in a cool, dry, and dark place away from direct sunlight to extend shelf life.",
    expiry: "Fresh for up to 20 days when stored correctly.",
    package: "Packed in breathable recyclable bags that help maintain freshness.",
    ingredients: "100% natural potatoes with no preservatives or artificial treatments."
  },

  customerFeedback: {
    rating: 4.4,
    reviewsCount: 65,
    comments: [
      {
        id: 1,
        user: "Mostafa Ahmed",
        userImage: "images/users/user18.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Great quality and perfect size for cooking."
      },
      {
        id: 2,
        user: "Hanan Samy",
        userImage: "images/users/user19.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: true,
        comment: "Very clean potatoes with excellent freshness."
      },
      {
        id: 3,
        user: "Omar Khaled",
        userImage: "images/users/user20.jpg",
        rating: 4,
        date: "15 Jul 2026",
        verifiedPurchase: false,
        comment: "Good value for money and fast delivery."
      }
    ]
  },

  seller: "Green Store",

  sku: "VG003",

  brand: {
    id: 5,
    name: "Green Land",
    image: "images/brands/green-land.png"
  },

  inStock: true,

  tags: [
    "Vegetable",
    "Cooking",
    "Fresh",
    "Family",
    "Healthy"
  ],

  category: {
    id: 2,
    name: "Fresh Vegetables",
    image: "images/categories/vegetables.png"
  }
},
{
  id: 9,
  name: "Carrot",
  price: 40,
  oldPrice: 50,
  discount: 10,
  image: "../images/items/carrot.png",

  description:
    "Fresh and naturally sweet carrots harvested from premium farms to provide the highest quality and freshness. Rich in Vitamin A, antioxidants, and dietary fiber, making them an excellent choice for healthy meals, salads, soups, juices, and snacks.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of premium quality carrots.",
    origin: "Freshly harvested from trusted Egyptian farms following high agricultural standards.",
    storage: "Keep refrigerated between 2°C and 5°C to preserve freshness and nutritional value.",
    expiry: "Best consumed within 8 days after purchase.",
    package: "Packed in eco-friendly recyclable packaging to ensure freshness during transportation.",
    ingredients: "100% fresh carrots with no preservatives, artificial colors, or additives."
  },

  customerFeedback: {
    rating: 4.7,
    reviewsCount: 96,
    comments: [
      {
        id: 1,
        user: "Nada Mohamed",
        userImage: "images/users/user21.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Very fresh and naturally sweet. Perfect for salads and juices."
      },
      {
        id: 2,
        user: "Ahmed Fathy",
        userImage: "images/users/user22.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Good quality and clean packaging."
      },
      {
        id: 3,
        user: "Rehab Ali",
        userImage: "images/users/user23.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Excellent product. My family loved the freshness."
      }
    ]
  },

  seller: "Fresh Basket",

  sku: "VG004",

  brand: {
    id: 5,
    name: "Green Land",
    image: "images/brands/green-land.png"
  },

  inStock: false,

  tags: [
    "Vegetable",
    "Healthy",
    "Vitamin A",
    "Fresh",
    "Organic"
  ],

  category: {
    id: 2,
    name: "Fresh Vegetables",
    image: "images/categories/vegetables.png"
  }
},

{
  id: 10,
  name: "Broccoli",
  price: 75,
  oldPrice: 90,
  discount: 15,
  image: "../images/items/broccoli.png",

  description:
    "Premium organic broccoli carefully selected to deliver exceptional freshness and nutritional value. Rich in vitamins, minerals, antioxidants, and fiber, it is an ideal ingredient for healthy meals, soups, steamed dishes, stir-fries, and balanced diets.",

  additionalInfo: {
    weight: "Net Weight: 500 g of fresh organic broccoli.",
    origin: "Cultivated on certified Egyptian organic farms using sustainable farming practices.",
    storage: "Store refrigerated at temperatures between 2°C and 5°C for maximum freshness.",
    expiry: "Best consumed within 6 days after purchase.",
    package: "Packed in recyclable food-safe packaging that helps preserve freshness and quality.",
    ingredients: "100% organic broccoli with no chemicals, preservatives, or artificial additives."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 110,
    comments: [
      {
        id: 1,
        user: "Salma Ahmed",
        userImage: "images/users/user24.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and very fresh. Perfect for healthy meals."
      },
      {
        id: 2,
        user: "Omar Samir",
        userImage: "images/users/user25.jpg",
        rating: 5,
        date: "19 Jul 2026",
        verifiedPurchase: true,
        comment: "The broccoli arrived fresh and was carefully packed."
      },
      {
        id: 3,
        user: "Mariam Hassan",
        userImage: "images/users/user26.jpg",
        rating: 4,
        date: "16 Jul 2026",
        verifiedPurchase: false,
        comment: "Very good quality and worth the price."
      }
    ]
  },

  seller: "Organic Shop",

  sku: "VG005",

  brand: {
    id: 3,
    name: "Organic Life",
    image: "images/brands/organic-life.png"
  },

  inStock: false,

  tags: [
    "Vegetable",
    "Organic",
    "Healthy",
    "Fiber",
    "Fresh"
  ],

  category: {
    id: 2,
    name: "Fresh Vegetables",
    image: "images/categories/vegetables.png"
  }





},
{
  id: 11,
  name: "Chicken Breast",
  price: 220,
  oldPrice: 250,
  discount: 12,
  image: "../images/items/chicken.png",

  description:
    "Premium boneless chicken breast carefully prepared to provide fresh, tender, and high-quality meat. Rich in lean protein and low in fat, making it an excellent choice for healthy meals, grilling, baking, and meal preparation.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of premium boneless chicken breast.",
    origin: "Produced in certified Egyptian poultry farms under strict quality standards.",
    storage: "Keep frozen at -18°C. Refrigerate after thawing and do not refreeze.",
    expiry: "Best consumed before the expiration date printed on the package.",
    package: "Vacuum-sealed food-grade packaging to preserve freshness and quality.",
    ingredients: "100% fresh chicken breast with no preservatives or artificial additives."
  },

  customerFeedback: {
    rating: 4.9,
    reviewsCount: 184,
    comments: [
      {
        id: 1,
        user: "Ahmed Salah",
        userImage: "images/users/user27.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Very fresh and clean. Perfect for grilling."
      },
      {
        id: 2,
        user: "Mona Ibrahim",
        userImage: "images/users/user28.jpg",
        rating: 5,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and arrived frozen as expected."
      },
      {
        id: 3,
        user: "Khaled Mohamed",
        userImage: "images/users/user29.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Good quality and worth the price."
      }
    ]
  },

  seller: "Fresh Meat",

  sku: "MT001",

  brand: {
    id: 6,
    name: "Farm Fresh",
    image: "images/brands/farm-fresh.png"
  },

  inStock: true,

  tags: [
    "Chicken",
    "Protein",
    "Fresh",
    "Healthy",
    "Frozen"
  ],

  category: {
    id: 3,
    name: "Meat & Fish",
    image: "images/categories/meat.png"
  }
},

{
  id: 12,
  name: "Beef Steak",
  price: 340,
  oldPrice: 380,
  discount: 10,
  image: "../images/items/beaf.png",

  description:
    "Premium beef steak selected from high-quality cuts to deliver a rich flavor and tender texture. Perfect for grilling, roasting, or pan-searing, making it an excellent choice for family meals and special occasions.",

  additionalInfo: {
    weight: "Net Weight: 1 Kg of premium beef steak.",
    origin: "Sourced from trusted Egyptian farms following strict food safety standards.",
    storage: "Store frozen at -18°C and thaw in the refrigerator before cooking.",
    expiry: "Consume before the expiration date printed on the package.",
    package: "Vacuum-packed to preserve freshness, texture, and flavor.",
    ingredients: "100% fresh beef with no preservatives or artificial ingredients."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 155,
    comments: [
      {
        id: 1,
        user: "Omar Hassan",
        userImage: "images/users/user30.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Tender meat with an amazing flavor after grilling."
      },
      {
        id: 2,
        user: "Sara Mahmoud",
        userImage: "images/users/user31.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and premium packaging."
      },
      {
        id: 3,
        user: "Youssef Adel",
        userImage: "images/users/user32.jpg",
        rating: 4,
        date: "15 Jul 2026",
        verifiedPurchase: false,
        comment: "Very good meat with a nice texture."
      }
    ]
  },

  seller: "Fresh Meat",

  sku: "MT002",

  brand: {
    id: 6,
    name: "Farm Fresh",
    image: "images/brands/farm-fresh.png"
  },

  inStock: true,

  tags: [
    "Beef",
    "Steak",
    "Protein",
    "Fresh",
    "Premium"
  ],

  category: {
    id: 3,
    name: "Meat & Fish",
    image: "images/categories/meat.png"
  }
},
{
  id: 13,
  name: "Fresh Salmon Fillet",
  price: 420,
  oldPrice: 470,
  discount: 11,
  image: "../images/items/salmon.png",

  description:
    "Premium fresh salmon fillet with a rich flavor and tender texture. Carefully selected from high-quality sources and packed immediately to preserve freshness. Rich in Omega-3, protein, and essential nutrients, making it an excellent choice for healthy lunches and dinners.",

  additionalInfo: {
    weight: "Net Weight: 500 g of premium salmon fillet.",
    origin: "Imported from Norway under strict food safety standards.",
    storage: "Keep frozen at -18°C. Thaw in the refrigerator before cooking and do not refreeze.",
    expiry: "Best consumed before the expiration date printed on the package.",
    package: "Vacuum-sealed packaging to maintain freshness, flavor, and texture.",
    ingredients: "100% fresh salmon fillet with no preservatives or artificial additives."
  },

  customerFeedback: {
    rating: 4.9,
    reviewsCount: 132,
    comments: [
      {
        id: 1,
        user: "Mariam Adel",
        userImage: "images/users/user33.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and tasted exactly like restaurant salmon."
      },
      {
        id: 2,
        user: "Ahmed Tarek",
        userImage: "images/users/user34.jpg",
        rating: 5,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Fresh, clean, and perfectly packed."
      },
      {
        id: 3,
        user: "Salma Hassan",
        userImage: "images/users/user35.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Very good quality and worth the price."
      }
    ]
  },

  seller: "Sea Fresh",

  sku: "MT003",

  brand: {
    id: 7,
    name: "Ocean Catch",
    image: "images/brands/ocean-catch.png"
  },

  inStock: true,

  tags: [
    "Fish",
    "Salmon",
    "Omega 3",
    "Healthy",
    "Seafood"
  ],

  category: {
    id: 3,
    name: "Meat & Fish",
    image: "images/categories/meat.png"
  }
},

{
  id: 14,
  name: "Shrimp",
  price: 280,
  oldPrice: 320,
  discount: 13,
  image: "../images/items/shrimp.png",

  description:
    "Fresh premium shrimp with a naturally sweet flavor and firm texture. Carefully cleaned and packed to ensure the highest quality. Perfect for grilling, frying, pasta, seafood dishes, and healthy family meals.",

  additionalInfo: {
    weight: "Net Weight: 500 g of premium cleaned shrimp.",
    origin: "Responsibly sourced from the Mediterranean Sea.",
    storage: "Keep frozen at -18°C until ready to use. Do not refreeze after thawing.",
    expiry: "Best consumed before the expiration date shown on the package.",
    package: "Vacuum-packed in food-grade packaging to preserve freshness and taste.",
    ingredients: "100% natural shrimp with no preservatives or artificial ingredients."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 119,
    comments: [
      {
        id: 1,
        user: "Omar Ibrahim",
        userImage: "images/users/user36.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Large, fresh shrimp with an amazing taste."
      },
      {
        id: 2,
        user: "Nour Mohamed",
        userImage: "images/users/user37.jpg",
        rating: 5,
        date: "19 Jul 2026",
        verifiedPurchase: true,
        comment: "Very clean and easy to cook. Highly recommended."
      },
      {
        id: 3,
        user: "Heba Samir",
        userImage: "images/users/user38.jpg",
        rating: 4,
        date: "16 Jul 2026",
        verifiedPurchase: false,
        comment: "Fresh seafood and excellent packaging."
      }
    ]
  },

  seller: "Sea Fresh",

  sku: "MT004",

  brand: {
    id: 7,
    name: "Ocean Catch",
    image: "images/brands/ocean-catch.png"
  },

  inStock: true,

  tags: [
    "Shrimp",
    "Seafood",
    "Protein",
    "Fresh",
    "Healthy"
  ],

  category: {
    id: 3,
    name: "Meat & Fish",
    image: "images/categories/meat.png"
  }
},

{
  id: 15,
  name: "Tuna Fillet",
  price: 260,
  oldPrice: 300,
  discount: 13,
  image: "../images/items/tuna-fillet.png",

  description:
    "Premium tuna fillet with a rich flavor and firm texture, carefully selected to ensure exceptional freshness and quality. A perfect source of lean protein and Omega-3 fatty acids, making it ideal for grilling, baking, salads, sandwiches, and healthy family meals.",

  additionalInfo: {
    weight: "Net Weight: 500 g of premium tuna fillet.",
    origin: "Responsibly sourced from high-quality fishing areas under international food safety standards.",
    storage: "Keep frozen at -18°C. Thaw overnight in the refrigerator before cooking. Do not refreeze after thawing.",
    expiry: "Best consumed before the expiration date printed on the package.",
    package: "Vacuum-sealed food-grade packaging to preserve freshness, flavor, and texture.",
    ingredients: "100% fresh tuna fillet with no preservatives or artificial ingredients."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 104,
    comments: [
      {
        id: 1,
        user: "Ahmed Mahmoud",
        userImage: "images/users/user39.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and very fresh. Perfect for grilling."
      },
      {
        id: 2,
        user: "Mona Samir",
        userImage: "images/users/user40.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "The packaging was perfect and the fish tasted amazing."
      },
      {
        id: 3,
        user: "Omar Ali",
        userImage: "images/users/user41.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Very good quality with a fresh taste."
      }
    ]
  },

  seller: "Sea Fresh",

  sku: "MT005",

  brand: {
    id: 7,
    name: "Ocean Catch",
    image: "images/brands/ocean-catch.png"
  },

  inStock: true,

  tags: [
    "Fish",
    "Tuna",
    "Protein",
    "Omega 3",
    "Healthy"
  ],

  category: {
    id: 3,
    name: "Meat & Fish",
    image: "images/categories/meat.png"
  }
},

{
  id: 16,
  name: "Potato Chips",
  price: 35,
  oldPrice: 45,
  discount: 22,
  image: "../images/items/potato-chips.png",

  description:
    "Crispy potato chips made from carefully selected potatoes and seasoned with a delicious classic flavor. Perfect for movie nights, parties, picnics, or as a quick snack anytime during the day.",

  additionalInfo: {
    weight: "Net Weight: 180 g.",
    origin: "Produced in Egypt using high-quality potatoes and premium ingredients.",
    storage: "Store in a cool and dry place away from direct sunlight. Reseal the package after opening.",
    expiry: "Best consumed before the date printed on the package.",
    package: "Packed in a sealed freshness-lock bag to keep every chip crispy.",
    ingredients: "Potatoes, vegetable oil, salt, natural flavoring, and approved seasonings."
  },

  customerFeedback: {
    rating: 4.7,
    reviewsCount: 215,
    comments: [
      {
        id: 1,
        user: "Sara Ahmed",
        userImage: "images/users/user42.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Very crunchy and full of flavor. My favorite snack."
      },
      {
        id: 2,
        user: "Mohamed Fathy",
        userImage: "images/users/user43.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Fresh and delicious. Great value for the price."
      },
      {
        id: 3,
        user: "Aya Khaled",
        userImage: "images/users/user44.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Perfect crunch and not too salty."
      }
    ]
  },

  seller: "Snack World",

  sku: "SN001",

  brand: {
    id: 8,
    name: "Crunchy Bite",
    image: "images/brands/crunchy-bite.png"
  },

  inStock: true,

  tags: [
    "Snack",
    "Chips",
    "Crunchy",
    "Party",
    "Classic"
  ],

  category: {
    id: 4,
    name: "Snacks",
    image: "images/categories/snacks.png"
  }
},
{
  id: 17,
  name: "Cheese Crackers",
  price: 45,
  oldPrice: 55,
  discount: 18,
  image: "../images/items/cheese-crackers.png",

  description:
    "Delicious baked cheese crackers made with premium ingredients for a rich cheesy flavor and crispy texture. Perfect as a light snack for school, work, road trips, or serving with your favorite dips.",

  additionalInfo: {
    weight: "Net Weight: 200 g.",
    origin: "Manufactured in Egypt using premium quality ingredients.",
    storage: "Store in a cool and dry place away from moisture and direct sunlight.",
    expiry: "Best consumed before the expiration date printed on the package.",
    package: "Sealed freshness-lock packaging to keep crackers crispy.",
    ingredients: "Wheat flour, cheese powder, vegetable oil, salt, natural flavors, and permitted food additives."
  },

  customerFeedback: {
    rating: 4.6,
    reviewsCount: 142,
    comments: [
      {
        id: 1,
        user: "Hassan Ali",
        userImage: "images/users/user45.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Very crispy with a rich cheese flavor."
      },
      {
        id: 2,
        user: "Nour Ibrahim",
        userImage: "images/users/user46.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Great snack for kids and adults."
      },
      {
        id: 3,
        user: "Mariam Adel",
        userImage: "images/users/user47.jpg",
        rating: 5,
        date: "17 Jul 2026",
        verifiedPurchase: false,
        comment: "Fresh and delicious. I'll definitely buy it again."
      }
    ]
  },

  seller: "Snack World",

  sku: "SN002",

  brand: {
    id: 8,
    name: "Crunchy Bite",
    image: "images/brands/crunchy-bite.png"
  },

  inStock: true,

  tags: ["Snack", "Cheese", "Crackers", "Crispy", "Baked"],

  category: {
    id: 4,
    name: "Snacks",
    image: "images/categories/snacks.png"
  }
},

{
  id: 18,
  name: "Chocolate Cookies",
  price: 60,
  oldPrice: 75,
  discount: 20,
  image: "../images/items/chocolate-cookies.png",

  description:
    "Crunchy chocolate cookies baked with real cocoa for a rich and satisfying taste. Perfect with coffee, tea, or milk and ideal for sharing with family and friends.",

  additionalInfo: {
    weight: "Net Weight: 250 g.",
    origin: "Produced in Egypt using premium cocoa and high-quality ingredients.",
    storage: "Keep in a cool and dry place. Close the package tightly after opening.",
    expiry: "Best consumed before the printed expiration date.",
    package: "Resealable package to maintain freshness and crunchiness.",
    ingredients: "Wheat flour, cocoa powder, chocolate chips, sugar, butter, eggs, and natural vanilla flavor."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 198,
    comments: [
      {
        id: 1,
        user: "Ahmed Yasser",
        userImage: "images/users/user48.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "Rich chocolate flavor and perfectly crunchy."
      },
      {
        id: 2,
        user: "Salma Tarek",
        userImage: "images/users/user49.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "One of the best cookies I've ever tried."
      },
      {
        id: 3,
        user: "Omar Hassan",
        userImage: "images/users/user50.jpg",
        rating: 4,
        date: "19 Jul 2026",
        verifiedPurchase: false,
        comment: "Very tasty and fresh with plenty of chocolate chips."
      }
    ]
  },

  seller: "Snack World",

  sku: "SN003",

  brand: {
    id: 9,
    name: "Sweet Treats",
    image: "images/brands/sweet-treats.png"
  },

  inStock: true,

  tags: ["Snack", "Cookies", "Chocolate", "Dessert", "Sweet"],

  category: {
    id: 4,
    name: "Snacks",
    image: "images/categories/snacks.png"
  }
},

{
  id: 19,
  name: "Salted Popcorn",
  price: 28,
  oldPrice: null,
  discount: 0,
  image: "../images/items/popcorn.png",

  description:
    "Light and crispy salted popcorn made from premium corn kernels. A delicious snack for movie nights, parties, or enjoying anytime with family and friends.",

  additionalInfo: {
    weight: "Net Weight: 120 g.",
    origin: "Manufactured in Egypt from carefully selected corn kernels.",
    storage: "Store in a cool, dry place away from humidity.",
    expiry: "Consume before the expiration date shown on the package.",
    package: "Airtight package that keeps the popcorn fresh and crunchy.",
    ingredients: "Corn kernels, vegetable oil, salt, and natural flavor."
  },

  customerFeedback: {
    rating: 4.5,
    reviewsCount: 116,
    comments: [
      {
        id: 1,
        user: "Nada Ali",
        userImage: "images/users/user51.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Fresh, crunchy, and perfect for movie night."
      },
      {
        id: 2,
        user: "Khaled Samir",
        userImage: "images/users/user52.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Good quality with the right amount of salt."
      },
      {
        id: 3,
        user: "Aya Mohamed",
        userImage: "images/users/user53.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Very tasty and arrived fresh."
      }
    ]
  },

  seller: "Snack World",

  sku: "SN004",

  brand: {
    id: 8,
    name: "Crunchy Bite",
    image: "images/brands/crunchy-bite.png"
  },

  inStock: true,

  tags: ["Snack", "Popcorn", "Movie", "Crunchy", "Salted"],

  category: {
    id: 4,
    name: "Snacks",
    image: "images/categories/snacks.png"
  }
},
{
  id: 20,
  name: "Mixed Nuts",
  price: 180,
  oldPrice: 220,
  discount: 18,
  image: "../images/items/mixed-nuts.png",

  description:
    "A premium mix of almonds, cashews, pistachios, hazelnuts, and roasted peanuts. Rich in healthy fats, protein, and essential vitamins, making it a perfect snack for work, travel, or after workouts.",

  additionalInfo: {
    weight: "Net Weight: 500 g of premium mixed nuts.",
    origin: "Carefully selected from trusted suppliers to ensure freshness and quality.",
    storage: "Store in a cool, dry place and reseal the package after opening.",
    expiry: "Best consumed before the printed expiration date.",
    package: "Packed in a resealable food-grade pouch to preserve freshness.",
    ingredients: "Almonds, cashews, pistachios, hazelnuts, roasted peanuts, and a pinch of sea salt."
  },

  customerFeedback: {
    rating: 4.9,
    reviewsCount: 184,
    comments: [
      {
        id: 1,
        user: "Mohamed Adel",
        userImage: "images/users/user54.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and a perfect mix of nuts."
      },
      {
        id: 2,
        user: "Salma Hassan",
        userImage: "images/users/user55.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Fresh and crunchy. Great healthy snack."
      },
      {
        id: 3,
        user: "Ahmed Mostafa",
        userImage: "images/users/user56.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Very tasty and worth the price."
      }
    ]
  },

  seller: "Healthy Snacks",

  sku: "SN005",

  brand: {
    id: 10,
    name: "Nut House",
    image: "images/brands/nut-house.png"
  },

  inStock: true,

  tags: ["Snack", "Nuts", "Healthy", "Protein", "Energy"],

  category: {
    id: 4,
    name: "Snacks",
    image: "images/categories/snacks.png"
  }
},

{
  id: 21,
  name: "Orange Juice",
  price: 55,
  oldPrice: 65,
  discount: 15,
  image: "../images/items/orange-juice.png",

  description:
    "Refreshing orange juice made from carefully selected oranges with a naturally sweet citrus flavor. Rich in Vitamin C and perfect for breakfast or a refreshing drink at any time of the day.",

  additionalInfo: {
    weight: "Volume: 1 Liter.",
    origin: "Produced in Egypt from fresh orange concentrate.",
    storage: "Keep refrigerated after opening and consume within 3 days.",
    expiry: "Best before the printed expiration date.",
    package: "Packed in a recyclable carton with a secure cap.",
    ingredients: "Orange juice, water, natural orange flavor, and Vitamin C."
  },

  customerFeedback: {
    rating: 4.7,
    reviewsCount: 156,
    comments: [
      {
        id: 1,
        user: "Nour Ali",
        userImage: "images/users/user57.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Fresh taste and not too sweet."
      },
      {
        id: 2,
        user: "Omar Ahmed",
        userImage: "images/users/user58.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Great juice for breakfast."
      },
      {
        id: 3,
        user: "Heba Samy",
        userImage: "images/users/user59.jpg",
        rating: 5,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "My kids loved it."
      }
    ]
  },

  seller: "Fresh Drinks",

  sku: "BV001",

  brand: {
    id: 11,
    name: "Juicy Fresh",
    image: "images/brands/juicy-fresh.png"
  },

  inStock: true,

  tags: ["Juice", "Orange", "Drink", "Vitamin C", "Fresh"],

  category: {
    id: 5,
    name: "Beverages",
    image: "images/categories/beverages.png"
  }
},

{
  id: 22,
  name: "Sparkling Water",
  price: 25,
  oldPrice: null,
  discount: 0,
  image: "../images/items/sparkling-water.png",

  description:
    "Refreshing sparkling mineral water with fine bubbles and a clean taste. Perfect for staying hydrated or enjoying alongside meals and gatherings.",

  additionalInfo: {
    weight: "Volume: 750 ml.",
    origin: "Naturally sourced mineral water bottled under strict quality standards.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    expiry: "Best before the printed expiration date.",
    package: "Premium recyclable bottle with a secure cap.",
    ingredients: "Natural mineral water and carbon dioxide."
  },

  customerFeedback: {
    rating: 4.6,
    reviewsCount: 97,
    comments: [
      {
        id: 1,
        user: "Karim Hassan",
        userImage: "images/users/user60.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "Very refreshing and high quality."
      },
      {
        id: 2,
        user: "Aya Ibrahim",
        userImage: "images/users/user61.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Nice sparkling taste."
      },
      {
        id: 3,
        user: "Mona Adel",
        userImage: "images/users/user62.jpg",
        rating: 5,
        date: "17 Jul 2026",
        verifiedPurchase: false,
        comment: "Perfect with meals."
      }
    ]
  },

  seller: "Fresh Drinks",

  sku: "BV002",

  brand: {
    id: 12,
    name: "Pure Spring",
    image: "images/brands/pure-spring.png"
  },

  inStock: true,

  tags: ["Water", "Sparkling", "Drink", "Refreshing", "Mineral"],

  category: {
    id: 5,
    name: "Beverages",
    image: "images/categories/beverages.png"
  }
},
{
  id: 23,
  name: "Cola Soft Drink",
  price: 22,
  oldPrice: 28,
  discount: 21,
  image: "../images/items/cola.png",

  description:
    "A refreshing carbonated soft drink with a bold cola flavor and fine bubbles. Perfect for family meals, parties, picnics, or enjoying chilled on a hot day.",

  additionalInfo: {
    weight: "Volume: 1 Liter.",
    origin: "Produced in Egypt under international quality standards.",
    storage: "Store in a cool and dry place. Refrigerate after opening and consume within 2 days.",
    expiry: "Best before the printed expiration date.",
    package: "Packed in a recyclable plastic bottle with a secure cap.",
    ingredients: "Carbonated water, sugar, natural flavors, caramel color, caffeine, and food acids."
  },

  customerFeedback: {
    rating: 4.5,
    reviewsCount: 230,
    comments: [
      {
        id: 1,
        user: "Ahmed Hassan",
        userImage: "images/users/user63.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Always fresh and perfectly chilled."
      },
      {
        id: 2,
        user: "Mona Ali",
        userImage: "images/users/user64.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Great taste and fast delivery."
      },
      {
        id: 3,
        user: "Karim Adel",
        userImage: "images/users/user65.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Good value for the price."
      }
    ]
  },

  seller: "Fresh Drinks",

  sku: "BV003",

  brand: {
    id: 13,
    name: "Cool Cola",
    image: "images/brands/cool-cola.png"
  },

  inStock: true,

  tags: ["Cola", "Drink", "Cold", "Soft Drink", "Refreshing"],

  category: {
    id: 5,
    name: "Beverages",
    image: "images/categories/beverages.png"
  }
},

{
  id: 24,
  name: "Green Tea",
  price: 95,
  oldPrice: 110,
  discount: 14,
  image: "../images/items/green-tea.png",

  description:
    "Premium green tea made from carefully selected tea leaves. It offers a refreshing taste and is naturally rich in antioxidants, making it a great choice for a healthy daily lifestyle.",

  additionalInfo: {
    weight: "Net Weight: 100 g (50 tea bags).",
    origin: "Imported from Sri Lanka.",
    storage: "Keep in a cool, dry place away from moisture and direct sunlight.",
    expiry: "Best before the printed expiration date.",
    package: "Packed in a sealed box to preserve aroma and freshness.",
    ingredients: "100% natural green tea leaves."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 145,
    comments: [
      {
        id: 1,
        user: "Salma Ibrahim",
        userImage: "images/users/user66.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent quality and a refreshing natural taste."
      },
      {
        id: 2,
        user: "Omar Samir",
        userImage: "images/users/user67.jpg",
        rating: 5,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "One of the best green teas I've tried."
      },
      {
        id: 3,
        user: "Heba Mohamed",
        userImage: "images/users/user68.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Fresh flavor and good packaging."
      }
    ]
  },

  seller: "Healthy Store",

  sku: "BV004",

  brand: {
    id: 14,
    name: "Nature Tea",
    image: "images/brands/nature-tea.png"
  },

  inStock: false,

  tags: ["Tea", "Green Tea", "Healthy", "Natural", "Antioxidants"],

  category: {
    id: 5,
    name: "Beverages",
    image: "images/categories/beverages.png"
  }
},

{
  id: 25,
  name: "Iced Coffee",
  price: 48,
  oldPrice: 55,
  discount: 13,
  image: "../images/items/iced-coffee.png",

  description:
    "Smooth ready-to-drink iced coffee made with premium roasted coffee beans and fresh milk. A refreshing beverage with a rich coffee flavor, perfect for busy mornings or an afternoon energy boost.",

  additionalInfo: {
    weight: "Volume: 330 ml.",
    origin: "Manufactured in Egypt using imported coffee beans.",
    storage: "Keep refrigerated after opening and consume within 24 hours.",
    expiry: "Best before the printed expiration date.",
    package: "Packed in a recyclable bottle with a tamper-proof cap.",
    ingredients: "Coffee, milk, sugar, natural flavors, and stabilizers."
  },

  customerFeedback: {
    rating: 4.7,
    reviewsCount: 162,
    comments: [
      {
        id: 1,
        user: "Youssef Tarek",
        userImage: "images/users/user69.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Rich coffee taste and very refreshing."
      },
      {
        id: 2,
        user: "Nour Ahmed",
        userImage: "images/users/user70.jpg",
        rating: 5,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Perfect for mornings before work."
      },
      {
        id: 3,
        user: "Ali Hassan",
        userImage: "images/users/user71.jpg",
        rating: 4,
        date: "17 Jul 2026",
        verifiedPurchase: false,
        comment: "Balanced flavor and good quality."
      }
    ]
  },

  seller: "Fresh Drinks",

  sku: "BV005",

  brand: {
    id: 15,
    name: "Coffee Time",
    image: "images/brands/coffee-time.png"
  },

  inStock: true,

  tags: ["Coffee", "Iced Coffee", "Drink", "Energy", "Cold"],

  category: {
    id: 5,
    name: "Beverages",
    image: "images/categories/beverages.png"
  }
},
{
  id: 26,
  name: "Vitamin C Face Serum",
  price: 320,
  oldPrice: 380,
  discount: 16,
  image: "../images/items/vitamin-c-serum.png",

  description:
    "A lightweight Vitamin C facial serum formulated to brighten dull skin, reduce the appearance of dark spots, and improve overall skin radiance. Its fast-absorbing formula leaves the skin feeling hydrated, refreshed, and glowing without a greasy finish.",

  additionalInfo: {
    volume: "30 ml glass bottle with dropper.",
    skinType: "Suitable for all skin types, especially dull and uneven skin.",
    usage: "Apply 2–3 drops to clean skin every morning before moisturizer and sunscreen.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    expiry: "Use within 12 months after opening.",
    ingredients: "Vitamin C, Hyaluronic Acid, Vitamin E, Glycerin, and natural botanical extracts."
  },

  customerFeedback: {
    rating: 4.9,
    reviewsCount: 243,
    comments: [
      {
        id: 1,
        user: "Sara Ahmed",
        userImage: "images/users/user72.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "My skin became brighter after just a few weeks."
      },
      {
        id: 2,
        user: "Nour Ali",
        userImage: "images/users/user73.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Very lightweight and absorbs quickly."
      },
      {
        id: 3,
        user: "Mariam Hassan",
        userImage: "images/users/user74.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Good quality and gentle on my skin."
      }
    ]
  },

  seller: "Beauty Store",

  sku: "BH001",

  brand: {
    id: 16,
    name: "Glow Care",
    image: "images/brands/glow-care.png"
  },

  inStock: true,

  tags: [
    "Serum",
    "Vitamin C",
    "Skincare",
    "Brightening",
    "Face Care"
  ],

  category: {
    id: 6,
    name: "Beauty & Health",
    image: "images/categories/beauty.png"
  }
},

{
  id: 27,
  name: "Hydrating Face Wash",
  price: 170,
  oldPrice: 210,
  discount: 19,
  image: "../images/items/face-wash.png",

  description:
    "A gentle daily facial cleanser that effectively removes dirt, excess oil, and makeup while maintaining the skin's natural moisture barrier. Leaves the skin clean, soft, and refreshed without causing dryness.",

  additionalInfo: {
    volume: "200 ml.",
    skinType: "Suitable for normal, combination, and oily skin.",
    usage: "Use twice daily on damp skin, massage gently, then rinse thoroughly.",
    storage: "Store at room temperature away from direct sunlight.",
    expiry: "Use within 12 months after opening.",
    ingredients: "Aloe Vera, Glycerin, Niacinamide, Mild Cleansing Agents, and Chamomile Extract."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 198,
    comments: [
      {
        id: 1,
        user: "Aya Mohamed",
        userImage: "images/users/user75.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Leaves my face clean without drying it out."
      },
      {
        id: 2,
        user: "Heba Samir",
        userImage: "images/users/user76.jpg",
        rating: 5,
        date: "20 Jul 2026",
        verifiedPurchase: true,
        comment: "Perfect for everyday use."
      },
      {
        id: 3,
        user: "Nada Ibrahim",
        userImage: "images/users/user77.jpg",
        rating: 4,
        date: "18 Jul 2026",
        verifiedPurchase: false,
        comment: "Gentle cleanser with a pleasant scent."
      }
    ]
  },

  seller: "Beauty Store",

  sku: "BH002",

  brand: {
    id: 17,
    name: "Pure Skin",
    image: "images/brands/pure-skin.png"
  },

  inStock: true,

  tags: [
    "Face Wash",
    "Cleanser",
    "Hydrating",
    "Skincare",
    "Daily Care"
  ],

  category: {
    id: 6,
    name: "Beauty & Health",
    image: "images/categories/beauty.png"
  }
},

{
  id: 28,
  name: "Sunscreen SPF 50+",
  price: 280,
  oldPrice: 330,
  discount: 15,
  image: "../images/items/sunscreen.png",

  description:
    "Broad-spectrum SPF 50+ sunscreen that helps protect the skin from harmful UVA and UVB rays. Its lightweight, non-greasy formula blends easily into the skin without leaving a white cast, making it suitable for everyday use.",

  additionalInfo: {
    volume: "50 ml.",
    skinType: "Suitable for all skin types, including sensitive skin.",
    usage: "Apply generously 15 minutes before sun exposure and reapply every two hours.",
    storage: "Store below 30°C and keep away from direct sunlight.",
    expiry: "Use within 12 months after opening.",
    ingredients: "Zinc Oxide, Niacinamide, Vitamin E, Hyaluronic Acid, and moisturizing agents."
  },

  customerFeedback: {
    rating: 4.9,
    reviewsCount: 276,
    comments: [
      {
        id: 1,
        user: "Fatma Ali",
        userImage: "images/users/user78.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "No white cast and feels very light on the skin."
      },
      {
        id: 2,
        user: "Nadine Ahmed",
        userImage: "images/users/user79.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Excellent sun protection and works well under makeup."
      },
      {
        id: 3,
        user: "Mona Hassan",
        userImage: "images/users/user80.jpg",
        rating: 4,
        date: "19 Jul 2026",
        verifiedPurchase: false,
        comment: "Very comfortable to wear every day."
      }
    ]
  },

  seller: "Beauty Store",

  sku: "BH003",

  brand: {
    id: 16,
    name: "Glow Care",
    image: "images/brands/glow-care.png"
  },

  inStock: true,

  tags: [
    "Sunscreen",
    "SPF 50",
    "UV Protection",
    "Skincare",
    "Daily Care"
  ],

  category: {
    id: 6,
    name: "Beauty & Health",
    image: "images/categories/beauty.png"
  }
},
{
  id: 29,
  name: "Daily Moisturizing Cream",
  price: 240,
  oldPrice: 290,
  discount: 17,
  image: "../images/items/moisturizer.png",

  description:
    "A lightweight daily moisturizing cream designed to deeply hydrate the skin while improving its softness and elasticity. Its non-greasy formula absorbs quickly and provides long-lasting hydration, making it suitable for both morning and evening skincare routines.",

  additionalInfo: {
    volume: "100 ml.",
    skinType: "Suitable for all skin types, including dry and sensitive skin.",
    usage: "Apply a small amount to clean skin twice daily using gentle circular motions.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    expiry: "Use within 12 months after opening.",
    ingredients: "Hyaluronic Acid, Shea Butter, Ceramides, Glycerin, Vitamin E, and Aloe Vera Extract."
  },

  customerFeedback: {
    rating: 4.8,
    reviewsCount: 214,
    comments: [
      {
        id: 1,
        user: "Reem Hassan",
        userImage: "images/users/user81.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "Keeps my skin hydrated all day without feeling greasy."
      },
      {
        id: 2,
        user: "Salma Adel",
        userImage: "images/users/user82.jpg",
        rating: 5,
        date: "21 Jul 2026",
        verifiedPurchase: true,
        comment: "Very gentle on sensitive skin and absorbs quickly."
      },
      {
        id: 3,
        user: "Aya Mostafa",
        userImage: "images/users/user83.jpg",
        rating: 4,
        date: "19 Jul 2026",
        verifiedPurchase: false,
        comment: "Excellent moisturizer with a pleasant texture."
      }
    ]
  },

  seller: "Beauty Store",

  sku: "BH004",

  brand: {
    id: 17,
    name: "Pure Skin",
    image: "images/brands/pure-skin.png"
  },

  inStock: true,

  tags: [
    "Moisturizer",
    "Hydration",
    "Face Care",
    "Skincare",
    "Daily Care"
  ],

  category: {
    id: 6,
    name: "Beauty & Health",
    image: "images/categories/beauty.png"
  }
},

{
  id: 30,
  name: "Hair Repair Shampoo",
  price: 190,
  oldPrice: 230,
  discount: 17,
  image: "../images/items/shampoo.png",

  description:
    "A nourishing shampoo formulated to gently cleanse the scalp while repairing damaged hair. Enriched with natural ingredients that strengthen hair, reduce breakage, and leave it soft, smooth, and healthy after every wash.",

  additionalInfo: {
    volume: "400 ml.",
    hairType: "Suitable for all hair types, especially dry and damaged hair.",
    usage: "Apply to wet hair, massage gently into the scalp, then rinse thoroughly. Repeat if needed.",
    storage: "Keep at room temperature away from direct sunlight.",
    expiry: "Use within 18 months after opening.",
    ingredients: "Keratin, Argan Oil, Biotin, Panthenol (Vitamin B5), Aloe Vera, and Coconut Extract."
  },

  customerFeedback: {
    rating: 4.9,
    reviewsCount: 301,
    comments: [
      {
        id: 1,
        user: "Mona Ibrahim",
        userImage: "images/users/user84.jpg",
        rating: 5,
        date: "23 Jul 2026",
        verifiedPurchase: true,
        comment: "My hair feels softer and healthier after just a few washes."
      },
      {
        id: 2,
        user: "Nour Mohamed",
        userImage: "images/users/user85.jpg",
        rating: 5,
        date: "22 Jul 2026",
        verifiedPurchase: true,
        comment: "Amazing scent and it really helps reduce hair breakage."
      },
      {
        id: 3,
        user: "Heba Ahmed",
        userImage: "images/users/user86.jpg",
        rating: 4,
        date: "20 Jul 2026",
        verifiedPurchase: false,
        comment: "Very good shampoo and worth buying again."
      }
    ]
  },

  seller: "Beauty Store",

  sku: "BH005",

  brand: {
    id: 18,
    name: "Hair Expert",
    image: "images/brands/hair-expert.png"
  },

  inStock: true,

  tags: [
    "Shampoo",
    "Hair Care",
    "Keratin",
    "Repair",
    "Healthy Hair"
  ],

  category: {
    id: 6,
    name: "Beauty & Health",
    image: "images/categories/beauty.png"
  }
}
]
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
localStorage.setItem('products',JSON.stringify(products))
// Show function
function showProducts(products) {
   
    let cartoona = "";

    products.forEach((product) => {

        cartoona += `
        <div class="col-lg-3 col-md-4 col-sm-6 my-4">
            <div class="card product-card border-0 rounded-3">

                <div class="position-relative overflow-hidden product-img">
                       
                
                <!-- Button trigger modal -->


                    <button onclick="openModel(${product.id})" type="button" class="border-0 bg-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="${product.image}" class="card-img-top p-4" alt="${product.name}">
                    </button>
                     ${product.inStock?'' :`
                       <div class="position-absolute top-15 text-light bg-danger text-center p-1"> 
                     Out of stock
                    
                     </div>`}
                    

                    <div class="product-icons position-absolute text-center top-0 end-0 m-3">

                    <button onclick='toggleWishlist2(${product.id})' class="border-0 icon d-block mb-2 bg-transparent">

                           <i class="fa-solid fa-heart"></i>

                           
      
    </button>
                        

                        <a href="product.html?id=${product.id}" class="icon">
                            <i class="fa-regular fa-eye"></i>
                        </a>

                    </div>

                </div>

                <div class="card-body d-flex justify-content-between align-items-center">

                    <div>
                        <h5 class=' text-card'>${product.name}</h5>
                        <h4 class=' text-card2'>${product.price} EGP</h4>
                          <div class="mb-1">

                                <i class="fa-solid fa-star text-warning"></i>
                                  <i class="fa-solid fa-star text-warning"></i>
                                   <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                     <i class="fa-solid fa-star text-secondary"></i>
                                <span class="text-muted">
                                    (${product.customerFeedback.rating})
                                </span>

                            </div>
                    </div>

                    <button class="btn btn-success rounded-circle">
                       
                   <a href="product.html?id=${product.id}">
                    <i class="fa-solid fa-bag-shopping"></i></a>
                    </button>

                </div>

            </div>
        </div>

      
        `;
    });

    document.getElementById("container-items").innerHTML = cartoona;
    
}
// open Model
function openModel(id){
     const product = products.find(item => item.id === id);
     let isFavourite = wishlist.some(item => item.id === product.id);
   let model=`
       <!-- Modal -->

      <div class="modal-body">

                    <div class="row align-items-center g-2">

                        <!-- Images -->
                        <div class="col-lg-6">

                            <div class="row">

                                <!-- Thumbnails -->
                                
                                <div class="col-2">
                                    <img src="../images/items/apple.png" class="img-fluid border rounded mb-3 thumb active">
                                    <img src="../images/items/banana.png" class="img-fluid border rounded mb-3 thumb">
                                    <img src="${product.image}" class="img-fluid border rounded mb-3 thumb">
                                    <img src="../images/items/orange.png" class="img-fluid border rounded thumb">
                                </div>

                                <!-- Main Image -->
                                <div class="col-10">
                                    <img id='mainImage'  src="${product.image}"
                                         class="img-fluid w-100 main-img">
                                </div>

                            </div>

                        </div>

                        <!-- Product Details -->
                        <div class="col-lg-6">

                            <div class="d-flex align-items-center mb-1">

                                <h2 class="fw-bold me-3">
                                    ${product.name}
                                </h2>

                                ${
                                    product.inStock
                                    ? `<span class="badge bg-success-subtle text-success">
                                            In Stock
                                       </span>`
                                    : `<span class="badge bg-danger">
                                            Out Of Stock
                                       </span>`
                                }

                            </div>

                            <div class="mb-1">

                              

                                <i class="fa-solid fa-star text-warning"></i>
                                  <i class="fa-solid fa-star text-warning"></i>
                                   <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                     <i class="fa-solid fa-star text-secondary"></i>

                                <span class="text-muted">
                                    (${product.customerFeedback.rating})
                                </span>

                            </div>

                            <div class="my-4">

                                ${
                                    product.oldPrice
                                    ? `
                                    <span class="text-decoration-line-through text-secondary fs-5">
                                        ${product.oldPrice} EGP
                                    </span>
                                    `
                                    : ""
                                }

                                <span class="text-success fw-bold fs-4  ms-2">
                                    ${product.price} EGP
                                </span>

                                ${
                                    product.discount > 0
                                    ? `
                                    <span class="badge bg-danger ms-2">
                                        ${product.discount}% OFF
                                    </span>
                                    `
                                    : ""
                                }

                            </div>

                            <div class="d-flex justify-content-between mb-2">

                                <div>

                                    <strong>
                                        Brand:
                                    </strong>

                                    ${product.brand.name}

                                </div>

                                <div>

                                    <strong>Share:</strong>

                                    <i class="fa-brands fa-facebook-f ms-2"></i>
                                    <i class="fa-brands fa-twitter ms-2"></i>
                                    <i class="fa-brands fa-pinterest ms-2"></i>
                                    <i class="fa-brands fa-instagram ms-2"></i>

                                </div>

                            </div>

                            <p class="text-secondary fs-6">
                                ${product.description}
                            </p>

                            <hr>
                            <div class="d-flex align-items-center gap-3 mb-2">

    <div class="input-group quantity" style="width:140px">

        <button class="btn btn-light "
        id='decreaseBtn'>
            -
        </button>

        <input
            type="text"
            value="1"
            class="form-control text-center quantity-input"
            id='quantityInput'
            readonly
            >

        <button class="btn btn-light"
        id='increaseBtn'
        >
            +
        </button>

    </div>

    <button id='addToCartBtn' class="btn btn-success rounded-pill flex-grow-1 py-2">

        Add To Cart
        <i class="fa-solid fa-bag-shopping mx-2"></i>

    </button>

    <button id='wishlistBtn' class="btn btn-light rounded-circle">

        <i class="fa-solid fa-heart ${isFavourite?'text-danger' :''}"></i>

    </button>

</div>

<div class="small">

    <p>
        <strong>Category:</strong>
        ${product.category.name}
    </p>

    <p>
        <strong>Brand:</strong>
        ${product.brand.name}
    </p>


    <p>
        <strong>Tags:</strong>

        ${product.tags.map(tag => `
            <span class="badge bg-light text-dark border me-1">
                ${tag}
            </span>
        `).join("")}

    </p>

    <hr>


</div>

</div>

</div>

</div>

`
document.getElementById("modalBody").innerHTML = model;

document.getElementById("modal").classList.add("show");

let wishlistBtn = document.getElementById('wishlistBtn')
slider()
cartActions(product)
wishlistBtn.addEventListener("click", function () {
    toggleWishlist(product);
     openModel(id)
});
}



// function cartActions
function cartActions(product) {

    let quantity = 1;

    const quantityInput = document.getElementById("quantityInput");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const addToCartBtn = document.getElementById("addToCartBtn");

    increaseBtn.addEventListener("click", function () {
        quantity++;
        quantityInput.value = quantity;
    });

    decreaseBtn.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });

    addToCartBtn.addEventListener("click", function () {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let order = {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: quantity,
            totalPrice: product.price * quantity
        };

        let index = cart.findIndex(item => item.id === product.id);

        if (index !== -1) {
            cart[index].quantity += quantity;
            cart[index].totalPrice = cart[index].quantity * cart[index].price;
            window.location.href='cart.html'
        } else {
            cart.push(order);
             window.location.href='cart.html'
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    });

}

// function slider

function slider() {
    const mainImage = document.getElementById("mainImage");
    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(img => {
        img.addEventListener("click", function () {
            mainImage.src = this.src;
        });
    });
}

// function Wishlist
function toggleWishlist(product) {

    let index = wishlist.findIndex(item => item.id === product.id);

    if (index !== -1) {

        
        wishlist.splice(index, 1);

        alert("Removed from Wishlist");

    } else {

        wishlist.push({
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price
});

        alert("Added to Wishlist");

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}
function toggleWishlist2(id) {

    let product = products.find(item => item.id === id);

    let index = wishlist.findIndex(item => item.id === id);

    if (index !== -1) {
        wishlist.splice(index, 1);
        alert('Removed from Wishlist')

    } else {
   wishlist.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price
        });
alert('add Wishlist')

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    showProducts(products);
    openModel(id);
  

}

// call functions
showProducts(products);


// close model
 const modal = document.getElementById("modal");

document.getElementById("closeModal").onclick = function () {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
};

// filter category

const category = document.getElementById('category')

category.addEventListener('change' , function (params) {
 let categoryType= products.filter((product)=>category.value == product.category.name)
 if(category.value ==''){
  showProducts(products);
 }else{
 if(categoryType.length == 0){
  console.log(categoryType.length)
  let notfound=`
  <div id="noProducts" class="no-products">
  <div class="content">
    <h2>No Products Found 😔</h2>
    <p>There are no products in this category.</p>
    <button id="showBtn">Show all Products</button>
  </div>
</div>`
document.getElementById("container-items").innerHTML = notfound;
   document.getElementById('showBtn').addEventListener('click' , function(){
showProducts(products);

})
 }else{
  showProducts(categoryType);
 }
 }
 
})

// counter
let endDate = new Date("2026-08-2 23:59:59");

function countDown() {

    let currentDate = new Date();

    let diff = endDate - currentDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

countDown(); 
setInterval(countDown, 1000); 



