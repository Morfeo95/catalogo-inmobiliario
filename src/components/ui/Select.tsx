import theme from "../../data/config.json";

interface SelectProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
  options: { label: string; value: string }[];
}

export default function Select({ onChange, value, label, options }: SelectProps) {
  return (
    <div className='flex flex-col gap-2 justify-center'>
      <label 
        className='text-2xl font-bold' 
        style={{ color: theme.text, fontFamily: theme.fontTitle }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full p-4 rounded-2xl appearance-none cursor-pointer'
        style={{
          backgroundColor: theme.secondary,
          color: theme.textHover,
          fontFamily: theme.fontBody
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}