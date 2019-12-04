// Region Colors
export default {
  CTA_PRIMARY: `
    background-color: var(--bg-cta-primary);
    color: var(--text-cta-primary);
    &:hover, &:active{
      background-color: var(--bg-cta-primary-active);
    }
  `,
  CTA_SECONDARY: `
    background-color: var(--bg-cta-secondary);
    color: var(--text-cta-secondary);
    &:hover, &:active{
      background-color: var(--bg-cta-secondary-active);
    }
  `,
  CTA_TERTIARY: `
    background-color: var(--bg-cta-tertiary);
    color: var(--text-cta-tertiary);
    &:hover, &:active{
      background-color: var(--bg-cta-tertiary-active);
      color: var(--text-inverse);
    }
  `,
  CTA_DISABLED: `
    &[disabled]{
      background-color: var(--brand-disabled);
      color: var(--text-cta-disabled);
    }
  `,
  CTA_TAB: `
    background-color: var(--bg-cta-tertiary);
    color: var(--text-cta-tertiary);
  `,
  TOGGLE_SWITCH: `
    background-color: var(--bg-cta-secondary);
  `,
  LINK_PRIMARY: `
    color: var(--text-link);
  `,
  TEXT_DEFAULT: `
    color: var(--text-primary);
  `,
  TEXT_INVERSE: `
    color: var(--text-inverse);
  `,
  TEXT_SECONDARY: `
    color: var(--text-secondary);
  `,
  TEXT_LIGHT: `
    color: var(--text-light);
  `,
  TEXT_ERROR: `
    color: var(--error);
  `,
  FIELD_DEFAULT: `
    color: var(--text-cta-tertiary);
    background-color: var(--bg-cta-tertiary);
  `,
  FIELD_DISABLED: `
    background-color: var(--brand-disabled);
    color: 1px solid var(--text-cta-disabled);
  `,
};
