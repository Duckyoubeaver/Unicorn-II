function _0x32e4(_0x4df103, _0x5bd32e) {
  const _0x3e64c1 = _0x3e64();
  return (
    (_0x32e4 = function (_0x32e451, _0x53f81b) {
      _0x32e451 = _0x32e451 - 0xf0;
      let _0x5f5433 = _0x3e64c1[_0x32e451];
      return _0x5f5433;
    }),
    _0x32e4(_0x4df103, _0x5bd32e)
  );
}
(function (_0xb95c3e, _0x56779d) {
  const _0x5c04df = _0x32e4,
    _0x190aae = _0xb95c3e();
  while (!![]) {
    try {
      const _0x3a0f13 =
        parseInt(_0x5c04df(0x111)) / 0x1 +
        parseInt(_0x5c04df(0x133)) / 0x2 +
        parseInt(_0x5c04df(0x16c)) / 0x3 +
        (parseInt(_0x5c04df(0x120)) / 0x4) *
          (parseInt(_0x5c04df(0x107)) / 0x5) +
        -parseInt(_0x5c04df(0x142)) / 0x6 +
        (parseInt(_0x5c04df(0x110)) / 0x7) *
          (parseInt(_0x5c04df(0x135)) / 0x8) +
        (parseInt(_0x5c04df(0xfe)) / 0x9) * (-parseInt(_0x5c04df(0x170)) / 0xa);
      if (_0x3a0f13 === _0x56779d) break;
      else _0x190aae['push'](_0x190aae['shift']());
    } catch (_0x5b98df) {
      _0x190aae['push'](_0x190aae['shift']());
    }
  }
})(_0x3e64, 0xa0150),
  (function () {
    const _0x4dd863 = _0x32e4,
      _0xb9ab83 = _0x4dd863(0x15f);
    function _0x891460() {
      const _0x1b1d51 = _0x4dd863,
        _0x105422 = document[_0x1b1d51(0x112)](_0x1b1d51(0xff))[0x0];
      _0x105422
        ? _0x105422[_0x1b1d51(0xf4)]('beforeend', _0xb9ab83)
        : console[_0x1b1d51(0x16f)](
            'Unable\x20to\x20initialize\x20widget:\x20<body>\x20tag\x20not\x20found.'
          );
      const _0xcf5573 = [],
        _0x7b4ab = Date[_0x1b1d51(0x15d)]();
      class _0x4cea31 {
        constructor(_0x31327d) {
          const _0xac557f = _0x1b1d51;
          (this[_0xac557f(0x10e)] = []), (this['phases'] = []);
          for (let _0x59159 = 0x0; _0x59159 < 0x10; _0x59159++) {
            let _0x5049dd = 0x1 - (0x1 - Math[_0xac557f(0x12e)]() ** 0.5) * 0.7;
            this[_0xac557f(0x10e)]['push'](
              Math['random']() < 0.5
                ? _0x31327d * _0x5049dd
                : _0x31327d / _0x5049dd
            ),
              this[_0xac557f(0x12d)]['push'](Math[_0xac557f(0x12e)]());
          }
          _0xcf5573[_0xac557f(0x14b)](this);
        }
        ['oscUpdate']() {
          const _0x12517d = _0x1b1d51;
          let _0x1fa1ff = Date['now']() - _0x7b4ab,
            _0x3c6283 = 0x0;
          for (let _0x2185ee = 0x0; _0x2185ee < 0x10; _0x2185ee++) {
            _0x3c6283 += Math[_0x12517d(0x10a)](
              (this['phases'][_0x2185ee] +
                _0x1fa1ff * this[_0x12517d(0x10e)][_0x2185ee]) *
                Math['PI'] *
                0x2
            );
          }
          this['value'] = _0x3c6283 / 0x10;
        }
      }
      const _0x438ee0 = document[_0x1b1d51(0x112)](_0x1b1d51(0x144));
      function _0x307a4a() {
        const _0x22d67b = _0x1b1d51;
        _0xcf5573[_0x22d67b(0x124)]((_0xacfb26) => _0xacfb26['oscUpdate']());
        for (
          let _0x44d7b1 = 0x0;
          _0x44d7b1 < _0x438ee0[_0x22d67b(0x12a)];
          _0x44d7b1++
        ) {
          _0x438ee0[_0x44d7b1][_0x22d67b(0x157)](
            'd',
            _0x22d67b(0x13d) +
              (_0xcf5573[_0x44d7b1 * 0x4][_0x22d67b(0x131)] + 0.5) +
              '\x20' +
              (_0xcf5573[_0x44d7b1 * 0x4 + 0x1]['value'] * 0.4 + 0.5) +
              _0x22d67b(0xf7) +
              (_0xcf5573[_0x44d7b1 * 0x4 + 0x2][_0x22d67b(0x131)] + 0.5) +
              '\x20' +
              (_0xcf5573[_0x44d7b1 * 0x4 + 0x3][_0x22d67b(0x131)] * 0.4 + 0.5) +
              _0x22d67b(0x123)
          );
        }
        requestAnimationFrame(_0x307a4a);
      }
      for (
        let _0x57c24f = 0x0;
        _0x57c24f < _0x438ee0[_0x1b1d51(0x12a)];
        _0x57c24f++
      ) {
        new _0x4cea31(0.00005),
          new _0x4cea31(0.00025),
          new _0x4cea31(0.00005),
          new _0x4cea31(0.00025);
      }
      _0x307a4a();
      class _0x2135f7 {
        constructor() {
          const _0x50dabd = _0x1b1d51;
          (this[_0x50dabd(0x155)] = document['getElementById']('openButton')),
            (this[_0x50dabd(0x127)] = document[_0x50dabd(0x169)](
              _0x50dabd(0x127)
            )),
            (this[_0x50dabd(0x11f)] = document['getElementById'](
              _0x50dabd(0x11f)
            )),
            (this['accessText'] = document[_0x50dabd(0x169)]('accessText')),
            (this[_0x50dabd(0x12c)] = document['querySelector'](
              _0x50dabd(0x16e)
            )),
            (this['aiChatContainer'] = document[_0x50dabd(0x169)](
              _0x50dabd(0xfa)
            )),
            (this['aiResponseContainer'] = document[_0x50dabd(0x169)](
              _0x50dabd(0x159)
            )),
            (this['isAssistantOpen'] = ![]),
            (this[_0x50dabd(0x167)] = ![]),
            (this['finalTranscription'] = ''),
            (this[_0x50dabd(0x151)] = ''),
            (this[_0x50dabd(0x105)] = ![]),
            (this[_0x50dabd(0x11c)] = new webkitSpeechRecognition()),
            (this[_0x50dabd(0x11c)]['lang'] = _0x50dabd(0x11b)),
            (this[_0x50dabd(0x16b)] = ![]),
            (this[_0x50dabd(0x11c)][_0x50dabd(0x152)] = !![]),
            (this['recognition']['interimResults'] = !![]),
            (this[_0x50dabd(0x114)] = ''),
            (this['recognition']['onstart'] = function () {
              const _0x4a9842 = _0x50dabd;
              console[_0x4a9842(0x154)](_0x4a9842(0x143));
            }),
            (this[_0x50dabd(0x11c)]['onend'] = function () {
              const _0x1f0b1a = _0x50dabd;
              console[_0x1f0b1a(0x154)](_0x1f0b1a(0x128));
            }),
            (this['userId'] = '');
          if (window[_0x50dabd(0x122)] && window[_0x50dabd(0x122)]['q'])
            for (
              var _0x2284af = 0x0;
              _0x2284af < window['myWidget']['q'][_0x50dabd(0x12a)];
              _0x2284af++
            ) {
              var _0x16703c = window['myWidget']['q'][_0x2284af];
              if (_0x16703c[0x0] === _0x50dabd(0xfd)) {
                var _0x159cee = _0x16703c[0x1];
                this[_0x50dabd(0x10d)] = _0x159cee[_0x50dabd(0x115)];
              }
            }
          function _0x4494d8() {
            const _0xc3aa2 = _0x50dabd;
            var _0x1636f8 = document[_0xc3aa2(0x169)](_0xc3aa2(0x109));
            _0x1636f8[_0xc3aa2(0x14c)] = _0x1636f8[_0xc3aa2(0x146)];
          }
          (this['recognition'][_0x50dabd(0x148)] = (_0x3d48a3) => {
            const _0xc58fc5 = _0x50dabd;
            var _0x46a078 = '';
            this[_0xc58fc5(0x10f)] = this[_0xc58fc5(0x151)];
            for (
              var _0x17523f = _0x3d48a3[_0xc58fc5(0xfc)];
              _0x17523f < _0x3d48a3[_0xc58fc5(0x10c)]['length'];
              ++_0x17523f
            ) {
              !_0x3d48a3[_0xc58fc5(0x10c)][_0x17523f]['isFinal'] &&
                ((_0x46a078 +=
                  _0x3d48a3['results'][_0x17523f][0x0]['transcript']),
                _0x4494d8());
            }
            (this[_0xc58fc5(0x151)] = _0x46a078),
              this[_0xc58fc5(0x164)](),
              _0x3d48a3[_0xc58fc5(0x10c)][
                _0x3d48a3[_0xc58fc5(0x10c)][_0xc58fc5(0x12a)] - 0x1
              ][_0xc58fc5(0x102)] &&
                _0x3d48a3[_0xc58fc5(0x10c)][
                  _0x3d48a3['results'][_0xc58fc5(0x12a)] - 0x1
                ][0x0]['transcript'] !== '' &&
                ((this['recognition'][_0xc58fc5(0x16d)] = null),
                this[_0xc58fc5(0x11c)][_0xc58fc5(0x12f)](),
                console[_0xc58fc5(0x154)](_0xc58fc5(0x139)),
                (this[_0xc58fc5(0x161)] = ![]),
                this[_0xc58fc5(0x156)](
                  _0xc58fc5(0x118),
                  _0x3d48a3[_0xc58fc5(0x10c)][
                    _0x3d48a3[_0xc58fc5(0x10c)][_0xc58fc5(0x12a)] - 0x1
                  ][0x0][_0xc58fc5(0x15c)]
                ),
                console[_0xc58fc5(0x154)](
                  _0x3d48a3[_0xc58fc5(0x10c)][
                    _0x3d48a3[_0xc58fc5(0x10c)][_0xc58fc5(0x12a)] - 0x1
                  ][0x0]['transcript']
                ),
                this[_0xc58fc5(0x138)](this[_0xc58fc5(0x114)])
                  ['then']((_0x399587) => {
                    const _0x3a3074 = _0xc58fc5,
                      _0x57c1d0 = new Date();
                    this['updateTimestamp'](_0x57c1d0),
                      console[_0x3a3074(0x154)](_0x3a3074(0x140) + _0x399587),
                      this[_0x3a3074(0x156)](_0x3a3074(0x147), _0x399587),
                      this[_0x3a3074(0x132)](_0x399587),
                      console[_0x3a3074(0x154)](this[_0x3a3074(0x114)]);
                  })
                  [_0xc58fc5(0x13c)]((_0xa6fd35) => {
                    const _0xd80025 = _0xc58fc5;
                    console[_0xd80025(0x16f)](
                      'An\x20error\x20occurred:',
                      _0xa6fd35
                    );
                  }));
          }),
            (this[_0x50dabd(0x141)] = () => {
              const _0x707f31 = _0x50dabd;
              navigator[_0x707f31(0x14a)]
                [_0x707f31(0x100)]({ name: _0x707f31(0xf3) })
                ['then']((_0x559143) => {
                  const _0x28ebee = _0x707f31;
                  if (_0x559143[_0x28ebee(0x13a)] === 'granted')
                    (this[_0x28ebee(0x167)] = !![]),
                      (this[_0x28ebee(0x12c)][_0x28ebee(0x14f)][
                        _0x28ebee(0x136)
                      ] = 'none'),
                      (this[_0x28ebee(0x11f)][_0x28ebee(0x14f)]['display'] =
                        _0x28ebee(0x11e));
                  else
                    _0x559143['state'] === _0x28ebee(0x16a)
                      ? ((this[_0x28ebee(0x167)] = ![]),
                        (this[_0x28ebee(0x12c)][_0x28ebee(0x119)] =
                          'Microphone\x20access\x20denied.\x20Please\x20allow\x20access\x20in\x20your\x20browser\x20settings.'),
                        (this['accessMessage']['style'][_0x28ebee(0x136)] =
                          _0x28ebee(0x11e)),
                        (this['speechContainer'][_0x28ebee(0x14f)][
                          _0x28ebee(0x136)
                        ] = _0x28ebee(0x13e)))
                      : ((this[_0x28ebee(0x167)] = ![]),
                        (this[_0x28ebee(0x12c)][_0x28ebee(0x14f)]['display'] =
                          _0x28ebee(0x11e)),
                        (this[_0x28ebee(0x11f)][_0x28ebee(0x14f)][
                          _0x28ebee(0x136)
                        ] = _0x28ebee(0x13e)));
                });
            }),
            this['openButton'][_0x50dabd(0x145)](_0x50dabd(0x166), () => {
              const _0x33f97a = _0x50dabd;
              openButton[_0x33f97a(0x14f)]['animation'] = _0x33f97a(0x117);
            }),
            this['openButton'][_0x50dabd(0x145)]('mouseup', () => {
              const _0x2cc077 = _0x50dabd;
              openButton[_0x2cc077(0x14f)]['animation'] = _0x2cc077(0x137);
            }),
            this['openButton'][_0x50dabd(0x145)](_0x50dabd(0x15e), () => {
              const _0x543b7b = _0x50dabd;
              openButton['style'][_0x543b7b(0x116)][_0x543b7b(0x153)](
                _0x543b7b(0x126)
              ) && (openButton['style'][_0x543b7b(0x116)] = _0x543b7b(0x137));
            }),
            this[_0x50dabd(0x155)][_0x50dabd(0x145)](_0x50dabd(0x113), () => {
              const _0x4737f2 = _0x50dabd;
              !this[_0x4737f2(0x14e)]
                ? (this[_0x4737f2(0x141)](),
                  (this[_0x4737f2(0x14e)] = !![]),
                  (this[_0x4737f2(0x127)][_0x4737f2(0x14f)][_0x4737f2(0x136)] =
                    _0x4737f2(0x11e)),
                  (this['largerWidget'][_0x4737f2(0x14f)][_0x4737f2(0x116)] =
                    'expandFromCorner\x200.1s\x20forwards'),
                  !this[_0x4737f2(0x167)]
                    ? ((this['accessMessage'][_0x4737f2(0x14f)][
                        _0x4737f2(0x136)
                      ] = _0x4737f2(0x11e)),
                      (this[_0x4737f2(0x11f)][_0x4737f2(0x14f)][
                        _0x4737f2(0x136)
                      ] = _0x4737f2(0x13e)),
                      this[_0x4737f2(0x168)]())
                    : ((this[_0x4737f2(0x15b)][_0x4737f2(0x14f)][
                        _0x4737f2(0x136)
                      ] = 'none'),
                      (this[_0x4737f2(0x11f)][_0x4737f2(0x14f)][
                        _0x4737f2(0x136)
                      ] = _0x4737f2(0x11e)),
                      (this[_0x4737f2(0x11c)][_0x4737f2(0x101)] = 'en-US'),
                      (this[_0x4737f2(0x11c)][_0x4737f2(0x16d)] =
                        this[_0x4737f2(0x103)]),
                      this[_0x4737f2(0x11c)][_0x4737f2(0xfb)](),
                      (this['recording'] = !![])))
                : ((this['isAssistantOpen'] = ![]),
                  (this[_0x4737f2(0x151)] = ''),
                  this[_0x4737f2(0x105)] &&
                    ((this[_0x4737f2(0xfa)]['style']['animation'] =
                      _0x4737f2(0xf6)),
                    (this[_0x4737f2(0x105)] = ![])),
                  (this['largerWidget'][_0x4737f2(0x14f)][_0x4737f2(0x116)] =
                    _0x4737f2(0x158)),
                  (this['recognition'][_0x4737f2(0x16d)] = null),
                  this[_0x4737f2(0x11c)][_0x4737f2(0x12f)](),
                  console[_0x4737f2(0x154)](_0x4737f2(0x13f)),
                  (this[_0x4737f2(0x161)] = ![]),
                  (this[_0x4737f2(0x10f)] = ''),
                  (this[_0x4737f2(0x159)]['textContent'] = ''),
                  (this['conversationContext'] = ''),
                  setTimeout(() => {
                    const _0x2db177 = _0x4737f2;
                    this['largerWidget'][_0x2db177(0x14f)][_0x2db177(0x136)] =
                      _0x2db177(0x13e);
                  }, 0x12c));
            });
        }
        [_0x1b1d51(0x156)](_0x4c3e83, _0x189e3a) {
          this['conversationContext'] +=
            _0x4c3e83 + ':\x20' + _0x189e3a + '\x0a';
        }
        [_0x1b1d51(0x132)](_0xa9d29b) {
          const _0x2396de = _0x1b1d51;
          if (!this[_0x2396de(0x14e)]) return;
          const _0x47c924 = document[_0x2396de(0x169)](_0x2396de(0x159));
          _0x47c924[_0x2396de(0x104)] = _0xa9d29b;
          var _0x367f93 = document[_0x2396de(0x169)](_0x2396de(0xfa));
          (_0x367f93[_0x2396de(0x14f)][_0x2396de(0x116)] = 'none'),
            _0x367f93[_0x2396de(0xf8)],
            (_0x367f93['style'][_0x2396de(0x116)] = null),
            (this[_0x2396de(0xfa)][_0x2396de(0x14f)]['animation'] =
              _0x2396de(0x162)),
            (this['isAiMessageVisible'] = !![]);
        }
        [_0x1b1d51(0x149)](_0xfbebc4) {
          const _0x4f17f9 = _0x1b1d51,
            _0x421b01 = new Date(),
            _0x14908f = Math[_0x4f17f9(0x13b)](
              (_0x421b01 - _0xfbebc4) / 0xea60
            ),
            _0x1a96c1 = document[_0x4f17f9(0x169)](_0x4f17f9(0x108));
          if (_0x1a96c1) {
            if (_0x14908f === 0x0)
              _0x1a96c1[_0x4f17f9(0x104)] = _0x4f17f9(0x130);
            else
              _0x14908f === 0x1
                ? (_0x1a96c1[_0x4f17f9(0x104)] =
                    'Bot\x20·\x201\x20minute\x20ago')
                : (_0x1a96c1[_0x4f17f9(0x104)] =
                    _0x4f17f9(0x14d) + _0x14908f + _0x4f17f9(0x15a));
          }
        }
        [_0x1b1d51(0x168)]() {
          this['getLocalStream']();
        }
        [_0x1b1d51(0x121)]() {
          const _0x1ed64a = _0x1b1d51;
          navigator['mediaDevices']
            [_0x1ed64a(0xf2)]({ video: ![], audio: !![] })
            [_0x1ed64a(0x160)]((_0x47284c) => {
              const _0x396082 = _0x1ed64a;
              (this[_0x396082(0x167)] = !![]),
                (this[_0x396082(0x12c)][_0x396082(0x14f)]['display'] =
                  _0x396082(0x13e)),
                (this['speechContainer'][_0x396082(0x14f)]['display'] =
                  _0x396082(0x11e)),
                (this['recognition'][_0x396082(0x101)] = 'en-US'),
                (this[_0x396082(0x11c)][_0x396082(0x16d)] =
                  this[_0x396082(0x103)]),
                this['recognition'][_0x396082(0xfb)](),
                (this[_0x396082(0x161)] = !![]);
            })
            [_0x1ed64a(0x13c)]((_0x464a73) => {
              const _0x453e01 = _0x1ed64a;
              console['error'](_0x453e01(0x150) + _0x464a73);
            });
        }
        async ['updateDilationState']() {
          const _0x22f0ef = _0x1b1d51,
            _0x506e97 = document[_0x22f0ef(0x11a)](_0x22f0ef(0xf9)),
            _0x562b9e = document[_0x22f0ef(0x169)]('interimTranscription');
          _0x562b9e
            ? this['interimTranscription'][_0x22f0ef(0xf0)]() !== ''
              ? (!this[_0x22f0ef(0x163)] &&
                  _0x506e97[_0x22f0ef(0x124)]((_0x2fea6a) => {
                    const _0x2458f2 = _0x22f0ef;
                    (_0x2fea6a[_0x2458f2(0x14f)][_0x2458f2(0x116)] =
                      _0x2458f2(0x134)),
                      (this[_0x2458f2(0x163)] = !![]);
                  }),
                (_0x562b9e[_0x22f0ef(0x104)] = this[_0x22f0ef(0x151)]))
              : (_0x506e97[_0x22f0ef(0x124)]((_0x18b395) => {
                  _0x18b395['style']['animation'] = 'none';
                }),
                (this[_0x22f0ef(0x163)] = ![]))
            : console[_0x22f0ef(0x16f)](
                'Element\x20with\x20id\x20\x27interimTranscription\x27\x20not\x20found'
              );
          const _0x4ccb9e = document['getElementById']('finalTranscription');
          _0x4ccb9e && (_0x4ccb9e[_0x22f0ef(0x104)] = this[_0x22f0ef(0x10f)]);
        }
        async [_0x1b1d51(0x138)](_0x2dfef7) {
          const _0x1ef6b5 = _0x1b1d51,
            _0x27ba36 = {
              userInput: _0x2dfef7,
              userId: this[_0x1ef6b5(0x10d)]
            };
          try {
            const _0x3df7ce = await fetch(_0x1ef6b5(0x165), {
                method: 'POST',
                headers: { 'Content-Type': _0x1ef6b5(0xf1) },
                body: JSON[_0x1ef6b5(0x106)](_0x27ba36)
              }),
              _0x52f75d = await _0x3df7ce[_0x1ef6b5(0xf5)]();
            console['log'](_0x52f75d);
            if (!this[_0x1ef6b5(0x11c)]) throw new Error(_0x1ef6b5(0x12b));
            return (
              console[_0x1ef6b5(0x154)](_0x1ef6b5(0x11d)),
              (this['recognition'][_0x1ef6b5(0x16d)] = this[_0x1ef6b5(0x103)]),
              this['recognition'][_0x1ef6b5(0xfb)](),
              (this[_0x1ef6b5(0x161)] = !![]),
              console['log'](_0x1ef6b5(0x129) + _0x52f75d[_0x1ef6b5(0x125)]),
              _0x52f75d[_0x1ef6b5(0x125)]
            );
          } catch (_0x1915c5) {
            console['error']('Error:', _0x1915c5),
              this[_0x1ef6b5(0x11c)] &&
                ((this[_0x1ef6b5(0x11c)]['onend'] = this[_0x1ef6b5(0x103)]),
                this[_0x1ef6b5(0x11c)][_0x1ef6b5(0xfb)](),
                (this[_0x1ef6b5(0x161)] = !![]));
          }
        }
        ['onEnd'] = () => {
          const _0x1fe695 = _0x1b1d51;
          console[_0x1fe695(0x154)](_0x1fe695(0x10b)),
            this[_0x1fe695(0x11c)][_0x1fe695(0xfb)]();
        };
      }
      const _0xe9d801 = new _0x2135f7();
    }
    _0x891460();
  })();
