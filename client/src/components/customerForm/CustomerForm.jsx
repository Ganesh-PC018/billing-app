import './CustomerForm.css'

const CustomerForm = ({customerName,mobileNumber,setCustomerName,setMobileNumber}) =>{
    return(
        <div className="p-3">
            <div className="mb-3">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <label htmlFor="customerName" className="col-4">Customer Name</label>
                    <input type="text" className="form-control form-control-sm" placeholder='eg. ganesh mane' id='customerName' onChange={(e)=>setCustomerName(e.target.value)}  value={customerName}/>
                    
                </div>
                <div className="d-flex align-items-center gap-2">
                    <label htmlFor="customerContactNumber" className="col-4">Contact Name</label>
                    <input type="number" className="form-control form-control-sm" placeholder='eg. 91xxxxxxx28' id='customerContactNumber' onChange={(e)=>setMobileNumber(e.target.value)} value={mobileNumber} />
                </div>
            </div>
        </div>
    );
}

export default CustomerForm;