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

                <nav class="navbar navbar-expand-lg p-0">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">IsoTube</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="devicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Devices</a>
                                <ul class="dropdown-menu" aria-labelledby="devicesDropdown">
                                    <li><a class="dropdown-item" href="#">IsoSampler Pro</a></li>
                                    <li><a class="dropdown-item" href="#">IsoSampler MAX</a></li>
                                    <li><a class="dropdown-item" href="#">Wellhead Sampler</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}