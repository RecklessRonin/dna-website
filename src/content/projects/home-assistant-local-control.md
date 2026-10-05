---
title: A cloud-dependent smart home moved to fast, local control
summary: A family home's Home Assistant system was audited, cleaned up and moved onto local control, so the heating responds reliably and the battery charges itself on the cheap rate.
sector: Residential
kind: domestic
year: 2026
systems: [Home Assistant, Zigbee, HomeKit, Tuya Local]
services: [Audit, Energy, Automations, Dashboards]
draft: false
---

## Results

- **About £2 a day saved** by charging the home battery automatically overnight on an off-peak tariff.
- **Two thirds fewer database writes**, from about 1.2 million a day to about 400,000.
- **Disk use halved**, from 50 GB to about 23 GB on the Home Assistant host.
- **22 seconds** from a heating request to the radiator valve responding, now fully local.

## The starting point

The house had grown a Home Assistant setup over several years: solar, a home battery, an EV, smart radiator valves, underfloor heating and dozens of Wi-Fi and Zigbee devices. It mostly worked, until it didn't.

**What the household noticed:**

- The heating stopped responding most days by mid-morning.
- Bills rose as the days shortened, because the battery was only charged cheaply when someone remembered to do it by hand.
- "Everyone's out" and "welcome home" automations fired unreliably.
- The dashboards were cluttered and hard to scan.

**What the audit found:**

- The radiator valves were read through a cloud API with a daily call limit, and the default polling used it all up before lunch.
- Two zones were both called "Home", about 130 m apart, so people at home were often reported in the wrong one.
- A heating group still pointed at a renamed sensor, so it read "unknown".
- Duplicate and dead integrations, very chatty sensors, a solar forecast set up for the wrong roof, and backups stored only on the host itself.

## What we did

**Audit and clean-up.** Removed dead and duplicate integrations, unused add-ons and orphaned automations. Disabled the noisiest sensors and purged their history. Fixed broken references and moved automations from fragile device IDs to entity IDs.

**Energy.** One automation now watches for the off-peak window, puts the battery into grid-charge mode, holds it at 100% until the cheap rate ends, then restores normal settings. Grid power at about 7p beats both peak import (about 29p) and the solar export it displaces (12p), so a full charge every night is the right call. The solar forecast was corrected from the installer's handover pack and came within 5% of actual on day one. The energy dashboard was rebuilt with the right export sensor, live tariff prices and EV charging metered separately.

**Automations.** Eight TV automations merged into one. Added a power-cut alert with battery level and hours remaining, plus away, welcome home, host health, washer, bins and EV reminders. A central notifier with urgent, normal, quiet and digest levels, quiet hours and one-tap dismiss buttons, so nothing nags. Bedside remotes for lamps and a two-hour bedroom heat boost.

**Dashboards.** Rebuilt in tabs: Home, Today, Energy, Climate, Rooms and Tech. A "Heads up" panel appears only when something needs attention, such as a window open or the car charging. Otherwise it reads "All quiet".

**Local control.** The radiator valves were paired over HomeKit, so all eight are read and controlled on the local network, with the cloud kept only as a fallback. The underfloor thermostats and smart plugs moved to local Tuya control: commands now take about 3 seconds, and the thermostats report floor temperature and runtime, which the cloud never exposed. Remaining cloud polling was cut to hourly. Weekly encrypted backups now go to a NAS as well as the host.

**Presence.** Merged the duplicate zones and added a check for a phone that sometimes stops reporting. When its data is stale, "everyone away" asks with a one-tap button rather than guessing.

## Tested, not assumed

Every change was backed up first, then tested against the real hardware. The live heating test after the move to local control:

| Time | What happened |
|---|---|
| 0 s | Living room set to 25 °C |
| 22 s | Valve reports "heating" over the local network |
| 83 s | Boiler on, after a deliberate one-minute settle |
| +120 s | Boiler off after two minutes with no demand |

Presence was tested for real too: both people left, "everyone away" ran ten minutes later, and "welcome home" fired as the first person arrived back.

## What keeps working if a vendor's cloud disappears

| Devices | Now controlled via | If the vendor cloud shut down |
|---|---|---|
| Radiator valves and boiler logic | HomeKit (local) | Keeps working |
| Underfloor thermostats, smart plugs | Local Tuya | Keeps working, unless a device is reset |
| Zigbee buttons and sensors | Zigbee coordinator | Keeps working |
| Home battery control | Third-party cloud API | Partial: the battery still runs, tariff charging stops |
| Washer, EV charger, tariff data | Vendor clouds | Stops: no local option |

That's what "your system, your keys" means at home: as much as possible runs on hardware in the house, and the owner has every login.

## Lessons worth knowing

- **Check API limits against polling.** One cloud refresh cost 24 calls here. Default polling can use a daily allowance in hours, and the failure looks like "the heating is broken".
- **Zone names aren't cosmetic.** A second zone called "Home" quietly breaks every automation that checks whether someone is in.
- **Renames ripple.** Search for references after renaming anything.
- **Valves need a real gap.** Half a degree above room temperature won't open a radiator valve. About 1.5 °C will, within seconds.
- **Ask, don't guess.** When a sensor's data is stale, ask a person with a one-tap button.
- **Back up before every edit.**

<small>Platform: Home Assistant OS on a Raspberry Pi 5 with NVMe storage. Figures are from the live system at the time of the work. Savings depend on tariff, usage and season.</small>
