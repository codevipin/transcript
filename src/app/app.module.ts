import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TranscriptComponent } from './video-player/transcript/transcript.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    TranscriptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
