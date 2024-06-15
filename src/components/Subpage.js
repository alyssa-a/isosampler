import Breadcrumbs from "./Breadcrumbs";
import TableOfContents from "./TableOfContents";

export default function Subpage({ title, breadcrumbs, children }) {
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <div className="container mb-3">
            <h1>{title}</h1>
        </div>

        <div className="container">
            <div className="row">

                <div id="sidebar" className="col-12 col-md-3">
                    <TableOfContents />
                </div>

                <div id="primary" className="col-12 col-md-9 mb-4">
                    {children}
                </div>

            </div>
        </div>
        </>
    );
}