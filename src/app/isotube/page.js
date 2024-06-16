import Image from "next/image";
import Subpage from "@/components/Subpage";
import isotube from "@/public/images/IsoTube.png"

export const metadata = {
    title: "IsoTube | Isotech",
    description: "Specifications and instructions for the all new IsoTube",
};

export default function IsoSamplerPro() {
    const pageTitle = "All-New IsoTube";

    return (
        <Subpage title={pageTitle} breadcrumbs={[pageTitle]}>
            <p className="fs-1-25rem">Seamless integration with field equipment for faster, higher-quality sampling than legacy systems and competitors.</p>

            <section>
                <h2>Specifications</h2>

                <ul className="float-left">
                    <li>Max. Pressure: 80 PSI @ 20°C</li>
                    <li>DOT-2P/IP7</li>
                    <li>Wetted Materials: nitrile rubber, brass, Teflon and aluminum.</li>
                    <li>Valve: single, spring-loaded elastomer to metal seal in an over seat configuration.</li>
                    <li>COO: Champaign, Illinois, USA</li>
                    <li>Dimensions: Diameter 33mm(7.56”), OAL 192mm(7.56”)</li>
                    <li>Volume : 112.6 cc</li>
                </ul>

                <Image 
                    priority
                    src={isotube}
                    alt="IsoTube"
                    width="800"
                    height="176"
                    className="d-block mx-auto img-fluid"
                />

            </section>

            <section>
                <h2>Frequently Asked Questions</h2>

                <p><strong>What are the improvements with new IsoTubes?</strong><br/>
                The next generation IsoTubes and IsoSamplers are designed to be more efficient with current mud logging systems and to provide more reliable data per sample. The next generation IsoTubes will have a single valve, be shipped under full vacuum, and the IsoSamplers will create pressurized samples. By having a single valve, it will eliminate half of the potential leak points per tube. With the tubes under full vacuum, it will make the collection process more efficient because the tubes will not have to be flushed prior to filling. The pressurized samples collected will also provide the processing labs more gas to work with when performing analyses.</p>

                <p><strong>When will new equipment and IsoTubes be available for purchase?</strong><br/>
                We are anticipating launch of the new IsoTube and IsoSampler Pro by the end of March. The IsoSampler Max (automated sampling system) will be available Q2 2024.</p>

                <p><strong>Will there be training materials?</strong><br/>
                Yes, documents and videos for installation and operation of the new equipment will be posted on our website.</p>

                <p><strong>Are new IsoTubes backward compatible with existing samplers?</strong><br/>
                No. New IsoSamplers will need to be purchased for collecting mud gas samples. New chucks will be available for the Wellhead Sampler and Septum Valves which will allow those devices to be simply altered with a new connection.</p>

                <p><strong>To what date will customers be able to purchase the current style IsoTubes?</strong><br/>
                We are not setting a firm cut-off date. We are planning a <strong>6-month transition period in which we will continue to sell legacy style tubes</strong> while customers update to new IsoSampler Pro units.</p>
            </section>
        </Subpage>
    );
}