import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Chapter } from '../interfaces/chapter';
import { ChapterInfo } from '../interfaces/chapter-info';
@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private url = `${environment.API_URL}/chapters`;

  constructor(private http: HttpClient) { }

  getAllChapters(language = 'en'): Observable<Array<Chapter>> {
    return this.http.get<any>(`${this.url}?language=${language}`).pipe(
      map((res) => {
        let chapters = res?.chapters?.map(((chap: any) => {
          let chapter = {
            id: chap?.id,
            revelationPlace: chap?.revelation_place,
            revelationOrder: chap?.revelation_order,
            bismillahPre: chap?.bismillah_pre,
            nameSimple: chap?.name_simple,
            nameComplex: chap?.name_complex,
            nameArabic: chap?.name_arabic,
            versesCount: chap?.verses_count,
            pages: chap?.pages,
            translatedName: {
              name: chap.translated_name?.name,
              language: chap.translated_name?.language_name
            }
          }
          return chapter;
        }))
        return chapters;
      })
    )
  }

  getChapter(chapterId: number, language = 'en'): Observable<Chapter> {
    return this.http.get<any>(`${this.url}/${chapterId}?language=${language}`).pipe(
      map((res) => {
        let chapter = {
          id: res?.id,
          revelationPlace: res?.revelation_place,
          revelationOrder: res?.revelation_order,
          bismillahPre: res?.bismillah_pre,
          nameSimple: res?.name_simple,
          nameComplex: res?.name_complex,
          nameArabic: res?.name_arabic,
          versesCount: res?.verses_count,
          pages: res?.pages,
          translatedName: {
            name: res.translated_name?.name,
            language: res.translated_name?.language_name
          }
        }
        return chapter;
      })
    )
  }

  getChapterInfo(chapterId: number, language = 'en'): Observable<ChapterInfo> {
    return this.http.get<any>(`${this.url}/${chapterId}/info?language=${language}`).pipe(
      map((res) => {
        let chapterInfo = {
          id: res?.id,
          chapterId: res?.chapter_id,
          language: res?.language_name,
          shortText: res?.short_text,
          text: res?.text,
          source: res?.source,
        }
        return chapterInfo;
      })
    )
  }

}
