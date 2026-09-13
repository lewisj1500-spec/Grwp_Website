/* @ds-bundle: {"format":4,"namespace":"GrwpDesignSystem_c2fcf1","components":[{"name":"DetailRow","sourcePath":"components/cards/DetailRow.jsx"},{"name":"StatBlock","sourcePath":"components/cards/StatBlock.jsx"},{"name":"VenueRow","sourcePath":"components/cards/VenueRow.jsx"},{"name":"VenueTile","sourcePath":"components/cards/VenueTile.jsx"},{"name":"VoteCard","sourcePath":"components/cards/VoteCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/AvatarStack.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"SegmentedTabs","sourcePath":"components/forms/SegmentedTabs.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"CategoryChip","sourcePath":"components/navigation/CategoryChip.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"SectionHeader","sourcePath":"components/navigation/SectionHeader.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"ChatBubble","sourcePath":"components/social/ChatBubble.jsx"},{"name":"SuccessSeal","sourcePath":"components/social/SuccessSeal.jsx"}],"sourceHashes":{"components/cards/DetailRow.jsx":"707ad086cf47","components/cards/StatBlock.jsx":"2275b61aef7c","components/cards/VenueRow.jsx":"f9f3ec744bd4","components/cards/VenueTile.jsx":"a3712f8824d3","components/cards/VoteCard.jsx":"bcbd52fab38b","components/core/Avatar.jsx":"f6b43788ff04","components/core/AvatarStack.jsx":"e87fa8d63747","components/core/Badge.jsx":"fea0bfcaf2b4","components/core/Button.jsx":"a91d94c9e659","components/core/Icon.jsx":"fd7a671addfa","components/core/IconButton.jsx":"58a56d7bfa3e","components/core/Logo.jsx":"626f82a1caae","components/core/ProgressBar.jsx":"3ea1579b0606","components/forms/SearchField.jsx":"f2992fc14bde","components/forms/SegmentedTabs.jsx":"f5424778bed7","components/navigation/AppHeader.jsx":"b3004bd840a9","components/navigation/CategoryChip.jsx":"fe1b51fef41f","components/navigation/ListRow.jsx":"b414f46d8315","components/navigation/SectionHeader.jsx":"29d0d4c36a00","components/navigation/TabBar.jsx":"3a80c90ef527","components/social/ChatBubble.jsx":"3881932c4571","components/social/SuccessSeal.jsx":"9e04c1b5c644","ui_kits/app/App.jsx":"80a0ae107ca2","ui_kits/app/Explore.jsx":"d0105a00ea13","ui_kits/app/Group.jsx":"8d99ab8c306c","ui_kits/app/Onboarding.jsx":"97e2be3f558f","ui_kits/app/Phone.jsx":"75bfd94e6a0a","ui_kits/app/PlanDetail.jsx":"8164e20be1b1","ui_kits/app/Profile.jsx":"f06f8dc9ec44","ui_kits/app/VenueDetail.jsx":"438d6bd28d63","ui_kits/app/Winner.jsx":"d1d1a2b59f26","ui_kits/app/data.js":"c0ec95530a06","ui_kits/web/Landing.jsx":"c3de6d98201d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrwpDesignSystem_c2fcf1 = window.GrwpDesignSystem_c2fcf1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  stats = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      ...style
    }
  }, rest), stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      fontVariationSettings: 'var(--display-variation)',
      color: 'var(--text-primary)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  name = '',
  size = 28,
  ring = 'var(--bg-surface)',
  style,
  ...rest
}) {
  const initials = name.trim().slice(0, 1).toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      background: 'var(--sage-500)',
      color: 'var(--ink-800)',
      font: `500 ${Math.round(size * 0.42)}px/1 var(--font-ui)`,
      boxShadow: ring ? `0 0 0 2px ${ring}` : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AvatarStack({
  members = [],
  max = 4,
  size = 26,
  ring = 'var(--bg-surface)',
  overflowTone = 'sage',
  style,
  ...rest
}) {
  const shown = members.slice(0, max);
  const extra = members.length - shown.length;
  const tone = overflowTone === 'sage' ? {
    background: 'var(--sage-500)',
    color: 'var(--ink-800)'
  } : {
    background: 'var(--sand-300)',
    color: 'var(--ink-800)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, rest), shown.map((m, i) => /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({
    key: i
  }, m, {
    size: size,
    ring: ring,
    style: {
      marginLeft: i === 0 ? 0 : -size * 0.32
    }
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -size * 0.32,
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `500 ${Math.round(size * 0.4)}px/1 var(--font-ui)`,
      boxShadow: `0 0 0 2px ${ring}`,
      ...tone
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarStack.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  coral: {
    background: 'var(--coral-500)',
    color: 'var(--text-on-coral)'
  },
  sage: {
    background: 'var(--sage-500)',
    color: 'var(--ink-800)'
  },
  sand: {
    background: 'var(--sand-300)',
    color: 'var(--ink-800)'
  },
  ink: {
    background: 'var(--ink-800)',
    color: 'var(--text-inverse)'
  },
  quiet: {
    background: 'var(--bg-surface-alt)',
    color: 'var(--text-secondary)'
  },
  success: {
    background: 'var(--state-success-bg)',
    color: 'var(--sage-700)'
  }
};
function Badge({
  children,
  tone = 'coral',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      font: '500 var(--text-2xs)/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-tight)',
      ...(TONES[tone] || TONES.coral),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Grwp uses Lucide (outline, 2px stroke, 24px grid) for every UI glyph.
   No icon binaries ship with this design system, so glyph source is fetched once per name from
   the lucide-static CDN and inlined, letting it inherit currentColor like any other SVG. */
