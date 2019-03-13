document.getElementById("encryptBtn").addEventListener("click", encryptFunct);
document.getElementById("decryptBtn").addEventListener("click", decryptFunct);

let encrypt = new AesEncryption();

function encryptFunct() {
    const encrypted = encrypt.encryption(document.getElementById('normalText').value, document.getElementById('pwdEn').value);
    document.getElementById('encryptedText').innerHTML=`Encrypted: ${encrypted}`;
}

function decryptFunct() {
    const decrypted = encrypt.decryption(document.getElementById('encryptedInput').value, document.getElementById('pwdDe').value);
    document.getElementById('decryptedText').innerHTML=`Decrypted: ${decrypted.toString(CryptoJS.enc.Utf8)}`;
    console.log(decrypted);
}
