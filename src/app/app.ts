import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  newName: string = "";
  names: string[] = [];
  selectedName: string = "";

  addName() {
    if (this.newName.trim() !== "") {
      this.names.push(this.newName);
      this.newName = "";
    }
  }

  pickRandom() {
    if (this.names.length === 0) {
      alert("Add some names first!");
      return;
    }

    const index = Math.floor(Math.random() * this.names.length);
    this.selectedName = this.names[index];
  }
}