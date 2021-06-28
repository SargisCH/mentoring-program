import React from 'react';

const buildOption = (optionProps, optionData) => {
  if (typeof optionData === 'string') {
    return {
      value: optionData,
      label: optionData,
    };
  }
  const option = {};
  if (typeof optionProps.value === 'Function') {
    option.value = optionProps.value(optionData);
  } else option.value = optionData[optionProps.value] || optionData.value || '';
  if (typeof optionProps.label === 'Function') {
    option.label = optionProps.label(optionData);
  } else option.label = optionData[optionProps.label] || optionData.label || '';
  return option;
};
export default function Select({
  label,
  name,
  className = '',
  options = [],
  onChange,
  optionProps = { value: 'id', label: 'name' },
  noLabel = false,
  required,
  value = '',
}) {
  const isValid = (required && value) || true;
  const selectOptions = options.map((opt) => buildOption(optionProps, opt));
  return (
    <div className={className}>
      {!noLabel ? <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label> : null }
      <select
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className={`${!isValid ? 'border-red-300' : ''} mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      >
        {selectOptions.map(({ value: optionValue, label: optionLabel }) => (
          <option key={optionValue} value={optionValue}>{optionLabel}</option>
        ))}
      </select>
    </div>
  );
}
