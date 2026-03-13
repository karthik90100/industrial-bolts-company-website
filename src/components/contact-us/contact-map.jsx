import React from "react";

const ContactMap = () => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <iframe
                title="Foundation Bolts Manufacturer - Royal Anchors"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497413.67870573!2d80.1668684!3d13.0963749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52639395555555%3A0xbe39990a9780ad52!2sFoundation%20Bolts%20Manufacturer%20-%20Royal%20Anchors!5e0!3m2!1sen!2sin!4v1772354490455!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default ContactMap;