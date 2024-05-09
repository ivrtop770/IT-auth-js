class Auth {
    constructor() {
        this.base_url = "https://auth.ivrtop.co.il/";
    }

    whatsapp(phone) {
        return {
            phone,
            send: async () => {
                const response = await fetch(this.base_url + "whatsapp/" + phone);
                return response.json();
            },
            verify: async (code) => {
                const response = await fetch(this.base_url + "whatsapp/" + phone, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ code })
                });
                return response.json();
            }
        };
    }

    call(phone) {
        return {
            phone,
            send: async () => {
                const response = await fetch(this.base_url + "call/" + phone);
                return response.json();
            },
            verify: async (code) => {
                const response = await fetch(this.base_url + "call/" + phone, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ code })
                });
                return response.json();
            }
        };
    }
}

module.exports = Auth;
