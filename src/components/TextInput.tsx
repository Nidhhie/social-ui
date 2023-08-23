const TextInput = (props: any) => {
  const { id, label, placeholder, value, onChange } = props;
  return (
    <div className="w-full my-2">
      <label htmlFor={id} className="block font-bold mb-2 text-font-gray-light">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
  );
};

export default TextInput;
