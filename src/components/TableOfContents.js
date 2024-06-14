'use client';

import { useState, useEffect } from "react";

export default function TableOfContents() {
    const [headings, setHeadings] = useState();

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("#primary h2"))
            .map((elem) => ({
                text: elem.innerText,
            }));
        
        setHeadings(elements);
    }, []);

    if (headings && headings.length > 0 ) {
        return (
            <div id="toc">
                <h2>On This Page</h2>
                <ul>
                    {headings.map(heading => (
                        <li key={heading.text}>
                            <a href="#">{heading.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}