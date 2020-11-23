import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqhYAL76c9pWfaxXI1NWf3tUV4pnSiPW3KKMqPxak39yEGvIaX6LrFGiHxGiwTQjBUfbiWdasta4WUonONO8elX008znUlwQm'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripekey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;