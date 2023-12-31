import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { Providers } from '@/app/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VN GO PORTAL',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <StyledComponentsRegistry>
                    <ConfigProvider theme={{ cssVar: true }}>
                        <Providers>{children}</Providers>
                    </ConfigProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
