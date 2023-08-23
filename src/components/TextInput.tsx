const TextInput = (props: any) => {
  const { id, label, placeholder, value, onChange, error, ...rest } = props;
  return (
    <div className="w-full my-2">
      <label
        htmlFor={id}
        className="block font-bold mb-2 text-font-gray-light text-sm"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
        className="border rounded px-2 py-1 w-full bg-transparent border-font-gray-light"
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default TextInput;
