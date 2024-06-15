/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Subpage from '@/components/Subpage';
import label from '@/public/images/IsoSampler-Go-Label.jpg';

export const metadata = {
    title: "IsoSampler Go | Isotech",
    description: "Specifications and instructions for the IsoSampler Go",
  };

export default function IsoSamplerGo() {
    const pageTitle = "IsoSampler Go"

    return (
        <Subpage title={pageTitle} breadcrumbs={[pageTitle]}>
            <section id="samplingInstructions">
                <h2>Sampling Instructions</h2>

                <p><strong>CAUTION:</strong> The IsoSampler Go includes a pressure regulator that is rated for use up to a maximum of 3000 psig (200 bar).  If pressures higher than this could be encountered, additional pressure control will be required.</p>
                <p><strong>NOTE:</strong> IsoTubes are NOT suitable for gases containing hydrogen sulfide (H2S, sour gas).</p>

                <div className="accordion" id="instructionsAccordion">

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseOne" aria-expanded="false" aria-controls="instructionsAccordionCollapseOne">
                                Step 1: Connecting the IsoSampler Go
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseOne" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>Locate a suitable, vertical port for collecting a sample. A 'suitable port' will supply a dry, liquid free gas sample and should consist of both a ¼" female NPT port, and a control valve that can be used to turn the gas on and off.</li>
                                    <li>Make sure that the threads on the IsoSampler Go are clean and wrap 2 or 3 layers of Teflon<sup>&reg;</sup> tape, clockwise onto the male threads of the Adapter. </li>
                                    <li>Screw the IsoSampler Go into the ¼" female NPT sampling port and then tighten by using a wrench on the body of the adapter fitting.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseTwo" aria-expanded="false" aria-controls="instructionsAccordionCollapseTwo">
                                Step 2: Collecting a sample
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseTwo" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>With the IsoSampler Go valve in the horizontal "shut" position, slowly open the control valve on the sampling port. Sample pressure will be indicated on the Inlet Pressure gauge.</li>
                                    <li>Next push the IsoTube valve into the quick-connect Chuck until it clicks into place.</li>
                                    <li>Turn the handle on the 3-Way Valve to the vertical "open" position. The IsoTube will fill with gas. Note the pressure on the outlet gauge. The pressure should not be greater than 80 psig.</li>
                                    <li>Purging and filling of the IsoTube is accomplished by rotating the handle on the 3-Way Valve "open" and "shut" for a minimum of 2 seconds in both positions to alternately pressurize and vent the IsoTube. A minimum of 10 cycles is recommended.</li>
                                    <li>After the IsoTube is filled for the last time, leave the 3-Way Valve in the vertical "open" position. Remove the IsoTube from the sampling Cchuck by pulling back the outer sleeve of the Chuck until the IsoTube is released. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseThree" aria-expanded="false" aria-controls="instructionsAccordionCollapseThree">
                                Step 3: Labeling the IsoTubes                                        
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseThree" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <Image 
                                    priority
                                    src={label}
                                    alt="example IsoTube label"
                                    width="300"
                                    className="d-block mx-auto mb-3 img-fluid" 
                                />
                                <ul>
                                    <li>There are adhesive backed labels included with each box of IsoTubes. Fill in the labels using a ballpoint pen and <strong>press hard</strong> as two duplicate copies are being made.</li>
                                    <li>Place a cap over the valve on the IsoTube. Return the IsoTube to the shipping box. When a box of 25 IsoTubes is full, check to see that all caps have been attached. Remove the yellow copy of the sample identification tags and keep it for your records. The white copy should be put back in the box with the IsoTube samples.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseFour" aria-expanded="false" aria-controls="instructionsAccordionCollapseFour">
                                Step 4: Shipping IsoTubes                                        
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseFour" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <p>Pressurized IsoTubes must be shipped as hazardous material. The necessary warning labels and shipping instructions are included in each box.</p>

                                <p><strong><a href="https://www.isotechlabs.com/customersupport/shippingguidelines/IsoTubeSP_UN2037.pdf">Learn more about shipping IsoTubes.</a></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Subpage>
    )
}