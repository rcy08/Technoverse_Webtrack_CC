const Services = () => {
    return (
        <div className="container">
            <div className="services-box">
                    <div className="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            CA
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/services/ca/Financial-Audit">Financial Audit</a></li>
                            <li><a className="dropdown-item" href="/services/ca/Financial-Planning">Financial Planning</a></li>
                            <li><a className="dropdown-item" href="/services/ca/Handling-Taxes">Handling Taxes</a></li>
                        </ul>
                    </div>


                    <div className="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Architect
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/services/architect/House-Construction">House Construction</a></li>
                            <li><a className="dropdown-item" href="/services/architect/Interior-Design">Interior Design</a></li>
                        </ul>
                    </div>


                    <div className="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Lawyer
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/services/lawyer/Property-Matters">Property Matters</a></li>
                            <li><a className="dropdown-item" href="/services/lawyer/Registering-Property">Registering Property</a></li>
                            <li><a className="dropdown-item" href="/services/lawyer/Registering-A-Company">Registering A Company</a></li>
                            <li><a className="dropdown-item" href="/services/lawyer/Family-Disputes">Family Disputes</a></li>
                            <li><a className="dropdown-item" href="/services/lawyer/Vehicle-Loans">Vehicle Loans</a></li>
                            <li><a className="dropdown-item" href="/services/lawyer/Road-Accidents">Road Accidents</a></li>
                        </ul>
                    </div>


            </div>
        </div>
    );
}
export default Services;