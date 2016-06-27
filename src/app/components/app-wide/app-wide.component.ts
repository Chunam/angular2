import {Component, OnInit} from '@angular/core';
import {Logger} from '../../services/logger.service';

@Component({
  moduleId: module.id,
  selector: 'app-app-wide',
  templateUrl: 'app-wide.component.html',
  styleUrls: ['app-wide.component.css']
})
export class AppWideComponent implements OnInit {
  public redirectToUrl: String = '';

  constructor(private log: Logger) { log.info('Instantiating AppWideComponent'); }

  ngOnInit() {}
}
