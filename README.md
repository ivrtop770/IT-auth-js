# Js Model to OTP Verify.
## first you need to approve you server ip to access to this service.
### plaese contact us.


# To send a WhatsApp message
```
const Auth = require("ivrtop-auth");

(async () => {
    const auth = new Auth();
    let whatsapp = auth.whatsapp("1234567")  # Replace "1234567890" with the actual phone number
    let send = await whatsapp.send();
    console.log("sent", send);
    let verify = await whatsapp.verify("1234");  # Replace "1234" with the actual code
    console.log("verify",verify);
})();
```



# To send a Phone Call
```
const Auth = require("ivrtop-auth");

(async () => {
    const auth = new Auth();
    let call = auth.call("1234567")  # Replace "1234567890" with the actual phone number
    let send = await call.send();
    console.log("sent", send);
    let verify = await call.verify("1234");  # Replace "1234" with the actual code
    console.log("verify",verify);
})();
```

