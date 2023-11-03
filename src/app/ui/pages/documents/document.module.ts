import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

const routes =RouterModule.forChild( [

  {
    path: "taru",
    loadChildren: () =>
    import('./taru/taru.module').then((m) => m.TaruModule)
  }
]);

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatIconModule,

    MatButtonModule,
    FlexLayoutModule,
    routes
  ]
})
export class DocumentModule { }
