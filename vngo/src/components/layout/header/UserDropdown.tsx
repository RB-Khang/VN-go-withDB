'use client';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Thông tin cá nhân',
    },
    {
        key: '2',
        label: 'Quản lý lớp học',
    },
    {
        key: '3',
        label: 'Tin tức',
    },
    {
        key: '4',
        label: 'Log out',
    },
];

const UserDropDown: React.FC = () => (
    <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <span>Xin chào</span>
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);

export default UserDropDown;
