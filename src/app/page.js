import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import styles from './page.module.css';
import Link from 'next/link'
import Image from 'next/image';
import bg from '@/public/images/Blue-Abstract-Background.webp';
import isotube from '@/public/images/IsoTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faPhone, faEnvelope, faArrowPointer } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <>
            <section className={`${styles.hero} ${styles.section}`} style={{backgroundImage: `url(${bg.src})`}}>
                <div className="container">
                    <h1 className="mb-4 mb-md-5"><span>Fast sampling, high quality:</span><br/>
                    The all-new IsoTube</h1>
                    <p><Link href="/isotube" className="button orange-bg">Explore the New IsoTube</Link></p>
                </div>

                <div className={styles.isotube}>
                    <Image
                        priority
                        src={isotube}
                        alt="IsoTube"
                    />
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2>Sampling Devices</h2>

                    <div className="row">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title"><Link href="/isosampler-pro" className="stretched-link">IsoSampler Pro <FontAwesomeIcon icon={faAnglesRight} className="fs-1rem orange-text"/></Link></h3>
                                    <p className="card-text">Improved mudgas sampling manifold, completely redesigned for seamless integration with modern field equipment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">IsoSampler MAX <FontAwesomeIcon icon={faAnglesRight} className="fs-1rem orange-text"/></h3>
                                    <p className="card-text">COMING SOON - Automated sample collection and metadata storage for next-level accuracy and efficiency.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title"><Link href="/isosampler-go" className="stretched-link">IsoSampler Go <FontAwesomeIcon icon={faAnglesRight} className="fs-1rem orange-text"/></Link></h3>
                                    <p className="card-text">Pressure-regulated gas sampler for use with gas sources up to 3,000 psi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} green-bg`}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2>Contact Isotech to request a quote!</h2>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <p className={styles.contact}>
                                <FontAwesomeIcon icon={faPhone} /> (217) 398-3490

                                <FontAwesomeIcon icon={faEnvelope} /> <Link className="no-underline" href="mailto:onlineorders@stratumreservoir.com">onlineorders@stratumreservoir.com</Link>

                                <FontAwesomeIcon icon={faArrowPointer} /> <Link className="no-underline" href="https://www.isotechlabs.com/">isotechlabs.com</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}