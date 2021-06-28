import employees from './employees';

export default function handler(req, res) {
  const departments = Array.from(new Set(employees.map((em) => em.department)));
  res.status(200).json({ departments });
}
