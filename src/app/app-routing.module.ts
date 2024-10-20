import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChantStructuralPage } from './chant-system/chant-system.page';
import { CharactersQuantityPage } from './characters-quantity/characters-quantity.page';
import { HomePage } from './home/home.page';
import { ScalePthongsPage } from './scale-pthongs/scale-pthongs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'scale-pthongs',
    component: ScalePthongsPage,
  },
  {
    path: 'chant-system',
    component: ChantStructuralPage,
  },
  {
    path: 'characters-quantity',
    component: CharactersQuantityPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
