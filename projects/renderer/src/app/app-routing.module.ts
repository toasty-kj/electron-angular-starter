import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page/home-page.component'

const ROUTE_TABLE: Routes = [{ path: '', component: HomePageComponent }]

@NgModule({
  imports: [RouterModule.forRoot(ROUTE_TABLE)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
