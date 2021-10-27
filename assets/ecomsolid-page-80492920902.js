
  
/*
  You SHOULD NOT modify source code in this page because
  It is automatically generated from EcomSolid
  Try to edit page with the live editor.
  https://ecomsolid.com
*/

(function(jQuery, $) {
  
      try {
        function funcLib14() {
          "use strict";

(function (jQuery) {
  var gtParallax = function (element, options) {
    // Khai bao cac tham so mac dinh trong biet *default*
    var defaults = {
      classBackgroundImage: null,
    };

    this.settings = {};
    var $element = jQuery(element);
    var _this = this;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      // Init parallax no transtion
      _this.refreshDrag();

      // Event scroll
      _this.parallaxIt();
    };
    this.parallaxIt = function () {
      var $fwindow = jQuery(window);
      var yPos = 0;
      var xPos = "50%";

      $fwindow.on("scroll.gtparallax resize.gtparallax", function () {
        _this.calcBackground(xPos, yPos);
      });
      jQuery("body").on("scroll.gtparallax resize.gtparallax", function () {
        _this.calcBackground(xPos, yPos);
      });
    };

    this.refreshDrag = function () {
      var yPos = 0;
      var xPos = "50%";

      _this.calcBackground(xPos, yPos);
    };

    this.calcBackground = function (xPos, yPos) {
      var $fwindow = jQuery(window);
      var $image = $element.find(_this.settings.classBackgroundImage);
      var speed = _this.settings.speed || 0.2;

      if ($fwindow.width() >= 992 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (speed == 1) {
          $image.css({
            backgroundPosition: xPos + " " + yPos + "vh",
            "background-attachment": "fixed",
            "-webkit-backface-visibility": "hidden",
            transition: "all 0.15s",
          });
        } else {
          $image.css({
            backgroundPosition: xPos + " " + yPos + "vh",
            "background-attachment": "fixed",
            "-webkit-backface-visibility": "hidden",
            transition: "all 0.15s",
          });
        }
      }
    };
    this.init();
  };

  jQuery.fn.gtParallax = function (options) {
    return this.each(function () {
      var plugin = new gtParallax(this, options);

      jQuery(this).data("gtparallax", plugin);
    });
  };
})(jQuery);

        }
        funcLib14();
      } catch(e) {
        console.error("Error lib id: 14" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib17() {
          "use strict";
/* gfProductZoomImage */
(function (jQuery) {
  var GfProductZoomImage = function (element, options, $) {
    var defaults = {
      classHoverItem: null,
      scale: 1.5,
      htmlZoom: '<div class="gt_product-zoom"></div>',
      classSection: null,
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _url;
    var _$html;

    this.init = function () {
      const checkDevice = _this.getDeviceType();
      if (checkDevice !== "desktop") {
        return;
      }
      this.settings = jQuery.extend({}, defaults, options);
      var $itemHover = $element.closest(_this.settings.classHoverItem);

      if ($itemHover && $itemHover.length > 0) {
        var classElement = $itemHover.attr("class");
        // gt_product-image--feature gt_product-image
        var res = classElement.split(" ");

        if (_this.settings.classSection != null) {
          var cssClassName = "css-" + _this.settings.classSection;
          var css = '<style type="text/css" class="' + cssClassName + '">';

          css += _this.settings.classSection + " ." + res.join(".") + "{position:relative;overflow:hidden}";
          css += _this.settings.classSection + " .gt_product-zoom{display: none;position:absolute;top:0;left:0;width:100%;height:100%;background-color: #fff;background-repeat:no-repeat;background-position:center;background-size:cover;transition:transform .5s ease-out}";
          css += "</style>";
          if (!jQuery(cssClassName) || jQuery(cssClassName).length == 0) {
            jQuery("body").append(css);
          }
        }

        var $html = jQuery(_this.settings.htmlZoom);

        _$html = $html;
        if (!$itemHover.find(".gt_product-zoom") || $itemHover.find(".gt_product-zoom").length == 0) {
          $itemHover.append(_$html);
        }

        _this.event();
      }
    };

    this.event = function () {
      $element.closest(_this.settings.classHoverItem)
        .on("mouseover", function () {
          if (_this.settings.scale !== 1) {
            _url = $element.attr("src");
            _$html.css({
              display: "block",
              "background-image": "url(" + _url + ")",
              transform: "scale(" + _this.settings.scale + ")",
            });
            $element.css("opacity", 0);
          }
        })
        .on("mouseout", function () {
          if (_this.settings.scale !== 1) {
            _$html.css({
              transform: "scale(1)",
              display: "none",
            });
            $element.css("opacity", 1);
          }
        })
        .on("mousemove", function (e) {
          if (_this.settings.scale !== 1) {
            var $this = $(this);

            _$html.css({
              "transform-origin": ((e.pageX - $this.offset().left) / $this.width()) * 100 + "% " + ((e.pageY - $this.offset().top) / $this.height()) * 100 + "%",
              display: "block",
            });
            $element.css("opacity", 0);
          }
        });
    };

    this.getDeviceType = function() {
      var userAgent = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return "tablet";
      }
      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|OperaM(obi|ini)/.test(userAgent)) {
        return "mobile";
      }
      return "desktop";
    }

    this.init();
  };

  jQuery.fn.gfProductZoomImage = function (options) {
    return this.each(function () {
      if (undefined == jQuery(this).data("gfproductZoomImage")) {
        var plugin = new GfProductZoomImage(this, options, jQuery);

        jQuery(this).data("gfproductzoomimage", plugin);
      }
    });
  };
})(jQuery);

        }
        funcLib17();
      } catch(e) {
        console.error("Error lib id: 17" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib8() {
          "use strict";

/* gtProductButton */
(function (jQuery) {
  jQuery.gtProductButton = function (element, options) {
    var defaults = {
      type: null, //  null or ajax
      classText: null,
      button: null,
      TextSuccessfully: null,
      classTextSuccessfully: null,
      mode: "production",
      // loadingType: "filled" // "outlined"
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      var productJson = $element
        .closest("[keyword='product'], [data-keyword='product']")
        .find(".ProductJson")
        .text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
        }
      } catch (e) {
        console.log(e);
      }
      _this.event();
      _this.listen();
    };
    this.event = function () {
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // touchend only for iOS
        $element
          .find(_this.settings.classButton)
          .off("touchend.addtocartios")
          .on("touchend.addtocartios", addToCartHandler);
      } else {
        $element
          .find(_this.settings.classButton)
          .off("click.addtocart")
          .on("click.addtocart", addToCartHandler);
      }

      function addToCartHandler(e) {
        var addons = window.SOLID.store.getState("addons");
        var cartDrawer;

        if (addons && addons.cart_drawer) {
          cartDrawer = addons.cart_drawer;
        }
        if (_this.settings.type == "ajax" || cartDrawer) {
          e.preventDefault();
          if (!$element.data("isBuying")) {
            var $product = $element.closest("[keyword='product'], [data-keyword='product']");
            var $buttonAddToCart = $element
              .closest("[keyword='product'], [data-keyword='product']")
              .find(_this.settings.classButton);
            var heightBtnAddToCart = $buttonAddToCart.outerHeight();

            $buttonAddToCart.css("position", "relative");
            $buttonAddToCart.css("height", heightBtnAddToCart + "px");
            var $loading = jQuery(
              '<div class="atom-button-loading-circle-loader"><div class="atom-button-loading-check-mark atom-button-loading-check-mark-draw"></div></div>'
            );
            var $styleLoading = jQuery("head").find("#gt_add-to-cart-animation--loading");

            if (!$styleLoading || !$styleLoading.length) {
              $styleLoading = jQuery(
                "<style type=\"text/css\" id=\"gt_add-to-cart-animation--loading\">\n" +
                ".atom-button-loading-circle-loader {\n" +
                "  position: absolute;\n" +
                "  left: calc(50% - 0.5em);\n" +
                "  top: calc(50% - 0.5em);\n" +
                "  border: 2px solid rgba(0, 0, 0, 0);\n" +
                "  border-left-color: currentColor;\n" +
                "  border-bottom-color: currentColor;\n" +
                "  animation: loader-spin 0.6s infinite linear;\n" +
                "  vertical-align: top;\n" +
                "  border-radius: 50%;\n" +
                "  width: 1em;\n" +
                "  height: 1em;\n" +
                "  border-width: calc(1em / 10);\n" +
                "}\n" +
                "\n" +
                ".load-complete {\n" +
                "  -webkit-animation: none;\n" +
                "  animation: none;\n" +
                "  border-color: currentColor;\n" +
                "  transition: border 500ms ease-out;\n" +
                "}\n" +
                "\n" +
                ".atom-button-loading-check-mark {\n" +
                "  display: none;\n" +
                "}\n" +
                "\n" +
                ".atom-button-loading-check-mark.atom-button-loading-check-mark-draw:after {\n" +
                "  animation-duration: 800ms;\n" +
                "  animation-timing-function: ease;\n" +
                "  animation-name: atom-button-loading-check-mark;\n" +
                "  transform: scaleX(-1) rotate(135deg);\n" +
                "}\n" +
                "\n" +
                ".atom-button-loading-check-mark:after {\n" +
                "  opacity: 1;\n" +
                "  transform-origin: left top;\n" +
                "  border-right: 2px solid #fff;\n" +
                "  border-top: 2px solid #fff;\n" +
                "  border-color: currentColor;\n" +
                "  content: '';\n" +
                "  position: absolute;\n" +
                "  border-width: calc(1em / 10);\n" +
                "  width: calc(1em / 4);\n" +
                "  height: calc(1em / 2);\n" +
                "  left: calc(1em / 4 - 1em / 10);\n" +
                "  top: calc(1em / 2 - 1em / 16);\n" +
                "}\n" +
                "\n" +
                "@keyframes loader-spin {\n" +
                "  0% {\n" +
                "    transform: rotate(0deg);\n" +
                "  }\n" +
                "\n" +
                "  100% {\n" +
                "    transform: rotate(360deg);\n" +
                "  }\n" +
                "}\n" +
                "\n" +
                "@keyframes atom-button-loading-check-mark {\n" +
                "  0% {\n" +
                "    height: 0px;\n" +
                "    width: 0px;\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                "\n" +
                "  20% {\n" +
                "    height: 0px;\n" +
                "    width: calc(1em / 4);\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                "\n" +
                "  40% {\n" +
                "    height: calc(1em / 2);\n" +
                "    width: calc(1em / 4);\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                " \n" +
                "  100% {\n" +
                "    height: calc(1em / 2);\n" +
                "    width: calc(1em / 4);\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                "}\n" +
                "</style>"
              );
              jQuery("head").append($styleLoading);
            }
            var $cacheButtonHtml = $buttonAddToCart.html();

            $buttonAddToCart.html($loading);
            $element.data("isBuying", true);
            var $form = $element.closest("form");

            window.gfTheme.addItemFromForm($form, function (item, form, error) {
              window.store.update("addToCart", item);
              if (error) {
                try {
                  var responseText = JSON.parse(error.responseText);

                  if (responseText && responseText.description) {
                    // eslint-disable-next-line no-alert
                    alert(responseText.description);
                  }
                } catch (e) {
                  console.log(e);
                }
                $buttonAddToCart.css("position", "");
                $buttonAddToCart.css("height", "");
                $buttonAddToCart.html($cacheButtonHtml);
                $element.data("isBuying", false);
              } else {
                if (
                  _this.settings.classTextSuccessfully &&
                  _this.settings.TextSuccessfully
                ) {
                  $product
                    .find(_this.settings.classTextSuccessfully)
                    .text(_this.settings.TextSuccessfully);
                } else {
                  var $loadingEl = $buttonAddToCart.find(
                    ".atom-button-loading-circle-loader"
                  );

                  clearTimeout(window.timeoutLoading);
                  /* display tick button */
                  $loadingEl.addClass("load-complete");
                  $loadingEl
                    .find(".atom-button-loading-check-mark")
                    .css("display", "block");
                  /* remove tick button and display text*/
                  window.timeoutLoading = setTimeout(function () {
                    $buttonAddToCart.css("position", "");
                    $buttonAddToCart.css("height", "");
                    $buttonAddToCart.html($cacheButtonHtml);
                    $element.data("isBuying", false);
                  }, 2000);
                }
                if (cartDrawer) {
                  // mo cart drawer thi cartPopup = "cart_drawer"
                  window.SOLID.store.dispatch("openCartPopup", "cart_drawer");
                }
              }
            });
          }
          return false;
        }
      }
    };
    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        var currentVariant = store.get("variant" + _productJson.id);

        if (!currentVariant.available) {
          $element.find(_this.settings.classButton).attr("disabled", true);
        } else {
          $element.find(_this.settings.classButton).attr("disabled", false);
        }

        store.change("variant" + _productJson.id, function (variant) {
          if (variant.available) {
            $element.removeClass("gf_soldout");
            $element.removeClass("gt_soldout");
            var textAddToCart = $element.attr("data-addtocart");

            if (_this.settings.classText) {
              $element.find(_this.settings.classText).html(textAddToCart);
            }

            if (_this.settings.classButton) {
              $element.find(_this.settings.classButton).attr("disabled", false);
            }
          } else {
            $element.addClass("gf_soldout");
            $element.addClass("gt_soldout");
            var text = $element.attr("data-soldout");

            if (_this.settings.classText) {
              $element.find(_this.settings.classText).html(text);
            }

            if (_this.settings.classButton && _this.settings.mode === "production") {
              $element.find(_this.settings.classButton).attr("disabled", true);
            }
          }
        });
      }
    };
    this.init();
  };

  jQuery.fn.gtProductButton = function (options) {
    return this.each(function () {
      var plugin = new jQuery.gtProductButton(this, options, jQuery);

      jQuery(this).data("gtproductbutton", plugin);
    });
  };
})(jQuery);

        }
        funcLib8();
      } catch(e) {
        console.error("Error lib id: 8" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib11() {
          "use strict";

/* gtProductSaved */
(function (jQuery) {
  var gtProductSaved = function (element, options) {
    var defaults = {
      classTextPercent: null,
      classTextNumber: null,
      dataFormat: "",
      dataFormatKey: "",
      customCurrencyFormat: null,
      roundPercent: 0,
      roundNoZeroes: false,
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      var productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
        }
      } catch (e) {
        console.log(e);
      }

      _this.Init();
      _this.listen();
    };

    this.Init = function () {
      if (_productJson) {
        var variant = window.store.get("variant" + _productJson.id);
        if (variant && variant.id) {
          _this.setPriceWithVariant(variant);
        }
      }
    };

    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        store.change("variant" + _productJson.id, function (variant) {
          _this.setPriceWithVariant(variant);
        });

        store.change("quantity" + _productJson.id, function () {
          _this.Init();
        });
      }

      store.change("dataCurrency", function () {
        _this.Init();
      });
    };

    this.setPriceWithVariant = function (variant) {
      if (variant.compare_at_price && variant.price && variant.compare_at_price > variant.price) {
        $element.addClass("gf_active");
        $element.addClass("gt_active");

        // Giá giảm theo %
        if (_this.settings.classTextPercent) {
          var $number = $element.find(_this.settings.classTextPercent);
          var number = _this.getPercentDiscount(variant.price, variant.compare_at_price);

          $number.html(number);
        }

        // Giá giảm theo sổ tiền
        if (_this.settings.classTextNumber) {
          var $price = $element.find(_this.settings.classTextNumber);
          var diff = variant.compare_at_price - variant.price;

          diff = _this.formatMoneyPlugin(diff);
          $price.html(diff);
        }
      } else {
        $element.removeClass("gf_active");
        $element.removeClass("gt_active");
      }
    };

    // Get price with quantity
    this.getPriceWithQuantity = function (price) {
      if (_productJson) {
        var quantityProduct = window.store.get("quantity" + _productJson.id);

        quantityProduct = Number(quantityProduct);
        if (!quantityProduct || isNaN(quantityProduct)) {
          quantityProduct = 1;
        }
        price = Number(price) * quantityProduct;
      }
      return price;
    };

    // Format price
    this.formatMoneyPlugin = function (price) {
      price = _this.getPriceWithQuantity(price);
      var dataCurrency = window.store.get("dataCurrency");
      var format = __GemSettings.money;

      if (!dataCurrency) {
        // default shopify format
        price = Shopify.formatMoney(price, format);
      } else {
        // ES addon auto currency converter
        var notApplyRoundDecimal = true; // no apply round decimal for save money

        price = Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data, _this.settings.customCurrencyFormating, notApplyRoundDecimal);
      }

      if (_this.settings.dataFormat && _this.settings.dataFormatKey) {
        price = _this.settings.dataFormat.replace(_this.settings.dataFormatKey, price);
      }

      return price;
    };

    // Lấy phần trăm giảm giá
    this.getPercentDiscount = function (price, comparePrice) {
      price = parseFloat(price);
      comparePrice = parseFloat(comparePrice);
      var diff = comparePrice - price;

      diff = diff / comparePrice;
      diff = diff * 100;
      if(_this.settings.roundNoZeroes) {
        diff = _this.roundTo(diff, _this.settings.roundPercent);
      } else {
        diff = diff.toFixed(_this.settings.roundPercent);
      }
      diff += "%";

      if (_this.settings.dataFormat && _this.settings.dataFormatKey) {
        diff = _this.settings.dataFormat.replace(_this.settings.dataFormatKey, diff);
      }

      return diff;
    };

    this.roundTo = function(n, digits) {
      if (digits === undefined) {
        digits = 0;
      }
    
      var multiplicator = Math.pow(10, digits);
      n = parseFloat((n * multiplicator).toFixed(11));
      var test =(Math.round(n) / multiplicator);
      return +(test.toFixed(digits));
    }

    this.init();
  };

  jQuery.fn.gtProductSaved = function (options) {
    return this.each(function () {
      var plugin = new gtProductSaved(this, options, jQuery);

      jQuery(this).data("gtproductsaved", plugin);
    });
  };
})(jQuery);

        }
        funcLib11();
      } catch(e) {
        console.error("Error lib id: 11" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib107() {
          (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtProductImagesV2
 */
var GtProductImagesV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params setting truyen vao thu vien
     */
    function GtProductImagesV2(params) {
        this.$element = $(params.$element);
        this.settings = __assign(__assign({}, this.settings), params.settings);
        this.init();
    }
    /**
     * init ham khoi tao thu vien
     */
    GtProductImagesV2.prototype.init = function () {
        var productJson = this.$element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.initSwiperSlide();
        this.setCurrentVariant();
        this.event();
        this.listen();
    };
    /**
     * Khởi tạo thư viện swiper slide
     */
    GtProductImagesV2.prototype.initSwiperSlide = function () {
        var _this_1 = this;
        var _a, _b;
        var carousel = this.$element.find(this.settings.classSwiperContainer);
        var productImagesSwiper;
        if (carousel && carousel.length) {
            this.$carousel = carousel[0];
            if (this.$carousel.swiper) {
                this.$carousel.swiper.destroy();
            }
            productImagesSwiper = new window.Swiper(this.$carousel, this.settings.swiperSetting);
        }
        var $featureCarousel = this.$element.find(this.settings.classFeatureSwiperContainer);
        if (this.settings.featureSwiperSetting && $featureCarousel && $featureCarousel.length) {
            if ($featureCarousel && $featureCarousel.length) {
                if (productImagesSwiper) {
                    this.settings.featureSwiperSetting.thumbs = {
                        swiper: productImagesSwiper,
                    };
                }
                var cacheEventImageReady_1 = (_b = (_a = this.settings.featureSwiperSetting) === null || _a === void 0 ? void 0 : _a.on) === null || _b === void 0 ? void 0 : _b.imagesReady;
                this.settings.featureSwiperSetting.on = {
                    imagesReady: function () {
                        if (cacheEventImageReady_1) {
                            cacheEventImageReady_1();
                        }
                        _this_1.activeProductImageByFeatureImage($featureCarousel);
                    },
                };
                this.$featureCarousel = $featureCarousel[0];
                // neu co roi thi destroy
                if (this.$featureCarousel.swiper) {
                    this.$featureCarousel.swiper.destroy();
                }
                // khoi tao swiper
                var featureSwiper = new window.Swiper(this.$featureCarousel, this.settings.featureSwiperSetting);
                // them su kien change slide cho product img swiper
                this.eventFeatureSwiper(featureSwiper, $featureCarousel);
            }
        }
        else {
            if (carousel && carousel.length) {
                var imageId = this.$element.find(this.settings.classFeatureImage).attr("data-id");
                this.activeImage(imageId);
            }
            // if(this.settings.initShowFeatureImage) {
            // }
        }
    };
    /**
     * onProductImageSlideChange: sự kiện thay đổi slide của swiper cho product imgs
     * @param swiper swiper can them su kien
     */
    GtProductImagesV2.prototype.eventFeatureSwiper = function (swiper, $carousel) {
        var _this_1 = this;
        swiper.on("slideChangeTransitionEnd", function () {
            _this_1.activeProductImageByFeatureImage($carousel);
        });
    };
    /**
     * activeProductImageByFeatureImage: thay đổi slide active ở imageList theo feature image swiper
     * @param $carousel $featureCarousel
     */
    GtProductImagesV2.prototype.activeProductImageByFeatureImage = function ($carousel) {
        var $imageActive = $carousel.find(".swiper-slide.swiper-slide-active img");
        var imageId = $imageActive.attr("data-id");
        this.activeImage(imageId);
    };
    /**
     * Lấy dữ liệu gtCurrentVariant ID đã được cache
     */
    GtProductImagesV2.prototype.setCurrentVariant = function () {
        var _this_1 = this;
        if (this._productJson) {
            var variantIDCache = this.getVariantIDCacheByDom();
            if (variantIDCache) {
                this._variantID = variantIDCache;
                var storeVariant = window.SOLID.store.getState("variant" + this._productJson.id);
                if (storeVariant && storeVariant.id == this._variantID && storeVariant.variant_init) {
                    return;
                }
                else {
                    var variantData = this._productJson.variants.find(function (item) {
                        return Number(item.id) === Number(_this_1._variantID);
                    });
                    if (variantData) {
                        try {
                            var newVariant = JSON.parse(JSON.stringify(variantData));
                            // eslint-disable-next-line camelcase
                            newVariant.variant_init = true;
                            window.SOLID.store.dispatch("variant" + this._productJson.id, newVariant);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            }
        }
    };
    /**
     * event
     */
    GtProductImagesV2.prototype.event = function () {
        // Click to image item in slide image
        if (this.settings.classSwiperItemsImage) {
            var $carouseItemImages_1 = this.$element.find(this.settings.classSwiperItemsImage);
            var _this_2 = this;
            $carouseItemImages_1.off("click.selectImage").on("click.selectImage", function () {
                var $img = jQuery(this);
                var imageId = $img.attr("data-id");
                var imageUrl = $img.attr("src");
                $carouseItemImages_1.removeClass("gt_active");
                $img.addClass("gt_active");
                _this_2.updateFeatureImage(imageUrl, imageId);
                _this_2.updateStoreVariantByImageID(imageId);
            });
        }
        // Click to feature arrow
        if (this.settings.classFeatureArrow) {
            var $featureArrow = this.$element.find(this.settings.classFeatureArrow);
            var _this_3 = this;
            if ($featureArrow && $featureArrow.length) {
                $featureArrow.off("click.imageArrow").on("click.imageArrow", function () {
                    var isLeftArrow = $(this).hasClass("gt_product-img-nav--left");
                    var $currentActiveImage = $(_this_3.$carousel).find(".swiper-slide img.gt_active");
                    if (!$currentActiveImage || !$currentActiveImage.length) {
                        return;
                    }
                    var index = $currentActiveImage.closest(".swiper-slide").attr("aria-label").split(" / ");
                    var currentIndex = parseInt(index[0]);
                    var total = parseInt(index[1]);
                    if (isLeftArrow) {
                        currentIndex = currentIndex == 1 ? total : currentIndex - 1;
                    }
                    else {
                        currentIndex = currentIndex == total ? 1 : currentIndex + 1;
                    }
                    var newIndex = currentIndex + " / " + total;
                    var $newActiveImage = $(_this_3.$carousel).find(".swiper-slide[aria-label='" + newIndex + "'] img");
                    if ($newActiveImage && $newActiveImage.length) {
                        $newActiveImage.click();
                        _this_3.$carousel.swiper.slideTo(currentIndex - 1, 200, true);
                    }
                });
            }
        }
    };
    /**
     * listen
     */
    GtProductImagesV2.prototype.listen = function () {
        var _this_1 = this;
        var store = window.SOLID.store;
        if (this._productJson && this._productJson.id) {
            store.subscribe("variant" + this._productJson.id, function (variant) {
                if (variant && variant.variant_init && _this_1.settings.initShowFeatureImage) {
                    return;
                }
                _this_1.updateDataCacheAttr(variant.id);
                _this_1.updateImage(variant);
            });
        }
    };
    /**
     * getVariantIDCacheByDom
     * @returns current variant id
     */
    GtProductImagesV2.prototype.getVariantIDCacheByDom = function () {
        var variantID = this.$element.attr("data-variant-id") || "";
        return variantID;
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductImagesV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    /**
     * Cập nhật new variant
     * @param imageId id của image đang được active
     */
    GtProductImagesV2.prototype.updateStoreVariantByImageID = function (imageId) {
        var variants = [];
        if (this._productJson) {
            try {
                variants = this._productJson.variants;
            }
            catch (e) {
                console.log(e);
            }
        }
        if (variants.length) {
            var currentVariant = variants.find(function (item) { return item.featured_image && item.featured_image.id && item.featured_image.id == imageId; });
            if (currentVariant) {
                window.store.update("variant" + this._productJson.id, currentVariant);
            }
        }
    };
    /**
     * Cập nhật ảnh của feature image theo ảnh đang được active trong slider image
     * @param url link ảnh đang được active trong slide images
     * @param imageId id cua feature image active
     */
    GtProductImagesV2.prototype.updateFeatureImage = function (url, imageId) {
        if (!this.settings.featureSwiperSetting) {
            url = this.replaceImageToSize(url, "");
            if (this.settings.classFeatureImage) {
                this.$element.find(this.settings.classFeatureImage).attr("src", url);
            }
        }
        else {
            var $carouselFeatureImages = this.$element.find(this.settings.classFeatureSwiperItemsImage);
            var $carouselFeatureImageActive = this.$element.find(this.settings.classFeatureSwiperItemsImage + "[data-id=\"" + imageId + "\"]");
            if ($carouselFeatureImages && $carouselFeatureImageActive && $carouselFeatureImages.length && $carouselFeatureImageActive.length) {
                var indexActive = $carouselFeatureImages.index($carouselFeatureImageActive);
                this.$featureCarousel.swiper.slideTo(indexActive, 200, true);
            }
        }
    };
    /**
     * Cập nhật lại trạng thái active của slide và feature image với variant tương ứng
     * @param variant dữ liệu của variant đang select
     */
    GtProductImagesV2.prototype.updateImage = function (variant) {
        if (!this._productJson)
            return;
        if (!variant)
            variant = window.SOLID.store.getState("variant" + this._productJson.id);
        if (!variant || !variant.featured_image || !variant.featured_image.src || !this.settings.classSwiperItemsImage) {
            return;
        }
        this.updateFeatureImage(variant.featured_image.src, variant.featured_image.id);
        this.activeImage(variant.featured_image.id);
    };
    /**
     * active and scroll to image active
     * @param imageId  featured_image id current variant selected
     */
    GtProductImagesV2.prototype.activeImage = function (imageId) {
        var $carouselImages = this.$element.find(this.settings.classSwiperItemsImage);
        var _this = this;
        $carouselImages.each(function (index) {
            $(this).removeClass("gt_active");
            $(this).removeClass("gf_active");
            var id = $(this).attr("data-id");
            if (id == imageId && _this.settings.swiperSetting) {
                _this.$carousel.swiper.slideTo(index, 200, true);
                $(this).addClass("gt_active");
                $(this).addClass("gf_active");
            }
        });
    };
    /**
     * Kiểm tra xem có phải link ảnh trên shopify app hay ko
     * @param url link ảnh
     * @returns true or false
     */
    GtProductImagesV2.prototype.hasImageShopify = function (url) {
        if (!url || url == "") {
            return false;
        }
        if (url.indexOf("cdn.shopify.com/s/files/") != -1) {
            return true;
        }
        else if (url.indexOf("apps.shopifycdn.com/") != -1) {
            return true;
        }
        return false;
    };
    /**
     * replaceImageToSize
     * @param url link image
     * @param expectImageSize expectImageSize
     * @returns string
     */
    GtProductImagesV2.prototype.replaceImageToSize = function (url, expectImageSize) {
        if (expectImageSize == undefined || expectImageSize == null) {
            return url;
        }
        if (this.hasImageShopify(url)) {
            var ignore = ["jfif"];
            var params = "";
            var splitParams = url.split("?");
            if (splitParams && splitParams.length && splitParams.length >= 2) {
                params = splitParams[1];
            }
            var arrImage = splitParams[0].split("/").pop();
            var slugName = arrImage.split(".");
            var strExtention = slugName.pop();
            if (ignore.indexOf(strExtention) !== -1) {
                return url;
            }
            var nameImage = slugName.join(".");
            var arrayNames = nameImage.split("_");
            if (arrayNames && arrayNames.length >= 2) {
                var sizeCurrent = arrayNames.pop();
                var reg = new RegExp(/(\d+)x(\d+)|(\d+)x|x(\d+)/, "gm");
                if (sizeCurrent && reg.test(sizeCurrent)) {
                    var trimReg = sizeCurrent.replace(reg, "");
                    if (trimReg == "") {
                        var nameImages = nameImage.split("_");
                        nameImages.pop();
                        nameImage = nameImages.join("_");
                    }
                }
            }
            var srcImageSplit = url.split("?")[0].split("/");
            var smallSrc = "";
            for (var j = 0; j < srcImageSplit.length - 1; j++) {
                smallSrc += srcImageSplit[j] + "/";
            }
            if (expectImageSize) {
                url = smallSrc + nameImage + "_" + expectImageSize + "." + strExtention;
            }
            else {
                url = smallSrc + nameImage + "." + strExtention;
            }
            if (params) {
                url = url + "?" + params;
            }
        }
        return url;
    };
    return GtProductImagesV2;
}());
/**
 * gtProductImagesV2
 * @param params setting lib product gtProductImagesV2
 * @returns gtProductImagesV2
 */
window.SOLID.library.gtProductImagesV2 = function (params) {
    return new GtProductImagesV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib107();
      } catch(e) {
        console.error("Error lib id: 107" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib106() {
          (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtProductQuantityV2
 */
var GtProductQuantityV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params settings class and element
     */
    function GtProductQuantityV2(params) {
        this.$element = $(params.$element);
        this.classInput = params.settings.classInput;
        this.classPlus = params.settings.classPlus;
        this.classMinus = params.settings.classMinus;
        this.mode = params.settings.mode || "production";
        this.init();
    }
    /* private methods */
    /**
     * init: function khoi tao lib
     */
    GtProductQuantityV2.prototype.init = function () {
        var productJson = this.$element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.event();
        this.listen();
    };
    /**
     * event: thêm sự kiện click cho các variants
     */
    GtProductQuantityV2.prototype.event = function () {
        var _this = this;
        if (this._productJson) {
            if (this.classMinus) {
                this.$element
                    .find(this.classMinus)
                    .off("click.minus")
                    .on("click.minus", function () {
                    if (!_this.$element.hasClass("gt_soldout")) {
                        var value = _this.$element.find(_this.classInput).val();
                        value = parseInt(value) - 1;
                        if (value <= 1) {
                            value = 1;
                        }
                        _this.$element.find(_this.classInput).attr("value", value).val(value);
                        window.SOLID.store.dispatch("quantity" + _this._productJson.id, value);
                    }
                });
            }
            if (this.classPlus) {
                this.$element
                    .find(this.classPlus)
                    .off("click.plus")
                    .on("click.plus", function () {
                    if (!_this.$element.hasClass("gt_soldout")) {
                        var value = _this.$element.find(_this.classInput).val();
                        value = parseInt(value) + 1;
                        if (value <= 1) {
                            value = 1;
                        }
                        _this.$element.find(_this.classInput).attr("value", value).val(value);
                        window.SOLID.store.dispatch("quantity" + _this._productJson.id, value);
                    }
                });
            }
            if (this.classInput) {
                var $input = this.$element.find(this.classInput);
                if (this.mode !== "production") {
                    var quantityStore = window.SOLID.store.getState("quantity" + this._productJson.id) || 1;
                    $input.val(quantityStore);
                }
                $input.off("change.inputQuantity").on("change.inputQuantity", function (e) {
                    var $target = $(e.currentTarget);
                    var quantity = $target.val();
                    if (quantity == 0) {
                        $target.val(1);
                        quantity = 1;
                    }
                    window.SOLID.store.dispatch("quantity" + _this._productJson.id, quantity);
                });
            }
        }
    };
    /**
     * listen: lắng nghe khi có variant active thay đổi
     */
    GtProductQuantityV2.prototype.listen = function () {
        var _this = this;
        var store = window.SOLID.store;
        if (this._productJson) {
            store.subscribe("variant" + this._productJson.id, function (variant) {
                _this.updateDataCacheAttr(variant.id);
                if (variant.available) {
                    _this.$element.removeClass("gf_soldout");
                    _this.$element.removeClass("gt_soldout");
                    if (_this.classInput) {
                        _this.$element.find(_this.classInput).removeAttr("disabled");
                    }
                }
                else {
                    // Nếu là soldout update quantity về 1 và disable input thay đổi quantity
                    _this.$element.addClass("gf_soldout");
                    _this.$element.addClass("gt_soldout");
                    window.SOLID.store.dispatch("quantity" + _this._productJson.id, 1);
                    if (_this.classInput) {
                        jQuery(_this.classInput).attr("value", 1).val(1);
                        _this.$element.find(_this.classInput).attr("disabled", "disabled");
                    }
                }
            });
            store.subscribe("quantity" + this._productJson.id, function (quantity) {
                _this.$element.find(_this.classInput).attr("value", quantity).val(quantity);
            });
        }
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductQuantityV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    return GtProductQuantityV2;
}());
/**
 * gtProductQuantity
 * @param params setting lib product quantity
 * @returns gtProductQuantity
 */
window.SOLID.library.gtProductQuantityV2 = function (params) {
    return new GtProductQuantityV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib106();
      } catch(e) {
        console.error("Error lib id: 106" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib108() {
          (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtProductSaveV2
 */
var GtProductSaveV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params setting truyen vao thu vien
     */
    function GtProductSaveV2(params) {
        this.$element = $(params.$element);
        this.settings = {
            roundNoZeroes: false,
            roundPercent: 0,
            classTextPercent: "",
            classTextNumber: "",
            dataFormat: "",
            dataFormatKey: "",
            customCurrencyFormat: "",
        };
        this.settings = __assign(__assign({}, this.settings), params.settings);
        this.init();
    }
    /**
     * init ham khoi tao thu vien
     */
    GtProductSaveV2.prototype.init = function () {
        var productJson = this.$element
            .closest("[keyword='product'], [data-keyword='product']")
            .find(".ProductJson")
            .text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.setCurrentVariant();
        this.listen();
    };
    /**
     * Lấy dữ liệu gtCurrentVariant ID đã được cache
     */
    GtProductSaveV2.prototype.setCurrentVariant = function () {
        var _this = this;
        if (this._productJson) {
            var variantIDCache = this.getVariantIDCacheByDom();
            if (variantIDCache) {
                this._variantID = Number(variantIDCache);
                var storeVariant = window.SOLID.store.getState("variant" + this._productJson.id);
                if (storeVariant &&
                    storeVariant.id == this._variantID &&
                    storeVariant.variant_init) {
                    this.setPriceWithVariant(storeVariant);
                    return;
                }
                else {
                    var variantData = this._productJson.variants.find(function (item) { return item.id === _this._variantID; });
                    if (variantData) {
                        try {
                            var newVariant = JSON.parse(JSON.stringify(variantData));
                            this.setPriceWithVariant(newVariant);
                            // eslint-disable-next-line camelcase
                            newVariant.variant_init = true;
                            window.SOLID.store.dispatch("variant" + this._productJson.id, newVariant);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            }
        }
    };
    /**
     * listen
     */
    GtProductSaveV2.prototype.listen = function () {
        var _this = this;
        var store = window.SOLID.store;
        if (this._productJson && this._productJson.id) {
            store.subscribe("variant" + this._productJson.id, function (variant) {
                if (variant && variant.variant_init) {
                    return;
                }
                _this.updateDataCacheAttr(variant.id);
                _this.setPriceWithVariant(variant);
            });
            store.subscribe("quantity" + this._productJson.id, function () {
                var variant = window.store.get("variant" + _this._productJson.id);
                if (variant && variant.id) {
                    _this.setPriceWithVariant(variant);
                }
            });
            store.subscribe("dataCurrency", function () {
                var variant = window.store.get("variant" + _this._productJson.id);
                if (variant && variant.id) {
                    _this.setPriceWithVariant(variant);
                }
            });
        }
    };
    /**
     * getVariantIDCacheByDom
     * @returns current variant id
     */
    GtProductSaveV2.prototype.getVariantIDCacheByDom = function () {
        var variantID = this.$element.attr("data-variant-id") || "";
        return variantID;
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductSaveV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    /**
     * setPriceWithVariant
     * @param variant variant
     */
    GtProductSaveV2.prototype.setPriceWithVariant = function (variant) {
        if (variant.compare_at_price &&
            variant.price &&
            variant.compare_at_price > variant.price) {
            this.$element.addClass("gt_active");
            // Giá giảm theo %
            if (this.settings.classTextPercent) {
                var $number = this.$element.find(this.settings.classTextPercent);
                var number = this.getPercentDiscount(variant.price, variant.compare_at_price);
                $number.html(number);
            }
            // Giá giảm theo sổ tiền
            if (this.settings.classTextNumber) {
                var $price = this.$element.find(this.settings.classTextNumber);
                var diff = variant.compare_at_price - variant.price;
                var diffFormat = this.formatMoneyPlugin(diff);
                $price.html(diffFormat);
            }
        }
        else {
            this.$element.removeClass("gt_active");
        }
    };
    /**
     * Format Money
     * @param price price
     * @returns Format Money
     */
    GtProductSaveV2.prototype.formatMoneyPlugin = function (price) {
        price = this.getPriceWithQuantity(price);
        var dataCurrency = window.store.get("dataCurrency");
        var format = window.__GemSettings.money;
        var priceFormat = price.toString();
        if (!dataCurrency) {
            // default shopify format
            priceFormat = window.Shopify.formatMoney(price, format);
        }
        else {
            // ES addon auto currency converter
            var notApplyRoundDecimal = true; // no apply round decimal for save money
            priceFormat = window.Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data, this.settings.customCurrencyFormat, notApplyRoundDecimal);
        }
        if (this.settings.dataFormat && this.settings.dataFormatKey) {
            priceFormat = this.settings.dataFormat.replace(this.settings.dataFormatKey, priceFormat);
        }
        return priceFormat;
    };
    /**
     * getPriceWithQuantity
     * @param price price
     * @returns price
     */
    GtProductSaveV2.prototype.getPriceWithQuantity = function (price) {
        if (this._productJson) {
            var quantityProduct = window.store.get("quantity" + this._productJson.id);
            quantityProduct = Number(quantityProduct);
            if (!quantityProduct || isNaN(quantityProduct)) {
                quantityProduct = 1;
            }
            price = Number(price) * quantityProduct;
        }
        return price;
    };
    /**
     * trả về phần trăm giảm giá
     * @param price giá bán
     * @param comparePrice giá gốc
     * @returns trăm giảm giá
     */
    GtProductSaveV2.prototype.getPercentDiscount = function (price, comparePrice) {
        var diff = comparePrice - price;
        diff = diff / comparePrice;
        diff = diff * 100;
        var diffString = diff.toString();
        if (this.settings.roundNoZeroes) {
            diffString = this.roundTo(diff, this.settings.roundPercent);
        }
        else {
            diffString = diff.toFixed(this.settings.roundPercent);
        }
        diffString += "%";
        if (this.settings.dataFormat && this.settings.dataFormatKey) {
            diffString = this.settings.dataFormat.replace(this.settings.dataFormatKey, diffString);
        }
        return diffString;
    };
    /**
     * Làm tròn số tới hàng thập phân thứ n bỏ O ở cuối string nếu có
     * @param n giá trị cần làm tròn
     * @param digits Làm tròn số tới hàng thập phân thứ
     * @returns string
     */
    GtProductSaveV2.prototype.roundTo = function (n, digits) {
        if (digits === undefined) {
            digits = 0;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        var test = Math.round(n) / multiplicator;
        return test.toFixed(digits);
    };
    return GtProductSaveV2;
}());
/**
 * gtProductSaveV2
 * @param params setting lib product gtProductSaveV2
 * @returns gtProductSaveV2
 */
window.SOLID.library.gtProductSaveV2 = function (params) {
    return new GtProductSaveV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib108();
      } catch(e) {
        console.error("Error lib id: 108" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib105() {
          (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtProductSwatchesV2
 */
var GtProductSwatchesV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params settings class and element
     */
    function GtProductSwatchesV2(params) {
        this.$element = $(params.$element);
        this.classCurrentValue = params.settings.classCurrentValue;
        this.classItem = params.settings.classItem;
        this.classInputIdHidden = params.settings.classInputIdHidden;
        this.classBtnSelect = params.settings.classBtnSelect;
        this.classCurrentStatus = params.settings.classCurrentStatus;
        this.init();
    }
    /* private methods */
    /**
     * init: function khoi tao lib
     */
    GtProductSwatchesV2.prototype.init = function () {
        var productJson = this.$element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.setCurrentVariant();
        this.event();
        this.listen();
    };
    /**
     * setInitVariant: tim ra variant dang active
     */
    GtProductSwatchesV2.prototype.setCurrentVariant = function () {
        if (this._productJson) {
            var storeVariant = window.SOLID.store.getState("variant" + this._productJson.id);
            if (storeVariant && storeVariant.variant_init) {
                window.SOLID.store.dispatch("variant" + this._productJson.id, storeVariant);
                return;
            }
            // const $productJson = this.$element.closest("[keyword='product']").find(".ProductJson");
            // if ($productJson && $productJson.length) {
            // const variantID: number = parseInt($productJson.attr("data-variant"));
            var variantIDCache = this.getVariantIDCacheByDom();
            if (variantIDCache) {
                for (var i = 0; i < this._productJson.variants.length; i++) {
                    var currentVariant = this._productJson.variants[i];
                    if (currentVariant.id == variantIDCache) {
                        try {
                            var newVariant = JSON.parse(JSON.stringify(currentVariant));
                            // eslint-disable-next-line camelcase
                            newVariant.variant_init = true;
                            window.SOLID.store.dispatch("variant" + this._productJson.id, newVariant);
                        }
                        catch (e) {
                            console.log(e);
                        }
                        break;
                    }
                }
            }
            // }
        }
    };
    /**
     * event: thêm sự kiện click cho các variants
     */
    GtProductSwatchesV2.prototype.event = function () {
        if (this._productJson) {
            try {
                var variants_1 = this._productJson.variants;
                var $select = this.$element.find(this.classBtnSelect);
                var _this_1 = this;
                $select.off("click.select").on("click.select", function () {
                    var $el = jQuery(this);
                    if (!$el.hasClass("gt_soldout")) {
                        var name_1 = $el.attr("data-name");
                        // Update active
                        var $selector = _this_1.$element.find(_this_1.classBtnSelect + "[data-name=\"" + name_1 + "\"]");
                        if ($selector && $selector.length) {
                            $selector.removeClass("gf_active");
                            $selector.removeClass("gt_active");
                        }
                        $el.addClass("gf_active");
                        $el.addClass("gt_active");
                        var $actives = _this_1.$element.find(_this_1.classBtnSelect + ".gf_active," + _this_1.classBtnSelect + ".gt_active");
                        var values = [];
                        var i = void 0;
                        if ($actives && $actives.length) {
                            for (i = 0; i < $actives.length; i++) {
                                var activeValue = jQuery($actives[i]).attr("data-value");
                                if (activeValue) {
                                    values.push(activeValue);
                                }
                            }
                        }
                        var currentVariant = {};
                        if (values && values.length) {
                            for (i = 0; i < variants_1.length; i++) {
                                var variant = variants_1[i];
                                var options = variant.options; // => []
                                // console.log(options, " vs ", values)
                                if (_this_1.compare(values, options)) {
                                    currentVariant = variant;
                                    break;
                                }
                            }
                        }
                        if (!jQuery.isEmptyObject(currentVariant)) {
                            window.SOLID.store.dispatch("variant" + _this_1._productJson.id, currentVariant);
                        }
                        else {
                            // Sản phẩm không được định nghĩa
                            window.SOLID.store.dispatch("variant" + _this_1._productJson.id, {
                                id: 0,
                                available: false,
                            });
                        }
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    /**
     * listen: lắng nghe khi có variant active thay đổi
     */
    GtProductSwatchesV2.prototype.listen = function () {
        var _this_1 = this;
        var store = window.SOLID.store;
        if (this._productJson) {
            var options_1 = this._productJson.options;
            store.subscribe("variant" + this._productJson.id, function (variant) {
                if (variant && variant.variant_init) {
                    return;
                }
                _this_1.updateDataCacheAttr(variant.id);
                var $product = _this_1.$element.closest("[keyword='product'], [data-keyword='product']");
                var $currentStatus = $product.find(_this_1.classCurrentStatus);
                if ($currentStatus && $currentStatus.length) {
                    if (!variant.available) {
                        $currentStatus.show();
                        var labelSoldOut = $currentStatus.attr("data-sold-out") || "Sold Out";
                        $currentStatus.addClass(_this_1.classCurrentStatus.replace(".", "") + "--inner");
                        $currentStatus.html(labelSoldOut);
                    }
                    else {
                        $currentStatus.addClass(_this_1.classCurrentStatus.replace(".", "") + "--inner");
                        $currentStatus.hide();
                    }
                }
                if (variant.options && variant.options.length) {
                    for (var i = 0; i < variant.options.length; i++) {
                        var option = variant["option" + (i + 1)];
                        if (option) {
                            var name_2 = void 0;
                            if (options_1[i]) {
                                name_2 = options_1[i];
                            }
                            if (!name_2 || jQuery.isPlainObject(name_2)) {
                                name_2 = options_1[i].name;
                            }
                            var $item = _this_1.$element.find(_this_1.classItem + "[data-name=\"" + name_2 + "\"]");
                            if ($item && $item.length) {
                                var $select = $item.find(_this_1.classBtnSelect);
                                var $selectActive = $item.find(_this_1.classBtnSelect + "[data-value=\"" + option.replace(/"/g, "\\\"") + "\"]");
                                if (_this_1.classCurrentValue) {
                                    var $currentValue = $item.find(_this_1.classCurrentValue);
                                    if ($currentValue && $currentValue.length) {
                                        var $contentSelectActive = $selectActive.html();
                                        $currentValue.html($contentSelectActive);
                                        $currentValue.attr("data-value", option);
                                    }
                                }
                                if ($select && $select.length && $selectActive && $selectActive.length) {
                                    $select.removeClass("gf_active");
                                    $select.removeClass("gt_active");
                                    $selectActive.addClass("gf_active");
                                    $selectActive.addClass("gt_active");
                                }
                            }
                        }
                    }
                }
                if (!jQuery.isEmptyObject(variant)) {
                    if ($product && $product.length) {
                        var $input = $product.find(_this_1.classInputIdHidden);
                        if ($input && $input.length) {
                            $input.attr("value", variant.id).val(variant.id);
                            var currentURL = window.location.href;
                            var variantURL = _this_1.updateUrlParameter(currentURL, "variant", variant.id);
                            window.history.replaceState({}, "", variantURL);
                        }
                    }
                }
            });
        }
    };
    /**
     * getVariantIDCacheByDom
     * @returns current variant id
     */
    GtProductSwatchesV2.prototype.getVariantIDCacheByDom = function () {
        var variantID = this.$element.attr("data-variant-id") || "";
        return variantID;
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductSwatchesV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    /**
     * compare: compare 2 array
     * @param array array1
     * @param array2 array 2
     * @returns boolean
     */
    GtProductSwatchesV2.prototype.compare = function (array, array2) {
        array.sort();
        array2.sort();
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array2.length; j++) {
                var val1 = array[j];
                var val2 = array2[j];
                val1 = val1.replace(/"/gm, "'");
                val2 = val2.replace(/"/gm, "'");
                if (val1 != val2) {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * updateUrlParameter: update params
     * @param url current url window.location.href
     * @param key "variant"
     * @param value variant id
     * @returns string
     */
    GtProductSwatchesV2.prototype.updateUrlParameter = function (url, key, value) {
        var parser = document.createElement("a");
        parser.href = url;
        var newUrl = parser.protocol + "//" + parser.host + parser.pathname;
        // has parameters ?
        if (parser.search && parser.search.indexOf("?") !== -1) {
            // parameter already exists
            if (parser.search.indexOf(key + "=") !== -1) {
                // paramters to array
                var params_1 = parser.search.replace("?", "");
                params_1 = params_1.split("&");
                params_1.forEach(function (param, i) {
                    if (param.indexOf(key + "=") !== -1) {
                        if (value !== null) {
                            params_1[i] = key + "=" + value;
                        }
                        else {
                            delete params_1[i];
                        }
                    }
                });
                if (params_1.length > 0) {
                    newUrl += "?" + params_1.join("&");
                }
            }
            else if (value !== null) {
                newUrl += parser.search + "&" + key + "=" + value;
            }
            else {
                newUrl += parser.search;
            } // skip the value (remove)
        }
        else if (value !== null) {
            newUrl += "?" + key + "=" + value;
        } // no parameters, create it
        newUrl += parser.hash;
        return newUrl;
    };
    return GtProductSwatchesV2;
}());
/**
 * gtProductSwatchesV2
 * @param params setting lib product swatches
 * @returns gtProductSwatchesV2
 */
window.SOLID.library.gtProductSwatchesV2 = function (params) {
    return new GtProductSwatchesV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib105();
      } catch(e) {
        console.error("Error lib id: 105" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcLib7() {
          "use strict";

/* gtProductPrice */
(function (jQuery) {
  var gtProductPrice = function (element, options) {
    var defaults = {
      classCurrentPrice: null,
      classComparePrice: null,
      syncQuantityPrice: true, // if syncQuantityPrice is true, change quantity trigger change price
    };

    this.settings = {};

    var $element = jQuery(element).parent();
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);

      var productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
          _this.Init();
          _this.listen();
        }
      } catch (e) {
        console.log(e);
      }
    };

    this.Init = function () {
      if (_this.settings.classCurrentPrice) {
        var priceDefaults = $element.find(_this.settings.classCurrentPrice).attr("data-currentprice");
        var price = _this.formatMoneyPlugin(priceDefaults);

        $element.find(_this.settings.classCurrentPrice).html(price);
      }


      if (_this.settings.classComparePrice) {
        var $comparePrice = $element.find(_this.settings.classComparePrice);

        if ($comparePrice && $comparePrice.length) {
          var comparePriceDefaults = $comparePrice.attr("data-currentprice");
          var comparePrice = _this.formatMoneyPlugin(comparePriceDefaults);

          // so sanh comparePrice với price, chỉ hiển thị comparePrice khi comparePrice > price
          if (comparePrice && (!_this.settings.classCurrentPrice || (parseFloat(comparePriceDefaults) > parseFloat(priceDefaults)))) {
            $comparePrice.addClass("gf_active");
            $comparePrice.addClass("gt_active");
            $comparePrice.html(comparePrice);
          }
        }
      }
    };

    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        store.change("variant" + _productJson.id, function (variant) {
          var price = variant.price;

          price = _this.formatMoneyPlugin(price);
          if (_this.settings.classCurrentPrice) {
            var $currentPrice = $element.find(_this.settings.classCurrentPrice);

            $currentPrice.html(price);
            $currentPrice.attr("data-currentprice", variant.price);
          }

          if (_this.settings.classComparePrice) {
            var $comparePrice = $element.find(_this.settings.classComparePrice);

            if ($comparePrice && $comparePrice.length) {
              if (variant.compare_at_price && variant.price && variant.compare_at_price - variant.price > 0) {
                var comparePrice = variant.compare_at_price;

                comparePrice = _this.formatMoneyPlugin(comparePrice);
                $comparePrice.addClass("gf_active");
                $comparePrice.addClass("gt_active");
                $comparePrice.html(comparePrice);
                $comparePrice.attr("data-currentprice", variant.compare_at_price);
              } else {
                $comparePrice.removeClass("gf_active");
                $comparePrice.removeClass("gt_active");
              }
            }
          }
        });

        store.change("quantity" + _productJson.id, function () {
          _this.Init();
        });
      }

      store.change("dataCurrency", function () {
        _this.Init();
      });
    };

    // Get price with quantity
    this.getPriceWithQuantity = function (price) {
      if (_productJson) {
        var quantityProduct = window.store.get("quantity" + _productJson.id);

        quantityProduct = Number(quantityProduct);
        if (!quantityProduct || isNaN(quantityProduct)) {
          quantityProduct = 1;
        }
        price = Number(price) * quantityProduct;
      }
      return price;
    };

    // Format price
    this.formatMoneyPlugin = function (price) {
      if (_this.settings.syncQuantityPrice) {
        price = _this.getPriceWithQuantity(price);
      } else {
        price = Number(price);
      }
      var dataCurrency = window.store.get("dataCurrency");
      var format = __GemSettings.money;

      if (dataCurrency) {
        price = Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data);
      } else {
        price = Shopify.formatMoney(price, format);
      }

      return price;
    };
    this.init();
  };

  jQuery.fn.gtProductPrice = function (options) {
    return this.each(function () {
      var plugin = new gtProductPrice(this, options, jQuery);

      jQuery(this).data("gtproductprice", plugin);
    });
  };
})(jQuery);

        }
        funcLib7();
      } catch(e) {
        console.error("Error lib id: 7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSection0zGJtU0fjXvEOmd() {
          
        }
        funcESSection0zGJtU0fjXvEOmd()
      } catch(e) {
        console.error("Error ESSection Id: 0zGJtU0fjXvEOmd" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSectionUVWOx1M2FEcUJe2() {
          
        }
        funcESSectionUVWOx1M2FEcUJe2()
      } catch(e) {
        console.error("Error ESSection Id: UVWOx1M2FEcUJe2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSectioni4YgRSgOZWKb33Y() {
          
        }
        funcESSectioni4YgRSgOZWKb33Y()
      } catch(e) {
        console.error("Error ESSection Id: i4YgRSgOZWKb33Y" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_boxGeneral() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_boxGeneral";
  var id = "i4YgRSgOZWKb33Y_boxGeneral";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_boxGeneral",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_boxGeneral()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_boxGeneral" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_boxCover() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_boxCover";
  var id = "i4YgRSgOZWKb33Y_boxCover";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_boxCover",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_boxCover()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_boxCover" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_boxCenter() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_boxCenter";
  var id = "i4YgRSgOZWKb33Y_boxCenter";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_boxCenter",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_boxCenter()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_boxCenter" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_image1() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_image1";
  var id = "i4YgRSgOZWKb33Y_image1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_image1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_image1()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_image1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_content1() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_content1";
  var id = "i4YgRSgOZWKb33Y_content1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_content1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_content1()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_content1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_heading1() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_heading1";
  var id = "i4YgRSgOZWKb33Y_heading1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_heading1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_heading1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_heading1()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_heading1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_message1() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_message1";
  var id = "i4YgRSgOZWKb33Y_message1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_message1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_message1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_message1()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_message1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_subMessage1() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_subMessage1";
  var id = "i4YgRSgOZWKb33Y_subMessage1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_subMessage1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_subMessage1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_subMessage1()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_subMessage1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_boxRight() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_boxRight";
  var id = "i4YgRSgOZWKb33Y_boxRight";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_boxRight",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_boxRight()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_boxRight" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_boxContentTop() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_boxContentTop";
  var id = "i4YgRSgOZWKb33Y_boxContentTop";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_boxContentTop",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_boxContentTop()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_boxContentTop" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_box2() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_box2";
  var id = "i4YgRSgOZWKb33Y_box2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_box2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_box2()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_box2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_image2() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_image2";
  var id = "i4YgRSgOZWKb33Y_image2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_image2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_image2()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_image2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_content2() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_content2";
  var id = "i4YgRSgOZWKb33Y_content2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_content2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_content2()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_content2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_heading2() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_heading2";
  var id = "i4YgRSgOZWKb33Y_heading2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_heading2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_heading2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_heading2()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_heading2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_message2() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_message2";
  var id = "i4YgRSgOZWKb33Y_message2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_message2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_message2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_message2()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_message2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_subMessage2() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_subMessage2";
  var id = "i4YgRSgOZWKb33Y_subMessage2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_subMessage2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_subMessage2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_subMessage2()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_subMessage2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_box3() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_box3";
  var id = "i4YgRSgOZWKb33Y_box3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_box3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_box3()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_box3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_image3() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_image3";
  var id = "i4YgRSgOZWKb33Y_image3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_image3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_image3()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_image3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_content3() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_content3";
  var id = "i4YgRSgOZWKb33Y_content3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_content3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_content3()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_content3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_heading3() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_heading3";
  var id = "i4YgRSgOZWKb33Y_heading3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_heading3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_heading3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_heading3()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_heading3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_message3() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_message3";
  var id = "i4YgRSgOZWKb33Y_message3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_message3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_message3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_message3()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_message3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_subMessage3() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_subMessage3";
  var id = "i4YgRSgOZWKb33Y_subMessage3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_subMessage3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_subMessage3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_subMessage3()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_subMessage3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_box4() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_box4";
  var id = "i4YgRSgOZWKb33Y_box4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_box4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_box4()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_box4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_image4() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_image4";
  var id = "i4YgRSgOZWKb33Y_image4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_image4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_image4()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_image4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_content4() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_content4";
  var id = "i4YgRSgOZWKb33Y_content4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "i4YgRSgOZWKb33Y_content4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_content4()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_content4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_heading4() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_heading4";
  var id = "i4YgRSgOZWKb33Y_heading4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_heading4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_heading4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_heading4()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_heading4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_message4() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_message4";
  var id = "i4YgRSgOZWKb33Y_message4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_message4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_message4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_message4()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_message4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomi4YgRSgOZWKb33Y_subMessage4() {
          (function() {
  var elementClassName = ".gt_atom-i4YgRSgOZWKb33Y_subMessage4";
  var id = "i4YgRSgOZWKb33Y_subMessage4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "i4YgRSgOZWKb33Y_subMessage4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "i4YgRSgOZWKb33Y_subMessage4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomi4YgRSgOZWKb33Y_subMessage4()
      } catch(e) {
        console.error("Error ESAtom Id: i4YgRSgOZWKb33Y_subMessage4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSectionzTvkNgEHQm2DHkz() {
          
        }
        funcESSectionzTvkNgEHQm2DHkz()
      } catch(e) {
        console.error("Error ESSection Id: zTvkNgEHQm2DHkz" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_box() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_box";
  var id = "zTvkNgEHQm2DHkz_box";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_box",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }

    function checkRemoteDefaultInput() {
      if (isExistAtomVariant()) {
        var $inputVariantDefault = $element.find(".gt_variant-input--default");
        if ($inputVariantDefault && $inputVariantDefault.length) {
          $($inputVariantDefault[0]).remove()
        }
      }

      if (isExistAtomQuantity()) {
        var $inputQuantityDefault = $element.find(".gt_quantity-input--default");
        if ($inputQuantityDefault && $inputQuantityDefault.length) {
          $($inputQuantityDefault[0]).remove()
        }
      }
    }

    function isExistAtomVariant() {
      var $atomProduct = $element.find(".gt_variant--input")
      if ($atomProduct && $atomProduct.length) {
        return true
      }
      return false
    }

    function isExistAtomQuantity() {
      var $atomQuantity = $element.find(".gt_quantity--input")
      if ($atomQuantity && $atomQuantity.length) {
        return true
      }
      return false
    }
    /* init block script */
    addInteraction();
    checkRemoteDefaultInput();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_box()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_box" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_boxImage() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_boxImage";
  var id = "zTvkNgEHQm2DHkz_boxImage";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_boxImage",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_boxImage()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_boxImage" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productImageList() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productImageList";
  var id = "zTvkNgEHQm2DHkz_productImageList";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var mode = "production";
    var checkWindowWidth = $(window).width();
    var widthSliderCurrent;
    var sizeIconDotsCurrent;
    var imageListPositionCurrent;
    var $imgSlide = $element.find(".gt_product-carousel-box");
    var $imgBox = $element.find(".gt_product-img-box");
    var $imgBoxInner = $element.find(".gt_product-img--inner");
    var $imgSlideItem = $element.find(".gt_product-carousel--item");
    var $productImgInner = $element.find(".gt_product-image--inner");
    var $controlNext = $element.find(".gt_product--swiper .gt_control-next");
    var $controlPrev = $element.find(".gt_product--swiper .gt_control-prev");
    var dynamicDotsOnOff = "false" === "true";
    var slidesPerView_lg = "5.5";
    var slidesPerView_md = "5.5";
    var slidesPerView_sm = "5";
    var slidesPerView_xs = "5";
    var spaceBetween_lg = parseInt("8") || 1;
    var spaceBetween_md = parseInt("8") || 1;
    var spaceBetween_sm = parseInt("16") || 1;
    var spaceBetween_xs = parseInt("10") || 1;
    var widthActive = "false" === "true";
    var widthSlider = "100%";
    var widthSlider_lg = "100%";
    var widthSlider_md = "100%";
    var widthSlider_sm = "100%";
    var widthSlider_xs = "100%";
    var sizeIconDots_sm = "20px";
    var sizeIconDots_xs = "15px";
    var imageRadio = "square";
    var initShowFeatureImage = "selectedVariantAvailable" === "featureImage";
    var imageListPosition = "bottom";
    var imageListPosition_lg = "bottom";
    var imageListPosition_md = "bottom";
    var imageListPosition_sm = "bottom";
    var imageListPosition_xs = "bottom";
    var imageListActive = "false" === "true";
    var spaceBetween_sm = "16";
    var spaceBetween_xs = "10";
    var scaleZoomImageActive = "true" === "true";
    var mySwiper;
    var mySwiperFeature;
    var spacingSmall = "16px";
    /* store get state block script */
    /* methods block script */
    function listen() {
      let observer = new ResizeObserver(() => {
        if (mySwiper) {
          mySwiper.update()
        }
      })
      observer.observe($element[0]);
    }

    function initSlider() {
      if (mySwiper) {
        mySwiper.destroy();
      }

      var $swiperContainer = $element.find(".gt_product--swiper-zTvkNgEHQm2DHkz_productImageList");
      if (!$swiperContainer || !$swiperContainer.length) {
        return;
      }

      if ($swiperContainer[0].swiper) {
        $swiperContainer[0].swiper.destroy();
      }

      if (mySwiperFeature) {
        mySwiperFeature.destroy();
      }

      if ($swiperContainer.find(".swiper-slide").length == 1) {
        $swiperContainer.addClass("gt_disabled");
      }

      var $swiperContainerFeature = $element.find(".gt_product-feature--swiper-zTvkNgEHQm2DHkz_productImageList");
      if (!$swiperContainerFeature || !$swiperContainerFeature.length) {
        return;
      }

      if ($swiperContainerFeature[0].swiper) {
        $swiperContainerFeature[0].swiper.destroy();
      }

      if ($swiperContainerFeature.find(".swiper-slide").length == 1) {
        $swiperContainerFeature.find(".swiper-wrapper").addClass("gt_disabled");
        $swiperContainerFeature.find(".gt_control-pagination").addClass("gt_disabled");
      }

      var gtProductImageParams = {
        $element: $element,
        settings: {
          classSwiperItems: ".gt_product--swiper-zTvkNgEHQm2DHkz_productImageList .gt_product-carousel--item",
          classSwiperItemsImage: ".gt_product--swiper-zTvkNgEHQm2DHkz_productImageList .gt_product-carousel--item img",
          classSwiperContainer: ".gt_product--swiper-zTvkNgEHQm2DHkz_productImageList",
          initShowFeatureImage: initShowFeatureImage,
          swiperSetting: getDataSwiperSettings(),
          //featureimageswiper
          featureSwiperSetting: getDataSwiperSettingsFeature(),
          classFeatureSwiperContainer: ".gt_product-feature--swiper-zTvkNgEHQm2DHkz_productImageList",
          classFeatureSwiperItemsImage: ".gt_product-feature--swiper-zTvkNgEHQm2DHkz_productImageList .gt_product-image--feature",
        }
      }

      window.SOLID.library.gtProductImagesV2(gtProductImageParams);

      mySwiper = $swiperContainer[0].swiper;
      mySwiperFeature = $swiperContainerFeature[0].swiper;
    }

    function listen() {
      let observer = new ResizeObserver(() => {
        if (mySwiper) {
          mySwiper.update()
        }
      })
      observer.observe($element[0]);
    }

    function getDataSwiperSettings() {
      let direction = 'horizontal';
      if (imageListPositionCurrent === "left" || imageListPositionCurrent === "right") {
        direction = "vertical";
      }
      return {
        mousewheel: false,
        slidesPerView: 3,
        spaceBetween: 16,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".gt_product--swiper-zTvkNgEHQm2DHkz_productImageList .gt_control-next",
          prevEl: ".gt_product--swiper-zTvkNgEHQm2DHkz_productImageList .gt_control-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: slidesPerView_xs,
            spaceBetween: spaceBetween_xs,
            direction: direction,
            mousewheel: false,
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          },
          577: {
            slidesPerView: slidesPerView_sm,
            spaceBetween: spaceBetween_sm,
            direction: direction,
            mousewheel: false,
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          },
          993: {
            slidesPerView: slidesPerView_md,
            spaceBetween: spaceBetween_md,
            direction: direction,
            mousewhel: true,
          },
          1201: {
            slidesPerView: slidesPerView_lg,
            spaceBetween: spaceBetween_lg,
            direction: direction,
            mousewhel: true,
          }
        },
      }
    }

    function getDataSwiperSettingsFeature() {
      return {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
          nextEl: ".gt_product-feature--swiper-zTvkNgEHQm2DHkz_productImageList .gt_product-img-nav--right",
          prevEl: ".gt_product-feature--swiper-zTvkNgEHQm2DHkz_productImageList .gt_product-img-nav--left",
        },
        pagination: {
          el: ".gt_control-pagination",
          type: 'bullets',
          clickable: true,
          renderBullet: function(index, classname) {
            return `<div class="gt_control-pagination-item ` + classname + ` ">
            <span data-optimize-type="icon"  data-attribute="iconDots,"  data-section-id="zTvkNgEHQm2DHkz_productImageList"  class="gt_icon"><svg height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 22C13.05 22 13.5 21.55 13.5 21V3C13.5 2.45 13.05 2 12.5 2C11.95 2 11.5 2.45 11.5 3V21C11.5 21.55 11.95 22 12.5 22ZM8.5 18C9.05 18 9.5 17.55 9.5 17V7C9.5 6.45 9.05 6 8.5 6C7.95 6 7.5 6.45 7.5 7V17C7.5 17.55 7.95 18 8.5 18ZM5.5 13C5.5 13.55 5.05 14 4.5 14C3.95 14 3.5 13.55 3.5 13V11C3.5 10.45 3.95 10 4.5 10C5.05 10 5.5 10.45 5.5 11V13ZM16.5 18C17.05 18 17.5 17.55 17.5 17V7C17.5 6.45 17.05 6 16.5 6C15.95 6 15.5 6.45 15.5 7V17C15.5 17.55 15.95 18 16.5 18ZM19.5 13V11C19.5 10.45 19.95 10 20.5 10C21.05 10 21.5 10.45 21.5 11V13C21.5 13.55 21.05 14 20.5 14C19.95 14 19.5 13.55 19.5 13Z" fill="currentColor"/> </svg></span>
          </div>`;
          }
        },
        breakpoints: {
          0: {
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          },
          577: {
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          }
        },
      }
    }

    function changeSliderActive(value) {
      if (value && value.sliderIndex !== NaN) {
        if (loop) {
          mySwiper.slideToLoop(value.sliderIndex, 500, true);
        } else {
          mySwiper.slideTo(value.sliderIndex, 500, true);
        }
      }
    }

    function isImgSliderBottom() {
      const $productImage = $element.find(".gt_product-image-list--bottom");
      if ($productImage && $productImage.length) {
        return true;
      }
      return false;
    }

    function checkImageListActive() {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        if (imageListActive) {
          slidesPerView_xs = "5";
          spaceBetween_xs = "10";
        } else if (!imageListActive) {
          slidesPerView_xs = 1;
          spaceBetween_xs = 0;
        }
      } else if (checkWindowWidth <= 992) {
        if (imageListActive) {
          slidesPerView_sm = "5";
          spaceBetween_sm = "16"
        } else if (!imageListActive) {
          slidesPerView_sm = 1;
          spaceBetween_sm = 0;
        }
      }
    }

    function calculatorImageSlideHeight() {
      var delay = setTimeout(function() {
        checkWindowWidth = $(window).width();
        if (!isImgSliderBottom()) {
          var imgBoxHeight = $imgBox[0].offsetHeight;
          $imgSlide.css("height", imgBoxHeight);
          mySwiper.update();
        } else {
          $imgSlide.css("height", "");
        }
      }, 500);
    }

    function optimizeSizeIconDots(value) {
      mySwiper.pagination.render();
      var $paginationItem = $element.find(".gt_control-pagination-item");
      var $paginationItemIcon = $element.find(".gt_control-pagination-item .gt_icon");
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        sizeIconDots_xs = value;
      } else if (checkWindowWidth <= 992) {
        sizeIconDots_sm = value;
      }
      $paginationItemIcon.css("cssText", "width: " + value + " !important; height: " + value + "!important;");
      $paginationItem.css("cssText", "width: calc(8px + " + value + ") !important; height: calc(8px + " + value + ") !important;");
      mySwiper.pagination.update();
    }

    function optimizeSlidePerView(value) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        slidesPerView_xs = value;
      } else if (checkWindowWidth <= 992) {
        slidesPerView_sm = value;
      } else if (checkWindowWidth <= 1200) {
        slidesPerView_md = value;
      } else {
        slidesPerView_lg = value;
      }
      initSlider();
    }

    function optimizeWidthSlider(value) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        widthSlider_xs = value;
      } else if (checkWindowWidth <= 992) {
        widthSlider_sm = value;
      } else if (checkWindowWidth <= 1200) {
        widthSlider_md = value;
      } else {
        widthSlider_lg = widthSlider = value;
      }
      $element.css("cssText", "width: " + value + " !important;");
      mySwiper.update();
      calculatorImageSlideHeight();
    }

    function optimizeWidthActive(value) {
      widthActive = value;
      if (!value) {
        $element.css("cssText", "width: null");
      } else {
        checkWindowWidth = $(window).width();
        widthSliderCurrent = 0;
        if (checkWindowWidth <= 576) {
          widthSliderCurrent = widthSlider_xs;
        } else if (checkWindowWidth <= 992) {
          widthSliderCurrent = widthSlider_sm;
        } else if (checkWindowWidth <= 1200) {
          widthSliderCurrent = widthSlider_md;
        } else {
          widthSliderCurrent = widthSlider;
        }
        $element.css("cssText", "width: " + widthSliderCurrent + " !important;");
        initSlider();
        mySwiper.update();
      }
    }

    function checkImageListPosition() {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        imageListPositionCurrent = imageListPosition_xs;
        spacingSmall = "10px";
      } else if (checkWindowWidth <= 992) {
        imageListPositionCurrent = imageListPosition_sm;
        spacingSmall = "16px";
      } else if (checkWindowWidth <= 1200) {
        imageListPositionCurrent = imageListPosition_md;
        spacingSmall = "16px";
      } else {
        imageListPositionCurrent = imageListPosition;
        spacingSmall = "16px";
      }
      $element.find("#gt_product-image-list-id").attr("class", "gt_product-image-list--" + imageListPositionCurrent);
      //showimage
      var $swiperWrapperHide = $element.find(".gt-carousel--hide-default");
      if ($swiperWrapperHide && $swiperWrapperHide.length) {
        $swiperWrapperHide.removeClass("gt-carousel--hide-default");
      }
      if (imageListPositionCurrent !== "bottom") {
        var $productImageListWrapper = $element.find(".gt_product-carousel-box");
        var $productImageBox = $element.find(".gt_product-image--inner");
        $productImageListWrapper.css("height", $productImageBox.outerHeight());
      }
      //css
      if (imageListPositionCurrent === "left" || imageListPositionCurrent === "right") {
        $controlNext.css({
          "height": "auto",
          "width": "100%"
        });
        $controlPrev.css({
          "height": "auto",
          "width": "100%"
        });
      }
      if (imageListPositionCurrent === "left") {
        $productImgInner.css("flex-direction", "row-reverse");
        $imgSlide.css({
          "padding-left": "0",
          "padding-right": spacingSmall
        });
      } else if (imageListPositionCurrent === "right") {
        $productImgInner.css("flex-direction", "row");
        $imgSlide.css({
          "padding-right": "0",
          "padding-left": spacingSmall
        });
      } else {
        $productImgInner.css("flex-direction", "column");
        $imgSlide.css("padding", "");
        $controlNext.css({
          "height": "100%",
          "width": "auto"
        });
        $controlPrev.css({
          "height": "100%",
          "width": "auto"
        });
      }
      initSlider();
      mySwiper.update();
    }

    function optimizeImageListPosition(value) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        imageListPosition_xs = imageListPositionCurrent = value;
      } else if (checkWindowWidth <= 992) {
        imageListPosition_sm = imageListPositionCurrent = value;
      } else if (checkWindowWidth <= 1200) {
        imageListPosition_md = imageListPositionCurrent = value;
      } else {
        imageListPosition_lg = imageListPositionCurrent = imageListPosition = value;
      }
      if (imageListPositionCurrent === "left" || imageListPositionCurrent === "right") {
        $controlNext.css({
          "height": "auto",
          "width": "100%"
        });
        $controlPrev.css({
          "height": "auto",
          "width": "100%"
        });
      }
      if (imageListPositionCurrent === "left") {
        $productImgInner.css("flex-direction", "row-reverse");
        $imgSlide.css({
          "padding-left": "0",
          "padding-right": spacingSmall
        });
      } else if (imageListPositionCurrent === "right") {
        $productImgInner.css("flex-direction", "row");
        $imgSlide.css({
          "padding-right": "0",
          "padding-left": spacingSmall
        });
      } else {
        $productImgInner.css("flex-direction", "column");
        $imgSlide.css("padding", "");
        $controlNext.css({
          "height": "100%",
          "width": "auto"
        });
        $controlPrev.css({
          "height": "100%",
          "width": "auto"
        });
      }
      $element.find("#gt_product-image-list-id").attr("class", "gt_product-image-list--" + value);
      initSlider();
      mySwiper.update();
      calculatorImageSlideHeight();
    }

    function optimizeImageRadio(value) {
      checkWindowWidth = $(window).width();
      if (value === "square") {
        $imgBoxInner.css("padding-top", "calc(100%)");
      } else if (value === "landscape") {
        $imgBoxInner.css("padding-top", "calc(100% * 3 / 4)");
      } else if (value === "portrait") {
        $imgBoxInner.css("padding-top", "calc(100% * 4 / 3)");
      }
      if (isImgSliderBottom()) {
        if (value === "square") {
          $imgSlideItem.css("padding-top", "calc(100%)");
        } else if (value === "landscape") {
          $imgSlideItem.css("padding-top", "calc(100% * 3 / 4)");
        } else if (value === "portrait") {
          $imgSlideItem.css("padding-top", "calc(100% * 4 / 3)");
        }
      }
      calculatorImageSlideHeight();
    }

    function optimizeImageRadioActive(value) {
      if (!value) {
        $imgBoxInner.css("padding-top", "");
        $imgSlideItem.css("padding-top", "");
      } else {
        optimizeImageRadio(value);
        checkWindowWidth = $(window).width();
        if (value === "square") {
          $imgBoxInner.css("padding-top", "calc(100%)");
        } else if (value === "landscape") {
          $imgBoxInner.css("padding-top", "calc(100% * 3 / 4)");
        } else if (value === "portrait") {
          $imgBoxInner.css("padding-top", "calc(100% * 4 / 3)");
        }
        if (isImgSliderBottom() || checkWindowWidth < 992) {
          if (value === "square") {
            $imgSlideItem.css("padding-top", "calc(100%)");
          } else if (value === "landscape") {
            $imgSlideItem.css("padding-top", "calc(100% * 3 / 4)");
          } else if (value === "portrait") {
            $imgSlideItem.css("padding-top", "calc(100% * 4 / 3)");
          }
        }
      }
      calculatorImageSlideHeight();
    }

    function optimizeDynamicDotsOnOff(value) {
      dynamicDotsOnOff = value;
      initSlider();
      var paginationEl = mySwiperFeature.pagination.el;
      if (value) {
        paginationEl.style.cssText = paginationEl.style.cssText + "margin: 0px auto; transform: translateX(0px); justify-content: unset;";
      } else {
        paginationEl.style.cssText = paginationEl.style.cssText + "justify-content: center;";
        paginationEl.classList.remove("swiper-pagination-bullets-dynamic");
      }
      mySwiperFeature.pagination.update();
      mySwiperFeature.update();
    }
    /* init block script */
    listen();
    if (scaleZoomImageActive) {
      $element.find(".gt_product-image--feature").gfProductZoomImage({
        classHoverItem: ".gt_product-img-box",
        scale: "1.5",
        classSection: ".gt_atom-zTvkNgEHQm2DHkz_productImageList",
      });
    }
    checkImageListPosition();
    checkImageListActive();
    initSlider();
    calculatorImageSlideHeight();

    var delayResize = 0;
    $(window).off("resize.checkSwitchScreenszTvkNgEHQm2DHkz_productImageList").on("resize.checkSwitchScreenszTvkNgEHQm2DHkz_productImageList", function() {
      clearTimeout(delayResize);
      delayResize = setTimeout(function() {
        const windowWidthCurrent = $(window).width();
        if (windowWidthCurrent !== checkWindowWidth) {
          checkWindowWidth = windowWidthCurrent;
          widthSliderCurrent = 0;
          sizeIconDotsCurrent = 0;
          if (checkWindowWidth <= 576) {
            widthSliderCurrent = widthSlider_xs;
            sizeIconDotsCurrent = sizeIconDots_xs;
          } else if (checkWindowWidth <= 992) {
            widthSliderCurrent = widthSlider_sm;
            sizeIconDotsCurrent = sizeIconDots_sm;
          } else if (checkWindowWidth <= 1200) {
            widthSliderCurrent = widthSlider_md;
          } else {
            widthSliderCurrent = widthSlider;
          }
          if (widthActive) {
            $element.css("cssText", "width: " + widthSliderCurrent + " !important;");
            mySwiper.update();
          }
          var $paginationItem = $element.find(".gt_control-pagination-item");
          var $paginationItemIcon = $element.find(".gt_control-pagination-item .gt_icon");
          $paginationItemIcon.css("cssText", "width: " + sizeIconDotsCurrent + " !important; height: " + sizeIconDotsCurrent + "!important;");
          $paginationItem.css("cssText", "width: calc(8px + " + sizeIconDotsCurrent + ") !important; height: calc(8px + " + sizeIconDotsCurrent + ") !important;");

          checkImageListPosition();
          calculatorImageSlideHeight();
          checkImageListActive();
          initSlider();
        }
      }, 100)
    });

    if ($element.find(".swiper-slide").length == 1) {
      $element.find('.swiper-wrapper').addClass("gt_disabled");
      $element.find('.gt_control-pagination').addClass("gt_disabled");
    }
    /* store subscribe block script */
    store.subscribe("optimize-zTvkNgEHQm2DHkz_productImageList-sizeIconDots", optimizeSizeIconDots);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-slidesPerView", optimizeSlidePerView);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-widthSlider", optimizeWidthSlider);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-widthActive", optimizeWidthActive);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-imageRadio", optimizeImageRadio);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-imageRadioActive", optimizeImageRadioActive);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-dynamicDotsOnOff", optimizeDynamicDotsOnOff);
    store.subscribe("optimal-zTvkNgEHQm2DHkz_productImageList-imageListPosition", optimizeImageListPosition);
    store.subscribe("trigger-slider-zTvkNgEHQm2DHkz_productImageList", changeSliderActive);

    function destroy() {
      store.unsubscribe("optimize-zTvkNgEHQm2DHkz_productImageList-sizeIconDots", optimizeSizeIconDots);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-slidesPerView", optimizeSlidePerView);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-widthSlider", optimizeWidthSlider);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-widthActive", optimizeWidthActive);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-imageRadio", optimizeImageRadio);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-imageRadioActive", optimizeImageRadioActive);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-dynamicDotsOnOff", optimizeDynamicDotsOnOff);
      store.unsubscribe("optimal-zTvkNgEHQm2DHkz_productImageList-imageListPosition", optimizeImageListPosition);
      store.unsubscribe("trigger-slider-zTvkNgEHQm2DHkz_productImageList", changeSliderActive);
    }
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productImageList()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productImageList" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_boxInfo() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_boxInfo";
  var id = "zTvkNgEHQm2DHkz_boxInfo";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_boxInfo",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_boxInfo()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_boxInfo" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productTitle() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productTitle";
  var id = "zTvkNgEHQm2DHkz_productTitle";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "zTvkNgEHQm2DHkz_productTitle",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "zTvkNgEHQm2DHkz_productTitle",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productTitle()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productTitle" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_boxPrice() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_boxPrice";
  var id = "zTvkNgEHQm2DHkz_boxPrice";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_boxPrice",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_boxPrice()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_boxPrice" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_boxDeal() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_boxDeal";
  var id = "zTvkNgEHQm2DHkz_boxDeal";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_boxDeal",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_boxDeal()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_boxDeal" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_icon() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_icon";
  var id = "zTvkNgEHQm2DHkz_icon";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_icon",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_icon()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_icon" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_textLink() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_textLink";
  var id = "zTvkNgEHQm2DHkz_textLink";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "zTvkNgEHQm2DHkz_textLink",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "zTvkNgEHQm2DHkz_textLink",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_textLink()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_textLink" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productPrice() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productPrice";
  var id = "zTvkNgEHQm2DHkz_productPrice";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const syncQuantityandPrice = "true" == "true";
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "zTvkNgEHQm2DHkz_productPrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "zTvkNgEHQm2DHkz_productPrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    $element.gtProductPrice({
      classCurrentPrice: ".gt_product-price--number",
      syncQuantityPrice: syncQuantityandPrice,
    });
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productPrice()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productPrice" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productComparePrice() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productComparePrice";
  var id = "zTvkNgEHQm2DHkz_productComparePrice";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const syncQuantityandPrice = "true" == "true";
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "zTvkNgEHQm2DHkz_productComparePrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "zTvkNgEHQm2DHkz_productComparePrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();

    $element.gtProductPrice({
      classComparePrice: ".gt_product-price--compare",
      classCurrentPrice: ".gt_product-price--number",
      syncQuantityPrice: syncQuantityandPrice,
    });
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productComparePrice()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productComparePrice" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productTagSale() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productTagSale";
  var id = "zTvkNgEHQm2DHkz_productTagSale";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const roundPercent = Number("0");
    const removeZeros = "true" === "true";
    /* store get state block script */
    /* methods block script */
    /* init block script */
    $element.gtProductSaved({
      classTextPercent: ".gt_product-tag-sale--value--percent",
      classTextNumber: ".gt_product-tag-sale--value--number",
      dataFormat: "Saved [!Profit!]",
      dataFormatKey: "[!Profit!]",
      customCurrencyFormating: "shortPrefix",
      roundPercent: roundPercent,
      roundNoZeroes: removeZeros
    });
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productTagSale()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productTagSale" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productTagSaleNumber() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productTagSaleNumber";
  var id = "zTvkNgEHQm2DHkz_productTagSaleNumber";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const roundPercent = Number("0");
    const removeZeros = "true" === "true";
    /* store get state block script */
    /* methods block script */
    /* init block script */
    $element.gtProductSaved({
      classTextPercent: ".gt_product-tag-sale--value--percent",
      classTextNumber: ".gt_product-tag-sale--value--number",
      dataFormat: "[!Profit!]",
      dataFormatKey: "[!Profit!]",
      customCurrencyFormating: "shortPrefix",
      roundPercent: roundPercent,
      roundNoZeroes: removeZeros
    });
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productTagSaleNumber()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productTagSaleNumber" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productVariant() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productVariant";
  var id = "zTvkNgEHQm2DHkz_productVariant";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var $variantChecked = $element.find(".gt_product-variant--checked");
    var $variantOptions = $element.find(".gt_product-variant-options");
    var mode = "production";
    var animationActive = 'false';
    var timeoutTooltip = null;
    /* store get state block script */
    /* methods block script */
    function animation() {
      if (animationActive === "true") {
        var interactionScrollIntoView =
          '""';
        window.SOLID.library.animation({
          elementId: id,
          $doms: $elements,
          interactionScrollIntoView: {
            value: JSON.parse(interactionScrollIntoView),
            previewAttr: "interactionScrollIntoView",
          },
          animationType: "block",
          mode: mode,
        });
      }
    }

    function initSwatches() {
      window.SOLID.library.gtProductSwatchesV2({
        $element: $element,
        settings: {
          classCurrentValue: ".gt_product-variant-option--selected span",
          classItem: ".gt_variant--select-item",
          classInputIdHidden: ".gt_variant--input",
          classBtnSelect: ".gt_product-variant--btn-select",
        }
      });
    }

    function openSelectDropdown() {
      $variantChecked.removeClass("gt_active");
      var $options = $(this).siblings(".gt_product-variant-options");
      if ($options.hasClass("gt_active")) {
        $options.css("top", "");
        $options.removeClass("gt_active");
        $(this).removeClass("gt_active");
        clearEventShowTooltip();
        $(document).off("mousedown.outsideClickVariantSelect");
      } else {
        $variantOptions.removeClass("gt_active");
        $options.addClass("gt_active");
        $(this).addClass("gt_active");
        var optionsOuterHeight = $options.outerHeight();
        var selectInputHeight = $variantChecked.outerHeight();
        var positionOptions = $options.offset().top - $(document).scrollTop() + optionsOuterHeight;
        var windowHeight = $(window).outerHeight();
        if (positionOptions > windowHeight) {
          const currentTopOptions = $options.css("top");
          const newTop = "calc( " + currentTopOptions + " - " + optionsOuterHeight + "px" + " - " + (Number(selectInputHeight) + 10) + "px" + " )";
          $options.css("top", newTop);
        }
        clearTimeout(timeoutTooltip);
        timeoutTooltip = setTimeout(() => {
          eventShowTooltipSelectType();
        }, 300)
        //addeventclickoutsidetoclose
        const $currentTargetOptions = $(this);
        $(document).off("mousedown.outsideClickVariantSelect").on("mousedown.outsideClickVariantSelect", function(event) {
          if ($options && $options.length && $currentTargetOptions && $currentTargetOptions.length) {
            const $optionsPure = $options[0];
            if ($optionsPure && !$optionsPure.contains(event.target) && !$currentTargetOptions[0].contains(event.target)) {
              $options.css("top", "");
              $options.removeClass("gt_active");
              $currentTargetOptions.removeClass("gt_active");
              clearEventShowTooltip();
              $(document).off("mousedown.outsideClickVariantSelect");
            }
          }
        });
      }
    }

    function onClickSelectDropDown() {
      $variantChecked.removeClass("gt_active");
      $variantOptions.removeClass("gt_active");
      var value = $(this).attr("data-value");
      var $variantCheckedCurrent = $(this).closest(
        ".gt_product-variant--select-box"
      );
      var $valueVariantChecked = $variantCheckedCurrent.find(
        ".gt_product-variant--checked .gt_product-variant-option--selected span"
      );
      var $contentOptionSelect = $(this).html();
      $valueVariantChecked.attr("data-value", value);
      $valueVariantChecked.html($contentOptionSelect);
      //closetooltip
      const $tooltip = $element.find(".gt_product-variant-tooltip");
      $tooltip.css("display", "none");
      clearEventShowTooltip();
    }

    function hideAtomWhenNoVariant() {
      $element.css("display", "");
      var isHide = true;
      var $variantItems = $element.find(".gt_product-variant--item")
      for (var i = 0; i < $variantItems.length; i++) {
        var $item = $($variantItems[i]);
        var display = $item.css("display");
        if (display !== "none") {
          isHide = false;
          break;
        }
      }
      if (isHide) {
        $element.css("display", "none");
      }
    }

    function eventShowTooltipSelectType() {
      const $selectItems = $element.find(".gt_variant--select-item");
      for (var i = 0; i < $selectItems.length; i++) {
        const $selectItem = $($selectItems[i]);
        const $selectOptions = $selectItem.find(".gt_product-variant-option");
        const $tooltip = $selectItem.find(".gt_product-variant-tooltip");
        $selectOptions.off("mouseenter").on("mouseenter", function() {
          //checkoverflow
          const $contentValue = $(this).find(".gt_product-variant-option--txt");
          const cachedDisplayContentValue = $contentValue.css("display");
          $contentValue.css({
            display: "inline",
            overflow: "unset",
            whiteSpace: "nowrap"
          });
          const realWidth = $contentValue.outerWidth();
          $contentValue.css({
            display: cachedDisplayContentValue,
            overflow: "",
            whiteSpace: ""
          });
          //
          const selectOptionTop = this.getBoundingClientRect().top;
          const selectItemTop = $selectItem[0].getBoundingClientRect().top;
          const selectOptionHeight = $(this).outerHeight();
          const selectOptionWidth = $(this).outerWidth();
          const contentSelect = $contentValue.html();
          if (realWidth > selectOptionWidth) {
            $tooltip.find(".gt_product-variant-tooltip-name").html(contentSelect);
            $tooltip.css({
              display: "block",
              top: selectOptionTop - selectItemTop - selectOptionHeight,
              zIndex: 10
            });
            $tooltip.find(".gt_product-variant-tooltip-arrow").css({
              left: selectOptionWidth / 2 + "px",
            })
          }
        });
        $selectOptions.off("mouseleave").on("mouseleave", function() {
          $tooltip.css({
            display: "none"
          })
        });
      }
    }

    function clearEventShowTooltip() {
      const $selectitems = $element.find(".gt_variant--select-item");
      for (var i = 0; i < $selectitems.length; i++) {
        const $selectitem = $($selectitems[i]);
        const $selectoptions = $selectitem.find(".gt_product-variant-option");
        $selectoptions.off("mouseenter");
        $selectoptions.off("mouseleave");
      }
    }
    /* init block script */
    hideAtomWhenNoVariant();
    initSwatches();
    animation();
    /* store subscribe block script */
    /* events block script */
    var $elements_1 = $element.find(".gt_product-variant--checked");
    $elements_1.off("click.openSelect").on("click.openSelect", openSelectDropdown);
    var $elements_2 = $element.find(".gt_product-variant-option");
    $elements_2.off("click.selectItem").on("click.selectItem", onClickSelectDropDown);
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();

        }
        funcESAtomzTvkNgEHQm2DHkz_productVariant()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productVariant" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productQuantity() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productQuantity";
  var id = "zTvkNgEHQm2DHkz_productQuantity";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var style = "horizontal";
    var mode = "production";
    var interactionScrollIntoViewActive = "false";
    /* store get state block script */
    /* methods block script */
    function animation() {
      if (interactionScrollIntoViewActive === "true") {
        var interactionScrollIntoView =
          '""';
        var $container = $element.find(".gt_product-quantity");
        window.SOLID.library.animation({
          elementId: id,
          $doms: $container,
          interactionScrollIntoView: {
            value: JSON.parse(interactionScrollIntoView),
            previewAttr: "interactionScrollIntoView",
          },
          animationType: "block",
          mode: mode,
        });
      }
    }

    function initLibrary() {
      var params = {
        $element: $element,
        settings: {
          classInput: "input[name='quantity']",
          classPlus: ".gt_quantity_plus",
          classMinus: ".gt_quantity_minus",
          mode: mode,
        }
      };
      if (style === "horizontal") {
        params = {
          $element: $element,
          settings: {
            classInput: "input[name='quantity']",
            classPlus: ".gt_product-quantity--plus",
            classMinus: ".gt_product-quantity--minus",
            mode: mode,
          }
        };
      }
      window.SOLID.library.gtProductQuantityV2(params);
    }

    function validateInput() {
      var inputQuantity = $element.find("input[name='quantity']");
      inputQuantity.keyup(function() {
        var value = parseInt(this.value);
        if (isNaN(value)) {
          value = 1;
        }
        inputQuantity.attr("value", value).val(value);
      })
    }
    /* init block script */
    initLibrary();
    animation();
    validateInput();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productQuantity()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productQuantity" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productButtonBuyItNow() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productButtonBuyItNow";
  var id = "zTvkNgEHQm2DHkz_productButtonBuyItNow";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var scrollIntoViewActive = 'false' == 'true';
    var animationActive = 'false' == 'true';
    var animationHoverActive = 'false' == 'true';
    var scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var mode = 'production';
    var previewSoldOut = 'false';
    var actions = '[{"control":{"attribute":"pickProductButton","id":"pickProductButton","isButtonAddToCard":true,"type":"pickproduct"},"event":"click","id":1},{"control":{"attribute":"pickLinkButton","id":"pickLinkButton","newTab":false,"reference":"html","title":"Pick Link","type":"picklink","value":"/cart"},"event":"click","id":2}]';
    
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "zTvkNgEHQm2DHkz_productButtonBuyItNow",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        };
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover",
          };
        }
        window.SOLID.library.animation(settings);
      }
    }

    function eventChangeTextInIframe() {
      
    }

    function eventListenSoldOut() {
      if (mode !== "production") {
        if (previewSoldOut === "false") {
          window.SOLID.library.gtBuyProductListenSoldOut({
            $element: $($element)[0],
            options: {
              isButtonAddToCard: true,
              textAddToCard: "BUY IT NOW",
              textSoldOut: "Sold out",
            },
            mode: "dev"
          });
        }
      } else {
        window.SOLID.library.gtBuyProductListenSoldOut({
          $element: $($element)[0],
          options: {
            isButtonAddToCard: true,
            textAddToCard: "BUY IT NOW",
            textSoldOut: "Sold out",
          },
        });
      }
    }

    function addActionEvent() {
      // function customEvent(actions,id,key)
      if (mode === "production") {
        $($element).customEvent(
          JSON.parse(actions),
          'zTvkNgEHQm2DHkz_productButtonBuyItNow' + '_' + indexEl
        );
      }
      /*Listenifisbuttonaddtocard*/
      store.subscribe(
        "loading-buy-now-zTvkNgEHQm2DHkz_productButtonBuyItNow" + "_" + indexEl,
        function(isDisplay) {
          const $loadingEl = $($element).find(
            ".atom-button-loading-circle-loader"
          );
          const $textEl = $($element).find(".gt_button-content-text");
          if ($loadingEl && $loadingEl.length && $textEl && $textEl.length) {
            let timeout = undefined;
            if (isDisplay === true) {
              /*displayloadingbutton*/
              clearTimeout(timeout);
              $loadingEl.css("display", "inline-block");
              $textEl.css("visibility", "hidden");
            } else if (isDisplay === "stop") {
              /*stoploading*/
              $loadingEl.removeAttr("style");
              $textEl.removeAttr("style");
              store.dispatch("loading-buy-now-zTvkNgEHQm2DHkz_productButtonBuyItNow", "");
              store.dispatch("loading-buy-now-zTvkNgEHQm2DHkz_productButtonBuyItNow" + "_" + indexEl, "");
            } else if (isDisplay === false) {
              clearTimeout(timeout);
              /*displaytickbutton*/
              $loadingEl.addClass("load-complete");
              $loadingEl
                .find(".atom-button-loading-check-mark")
                .css("display", "block");
              /*removetickbuttonanddisplaytext*/
              timeout = setTimeout(function() {
                $loadingEl.removeClass("load-complete");
                $loadingEl
                  .find(".atom-button-loading-check-mark")
                  .removeAttr("style");
                $loadingEl.removeAttr("style");
                $textEl.removeAttr("style");
                store.dispatch("loading-buy-now-zTvkNgEHQm2DHkz_productButtonBuyItNow", "");
                store.dispatch("loading-buy-now-zTvkNgEHQm2DHkz_productButtonBuyItNow" + "_" + indexEl, "");
              }, 3000);
            }
          }
        }
      );
    }
    /* init block script */
    addInteraction();
    addActionEvent();
    eventListenSoldOut();
    eventChangeTextInIframe();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productButtonBuyItNow()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productButtonBuyItNow" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESAtomzTvkNgEHQm2DHkz_productDescription() {
          (function() {
  var elementClassName = ".gt_atom-zTvkNgEHQm2DHkz_productDescription";
  var id = "zTvkNgEHQm2DHkz_productDescription";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function toggleDes() {
      $element.find(".gt_description").toggleClass("open");
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "zTvkNgEHQm2DHkz_productDescription",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "zTvkNgEHQm2DHkz_productDescription",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    $element.find(".gt_description").removeClass("open");
    addInteraction();
    /* store subscribe block script */
    function destroy() {}
    /* events block script */
    var $elements_1 = $element.find("#toggleDes");
    $elements_1.off("click").on("click", toggleDes);
    /* destroy block script */
    store.subscribe("component-" + id + "-destroy", function() {
      destroy();
      store.unsubscribe("component-" + id + "-destroy");
    });
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomzTvkNgEHQm2DHkz_productDescription()
      } catch(e) {
        console.error("Error ESAtom Id: zTvkNgEHQm2DHkz_productDescription" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSectiongEnGGnUU54vFDLY() {
          
        }
        funcESSectiongEnGGnUU54vFDLY()
      } catch(e) {
        console.error("Error ESSection Id: gEnGGnUU54vFDLY" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSectionGR20lCAcX7Uy9mh() {
          var $section = jQuery(".gt_section-GR20lCAcX7Uy9mh");
if (!$section || !$section.length) {
    return;
}
  var slideshowDuration = 4000;
  var slideshow = $section.find('.slideshow');
  
  $section.gtParallax({
    classBackgroundImage: ".image-container"
  });
   

  function slideshowSwitch(slideshow, index, auto) {
      if (slideshow.data('wait')) return;
      var slides = slideshow.find('.slide');
      var pages = slideshow.find('.pagination');
      var activeSlide = slides.filter('.is-active');
      var activeSlideImage = activeSlide.find('.image-container');
      var newSlide = slides.eq(index);
      var newSlideImage = newSlide.find('.image-container');
      var newSlideContent = newSlide.find('.slide-content');
      var newSlideElements = newSlide.find('.caption > *');
      newSlideImage.css({
        "background-position": "center",
        'background-attachment': 'scroll',
        '-webkit-backface-visibility': 'visible',
        'transition': 'none'
      });
      if (newSlide.is(activeSlide)) return;

      newSlide.addClass('is-new');
      var timeout = slideshow.data('timeout');
      clearTimeout(timeout);
      slideshow.data('wait', true);
      var transition = slideshow.attr('data-transition');
      if (transition == 'fade') {
          newSlide.css({
              display: 'block',
              zIndex: 2
          });
          newSlideImage.css({
              opacity: 0
          });

          TweenMax.to(newSlideImage, 1, {
              alpha: 1,
              onComplete: function () {
                  newSlide.addClass('is-active').removeClass('is-new');
                  activeSlide.removeClass('is-active');
                  newSlide.css({
                      display: '',
                      zIndex: ''
                  });
                  newSlideImage.css({
                      opacity: ''
                  });
                  slideshow.find('.pagination').trigger('check');
                  slideshow.data('wait', false);
                  
                 
                  
                  if (auto) {
                      timeout = setTimeout(function () {
                          slideshowNext(slideshow, false, true);
                      }, slideshowDuration);
                      slideshow.data('timeout', timeout);
                  }
                  
              }
          });
      } else {
          if (newSlide.index() > activeSlide.index()) {
              var newSlideRight = 0;
              var newSlideLeft = 'auto';
              var newSlideImageRight = -slideshow.width() / 8;
              var newSlideImageLeft = 'auto';
              var newSlideImageToRight = 0;
              var newSlideImageToLeft = 'auto';
              var newSlideContentLeft = 'auto';
              var newSlideContentRight = 0;
              var activeSlideImageLeft = -slideshow.width() / 4;
          } else {
              var newSlideRight = '';
              var newSlideLeft = 0;
              var newSlideImageRight = 'auto';
              var newSlideImageLeft = -slideshow.width() / 8;
              var newSlideImageToRight = '';
              var newSlideImageToLeft = 0;
              var newSlideContentLeft = 0;
              var newSlideContentRight = 'auto';
              var activeSlideImageLeft = slideshow.width() / 4;
          }

          newSlide.css({
              display: 'block',
              width: 0,
              right: newSlideRight,
              left: newSlideLeft,
              zIndex: 2
          });

          newSlideImage.css({
              width: slideshow.width(),
              right: newSlideImageRight,
              left: newSlideImageLeft
          });

          newSlideContent.css({
              width: slideshow.width(),
              left: newSlideContentLeft,
              right: newSlideContentRight
          });

          activeSlideImage.css({
              left: 0
          });

          TweenMax.set(newSlideElements, {
              y: 20,
              force3D: true
          });
          TweenMax.to(activeSlideImage, 1, {
              left: activeSlideImageLeft,
              ease: Power3.easeInOut
          });

          TweenMax.to(newSlide, 1, {
              width: slideshow.width(),
              ease: Power3.easeInOut
          });

          TweenMax.to(newSlideImage, 1, {
              right: newSlideImageToRight,
              left: newSlideImageToLeft,
              ease: Power3.easeInOut
          });

          TweenMax.staggerFromTo(newSlideElements, 0.8, {
              alpha: 0,
              y: 60
          }, {
              alpha: 1,
              y: 0,
              ease: Power3.easeOut,
              force3D: true,
              delay: 0.6
          }, 0.1, function () {
              newSlide.addClass('is-active').removeClass('is-new');
              activeSlide.removeClass('is-active');
              newSlide.css({
                  display: '',
                  width: '',
                  left: '',
                  zIndex: ''
              });

              newSlideImage.css({
                  width: '',
                  right: '',
                  left: ''
              });

              newSlideContent.css({
                  width: '',
                  left: ''
              });

              newSlideElements.css({
                  opacity: '',
                  transform: ''
              });

              activeSlideImage.css({
                  left: ''
              });

              slideshow.find('.pagination').trigger('check');
              slideshow.data('wait', false);
              if (auto) {
                  timeout = setTimeout(function () {
                      slideshowNext(slideshow, false, true);
                  }, slideshowDuration);
                  slideshow.data('timeout', timeout);
              }
              
          });
      }
  }

  function slideshowNext(slideshow, previous, auto) {
    var slides = slideshow.find('.slide');
    var activeSlide = slides.filter('.is-active');
    var newSlide = null;
    if (previous) {
      newSlide = activeSlide.prev('.slide');
      if (newSlide.length === 0) {
          newSlide = slides.last();
      }
    } else {
      newSlide = activeSlide.next('.slide');
      if (newSlide.length == 0)
        newSlide = slides.filter('.slide').first();
    }

    slideshowSwitch(slideshow, newSlide.index(), auto);
  }

  // function homeSlideshowParallax() {
  //   var scrollTop = $(window).scrollTop();
  //   var windowHeight = $(window).height();
  //   if (scrollTop > windowHeight) return;
  //   var inner = slideshow.find('.slideshow-inner');
  //   var newHeight = windowHeight - (scrollTop / 2);
  //   var newTop = scrollTop * 0.8;

  //   inner.css({
  //     transform: 'translateY(' + newTop + 'px)',
  //     height: newHeight
  //   });
  // }

  $section.find('.slide').addClass('is-loaded');

  $section.find('.slideshow .arrows .arrow').on('click', function () {
    slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
  });

  $section.find('.slideshow .pagination .item').on('click', function () {
    slideshowSwitch($(this).closest('.slideshow'), $(this).index());
  });

  $section.find('.slideshow .pagination').on('check', function () {
    var slideshow = $(this).closest('.slideshow');
    var pages = $(this).find('.item');
    var index = slideshow.find('.slides .is-active').index();
    pages.removeClass('is-active');
    pages.eq(index).addClass('is-active');
  });



  // if (slideshow && slideshow.length) {
  //   console.log("paralax");
  //     $(window).off('scroll.homeSlideshowParallaxGR20lCAcX7Uy9mh').on('scroll.homeSlideshowParallaxGR20lCAcX7Uy9mh', homeSlideshowParallax);
  // }      
  
  
  
  
  // slideshowNext(slideshow, false, true);

        }
        funcESSectionGR20lCAcX7Uy9mh()
      } catch(e) {
        console.error("Error ESSection Id: GR20lCAcX7Uy9mh" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESSectionhMw4efW4b7YG9sz() {
          var $section = $(".gt_section-hMw4efW4b7YG9sz");
if (!$section || !$section.length) {
  return;
}

/* Comment */
store.change("optimal-hMw4efW4b7YG9sz-altImage", function({value, index}) {
  $section.find('.image_insta[data-index="'+index+'"] img').attr("alt", value);
});

store.change("optimal-hMw4efW4b7YG9sz-linkItem", function({value, index}) {
  $section.find('.link_items[data-index="'+index+'"]').attr("href", value);
});
/* End Comment */

        }
        funcESSectionhMw4efW4b7YG9sz()
      } catch(e) {
        console.error("Error ESSection Id: hMw4efW4b7YG9sz" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
})(window.esQuery || jQuery, window.esQuery || jQuery);

    
  
/*
  You SHOULD NOT modify source code in this page because
  It is automatically generated from EcomSolid
  Try to edit page with the live editor.
  https://ecomsolid.com
*/

    (function(jQuery, $) {
      
      try {
        function funcESWidget7xV1zOsihZRggGg() {
          
        }
        funcESWidget7xV1zOsihZRggGg()
      } catch(e) {
        console.error("Error ESWidget Id: 7xV1zOsihZRggGg" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        function funcESWidgetFQH5tDFZTS7pxje() {
          
        }
        funcESWidgetFQH5tDFZTS7pxje()
      } catch(e) {
        console.error("Error ESWidget Id: FQH5tDFZTS7pxje" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
    try {
      function triggerDToStore() {
        window.SOLID = window.SOLID || {};
        var discounts = window.SOLID.discounts || [];
        if (window.store && window.store.update) {
          window.store.update("discounts", discounts)
        }
      }
      triggerDToStore()
    } catch(e) {
      console.log("=============================== START ERROR =================================")
      console.log(e)
      console.log("===============================  END ERROR  =================================")
    }
  
    })(window.esQuery || jQuery, window.esQuery || jQuery);
  
    
  