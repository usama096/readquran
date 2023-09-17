export interface Chapter {
    id: number,
    revelationPlace: string,
    revelationOrder: number,
    bismillahPre: false,
    nameSimple: string,
    nameComplex: string,
    nameArabic: string,
    versesCount: number,
    pages: Array<number>,
    translatedName: TranslatedName
}
export interface TranslatedName {
    language: string,
    name: string
}
