import React from 'react';

const FilterInput = ({
    label,
    onChange,
}: {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}): JSX.Element => (
    <div>
        <label>
            {label}
            <input
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e)
                }
            />
        </label>
    </div>
);

export default FilterInput;
