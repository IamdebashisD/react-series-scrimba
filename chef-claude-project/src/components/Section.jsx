import React from 'react';
import ReactMarkdown from 'react-markdown';

function Section({ recipe }) {
    return (
        <section>
            <h2 className='flex-1 mb-5 font-inter font-semibold text-[30px] leading-[38px] tracking-normal text-[#141413]'>
                Chef Claude Recommends:
            </h2>
            <article 
                className="suggested-recipe-container text-[#475467] prose max-w-none" 
                aria-live="polite"
            >
                <ReactMarkdown
                    components={{
                        // Customize headings
                        h1: ({node, ...props}) => (
                            <h1 className="text-2xl font-bold mt-8 mb-4 text-[#475467]" {...props} />
                        ),
                        h2: ({node, ...props}) => (
                            <h2 className="text-xl font-bold mt-6 mb-3 text-[#475467]" {...props} />
                        ),
                        h3: ({node, ...props}) => (
                            <h3 className="text-lg font-semibold mt-4 mb-2 text-[#475467]" {...props} />
                        ),
                        
                        // Customize strong text
                        strong: ({node, ...props}) => (
                            <strong className="text-[#475467] font-semibold" {...props} />
                        ),
                        
                        // Customize lists - FIXED: Filter out 'ordered' prop
                        ul: ({node, ordered, ...props}) => (
                            <ul className="m-2 p-2 text-[#475467] leading-9 list-disc list-inside space-y-2" {...props} />
                        ),
                        ol: ({node, ordered, ...props}) => (
                            <ol className="m-2 p-2 text-[#475467] leading-9 list-decimal list-inside space-y-2" {...props} />
                        ),
                        li: ({node, ordered, ...props}) => (
                            <li className="pl-2" {...props} />
                        ),
                        
                        // Customize paragraphs
                        p: ({node, ...props}) => (
                            <p className="mb-4 leading-7" {...props} />
                        ),
                        
                        // Customize links (if any)
                        a: ({node, ...props}) => (
                            <a className="text-blue-600 underline hover:text-blue-800" {...props} />
                        ),
                    }}
                >
                    {recipe || "No recipe generated yet."}
                </ReactMarkdown>
            </article>
        </section>
    )
}

export default Section;