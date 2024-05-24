import Image from 'next/image';
import logo from '../../public/images/isotech-logo.svg';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Image
                    priority
                     src={logo}
                     alt="Isotech a Stratum Reservoir brand"
                    />
                </div>
            </div>
        </header>
    )
}