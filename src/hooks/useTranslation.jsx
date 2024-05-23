import { useEffect, useState } from "react";
import Translation from "../statics/Translation";

export default function useTranslation() {
    const [translation, setTranslation] = useState({
        language: Translation.language,
        isDk: Translation.isDK,
        isEN: Translation.isEN,
        get: (id, subId) => {
            const value = translation.id[id];
            const text = value[subId];
            return text[Translation.language];
        },
        id: Translation.id
    });

    useEffect(() => {
        Translation.events.addListener("change", data => {
            setTranslation((prev) => {
                const lang = data.language;
                if (!prev || prev.language == lang) return prev;
                return {
                    ...translation,
                    language: lang,
                    isDk: () => lang == 'DK',
                    isEN: () => lang == 'EN',
                    get: (id, subId) => {
                        const value = translation.id[id];
                        const text = value[subId];
                        return text[lang];
                    }
                }
            });
        });

        return () => Translation.events.removeAllListeners("change");
    }, []);

    return translation;
}