import React, { useContext } from "react";
import LanguageSelector from "../LanguageSelector";
import LanguageContext from "../Language.context";

const SecondaryContainer = () =>
{

    const context = useContext(LanguageContext)

    return (
        <div>
            <LanguageSelector changeLanguage={language => context.changeLanguage(language)} />
        </div>
    )
    
}

export default SecondaryContainer