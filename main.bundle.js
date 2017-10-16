webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @media (min-width: 992px) {\n    .wandbox-menu-left {\n        width: 222px;\n    }\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <wandbox-header></wandbox-header>\n    <div class=\"row\">\n        <div class=\"col-md-2 wandbox-menu-left\">\n            <wandbox-compiler></wandbox-compiler>\n            <wandbox-sponsors></wandbox-sponsors>\n        </div>\n        <div class=\"col-md-10\" id=\"codepanel\">\n            <div class=\"row\">\n                <div class=\"col-md-offset-8 col-md-4\">\n                    <div class=\"wandbox-author\">\n                    </div>\n                </div>\n            </div>\n            <wandbox-editor></wandbox-editor>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_compiler_compiler_component__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_run_compile_service__ = __webpack_require__("../../../../../src/app/components/common/run-compile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_local_storage_service__ = __webpack_require__("../../../../../src/app/components/common/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(compile, storage) {
        this.compile = compile;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__["a" /* EditorComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__["a" /* EditorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__["a" /* EditorComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "editorComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_compiler_compiler_component__["a" /* CompilerComponent */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__components_compiler_compiler_component__["a" /* CompilerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_compiler_compiler_component__["a" /* CompilerComponent */]) === "function" && _b || Object)
    ], AppComponent.prototype, "compilerComponent", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__components_common_run_compile_service__["a" /* RunCompileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__components_common_run_compile_service__["a" /* RunCompileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_common_run_compile_service__["a" /* RunCompileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__components_common_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_common_local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_codemirror_wb_codemirror_component__ = __webpack_require__("../../../../../src/app/components/codemirror/wb-codemirror.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sponsors_sponsors_component__ = __webpack_require__("../../../../../src/app/components/sponsors/sponsors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_compiler_compiler_component__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_compile_compile_component__ = __webpack_require__("../../../../../src/app/components/compile/compile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_editor_tab_editor_tab_component__ = __webpack_require__("../../../../../src/app/components/editor-tab/editor-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_compiler_compiler_service__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_api_compiler_list_service__ = __webpack_require__("../../../../../src/app/components/api/compiler-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_api_template_service__ = __webpack_require__("../../../../../src/app/components/api/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_api_compile_service__ = __webpack_require__("../../../../../src/app/components/api/compile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_common_local_storage_service__ = __webpack_require__("../../../../../src/app/components/common/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_compile_result_tab_compile_result_tab_component__ = __webpack_require__("../../../../../src/app/components/compile-result-tab/compile-result-tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_codemirror_wb_codemirror_component__["a" /* WandboxCodemirrorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_sponsors_sponsors_component__["a" /* SponsorsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_compiler_compiler_component__["a" /* CompilerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_compile_compile_component__["a" /* CompileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_editor_tab_editor_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_compile_result_tab_compile_result_tab_component__["a" /* CompileResultTabComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__components_api_template_service__["a" /* TemplateAPIService */],
                __WEBPACK_IMPORTED_MODULE_13__components_api_compiler_list_service__["a" /* CompilerListAPIService */],
                __WEBPACK_IMPORTED_MODULE_12__components_compiler_compiler_service__["a" /* CompilerService */],
                __WEBPACK_IMPORTED_MODULE_15__components_api_compile_service__["a" /* PostCompileService */],
                __WEBPACK_IMPORTED_MODULE_16__components_common_local_storage_service__["a" /* LocalStorageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/api/compile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCompileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostCompileService = /** @class */ (function () {
    function PostCompileService(http) {
        this.http = http;
    }
    PostCompileService.prototype.postCompile = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.set('Content-Type', 'application/json');
        headers.set('Cache-Control', 'no-cache');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + 'compile.json', param, {
            headers: headers
        });
    };
    PostCompileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], PostCompileService);
    return PostCompileService;
    var _a;
}());

//# sourceMappingURL=compile.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/api/compiler-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompilerListAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompilerListAPIService = /** @class */ (function () {
    function CompilerListAPIService(http) {
        this.http = http;
    }
    CompilerListAPIService.prototype.fetch = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + 'list.json');
    };
    CompilerListAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], CompilerListAPIService);
    return CompilerListAPIService;
    var _a;
}());

//# sourceMappingURL=compiler-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/api/template.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateAPIService = /** @class */ (function () {
    function TemplateAPIService(http) {
        this.http = http;
    }
    TemplateAPIService.prototype.fetch = function (templateName) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + 'template/' + templateName);
    };
    TemplateAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], TemplateAPIService);
    return TemplateAPIService;
    var _a;
}());

//# sourceMappingURL=template.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/codemirror/wb-codemirror.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WandboxCodemirrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_editor_model__ = __webpack_require__("../../../../../src/app/components/editor/editor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_editor_service__ = __webpack_require__("../../../../../src/app/components/editor/editor.service.ts");
/// <reference path='../../../../node_modules/@types/codemirror/index.d.ts' />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WandboxCodemirrorComponent = /** @class */ (function () {
    function WandboxCodemirrorComponent(service, element) {
        var _this = this;
        this.service = service;
        this.element = element;
        this.config = new __WEBPACK_IMPORTED_MODULE_1__editor_editor_model__["a" /* EditorConfigModel */]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.focus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.compileCommand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.codemirror = null;
        service.changeConfig$.subscribe(function (v) {
            _this.codemirror.setOption(v.name, v.value);
        });
        service.changeEditorTab$.subscribe(function (v) {
            _this.value = v;
            _this.codemirror.setValue(v);
        });
    }
    WandboxCodemirrorComponent.prototype.ngAfterViewInit = function () {
        this.codemirrorInit(this.config);
        var codeMirror = this.element.nativeElement;
        codeMirror.classList.add('cm-s-user');
        this.clearHistory();
    };
    WandboxCodemirrorComponent.prototype.clearHistory = function () {
        this.codemirror.getDoc().clearHistory();
    };
    WandboxCodemirrorComponent.prototype.codemirrorInit = function (config) {
        var _this = this;
        this.codemirror = CodeMirror.fromTextArea(this.host.nativeElement, config);
        this.codemirror.setValue(this.value);
        this.codemirror.on('change', function () {
            _this.value = _this.codemirror.getValue();
            _this.change.emit(_this.value);
        });
        this.codemirror.on('focus', function () {
            _this.focus.emit();
        });
        this.codemirror.on('blur', function () {
            _this.blur.emit();
        });
        this.codemirror.setOption('extraKeys', {
            Tab: function (cm) {
                if (cm.somethingSelected()) {
                    cm.execCommand('indentMore');
                    return;
                }
                if (_this.config.indentWithTabs) {
                    cm.execCommand('insertTab');
                }
                else {
                    var tabSize = cm.getOption('tabSize');
                    var spaces = Array(cm.getOption('tabSize') + 1).join(' ');
                    cm.replaceSelection(spaces, 'end', '+input');
                }
            },
            'Shift-Tab': function (cm) {
                cm.execCommand('indentLess');
            },
            'Ctrl-Enter': function (cm) {
                _this.compileCommand.emit();
            },
            'Ctrl-Shift-T': function (cm) {
                console.log('hogehoge');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], WandboxCodemirrorComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__editor_editor_model__["a" /* EditorConfigModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__editor_editor_model__["a" /* EditorConfigModel */]) === "function" && _a || Object)
    ], WandboxCodemirrorComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], WandboxCodemirrorComponent.prototype, "blur", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], WandboxCodemirrorComponent.prototype, "focus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], WandboxCodemirrorComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], WandboxCodemirrorComponent.prototype, "compileCommand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('host'),
        __metadata("design:type", Object)
    ], WandboxCodemirrorComponent.prototype, "host", void 0);
    WandboxCodemirrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wandbox-codemirror',
            styles: ["\n        textarea {\n            display: none;\n        }\n    "],
            template: "\n        <textarea #host></textarea>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__editor_editor_service__["a" /* EditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__editor_editor_service__["a" /* EditorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object])
    ], WandboxCodemirrorComponent);
    return WandboxCodemirrorComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=wb-codemirror.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/language-mime.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mime;
