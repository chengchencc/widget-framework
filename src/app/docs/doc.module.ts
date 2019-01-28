import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DocComponent } from './doc.component';
import { DocRoutingModule } from './doc-routing.module';

import 'marked';
import 'prismjs/themes/prism-okaidia.css';

import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

import 'prismjs/prism.js';

import { MarkdownModule } from 'ngx-markdown';

import 'prismjs/components/prism-csharp.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-javascript.min.js';

import "prismjs/plugins/line-highlight/prism-line-highlight.js";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DocRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  declarations: [DocComponent]
})
export class DocModule { }
