import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationLink } from '../models/navigation-link-model';
import { NavigationService } from '../services/navigation.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  navLinks: Observable<NavigationLink[]>;

  public constructor(private navService: NavigationService) {}

  public ngOnInit(): void {
    this.navLinks = this.navService.navLinks$();
    this.navService.navLinks$().subscribe((data) => console.log(data));
  }
}
