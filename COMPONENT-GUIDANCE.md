# GrapsFinder Design System v1.0

## Overview

The GrapsFinder Design System provides a consistent framework for designing and developing the GrapsFinder platform.

This system is built around four principles:

* Information First
* Mobile First
* Independent Wrestling Authenticity
* Consistency at Scale

---

# Foundations

## Color System

### Background

| Token                | Value     |
| -------------------- | --------- |
| Background Primary   | `#0A0A0A` |
| Background Secondary | `#121212` |
| Card Surface         | `#181818` |
| Elevated Surface     | `#222222` |
| Border               | `#2A2A2A` |

### Text

| Token          | Value     |
| -------------- | --------- |
| Text Primary   | `#F5F5F5` |
| Text Secondary | `#D1D5DB` |
| Text Tertiary  | `#9CA3AF` |
| Disabled       | `#6B7280` |

### Brand

| Token        | Value     |
| ------------ | --------- |
| Radar Green  | `#B6FF00` |
| Signal Green | `#91D900` |
| White        | `#F5F5F5` |

### Status Colors

| Status       | Color     |
| ------------ | --------- |
| Live         | `#B6FF00` |
| Featured     | `#C084FC` |
| Championship | `#FBBF24` |
| Upcoming     | `#3B82F6` |
| Sold Out     | `#EF4444` |
| Cancelled    | `#6B7280` |

---

## Typography

### Heading Font

**Bebas Neue**

Used for:

* Hero Headlines
* Event Names
* Section Headers

### Body Font

**Inter**

Available weights:

* 400
* 500
* 600
* 700

### Type Scale

| Style          | Size |
| -------------- | ---- |
| Hero           | 48px |
| Page Title     | 36px |
| Section Header | 24px |
| Card Title     | 22px |
| Body           | 16px |
| Caption        | 14px |
| Micro          | 12px |

---

## Spacing

Base unit: `4px`

### Scale

```text
4
8
12
16
24
32
48
64
80
96
```

---

## Border Radius

| Token  | Value |
| ------ | ----- |
| Small  | 8px   |
| Medium | 12px  |
| Large  | 16px  |
| Hero   | 20px  |
| Pill   | 999px |

---

## Elevation

### Card

```css
box-shadow: 0 8px 24px rgba(0,0,0,.35);
```

### Hover

```css
box-shadow: 0 12px 36px rgba(0,0,0,.45);
```

### Modal

```css
box-shadow: 0 24px 64px rgba(0,0,0,.55);
```

---

# Components

## Buttons

### Primary Button

Used for primary actions.

Properties:

* Background: Radar Green
* Text: Black
* Height: 48px
* Radius: 12px

Example:

```text
[ View Event ]
```

---

### Secondary Button

Used for secondary actions.

Properties:

* Transparent background
* Border
* White text

Example:

```text
[ Save Event ]
```

---

### Ghost Button

Used for navigation and inline actions.

Example:

```text
View All →
```

---

# Search

## Search Input

Used throughout the application.

Example:

```text
┌────────────────────────┐
 Search events...
└────────────────────────┘
```

Properties:

* Height: 52px
* Radius: 16px
* Search icon
* Clear action

---

# Filter Chips

Used for event filtering.

Examples:

```text
[ This Week ]
[ This Month ]
[ Near Me ]
[ Featured ]
```

States:

* Default
* Active
* Disabled

---

# Badges

## Live

```text
LIVE
```

Color: Radar Green

---

## Featured

```text
FEATURED
```

Color: Purple

---

## Championship

```text
CHAMPIONSHIP
```

Color: Gold

---

## Sold Out

```text
SOLD OUT
```

Color: Red

---

# Event Components

## Compact Event Card

Used in dense lists.

```text
Summer Madness

ECWA

Jun 20 • Newark, DE
```

---

## Standard Event Card

Primary event listing component.

```text
[Poster]

Summer Madness

ECWA

Date
Venue
Location

View Event →
```

---

## Featured Event Card

Hero component for featured events.

