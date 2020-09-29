import React from "react"


export default function News() {
    return (
        <div>
            <div className="heading">
                <h1>News & Specials</h1>
            </div>
            <div className="content newscontent">
                <div className="news">
                    <p><b>News:</b></p>
                    <p>Check out our Facebook page to see when we go live</p>
                    <p>New locations for shoots are becoming available </p>
                    <p>New backgrounds are available</p>
                </div>
                <div className="specials">
                    <p><b>Specials:</b></p>
                    <img  src="https://images.lah-photography.com/fall.jpg" alt="2020 Fall" />
                </div>
            </div>
        </div>
    )
}