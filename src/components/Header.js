import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/isotech-logo.svg';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <Image
                            priority
                            src={logo}
                            alt="Isotech a Stratum Reservoir brand"
                        />
                    </Link>
                </div>

                {/* <nav>
                    <ul id="" class="nav">
                        <li class="nav-item">
                            <Link class="nav-link active" href="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/isotube">IsoTube</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="devicesDropdownLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sampling Devices
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="devicesDropdownLink">
                                <li className="dropdown-item"><Link href="/isosampler-pro">IsoSampler Pro</Link></li>
                                <li className="dropdown-item"><Link href="#">IsoSampler MAX</Link></li>
                                <li className="dropdown-item"><Link href="#">IsoSampler Go</Link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav> */}

                {/* <nav className="navbar navbar-expand-lg p-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link" href="/isotube">IsoTube</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="devicesDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sampling Devices
                            </a>
                            <div className="dropdown-menu" aria-labelledby="devicesDropdownMenuLink">
                                <ul>
                                    <li className="dropdown-item"><Link href="/isosampler-pro">IsoSampler Pro</Link></li>
                                    <li className="dropdown-item"><Link href="#">IsoSampler MAX</Link></li>
                                    <li className="dropdown-item"><Link href="#">IsoSampler Go</Link></li>
                                </ul>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav> */}

            </div>
        </header>
    )
}