import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() public initials: string;

  public colors: string;

  public static nextColorIndex = 0;

  public static readonly colorPalette = [
    'bg-red-100 text-red-400',
    'bg-blue-100 text-blue-400',
    'bg-green-100 text-green-500',
    'bg-yellow-100 text-yellow-500',
    'bg-purple-100 text-purple-400',
  ];

  ngOnInit(): void {
    this.setColors();
  }

  private setColors(): void {
    const { colorPalette, nextColorIndex } = AvatarComponent;
    this.colors = colorPalette[nextColorIndex];
    AvatarComponent.nextColorIndex = (nextColorIndex + 1) % colorPalette.length;
  }
}
