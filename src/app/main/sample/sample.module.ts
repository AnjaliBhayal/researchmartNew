import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';


const routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },

  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  }

];

@NgModule({
  declarations: [SampleComponent, HomeComponent, AboutComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule,ToastrModule,TranslateModule, CoreCommonModule,ReactiveFormsModule,
  FormsModule],
  exports: [SampleComponent, HomeComponent,AboutComponent]
})
export class SampleModule {}
