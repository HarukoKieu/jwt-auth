import fs from "fs";
import path from "path";

const templatesDir = path.join(process.cwd(), "src/mail//templates");

const stylesPath = path.join(process.cwd(), "src/mail/styles/emailStyles.css");

const styles = fs.readFileSync(stylesPath, "utf-8");

export const renderTemplate = (templateFile, replacements = {}) => {
  const templatePath = path.join(templatesDir, templateFile);

  let html = fs.readFileSync(templatePath, "utf-8");

  // inject css
  html = html.replace("{{styles}}", styles);

  // inject variables
  Object.entries(replacements).forEach(([key, value]) => {
    html = html.replaceAll(`{{${key}}}`, value);
  });

  return html;
};
