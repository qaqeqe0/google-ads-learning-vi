import React, { useState } from 'react';
import { Award, CheckCircle2, Circle } from 'lucide-react';

export const InteractiveChecklist = ({ id, title, tasks }: { id: string, title: string, tasks: string[] }) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completedCount / tasks.length) * 100) || 0;

  return (
    <div className="bg-white border-2 border-emerald-100 rounded-xl overflow-hidden mt-8 shadow-sm">
      <div className="bg-emerald-50 border-b border-emerald-100 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Award className="text-emerald-600" size={24} />
          <h3 className="font-bold text-emerald-800 text-lg m-0">{title}</h3>
        </div>
        <div className="text-sm font-bold text-emerald-600">{progress}%</div>
      </div>

      <div className="h-1.5 w-full bg-emerald-100">
        <div
          className="h-full bg-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-4 space-y-3">
        {tasks.map((task, idx) => (
          <div
            key={task}
            role="checkbox"
            aria-checked={!!checkedItems[idx]}
            tabIndex={0}
            onClick={() => toggleItem(idx)}
            onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleItem(idx); } }}
            className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
              checkedItems[idx]
                ? 'bg-emerald-50/50 border-emerald-200'
                : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {checkedItems[idx] ? (
                <CheckCircle2 className="text-emerald-500" size={20} />
              ) : (
                <Circle className="text-gray-300" size={20} />
              )}
            </div>
            <span className={`text-sm select-none ${checkedItems[idx] ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
