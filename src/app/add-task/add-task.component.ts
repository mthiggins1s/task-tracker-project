import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskText = ''; // Bound to the input field
  tasks: string[] = [] // Stores all submitted tasks

  onButtonClick() {
    if (this.taskText.trim()) { // if text is typed into the input field
      this.tasks.push(this.taskText.trim()) // adds text to the list
      this.taskText = ''; // clears the input upon entered task
    }
  }
}
