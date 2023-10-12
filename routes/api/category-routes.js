const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{model: Product}],
    })
      .then((cat) => res.json(cat))
      .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{
    include: [{ model: Product}],
  })
    then((cat) => {
      if (!cat) {
      res.status(404).json({ message: 'Category not found with this Id' });
        return;
      } res.json(cat);
  })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new category
    Category.create(req.body)
      .then((cat) => res.status(200).json(cat))
      .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
    Category.update(req.body, {
      where: {id: req.params.id },
      })
        .then((cat) => {
          if (!cat) {
            res.status(400).json({ message: 'Category not found with this Id' });
          }
            res.json({ message: 'Category Updated' });
        })
            .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
    Category.delete(req.body, {
      where: {id: req.params.id },
      })
        .then((cat) => {
          if (!cat) {
            res.status(400).json({ message: 'Category not found with this Id' });
          }
            res.json({ message: 'Category Deleted' });
        })
            .catch((err) => res.status(500).json(err));
});

module.exports = router;
