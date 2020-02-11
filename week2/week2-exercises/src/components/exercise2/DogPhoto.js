import React from "react";

export function DogPhoto({dogPhotos}) {

    return (
        
        <div className="dog-holder">
            {dogPhotos.map((item, i) => (
                <img className="dog-photo" key ={i} src={item} alt="dog"/>
            ))}
        </div>
        
    );
}