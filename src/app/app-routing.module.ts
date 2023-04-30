import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { B1LoadBalancerComponent } from './blog/blogs/b1-load-balancer/b1-load-balancer.component';
import { B2AuthenticationAppComponent } from './blog/blogs/b2-authentication-app/b2-authentication-app.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'blog',
    component: BlogComponent,
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'blog/load-balancer-with-node-docker-ngingx',
    component: B1LoadBalancerComponent,
  },
  {
    path: 'blog/authentication-application-nodejs',
    component: B2AuthenticationAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
