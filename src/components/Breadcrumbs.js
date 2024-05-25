'use client'

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();

    if (pathname !== "/") {
        return (
            <div id="breadcrumbs" className="py-2 mb-4">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Current Page</li>
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }

}