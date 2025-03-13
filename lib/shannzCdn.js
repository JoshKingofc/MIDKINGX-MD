/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    M I D K I N G X  ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
  
     
    ⭐ MY ＷＥＢＳＩＴＥ
     Here you go! The link for unbanning with Joshua Mambo:

[Click here to be unbanned on WhatsApp](https://kineboii.github.io/whatsapp_unbanned/)

Dm here 
https://wa.me/qr/RT2SFFHAAAING1

If you have been flagged off 📴 on Whatsapp 

> Joshuamambo1 NetKing ❤️‍🔥 
> Always be with you
     

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { shannzCdn }
