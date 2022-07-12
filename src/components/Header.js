import React from 'react';
import { useTranslation } from "react-i18next";

export default function Header() {
    const[t, i18n]=useTranslation("global");
    return(
        <>
        <center>
        <div>
            <p>{t("header.hello-word")}</p>
            <br/><br/>
        </div>
        </center>
        </>
    );
}
