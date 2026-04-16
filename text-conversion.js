(function () {
  // Token map — only meaningful inside this JS context
  var M = { qvj8: 'zero2infi', rx4: 'gmail', p0: 'com' };

  function decode(enc) {
    var t = enc.split(' ');
    return M[t[0]] + '\x40' + M[t[1]] + '\x2e' + M[t[2]];
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Inline text display
    var display = document.getElementById('em-display');
    if (display) {
      var email = decode(display.getAttribute('data-e'));
      var a = document.createElement('a');
      a.href = 'mai' + 'lto:' + email;
      a.textContent = email;
      display.appendChild(a);
    }

    // 2. CTA button
    var cta = document.getElementById('em-cta');
    if (cta && display) {
      var email2 = decode(display.getAttribute('data-e'));
      cta.href = 'mai' + 'lto:' + email2;
    }
  });
})();
