// Agrega esta porción de JavaScript después de tu elemento .logo en el HTML o en un archivo .js

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    setTimeout(function() {
        logo.classList.add("show");
    }, 3000);
});
// Agrega esta porción de JavaScript después de tu elemento .img en el HTML o en un archivo .js

document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".img");
    setTimeout(function() {
        img.classList.add("show");
    }, 4000);
});


window.onload = function() {
    const title = document.querySelector('.title');
    setTimeout(function() {
        title.classList.add('show-title');
    }, 3500); // 3 segundos de retraso
};


document.getElementById("subscribe-btn").addEventListener("click", function() {
    const email = document.getElementById("email").value;

    // Simulación: Enviar el correo electrónico a tu backend para manejar la suscripción
    if (email !== "") {
        alert(`¡Gracias por suscribirte con el correo: ${email}!`);
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
});




// For a fully working example, please see:
// https://github.com/paypal-examples/docs-examples/tree/main/standard-integration

const { CLIENT_ID, APP_SECRET } = process.env;
const baseURL = {
    sandbox: "https://api-m.sandbox.paypal.com",
    production: "https://api-m.paypal.com"
};

// allow json body
app.use(express.json());

// create a new order
app.post("/create-paypal-order", async(req, res) => {
    const order = await createOrder();
    res.json(order);
});

// capture payment & store order information or fullfill order
app.post("/capture-paypal-order", async(req, res) => {
    const { orderID } = req.body;
    const captureData = await capturePayment(orderID);
    // TODO: store payment information such as the transaction ID
    res.json(captureData);
});

//////////////////////
// PayPal API helpers
//////////////////////

// use the orders api to create an order
async function createOrder() {
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: "100.00",
                },
            }, ],
        }),
    });
    const data = await response.json();
    return data;
}

// use the orders api to capture payment for an order
async function capturePayment(orderId) {
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders/${orderId}/capture`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();
    return data;
}

// generate an access token using client id and app secret
async function generateAccessToken() {
    const auth = Buffer.from(AQLFa6C0oiC30Tu - zTT5QeVLB30IDgE2wp3tPrHamiOI3TBpEgHivYHbkxEbTJiP472YtEw34NJtnHGn + ":" + I9cbS3z9E1E4Jzp0hdtI3zl1rABQ7c58KMmKmvsRy15TXY9kr9P7cP5xeZqQoM0nLIIJgc89n3eNLvv).toString("base64")
    const response = await fetch(`${baseURL.sandbox}/v1/oauth2/token`, {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
            Authorization: `Basic ${auth}`,
        },
    });
    const data = await response.json();
    return data.access_token;
}