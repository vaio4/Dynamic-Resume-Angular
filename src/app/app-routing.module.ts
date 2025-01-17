import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainwrapperComponent } from './components/mainwrapper/mainwrapper.component';

const routes: Routes = [
  {path:'', component: MainwrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      anchorScrolling: 'enabled',         
      scrollPositionRestoration: 'enabled' 
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
