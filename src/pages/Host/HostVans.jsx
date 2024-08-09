import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
    const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => {
                setVans(data.vans);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching vans:", error);
                setLoading(false);
            });
    }, []);
    
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {loading ? (
                    <h2>Loading...</h2>
                ) : vans.length > 0 ? (
                    <section>{hostVansEls}</section>
                ) : (
                    <h2>No vans available</h2>
                )}
            </div>
        </section>
    );
    

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {vans.length > 0 ? (
                    <section>{hostVansEls}</section>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </section>
    );
}
