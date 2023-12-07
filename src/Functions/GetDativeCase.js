export function getDativeCase(name) {
    const endings = {
        а: "е",
        я: "е",
        о: "у",
        е: "е",
        и: "и",
        ы: "е",
        ё: "ю",
        у: "у",
        й: "ю"
    };

    const lastLetter = name.charAt(name.length - 1);

    if (endings.hasOwnProperty(lastLetter)) {
        return name.slice(0, -1) + endings[lastLetter];
    } else {
        return name + "е";
    }
}