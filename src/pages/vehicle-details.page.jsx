const VehicleDetailPage = ({match}) => {
    console.log()
    return <div>
        <h2>Vehicle Detail Page: {match.params.id}</h2>
    </div>
}

export default VehicleDetailPage;