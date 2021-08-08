import React from "react";
import {Link} from 'react-router-dom';

class VehiclesPage extends React.Component {
    state = {
        vehicles: []
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                vehicles: data.results
            })
        })
    }

    render() {
        const {vehicles} = this.state;
        return <div>
            <h2>Star War Vehicles</h2>
            {
                vehicles && vehicles.map(vehicle => {
                    const id = vehicle.url.split('/')[5];
                    return <React.Fragment key={id}>
                            <p>
                                <Link to={`vehicle/${id}`}>{vehicle.name}</Link>
                            </p>
                        </React.Fragment>
                }
                )
            }

        </div>;
    }
}

export default VehiclesPage;