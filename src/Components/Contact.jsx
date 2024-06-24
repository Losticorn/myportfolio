import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-text">
          <h1>{t("contact.header")}</h1>
          <p>{t("contact.line1")}</p>
          <p>{t("contact.line2")}</p>
          <p>{t("contact.line3")}</p>
        </div>
      </section>
    </>
  );
}

export default Contact;
