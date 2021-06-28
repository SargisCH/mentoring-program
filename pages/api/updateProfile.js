export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).send({ user: { ...req.body, id: 1 } });
  }
}
