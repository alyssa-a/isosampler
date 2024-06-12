import Image from 'next/image';
import logo from '../../public/images/isotech-logo.svg';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <Image
                            priority
                            src={logo}
                            alt="Isotech a Stratum Reservoir brand"
                        />
                    </a>
                </div>

                <nav className="navbar navbar-expand-lg p-0">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">IsoTube</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="devicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Devices</a>
                                <ul className="dropdown-menu" aria-labelledby="devicesDropdown">
                                    <li><a className="dropdown-item" href="#">IsoSampler Pro</a></li>
                                    <li><a className="dropdown-item" href="#">IsoSampler MAX</a></li>
                                    <li><a className="dropdown-item" href="#">Wellhead Sampler</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}