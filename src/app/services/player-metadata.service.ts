import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerMetadataService {
  private chorusBaseUrl:string = 'https://static.chorus.ai/api/';
  
  constructor(private http: Http) { }

  getVideoUrl(id:string) {
    return `${this.chorusBaseUrl}${id}.mp4`;
  }

  getTranscript(id:string) {
    const transcriptUrl:string = `${this.chorusBaseUrl}${id}.json`;
    return this.http.get(transcriptUrl);
  }
}
