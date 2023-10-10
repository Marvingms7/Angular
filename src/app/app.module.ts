import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningArletComponent } from './warning-arlet/warning-arlet.component';
import { SuccessArletComponent } from './success-arlet/success-arlet.component';
import { TaskdatabindingComponent } from './taskdatabinding/taskdatabinding.component';
import { TaskdirectivesComponent } from './taskdirectives/taskdirectives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningArletComponent,
    SuccessArletComponent,
    TaskdatabindingComponent,
    TaskdirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
