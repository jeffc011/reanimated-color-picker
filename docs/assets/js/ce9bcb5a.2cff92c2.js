'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [617],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => h });
      var r = n(7294);
      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var d = r.createContext({}),
        p = function (e) {
          var t = r.useContext(d),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        u = function (e) {
          var t = p(e.components);
          return r.createElement(d.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        s = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            i = e.originalType,
            d = e.parentName,
            u = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = p(n),
            s = a,
            h = m[''.concat(d, '.').concat(s)] || m[s] || c[s] || i;
          return n ? r.createElement(h, l(l({ ref: t }, u), {}, { components: n })) : r.createElement(h, l({ ref: t }, u));
        });
      function h(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = n.length,
            l = new Array(i);
          l[0] = s;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[m] = 'string' == typeof e ? e : a), (l[1] = o);
          for (var p = 2; p < i; p++) l[p] = n[p];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      s.displayName = 'MDXCreateElement';
    },
    278: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => c,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => u,
        });
      var r = n(7462),
        a = (n(7294), n(3905)),
        i = n(6862);
      const l = { sidebar_position: 9, sidebar_label: 'HueCircular', description: "A slider to change the color's opacity." },
        o = '<HueCircular />',
        d = {
          unversionedId: 'API/HueCircular',
          id: 'API/HueCircular',
          title: '<HueCircular />',
          description: "A slider to change the color's opacity.",
          source: '@site/docs/API/HueCircular.mdx',
          sourceDirName: 'API',
          slug: '/API/HueCircular',
          permalink: '/reanimated-color-picker/docs/API/HueCircular',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 9,
          frontMatter: {
            sidebar_position: 9,
            sidebar_label: 'HueCircular',
            description: "A slider to change the color's opacity.",
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'BlueSlider', permalink: '/reanimated-color-picker/docs/API/BlueSlider' },
          next: { title: 'Panel1', permalink: '/reanimated-color-picker/docs/API/Panel1' },
        },
        p = {},
        u = [
          { value: 'Props', id: 'props', level: 2 },
          { value: '<code>thumbSize</code>', id: 'thumbsize', level: 3 },
          { value: '<code>thumbColor</code>', id: 'thumbcolor', level: 3 },
          { value: '<code>sliderThickness</code>', id: 'sliderthickness', level: 3 },
          { value: '<code>thumbShape</code>', id: 'thumbshape', level: 3 },
          { value: '<code>thumbStyle</code>', id: 'thumbstyle', level: 3 },
          { value: '<code>thumbInnerStyle</code>', id: 'thumbinnerstyle', level: 3 },
          { value: '<code>renderThumb</code>', id: 'renderthumb', level: 3 },
          { value: '<code>adaptSpectrum</code>', id: 'adaptspectrum', level: 3 },
          { value: '<code>style</code>', id: 'style', level: 3 },
          { value: '<code>containerStyle</code>', id: 'containerstyle', level: 3 },
        ],
        m = { toc: u };
      function c(e) {
        let { components: t, ...l } = e;
        return (0, a.kt)(
          'wrapper',
          (0, r.Z)({}, m, l, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h1', { id: 'huecircular-' }, (0, a.kt)('inlineCode', { parentName: 'h1' }, '<HueCircular />')),
          (0, a.kt)('p', null, (0, a.kt)('img', { alt: 'HueCircular', src: n(1759).Z, width: '200', height: '200' })),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'h3',
                { parentName: 'li', id: 'a-circular-slider-to-change-the-colors-hue' },
                "A circular slider to change the color's hue."
              )
            )
          ),
          (0, a.kt)('h2', { id: 'props' }, 'Props'),
          (0, a.kt)('h3', { id: 'thumbsize' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'thumbSize')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, "The size of the slider's thumb."),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: number')),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'default: 35'))
          ),
          (0, a.kt)('h3', { id: 'thumbcolor' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'thumbColor')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, "The color of the slider's thumb."),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: string')),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'default: interactive*'))
          ),
          (0, a.kt)(
            'admonition',
            { type: 'info' },
            (0, a.kt)(
              'mdxAdmonitionTitle',
              { parentName: 'admonition' },
              (0, a.kt)('strong', { parentName: 'mdxAdmonitionTitle' }, '*', 'interactive')
            ),
            (0, a.kt)(
              'ul',
              { parentName: 'admonition' },
              (0, a.kt)(
                'li',
                { parentName: 'ul' },
                'The color of the thumb will be adjusted according to the contrast ratio, in the absence of a specific color value.'
              )
            )
          ),
          (0, a.kt)('h3', { id: 'sliderthickness' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'sliderThickness')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, 'The thickness of the slider.'),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: number')),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'default: 25'))
          ),
          (0, a.kt)('h3', { id: 'thumbshape' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'thumbShape')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, "The shape and appearance of the slider's thumb."),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: string')),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, "default: 'ring'")),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)('inlineCode', { parentName: 'li' }, 'values:'),
              (0, a.kt)('shapes', null)
            )
          ),
          (0, a.kt)('h3', { id: 'thumbstyle' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'thumbStyle')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, "Thumb's containing View's style."),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          ),
          (0, a.kt)('h3', { id: 'thumbinnerstyle' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'thumbInnerStyle')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, "Thumb's inner View(s) style."),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          ),
          (0, a.kt)('h3', { id: 'renderthumb' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'renderThumb')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              'Function which receives ',
              (0, a.kt)('inlineCode', { parentName: 'li' }, 'ThumbProps'),
              ' and returns a custom thumb component.'
            ),
            (0, a.kt)('li', { parentName: 'ul' }, 'Overrides ', (0, a.kt)('inlineCode', { parentName: 'li' }, 'thumbShape'))
          ),
          (0, a.kt)(i.ZP, { mdxType: 'RenderThumb' }),
          (0, a.kt)('h3', { id: 'adaptspectrum' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'adaptSpectrum')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              'Slider background color spectrum adapts to changes in saturation and brightness.'
            ),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: boolean')),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'default: false'))
          ),
          (0, a.kt)('h3', { id: 'style' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'style')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, "The style of the slider's container."),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          ),
          (0, a.kt)(
            'admonition',
            { title: 'note', type: 'info' },
            (0, a.kt)(
              'ul',
              { parentName: 'admonition' },
              (0, a.kt)('li', { parentName: 'ul' }, 'Certain style properties will be overridden.')
            )
          ),
          (0, a.kt)('h3', { id: 'containerstyle' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'containerStyle')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, 'The style of the container that wraps the given children.'),
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'type: ViewStyle'))
          )
        );
      }
      c.isMDXComponent = !0;
    },
    6862: (e, t, n) => {
      n.d(t, { ZP: () => l });
      var r = n(7462),
        a = (n(7294), n(3905));
      const i = {
        toc: [
          { value: '<code>renderThumb</code>', id: 'renderthumb', level: 3 },
          { value: '<code>ThumbProps</code>', id: 'thumbprops', level: 4 },
        ],
      };
      function l(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          'wrapper',
          (0, r.Z)({}, i, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h3', { id: 'renderthumb' }, (0, a.kt)('inlineCode', { parentName: 'h3' }, 'renderThumb')),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              'Function which receives ',
              (0, a.kt)('inlineCode', { parentName: 'li' }, 'ThumbProps'),
              ' and returns a custom thumb component.'
            ),
            (0, a.kt)('li', { parentName: 'ul' }, 'Overrides ', (0, a.kt)('inlineCode', { parentName: 'li' }, 'thumbShape'))
          ),
          (0, a.kt)('h4', { id: 'thumbprops' }, (0, a.kt)('inlineCode', { parentName: 'h4' }, 'ThumbProps')),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'center' }, 'Prop'),
                (0, a.kt)('th', { parentName: 'tr', align: 'center' }, 'Type'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Description')
              )
            ),
            (0, a.kt)(
              'tbody',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'positionStyle')
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'StyleProp')
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'This style determines the position of the thumb and is a crucial element that should be included.'
                )
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)('td', { parentName: 'tr', align: 'center' }, (0, a.kt)('inlineCode', { parentName: 'td' }, 'width')),
                (0, a.kt)('td', { parentName: 'tr', align: 'center' }, (0, a.kt)('inlineCode', { parentName: 'td' }, 'number')),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Extracted from the ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'thumbSize'),
                  " prop and it's important for thumb position calculation."
                )
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)('td', { parentName: 'tr', align: 'center' }, (0, a.kt)('inlineCode', { parentName: 'td' }, 'height')),
                (0, a.kt)('td', { parentName: 'tr', align: 'center' }, (0, a.kt)('inlineCode', { parentName: 'td' }, 'number')),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'Extracted from the ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'thumbSize'),
                  " prop and it's important for thumb position calculation."
                )
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'adaptiveColor')
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'SharedValue<string>')
                ),
                (0, a.kt)('td', { parentName: 'tr', align: 'left' }, 'White or black based on the contrast ratio.')
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'currentColor')
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'SharedValue<string>')
                ),
                (0, a.kt)('td', { parentName: 'tr', align: 'left' }, 'This shared value will update whenever the color changes.')
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'center' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'initialColor')
                ),
                (0, a.kt)('td', { parentName: 'tr', align: 'center' }, (0, a.kt)('inlineCode', { parentName: 'td' }, 'string')),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'The initial color value as a ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '.'
                )
              )
            )
          ),
          (0, a.kt)('ul', null, (0, a.kt)('li', { parentName: 'ul' }, 'Example Usage:')),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-tsx' },
              "import Animated, { useAnimatedStyle } from 'react-native-reanimated';\nimport type { RenderThumbProps } from 'reanimated-color-picker';\n\nfunction MyCustomThumb({\n  width,\n  height,\n  positionStyle,\n  adaptiveColor,\n  currentColor,\n  initialColor,\n}: RenderThumbProps) {\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    borderColor: adaptiveColor.value,\n    backgroundColor: currentColor.value,\n  }));\n\n  return (\n    <Animated.View\n      style={[\n        { width, height, borderWidth: 1, borderRadius: width / 2, overflow: 'hidden' },\n        animatedStyle,\n        positionStyle,\n        ]}\n    >\n      <View style={{ backgroundColor: initialColor, width: '50%', height, alignSelf: 'flex-end' }} />\n    </Animated.View>\n  );\n}\n"
            )
          )
        );
      }
      l.isMDXComponent = !0;
    },
    1759: (e, t, n) => {
      n.d(t, { Z: () => r });
      const r = n.p + 'assets/images/HueCircular-3b05147e1c8a1622bff99e7baa3db115.png';
    },
  },
]);
