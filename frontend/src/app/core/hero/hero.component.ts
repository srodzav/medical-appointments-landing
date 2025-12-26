import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  features = [
    { icon: 'verified', text: 'Especialistas certificados' },
    { icon: 'schedule', text: 'Horarios flexibles' },
    { icon: 'payments', text: 'Planes de financiamiento' },
  ];
}
