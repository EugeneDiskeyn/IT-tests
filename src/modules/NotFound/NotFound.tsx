import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            This page is not found, click <Link to="/">here</Link> to come back to the authorization page
        </>
    )
}

export default NotFound;