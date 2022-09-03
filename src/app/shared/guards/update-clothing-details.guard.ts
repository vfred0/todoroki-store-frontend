import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { ProductService } from '@shared/services/product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateClothingDetailsGuard implements CanActivate, CanLoad {
  constructor(
    private productService: ProductService,
    private location: Location
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkExistsProduct();
  }
  private checkExistsProduct() {
    let exists: boolean = this.productService.existsProductForUpdate();
    if (!exists) {
      this.location.back();
    }

    return exists;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkExistsProduct();
  }
}
