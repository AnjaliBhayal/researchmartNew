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
import { ComplaintdataComponent } from './complaintdata/complaintdata.component';
import { CorporategovernanceComponent } from './corporategovernance/corporategovernance.component';
import { RegulatorydisclosuresComponent } from './regulatorydisclosures/regulatorydisclosures.component';
import { StandarddisclosuerComponent } from './standarddisclosuer/standarddisclosuer.component';
import { GrievancehandlingComponent } from './grievancehandling/grievancehandling.component';
import { InvestorsupportComponent } from './investorsupport/investorsupport.component';
import { InvestorcharterComponent } from './investorcharter/investorcharter.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ServicesComponent } from './services/services.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';


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
  },
  {
    path: 'Complaintdata',
    component: ComplaintdataComponent,
    data: { animation: 'Complaintdata' }
  },
  {
    path: 'Corporategovernance',
    component: CorporategovernanceComponent,
    data: { animation: 'Corporategovernance' }
  },
  {
    path: 'Regulatorydisclosures',
    component: RegulatorydisclosuresComponent,
    data: { animation: 'Regulatorydisclosures' }
  },

  {
    path: 'Standarddisclosuer',
    component: StandarddisclosuerComponent,
    data: { animation: 'Standarddisclosuer' }
  },

  {
    path: 'Grievancehandling',
    component: GrievancehandlingComponent,
    data: { animation: 'Grievancehandling' }
  },
  {
    path: 'Investorsupport',
    component: InvestorsupportComponent,
    data: { animation: 'Investorsupport' }
  }

  ,
  {
    path: 'Investorcharter',
    component: InvestorcharterComponent,
    data: { animation: 'Investorcharter' }
  },
  {
    path: 'Disclaimer',
    component: DisclaimerComponent,
    data: { animation: 'Disclaimer' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' }
  },
  {
    path: 'Privacypolicy',
    component: PrivacypolicyComponent,
    data: { animation: 'Privacypolicy' }
  }

  



];

@NgModule({
  declarations: [SampleComponent, HomeComponent, AboutComponent, ComplaintdataComponent, CorporategovernanceComponent, RegulatorydisclosuresComponent, StandarddisclosuerComponent, GrievancehandlingComponent, InvestorsupportComponent, InvestorcharterComponent, DisclaimerComponent, ServicesComponent, PrivacypolicyComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, ToastrModule, TranslateModule, CoreCommonModule, ReactiveFormsModule,
    FormsModule],
  exports: [SampleComponent, HomeComponent, AboutComponent]
})
export class SampleModule { }
