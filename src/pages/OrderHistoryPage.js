import { checkToken } from "../utilities/users-service"
import { useState } from "react"

export default function OrderHistoryPage(props) {
    const handleCheckToken = async () => {
        const expDate = await checkToken()

    }
    
    return (
        <>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}