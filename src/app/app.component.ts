import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Declare the properties
  newMessage: string = '';
  messages: string[] = [];

  // Method to add a new message
  addMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';  // Clear the input after adding
    }
  }

  // Method to remove the last message
  removeLastMessage() {
    if (this.messages.length > 0) {
      this.messages.pop();
    }
  }
}
