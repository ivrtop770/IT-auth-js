# Js API Model to OTP Verify.
## first you need to approve you server ip to access to this service.
### plaese contact us.

# First Import The Module
```
const Auth = require("ivrtop-auth");
const auth = new Auth();
```

# To send by WhatsApp
```
(async () => {
    // Step 1: send the code by whatsapp
    let whatsapp = auth.whatsapp("1234567890")  // Replace "1234567890" with the actual phone number
    let send = await whatsapp.send();
    console.log("sent", send);

    // Step 2: To verify the code.
    let verify = await whatsapp.verify("1234");  // Replace "1234" with the actual code
    console.log("verify",verify);
})();
```


# To send By Phone Call
```
(async () => {
    // Step 1: send the code by phone call
    let call = auth.call("1234567890")  // Replace "1234567890" with the actual phone number
    let send = await call.send();
    console.log("sent", send);

    // Step 2: To verify the code.
    let verify = await call.verify("1234");  // Replace "1234" with the actual code
    console.log("verify",verify);
})();
```