function mime(languageName) {
    return constants.EDITOR_MODE_MAPPING[languageName] || '';
}
// export class LanguageMimePipe implements PipeTransform {
//     transform(value: string) {
//         return EDITOR_MODE_MAPPING[value] || '';
//     }
// }
var constants;
(function (constants) {
    constants.EDITOR_MODE_MAPPING = {
        'C++': 'text/x-c++src',
        'C': 'text/x-csrc',
        'CPP': 'text/x-csrc',
        'D': 'text/x-d',
        'Ruby': 'text/x-ruby',
        'Python': 'text/x-python',
        'Perl': 'text/x-perl',
        'Erlang': 'text/x-erlang',
        'C#': 'text/x-csharp',
        'Haskell': 'text/x-haskell',
        'Bash script': 'text/x-sh',
        'Lua': 'text/x-lua',
        'PHP': 'text/x-php',
        'Lisp': 'text/x-common-lisp',
        'Pascal': 'text/x-pascal',
        'Rust': 'text/x-rustsrc',
        'Java': 'text/x-java',
        'Groovy': 'text/x-groovy',
        'JavaScript': 'text/javascript',
        'CoffeeScript': 'text/x-coffeescript',
        'Elixir': 'text/x-ruby',
        'Scala': 'text/x-scala',
        'Vim script': 'text/x-csrc',
        'Swift': 'text/x-swift',
        'OCaml': 'text/x-ocaml',
        'Go': 'text/x-go',
        'Crystal': 'text/x-crystal',
        'OpenSSL': 'text/x-sh',
    };
})(constants || (constants = {}));
//# sourceMappingURL=language-mime.util.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.storage = localStorage;
    }
    LocalStorageService.prototype.getValue = function (key) {
        return JSON.parse(this.storage.getItem(key));
    };
    LocalStorageService.prototype.setValue = function (key, value) {
        console.log('storage store', key, value);
        this.storage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.removeValue = function (key) {
        this.storage.setItem(key, null);
    };
    LocalStorageService.prototype.hasValue = function (key) {
        return this.getValue(key) != null;
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/run-compile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunCompileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_compile_service__ = __webpack_require__("../../../../../src/app/components/api/compile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RunCompileService = /** @class */ (function () {
    function RunCompileService(compileApi) {
        this.compileApi = compileApi;
        this.runCompileSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    /**
     * Create compile request params
     *
     * @param {string} stdin
     * @param {Array<TabModel>} tabs
     * @param {LanguageModel} language
     * @returns
     * @memberof RunCompileService
     */
    RunCompileService.prototype.run = function (stdin, tabs, language) {
        var code = tabs[0].editorContent;
        var codes = tabs.length > 1 ? tabs.map(function (v) { return ({
            code: v.editorContent,
            file: v.fileName
        }); }) : [];
        var selectCompiler = language.selectedCompiler;
        var compiler = selectCompiler.name;
        var options = selectCompiler.options
            .filter(function (v) {
            return v.type !== 'checkbox' || v.item.checked;
        })
            .filter(function (v) { return v.item.value.length > 0; })
            .map(function (v) { return v.item.value; })
            .join(',');
        var compileOptionRawIndex = selectCompiler.options.findIndex(function (v) { return v.type === 'compile'; });
        var runtimeOptionRawIndex = selectCompiler.options.findIndex(function (v) { return v.type === 'runtime'; });
        var _a = [
            compileOptionRawIndex !== -1 ? selectCompiler.options[compileOptionRawIndex].item.value : undefined,
            runtimeOptionRawIndex !== -1 ? selectCompiler.options[runtimeOptionRawIndex].item.value : undefined,
        ], compilerOptionRaw = _a[0], runtimeOptionRaw = _a[1];
        var request = {
            code: code,
            compiler: compiler,
            options: options,
            save: false,
            stdin: stdin,
            codes: codes,
            'compiler-option-raw': compilerOptionRaw,
            'runtime-option-raw': runtimeOptionRaw
        };
        return this.compileApi.postCompile(request);
    };
    RunCompileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_compile_service__["a" /* PostCompileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_compile_service__["a" /* PostCompileService */]) === "function" && _a || Object])
    ], RunCompileService);
    return RunCompileService;
    var _a;
}());

