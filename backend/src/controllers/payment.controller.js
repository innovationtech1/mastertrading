import axios from "axios";
import { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET, HOST } from "../config.js";




export const createorder = async(req, res) => {
    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: "200",
                },
                description: "payment curso traiding",
            }, ],
            application_context: {
                brand_name: "mycompany.com",
                landing_page: "LOGIN",
                user_action: "PAY_NOW",
                return_url: `${HOST}/capture-order`,
                cancel_url: `${HOST}/cancel-order`
            },
        };

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        const {
            data: { access_token },
        } = await axios.post(
            " https://api-m.sandbox.paypal.com/v1/oauth2/token",
            params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                auth: {
                    username: PAYPAL_API_CLIENT,
                    password: PAYPAL_API_SECRET,
                }
            }
        );


        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },

        });

        console.log(response.data);
        res.json(response.data);

    } catch (error) {
        res.status(500).send('someting goes wrong')
    }
};


export const captureOrder = (req, res) => {
    const { token, PayerID } = req.query
    console.log(token, PayerID)
    res.send('captuting order')
}
export const cancelOrder = (req, res) => {
    res.send('cancel order');
}