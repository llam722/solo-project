const db = require('../tables/computerParts');

const computerController = {};

const getParts = 'SELECT * FROM parts;';

computerController.getComputerParts = (req, res, next) => {
  db.query(getParts)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};

computerController.addComputerParts = async (req, res, next) => {
  const { part, price } = req.body;
  // obj = {
  //   part: 'HDD',
  //   price: 1000,
  // };
  try {
    const text = `INSERT INTO parts(part, price) 
                  VALUES ($1, $2)
                  RETURNING *`;
    // const params = [obj.part, obj.price];
    const params = [part, price];
    const result = await db.query(text, params);
    // console.log(`params`, params);
    // console.log(result);
    res.locals.parts = result;
    return next();
  } catch (err) {
    next({
      log: `computerController.addComputerParts: ERROR ${err}`,
    });
  }
};

computerController.updateComputerParts = (req, res, next) => {
  const { part, body } = req.body;
};

module.exports = computerController;
