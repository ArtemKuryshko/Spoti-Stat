'use client'

import { useState } from 'react';

const timeOptions = [
  { label: '4 Weeks', value: 'short_term' },
  { label: '6 Months', value: 'medium_term' },
  { label: 'All Time', value: 'long_term' },
];

export default function TimeRangeSelector({
  current,
  onChange,
}: {
  current: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex gap-4 mb-8 ml-28">
      {timeOptions.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-4 py-2 rounded-full border-2 transition 
            ${
              current === value
                ? 'bg-black text-white border-primary'
                : 'bg-primary text-black border-black'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}