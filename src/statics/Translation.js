import { EventEmitter } from "fbemitter";

class Translation {
    static initialize = () => {
        const savedLang = localStorage.getItem("site_lang");
        if (!savedLang) return;
        this.set(savedLang);
    }

    static language = 'DK';

    static isDK = () => this.language == 'DK';
    static isEN = () => this.language == 'EN';

    static get = (id, subId) => {
        const value = this.id[id];
        const text = value[subId];
        return text[lang ? lang : this.language];
    }

    static set = (lang) => {
        this.language = lang;
        localStorage.setItem("site_lang", lang);
        this.events.emit("change", this);
    };

    // et object der indeholder alle translations i struktureret form 
    static id = {
        "navbar": {
            "home": {
                "DK": "Hjem",
                "EN": "Home"
            },

            "events": {
                "DK": "Events",
                "EN": "Events"
            },
            "calender": {
                "DK": "Kalender",
                "EN": "Calender"
            },

            "collab": {
                "DK": "Samarbejde",
                "EN": "Collaboration"
            },
            "community": {
                "DK": "Fællesskab",
                "EN": "Community"
            },
            "sponsor": {
                "DK": "Sponsor",
                "EN": "Sponsor"
            },

            "about": {
                "DK": "Om os",
                "EN": "About us"
            },
            "hours": {
                "DK": "Åbningstider",
                "EN": "Opening hours"
            },
            "gallery": {
                "DK": "Galleri",
                "EN": "Gallery"
            },
            "address": {
                "DK": "Adresse",
                "EN": "Address"
            },

            "contact": {
                "DK": "Kontakt",
                "EN": "Contact"
            },
        },
        
        "frontpage": {
            "info": {
                "DK": "Bla bla bla",
                "EN": "Bla bla bla"
            },
        },
    };

    static events = new EventEmitter();
}

export default Translation;