//# sourceMappingURL=run-compile.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/compile-result-tab/compile-result-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compile-result-tab/compile-result-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"result-container\" *ngIf=\"results.length > 0\">\n    <div class=\"tabbable tabs-left\">\n        <ul class=\"nav nav-tabs\">\n            <li *ngFor=\"let result of results; let i=index;\" [class.active]=\"i === activeIndex\" (click)=\"activationResultTab(i)\">\n                <button type=\"button\" class=\"close\" (click)=\"clickRemoveTab(i)\">×</button>\n                <a data-toggle=\"tab\">#{{result.tabName}}</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane result-window active\">\n            <div class=\"permlink\">\n                <a href=\"#\" class=\"btn btn-default\">\n                    <span class=\"glyphicon glyphicon-share\"></span> Share</a>\n            </div>\n            <div class=\"wandbox-code-window\">\n                <div class=\"wandbox-code-window-code panel panel-default\">\n                    <a id=\"wandbox-resultwindow-code-header-1\" data-toggle=\"collapse\" href=\"#wandbox-resultwindow-code-body\" aria-expanded=\"true\" class=\"\"> Code </a>\n                    <div id=\"wandbox-resultwindow-code-body\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <div class=\"wandbox-resultwindow-compiler\">\n                                <div>\n                                    <p>[{{selectedResult.languageName}}] {{selectedResult.compilerName}}</p>\n                                </div>\n                            </div>\n                            <div class=\"wandbox-resultwindow-code\">\n                                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                                    <li *ngFor=\"let tab of selectedResult.tabs; let i=index;\" [class.active]=\"selectedResult.activeSourceTabIndex === i\" (click)=\"activationSourceTab(i)\">\n                                        <a class=\"\" href=\"#wandbox-resultwindow-code-body-1-0\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"glyphicon glyphicon-file\"></i>\n                                            <span *ngIf=\"i !== 0\">{{tab.fileName}}</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                                <div class=\"tab-content\">\n                                    <div id=\"wandbox-resultwindow-code-body\" role=\"tabpanel\" class=\"tab-pane active\">\n                                        <pre>{{selectedResult.activeTab.editorContent}}</pre>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"wandbox-resultwindow-stdin\">\n                                <pre>{{selectedResult.stdin}}</pre>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"output-window\" *ngIf=\"selectedResult != null\">\n                <!-- <pre class=\"Control\">Start</pre> -->\n                <pre class=\"CompilerMessageE\">{{selectedResult.compilerErrorMessage}}</pre>\n                <pre class=\"StdOut\">{{selectedResult.programOutout}}</pre>\n                <pre class=\"Signal\">{{selectedResult.signalMessage}}</pre>\n                <pre class=\"ExitCode\" *ngIf=\"selectedResult.status !== -1\">{{selectedResult.status}}</pre>\n                <!-- <pre class=\"Control\">Finish</pre> -->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/compile-result-tab/compile-result-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompileResultTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compile_compile_model__ = __webpack_require__("../../../../../src/app/components/compile/compile.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_run_compile_service__ = __webpack_require__("../../../../../src/app/components/common/run-compile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompileResultTabComponent = /** @class */ (function () {
    function CompileResultTabComponent(compileService) {
        this.compileService = compileService;
        this.changeTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.removeTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.emptyTab = new __WEBPACK_IMPORTED_MODULE_1__compile_compile_model__["a" /* CompileResultModel */]();
        this.emptyTab.tabs = [];
        // this.compileService.executeCompile().subscribe(v => {
        //     this.activeIndex = this.results.length - 1;
        // });
    }
    Object.defineProperty(CompileResultTabComponent.prototype, "selectedResult", {
        get: function () {
            return this.results[this.activeIndex] || this.emptyTab;
        },
        enumerable: true,
        configurable: true
    });
    CompileResultTabComponent.prototype.ngOnInit = function () {
    };
    CompileResultTabComponent.prototype.activationSourceTab = function (index) {
        this.selectedResult.activeSourceTabIndex = index;
    };
    CompileResultTabComponent.prototype.activationResultTab = function (index) {
        this.changeTab.emit(index);
    };
    CompileResultTabComponent.prototype.clickRemoveTab = function (index) {
        this.removeTab.emit(index);
        if (this.results.length <= this.activeIndex) {
            this.activationResultTab(this.results.length - 1);
        }
        console.log(this.activeIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CompileResultTabComponent.prototype, "results", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CompileResultTabComponent.prototype, "changeTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CompileResultTabComponent.prototype, "removeTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CompileResultTabComponent.prototype, "activeIndex", void 0);
    CompileResultTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'compile-result-tab',
            template: __webpack_require__("../../../../../src/app/components/compile-result-tab/compile-result-tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compile-result-tab/compile-result-tab.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_run_compile_service__["a" /* RunCompileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_run_compile_service__["a" /* RunCompileService */]) === "function" && _a || Object])
    ], CompileResultTabComponent);
    return CompileResultTabComponent;
    var _a;
}());

//# sourceMappingURL=compile-result-tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/compile/compile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compile/compile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <a (click)=\"!compiling && postCompile()\" class=\"btn btn-default\" id=\"wandbox-compile\">\n            <ng-container *ngIf=\"compiling\">\n                <img src=\"./assets/image/compiling.gif\" alt=\"Compiling\" class=\"btn btn-default\" id=\"wandbox-compiling\">\n            </ng-container>\n            <ng-container *ngIf=\"!compiling\">\n                Run (or Ctrl+Enter)\n            </ng-container>\n        </a>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-10\">\n        <compile-result-tab [activeIndex]=\"activeResultIndex\" [results]=\"compileResults\" (changeTab)=\"changeTab($event)\" (removeTab)=\"removeTab($event)\"></compile-result-tab>\n    </div>\n    <div class=\"col-md-2\">\n        <div id=\"result-container-settings\">\n            <div class=\"checkbox\">\n                <label>\n                    <input class=\"nowrap-output-window\" type=\"checkbox\" value=\"nowrap-output-window\">No Wrap\n                </label>\n            </div>\n            <div class=\"checkbox\">\n                <label>\n                    <input class=\"expand-output-window\" type=\"checkbox\" value=\"expand-output-window\">Expand\n                </label>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/compile/compile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_run_compile_service__ = __webpack_require__("../../../../../src/app/components/common/run-compile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compile_model__ = __webpack_require__("../../../../../src/app/components/compile/compile.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compiler_compiler_model__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompileComponent = /** @class */ (function () {
    function CompileComponent(runCompile) {
        this.runCompile = runCompile;
        this.compile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.compileResults = new Array();
        this.activeResultIndex = -1;
        this.compiling = false;
        this.compileCount = 0;
    }
    CompileComponent.prototype.ngOnInit = function () {
    };
    /**
     * Handle compile button.
     *
     * @memberof CompileComponent
     */
    CompileComponent.prototype.postCompile = function () {
        var _this = this;
        this.compiling = true;
        var result = new __WEBPACK_IMPORTED_MODULE_2__compile_model__["a" /* CompileResultModel */]();
        result.tabName = (this.compileCount + 1).toString();
        this.compileCount++;
        this.compileResults.push(result);
        this.activeResultIndex = this.compileResults.length - 1;
        this.runCompile.run(this.stdin, this.tabs, this.selectedLanguage).subscribe(function (res) {
            var compiler = _this.selectedLanguage.selectedCompiler;
            result.compilerName = compiler.displayName + ' ' + compiler.version;
            result.languageName = _this.selectedLanguage.languageName;
            result.programMessage = res.program_message;
            result.programOutout = res.program_output;
            result.compilerErrorMessage = res.compiler_error;
            result.programErrorMessage = res.program_error;
            result.signalMessage = res.signal;
            result.status = +(res.status !== undefined ? res.status : -1);
            // TODO: ディープコピーが適当すぎる
            result.tabs = JSON.parse(JSON.stringify(_this.tabs));
            _this.compiling = false;
        });
    };
    CompileComponent.prototype.removeTab = function (index) {
        this.compileResults.splice(index, 1);
    };
    CompileComponent.prototype.changeTab = function (index) {
        this.activeResultIndex = index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CompileComponent.prototype, "compile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CompileComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CompileComponent.prototype, "stdin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__compiler_compiler_model__["a" /* LanguageModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__compiler_compiler_model__["a" /* LanguageModel */]) === "function" && _a || Object)
    ], CompileComponent.prototype, "selectedLanguage", void 0);
    CompileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wandbox-compile',
            template: __webpack_require__("../../../../../src/app/components/compile/compile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compile/compile.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_run_compile_service__["a" /* RunCompileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_run_compile_service__["a" /* RunCompileService */]) === "function" && _b || Object])
    ], CompileComponent);
    return CompileComponent;
    var _a, _b;
}());

