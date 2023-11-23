import Email from "email-templates";
import transporter from "./transporter.js";
import config from "../../config/env.js";

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SendEmail = async ({
  template,
  to,
  locals,
  sender_name = "Medicare",
  attachments = [],
}) => {
  const email = new Email({
    message: {
      from: `${sender_name}`,
    },
    send: true,
    transport: transporter,
    juice: true,
    juiceResources: {
      preserveImportant: true,
      preserveFontFaces: true,
      webResources: {
        relativeTo: path.join(__dirname, "../../../emails/assets"),
        images: true,
      },
    },
    preview: false,
  });

  const currentYear = new Date().getFullYear();

  const newLocals = {
    ...locals,
    year: currentYear,
    support_email: config.EMAIL_USERNAME,
    app_name: "Medicare",
  };

  try {
    const response = await email.send({
      template,
      message: {
        to,
        attachments,
      },
      locals: newLocals,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default SendEmail;
