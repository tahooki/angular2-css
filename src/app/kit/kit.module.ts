import { NgModule } from '@angular/core';
import { ModulesModule } from './modules/modules.module';
import { PipeModule } from './pipe/pipe.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [
    ModulesModule,
    PipeModule,
    DirectivesModule
  ],
  declarations: []
})
export class KitModule { }
