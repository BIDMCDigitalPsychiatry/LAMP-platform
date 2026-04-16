# Source Verification Reference

This document catalogs all information sources used to write and verify the mindLAMP documentation, rates their reliability, and maps specific claims to their verified sources. It serves as an audit trail for future content reviews.

---

## Information Sources & Reliability

### Tier 1: Definitive (Ground Truth)

These sources are the actual implementation. If docs contradict these, the docs are wrong.

| Source | Location | What It Tells You | Notes |
|--------|----------|-------------------|-------|
| **LAMP-dashboard** (GitHub) | `archive/github/LAMP-dashboard/` | All UI behavior, component structure, scheduling logic, Feed rendering, Portal visualizations | React/TypeScript. `src/components/` has all UI. This is what users actually see. |
| **LAMP-activities** (GitHub) | `archive/github/LAMP-activities/` | Cognitive game implementations, data schemas, game mechanics | Each game is a standalone component. Data output schemas are in the component files. |
| **LAMP-core-ios** (GitHub) | `archive/github/LAMP-core-ios/` | iOS sensor implementations, sampling rates, data formats, push notification handling | Swift. `Sources/` directory. Sensor classes show actual configured rates. |
| **LAMP-core-android** (GitHub) | `archive/github/LAMP-core-android/` | Android sensor implementations, Health Connect integration, sampling | Kotlin/Java. `app/src/` directory. |
| **LAMP-cortex** (GitHub) | `archive/github/LAMP-cortex/` | Feature processing pipeline, module counts, Python API, package metadata | Python. `cortex/raw/`, `cortex/primary/`, `cortex/secondary/` for feature modules. `setup.py` for package name and requirements. |
| **LAMP-server** (GitHub) | `archive/github/LAMP-server/` | API behavior, data storage, authentication, scheduling engine | Node.js. Less frequently needed for docs verification. |
| **LAMP-protocol** (submodule) | `LAMP-platform/LAMP-protocol/openapi.yml` | API endpoints, request/response schemas, object model | OpenAPI 3.0 spec. Renders to `/api` on the site. |
| **LAMP-swift** (GitHub, not local) | Referenced via commit history | iOS sensor defaults (e.g., `LocationsSensor.swift` `minimumInterval`) | Not cloned locally but specific files were examined for GPS rate verification. |
| **User (Eden)** | Direct conversation | Current production behavior, feature availability, removed features, UI workflow | Highest authority for "what's actually live" vs "what's in code but not shipped." Overrides source code for production state. |

### Tier 2: High Confidence (Peer-Reviewed / Official)

Reliable for claims about methodology, clinical context, and validated findings. May not reflect current software state if the platform has changed since publication.

| Source | Citation / Location | What It Tells You | Reliability Notes |
|--------|-------------------|-------------------|-------------------|
| **Cortex paper** (Torous et al.) | Referenced in sensor docs | Sensor inventory (19 types), SensorSpec names, sampling type taxonomy (continuous/on-change/periodic), feature pipeline architecture | Peer-reviewed. Matched 1:1 against source code for sensor names and types. Authoritative for the Cortex processing model. |
| **Calvert 2026** | Referenced in `sensors-data/01-usage.md` | Data quality methodology: binning approach (10-min bins), quality score thresholds (>80% good, 50-80% moderate, <50% poor), impact on derived features, GPS configured rate (1 Hz) | Peer-reviewed. Confirmed GPS 1 Hz rate, resolved conflict with Cortex's 0.1 Hz `target_hz`. Quality methodology adopted directly into docs. |
| **Rodriguez-Villa et al. (2020)** | Referenced in capability pages | Digital Clinic workflow, clinical use of mindLAMP reports | Peer-reviewed. Used for "What One Team Built" examples. |
| **Rauseo-Ricupero & Torous (2021)** | Referenced in capability pages | Digital Clinic weekly report methodology | Peer-reviewed. Confirms report structure described in Monitor capability page. |
| **AMP SCZ consortium publications** | Referenced in capability pages | Multi-site deployment, 40+ sites, standardized protocol | Used for Configure capability page examples. Scale claims should be re-verified periodically. |

### Tier 3: Moderate Confidence (Internal / Informal)

Useful for context and initial claims, but should be cross-verified against Tier 1 or 2 sources before documenting.

