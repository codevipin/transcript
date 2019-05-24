import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlayerMetadataService } from '../services/player-metadata.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  id:string = '4d79041e-f25f-421d-9e5f-3462459b9934';
  videoUrl:string;
  playerPause:boolean = true
  transcripts;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerMetadata: PlayerMetadataService
  ) { }

  ngOnInit() {
    this.router.navigate([''], { queryParams: { id:this.id } });
    // Although the id is hard-coded in this case and we could directly fetch the data,
    // but normally in our we have to get it from the query params,thence I am doing this
    this.route.queryParams
    .subscribe(params => {
      this.videoUrl = this.playerMetadata.getVideoUrl(params.id);
      this.playerMetadata.getTranscript(params.id)
      .then(response => {
        console.log(response);
        this.transcripts = response;
      })
      .catch(error => {
        alert("error fetching the transcipt for id "+ params.id);
      })
    })
  }

  playVideo() {
    console.log(this.videoplayer)
    if(this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play()
      this.playerPause = false
    } else {
      this.videoplayer.nativeElement.pause();
      this.playerPause = true
    }

  }

}
