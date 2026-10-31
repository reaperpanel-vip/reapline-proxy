const { onRequest } = require("firebase-functions/v2/https");

exports.exec = onRequest(async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    res.status(400).send("Hata: ?url= parametresi eksik.");
    return;
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "v2rayNG/Happ"
      }
    });
    const textContent = await response.text();

    res.set("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(textContent);
  } catch (error) {
    res.status(500).send("Hata oluştu: " + error.message);
  }
});
