import Button from '@/components/element/Button';
import theme from '@/theme/theme';
import { ConfigProvider } from 'antd';

export default function Page() {
    return (
        <div className="px-3 mx-auto mt-2">
            <div className="test">
                <ConfigProvider theme={theme}>
                    <Button title="test" />
                </ConfigProvider>
            </div>
        </div>
    );
}
