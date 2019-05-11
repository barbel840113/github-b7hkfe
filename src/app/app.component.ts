import { Component , OnInit} from '@angular/core';
import { AuthActions, LoggInUsers } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private _store: Store<IAppState>
  ){}

  ngOnInit(): void {
      this._store.dispatch( new LoggInUsers())
  }
  title = 'ui-create-form';
}
