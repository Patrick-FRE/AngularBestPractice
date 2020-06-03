import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { LimitCharPipe } from './pipes/limit-char.pipe';
import { ChangeColorIntervalDirective } from './directive/change-color-interval.directive';
import { MyPipePipe } from '../my-pipe.pipe';

@NgModule({
  declarations: [
    ModalComponent,
    LimitCharPipe,
    ChangeColorIntervalDirective,
    MyPipePipe,
  ],
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    CommonModule,
    ModalComponent,
    LimitCharPipe,
    ChangeColorIntervalDirective,
    MyPipePipe,
  ],
})
export class SharedModule {}