const CDN = 'assets/icons/';
const cache = {};
function load(name) {
  if (!cache[name]) {
    cache[name] = fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(svg => svg.replace(/<!--[\s\S]*?-->/g, '').replace(/\s(width|height)="[^"]*"/g, '').replace('<svg', '<svg width="100%" height="100%"')).catch(() => '');
  }
  return cache[name];
}
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    let live = true;
    load(name).then(s => {
      if (live) setSvg(s);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-icon": name,
    dangerouslySetInnerHTML: {
      __html: svg
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/DetailRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DetailRow({
  icon,
  label,
  value,
  children,
  image,
  action,
  onAction,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      minHeight: 56,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-base)/1.2 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  }, label), value && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      marginTop: 3
    }
  }, value), children), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-xs)',
      objectFit: 'cover'
    }
  }), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    "aria-label": action,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 4,
      display: 'flex',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: action,
    size: 18
  })));
}
Object.assign(__ds_scope, { DetailRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DetailRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/VenueRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VenueRow({
  name,
  area,
  image,
  members = [],
  saved = false,
  onToggleSave,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 8,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: hover ? 'var(--bg-surface)' : 'transparent',
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-sm)',
      objectFit: 'cover',
      flex: '0 0 auto',
      background: 'var(--sand-300)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-base)/1.2 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      margin: '3px 0 6px'
    }
  }, area), members.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.AvatarStack, {
    members: members,
    size: 20,
    max: 4,
    ring: "var(--bg-page)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onToggleSave && onToggleSave();
    },
    "aria-label": "Save",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex',
      color: saved ? 'var(--coral-500)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 19
  })));
}
Object.assign(__ds_scope, { VenueRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/VenueRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/VenueTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VenueTile({
  name,
  area,
  image,
  width = 150,
  height = 190,
  badge,
  saved = false,
  onToggleSave,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: 'relative',
      width,
      height,
      flex: '0 0 auto',
      cursor: 'pointer',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--ink-700)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 11,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-sm)/1.2 var(--font-ui)',
      color: 'var(--cream-100)'
    }
  }, name), area && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--text-2xs)/1.3 var(--font-ui)',
      color: 'rgba(252,250,247,0.72)',
      marginTop: 3
    }
  }, area)), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onToggleSave && onToggleSave();
    },
    "aria-label": "Save",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      color: saved ? 'var(--coral-500)' : 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 17
  }))));
}
Object.assign(__ds_scope, { VenueTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/VenueTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/VoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VoteCard({
  name,
  area,
  image,
  members = [],
  voted = false,
  onVote,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 10,
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--ink-700)' : 'var(--bg-surface)',
      border: `${voted ? 2 : 1}px solid ${voted ? 'var(--coral-500)' : dark ? 'var(--border-inverse)' : 'var(--border-subtle)'}`,
      boxShadow: dark ? 'none' : 'var(--shadow-xs)',
      transition: 'var(--transition-default)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-sm)',
      objectFit: 'cover',
      flex: '0 0 auto',
      background: 'var(--sand-300)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-base)/1.2 var(--font-ui)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
      margin: '3px 0 7px'
    }
  }, area), /*#__PURE__*/React.createElement(__ds_scope.AvatarStack, {
    members: members,
    size: 20,
    max: 4,
    ring: dark ? 'var(--ink-700)' : 'var(--bg-surface)'
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onVote,
    "aria-label": voted ? 'Remove vote' : 'Vote',
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      background: voted ? 'var(--coral-500)' : dark ? 'var(--ink-600)' : 'var(--cream-300)',
      color: voted ? 'var(--text-on-coral)' : dark ? 'var(--text-inverse-muted)' : 'var(--text-tertiary)',
      transition: 'var(--transition-default)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 18
  })));
}
Object.assign(__ds_scope, { VoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/VoteCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--action-dark)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  coral: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-coral)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--bg-surface)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  cream: {
    background: 'var(--cream-500)',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: 'var(--action-dark-hover)',
  coral: 'var(--action-primary-hover)',
  secondary: 'var(--bg-surface-alt)',
  cream: 'var(--cream-300)',
  ghost: 'rgba(242,237,230,0.10)'
};
const SIZES = {
  lg: {
    height: 54,
    padding: '0 22px',
    font: 'var(--type-button)',
    radius: 'var(--radius-md)'
  },
  md: {
    height: 46,
    padding: '0 18px',
    font: 'var(--type-button)',
    radius: 'var(--radius-md)'
  },
  sm: {
    height: 36,
    padding: '0 14px',
    font: '500 var(--text-sm)/1 var(--font-ui)',
    radius: 'var(--radius-sm)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.lg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      width: fullWidth ? '100%' : 'auto',
      height: s.height,
      padding: s.padding,
      font: s.font,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      letterSpacing: 'var(--tracking-tight)',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)',
      transform: press ? 'scale(var(--press-scale))' : 'none',
      opacity: disabled ? 0.4 : 1,
      ...v,
      background: hover && !disabled ? HOVER[variant] : v.background,
      ...style
    }
  }, rest), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  quiet: {
    background: 'var(--bg-surface)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)'
  },
  tinted: {
    background: 'var(--coral-100)',
    color: 'var(--coral-500)',
    border: '1px solid transparent'
  },
  coral: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-coral)',
    border: '1px solid transparent'
  },
  dark: {
    background: 'var(--action-dark)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  glass: {
    background: 'var(--glass)',
    color: 'var(--text-primary)',
    border: '1px solid transparent',
    backdropFilter: 'var(--glass-blur)'
  }
};
function IconButton({
  icon,
  tone = 'quiet',
  size = 44,
  label,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [press, setPress] = React.useState(false);
  const t = TONES[active ? 'coral' : tone] || TONES.quiet;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    onClick: onClick,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)',
      transition: 'var(--transition-default)',
      transform: press ? 'scale(0.92)' : 'none',
      ...t,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Assets live in /assets. Pages set the base once:
   <html data-grwp-assets="../../assets">  (default: "assets") */
const FILES = {
  black: 'logo-grwp-black.png',
  cream: 'logo-grwp-cream.png'
};
function Logo({
  tone = 'black',
  height = 34,
  src,
  style,
  ...rest
}) {
  const base = typeof document !== 'undefined' && document.documentElement.dataset.grwpAssets || 'assets';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || `${base}/${FILES[tone] || FILES.black}`,
    alt: "Grwp",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  tone = 'sage',
  height = 6,
  style,
  ...rest
}) {
  const fill = tone === 'coral' ? 'var(--coral-500)' : tone === 'ink' ? 'var(--ink-800)' : 'var(--sage-600)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      width: '100%',
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-sunken)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${Math.max(0, Math.min(100, value))}%`,
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  placeholder = 'Search places, cuisines, vibes...',
  value,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 48,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      background: dark ? 'var(--ink-700)' : 'var(--bg-surface)',
      border: `1px solid ${dark ? 'var(--border-inverse)' : 'var(--border-subtle)'}`,
      boxShadow: dark ? 'none' : 'var(--shadow-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: dark ? 'var(--text-inverse-muted)' : 'var(--text-tertiary)'
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body-sm)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SegmentedTabs({
  tabs = [],
  value,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-md)',
      background: dark ? 'var(--ink-700)' : 'var(--bg-sunken)',
      ...style
    }
  }, rest), tabs.map(t => {
    const active = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(t),
      style: {
        flex: 1,
        height: 36,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        font: `${active ? 500 : 400} var(--text-sm)/1 var(--font-ui)`,
        background: active ? dark ? 'var(--cream-100)' : 'var(--white)' : 'transparent',
        color: active ? 'var(--text-primary)' : dark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
        boxShadow: active ? 'var(--shadow-xs)' : 'none',
        transition: 'var(--transition-default)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AppHeader({
  title,
  subtitle,
  place,
  onBack,
  onAction,
  actionIcon = 'more-horizontal',
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '6px var(--screen-gutter) 12px',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
      ...style
    }
  }, rest), onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'inherit',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-title)',
      fontVariationSettings: 'var(--display-variation)',
      letterSpacing: 'var(--tracking-display)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
      marginTop: 2
    }
  }, subtitle)), place && /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 34,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: dark ? 'var(--ink-700)' : 'var(--bg-surface)',
      border: `1px solid ${dark ? 'var(--border-inverse)' : 'var(--border-subtle)'}`,
      font: '500 var(--text-sm)/1 var(--font-ui)',
      color: 'inherit'
    }
  }, place, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15
  })), onAction && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: actionIcon,
    tone: dark ? 'dark' : 'quiet',
    size: 40,
    onClick: onAction
  }));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  coral: {
    background: 'var(--coral-100)',
    color: 'var(--coral-500)'
  },
  sage: {
    background: 'var(--sage-100)',
    color: 'var(--sage-700)'
  },
  sand: {
    background: 'var(--sand-200)',
    color: 'var(--ink-600)'
  },
  cream: {
    background: 'var(--cream-300)',
    color: 'var(--ink-600)'
  }
};
function CategoryChip({
  icon,
  label,
  tone = 'coral',
  active = false,
  onClick,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.coral;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: active ? 'var(--coral-500)' : t.background,
      color: active ? 'var(--text-on-coral)' : t.color,
      boxShadow: active ? 'var(--shadow-fab)' : 'var(--shadow-xs)',
      transition: 'var(--transition-default)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 21
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  icon,
  label,
  meta,
  onClick,
  tone = 'light',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 56,
      padding: '0 16px',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-md)',
      border: '1px solid transparent',
      background: hover ? dark ? 'var(--ink-700)' : 'var(--bg-surface)' : 'transparent',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: dark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 var(--text-base)/1 var(--font-ui)'
    }
  }, label), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, meta), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-tertiary)"
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  title,
  action = 'See all',
  onAction,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-section)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = [{
  id: 'explore',
  label: 'Explore',
  icon: 'search'
}, {
  id: 'groups',
  label: 'Groups',
  icon: 'users'
}, {
  id: 'create',
  label: '',
  icon: 'plus',
  fab: true
}, {
  id: 'plans',
  label: 'Plans',
  icon: 'calendar'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'user'
}];
function TabBar({
  items = DEFAULT_ITEMS,
  value = 'explore',
  onChange,
  onCreate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'var(--tabbar-height)',
      padding: '0 12px 6px',
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(it => {
    if (it.fab) {
      return /*#__PURE__*/React.createElement("button", {
        key: it.id,
        onClick: onCreate,
        "aria-label": "Create a plan",
        style: {
          width: 46,
          height: 46,
          borderRadius: 'var(--radius-pill)',
          border: 'none',
          cursor: 'pointer',
          background: 'var(--action-primary)',
          color: 'var(--text-on-coral)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-fab)'
        }
      }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: "plus",
        size: 22
      }));
    }
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: 0,
        color: active ? 'var(--coral-500)' : 'var(--text-tertiary)',
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-nav)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/social/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChatBubble({
  author,
  text,
  avatar,
  mine = false,
  reaction,
  reactionCount,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: mine ? 'flex-end' : 'flex-start',
      gap: 4,
      ...style
    }
  }, rest), author && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
      margin: mine ? '0 6px 0 0' : '0 0 0 34px'
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      flexDirection: mine ? 'row-reverse' : 'row',
      maxWidth: '82%'
    }
  }, !mine && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    name: author,
    size: 26,
    ring: dark ? 'var(--ink-800)' : 'var(--bg-page)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '11px 14px',
      borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      background: mine ? 'var(--sage-500)' : dark ? 'var(--ink-700)' : 'var(--bg-surface)',
      color: mine ? 'var(--ink-800)' : dark ? 'var(--text-inverse)' : 'var(--text-primary)',
      font: 'var(--type-body-sm)',
      border: mine ? 'none' : `1px solid ${dark ? 'var(--border-inverse)' : 'var(--border-subtle)'}`
    }
  }, text)), reaction && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 22,
      padding: '0 8px',
      margin: mine ? '-6px 8px 0 0' : '-6px 0 0 34px',
      borderRadius: 'var(--radius-pill)',
      background: dark ? 'var(--ink-600)' : 'var(--white)',
      boxShadow: 'var(--shadow-xs)',
      font: '500 var(--text-2xs)/1 var(--font-ui)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, reaction, reactionCount ? ` ${reactionCount}` : ''));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/social/SuccessSeal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SuccessSeal({
  size = 128,
  tone = 'sage',
  style,
  ...rest
}) {
  const bg = tone === 'coral' ? 'var(--coral-500)' : 'var(--sage-500)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: 'var(--cream-100)',
      borderRadius: '42% 58% 46% 54% / 52% 44% 56% 48%',
      animation: 'grwp-seal-pop var(--duration-celebrate) var(--ease-spring) both',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes grwp-seal-pop{from{transform:scale(0.7) rotate(-8deg);opacity:0}to{transform:none;opacity:1}}'), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { SuccessSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SuccessSeal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function App() {
  const {
    venues
  } = window.GrwpData;
  const [view, setView] = React.useState('onboarding');
  const [tab, setTab] = React.useState('explore');
  const [venue, setVenue] = React.useState(venues[0]);
  const onTab = id => {
    setTab(id);
    setView(id === 'profile' ? 'profile' : id === 'plans' ? 'plan' : id === 'groups' ? 'group' : 'explore');
  };
  if (view === 'onboarding') return /*#__PURE__*/React.createElement(Onboarding, {
    onStart: () => setView('explore')
  });
  if (view === 'venue') return /*#__PURE__*/React.createElement(VenueDetail, {
    venue: venue,
    onBack: () => setView('explore'),
    onInvite: () => setView('group')
  });
  if (view === 'group') return /*#__PURE__*/React.createElement(Group, {
    onBack: () => {
      setTab('explore');
      setView('explore');
    },
    onResults: () => setView('winner')
  });
  if (view === 'winner') return /*#__PURE__*/React.createElement(Winner, {
    onClose: () => setView('group'),
    onViewPlan: () => {
      setTab('plans');
      setView('plan');
    }
  });
  if (view === 'plan') return /*#__PURE__*/React.createElement(PlanDetail, {
    tab: tab,
    onTab: onTab,
    onCreate: () => setView('group'),
    onBack: () => {
      setTab('explore');
      setView('explore');
    },
    onOpenGroup: () => setView('group')
  });
  if (view === 'profile') return /*#__PURE__*/React.createElement(Profile, {
    tab: tab,
    onTab: onTab,
    onCreate: () => setView('group'),
    onOpenGroup: () => setView('group')
  });
  return /*#__PURE__*/React.createElement(Explore, {
    tab: tab,
    onTab: onTab,
    onCreate: () => setView('group'),
    onOpenVenue: v => {
      setVenue(v);
      setView('venue');
    }
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Explore.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function Explore({
  tab,
  onTab,
  onCreate,
  onOpenVenue
}) {
  const {
    Icon,
    IconButton,
    SearchField,
    CategoryChip,
    SectionHeader,
    TabBar,
    VenueTile,
    VenueRow
  } = DS();
  const {
    venues,
    trending,
    categories
  } = window.GrwpData;
  const [q, setQ] = React.useState('');
  const [cat, setCat] = React.useState('Dinner');
  const [saved, setSaved] = React.useState({});
  const toggle = k => setSaved(s => ({
    ...s,
    [k]: !s[k]
  }));
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '2px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      font: '500 var(--text-sm)/1 var(--font-ui)',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, "London ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 15
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-title)'
    }
  }, "Good evening,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, "Where to?"))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    tone: "quiet",
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search for places, cuisines, vibes..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '18px var(--screen-gutter) 0',
      justifyContent: 'space-between'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(CategoryChip, _extends({
    key: c.label
  }, c, {
    active: cat === c.label,
    onClick: () => setCat(c.label)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0 0 var(--screen-gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Recommended for you",
    style: {
      paddingRight: 'var(--screen-gutter)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, venues.map(v => /*#__PURE__*/React.createElement(VenueTile, {
    key: v.id,
    name: v.name,
    area: v.area,
    image: v.tile,
    width: 148,
    height: 186,
    saved: !!saved[v.id],
    onToggleSave: () => toggle(v.id),
    onClick: () => onOpenVenue(v)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px var(--screen-gutter) 20px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Popular this week"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, trending.map(t => /*#__PURE__*/React.createElement(VenueRow, _extends({
    key: t.name
  }, t, {
    saved: !!saved[t.name],
    onToggleSave: () => toggle(t.name),
    onClick: () => onOpenVenue(venues[0])
  })))))), /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: onTab,
    onCreate: onCreate
  }));
}
Object.assign(window, {
  Explore
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Explore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Group.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function GroupComposer() {
  const {
    IconButton
  } = DS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px var(--screen-gutter) 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-700)',
      border: '1px solid var(--border-inverse)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      font: 'var(--type-body-sm)',
      color: 'var(--text-inverse-muted)'
    }
  }, "Message the group..."), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    tone: "dark",
    size: 44,
    style: {
      background: 'var(--ink-600)'
    }
  }));
}
function Group({
  onBack,
  onResults
}) {
  const {
    Icon,
    AvatarStack,
    Button,
    ProgressBar,
    SegmentedTabs,
    VoteCard,
    DetailRow,
    ChatBubble
  } = DS();
  const {
    members,
    candidates
  } = window.GrwpData;
  const [tab, setTab] = React.useState('Places');
  const [votes, setVotes] = React.useState({
    'Camberwell Arms': true
  });
  const vote = n => setVotes(v => ({
    ...v,
    [n]: !v[n]
  }));
  return /*#__PURE__*/React.createElement(Phone, {
    background: "var(--ink-800)"
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--screen-gutter)',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement(AvatarStack, {
    members: members,
    max: 4,
    size: 34,
    ring: "var(--ink-800)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-title)',
      color: 'var(--text-inverse)'
    }
  }, "Saturday plans"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-inverse-muted)',
      marginTop: 4
    }
  }, "6 members")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SegmentedTabs, {
    tone: "dark",
    tabs: ['Places', 'Details', 'Chat'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement(Screen, {
    style: {
      padding: '16px var(--screen-gutter) 0'
    }
  }, tab === 'Places' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--card-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-inverse-muted)'
    }
  }, "Everyone vote on your favourites \uD83D\uDC47"), candidates.map(c => /*#__PURE__*/React.createElement(VoteCard, _extends({
    key: c.name
  }, c, {
    voted: !!votes[c.name],
    onVote: () => vote(c.name)
  })))), tab === 'Details' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--card-gap)'
    }
  }, /*#__PURE__*/React.createElement(DetailRow, {
    icon: "calendar",
    label: "Sat, 25 May",
    value: "7:00pm"
  }), /*#__PURE__*/React.createElement(DetailRow, {
    icon: "users",
    label: "6 going",
    value: "Jess, Alex, Sam and 3 more"
  }), /*#__PURE__*/React.createElement(DetailRow, {
    icon: "map-pin",
    label: "Shoreditch",
    value: "Within 2 miles of everyone"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-inverse-muted)'
    }
  }, "Plan status"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-base)/1.4 var(--font-ui)',
      color: 'var(--sage-500)',
      margin: '2px 0 10px'
    }
  }, "Voting ends in 12h"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 64
  }))), tab === 'Chat' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    tone: "dark",
    author: "Jess",
    avatar: members[0].src,
    text: "Can't wait! Any dietary requirements?",
    reaction: "\uD83D\uDE4C",
    reactionCount: 2
  }), /*#__PURE__*/React.createElement(ChatBubble, {
    tone: "dark",
    mine: true,
    author: "Alex",
    text: "I'm veggie",
    reaction: "\u2764\uFE0F",
    reactionCount: 1
  }), /*#__PURE__*/React.createElement(ChatBubble, {
    tone: "dark",
    author: "Sam",
    avatar: members[2].src,
    text: "Same here",
    reaction: "\uD83D\uDC4D",
    reactionCount: 1
  }), /*#__PURE__*/React.createElement(ChatBubble, {
    tone: "dark",
    author: "Priya",
    avatar: members[3].src,
    text: "Camberwell Arms does a great mushroom thing"
  }))), tab === 'Chat' ? /*#__PURE__*/React.createElement(GroupComposer, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px var(--screen-gutter) 26px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    fullWidth: true,
    onClick: onResults
  }, "See Results")));
}
Object.assign(window, {
  Group,
  GroupComposer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Group.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Onboarding.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function Onboarding({
  onStart
}) {
  const {
    Logo,
    Button
  } = DS();
  const {
    skyline
  } = window.GrwpData;
  return /*#__PURE__*/React.createElement(Phone, {
    background: "#14241F"
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    height: 38
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 40px/1.1 var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      letterSpacing: 'var(--tracking-display)',
      wordSpacing: 'var(--word-spacing-display)',
      color: 'var(--text-inverse)',
      marginTop: 32
    }
  }, "Plans are", /*#__PURE__*/React.createElement("br", null), "better", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, "together.")), /*#__PURE__*/React.createElement("p", {
    className: "grwp-display",
    style: {
      font: '700 var(--text-base)/1.45 var(--font-display)',
      color: 'var(--sage-500)',
      marginTop: 18
    }
  }, "London Born.", /*#__PURE__*/React.createElement("br", null), "Made For Making Plans.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#E2704A',
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: skyline,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 268,
      objectFit: 'cover',
      objectPosition: 'bottom',
      marginBottom: -1,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 26px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    fullWidth: true,
    onClick: onStart
  }, "Get Started"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true
  }, "Log In")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 9,
      padding: '14px 0 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--cream-100)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--sand-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--sage-600)'
    }
  })))));
}
Object.assign(window, {
  Onboarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Phone.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function StatusBar({
  tone = 'light'
}) {
  const {
    Icon
  } = DS();
  const c = tone === 'dark' ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      color: c,
      font: '500 var(--text-sm)/1 var(--font-ui)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 17
  })));
}
function Phone({
  children,
  background = 'var(--bg-page)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--app-width)',
      height: 760,
      background,
      borderRadius: 'var(--radius-phone)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)',
      flex: '0 0 auto'
    }
  }, children);
}
function Screen({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      ...style
    }
  }, children);
}
Object.assign(window, {
  Phone,
  StatusBar,
  Screen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/PlanDetail.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function PlanDetail({
  tab,
  onTab,
  onCreate,
  onBack,
  onOpenGroup
}) {
  const {
    Icon,
    Badge,
    Button,
    AvatarStack,
    DetailRow,
    TabBar
  } = DS();
  const {
    members,
    candidates
  } = window.GrwpData;
  const venue = candidates[0];
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 var(--screen-gutter) 8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-title)',
      flex: 1
    }
  }, "Saturday Plan"), /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 22
  })), /*#__PURE__*/React.createElement(Screen, {
    style: {
      padding: '10px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sand"
  }, "Confirmed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--card-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--card-gap)'
    }
  }, /*#__PURE__*/React.createElement(DetailRow, {
    icon: "calendar",
    label: "Sat, 25 May",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(DetailRow, {
    icon: "clock",
    label: "7:00pm",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(DetailRow, {
    label: venue.name,
    value: venue.area,
    image: venue.image
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 var(--text-base)/1 var(--font-ui)'
    }
  }, "You're going"), /*#__PURE__*/React.createElement(AvatarStack, {
    members: members,
    max: 4,
    size: 26,
    ring: "var(--bg-surface)"
  })), /*#__PURE__*/React.createElement(DetailRow, {
    icon: "bell",
    label: "Add to calendar",
    value: "We'll send you a reminder",
    action: "plus"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--screen-gutter) 14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: "user-plus",
    iconPosition: "left",
    onClick: onOpenGroup
  }, "Invite to Plan")), /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: onTab,
    onCreate: onCreate
  }));
}
Object.assign(window, {
  PlanDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/PlanDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Profile.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function Profile({
  tab,
  onTab,
  onCreate,
  onOpenGroup
}) {
  const {
    Icon,
    Avatar,
    StatBlock,
    ListRow,
    TabBar
  } = DS();
  const {
    members
  } = window.GrwpData;
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(Screen, {
    style: {
      padding: '0 var(--screen-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 21
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: members[1].src,
    name: "Lewis",
    size: 76,
    ring: "var(--bg-page)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-title)',
      marginTop: 12
    }
  }, "Lewis"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "@lewis")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    stats: [{
      value: 28,
      label: 'Plans'
    }, {
      value: 156,
      label: 'Saved'
    }, {
      value: 32,
      label: 'Friends'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--sage-500)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grwp-display",
    style: {
      font: '700 var(--text-base)/1.45 var(--font-display)',
      color: 'var(--ink-800)'
    }
  }, "London Born.", /*#__PURE__*/React.createElement("br", null), "Made For Making Plans."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['var(--dot-teal)', 'var(--coral-500)', 'var(--sage-700)'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 12,
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: c
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "users",
    label: "Your Groups",
    onClick: onOpenGroup
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "calendar",
    label: "Your Plans"
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "heart",
    label: "Saved Places",
    meta: "156"
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "settings",
    label: "Settings"
  }))), /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: onTab,
    onCreate: onCreate
  }));
}
Object.assign(window, {
  Profile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/VenueDetail.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
function VenueDetail({
  venue,
  onBack,
  onInvite
}) {
  const {
    Icon,
    IconButton,
    Badge,
    Button
  } = DS();
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: venue.image,
    alt: venue.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-top)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 52,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    tone: "glass",
    size: 40,
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share",
    tone: "glass",
    size: 40
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    tone: "glass",
    size: 40,
    active: saved,
    onClick: () => setSaved(!saved)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Featured"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)'
    }
  }, venue.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 8,
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), venue.area), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12,
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 15,
    color: "var(--coral-500)"
  }), venue.rating), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, venue.price), /*#__PURE__*/React.createElement("span", null, venue.cuisine)), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-card-title)',
      marginTop: 24
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      marginTop: 8,
      textWrap: 'pretty'
    }
  }, venue.about), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'transparent',
      padding: '10px 0 0',
      font: 'var(--type-label)',
      color: 'var(--text-accent)',
      cursor: 'pointer'
    }
  }, "View more"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "Website"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "Directions"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "Call")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--screen-gutter) 26px',
      background: 'var(--bg-page)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: "user-plus",
    iconPosition: "left",
    onClick: onInvite
  }, "Invite to Plan")));
}
Object.assign(window, {
  VenueDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/VenueDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Winner.jsx
try { (() => {
/* Grwp app UI kit — components come from the compiled design-system bundle. */
const DS = () => window.GrwpDesignSystem_c2fcf1;
const GRWP_CONFETTI = [[26, 90, -18, 'var(--dot-coral)'], [70, 140, 24, 'var(--sage-500)'], [42, 250, 8, 'var(--sand-500)'], [92, 330, -30, 'var(--coral-500)'], [300, 110, 18, 'var(--dot-teal)'], [326, 200, -12, 'var(--sage-300)'], [284, 292, 34, 'var(--coral-300)'], [340, 372, -22, 'var(--sand-500)'], [140, 66, 12, 'var(--sage-500)'], [232, 78, -26, 'var(--coral-500)'], [60, 420, 16, 'var(--dot-teal)'], [312, 452, -8, 'var(--coral-300)']];
function Winner({
  venue = {
    name: 'Camberwell Arms',
    area: 'Camberwell'
  },
  onClose,
  onViewPlan
}) {
  const {
    Icon,
    Button,
    AvatarStack,
    SuccessSeal
  } = DS();
  const {
    members
  } = window.GrwpData;
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, GRWP_CONFETTI.map(([x, y, r, c], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: 7,
      height: 16,
      borderRadius: 3,
      background: c,
      transform: 'rotate(' + r + 'deg)',
      opacity: 0.9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px var(--screen-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      padding: '0 30px'
    }
  }, /*#__PURE__*/React.createElement(SuccessSeal, {
    size: 136
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)',
      textAlign: 'center'
    }
  }, "We have", /*#__PURE__*/React.createElement("br", null), "a winner!"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-lg)/1.3 var(--font-ui)'
    }
  }, venue.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 3
    }
  }, venue.area)), /*#__PURE__*/React.createElement(AvatarStack, {
    members: members,
    max: 5,
    size: 32,
    ring: "var(--bg-page)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 26px 34px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onViewPlan
  }, "View Plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "share",
    iconPosition: "left"
  }, "Share Plan"))));
}
Object.assign(window, {
  Winner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Winner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
/* Sample content for the Grwp app UI kit. Loaded as a plain script. */
(function () {
  const IMG = n => '../../assets/imagery/' + n;
  const members = [1, 2, 3, 4, 5, 6].map(i => ({
    src: IMG('member-' + i + '.png'),
    name: ['Jess', 'Alex', 'Sam', 'Priya', 'Tom', 'Nina'][i - 1]
  }));
  const venues = [{
    id: 'brat',
    name: 'Brat',
    area: 'Shoreditch',
    image: IMG('venue-hero-brat.png'),
    tile: IMG('venue-tile-1.png'),
    rating: '4.7 (1.2k)',
    cuisine: 'Modern European',
    price: '££',
    about: "A neighbourhood restaurant by day, an intimate dining room by night. Whole turbot over the fire, and a wine list worth staying for."
  }, {
    id: 'padella',
    name: 'Padella',
    area: 'Borough Market',
    image: IMG('venue-tile-2.png'),
    tile: IMG('venue-tile-2.png'),
    rating: '4.6 (3.1k)',
    cuisine: 'Italian',
    price: '££',
    about: 'Hand-rolled pasta at the counter, queues out the door, and a bowl of pici cacio e pepe that explains why.'
  }, {
    id: 'rooftop',
    name: 'Rooftop drinks',
    area: 'Hackney',
    image: IMG('venue-tile-3.png'),
    tile: IMG('venue-tile-3.png'),
    rating: '4.5 (890)',
    cuisine: 'Cocktail bar',
    price: '£££',
    about: 'Six floors up with the skyline for company. Get there before sunset.'
  }];
  window.GrwpData = {
    IMG,
    members,
    venues,
    skyline: IMG('london-skyline.png'),
    trending: [{
      name: 'The Breakfast Club',
      area: 'Spitalfields',
      image: IMG('venue-thumb-1.png'),
      members: members.slice(0, 4)
    }, {
      name: 'Sky Garden',
      area: 'City of London',
      image: IMG('venue-thumb-2.png'),
      members: members.slice(1, 4)
    }, {
      name: 'Lazybones',
      area: 'Mare Street',
      image: IMG('venue-thumb-5.png'),
      members: members.slice(2, 6)
    }],
    candidates: [{
      name: 'Camberwell Arms',
      area: 'Camberwell',
      image: IMG('venue-thumb-3.png'),
      members: members.slice(0, 4)
    }, {
      name: 'Dalloway Terrace',
      area: 'Bloomsbury',
      image: IMG('venue-thumb-4.png'),
      members: members.slice(1, 4)
    }, {
      name: 'The Shard',
      area: 'London Bridge',
      image: IMG('venue-thumb-5.png'),
      members: members.slice(2, 5)
    }],
    categories: [{
      icon: 'utensils',
      label: 'Dinner',
      tone: 'coral'
    }, {
      icon: 'wine',
      label: 'Drinks',
      tone: 'sage'
    }, {
      icon: 'coffee',
      label: 'Coffee',
      tone: 'sand'
    }, {
      icon: 'ticket',
      label: 'Activities',
      tone: 'cream'
    }, {
      icon: 'more-horizontal',
      label: 'More',
      tone: 'cream'
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/web/Landing.jsx
try { (() => {
/* Grwp landing page — a direct recreation of the brand panel that opens both source mockups:
   wordmark, two-tone display headline, sage double sub-line, three feature marks. Nothing else
   appears in the source, so nothing else is here. */
const DS = () => window.GrwpDesignSystem_c2fcf1;

/* Lucide glyph, inlined so it inherits currentColor (same approach as the design system's Icon). */
function Glyph({
  name,
  size = 32
}) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    fetch('assets/icons/' + name + '.svg').then(r => r.text()).then(t => setSvg(t.replace(/<!--[\s\S]*?-->/g, '').replace(/\s(width|height)="[^"]*"/g, '').replace('<svg', '<svg width="100%" height="100%"'))).catch(() => {});
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: 'var(--ink-800)'
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
function FeatureMark({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      width: 140
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: icon,
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 var(--text-base)/1 var(--font-ui)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, label));
}
function Landing() {
  const {
    Logo
  } = DS();
  return /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '72px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 54
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 84px/1.04 var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      letterSpacing: 'var(--tracking-display)',
      wordSpacing: 'var(--word-spacing-display)',
      marginTop: 40
    }
  }, "Good", /*#__PURE__*/React.createElement("br", null), "company.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, "Great plans.")), /*#__PURE__*/React.createElement("p", {
    className: "grwp-display",
    style: {
      font: '700 24px/1.42 var(--font-display)',
      color: 'var(--sage-700)',
      marginTop: 34
    }
  }, "London Born.", /*#__PURE__*/React.createElement("br", null), "Made For Making Plans."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 56,
      marginLeft: -14
    }
  }, /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "users",
    label: "Bring Everyone"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "map-pin",
    label: "Find Somewhere"
  }), /*#__PURE__*/React.createElement(FeatureMark, {
    icon: "heart",
    label: "Make Memories"
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Landing, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DetailRow = __ds_scope.DetailRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.VenueRow = __ds_scope.VenueRow;

__ds_ns.VenueTile = __ds_scope.VenueTile;

__ds_ns.VoteCard = __ds_scope.VoteCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.SuccessSeal = __ds_scope.SuccessSeal;

})();
