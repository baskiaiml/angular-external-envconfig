import { Component, OnInit } from '@angular/core';
import { ExternalconfigService } from './externalconfig.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public service: ExternalconfigService){

  }
  ngOnInit(): void {
    console.log("This is app component log")
   console.log(`${this.service.getExtEnvConfig().apiGatwayURL}`)
   console.log("Gateway URL loaded")
  }
  title = 'angular-external-envconfig';
}
