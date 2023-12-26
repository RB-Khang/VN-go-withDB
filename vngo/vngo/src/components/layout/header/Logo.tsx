import Image from 'next/image';

export default function Logo() {
    return <Image src={'/img/logo.png'} priority alt="" width={100} height={100} className='logo' />;
}
