export default function Input({
  label, name, className = '', onChange = () => {}, required = false, regex, type, value = '',
}) {
  let isValid = true;
  if (required) isValid = value || value === 0;
  if (regex) isValid = regex.test(value);
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={`mt-1 block w-full py-2 px-2 sm:text-sm border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none ${!isValid ? 'border-red-300' : ''}`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
