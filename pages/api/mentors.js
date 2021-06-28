import employees from './employees';

export default function handler(req, res) {
  res.status(200).json({ mentors: employees });
}
