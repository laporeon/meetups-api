const Category = require("../models/Category");
const Event = require("../models/Event");

class CategoryController {
  async list(req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "category_name"],
        order: [["category_name", "ASC"]],
        include: {
          model: Event,
          attributes: [
            "id",
            "name",
            "description",
            "location",
            "starts_at",
            "finishes_at",
          ],
        },
      });

      if (categories.length <= 0)
        return res.status(404).json({ error: "No categories were found." });

      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
  async create(req, res) {
    try {
      const { category_name } = req.body;

      const category = await Category.create({ category_name });

      return res.status(201).json(category);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category)
        return res.status(404).json({ error: "Category not found." });

      await Category.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send();
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

module.exports = new CategoryController();
