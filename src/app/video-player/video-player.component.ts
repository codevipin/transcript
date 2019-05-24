import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit {

  id:string = '4d79041e-f25f-421d-9e5f-3462459b9934';
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.navigate([''], { queryParams: { id:this.id } });
    // Although the id is hard-coded in this case and we could directly fetch the data,
    // but normally in our we have to get it from the query params,thence I am doing this
    this.route.queryParams
    .subscribe(params => {
      
      //fetch the details for the particular id
    })
  }

}
