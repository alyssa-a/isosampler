'use client';

import { useState, useEffect } from "react";

export default function TableOfContents() {
    const [sections, setSections] = useState();

    useEffect(() => {
        let sections = [];
        const elements = document.querySelectorAll("#primary section");

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach((entry) => { 
                const tocItem = document.querySelector(`#toc a[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    tocItem.classList.add("active");
                } else {
                    tocItem.classList.remove("active");
                }
            });
        }
        
        let observer = new IntersectionObserver(handleIntersect, options);

        elements.forEach(elem => {
            const id = elem.id;
            const text = elem.querySelector("h2").innerText;
            sections.push({id, text});

            // observer.observe(elem);
        });

        setSections(sections);
        
    }, []);

    if (sections && sections.length > 0 ) {
        return (
            <div id="toc">
                <h2>On This Page</h2>
                <ul>
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`}>{section.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}