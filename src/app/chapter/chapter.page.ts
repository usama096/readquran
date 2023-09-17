import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../interfaces/chapter';
import { ChapterService } from './../services/chapter.service';
import { TextScriptService } from '../services/text-script.service';
import { TextScript } from '../interfaces/text-script';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {
  chapter!: TextScript;
  chapterId:number = 0;
  constructor(private route: ActivatedRoute, private textScriptService: TextScriptService) { }

  ngOnInit() {
   this.chapterId = +this.route.snapshot.paramMap.get('chapterId')!;
    this.getChapter();
  }

  getChapter() {
    this.textScriptService.getIndoPakScript({ chapterNumber: this.chapterId }).subscribe(res => {
      if (res) {
        this.chapter = res;
      }
    })
  }
}
