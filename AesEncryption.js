////// Hemant Rathore ////
class AesEncryption{
    constructor(keySize = 256, ivSize = 128, iterations = 100){
        this.keySize = keySize;
        this.ivSize = ivSize;
        this.iterations = iterations;
    }

    encryption(message = "Hi", password = "Secret Password"){
        const salt = CryptoJS.lib.WordArray.random(128 / 8);

        const key = CryptoJS.PBKDF2(password, salt, {
            keySize: this.keySize / 32,
            iterations: this.iterations
        });
    
        const iv = CryptoJS.lib.WordArray.random(128 / 8);
    
        const encrypted = CryptoJS.AES.encrypt(message, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
    
        });
    
        // salt, iv will be hex 32 in length
        // append them to the ciphertext for use  in decryption
        const transitmessage = salt.toString() + iv.toString() + encrypted.toString();
        return transitmessage;
    }

    decryption(transitmessage = "9e08eca7e46220ad4b16ee62b53c7c345bf0034b9d2980e725258fc7dda88ecbKQYLYAKKJNGb25R+FO+cSA==", password = "Secret Password"){
        const salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
        const iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
        const encrypted = transitmessage.substring(64);

        const key = CryptoJS.PBKDF2(password, salt, {
            keySize: this.keySize / 32,
            iterations: this.iterations
        });

        const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC

        })
        return decrypted;
    }
}
