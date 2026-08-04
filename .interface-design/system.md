# Design System — Admin

## Direction
- **Personality:** Precision & Density
- **Foundation:** Gray (neutral)
- **Depth:** Borders-only
- **Accent:** brand-primary

## Tokens

### Spacing
Base: 4px  
Scale: 4, 8, 12, 16, 24

### Colors
- `--foreground`: gray-900
- `--secondary`: gray-600
- `--muted`: gray-500
- `--faint`: gray-200 (light) / gray-800 (dark)
- `--border`: gray-200 (light) / gray-800 (dark)
- `--accent`: brand-primary

### Radius
- 4px for small controls
- 6px for cards and panels
- 8px for large surfaces

### Typography
- Font: system-ui / sans-serif
- Scale: xs (12px), sm (14px), base (16px), lg (18px), xl (20px)
- Data: `tabular-nums` for numbers
- Weights: 400, 500, 600

## Patterns

### Button Compact
- Height: 32px
- Padding: 8px 12px
- Radius: 4px
- Font: text-sm, font-medium
- Border: 1px solid for ghost

### Card
- Border: 1px solid (faint)
- Padding: 12px
- Radius: 6px
- No shadow

### Table
- Cell padding: 8px 12px
- Font: text-sm, tabular-nums for dates/ids
- Border-bottom: 1px solid (faint)
- Hover: subtle background shift

### Input
- Height: 36px
- Padding: 8px 12px
- Radius: 4px
- Border: 1px solid (faint)
- Focus: ring-1 ring-accent
