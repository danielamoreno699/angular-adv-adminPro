import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { AuthModule } from './auth/auth.module';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [

    // path : '/dashboard': pagesRouting
    
    // path : '/auth' : 'authRouting
    // path : '/medicos': MedicosRouting
    //path : '/compras' : ComprasRouting
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    { path: '**', component: NotpagefoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule, AuthModule ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
