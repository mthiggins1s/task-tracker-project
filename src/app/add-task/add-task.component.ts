import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskText = ''; // bound to the input field; i.e the current input value
  tasks: string[] = [] // holds all submitted tasks; every time the button is clicked, a new task gets added to the list

  onButtonClick() {
    if (this.taskText.trim()) { // checks if text is typed into the input field and removes any whitespace
      this.tasks.push(this.taskText.trim()) // adds text to the list and removes whitespace
      this.taskText = ''; // clears the input box once the task is added into the array
    }
  }
}
