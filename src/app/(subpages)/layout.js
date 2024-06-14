import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

export default function SubpageLayout({ children }) {
    return (
        <>
        <Breadcrumbs />

        <div className="container">
            <h1>Page Title</h1>
        </div>

        <div className="container">
            <div className="row">

                <div id="sidebar" className="col-3">
                    <TableOfContents />
                </div>

                <div id="primary" className="col-9 mb-4">
                    {children}
                </div>

            </div>
        </div>
        </>
    );
  }