| Source | Location | What It Tells You | Reliability Notes |
|--------|----------|-------------------|-------------------|
| **Old documentation site** (pre-rebuild) | Deleted. Was in `docs/04-guides/`, `docs/05-developer/`, `docs/06-support/` | Historical feature descriptions, user guides, FAQ | **DELETED in 2026-03-06 cleanup.** Was the starting point for the rebuild but contained many inaccuracies (wrong GPS rates, phantom features, outdated workflows). Do NOT treat old docs as authoritative. |
| **Notion workspace** | `LAMP-notion/` and Notion databases | Project metadata, publication records, tags, team info | Good for project/publication data. Not a source for technical claims. Sync currently disabled. |
| **README files in GitHub repos** | Various `README.md` files | Setup instructions, high-level architecture descriptions | Often outdated or aspirational. Verify against actual code before using. |
| **GitHub Issues / PRs** | GitHub BIDMCDigitalPsychiatry org | Bug reports, feature discussions, change rationale | Useful for understanding *why* something was built, but issue descriptions may not reflect final implementation. |

### Tier 4: Low Confidence (Use With Caution)

| Source | What It Tells You | Reliability Notes |
|--------|-------------------|-------------------|
| **AI-generated content** (from previous doc iterations) | Various claims in old docs | Some old documentation was written or expanded by AI without source verification. Several inaccuracies were found and corrected (e.g., "overdue indicators in Feed", "time windows hiding activities", "GPS hashing", "0.1 Hz configured rate"). Always verify AI-written claims against Tier 1 sources. |
| **Marketing / grant language** | Feature descriptions on capability pages | May describe aspirational or planned features rather than current production state. Cross-check with User (Tier 1) for production accuracy. |
| **Stack Overflow / forum posts** | General technical context | Useful for understanding iOS background location throttling, APNs behavior, etc. but not specific to mindLAMP. |

---

## Source Repositories (Detail)

All repos are under the `BIDMCDigitalPsychiatry` GitHub organization. Local clones were removed 2026-03-12 to reduce workspace size (~250MB). Re-clone as needed:

```bash
# Clone any repo for source verification
git clone https://github.com/BIDMCDigitalPsychiatry/<REPO_NAME>.git
```

| Repository | Contents | Key Directories | What We Verified Against It |
|-----------|----------|-----------------|----------------------------|
| `LAMP-dashboard` | React web dashboard + participant app | `src/components/` (all UI), `package.json` | Feed behavior, Portal, scheduling, credential UI, messaging, data quality indicators, activity menus |
| `LAMP-activities` | Cognitive game implementations | `src/` (game components: Jewels, BalloonRisk, SpatialSpan, etc.) | Game mechanics, data schemas, activity types |
| `LAMP-cortex` | Python data processing library | `cortex/` (feature modules), `setup.py` | Feature pipeline (32 raw, 6 primary, 23 secondary), package name (`lamp-cortex`), bin sizes, target_hz |
| `LAMP-server` | API server | `src/` | Scheduling engine, push notification delivery |
| `LAMP-core-ios` | iOS native layer (sensors, push) | `Sources/` (sensor implementations) | GPS rate (1 Hz default), sensor data formats, push registration |
| `LAMP-core-android` | Android native layer (sensors, push) | `app/src/` (sensor implementations) | WearOS 3+ (`minSdkVersion 30`), Health Connect integration, sensor implementations |

Also relevant (not cloned locally):
- `LAMP-swift` — iOS sensor implementations. `LocationsSensor.swift` confirmed GPS defaults (`minimumInterval` = 1s).
- `LAMP-protocol` — OpenAPI spec (git submodule in LAMP-platform at `LAMP-protocol/openapi.yml`)

---

## Verified Facts by Section

### The App

#### Feed Tab (`docs/02-app/02-app-tabs/01-feed.mdx`)
| Claim | Status | Source |
|-------|--------|--------|
| No overdue visual indicators in Feed | Verified | `LAMP-dashboard/src/components/Feed.tsx` — binary complete/pending states only |
| Notifications are server-side push (APNs/FCM) | Verified | `LAMP-core-ios/` push registration + `LAMP-server/` scheduling |
| Force-quit does not prevent notification delivery | Verified | APNs/FCM deliver to device OS, not to app process |
| No explicit time window configuration | Verified | `LAMP-dashboard/src/components/` — no time window UI or logic |
| Streak tracking is post-completion modal | Verified | `LAMP-dashboard/src/components/NotificationPage.tsx`, `Streak.tsx` |
| Clickability rules by schedule type | Verified | `LAMP-dashboard/src/components/Feed.tsx` scheduling logic |

