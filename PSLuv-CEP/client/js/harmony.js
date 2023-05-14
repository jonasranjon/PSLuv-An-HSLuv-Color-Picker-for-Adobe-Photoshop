const rgb2hsv = (rgb) => {
    let hsv = {};
    let max = rgb.r > rgb.g ? (rgb.r > rgb.b ? rgb.r : rgb.b) : rgb.g > rgb.b ? rgb.g : rgb.b;
    let dif = max - (rgb.r < rgb.g ? (rgb.r < rgb.b ? rgb.r : rgb.b) : rgb.g < rgb.b ? rgb.g : rgb.b);
    hsv.s = max === 0.0 ? 0 : (100 * dif) / max;
    if (hsv.s === 0) hsv.h = 0;
    else if (rgb.r === max) hsv.h = (60.0 * (rgb.g - rgb.b)) / dif;
    else if (rgb.g === max) hsv.h = 120.0 + (60.0 * (rgb.b - rgb.r)) / dif;
    else if (rgb.b === max) hsv.h = 240.0 + (60.0 * (rgb.r - rgb.g)) / dif;
    if (hsv.h < 0.0) hsv.h += 360.0;
    hsv.v = Math.round((max * 100) / 255);
    hsv.h = Math.round(hsv.h);
    hsv.s = Math.round(hsv.s);
    return hsv;
 };
 
const hsv2rgb = (hsv) => {
    let rgb = {};
    if (hsv.s === 0) rgb.r = rgb.g = rgb.b = Math.round(hsv.v * 2.55);
    else {
       hsv.h /= 60;
       hsv.s /= 100;
       hsv.v /= 100;
       let i = Math.floor(hsv.h);
       let f = hsv.h - i;
       let p = hsv.v * (1 - hsv.s);
       let q = hsv.v * (1 - hsv.s * f);
       let t = hsv.v * (1 - hsv.s * (1 - f));
       switch (i) {
          case 0:
             rgb.r = hsv.v;
             rgb.g = t;
             rgb.b = p;
             break;
          case 1:
             rgb.r = q;
             rgb.g = hsv.v;
             rgb.b = p;
             break;
          case 2:
             rgb.r = p;
             rgb.g = hsv.v;
             rgb.b = t;
             break;
          case 3:
             rgb.r = p;
             rgb.g = q;
             rgb.b = hsv.v;
             break;
          case 4:
             rgb.r = t;
             rgb.g = p;
             rgb.b = hsv.v;
             break;
          default:
             rgb.r = hsv.v;
             rgb.g = p;
             rgb.b = q;
       }
       rgb.r = Math.round(rgb.r * 255);
       rgb.g = Math.round(rgb.g * 255);
       rgb.b = Math.round(rgb.b * 255);
    }
    return rgb;
 };

 'use strict';

class Harmony {
   constructor(rgb) {
      this.rgb = rgb;
   }

   complement() {
      let hsv = rgb2hsv(this.rgb);
      hsv.h += 180.0;
      while (hsv.h >= 360.0) hsv.h -= 360.0;
      while (hsv.h < 0.0) hsv.h += 360.0;
      return hsv2rgb(hsv);
   }

   splitComplement() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);

      hsv1.h += 150.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 210.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2)];
   }

   analogous() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);

      hsv1.h += 30.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 60.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2)];
   }

   triadic() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);

      hsv1.h += 120.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 240.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2)];
   }

   tetradic() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);
      let hsv3 = rgb2hsv(this.rgb);

      hsv1.h += 90.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 180.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      hsv3.h += 270.0;
      while (hsv3.h >= 360.0) hsv3.h -= 360.0;
      while (hsv3.h < 0.0) hsv3.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2), hsv2rgb(hsv3)];
   }
}

window.Harmony = Harmony;

 