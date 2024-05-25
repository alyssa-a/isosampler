import styles from './page.module.css';

export default function Home() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="mb-5"><span>Fast sampling, high quality:</span><br/>
                    The all-new IsoTube</h1>
                    <p><a className="button orange-bg" href="#">Explore the New IsoTube</a></p>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>Sampling Devices</h2>

                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">IsoSampler Pro</h3>
                                    <p className="card-text">Improved mudgas sampling manifold, completely redesigned for seamless integration with modern field equipment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">IsoSampler MAX</h3>
                                    <p className="card-text">COMING SOON - Automated sample collection and metadata storage for next-level accuracy and efficiency.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Wellhead Sampler</h3>
                                    <p className="card-text">Pressure-regulated gas sampler for use with gas sources up to 3,000 psi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="green-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Contact Isotech to request a quote!</h2>
                        </div>

                        <div className="col">
                            <p>(217) 398-3490<br/>
                            onlineorders@stratumreservoir.com<br/>
                            isotechlabs.com</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}