#### Account & Messages (`docs/02-app/03-profile-settings.mdx`)
| Claim | Status | Source |
|-------|--------|--------|
| Messages accessed via bell icon in nav bar | Verified | `LAMP-dashboard/src/components/NavigationLayout.tsx` |
| Messages are NOT inline in Feed | Verified | No message rendering in `Feed.tsx` |

### The Dashboard

#### Users Tab (`docs/04-dashboard/tabs/01-users-tab.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Participant creation auto-generates temporary credentials | Verified | User-confirmed behavior; credentials are `{id}@lamp.com` / `{id}` |
| "Email" field is a username (no email format required) | Verified | User-confirmed |

#### Activities Tab (`docs/04-dashboard/tabs/02-activities-tab.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Activity menu has "Create a new...", "Cognitive Tests & Activities", "Import" sections | Verified | `LAMP-dashboard/src/components/` activity creation dialogs |
| Scheduling accessed via calendar icon (not arrow) | Verified | `LAMP-dashboard/src/components/` scheduling UI |

#### Groups Tab (`docs/04-dashboard/tabs/04-groups-tab.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Groups can be created from Groups tab AND Users tab | Verified | User-confirmed with screenshots |
| Duplication inherits activities + sensors, NOT participants | Verified | User-confirmed |

#### Credentials (`docs/04-dashboard/04-credentials.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Credential access via key icon (not profile icon) | Verified | `LAMP-dashboard/src/components/` credential UI |

#### Messaging (`docs/04-dashboard/05-messaging.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Virtual Care Teams feature removed | Verified | User-confirmed; no VCT components in current dashboard |

#### Data Portal (`docs/04-dashboard/tabs/05-data-portal.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Cortex package name is `lamp-cortex` | Verified | `LAMP-cortex/setup.py` |

### Activities

#### Usage (`docs/03-activities/01-usage.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Mid-activity resume (no partial responses saved) | Verified | `LAMP-dashboard/src/components/` activity components |
| Streak popup on completion | Verified | `LAMP-dashboard/src/components/NotificationPage.tsx`, `Streak.tsx` |
| Offline behavior (queues and syncs) | Unverified | Likely in mobile SDK, not visible in dashboard source |

#### Data Schemas (spot-checked)
| Game | Status | Source |
|------|--------|--------|
| Jewels A/B | Verified | `LAMP-activities/src/` Jewels components |
| Balloon Risk | Verified | `LAMP-activities/src/` BalloonRisk component |
| Spatial Span | Verified | `LAMP-activities/src/` SpatialSpan component |

#### Activity Types
| Claim | Status | Source |
|-------|--------|--------|
| `lamp.module`, `lamp.goals`, `lamp.medications`, `lamp.zoom_meeting` are dev artifacts | Confirmed | User-confirmed not in production |
| `lamp.voice_survey` vs `lamp.recording` distinction | **OPEN** | User unsure if `lamp.voice_survey` (Speech Recording) is a production feature |

### Sensors

#### GPS (`docs/05-sensors-data/02-reference/01-gps.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Configured default rate is 1 Hz | Verified | `LAMP-swift/LocationsSensor.swift` — `minimumInterval` returns 1s when no frequency set |
| OS throttles background delivery to ~0.1 Hz | Verified | iOS background location delivery behavior; Cortex `target_hz: 0.1` reflects this |
| No GPS coordinate hashing | Verified | No hashing in sensor implementations |

#### Accelerometer (`docs/05-sensors-data/02-reference/02-accelerometer.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Units are g (gravitational acceleration) | **CORRECTED** | Was "m/s²". Cortex example data shows z ~ -1.0 at rest (not -9.8). iOS `CMAcceleration` reports in g-force. `LAMP-cortex/cortex/raw/accelerometer.py` example confirms. |
| Data fields x, y, z | Verified | `LAMP-core-android/AccelerometerData.kt`, iOS `SensorDataModel.swift` |
| Android wraps in DeviceMotion-style `motion` sub-object | Verified | `LAMP-core-android/AccelerometerData.kt:44-51`, Cortex `feature_types.py:362-363` normalizes |

