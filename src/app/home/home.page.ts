import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../services/chapter.service';
import { Chapter } from '../interfaces/chapter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  chapters:Chapter[] = [];
  constructor(private chapterService: ChapterService) { }

  ngOnInit(): void {
    this.getAllChapters();
  }

  getAllChapters(): void {
    this.chapterService.getAllChapters().subscribe(res => {
      if(res){
        this.chapters = res;
      }
    })
  }
}
