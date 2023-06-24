const Services = () => {
    return (
        <div className="container">
            <div className="services-box">
                <div className="service">

                    <label for='CA' className="label"> CA </label>
                  
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
                    </select>

                </div>
            </div>
        </div>
    );
}
 
export default Services;