#### Device State (`docs/05-sensors-data/02-reference/04-device-state.md`)
| Claim | Status | Source |
|-------|--------|--------|
| State code 0 = `screen_on`, 1 = `screen_off` | Verified | `LAMP-core-android/SensorConstants.kt:8-9,14-15` |
| State code 2 = `locked` (not `device_locked`) | **CORRECTED** | Was `device_locked`. Source: `SensorConstants.kt:16`, Cortex `screen_active.py:26` |
| State code 3 = `unlocked` (not `device_unlocked`) | **CORRECTED** | Was `device_unlocked`. Source: `SensorConstants.kt:17`, Cortex `screen_active.py:27` |
| State codes 4/5 (battery_charging/unplugged) do NOT exist | **CORRECTED** | Were fabricated. `SensorConstants.kt` only defines 0-3. No battery state codes in iOS or Cortex. |
| `battery_level` field exists | Verified | iOS `SensorDataModel.swift:223,343`, Android `ScreenStateData.kt:28,67,99,131` |
| Cortex merges `lamp.screen_state` into `lamp.device_state` | Verified | `LAMP-cortex/cortex/feature_types.py:340-357` |

#### Steps (`docs/05-sensors-data/02-reference/05-steps.md`)
| Claim | Status | Source |
|-------|--------|--------|
| SensorSpec `lamp.steps` | Verified | `LAMP-core-android/Sensors.kt`, iOS `LMSensorManager.swift:898` |
| Data fields source, type, unit, value | Verified | iOS `SensorDataModel.swift:382-388` |
| Cortex `step_count` depends on steps + analytics | Verified | `LAMP-cortex/cortex/secondary/step_count.py` |

#### General Sensor Facts
| Claim | Status | Source |
|-------|--------|--------|
| 19 sensor types (9 device + ~10 health platform) | Verified | Cross-referenced against Cortex paper (Torous et al.) |
| All SensorSpec names match source | Verified | Checked against `LAMP-core-ios/` and `LAMP-core-android/` |
| Sampling types (continuous vs on-change vs periodic) | Verified | Sensor implementation patterns in iOS/Android repos |
| Deprecated sensors list = 11 entries | Verified | Counted in `sensors-data/03-data.md` |
| Platform capability matrix (iOS/Android) | Verified | `LMSensorManager.swift:113-122,267-298`, `LAMP-core-android/Sensors.kt` |
| Sensors tab enables/disables only (no rate config) | **CORRECTED** | Was "rate adjustable via Sensors tab". `LAMP-dashboard/SensorDialog.tsx:177-182` only sends name+spec. |
| `visit_time` derives from SensorKit `visits`, NOT GPS | **CORRECTED** | Was listed in GPS Cortex pipeline. `LAMP-cortex/cortex/secondary/visit_time.py:10` — `dependencies=[visits]` |
| HealthKit/Health Connect integration | Verified | iOS `LMSensorManager.swift:624`, Android `GoogleHealthConnect.kt` |
| Apple Watch support | Verified | `LAMP-core-ios/watchkitapp Extension/` directory |
| WearOS support | Verified | `LAMP-core-android/WearOs/` directory |

#### Sensors — Page-by-Page Review (2026-03-06)

| Claim | Status | Source |
|-------|--------|--------|
| Data quality colors (green ≤2d, yellow ≤7d, red ≤30d, gray >30d) | Verified | `LAMP-dashboard/src/components/Researcher/ParticipantList/PassiveBubble.tsx` |
| Cortex `data_quality` GPS bin = 600,000 ms | Verified | `LAMP-cortex/cortex/secondary/data_quality.py:49` |
| Cortex `data_quality` Accel bin = 1,000 ms | Verified | `LAMP-cortex/cortex/secondary/data_quality.py:46` |
| SensorEvent structure (timestamp, sensor, data) | Verified | `LAMP-server/src/model/SensorEvent.ts` |
| 11 deprecated sensors complete and correct | Verified | Cross-referenced Cortex raw modules + `SensorEvent.ts` enums |
| Cortex 3-stage pipeline (32 raw, 6 primary, 23 secondary) | Verified | Directory counts in `LAMP-cortex/cortex/` |
| Telephony Cortex chain: call_number, call_duration, call_degree | Verified | `LAMP-cortex/cortex/secondary/call_*.py` import from `telephony` |
| text_number/text_degree depend on telephony | **CORRECTED** | Actually depend on `messages_usage` (SensorKit). Source: `LAMP-cortex/cortex/secondary/text_number.py:4`, `text_degree.py:5` |
| WearOS 2+ requirement | **CORRECTED** | `LAMP-core-android/WearOs/app/build.gradle` has `minSdkVersion 30` (Android 11 = WearOS 3+) |
| Accelerometer "5 Hz maximum" cap | **CORRECTED** | No cap in source — frequency passed through: `AccelerometerData.kt:33`, `LMSensorManager.swift:605` |
| GPS "capped at 5 Hz in sensor library" | **CORRECTED** | No cap in source — frequency passed through: `LocationData.kt`, `LMSensorManager.swift:666` |
| watchOS 7+ requirement | Verified | `LAMP-core-ios/mindLAMP.xcodeproj/project.pbxproj`: `WATCHOS_DEPLOYMENT_TARGET = 7.0` |
| Platform capability matrix (all sensors) | Verified | `LMSensorManager.swift`, `LAMP-core-android/Sensors.kt` |
| Activity Recognition on both platforms | Verified | iOS `LMSensorManager.swift:680-683`, Android `Sensors.kt:22` |
| Nearby Devices includes BT + WiFi | Verified | Android `WifiData.kt:22,32` |
| GPS reference page fields (lat, lon, alt, accuracy) | Verified | `LAMP-cortex/cortex/raw/gps.py` docstring |
| Sleep value codes (0=in_bed, 1=asleep, 2=awake) | Verified | `LAMP-cortex/cortex/raw/sleep.py:22,25-33` |
| Sleep Cortex chain → healthkit_sleep_duration | Verified | `LAMP-cortex/cortex/secondary/healthkit_sleep_duration.py` |

