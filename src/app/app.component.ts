import { Component, AfterViewChecked } from '@angular/core';

import 'bootstrap';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Simulação de emprestimo';

  ngAfterViewChecked() {
    $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
    $("#myModal").modal('show');
 }

}
