import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-category-type',
  templateUrl: './button-category-type.component.html',
  styleUrls: ['./button-category-type.component.css'],
})
export class ButtonCategoryTypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  @Input('filter-object') filter = {
    title: '',
    detailFilter: [],
  };

  @Output() checkedBox = new EventEmitter();

  async onClickFilter() {
    let filterInstance = await document.getElementById(
      this.filter.title + 'groupCollapse'
    );
    let icon = await document.getElementById(this.filter.title + 'isExtend');

    if (filterInstance.style.display == 'none') {
      console.log('ssss');
      filterInstance.style.display = 'block';
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else if (filterInstance.style.display == 'block'){
      console.log('hva');
      filterInstance.style.display = 'none';
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  }

  getTheText(e, title) {
    let checkbox = e.target;

    let obj = {
      isChecked: e.target.checked,
      value: e.target.value,
      title: title
    }
    
      this.checkedBox.emit(obj);
      console.log(checkbox.value);
  }
}
