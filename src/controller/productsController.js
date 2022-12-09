import ProdsApi from '../api/prods/prodsApi.js';

const prods = new ProdsApi();

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prods.getOne(id);
    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await prods.getByCategory(category);
      res.json({ success: true, products })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const products = await prods.getAll();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addOne = async (req, res) => {
  try {
    const data = req.body;
    const product = await prods.addOne(data);
    res.json({ success: true, product });
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
};

export const putOne = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prods.putOne(id, req.body);
    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await prods.deleteOne(id);
    res.json({ success: true, deleted: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAll = async (req, res) => {
  try {
    await prods.deleteAll();
    res.json({ success: true, deleted: All });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
