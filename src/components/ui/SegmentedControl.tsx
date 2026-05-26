'use client';

import { useState } from 'react';

interface SegmentedControlItem {
  label: string;
  value: string;
}

function SegmentedControl({
  data,
  value: controlledValue,
  onChange
}: {
  data: SegmentedControlItem[];
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [internalValue, setInternalValue] = useState(data[0]?.value ?? '');

  const isControlled = typeof controlledValue !== 'undefined';
  const activeValue = isControlled ? controlledValue : internalValue;

  function handleClick(val: string) {
    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  }

  return (
    <div className='flex gap-2 flex-wrap'>
      {data.map((item) => (
        <button
          key={item.value}
          onClick={() => {
            handleClick(item.value);
          }}
          className={`mono text-xs px-3 py-1 rounded-sm border transition-all duration-200 cursor-pointer ${item.value === activeValue ? 'text-yellow-500 border-yellow-500' : 'text-stone-600 border-stone-800 hover:text-stone-400 hover:border-stone-600'}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;