//# sourceMappingURL=compile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/compile/compile.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompileResultModel; });
var CompileResultModel = /** @class */ (function () {
    function CompileResultModel() {
        this.activeSourceTabIndex = 0;
    }
    Object.defineProperty(CompileResultModel.prototype, "activeTab", {
        get: function () {
            return this.tabs[this.activeSourceTabIndex];
        },
        enumerable: true,
        configurable: true
    });
    return CompileResultModel;
}());

//# sourceMappingURL=compile.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/compiler/compiler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wandbox-insert-template {\n    width: 180px;\n}\n\nli>a.wandbox-dropdown-listitem.selected,\nli>a.wandbox-dropdown-language-item.selected {\n    font-weight: bolder;\n    text-decoration: underline;\n}\n\n.radio label,\n.checkbox label {\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: 400;\n    cursor: pointer;\n}\n\n.form-group {\n    margin-bottom: 0px;\n}\n\n.raw-flags {\n    margin: 5px 5px;\n    font-weight: bolder;\n    display: inline-block;\n}\n\ntextarea.form-control {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compiler/compiler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"fetched\">\n    <div class=\"col-md-12\" *ngIf=\"selectedLanguage != null\">\n        <p class=\"wandbox-current-compiler-language label label-success\">{{selectedLanguage.languageName}}</p>\n        <div class=\"dropdown wandbox-compiler\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdown-language\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <span class=\"wandbox-current-compiler-text\">{{selectedLanguage.selectedCompiler.displayName}} {{selectedLanguage.selectedCompiler.version}}</span>\n                <span class=\"wandbox-current-compiler-caret caret\"></span>\n            </button>\n            <div class=\"dropdown-menu wandbox-dropdown-area\" role=\"menu\" aria-labelledby=\"dropdown-language\">\n                <div class=\"wandbox-dropdown-version\"></div>\n                <div class=\"wandbox-dropdown-detail-area\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane-\">\n                            <legend>{{selectedLanguage.languageName}}</legend>\n                            <ul>\n                                <li *ngFor=\"let compiler of selectedLanguage.compilers;let i=index;\">\n                                    <a class=\"wandbox-dropdown-listitem\" [class.selected]=\"selectedLanguage.selectedCompilerIndex === i\" (click)=\"clickCompiler(i)\">\n                                        {{compiler.displayName}} {{compiler.version}}\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"wandbox-dropdown-lang-area\">\n                    <legend>Languages</legend>\n                    <ul>\n                        <li *ngFor=\"let language of languages; let i=index;\">\n                            <a class=\"wandbox-dropdown-language-item\" [class.selected]=\"selectedLangIndex === i\" (click)=\"clickLanguage(i, $event)\">{{language.languageName}}</a>\n                            <span class=\"wandbox-badge\">{{language.compilers.length}}</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"fetched\" class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"tab-content\">\n            <div class=\"tab-pane-\">\n                <p class=\"wandbox-insert-template\">\n                    <a (click)=\"clickLoadTemplate(selectedLanguage.selectedCompiler.template)\">Load template</a>\n                </p>\n                <div class=\"option-raw runtime-option-raw\">\n                    <div class=\"form-group\" *ngFor=\"let option of selectedLanguage.selectedCompiler.options; let i=index;\">\n                        <ng-container *ngIf=\"option.type === 'checkbox'\">\n                            <label (change)=\"changeOption(i, option)\">\n                                <input type=\"checkbox\" [(ngModel)]=\"option.item.checked\" [attr.checked]=\"option.item.checked || null\" /> {{option.item.name}}\n                            </label>\n                        </ng-container>\n                        <ng-container *ngIf=\"option.type === 'select'\">\n                            <select class=\"col-md-12 wandbox-select-flags form-control\" [(ngModel)]=\"option.item.value\" (change)=\"changeOption(i, option)\">\n                                <option *ngFor=\"let name of option.item.names; let i=index;\" value=\"{{option.item.values[i]}}\">{{name}}</option>\n                            </select>\n                        </ng-container>\n                        <ng-container *ngIf=\"option.type === 'runtime' || option.type === 'compile'\">\n                            <p class=\"raw-flags\">{{option.item.name}}:</p>\n                            <textarea class=\"form-control\" (keyup)=\"changeOption(i, option)\" [(ngModel)]=\"option.item.value\" rows=\"{{option.item.value.split('\\n').length + 1}}\"></textarea>\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"!fetched\" class=\"row\">\n    <div class=\"col-md-12\">\n        <ng-container *ngIf=\"errorMessage.length === 0\">\n            <!-- TODO: なんかアイコン入れる -->\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdown-language\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <span class=\"wandbox-current-compiler-text\">Loading...</span>\n                <span class=\"wandbox-current-compiler-caret caret\"></span>\n            </button>\n        </ng-container>\n        <ng-container *ngIf=\"errorMessage.length !== 0\">\n            <span class=\"wandbox-current-compiler-text\">\n                <span class=\"alert alert-danger\">{{errorMessage}}</span>\n            </span>\n        </ng-container>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/compiler/compiler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompilerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compiler_model__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compiler_service__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_local_storage_service__ = __webpack_require__("../../../../../src/app/components/common/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompilerComponent = /** @class */ (function () {
    function CompilerComponent(service, storage) {
        var _this = this;
        this.service = service;
        this.storage = storage;
        this.selectedLangIndex = 0;
        this.languages = new Array();
        this.fetched = false;
        this.errorMessage = '';
        this.service.fetchCompilerList().subscribe(function (compilerList) {
            var languageDic = {};
            for (var i = 0; i < compilerList.length; ++i) {
                var languageName = compilerList[i].language;
                if (languageDic[languageName] == null) {
                    languageDic[languageName] = new __WEBPACK_IMPORTED_MODULE_1__compiler_model__["a" /* LanguageModel */]();
                    languageDic[languageName].languageName = languageName;
                }
                languageDic[languageName].addCompiler(compilerList[i]);
            }
            _this.languages = Object.keys(languageDic)
                .map(function (key) { return languageDic[key]; });
            _this.fetched = true;
            if (_this.storage.hasValue('language')) {
                var language_1 = _this.storage.getValue('language');
                var langIndex = _this.languages.findIndex(function (v) { return v.languageName === language_1; });
                if (langIndex === -1) {
                    _this.storage.removeValue('language');
                    langIndex = 0;
                }
                _this.clickLanguage(langIndex);
            }
        }, function (err) {
            _this.errorMessage = 'failed loading compiler list!';
        });
    }
    Object.defineProperty(CompilerComponent.prototype, "selectedLanguage", {
        get: function () {
            return this.languages[this.selectedLangIndex] || null;
        },
        enumerable: true,
        configurable: true
    });
    CompilerComponent.prototype.ngOnInit = function () {
    };
    CompilerComponent.prototype.clickLanguage = function (index, event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.selectedLangIndex = index;
        this.storage.setValue('language', this.selectedLanguage.languageName);
        if (this.storage.hasValue('compiler')) {
            var compiler_1 = this.storage.getValue('compiler');
            var compilerIndex = this.selectedLanguage.compilers
                .findIndex(function (v) { return _this.generateCompileOptionStorageKey(_this.selectedLanguage) === compiler_1; });
            if (compilerIndex === -1) {
                this.storage.removeValue('compiler');
                compilerIndex = 0;
            }
            this.clickCompiler(compilerIndex);
        }
        else {
            this.selectedLanguage.selectedCompilerIndex = 0;
        }
        this.service.selectedLanguageNext(this.selectedLanguage);
        console.log('active', this.selectedLangIndex);
    };
    CompilerComponent.prototype.clickCompiler = function (index) {
        var keyName = this.generateCompileOptionStorageKey(this.selectedLanguage);
        this.selectedLanguage.selectedCompilerIndex = index;
        this.storage.setValue('compiler', keyName);
        if (this.storage.hasValue(keyName)) {
            var options = this.storage.getValue(keyName);
            this.selectedLanguage.selectedCompiler.options = options;
        }
    };
    CompilerComponent.prototype.changeOption = function (index, item) {
        var keyName = this.generateCompileOptionStorageKey(this.selectedLanguage);
        this.storage.setValue(keyName, this.selectedLanguage.selectedCompiler.options);
        console.log('changed', index, item);
    };
    CompilerComponent.prototype.clickLoadTemplate = function (templateName) {
        this.service.loadTemplateNext(templateName);
        console.log('template', templateName);
    };
    CompilerComponent.prototype.generateCompileOptionStorageKey = function (language) {
        return "compilerOptions-" + language.languageName + "-" + language.selectedCompiler.displayName + "-" + language.selectedCompiler.version;
    };
    CompilerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wandbox-compiler',
            template: __webpack_require__("../../../../../src/app/components/compiler/compiler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compiler/compiler.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__compiler_service__["a" /* CompilerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__compiler_service__["a" /* CompilerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], CompilerComponent);
    return CompilerComponent;
    var _a, _b;
}());

