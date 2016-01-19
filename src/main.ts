/**
 * Created by emasion on 2016-01-17.
 */

import {Component, View} from "angular2/core";
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
/* jui button */
import {JuiButton} from './components/button/button';
export * from './components/button/button';

@Component({
    selector: 'app'
})
@View({
    // 진입점입니다. 이 부분은 어떤식으로 구성할지 고민을 좀 해야겠네요.
    template: `
      <jui-button type="radio" class="group">
        <a class="btn small" value="true">On</a>
        <a class="btn small" value="false">Off</a>
      </jui-button>
    `,
    directives: [
        JuiButton
    ]
})
export class App {
}


document.addEventListener('DOMContentLoaded', function main() {
    bootstrap(App);
});