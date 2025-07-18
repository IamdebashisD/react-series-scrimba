import React from 'react'

export default function Header({globe}) {
    return (
        <header>
            <nav>
                <img src={globe}  width={30} alt="" />
                <span>my travel journal</span>
            </nav>
        </header>
    )
}

