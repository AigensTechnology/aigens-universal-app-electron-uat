"use strict";
(self["webpackChunkdevice"] = self["webpackChunkdevice"] || []).push([["projects_test_src_app_test_lazy-form_component_ts"],{

/***/ 19098:
/*!***********************************************************!*\
  !*** ./projects/test/src/app/test/lazy-form.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyFormComponent": () => (/* binding */ LazyFormComponent),
/* harmony export */   "LazyFormModule": () => (/* binding */ LazyFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 43365);












function LazyFormComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getNameErrorMessage());
} }
function LazyFormComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getEmailErrorMessage());
} }
class LazyFormComponent {
    constructor() {
        this.buttonTitle = "Submit";
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.simpleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
        });
    }
    get name() {
        return this.simpleForm.get("name");
    }
    get email() {
        return this.simpleForm.get("email");
    }
    submitForm() {
        /*
        if (this.email?.invalid || this.name?.invalid) return;
        this.backendService.submitForm();
        this.formSubmitted.emit();
        */
        alert("Form submitted successfully");
    }
    ngOnInit() {
    }
    getNameErrorMessage() {
        var _a, _b;
        if ((_a = this.name) === null || _a === void 0 ? void 0 : _a.hasError("required")) {
            return "You must enter a value";
        }
        return ((_b = this.email) === null || _b === void 0 ? void 0 : _b.hasError("email")) ? "Not a valid email" : "";
    }
    getEmailErrorMessage() {
        var _a, _b;
        if ((_a = this.email) === null || _a === void 0 ? void 0 : _a.hasError("required")) {
            return "You must enter a value";
        }
        return ((_b = this.email) === null || _b === void 0 ? void 0 : _b.hasError("email")) ? "Not a valid email" : "";
    }
}
LazyFormComponent.ɵfac = function LazyFormComponent_Factory(t) { return new (t || LazyFormComponent)(); };
LazyFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LazyFormComponent, selectors: [["app-lazy-form"]], inputs: { buttonTitle: "buttonTitle" }, outputs: { formSubmitted: "formSubmitted" }, decls: 13, vars: 4, consts: [[2, "margin", "50px", 3, "formGroup", "submit"], ["appearance", "fill"], ["matInput", "", "placeholder", "John", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "john@example.com", "formControlName", "email", "required", ""], ["type", "submit", "mat-raised-button", "", "color", "accent"]], template: function LazyFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LazyFormComponent_Template_form_submit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LazyFormComponent_mat_error_5_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LazyFormComponent_mat_error_10_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.simpleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == null ? null : ctx.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonTitle, " ");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], encapsulation: 2 });
class LazyFormModule {
    constructor() {
    }
}
LazyFormModule.ɵfac = function LazyFormModule_Factory(t) { return new (t || LazyFormModule)(); };
LazyFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LazyFormModule, bootstrap: [LazyFormComponent] });
LazyFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyFormModule, { declarations: [LazyFormComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_test_src_app_test_lazy-form_component_ts.js.map