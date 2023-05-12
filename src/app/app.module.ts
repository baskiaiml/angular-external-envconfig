import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExternalconfigService } from './externalconfig.service';

const extEnvConfig = (config:ExternalconfigService)=>{
  return()=>{
    config.loadConfig();
    return config.initialize();
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ExternalconfigService,
    {
      provide:APP_INITIALIZER,
      useFactory:extEnvConfig,
      multi: true,
      deps:[ExternalconfigService]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
