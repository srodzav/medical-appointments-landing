import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  email: string = '';

  panels = {
    treatments: false,
    services: false,
    subscribe: false,
  };

  togglePanel(name: 'treatments' | 'services' | 'subscribe') {
    this.panels[name] = !this.panels[name];
  }

  onSubmit() {
    if (!this.email) return;
    console.log('Nuevo suscriptor:', this.email);
    this.email = '';
  }
}
