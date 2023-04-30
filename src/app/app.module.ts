import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectsComponent } from './projects/projects.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { MatDividerModule } from '@angular/material/divider';
import { B1LoadBalancerComponent } from './blog/blogs/b1-load-balancer/b1-load-balancer.component';
import { B2AuthenticationAppComponent } from './blog/blogs/b2-authentication-app/b2-authentication-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    BlogComponent,
    B1LoadBalancerComponent,
    B2AuthenticationAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
