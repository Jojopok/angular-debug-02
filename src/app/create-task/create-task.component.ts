import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  constructor(private formBuilder: FormBuilder) {}

  @Output() newTask: EventEmitter<Task> = new EventEmitter();

  taskForm = this.formBuilder.group({
    content: ['', Validators.required],
    done: [false]
  });

  sendTaskToApp() {
    this.newTask.emit(this.taskForm.value as Task);
    this.taskForm.reset({ content: '', done: false });
  }
}
