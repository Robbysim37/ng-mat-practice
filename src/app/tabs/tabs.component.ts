import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  tabChange = () => {
    console.log("tab changed!")
  }
}
