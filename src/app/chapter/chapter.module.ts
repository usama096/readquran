import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterPageRoutingModule } from './chapter-routing.module';

import { ChapterPage } from './chapter.page';
import { VerseNumberPipe } from '../pipes/verse-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterPageRoutingModule
  ],
  declarations: [ChapterPage,VerseNumberPipe],
  providers:[]
})
export class ChapterPageModule {}
