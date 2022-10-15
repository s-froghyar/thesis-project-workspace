import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';

export class ModelGuard implements CanMatch {
  
    constructor(private readonly router: Router) {}

  canMatch(_: Route, __: UrlSegment[]): boolean | UrlTree {
    const choices =
      JSON.parse(sessionStorage.getItem('model_options') as string) ?? {};

    if (choices.model) {
      return true;
    } else {
      console.warn(
        'No choices were made for the model, redirecting back to selection screen'
      );
      return this.router.parseUrl('');
    }
  }
}
