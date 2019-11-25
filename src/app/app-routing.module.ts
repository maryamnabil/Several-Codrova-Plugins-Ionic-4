import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  { path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'barcode-scanner', loadChildren: './pages/barcode-scanner/barcode-scanner.module#BarcodeScannerPageModule' },  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
