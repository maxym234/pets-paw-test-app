import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete as AutoCompleteAntd, Input } from 'antd';

interface Props  {
    placeholder?: string
}

const renderTitle = (title: string) => (
  <span>
    {title}
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

export default function AutoComplete ({placeholder, ...props}: Props) {
    return (
        <AutoCompleteAntd
            popupClassName="certain-category-search-dropdown"
            options={options}
            {...props}
        >
            <Input.Search placeholder={placeholder} />
        </AutoCompleteAntd>
    )
};
