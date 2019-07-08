import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'equipes', loadChildren: './pages/equipes/equipes.module#EquipesPageModule' },
  { path: 'funcionarios', loadChildren: './pages/funcionarios/funcionarios.module#FuncionariosPageModule' },
  { path: 'ferias', loadChildren: './pages/ferias/ferias.module#FeriasPageModule' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },
  { path: 'endereco', loadChildren: './pages/endereco/endereco.module#EnderecoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
