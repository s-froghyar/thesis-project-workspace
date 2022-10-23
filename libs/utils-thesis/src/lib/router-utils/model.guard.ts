import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

// tried to implement it but theres a firefox problem with the webpack target so for now I will just leave this here and wit for that to be resolved, and reroute in the model screen's constructor
export class ModelGuard implements CanLoad {
  constructor(private readonly router: Router) {}
  canLoad(_route: Route, _segments: UrlSegment[]): boolean | UrlTree {
    const choices =
      JSON.parse(sessionStorage.getItem('model_options') as string) ?? {};
    console.log(choices);

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
