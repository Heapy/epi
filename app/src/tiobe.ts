export const tiobe: Tiobe = require("../../tiobe.json");

type Tiobe = TiobeMonth[];

interface TiobeMonth {
    readonly date: string;
    readonly data: TiobeLanguage[];
}

interface TiobeLanguage {
    readonly position: number;
    readonly name: string;
    readonly rating: string;
}
