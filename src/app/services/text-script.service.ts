import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { ScriptFilter, TextScript } from '../interfaces/text-script';
@Injectable({
  providedIn: 'root'
})
export class TextScriptService {

  private url = `${environment.API_URL}/quran/verses/indopak`; // This endpoint is for getting indopak script

  constructor(private http: HttpClient) { }

  getIndoPakScript(params: ScriptFilter): Observable<TextScript> {
    let qp = new HttpParams();
    if (params.chapterNumber) {
      qp = qp.append('chapter_number', params.chapterNumber);
    }
    if (params.juzNumber) {
      qp = qp.append('juz_number', params.juzNumber);
    }
    if (params.pageNumber) {
      qp = qp.append('page_number', params.pageNumber);
    }
    if (params.hizbNumber) {
      qp = qp.append('hizb_number', params.hizbNumber);
    }
    if (params.rubNumber) {
      qp = qp.append('rub_number', params.rubNumber);
    }
    if (params.verseKey) {
      qp = qp.append('verse_key', params.verseKey);
    }
    return this.http.get<any>(this.url, { params: qp }).pipe(
      map((res) => {
        let verses = res.verses.map((verse: any) => {
          let mappedVerse = {
            id: verse?.id,
            verseKey: verse?.verse_key,
            textIndopak: verse?.text_indopak,
          }
          return mappedVerse;
        });
        let ret: TextScript = { verses: verses, filters: {} };
        if (res.meta.chapter_number) {
          ret.filters.chapterNumber = res.meta.chapter_number;
        }
        if (res.meta.juz_number) {
          ret.filters.juzNumber = res.meta.juz_number;
        }
        if (res.meta.page_number) {
          ret.filters.pageNumber = res.meta.page_number;
        }
        if (res.meta.hizb_number) {
          ret.filters.hizbNumber = res.meta.hizb_number;
        }
        if (res.meta.rub_number) {
          ret.filters.rubNumber = res.meta.rub_number;
        }
        if (res.meta.verse_key) {
          ret.filters.verseKey = res.meta.verse_key;
        }
        return ret;
      })
    )
  }
}
