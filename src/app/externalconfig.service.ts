import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as localConfig from '../app/config/envconfig.json';


@Injectable()
export class ExternalconfigService {
  private extEnvConfig: any;
  constructor(private http: HttpClient) { }

  loadConfig() {
    this.http.get('/app/config/envconfig.json', { responseType: 'json' }).subscribe(data => {
      console.log(data);
      console.log("Load from URL->", data);
      return this.extEnvConfig = JSON.parse(JSON.stringify(data));
    }, error => {
      console.log("error");
      this.extEnvConfig = localConfig;
    }, () => { });
}

initialize(): Promise < void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log('AppInitService initialized');
      resolve();
    }, 1000);
  });
}

getExtEnvConfig(){
  return this.extEnvConfig;
}
}