//# sourceMappingURL=compiler.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/compiler/compiler.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageModel; });
/* unused harmony export CompilerModel */
/* unused harmony export CompilerOptionModel */
var LanguageModel = /** @class */ (function () {
    function LanguageModel() {
        this.languageName = '';
        this.mime = '';
        this.selectedCompilerIndex = 0;
        this.compilers = [];
    }
    Object.defineProperty(LanguageModel.prototype, "selectedCompiler", {
        get: function () {
            return this.compilers[this.selectedCompilerIndex];
        },
        enumerable: true,
        configurable: true
    });
    LanguageModel.prototype.addable = function (compiler) {
        return this.languageName === compiler.language;
    };
    LanguageModel.prototype.addCompiler = function (compiler) {
        var result = new CompilerModel();
        result.name = compiler.name;
        result.displayName = compiler['display-name'];
        result.version = compiler.version;
        result.template = compiler.templates[0] || '';
        result.compileCommand = compiler['display-compile-command'];
        result.options = [];
        for (var _i = 0, _a = compiler.switches; _i < _a.length; _i++) {
            var flag = _a[_i];
            var option = new CompilerOptionModel();
            if (typeof flag.default === 'boolean') {
                var compilerFlag = flag;
                option.type = 'checkbox';
                option.item = {
                    name: compilerFlag['display-name'],
                    value: compilerFlag.name,
                    checked: compilerFlag.default,
                    displayFlag: compilerFlag['display-flags']
                };
            }
            else {
                var selectionFlag = flag;
                option.type = 'select';
                option.item = {
                    name: '',
                    displayFlags: selectionFlag.options.map(function (v) { return v['display-flags']; }),
                    value: selectionFlag.default,
                    names: selectionFlag.options.map(function (v) { return v['display-name']; }),
                    values: selectionFlag.options.map(function (v) { return v.name; })
                };
            }
            result.options.push(option);
        }
        if (compiler['compiler-option-raw']) {
            result.options.push({
                type: 'compile',
                item: {
                    name: 'Compiler options',
                    value: ''
                },
            });
        }
        // if (compiler['runtime-option-raw']) {
        result.options.push({
            type: 'runtime',
            item: {
                name: 'Runtime options',
                value: ''
            },
        });
        // }
        this.compilers.push(result);
    };
    return LanguageModel;
}());

