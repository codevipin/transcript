import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TranscriptComponent } from './video-player/transcript/transcript.component';
import { FooterComponent } from './footer/footer.component';

import { PlayerMetadataService } from './services/player-metadata.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    TranscriptComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlayerMetadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
