/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import Subpage from '@/components/Subpage';
import dimensions from '@/public/images/401 Dimensions.png';
import hardware from '@/public/images/401 Features.png';
import fasteners from '@/public/images/401 Pump Output.png';
import switchLow from '@/public/images/Pump Output Low.png';
import rack from '@/public/images/401 Rack.png';
import installed from '@/public/images/401_Installed.png';
import test from '@/public/images/401 Test.png';
import chucks from '@/public/images/401.PNG';
import boxLabel from '@/public/images/IsoTube Box Label.jpg';
import label from '@/public/images/IsoTube Label.jpg';

export const metadata = {
    title: "IsoSampler Pro | Isotech",
    description: "Specifications and instructions for the IsoSampler Pro",
  };

export default function IsoSamplerPro() {
    const pageTitle = "IsoSampler Pro";
    
    return (
        <Subpage title={pageTitle} breadcrumbs={[pageTitle]}>
            <section id="dimensions">
                <h2>Dimensions</h2>
                <ul>
                    <li>Mounting Holes: 6 x ø 6.35 mm (ø 0.25 in)</li>
                    <li>Overall Width: 477.5 mm (18.8 in)</li>
                    <li>Overall Height: 132.1 mm (5.2 in)</li>
                    <li>Overall Depth: 99.10 mm (3.9 in)</li>
                    <li>Rack Units: 3 RU</li>
                </ul>

                <Image
                    priority
                    src={dimensions}
                    alt="Top view, side view, and front view of the IsoSampler Pro"
                    width="800"
                    className="d-block mx-auto img-fluid"
                />
            </section>

            <section id="specifications">
                <h2>Specifications</h2>
                <ul>
                    <li>AC Power Requirements: one NEMA 1-15 or NEMA 5-15 outlet, 90-240 VAC at 1 A max.</li>
                    <li>Power Input: 5.5 mm OD x 2.5 mm center-positive barrel jack, 24 VDC at 200 mA max.</li>
                    <li>Mounting Options: Wall mount or standard 19” rack mount (3 rack units).</li>
                    <li>Flow Connections: SAMPLE GAS INPUT and SAMPLE GAS OUTPUT, 1/4” poly line.
                        <ul>
                            <li>Connection Type: 1/4” push-to-connect.</li>
                        </ul>
                    </li>
                    <li>Minimum Gas Flow Rate: 140 mL/min</li>
                </ul>
            </section>

            <section id="hardware">
                <h2>Hardware Included</h2>
                <ul>
                    <li>AC to DC power supply</li>
                    <li>Mounting hardware for rack mount
                        <ul>
                            <li>4x M6 x 10 mm screws</li>
                            <li>4x M6 hex nuts</li>
                        </ul>
                    </li>
                    <li>4x wood screws for wall mount</li>
                    <li>Spare parts kit:
                        <ul>
                            <li>Replacement 65 μm filters</li>
                            <li>Replacement o-rings for chuck assembly</li>
                            <li>Chuck wrench tool</li>
                        </ul>
                    </li>
                </ul>

                <Image
                    priority
                    src={hardware}
                    alt="Diagram labeling the features of the IsoSampler Pro"
                    width="800"
                    className="d-block mx-auto img-fluid"
                />
            </section>

            <section id="installation">
                <h2>Installation</h2>

                <div className="accordion" id="installationAccordion">

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#installationAccordionCollapseOne" aria-expanded="false" aria-controls="installationAccordionCollapseOne">
                                Selecting the Pump Output Setting
                            </button>
                        </h3>

                        <div id="installationAccordionCollapseOne" className="accordion-collapse collapse" data-bs-parent="#installationAccordion">
                            <div className="accordion-body">
                                <p>The IsoSampler Pro has two pump output settings. <strong>Make sure you have selected the correct pump output setting for your gas flow rate prior to taking a sample, or your samples may be compromised.</strong></p>

                                <ul>
                                    <li>If your gas flow rate is below 300 mL/min, you need the pump output to be switched to the low-flow setting. If you just purchased your IsoSampler Pro, the factory default setting is low-flow, and you may skip this step.</li>
                                    <li>If your gas flow rate is 300 mL/min or greater, you should use the high-flow setting.</li>
                                </ul>

                                <ol>
                                    <li>Remove the fasteners as shown:
                                        <Image
                                            priority
                                            src={fasteners}
                                            alt="Remove 6 flat head screws (3 on top and 3 on bottom) and 1 pan head screw"
                                            width="800"
                                            className="d-block mx-auto img-fluid"
                                        />
                                    </li>
                                    <li>Once the back panel has been removed, find the PUMP OUTPUT switch. Shown below is the factory default setting for LOW-FLOW. Push the toggle lever to the right to select HIGH-FLOW.
                                        <Image
                                            priority
                                            src={switchLow}
                                            alt="Switch flipped to the left indicating low pump output"
                                            width="500"
                                            className="d-block mx-auto img-fluid my-3"
                                        />
                                    </li>
                                    <li>Once the pump output setting has been selected, reverse the disassembly process.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#installationAccordionCollapseTwo" aria-expanded="false" aria-controls="installationAccordionCollapseTwo">
                                Mounting the IsoSampler Pro
                            </button>
                        </h3>

                        <div id="installationAccordionCollapseTwo" className="accordion-collapse collapse" data-bs-parent="#installationAccordion">
                            <div className="accordion-body">
                                <p>To rack mount the IsoSampler Pro, use the supplied M6 x 10mm screws and the M6 nuts as
                                shown below. The IsoSampler Pro may also be wall mounted using the supplied wood screws.</p>
                                <Image
                                    priority
                                    src={rack}
                                    alt="Diagram showing where to use screws"
                                    width="800"
                                    className="d-block mx-auto img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#installationAccordionCollapseThree" aria-expanded="false" aria-controls="installationAccordionCollapseThree">
                                Connecting the sample flow lines and the 24 VDC power
                            </button>
                        </h3>

                        <div id="installationAccordionCollapseThree" className="accordion-collapse collapse" data-bs-parent="#installationAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>Connect the sample gas inlet and outlet lines as shown below.</li>
                                    <li>Connect the power supply barrel jack to the left side of the IsoSampler Pro as shown.</li>
                                    <li>Connect the power supply to a NEMA 1-15 or NEMA 5-15 outlet.</li>
                                </ul>
                                
                                <Image 
                                    priority
                                    src={installed}
                                    alt="Diagram of an installed IsoSampler Pro"
                                    width="800"
                                    className="d-block mx-auto img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="samplingInstructions">
                <h2>Sampling Instructions</h2>
                <p><strong>Note: IsoTubes are not suitable for collecting gases containing hydrogen sulfide (H<sub>2</sub>S, sour gas)</strong></p>
                <p>The IsoSampler Pro has two pump output settings. <strong>Make sure you have selected the correct pump output setting for your gas flow rate prior to taking a sample, or your samples may be compromised.</strong> See the <a href="#installation">installation section</a> above for more information.</p>

                <div className="accordion" id="instructionsAccordion">

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseOne" aria-expanded="false" aria-controls="instructionsAccordionCollapseOne">
                                Step 1: Checking an evacuated IsoTube
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseOne" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <Image 
                                    priority
                                    src={test}
                                    alt="Isotube diagram"
                                    width="800"
                                    className="d-block mx-auto img-fluid"
                                />

                                <ul>
                                    <li>Remove a new IsoTube from the plastic film and connect the IsoTube to the pressure gauge by pressing the valve stem into the chuck until it clicks into place.</li>
                                    <li>The vacuum reading should be between 25 and 30 inHg. If the reading is not at least 25 inHg of vacuum, do not use the IsoTube. Open another IsoTube and check vacuum to confirm the tube is suitable for use.</li>
                                    <li>Once the vacuum level is confirmed, remove the IsoTube from the pressure gauge chuck by pulling back the outer sleeve of the chuck until the IsoTube is released.</li>

                                    <p><em>Note: if the equipment is located at altitude, the pressure gauge will read slightly negative before the IsoTube is connected.</em></p>
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
                                <Image 
                                    priority
                                    src={chucks}
                                    alt="Installed Isotube diagram highlighting the sampling chuck and testing chuck"
                                    width="800"
                                    className="d-block mx-auto img-fluid"
                                />
                                
                                <ul>
                                    <li>Connect the IsoTube to the sample port by pressing the IsoTube into the quick-
                                    connect chuck until it clicks into place.</li>
                                    <li>The indicator LED will double flash during the sampling process.
                                        <ul>
                                            <li>If the device is configured for high flow sampling, the pump will turn on
                                            immediately. The filling process will take approximately 30 seconds.</li>
                                            <li>If the device is configured for low flow sampling, the pump will begin a process of cycling on and off as the pressure in the tube increases. The filling process will take approximately 70 seconds.</li>
                                        </ul>
                                    </li>
                                    <li>Once the process has been completed, the indicator LED will begin to fast flash indicating you may now remove the IsoTube from the sampling chuck by pulling back the outer sleeve of the chuck until the IsoTube is released.</li>
                                    <li><strong>Tubes used for collecting samples should have their pressure checked and label applied immediately after collecting (See Steps 3 and 4 below).</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseThree" aria-expanded="false" aria-controls="instructionsAccordionCollapseThree">
                                Step 3: Checking the pressure of the filled IsoTube                                        
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseThree" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <Image 
                                    priority
                                    src={test}
                                    alt="Isotube diagram"
                                    width="800"
                                    className="d-block mx-auto img-fluid"
                                />

                                <ul>
                                    <li>Connect the IsoTube to the pressure gauge by pressing the IsoTube into the quick-
                                    connect chuck until it clicks into place.</li>
                                    <li>The pressure after sampling should be between 4 and 10 psig.
                                        <ul>
                                            <li>If there is no pressure, repeat the sample collection process.</li>
                                            <li>If multiple samples in a row fail to generate pressure, troubleshooting may be required.</li>
                                        </ul>
                                    </li>
                                    <li>Once the IsoTube is checked, remove the IsoTube from the pressure gauge chuck by
                                    pulling back the outer sleeve of the chuck until the IsoTube is released.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseFour" aria-expanded="false" aria-controls="instructionsAccordionCollapseFour">
                                Step 4: Labeling the IsoTubes                                        
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseFour" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <div className="row mt-2 mb-3">
                                    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                                        <Image 
                                            priority
                                            src={boxLabel}
                                            alt="Sample label identifying the company, rig and well"
                                            width="400"
                                            className="d-block mx-auto img-fluid"    
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <Image 
                                            priority
                                            src={label}
                                            alt="Sample label identifying the company, rig and well"
                                            width="350"
                                            className="d-block mx-auto img-fluid"
                                        />
                                    </div>
                                </div>
                                
                                <ul>
                                    <li>There are adhesive backed labels included with each box of IsoTubes. Fill in the labels using a ballpoint pen and <strong>press hard</strong> as two duplicate copies are being made.</li>
                                    <li>The first label on each sheet <em>(above left)</em> provides space for identification of the company, rig and well as shown. This first label should be placed on the inside flap of the box.</li>
                                    <li>Complete one of the individual sample information labels <em>(above right)</em> for each sample. Remove the completed label from the backing sheet and attach it to the IsoTube in the indicated area immediately after the sample is collected.</li>
                                    <li>Place a cap over the valve on the IsoTube.</li>
                                    <li>Return the IsoTube to the shipping box.</li>
                                    <li>When a box of 25 IsoTubes is full, check to see that all caps have been attached.</li>
                                    <li>Remove the yellow copy of the sample identification tags and keep it for your records. The white copy should be put back in the box with the IsoTube samples.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instructionsAccordionCollapseFive" aria-expanded="false" aria-controls="instructionsAccordionCollapseFive">
                                Step 4: Shipping IsoTubes                                        
                            </button>
                        </h3>

                        <div id="instructionsAccordionCollapseFive" className="accordion-collapse collapse" data-bs-parent="#instructionsAccordion">
                            <div className="accordion-body">
                                <p>Pressurized IsoTubes must be shipped as hazardous material. The necessary warning labels and shipping instructions are included in each box.</p>

                                <p><strong><a href="https://www.isotechlabs.com/customersupport/shippingguidelines/IsoTubeSP_UN2037.pdf">Learn more about shipping IsoTubes.</a></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="downloads">
                <h2>Downloads</h2>
                <ul>
                    <li><Link href="/files/IsoSampler Pro Specifications and Installation Guide.pdf">IsoSampler Pro Specifications and Installation Guide</Link></li>
                    <li><Link href="/files/IsoSampler Pro Sampling Instructions.pdf">IsoSampler Pro Sampling Instructions</Link></li>
                </ul>
            </section>
        </Subpage>
    )
}