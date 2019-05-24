import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.sass']
})
export class TranscriptComponent implements OnInit {
  @Input() transcript; 
  constructor() { }

  ngOnInit() {
    console.log(this.transcript)
  }

}
