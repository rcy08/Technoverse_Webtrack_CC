const Services = () => {
    return (
        <div className="container">
            <div className="services-box">
                    <div className="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            CA
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/services/Financial-Audit">Financial Audit</a></li>
                            <li><a className="dropdown-item" href="/services/">Financial Planning</a></li>
                            <li><a className="dropdown-item" href="/services/">Handling Taxes</a></li>
                            {/* <li><hr className="dropdown-divider"/>  </li> */}
                            {/* <li><a className="dropdown-item" href="#">Separated link</a></li> */}
                        </ul>
                    </div>


                    <div className="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Architect
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/services/">Legal help related to property matters</a></li>
                            <li><a className="dropdown-item" href="/services/">Registering Property</a></li>
                            <li><a className="dropdown-item" href="/services/">Registering A Company</a></li>
                            {/* <li><hr className="dropdown-divider"/>  </li> */}
                            <li><a className="dropdown-item" href="/services/">Family Disputes</a></li>
                            <li><a className="dropdown-item" href="/services/">Vehicle Loans</a></li>
                            <li><a className="dropdown-item" href="/services/">Road Accidents</a></li>
                        </ul>
                    </div>


                    <div className="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Lawyer
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">House construction</a></li>
                            <li><a className="dropdown-item" href="#">Interior design</a></li>
                            {/* <li><a className="dropdown-item" href="#">Handling Taxes</a></li>
                            {/* <li><hr className="dropdown-divider"/>  </li> */}
                            <li><a className="dropdown-item" href="#">Separated link</a></li> 
                        </ul>
                    </div>
            </div>
        </div>
    );
}
export default Services;