```text
[Large Poster]

FEATURED

Summer Madness

View Event →
```

Guidelines:

* Maximum two per page
* Reserved for promoted events
* Must still prioritize event information

---

## Horizontal Event Card

Used in carousels and related content.

```text
[Poster]

Summer Madness
Jun 20

→
```

---

## Event Timeline Item

Used in calendar views.

```text
7:30 PM

Summer Madness
```

---

# Promotion Components

## Promotion Tile

Used in discovery sections.

```text
ECWA

12 Upcoming Events
```

---

## Promotion Card

Used in promotion listings.

```text
[Logo]

ECWA

Independent Wrestling

View Promotion →
```

---

## Promotion Header

Used on promotion profile pages.

```text
[Logo]

ECWA

Upcoming Events
Followers
```

---

# Discovery Components

## Near Me Module

```text
Events Within 25 Miles
```

Purpose:

Surface geographically relevant events.

---

## This Weekend Module

```text
Shows This Weekend
```

Purpose:

Promote short-term discovery.

---

## Trending Promotions Module

```text
Trending Promotions
```

Purpose:

Highlight popular promotions.

---

## Recently Added Module

```text
Recently Added Shows
```

Purpose:

Promote fresh content.

---

# Navigation

## Mobile Bottom Navigation

```text
Discover
Calendar
Map
Saved
Profile
```

Guidelines:

* Always visible
* Max five items
* Labels required

---

## Header

```text
[Logo]

Search

Notifications
```

---

# Page Templates

## Discover Page

Structure:

```text
Hero

Search

Filters

Featured Event

Upcoming Events

Recently Added

Trending Promotions
```

---

## Event Details Page

Structure:

```text
Poster

Event Information

Venue

Map

Tickets

Promotion

Related Events
```

---

## Promotion Profile

Structure:

```text
Promotion Header

Upcoming Events

Past Events

Social Links
```

---

## Calendar Page

Views:

* Month
* Week
* Agenda

---

## Map Page

Structure:

```text
Map

List Drawer

Filters
```

---

# Event Media Philosophy

## Posters Are Optional

Event posters should enhance listings, not define them.

The platform must work when:

* Posters exist
* Logos exist
* Neither exists

---

## Event Priority Hierarchy

1. Event Name
2. Promotion
3. Date & Time
4. Venue
5. City & State
6. Status
7. Artwork

---

## Card Variants

### Variant A

Poster Card

Uses:

* Event Poster
* Event Information

---

### Variant B

Logo Card

Uses:

* Promotion Logo
* Event Information

---

### Variant C

Text Only Card

Uses:

* Event Information Only

No imagery required.

---

## Accessibility Requirement

Critical event information must always exist as live text.

Never rely on artwork to communicate:

* Event Name
* Promotion
* Date
* Time
* Venue
* Location

---

# Empty States

## No Events

```text
No events found.

Try expanding your search radius.
```

---

## No Saved Events

```text
You haven't saved any events yet.
```

---

## No Search Results

```text
No events match your search.
```

---

# Motion

## Card Hover

```css
transform: scale(1.02);
```

---

## Button Hover

Duration:

```text
150ms
```

---

## Page Transition

Duration:

```text
200ms
```

Effect:

```text
Fade
```

---

## Filter Selection

Duration:

```text
100ms
```

Effect:

```text
Background Color Transition
```

---

# Data Hierarchy

```text
Promotion
└── Event
    ├── Venue
    ├── Matches
    ├── Tickets
    └── Media
```

Future Expansion:

```text
Promotion
├── Event
├── Wrestler
├── Venue
├── Championship
└── Media
```

---

# Future Components

* Ticket Integrations
* Event Reminders
* Fan Attendance Tracking
* Reviews
* Promotion Verification
* Venue Pages
* Wrestler Profiles
* Championship Tracking
* Travel Planning
* Multi-Day Event Support

---

# Design North Star

Before implementing any feature, ask:

> Does this help a fan discover a wrestling event faster?

If the answer is yes, continue.

If the answer is no, simplify.
