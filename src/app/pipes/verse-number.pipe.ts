import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verseNumber'
})
export class VerseNumberPipe implements PipeTransform {

  transform(verseKey: string): string {
    return verseKey.split(':')[1];
  }

}
