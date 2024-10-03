import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Hola mundo en express' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'Hola mundo en express 2' });
});

export default router;
