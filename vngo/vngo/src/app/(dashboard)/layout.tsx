import Button from '@/components/element/Button';
import { Carousel } from '@/components/layout/carousel';
import Logo from '@/components/layout/header/Logo';
import UserDropDown from '@/components/layout/header/UserDropdown';
import Navigator from '@/components/layout/navigator/Navigator';
import { ConfigProvider, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: ' var(--primary)',
                        siderBg: '#1172dd',
                        bodyBg: '#eff3f8',
                    },
                },
            }}
        >
            <Layout>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Logo />
                    <div className="flex justify-around align-middle">
                        <Button title="Login" className="my-auto mx-5 rounded-full" />
                        <Button
                            title="Register"
                            type="primary"
                            className="my-auto mx-5 rounded-full"
                        />
                        <UserDropDown />
                    </div>
                </Header>
                <Layout hasSider>
                    <Sider width={250} className="h-auto">
                        <Navigator />
                    </Sider>
                    <Layout>
                        <Carousel />
                        <Content className="h-[100vh] px-5">{children}</Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}
