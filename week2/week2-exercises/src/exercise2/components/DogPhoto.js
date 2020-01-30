import React from "react";

export function DogPhoto({dogPhotos}) {
    return (
        
        <div>
            {dogPhotos.map(item => (
                <img src={item} alt="dog"/>
            ))}
        </div>
        
    );
}