#### Sensors Remaining to Verify
- [x] Usage page — all claims verified
- [x] Configuration page — corrected WearOS version, removed frequency caps
- [x] Data page — all claims verified (11 deprecated sensors correct)
- [x] Sensor reference spot-check (GPS, accelerometer, device state, telephony, sleep) — corrected telephony Cortex chain
- [ ] Remaining health platform sensor field schemas (heart rate, HRV, respiratory rate, etc.)
- [ ] Wearable-specific details (Samsung Galaxy Watch 4+, Fitbit indirect integration)

### Developer

#### Cortex (`docs/06-developer/03-cortex/`)
| Claim | Status | Source |
|-------|--------|--------|
| 32 raw feature modules | Verified | `LAMP-cortex/cortex/raw/` module count |
| 6 primary features | Verified | `LAMP-cortex/cortex/primary/` |
| 23 secondary features | Verified | `LAMP-cortex/cortex/secondary/` |
| Python 3.8+ required | Verified | `LAMP-cortex/setup.py` |
| Package name `lamp-cortex` on PyPI | Verified | `LAMP-cortex/setup.py` |
| Voice recordings are MP3 format | Verified | Recording component output format |

#### App Gateway (`docs/06-developer/01-architecture/04-app-gateway.md`)
| Claim | Status | Source |
|-------|--------|--------|
| Push notification flow (server → App Gateway → APNs/FCM) | Verified | Architecture matches documented flow |

---

## Conflict Resolutions

### GPS Rate Conflict
- **Conflict:** Different sources claimed 1 Hz vs 0.1 Hz as the GPS rate
- **Resolution:** 1 Hz is the *configured* default (from `LocationsSensor.swift` `minimumInterval`). 0.1 Hz is the *delivered* rate after iOS background throttling. Cortex's `target_hz: 0.1` and 10-minute bins reflect delivered rate. Calvert 2026 confirms 1 Hz as configured rate.
- **Docs updated:** All sensor docs now correctly distinguish configured vs delivered rates.

### Accelerometer Units
- **Conflict:** Docs said "m/s²" but Cortex raw example data shows z ~ -1.0 at rest (would be ~-9.8 in m/s²).
- **Resolution:** iOS CoreMotion `CMAcceleration` reports in g-force units (multiples of gravitational acceleration). 1 g ≈ 9.81 m/s². Docs corrected to "g" across accelerometer page and Cortex raw features index.

### Device State Codes
- **Conflict:** Docs listed 6 state codes (0-5) with `device_locked`, `device_unlocked`, `battery_charging`, `battery_unplugged`.
- **Resolution:** Android `SensorConstants.kt` only defines codes 0-3. Representations are `screen_on`, `screen_off`, `locked`, `unlocked` (not `device_locked`/`device_unlocked`). Cortex `screen_active.py` confirms same mapping. Battery state codes 4/5 were fabricated — they don't exist in any source. Battery level is reported via the `battery_level` field on every event, not via separate state codes.

### visit_time Cortex Dependency
- **Conflict:** GPS reference page listed `visit_time` as a GPS-derived secondary feature.
- **Resolution:** `visit_time` depends on `visits` raw feature (`com.apple.sensorkit.visits`), an Apple SensorKit data source — not on GPS. Removed from GPS Cortex pipeline. The Cortex features docs and sensor reference index already correctly attributed it to SensorKit.

