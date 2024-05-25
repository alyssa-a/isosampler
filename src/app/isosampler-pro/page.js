import TOC from '@/components/TOC';

export default function IsoSamplerPro() {
    return (
        <>
            <div className="container">
                <h1>IsoSampler Pro</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div id="sidebar" className="col-3">
                        <TOC />
                    </div>

                    <div id="primary" className="col-9">
                        <section>
                            <h2 id="dimensions">Dimensions</h2>
                            <ul>
                                <li>Mounting Holes: 6 x ø 6.35 mm (ø 0.25 in)</li>
                                <li>Overall Width: 477.5 mm (18.8 in)</li>
                                <li>Overall Height: 132.1 mm (5.2 in)</li>
                                <li>Overall Depth: 99.10 mm (3.9 in)</li>
                                <li>Rack Units: 3 RU</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}