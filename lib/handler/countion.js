const db = require("../../db/db_config");

function countion(client, message, number, pushname) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT countion FROM users WHERE number = ?",
      [number],
      (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        for (let i = 0; i < res.length; i++) {
          const countion = res[i].countion;
          if (countion === 2) {
            client.sendMessage(
              message.from,
              `Halo *${pushname}*, sayangnya kamu telah di banned karena telah melakukan pelanggaran, chat admin untuk bantuan\nwa.me/6282127264639`
            );
            resolve(false);
            return;
          }
        }
        resolve(true);
      }
    );
  });
}

module.exports = countion;
