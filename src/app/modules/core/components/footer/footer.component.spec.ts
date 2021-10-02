import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain current year', () => {
    const currentYear = moment().format('Y');
    const footerElement = fixture.nativeElement as HTMLElement;
    const p = footerElement.querySelector('p')!;
    expect(p.textContent).toContain(currentYear);
  });
});
