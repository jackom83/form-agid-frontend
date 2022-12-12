import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  public viewFrontOffice(): boolean {
    return (
      this.authService.userInfo &&
      this.authService.userInfo.user_policy &&
      ((this.authService.userInfo.user_policy[0].policy.role === 'CITTADINO' &&
        this.authService.userInfo.user_policy[0].policy.status === 'Active') ||
        this.authService.userInfo.user_policy[0].policy.role === 'RTD')
    );
  }

  public viewSuperAdminPages(): boolean {
    return (
      this.authService.userInfo &&
      this.authService.userInfo.user_policy &&
      this.authService.userInfo.user_policy[0].policy.role === 'SUPER_ADMIN'
    );
  }

  routerNavigate(path: string) {
    this.router.navigate([`/`.concat(path)], {
      relativeTo: this.route,
    });
  }
}