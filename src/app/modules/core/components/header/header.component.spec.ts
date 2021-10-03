import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            url: '/test-url',
            events: of(new NavigationEnd(1, 'test-url', 'test-url')),
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            firstChild: {
              snapshot: {
                data: { title: 'Seznam studentů' },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 tag with app title "Students"', () => {
    const appTitle = 'Students';
    const headerComponent = fixture.nativeElement as HTMLElement;
    const h1 = headerComponent.querySelector('h1')!;

    expect(h1.textContent).toEqual(appTitle);
  });

  it('should render h2 tag with page title "Seznam studentů"', waitForAsync(() => {
    const pageTitle = 'Seznam studentů';
    const headerComponent = fixture.nativeElement as HTMLElement;
    const h2 = headerComponent.querySelector('h2')!;

    expect(h2.textContent).toEqual(pageTitle);
  }));
});
