import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
  styleUrls: ['./inner-html-binding.component.scss']
})
export class InnerHtmlBindingComponent {

  htmlSnippet:string = "";
  trustedHtmlSnippet:any;
  constructor(private sanitizer: DomSanitizer ) {
     this.htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
     this.trustedHtmlSnippet = sanitizer.bypassSecurityTrustScript(this.htmlSnippet).toString();

  }
 // For example, a user/attacker-controlled value from a URL.


}
