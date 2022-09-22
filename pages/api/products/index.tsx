// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return get(req, res);
    default:
      return res.json({ message: "Unsupported HTTP Method" });
  }
  res.status(200).json({ name: "John Doe" });
};

const get = (req, res) => {
  const products = [
    {
      _id: "25",
      name: "Product",
      description: "This is a placeholder object",
      stock: 10,
      price: 10,
      discount: 15,
      categories: [
        {
          _id: 1,
          name: "Tropical",
          description:
            "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
        },
        { _id: 2, name: "Pink", description: "Plants With Shades Of Pink" },
      ],
      isPublished: true,
    },
    {
      _id: "26",
      name: "Product 2",
      description: "This is a placeholder object",
      stock: 10,
      price: 15,
      discount: 25,
      categories: [
        {
          _id: 1,
          name: "Tropical",
          description:
            "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
        },
        { _id: 2, name: "Pink", description: "Plants With Shades Of Pink" },
      ],
      isPublished: true,
    },
    {
      _id: "28",
      name: "Product 3",
      description: "This is a placeholder object",
      stock: 5,
      price: 5,
      discount: 0,
      categories: [
        {
          _id: 1,
          name: "Tropical",
          description:
            "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
        },
        { _id: 2, name: "Pink", description: "Plants With Shades Of Pink" },
      ],
      isPublished: true,
    },
  ];
  res.json(products);
};

export default handler;
