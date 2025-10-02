export const ALL_TOOL_TAGS = [
  "about",
  "accounts",
  "attachments",
  "autocomplete",
  "available_budgets",
  "bills",
  "budgets",
  "categories",
  "charts",
  "configuration",
  "currencies",
  "currency_exchange_rates",
  "data",
  "insight",
  "links",
  "object_groups",
  "piggy_banks",
  "preferences",
  "recurrences",
  "rule_groups",
  "rules",
  "search",
  "summary",
  "tags",
  "transactions",
  "user_groups",
  "users",
  "webhooks",
];

export const DEFAULT_PRESET_TAGS = [
  "accounts",
  "bills",
  "categories",
  "tags",
  "transactions",
  "search",
  "summary",
];

export const TOOL_PRESETS: Record<string, string[]> = {
  default: DEFAULT_PRESET_TAGS,
  full: ALL_TOOL_TAGS,
  basic: [
    "accounts",
    "transactions",
    "categories",
    "tags",
    "search",
    "summary",
  ],
  budget: [
    "accounts",
    "budgets",
    "available_budgets",
    "categories",
    "transactions",
    "summary",
    "insight",
  ],
  reporting: [
    "accounts",
    "transactions",
    "categories",
    "charts",
    "insight",
    "summary",
    "search",
  ],
  admin: [
    "about",
    "configuration",
    "currencies",
    "users",
    "user_groups",
    "preferences",
  ],
  automation: [
    "rules",
    "rule_groups",
    "recurrences",
    "webhooks",
    "transactions",
  ],
};

export function getPresetTags(preset: string): string[] {
  return TOOL_PRESETS[preset.toLowerCase()] || DEFAULT_PRESET_TAGS;
}

export function presetExists(preset: string): boolean {
  return preset.toLowerCase() in TOOL_PRESETS;
}

export function getAvailablePresets(): string[] {
  return Object.keys(TOOL_PRESETS);
}
