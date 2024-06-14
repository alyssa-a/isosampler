import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

export default function SubpageLayout({ children, title }) {
    return (
        <>
        <Breadcrumbs />

        <div className="container">
            {title}
        </div>

        <div className="container">
            <div className="row">

                <div id="sidebar" className="col-3">
                    <TableOfContents />
                </div>

                <div id="primary" className="col-9">
                    {children}
                </div>

            </div>
        </div>
        </>
    );
  }