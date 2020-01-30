import React, {useState,useEffect} from "react";
import {DogPhoto} from "./DogPhoto";
import {Button} from "./Button";

export function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const getDogPhoto = () => {
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                setDogPhotos([data.message, ...dogPhotos]);
                setLoading(false);
                console.log(dogPhotos);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setLoading(false);
            });

        }

            useEffect(getDogPhoto, []);

            if (isLoading) {
                return(
                <p>Loading...</p>
                )
            }

            if(hasError) {
                return (
                    <p>Error!</p>
                )
            }

            if(getDogPhoto) {
                return (
                    <div className='dog-photos'>
                        <button onClick={getDogPhoto}>Get your first dog!</button>
                        <DogPhoto dogPhotos={dogPhotos}/>
                    </div>
                )
            }

    }

