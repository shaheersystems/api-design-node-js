import prisma from "../db";

// get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      Product: true,
    },
  });

  res.json({ data: user.Product });
};

// get single product

export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// create new product

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// update product

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.update({
    where: {
      id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: product });
};

// delete product

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};
