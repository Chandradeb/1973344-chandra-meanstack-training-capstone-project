import { Component } from '@angular/core';
import { AdminAuthService } from './services/admin-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'captsone-project';

  constructor(public adminAuthService: AdminAuthService) { }

  ngOnInit() {
  }

  logout() {
    this.adminAuthService.adminLogout()
  }
}
