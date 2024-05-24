import { EventEmitter } from "fbemitter";

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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
            "title": {
                "DK": "Hvad er Club Curious?",
                "EN": "What is Club Curious?"
            },
            "description": {
                "DK": loremIpsum,
                "EN": loremIpsum
            },
        },
        
        "footer": {
            "socials": {
                "DK": "Følg os!",
                "EN": "Follow us!"
            },
            "newsletter": {
                "DK": "Nyhedsbrev",
                "EN": "Newsletter"
            },
            "address": {
                "DK": "Adresse",
                "EN": "Address"
            },
        },
    };

    static events = new EventEmitter();
}

export default Translation;