import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    NgbModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    NgbModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class SharedModule {}
