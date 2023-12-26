import React from 'react';
import { Button as ButtonA, ButtonProps as ButtonPropsA, ConfigProvider } from 'antd';
import theme from '@/theme/theme';

interface CustomButton extends ButtonPropsA {
    title: string;
}

const Button: React.FC<CustomButton> = ({ title, ...props }) => {
    return (
        <ConfigProvider theme={theme}>
            <ButtonA {...props}>{title}</ButtonA>
        </ConfigProvider>
    );
};

export default Button;
