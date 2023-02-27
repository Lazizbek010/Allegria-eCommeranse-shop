import { createI18n } from 'vue-i18n';
import ru from "./ru.json";
import uz from "./uz.json";
import en from "./en.json";

const i18n = createI18n({
    locale: "ru",
    messages:{
        en,
        uz,
        ru
    }
});


export default i18n