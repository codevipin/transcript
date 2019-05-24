import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { UtilsService } from '../services/utils.service';
import { resolve } from 'url';

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
    const promise = new Promise((resolve, reject) => {
      this.http.get(transcriptUrl)
      .toPromise()
      .then(response => {
        const data = response.json()
        const sortDataOnTime = UtilsService.sortOnTime(data);
        const transcripts = UtilsService.combineUtterance(sortDataOnTime);
        resolve(transcripts);
      })
      .catch(error => {
        reject(error)
      })
    });

    return promise;
  }
}
