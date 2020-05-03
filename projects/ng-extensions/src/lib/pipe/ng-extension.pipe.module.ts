import {NgModule} from "@angular/core";
import {NgExtensionEmptyPipe} from "./common/ng-extension.empty.pipe";
import {NgExtensionJoinPipe} from "./array/ng-extension.join.pipe";
import {NgExtensionFirstPipe} from "./array/ng-extension.first.pipe";
import {NgExtensionLastPipe} from "./array/ng-extension.last.pipe";
import {NgExtensionFlatPipe} from "./array/ng-extension.flat.pipe";
import {NgExtensionPropPipe} from "./type/ng-extension.prop.pipe";
import {NgExtensionUpperPipe} from "./string/ng-extension.upper.pipe";
import {NgExtensionUpperFirstPipe} from "./string/ng-extension.upperfirst.pipe";
import {NgExtensionLowerFirstPipe} from "./string/ng-extension.lowerfirst.pipe";
import {NgExtensionLowerPipe} from "./string/ng-extension.lower.pipe";
import {NgExtensionIsDefinedPipe} from "./type/ng-extension.is-defined.pipe";
import {NgExtensionIsFunctionPipe} from "./type/ng-extension.is-function.pipe";
import {NgExtensionIsIntPipe} from "./type/ng-extension.is-int.pipe";
import {NgExtensionIsNegativePipe} from "./type/ng-extension.is-negative.pipe";
import {NgExtensionIsNullPipe} from "./type/ng-extension.is-null.pipe";
import {NgExtensionIsNumberPipe} from "./type/ng-extension.is-number.pipe";
import {NgExtensionIsPositivePipe} from "./type/ng-extension.is-positive.pipe";
import {NgExtensionIsFloatPipe} from "./type/ng-extension.is-float.pipe";

@NgModule({
  declarations: [
    NgExtensionEmptyPipe,
    NgExtensionFirstPipe,
    NgExtensionFlatPipe,
    NgExtensionJoinPipe,
    NgExtensionLastPipe,
    NgExtensionLowerPipe,
    NgExtensionLowerFirstPipe,
    NgExtensionPropPipe,
    NgExtensionUpperPipe,
    NgExtensionUpperFirstPipe,
    NgExtensionIsDefinedPipe,
    NgExtensionIsFloatPipe,
    NgExtensionIsFunctionPipe,
    NgExtensionIsIntPipe,
    NgExtensionIsNegativePipe,
    NgExtensionIsNullPipe,
    NgExtensionIsNumberPipe,
    NgExtensionIsPositivePipe
  ],
  exports: [
    NgExtensionEmptyPipe,
    NgExtensionFirstPipe,
    NgExtensionFlatPipe,
    NgExtensionJoinPipe,
    NgExtensionLastPipe,
    NgExtensionLowerPipe,
    NgExtensionLowerFirstPipe,
    NgExtensionPropPipe,
    NgExtensionUpperPipe,
    NgExtensionUpperFirstPipe,
    NgExtensionIsDefinedPipe,
    NgExtensionIsFloatPipe,
    NgExtensionIsFunctionPipe,
    NgExtensionIsIntPipe,
    NgExtensionIsNegativePipe,
    NgExtensionIsNullPipe,
    NgExtensionIsNumberPipe,
    NgExtensionIsPositivePipe
  ]
})
export class NgExtensionPipeModule {

}
