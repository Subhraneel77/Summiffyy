import React from 'react'
import "../Css/userprofile.css"

export const UserProfile = () => {
    const collectionRef = collection(database, 'users');

    const getDatasets = () => {
        getDoc(collectionRef)
            .then((response) => {
                console.log(response.data.map((item) => {
                    return item.docs();
                }))
            })
    }
    return ( <
        div className = 'user' >
        Subhraneel <
        /div>
    )
}