var CompilerModel = /** @class */ (function () {
    function CompilerModel() {
    }
    Object.defineProperty(CompilerModel.prototype, "displayFlags", {
        get: function () {
            return this.options
                .filter(function (v) {
                return ((v.type === 'compile') && v.item.value.length > 0) ||
                    (v.type === 'checkbox' && v.item.checked) ||
                    (v.type === 'select');
            })
                .map(function (v) {
                if (v.type === 'select') {
                    var selectItem_1 = v.item;
                    var index = selectItem_1.values.findIndex(function (item) { return item === selectItem_1.value; });
                    return selectItem_1.displayFlags[index];
                }
                else if (v.type === 'compile') {
                    return v.item.value
                        .split('\n')
                        .filter(function (str) { return str.length > 0; })
                        .map(function (str) { return "\"" + str + "\""; }).join(' ');
                }
                else {
                    return v.item.displayFlag;
                }
            })
                .join(' ');
        },
        enumerable: true,
        configurable: true
    });
    return CompilerModel;
}());

var CompilerOptionModel = /** @class */ (function () {
    function CompilerOptionModel() {
    }
    return CompilerOptionModel;
}());

//# sourceMappingURL=compiler.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/compiler/compiler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompilerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_compiler_list_service__ = __webpack_require__("../../../../../src/app/components/api/compiler-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_template_service__ = __webpack_require__("../../../../../src/app/components/api/template.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompilerService = /** @class */ (function () {
    function CompilerService(listApi, templateApi) {
        this.listApi = listApi;
        this.templateApi = templateApi;
        this.compilerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.languageSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loadTemplateSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(CompilerService.prototype, "selectedCompiler$", {
        get: function () {
            return this.compilerSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CompilerService.prototype.selectedCompilerNext = function (compiler) {
        this.compilerSubject.next(compiler);
    };
    Object.defineProperty(CompilerService.prototype, "selectedLanguage$", {
        get: function () {
            return this.languageSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CompilerService.prototype.selectedLanguageNext = function (language) {
        this.languageSubject.next(language);
    };
    CompilerService.prototype.fetchCompilerList = function () {
        return this.listApi.fetch();
    };
    Object.defineProperty(CompilerService.prototype, "loadTemplate$", {
        get: function () {
            var _this = this;
            return this.loadTemplateSubject.asObservable()
                .flatMap(function (template) { return _this.templateApi.fetch(template); });
        },
        enumerable: true,
        configurable: true
    });
    CompilerService.prototype.loadTemplateNext = function (templateName) {
        this.loadTemplateSubject.next(templateName);
    };
    CompilerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_compiler_list_service__["a" /* CompilerListAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_compiler_list_service__["a" /* CompilerListAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_template_service__["a" /* TemplateAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_template_service__["a" /* TemplateAPIService */]) === "function" && _b || Object])
    ], CompilerService);
    return CompilerService;
    var _a, _b;
}());

//# sourceMappingURL=compiler.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor-tab/editor-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wandbox-editor-name-tab.first {\n    padding: 6px 10px;\n}\n\n.wandbox-renamable {\n    height: 20px;\n    width: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor-tab/editor-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wandbox-editor\">\n    <ul id=\"wandbox-editor-header\" class=\"nav nav-tabs\" role=\"tablist\">\n        <li *ngFor=\"let tab of tabs; let i=index;\" [class.active]=\"tab.isActive\" (click)=\"tabClick(i)\">\n            <a class=\"wandbox-editor-name-tab\" [class.first]=\"i === 0\" role=\"tab\" data-toggle=\"tab\">\n                <i class=\"glyphicon glyphicon-file\"></i>\n                <span *ngIf=\"!tab.editing\" class=\"wandbox-renamable\" (dblclick)=\"editTab(i, fileNameInput)\">{{tab.fileName}}</span>\n                <input #fileNameInput class=\"wandbox-renamable\" (blur)=\"tab.editing = false;\" (keypress)=\"editInputKeyPress(i, $event)\" [hidden]=\"!tab.editing\" [(ngModel)]=\"tab.fileName\" />\n                <button *ngIf=\"i !== 0\" class=\"glyphicon glyphicon-remove close\" (click)=\"removeTab(i)\"></button>\n            </a>\n        </li>\n        <li>\n            <a id=\"wandbox-editor-add-tab\" class=\"btn btn-default\" (click)=\"addTab()\">\n                <i class=\"glyphicon glyphicon-plus\"></i>\n            </a>\n        </li>\n    </ul>\n    <div class=\"clearfix\"></div>\n    <div id=\"wandbox-editor-content\" class=\"tab-content\">\n        <wandbox-codemirror [config]=\"config\" (change)=\"tabChanged($event)\" [value]=\"tabs[activeIndex].editorContent\">\n\n        </wandbox-codemirror>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor-tab/editor-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_tab_model__ = __webpack_require__("../../../../../src/app/components/editor-tab/editor-tab.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_editor_model__ = __webpack_require__("../../../../../src/app/components/editor/editor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_local_storage_service__ = __webpack_require__("../../../../../src/app/components/common/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabComponent = /** @class */ (function () {
    function TabComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.tabCount = 1;
        this.saveContentSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.saveContentSubject.asObservable()
            .debounceTime(200)
            .subscribe(function (_) {
            _this.storage.setValue('tabs', _this.tabs);
        });
    }
    TabComponent.prototype.ngAfterViewInit = function () {
        console.log('editor-tab', this.tabs);
    };
    /**
     * Tab element click event.
     *
     * @param {number} index clicked tab's index.
     * @memberof TabComponent
     */
    TabComponent.prototype.tabClick = function (index) {
        if (this.activeIndex === index) {
            return;
        }
        this.toggleActive(index);
    };
    /**
     * Add tab button click event.
     *
     * @param {string} [fileName=`noname-${this.tabCount}`] default tab name.
     * @param {string} [content=''] default tab content.
     * @memberof TabComponent
     */
    TabComponent.prototype.addTab = function (fileName, content) {
        if (fileName === void 0) { fileName = "noname-" + this.tabCount; }
        if (content === void 0) { content = ''; }
        var newTab = new __WEBPACK_IMPORTED_MODULE_1__editor_tab_model__["a" /* TabModel */]();
        if (this.tabs.some(function (v) { return v.fileName === fileName; })) {
            fileName = "noname-" + ++this.tabCount;
        }
        newTab.fileName = fileName;
        newTab.editorContent = content;
        this.tabCount++;
        this.tabs.push(newTab);
        this.toggleActive(this.tabs.length - 1);
    };
    /**
     * Tab's name double click event.
     *
     * @param {number} index tab's index.
     * @param {HTMLInputElement} element focus target <input>.
     * @memberof TabComponent
     */
    TabComponent.prototype.editTab = function (index, element) {
        this.tabs[index].editing = true;
        setTimeout(function () { return element.focus(); }, 0);
    };
    /**
     * Handle tab changed event.
     *
     * @param {(string | Event)} event
     * @memberof TabComponent
     */
    TabComponent.prototype.tabChanged = function (event) {
        if (typeof event === 'string') {
            this.tabs[this.activeIndex].editorContent = event;
            this.saveContentSubject.next(event);
        }
    };
    /**
     * Tab's name input key event.
     *
     * @param {number} index tab's index.
     * @param {KeyboardEvent} event keyboard event.
     * @memberof TabComponent
     */
    TabComponent.prototype.editInputKeyPress = function (index, event) {
        if (event.key === 'Enter') {
            this.tabs[index].editing = false;
        }
    };
    /**
     * Tab's remove button event.
     *
     * @param {number} index tab's index.
     * @memberof TabComponent
     */
    TabComponent.prototype.removeTab = function (index) {
        this.tabs.splice(index, 1);
        if (this.activeIndex >= this.tabs.length) {
            this.activeIndex = 0;
            this.toggleActive(0);
        }
        else {
            this.toggleActive(this.activeIndex);
        }
    };
    /**
     * Change active tab event.
     *
     * @param {number} activateIndex activation tab index.
     * @memberof TabComponent
     */
    TabComponent.prototype.toggleActive = function (activateIndex) {
        this.activeIndex = activateIndex;
        this.tabs.forEach(function (v) { return v.isActive = false; });
        this.tabs[activateIndex].isActive = true;
        this.changed.emit({
            index: activateIndex,
            data: this.tabs[activateIndex]
        });
        console.log('active tab:', this.activeIndex);
    };
    /**
     * Active tab next.
     *
     * @memberof TabComponent
     */
    TabComponent.prototype.tabNext = function () {
        var activeIndex = this.tabs.length >= this.activeIndex + 1 ? 0 : this.activeIndex + 1;
        this.toggleActive(activeIndex);
    };
    /**
     * Active tab back.
     *
     * @memberof TabComponent
     */
    TabComponent.prototype.tabBack = function () {
        var activeIndex = this.activeIndex - 1 < 0 ? this.tabs.length - 1 : this.activeIndex - 1;
        this.toggleActive(activeIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__editor_editor_model__["a" /* EditorConfigModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__editor_editor_model__["a" /* EditorConfigModel */]) === "function" && _a || Object)
    ], TabComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "activeIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "changed", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'editor-tab',
            template: __webpack_require__("../../../../../src/app/components/editor-tab/editor-tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor-tab/editor-tab.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], TabComponent);
    return TabComponent;
    var _a, _b;
}());

