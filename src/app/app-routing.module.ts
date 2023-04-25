import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { B1LoadBalancerComponent } from './blog/blogs/b1-load-balancer/b1-load-balancer.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
