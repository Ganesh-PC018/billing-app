import './ReceivedPopup.css'
import React, { forwardRef } from 'react';
const ReceivedPopup = forwardRef(({ orderDetails, onClose, onPrint },ref) => {

    return (
        <div className="receipt-popup-overlay text-dark">
            <div className="receipt-popup" ref={ref}>
                <div className="text-center mb-4">
                    <i className="bi bi-check-circle-fill text-success fs-1"></i>
                </div>
                <h3 className="text-center mb-4">
                    Order Receipt
                </h3>
                <p>
                    <strong>Order ID : </strong>{orderDetails.orderId}
                </p>
                <p>
                    <strong>Name : </strong>{orderDetails.customerName}

                </p>
                <p>
                    <strong>Phone : </strong>{orderDetails.phoneNumber}
                </p>
                <hr className='my-3' />
                <h5 className='mb-3'>Items Ordered</h5>
                <div className="cart-items-scrollable">
                    {orderDetails.items.map((item, index) => (
                        <div key={index} className="d-flex justify-content-between">
                            <span>{item.name}x{item.quantity}</span>
                            <span>₹{(item.price * item.quantity)?.toFixed(2) || '0.00'}</span>
                            {/* <span>₹{orderDetails.subtotal?.toFixed(2) || '0.00'}</span> */}

                        </div>
                    ))}
                </div>
                <hr className="my-3" />
                <div className="d-flex justify-content-between mb-2">
                    <span>
                        <strong>Subtotal :</strong>
                    </span>
                    <span>₹{orderDetails.subTotal?.toFixed(2)}</span>

                </div>
                <div className="d-flex justify-content-between mb-3">
                    <span>
                        <strong>Tax(18%):</strong>
                    </span>
                    <span>₹{orderDetails.tax?.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <span>
                        <strong>Total :</strong>
                    </span>
                    <span>₹{orderDetails.grandTotal?.toFixed(2)}</span>
                </div>
                <p>
                    <strong>Payment Method : </strong>{orderDetails.paymentMethod}
                </p>
                {
                    orderDetails.paymentMethod === "UPI" && orderDetails.razorpayPaymentId && (
                        <>
                            <p>
                                {/* <strong>Razorpay Order ID : </strong> {orderDetails.razorpayOrderId} */}
                                <strong>Razorpay Payment ID : </strong> {orderDetails.razorpayPaymentId}
                            </p>
                        </>
                    )
                }
                <div className="d-flex justify-content-end gap-3 mt-4 no-print">
                    <button className="btn btn-warning" onClick={onPrint}>Print Receipt</button>
                    <button className="btn btn-danger" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
});

export default ReceivedPopup;