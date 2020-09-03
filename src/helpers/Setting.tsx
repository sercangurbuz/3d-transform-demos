import React from 'react';
import styled from 'styled-components';

interface SettingProps {
  id?: string;
  onChange(value: boolean | string): void;
  value?: boolean | string;
  label: string;
  name?: string;
  type?: 'checkbox' | 'radio';
  checked?: boolean;
}

function Setting({
  onChange,
  id,
  value,
  type = 'checkbox',
  label,
  name,
  checked,
}: SettingProps) {
  return (
    <div>
      <input
        id={id}
        name={name}
        checked={checked}
        value={type === 'radio' ? (value as string) : undefined}
        type={type}
        onChange={(e) =>
          onChange(
            type === 'checkbox' ? e.target.checked : e.currentTarget.value
          )
        }
      ></input>
      <label style={{ cursor: 'pointer' }} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Setting;

export const SettingContainer = styled.div`
  display: flex;
  z-index: 2;
  > *:not(:first-child) {
    margin-left: 10px;
  }
`;
