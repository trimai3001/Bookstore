import { Component, OnInit } from '@angular/core';

@Component({
    template: ''
})
export class PageBase implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.refreshPageOnce();
  }

  refreshPageOnce() {
    if (!localStorage.getItem('foo')) { 
        localStorage.setItem('foo', 'no reload') 
        location.reload() 
      } else {
        localStorage.removeItem('foo') 
      }
  }
}
