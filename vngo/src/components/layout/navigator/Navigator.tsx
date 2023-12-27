'use client';
import React from 'react';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import useRoute from '@/utils/routeUtils';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem(<h1 className="font-bold text-[16px]">Trang chủ</h1>, 'sub1', null, [
        getItem('Cờ vây', 'sub2', null, [
            getItem('Tài nguyên', 'resource'),
            getItem('Các câu lạc bộ', 'club'),
        ]),
        getItem('Âm nhạc', 'sub3', null, [getItem('My blog', 'blogs'), getItem('note 2', '4')]),
    ]),
    getItem(<h1 className="font-bold text-[16px]">Khoá học</h1>, 'sub4', null, [
        getItem('Free', 'free-course'),
        getItem('Option 6', '6'),
    ]),
    { type: 'divider' },
    getItem(<h1 className="font-bold text-[16px]">Tin tức</h1>, 'sub5', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
];

const Navigator: React.FC = () => {
    const { redirect } = useRoute();
    const onClick: MenuProps['onClick'] = (e) => {
        redirect(e.key);
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemBg: '#1172dd',
                        itemColor: 'white',
                        itemSelectedColor: '#white',
                        itemHoverColor: '#white',
                        itemSelectedBg: '#1b69c2',
                        itemHoverBg: '#145399',
                        groupTitleColor: '#white',
                        subMenuItemBg: '#4093ee',
                    },
                },
            }}
        >
            <Menu
                onClick={onClick}
                style={{ width: 250 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1', 'sub4', 'sub5']}
                mode="inline"
                items={items}
            />
        </ConfigProvider>
    );
};

export default Navigator;