//# sourceMappingURL=editor-tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor-tab/editor-tab.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabModel; });
var TabModel = /** @class */ (function () {
    function TabModel() {
    }
    return TabModel;
}());

//# sourceMappingURL=editor-tab.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wandbox-stdin-body>textarea {\n    width: 100%;\n    max-height: 128px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10\">\n        <editor-tab (changed)=\"tabChanged($event)\" [tabs]=\"tabs\" [config]=\"model.config\" [activeIndex]=\"activeTabIndex\"></editor-tab>\n    </div>\n    <div class=\"col-md-2\" id=\"wandbox-editor-settings\">\n        <label>Editor settings:</label>\n        <div class=\"checkbox\">\n            <select class=\"form-control wandbox-select\" [(ngModel)]=\"model.keyMap\" (change)=\"changeConfig('keyMap', model.keyMap)\">\n                <option value=\"default\" selected=\"\">editor: default</option>\n                <option value=\"vim\">editor: Vim</option>\n                <option value=\"emacs\">editor: Emacs</option>\n            </select>\n        </div>\n        <div class=\"checkbox\">\n            <select class=\"wandbox-spaces-or-tab form-control\" [(ngModel)]=\"model.tabSize\" (change)=\"changeConfig('tabSize', model.tabSize)\">\n                <option value=\"2\">tab: 2-spaces</option>\n                <option value=\"4\" selected=\"\">tab: 4-spaces</option>\n                <option value=\"8\">tab: 8-spaces</option>\n            </select>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                <input class=\"indent-with-tabs\" type=\"checkbox\" [(ngModel)]=\"model.indentWithTabs\" (change)=\"changeConfig('indentWithTabs', model.indentWithTabs)\"\n                    checked=\"\"> Indent with Tabs\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                <input class=\"smart-indent\" type=\"checkbox\" [(ngModel)]=\"model.smartIndent\" (change)=\"changeConfig('smartIndent', model.smartIndent)\"\n                    checked=\"\"> Smart Indent\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                <input class=\"expand-editor\" type=\"checkbox\" value=\"expand-editor\" [(ngModel)]=\"model.expand\"> Expand\n            </label>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <p id=\"compile_command\">\n            <code *ngIf=\"selectedLanguage != null && selectedLanguage.selectedCompiler != null\">\n                $ {{selectedLanguage.selectedCompiler.compileCommand}} {{selectedLanguage.selectedCompiler.displayFlags}}\n            </code>\n        </p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-10\">\n        <div class=\"panel-group\" role=\"tablist\" id=\"wandbox-stdin-accordion\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-default\">\n                <a id=\"wandbox-stdin-button\" data-toggle=\"collapse\" data-parent=\"#wandbox-stdin-accordion\" href=\"#wandbox-stdin-body\" aria-expanded=\"true\">\n                    Stdin\n                </a>\n                <div id=\"wandbox-stdin-body\" class=\"panel-collapse collapse\">\n                    <textarea class=\"form-control\" [(ngModel)]=\"model.stdin\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<wandbox-compile [tabs]=\"tabs\" [stdin]=\"model.stdin\" [selectedLanguage]=\"selectedLanguage\"></wandbox-compile>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_model__ = __webpack_require__("../../../../../src/app/components/editor/editor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_tab_editor_tab_model__ = __webpack_require__("../../../../../src/app/components/editor-tab/editor-tab.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_service__ = __webpack_require__("../../../../../src/app/components/editor/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compiler_compiler_service__ = __webpack_require__("../../../../../src/app/components/compiler/compiler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_local_storage_service__ = __webpack_require__("../../../../../src/app/components/common/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_language_mime_util__ = __webpack_require__("../../../../../src/app/components/common/language-mime.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorComponent = /** @class */ (function () {
    function EditorComponent(service, compiler, storage) {
        var _this = this;
        this.service = service;
        this.compiler = compiler;
        this.storage = storage;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__editor_model__["b" /* EditorModel */]();
        this.tabs = new Array();
        this.activeTabIndex = 0;
        // Detection changed mime event from compiler changing.
        this.compiler.selectedLanguage$.subscribe(function (language) {
            var mimeStr = Object(__WEBPACK_IMPORTED_MODULE_6__common_language_mime_util__["a" /* mime */])(language.languageName);
            _this.model.mode = mimeStr;
            _this.selectedLanguage = language;
            _this.changeConfig('mode', mimeStr);
        });
        // Detection load template from compiler component.
        this.compiler.loadTemplate$.subscribe(function (info) {
            _this.activeTabIndex = 0;
            _this.tabs[0].editorContent = info.code;
            _this.service.changeEditorTabNext(info.code);
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        if (this.storage.hasValue('tabs')) {
            this.tabs = this.storage.getValue('tabs');
            this.activeTabIndex = this.tabs.findIndex(function (v) { return v.isActive; });
        }
        else {
            var firstTab = new __WEBPACK_IMPORTED_MODULE_2__editor_tab_editor_tab_model__["a" /* TabModel */]();
            firstTab.isActive = true;
            firstTab.fileName = '';
            firstTab.editorContent = '';
            this.tabs.push(firstTab);
        }
        console.log(this.tabs);
    };
    EditorComponent.prototype.changeConfig = function (configName, value) {
        console.log(configName, value);
        this.service.changeConfigNext$({
            name: configName,
            value: value
        });
    };
    EditorComponent.prototype.tabChanged = function (event) {
        this.activeTabIndex = event.index;
        this.tabs[this.activeTabIndex].editorContent = event.data.editorContent;
        this.service.changeEditorTabNext(event.data.editorContent);
    };
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wandbox-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__editor_service__["a" /* EditorService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__editor_service__["a" /* EditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__editor_service__["a" /* EditorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__compiler_compiler_service__["a" /* CompilerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__compiler_compiler_service__["a" /* CompilerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
    ], EditorComponent);
    return EditorComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditorModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorConfigModel; });
/**
 * Model for EditorComponent
 *
 * @export
 * @class EditorModel
 */
var EditorModel = /** @class */ (function () {
    function EditorModel() {
        this.config = new EditorConfigModel();
        this._tabWidth = 4;
    }
    Object.defineProperty(EditorModel.prototype, "dump", {
        get: function () {
            return JSON.stringify(this.config, null, '\n');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "mode", {
        get: function () {
            return this.config.mode;
        },
        set: function (value) {
            this.config.mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "keyMap", {
        get: function () {
            return this.config.keyMap;
        },
        set: function (value) {
            this.config.keyMap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "tabSize", {
        get: function () {
            return this.config.tabSize;
        },
        set: function (value) {
            this.config.tabSize = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "smartIndent", {
        get: function () {
            return this.config.smartIndent;
        },
        set: function (value) {
            this.config.smartIndent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "indentWithTabs", {
        get: function () {
            return this.config.indentWithTabs;
        },
        set: function (value) {
            this.config.indentWithTabs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "tabWidth", {
        get: function () {
            return this._tabWidth;
        },
        set: function (value) {
            this._tabWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorModel.prototype, "expand", {
        get: function () {
            return this.config.expand;
        },
        set: function (value) {
            this.config.expand = value;
        },
        enumerable: true,
        configurable: true
    });
    return EditorModel;
}());

var EditorConfigModel = /** @class */ (function () {
    function EditorConfigModel() {
        this.keyMap = 'default';
        this.lineNumbers = true;
        this.indentWithTabs = true;
        this.smartIndent = true;
        this.expand = false;
        this.tabSize = 4;
        this.indentUnit = 4;
        this.mode = 'text/x-csrc';
    }
    return EditorConfigModel;
}());

//# sourceMappingURL=editor.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EditorService = /** @class */ (function () {
    function EditorService() {
        this.changeConfigSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.changeEditorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(EditorService.prototype, "changeConfig$", {
        get: function () {
            return this.changeConfigSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    EditorService.prototype.changeConfigNext$ = function (eventValue) {
        this.changeConfigSubject.next(eventValue);
    };
    Object.defineProperty(EditorService.prototype, "changeEditorTab$", {
        get: function () {
            return this.changeEditorSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    EditorService.prototype.changeEditorTabNext = function (value) {
        this.changeEditorSubject.next(value);
    };
    EditorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], EditorService);
    return EditorService;
}());

//# sourceMappingURL=editor.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\" id=\"header\">\n        <div class=\"navbar navbar-default\">\n            <div class=\"navbar-header\">\n                <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#wandbox-navbar-collapse\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                <a class=\"navbar-brand\" href=\"/\">Wandbox</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"wandbox-navbar-collapse\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a target=\"_blank\" href=\"https://github.com/melpon/wandbox\">Source</a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Plugin <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"https://github.com/rhysd/wandbox-vim\" target=\"_blank\">for Vimmer</a>\n                            </li>\n                            <li>\n                                <a href=\"https://github.com/kosh04/emacs-wandbox\" target=\"_blank\">for Emacser</a>\n                            </li>\n                            <li>\n                                <a href=\"https://gist.github.com/kikairoya/7544234\" target=\"_blank\">for xyzzy-er</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Link <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"/nojs\">Wandbox Simple</a>\n                            </li>\n                            <li>\n                                <a href=\"https://wandbox.fetus.jp/\" target=\"_blank\">Wandbox for PHP/Hack</a>\n                            </li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <a href=\"https://github.com/login/oauth/authorize?client_id=f9d429d939d997e6b08e\">Sign in</a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wandbox-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sponsors/sponsors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sponsors/sponsors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"  visible-md-block visible-lg-block\">\n            <div class=\"wandbox-sponsors\">\n                <div class=\"wandbox-corporate-sponsors\">\n                    <label>🐕 Corporate Sponsors:</label>\n                    <ul>\n                        <li><a target=\"_blank\" href=\"http://theolizer.com/\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"セオライド テクノロジー\">イヌ</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"wandbox-personal-sponsors\">\n                    <label>🐶 Personal Sponsors:</label>\n                    <ul>\n                        <li><a target=\"_blank\" href=\"https://twitter.com/voluntas\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"voluntas\">イヌ</a></li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"wandbox-about-sponsors\">\n                <a target=\"_blank\" href=\"https://gist.github.com/melpon/8f5d7a8e991ed466d09cf887bd8d92ce\">About sponsors(Japanese)</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sponsors/sponsors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent() {
    }
    SponsorsComponent.prototype.ngOnInit = function () {
    };
    SponsorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wandbox-sponsors',
            template: __webpack_require__("../../../../../src/app/components/sponsors/sponsors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sponsors/sponsors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsorsComponent);
    return SponsorsComponent;
}());

//# sourceMappingURL=sponsors.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    baseUrl: 'https://wandbox.org/api/',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map