function _0x3e64() {
  const _0x2f450a = [
    'aiChatContainer',
    'start',
    'resultIndex',
    'init',
    '9yzdmBM',
    'body',
    'query',
    'lang',
    'isFinal',
    'onEnd',
    'textContent',
    'isAiMessageVisible',
    'stringify',
    '145zvsjbZ',
    'timestamp',
    'container',
    'sin',
    'Speech\x20recognition\x20has\x20stopped.\x20Starting\x20again\x20...',
    'results',
    'userId',
    'freqs',
    'finalTranscription',
    '301zGhvkd',
    '11600NzufCc',
    'getElementsByTagName',
    'click',
    'conversationContext',
    'appId',
    'animation',
    'shrink\x200.2s\x20forwards',
    'User',
    'innerText',
    'querySelectorAll',
    'en-US',
    'recognition',
    'transcription\x20sent,\x20transcription\x20starting',
    'block',
    'speechContainer',
    '36020HsmlQN',
    'getLocalStream',
    'myWidget',
    '\x200\x20.5',
    'forEach',
    'text',
    'shrink',
    'largerWidget',
    'Speech\x20recognition\x20ended',
    'Returns',
    'length',
    'Recognition\x20object\x20not\x20found.',
    'accessMessage',
    'phases',
    'random',
    'stop',
    'Bot\x20·\x20Just\x20now',
    'value',
    'updateChatContainer',
    '744284WcBwyz',
    'dilate\x201s\x20ease-in-out\x20infinite\x20alternate',
    '29096CgoDPQ',
    'display',
    'expand\x200.2s\x20forwards',
    'sendUtteranceToServer',
    'Stopped\x20transcribing\x20to\x20send\x20data',
    'state',
    'round',
    'catch',
    'M\x200\x20.5\x20Q\x20',
    'none',
    'Stopped\x20transcribing\x20as\x20widget\x20closed',
    'Ai\x20response\x20is',
    'checkMicrophonePermission',
    '5762298ZHfcQn',
    'Speech\x20recognition\x20started',
    'path',
    'addEventListener',
    'scrollHeight',
    'AI\x20Assistant',
    'onresult',
    'updateTimestamp',
    'permissions',
    'push',
    'scrollTop',
    'Bot\x20·\x20',
    'isAssistantOpen',
    'style',
    'Error\x20accessing\x20microphone:\x20',
    'interimTranscription',
    'continuous',
    'includes',
    'log',
    'openButton',
    'appendToContext',
    'setAttribute',
    'shrinkToCorner\x200.1s\x20forwards',
    'aiResponseContainer',
    '\x20minutes\x20ago',
    'accessText',
    'transcript',
    'now',
    'mouseleave',
    '\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css\x22>\x0a\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20@import\x20url(\x27https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap\x27);\x0a\x0a\x20\x20\x20\x20\x20\x20.button-widget\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27inter\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2020px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#1a001a;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2050px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20999;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20rgba(149,\x20157,\x20165,\x200.2)\x200px\x208px\x2024px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.button-widget:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.05);\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20button-widget.clicked\x20{\x0a\x20\x20\x20\x20transform:\x20scale(0.9);\x20/*\x20Shrinks\x20the\x20button\x20to\x2090%\x20of\x20its\x20original\x20size\x20*/\x0a}\x0a\x0a\x20\x20\x20\x20\x20\x20/*\x20CSS\x20for\x20the\x20larger\x20widget\x20*/\x0a\x0a\x20\x20\x20\x20\x20\x20.larger-widget\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2090px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20390px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20267px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x202;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.3s;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0abox-shadow:\x20rgba(0,\x200,\x200,\x200.25)\x200px\x2025px\x2050px\x20-12px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.final\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.interim\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.speech-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.speech-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#005a9d;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.speech-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#003b6b;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.speech-results\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x22inter\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.access-message\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20h1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20.container\x20{\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20justify-content:\x20center;\x20/*\x20Center\x20the\x20content\x20horizontally\x20*/\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2033px;\x0a\x20\x20\x20\x20margin-top:\x2050px;\x0a\x20\x20\x20\x20height:\x2040px;\x20/*\x20Set\x20a\x20fixed\x20height\x20*/\x0a\x20\x20\x20\x20min-height:\x2040px;\x20/*\x20Ensure\x20it\x20doesn\x27t\x20shrink\x20below\x20this\x20height\x20*/\x0a\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20/*\x20Optional:\x20adds\x20a\x20border\x20to\x20make\x20the\x20container\x20visible\x20*/\x0a\x0a}\x0a\x20\x20\x20\x20\x20\x20.bottom\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2025px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20border:\x201px\x20dashed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20/*\x20Optional:\x20adds\x20a\x20border\x20to\x20make\x20the\x20container\x20visible\x20*/\x0a\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.divider\x20{\x0a\x20\x20\x20\x20height:\x202px;\x20/*\x20Adjust\x20the\x20height\x20as\x20needed\x20*/\x0a\x20\x20\x20\x20background-color:\x20#f5f5f5;\x20/*\x20Even\x20lighter\x20grey\x20color\x20*/\x0a\x20\x20\x20\x20width:\x20100%;\x20/*\x20Ensures\x20the\x20divider\x20stretches\x20across\x20the\x20full\x20width\x20of\x20its\x20parent\x20*/\x0a\x20\x20\x20\x20margin:\x2020px\x200;\x20/*\x20Adds\x20some\x20space\x20above\x20and\x20below\x20the\x20divider\x20*/\x0a}\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20.fa-keyboard\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2080px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x205px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x2080px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.powered\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Ensure\x20this\x20element\x20is\x20a\x20direct\x20child\x20of\x20.bottom\x20for\x20it\x20to\x20be\x20centered\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27inter\x27;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.flex\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.ball\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:40px;\x20/*\x20Circle\x20*/\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x20/*\x20Circle\x20*/\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0abox-shadow:\x20rgba(0,\x200,\x200,\x200.24)\x200px\x203px\x207px;\x0a}\x0a\x20\x20\x20\x20\x20\x20/*\x20CSS\x20for\x20chat\x20above*/\x0a\x20\x20\x20\x20\x20\x20.ai-chat-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x20380px;\x20/*\x20Fixed\x20bottom\x20position\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x20/*\x20Match\x20the\x20larger-widget\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20250px;\x20/*\x20Width\x20of\x20the\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20300px;\x20/*\x20Maximum\x20height\x20before\x20scrolling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x20/*\x20Add\x20scrollbar\x20for\x20overflow\x20content\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0abox-shadow:\x20rgba(0,\x200,\x200,\x200.25)\x200px\x2025px\x2050px\x20-12px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x20/*\x20Padding\x20around\x20text\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x20/*\x20Start\x20with\x20the\x20container\x20hidden\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2020px\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x20/*\x20Start\x20slightly\x20below\x20its\x20final\x20position\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x20/*\x20Transition\x20for\x20smooth\x20appearance\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Removed\x20fixed\x20height\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.ai-chat-container.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20expandAnimation\x200.5s\x20ease\x20forwards;\x20/*\x20Apply\x20the\x20expand\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.ai-response-conatiner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27inter\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.timestamp\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgb(107,\x20107,\x20110);\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27inter\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20path\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20mix-blend-mode:\x20plus-lighter;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20fadeOut\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.ai-chat-container.fade-out\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20fadeOut\x200.3s\x20ease\x20forwards;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20dilate\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scaleY(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x2025%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scaleY(1.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scaleY(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x2075%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scaleY(1.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scaleY(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20expandFromCorner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.2);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20bottom\x20right;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20shrinkToCorner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20bottom\x20right;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.2);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20bottom\x20right;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.interimTranscription\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x22inter\x22;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20expandAnimation\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(20px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20shrink\x20{\x0a\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.75);\x0a\x20\x20\x20\x20}\x0a}\x0a\x0a@keyframes\x20expand\x20{\x0a\x20\x20\x20\x20from\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.75);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20}\x0a}\x0a.link\x20{\x0a\x20\x20color:black;\x0a\x20\x20text-decoration:none;\x0a}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<button\x20class=\x22button-widget\x22\x20id=\x22openButton\x22></button>\x0a\x20\x20\x20\x20<div\x20class=\x22ai-chat-container\x22\x20id=\x22aiChatContainer\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22ai-response-conatiner\x22\x20id=\x22aiResponseContainer\x22></div>\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22timestamp\x22>Bot\x20·\x20Just\x20now\x20·</span>\x0a\x20\x20\x20\x20\x20\x20<!--\x20This\x20is\x20where\x20AI\x20responses\x20will\x20go\x20-->\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22larger-widget\x22\x20id=\x22largerWidget\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20id=\x22accessText\x22\x20class=\x22access-message\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Please\x20allow\x20microphone\x20access\x20to\x20enable\x20voice\x20recognition.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22speech-container\x22\x20id=\x22speechContainer\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x22\x20id=\x22container\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22interimTranscription\x22\x20class=\x22speech-results\x22></div>\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a<!--\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ball\x20animateball\x22\x20style=\x22background-color:\x20#ffbe0b\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ball\x20animateball\x22\x20style=\x22background-color:\x20#fb5607\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ball\x20animateball\x22\x20style=\x22background-color:\x20#ff006e\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ball\x20animateball\x22\x20style=\x22background-color:\x20#8338ec\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ball\x20animateball\x22\x20style=\x22background-color:\x20#3a86ff\x22></div>\x0a\x0a-->\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bottom\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22placeholder\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22powered\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20POWERED\x20BY\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22link\x22\x20target=\x22_blank\x22\x20href=\x22https://www.communicube.ai/\x22>COMMUNICUBE</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa-regular\x20fa-keyboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'then',
    'recording',
    'expandAnimation\x200.3s\x20forwards',
    'animationState',
    'updateDilationState',
    'https://www.communicube.ai/api/chat',
    'mousedown',
    'isMicrophoneAccessGranted',
    'requestMicrophoneAccess',
    'getElementById',
    'denied',
    'transcriptionInProgress',
    '3915024sYdHzh',
    'onend',
    '.access-message',
    'error',
    '4902070DKgdSP',
    'trim',
    'application/json',
    'getUserMedia',
    'microphone',
    'insertAdjacentHTML',
    'json',
    'fadeOut\x200.1s\x20forwards',
    '\x201\x20.5\x20Q\x20',
    'offsetHeight',
    '.animateball'
  ];
  _0x3e64 = function () {
    return _0x2f450a;
  };
  return _0x3e64();
}
