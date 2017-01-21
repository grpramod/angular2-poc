import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div class="jumbotron">
			<h1> Welcome to Angular 2 App!</h1>
		</div>
	`,
	styles: [`
		.jumbotron {
			color: red;
		}
	`]
})
export class AppComponent {}

