const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return get(req, res);
    default:
      return res.status(400).json({ message: "Unsupported HTTP Method" });
  }
};

const get = async (req, res) => {
  const DEV_API = process.env.DEV_API;
  const endpoint =
    (DEV_API || process.env.PROD_API) + `/products/${req.query.id}`;
  const product = await fetch(endpoint).then((res) => res.json());
  return res.json(product);
};

export default handler;
