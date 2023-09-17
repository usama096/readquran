export interface TextScript {
    verses: Array<ScriptVerse>
    filters: ScriptFilter
}

export interface ScriptVerse {
    id: number,
    verseKey: string,
    textIndopak: string
}

export interface ScriptFilter {
    chapterNumber?: number,
    juzNumber?: number,
    pageNumber?: number,
    hizbNumber?: number,
    rubNumber?: number,
    verseKey?: string
}