### Sensor Rate Configuration
- **Conflict:** Multiple pages claimed sampling rates adjustable "via the Sensors tab or API."
- **Resolution:** `LAMP-dashboard/SensorDialog.tsx` only sends `name` and `spec` — no frequency/rate fields. Rate configuration is API-only. Docs corrected across configuration, usage, GPS, and accelerometer pages.

### Sensor Frequency Caps
- **Conflict:** Docs claimed accelerometer "configurable up to 5 Hz maximum" and GPS "capped at 5 Hz in the sensor library."
- **Resolution:** No frequency cap found in source code. Both iOS (`LMSensorManager.swift`) and Android (`AccelerometerData.kt`, `LocationData.kt`) pass the frequency value directly to the sensor API with no clamping logic. Removed cap claims from `02-configuration.md` and `02-accelerometer.md`.

### WearOS Version Requirement
- **Conflict:** Docs and capability pages said "WearOS 2+."
- **Resolution:** `LAMP-core-android/WearOs/app/build.gradle` has `minSdkVersion 30` (Android 11), which corresponds to WearOS 3.0+. Corrected to "WearOS 3+" in `02-configuration.md` and `collect.tsx`.

### Cortex Visualization Images
- **Issue:** 16 images referenced by `docs/06-developer/03-cortex/04-visualizations.md` at `/img/cortex-visualizations/*.png` were missing — deleted in prior site-wide cleanup.
- **Resolution:** Images found on the `docs-v2` branch at `archive_legacy/docs/09-data_science/06-cortex/06-visualizations/assets/`. Downloaded 16 PNGs to `static/img/cortex-visualizations/`. Build now succeeds.

### Data Flow Image Filename
- **Issue:** `docs/06-developer/01-architecture/02-data-flow.md` line 48 referenced `Untitled 75.png` (with space). Actual file is `Untitled_75.png` (with underscore).
- **Resolution:** Fixed reference to `Untitled_75.png`.

### App Gateway Broken Links
- **Issue:** Two links using old URL format (`docs.lamp.digital/develop/app_gateway`, `docs.lamp.digital/deploy/deploying`).
- **Resolution:** First link changed to `#api-usage` anchor (same page). Second changed to plain text (deployment pages are `draft: true` so can't link).

### OAuth Google Config Link
- **Issue:** Link to `docs.lamp.digital/deploy/configure_oauth_google` — page doesn't exist.
- **Resolution:** Replaced with link to Google Identity documentation.

### Telephony Cortex Features
- **Conflict:** Telephony sensor reference page listed `text_number` and `text_degree` as derived from `telephony` raw feature.
- **Resolution:** `text_number` imports from `messages_usage` (SensorKit), not `telephony`. Same for `text_degree`. The Cortex secondary features docs already correctly attributed these. Fixed in `07-telephony.md`.

### Digital Clinic Timeline
- **Conflict:** Various claims of "since 2016", "since 2017", "since 2018"
- **Resolution:** Digital Clinic has been using mindLAMP since 2018 (earliest published reference).

---

## Open Questions

1. **`lamp.voice_survey` vs `lamp.recording`** — Are both production features? User is unsure. `lamp.recording` is documented as Voice Recording. `lamp.voice_survey` appears in source as Speech Recording but may be dev-only.

2. **Offline activity queuing** — Documented that activities queue offline and sync when connectivity returns. This couldn't be verified from dashboard source (likely implemented in mobile SDK layer). Kept as-is but flagged.

3. ~~**Deprecated sensors count**~~ — Verified (2026-03-06). All 11 entries confirmed against Cortex raw modules and `SensorEvent.ts` server enums.

---

## How to Use This Document

When reviewing or updating documentation:
1. **Check here first** to see if a claim has already been verified
2. **Follow the tier system** when evaluating new information:
   - Tier 1 (source code, user confirmation) overrides everything else
   - Tier 2 (papers) is reliable for methodology but may not reflect current software
   - Tier 3 (old docs, READMEs) needs cross-verification before trusting
   - Tier 4 (AI-generated, marketing) should always be verified against Tier 1
3. **Use the source repo paths** to locate relevant code for verification
4. **Add new verifications** to the appropriate table after checking claims
5. **Document conflicts** and their resolutions in the Conflict Resolutions section
6. **Flag open questions** rather than guessing — add to the Open Questions section
