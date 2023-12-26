'use client';
import Button from '@/components/element/Button';
import styled from 'styled-components';

export default function FreeCoursePage() {
    return (
        <div className="container mx-auto">
            <div className="px-3 mt-10 ">
                <h1 className="text-5xl text-center font-bold mb-5">Cờ vây là gì</h1>
            </div>
            <Register>
                <h1 className="text-3xl text-center font-bold ">Tham gia cùng chúng tôi</h1>
                <Button
                    title="Đăng kí"
                    type="primary"
                    className="mt-7 "
                    style={{
                        fontSize: '18px',
                        borderRadius: '10px',
                        padding: '0 40px',
                    }}
                />
            </Register>
        </div>
    );
}

const Register = styled.div`
    max-width: 600px;
    padding: 30px 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e5e5e5;
    border-radius: 15px;
    transition: 0.5s;
    &:hover {
        transform: translateY(-4px);
    }
`;
