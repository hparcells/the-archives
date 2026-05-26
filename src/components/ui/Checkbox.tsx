'use client';

import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({ label, checked, onChange }: CheckboxProps) {
  const id = `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <label
      htmlFor={id}
      className='flex items-center gap-2 cursor-pointer group w-fit'
    >
      <div className='relative flex items-center justify-center'>
        <input
          id={id}
          type='checkbox'
          checked={checked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
          className='sr-only'
        />
        <div
          className={`w-4 h-4 rounded-sm border transition-all duration-200 flex items-center justify-center ${
            checked
              ? 'bg-yellow-500 border-yellow-500'
              : 'bg-transparent border-stone-800 group-hover:border-stone-600'
          }`}
        >
          {checked && (
            <Check
              size={10}
              strokeWidth={3}
              className='text-stone-950'
            />
          )}
        </div>
      </div>
      <span
        className={`mono text-xs transition-colors duration-200 ${
          checked ? 'text-yellow-500' : 'text-stone-600 group-hover:text-stone-400'
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export default Checkbox;
