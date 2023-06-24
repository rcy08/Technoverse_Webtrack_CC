const Services = () => {
    return (
        <div className="container">
            <div className="services-box">
                <div className="service">

                    {/* <label for='CA' className="label"> CA </label>
                  
                    <select name='CA'>
                        <option value='Financial Audit'>Financial Audit</option>
                        <option value='Financial Planning'>Financial Planning</option>
                        <option value='Handling Taxes'>Handling Taxes</option>
                    </select>

                    <label for='architect' className="label"> Architect </label>
                    <select name='architect'>
                        <option value="House Construction">House Construction</option>
                        <option value="Interior Design">Interior Design</option>
                    </select>

                    <label for='lawyer' className="label"> Lawyer </label>
                    <select name='lawyer'>
                        <option value="property matters">property matters</option>
                        <option value="Property Registered">Property Registered</option>
                        <option value="Registering a Company">Registering a Company</option>
                        <option value="Family Disputes">Family Disputes</option>
                        <option value="Vehicle Loans">Vehicle Loans</option>
                        <option value="Road accidents">Road accidents</option>
                    </select> */}
                    <div class="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            CA
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Financial Audit</a></li>
                            <li><a className="dropdown-item" href="#">Financial Planning</a></li>
                            <li><a className="dropdown-item" href="#">Handling Taxes</a></li>
                            {/* <li><hr className="dropdown-divider"/>  </li> */}
                            {/* <li><a className="dropdown-item" href="#">Separated link</a></li> */}
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" className ="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Architect
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Legal help related to property matters</a></li>
                            <li><a className="dropdown-item" href="#">Registering Property</a></li>
                            <li><a className="dropdown-item" href="#">Registering A Company</a></li>
                            {/* <li><hr className="dropdown-divider"/>  </li> */}
                            <li><a className="dropdown-item" href="#">Family Disputes</a></li>
                            <li><a className="dropdown-item" href="#">Vehicle Loans</a></li>
                            <li><a className="dropdown-item" href="#">Road Accidents</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
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
        </div>
    );
}
 
export default Services;