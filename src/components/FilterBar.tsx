import React from 'react';

interface FilterBarProps {
  selectedFilters: string[];
  onFilterRemove: (filter: string) => void;
  onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedFilters,
  onFilterRemove,
  onClearFilters,
}) => {
  if (selectedFilters.length === 0) return null;

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-8 flex justify-between items-center">
      <div className="flex flex-wrap gap-4">
        {selectedFilters.map((filter) => (
          <span
            key={filter}
            className="bg-filterTabs flex items-center rounded overflow-hidden group"
          >
            <span className="px-2 py-1 text-primary font-bold">{filter}</span>
            <button
              onClick={() => onFilterRemove(filter)}
              className="bg-primary text-white px-2 py-1 transition-colors duration-200 hover:bg-veryDarkGrayish"
              aria-label={`Remove ${filter} filter`}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
      <button
        onClick={onClearFilters}
        className="text-darkGrayish font-bold transition-colors duration-200 hover:text-primary"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;