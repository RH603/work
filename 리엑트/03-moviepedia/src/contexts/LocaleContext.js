import { createContext, useState } from "react";

// Context가 제공할 기본값을 받는다.
const LocaleContext = createContext();

function LocaleProvider({ defaultValue = "en", children , }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      {children}
    </LocaleContext.Provider>
  );
}




export default LocaleProvider;
