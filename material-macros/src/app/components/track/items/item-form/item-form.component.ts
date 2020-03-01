import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { UserFoodItem } from 'src/app/model/items';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements AfterViewInit {
  @ViewChild('form', {static: false}) private form: NgForm;
  @Input() public userFoodItem: UserFoodItem;
  @Output() private formInvalidityChanged = new EventEmitter<boolean>();
  private formValueChangesSubscription: Subscription;

  ngAfterViewInit() {
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(() => {
      this.formInvalidityChanged.emit(this.form.invalid);
    })
  }

  ngOnDestroy() {
    this.formValueChangesSubscription.unsubscribe();
  }
}
