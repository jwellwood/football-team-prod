const emailTemplate = (
  header,
  image,
  link,
  linkText,
  mainText,
  secondaryText
) => {
  return `<!DOCTYPE html>
  <html style="margin: 0; padding: 0;">
    <head>
      <title>Email</title>
    </head>
  
    <body
      style="
        margin: 0;
        padding: 0;
        background: #263238;
        font-family: sans-serif;
        text-align: center;
      "
    >
      <table
        class="table"
        cellpadding="0"
        cellspacing="0"
        style="
          background-color: rgba(0, 0, 0, 0.5);
          empty-cells: hide;
          margin: 0 auto;
          padding: 0;
          width: 600px;
        "
      >
        <tr>
          <td style="background-color: #263238; margin: 0 auto;">
            <h1
              style="
                box-sizing: border-box;
                color: #fff;
                margin: 0;
                padding: 15px 25px;
                text-align: center;
              "
            >
              <em>Madrid</em>
              <span style="font-weight: lighter; color: #e53935;"
                ><em>reds</em></span
              >
            </h1>
            <img
              src="https://www.iflmadrid.com/sites/default/files/styles/thumbnail/public/team/logo/branch_liverpool2.jpg?itok=4aEJUTA_"
              style="width: 60px; height: 60px; border-radius: 50%;"
            />
            <hr style="background-color: #e53935;" />
            <h3 style="background-color: #263238; color: #fff;">${header}</h3>
          </td>
        </tr>
       ${
         image
           ? `<tr>
          <td style="margin: 0 auto;">
            <img
              class="full-width"
              src="${image}"
              alt="email"
              style="vertical-align: sub; width: 100%;"
            />
          </td>
        </tr> `
           : null
       }
        <tr>
          <td style="margin: 0 auto;">
            <p style="font-weight: bold; color: #fff;">
              ${mainText}
            </p>
            <div style="margin: 20px auto;">
              <a
                style="
                  background-color: #e53935;
                  color: #fff;
                  margin: 20px auto;
                  font-weight: 900;
                  padding: 10px;
                  border: 3px solid #e53935;
                  border-radius: 8px;
                  text-decoration: none;
                "
                href="${link}"
                target="_blank"
              >
                ${linkText}
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background-color: #263238; margin: 0 auto;">
            <p
              style="
                box-sizing: border-box;
                color: #ccc;
                font-family: Helvetica, Arial, sans-serif;
                letter-spacing: 0.5px;
                line-height: 1.4;
                margin: 0;
                padding: 15px 25px;
                text-align: center;
                text-transform: uppercase;
                font-size: 10px;
              "
            >
              ${secondaryText}
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

module.exports = { emailTemplate };
