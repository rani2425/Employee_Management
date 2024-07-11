import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EmployeeFormComponent } from './app/components/employee-form/employee-form.component';
import { EmployeeListComponent } from './app/components/employee-list/employee-list.component';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
