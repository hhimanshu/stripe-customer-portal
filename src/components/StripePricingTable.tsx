import React, { useEffect } from "react";

const StripePricingTable = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/pricing-table.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return React.createElement("stripe-pricing-table", {
        "pricing-table-id": "prctbl_1NpgvECDsGObPQ75b7dE5u2y",
        "publishable-key": "pk_test_51KrSpyCDsGObPQ75ApVFZh2bC2AWrPDHnb5EQnbKWQHE9sAmoTwdKFcX4bH8JQYJf1FKFj95YdRPSqNXSELEnJt200q1Te6ehe",
        "customer-email": "customer_002@gmail.com"
    });
};

export default StripePricingTable;