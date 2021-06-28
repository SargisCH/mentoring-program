import React, { useEffect } from 'react';
import useData from '../../hooks/useData';
import { retrieve } from '../../services/DepartmentService';
import Select from '../Select/Select';

export default function DepartmentSelect({
  onChange, className = '', label, required, value,
}) {
  const { data: departments = [], loading } = useData(null, retrieve);
  useEffect(() => {
    if (!value && departments.length > 0) {
      onChange({
        target: {
          name: 'department',
          value: departments[0],
        },
      });
    }
  }, [departments]);
  return (
    <Select
      options={departments || []}
      className={loading ? 'filter blur-sm' : className}
      onChange={onChange}
      label={label}
      required={required}
      value={value}
      name="department"
    />
  );
}
