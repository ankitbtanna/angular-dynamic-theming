import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
