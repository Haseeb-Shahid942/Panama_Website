const DateInputWithLabel = ({
  value,
  onClick,
  placeholder,
  label,
  icon,
  readOnly,
}) => (
  <div className="relative">
    {/* Icon and Label */}
    <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
      {icon}
      <span className="text-[10px] text-gray-500">{label}</span>
    </span>
    {/* Flatpickr input */}
    <input
      className="w-full border pl-14 pr-3 py-2 text-sm"
      value={value}
      onClick={onClick}
      readOnly={readOnly}
      placeholder={placeholder}
      style={{ fontWeight: 600 }}
    />
  </div>
);
