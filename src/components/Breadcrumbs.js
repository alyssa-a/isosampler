'use client'

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();

    if (pathname !== "/") {
        return (
            <div id="breadcrumbs" className="py-2 mb-4">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Current Page</li>
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }

}