import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'
  ]
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  canSave = true;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;

    this.isActive = !this.isActive;
  }

  task = {
    title: 'Review application',
    assignee: {
      name: 'Johan Smith'
    }
  }
}
