import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto'

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
