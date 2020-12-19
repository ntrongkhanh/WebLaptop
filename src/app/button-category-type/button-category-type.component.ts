import { Component, OnInit, Input } from '@angular/core';
import { fileURLToPath } from 'url';

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
}
