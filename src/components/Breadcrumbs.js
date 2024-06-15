'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs({ pageTitles }) {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    if (pathNames.length > 0) {
        return (
            <div id="breadcrumbs" className="py-2 mb-4">
                <div className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        
                        {pathNames.map((link, i) => {
                            let href = `/${pathNames.slice(0, i + 1).join('/')}`;
                            
                            if (i === (pathNames.length - 1)) {
                                return <li key={i} className="breadcrumb-item">{pageTitles[i]}</li>
                            } else {
                                return (
                                    <li key={i} className="breadcrumb-item">
                                        <Link href={href}>{pageTitles[i]}</Link>
                                    </li>
                                );
                            }
                        })}
                    </ol>
              </div>
            </div>
          );
    }
}