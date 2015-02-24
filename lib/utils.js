"use strict";

var utils = {

  TwoPI: 2 * Math.PI,

  rand: function rand() {
    return Math.random();
  },

  degsToRads: function degsToRads(degs) {
    return this.TwoPI * (degs / 360);
  },

  // return val between -1 and 1
  randClamped: function randClamped() {
    // return Math.random() * Math.random()
    return Math.random() * 2 - 1;
  },

  randBool: function randBool() {
    return Math.random() > 0.5;
  }

};

module.exports = utils;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbGliL3V0aWxzLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksS0FBSyxHQUFHOztBQUVWLE9BQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7O0FBRWxCLE1BQUksRUFBRSxnQkFBVztBQUNmLFdBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ3RCOztBQUVELFlBQVUsRUFBRSxvQkFBUyxJQUFJLEVBQUU7QUFDekIsV0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUEsQUFBQyxDQUFDO0dBQ2xDOzs7QUFHRCxhQUFXLEVBQUUsdUJBQVc7O0FBRXRCLFdBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDOUI7O0FBRUQsVUFBUSxFQUFHLG9CQUFXO0FBQ3BCLFdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBRTtHQUM5Qjs7Q0FFRixDQUFBOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6Ii4vbGliL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0ge1xuXG4gIFR3b1BJOiAyICogTWF0aC5QSSxcblxuICByYW5kOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcbiAgfSxcblxuICBkZWdzVG9SYWRzOiBmdW5jdGlvbihkZWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuVHdvUEkgKiAoZGVncyAvIDM2MCk7XG4gIH0sXG5cbiAgLy8gcmV0dXJuIHZhbCBiZXR3ZWVuIC0xIGFuZCAxXG4gIHJhbmRDbGFtcGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyByZXR1cm4gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKClcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICB9LFxuXG4gIHJhbmRCb29sOiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpID4gMC41KTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG4iXX0=