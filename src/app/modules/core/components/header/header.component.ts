import { filter } from 'rxjs/operators';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  public appTitle: string = 'Students';

  public pageTitle: string;

  private routerSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routerSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.pageTitle = this.getLastChildRouteTitle();
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private getLastChildRouteTitle(): string {
    let childRoute = this.route.firstChild!;
    while (childRoute) {
      if (!childRoute.firstChild) break;
      childRoute = childRoute.firstChild;
    }
    return childRoute.snapshot.data.title;
  }
}
