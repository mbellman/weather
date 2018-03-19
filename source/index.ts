import { AppModule } from '@modules/AppModule';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

// enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
