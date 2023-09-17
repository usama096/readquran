import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Juzz } from '../interfaces/juzz';

@Injectable({
  providedIn: 'root'
})
export class JuzService {
  private url = `${environment.API_URL}/juzs`;

  constructor(private http: HttpClient) { }

  getChapterInfo(): Observable<Array<Juzz>> {
    return this.http.get<any>(this.url).pipe(
      map((res) => {
        let juzs = res.juzs.map((juz: any) => {
          let mappedjuz = {
            id: juz?.id,
            juzNumber: juz?.juz_number,
            verseMapping: juz?.verse_mapping,
            lastVerseId: juz?.last_verse_id,
            versesCount: juz?.verses_count,
          }
          return mappedjuz;
        })
        return juzs;
      })
    )
  }
}

