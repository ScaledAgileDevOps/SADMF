---
title: "Feature Completion Ratio"
linkTitle: "Feature Completion Ratio"
type: docs
description: "The percentage of features delivered versus what was committed to 8 quarters ago -- because real planning has a two-year horizon!"
weight: 7
---

Feature Completion Ratio is the metric that measures the organization's ability to deliver on its commitments. It is calculated as the percentage of features delivered in the current [Convoy](/release-convoy/) compared to what was committed to 8 quarters ago, when the features were originally planned, estimated, and approved by the [Admiral's Transformation Office](/roles/admirals-transformation-office/). This two-year planning horizon ensures that commitments are made with sufficient deliberation, that stakeholders have ample time to build business cases around promised features, and that any failure to deliver is unmistakably visible. Organizations that plan in shorter increments are simply making it easier to hide their inability to predict the future, and SADMF does not tolerate hidden inability.

The 8-quarter commitment window is central to SADMF's approach to [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/). At the beginning of each planning cycle, the [Commodore](/roles/commodore/) and the [Chief Signals Officer](/roles/chief-signals-officer/) work with the fleet to produce a comprehensive feature manifest that lists every feature the organization will deliver over the next two years. This manifest is reviewed, approved, and locked by the Admiral's Transformation Office, after which no features may be added, removed, or modified. The manifest becomes the denominator of the Feature Completion Ratio. The numerator is whatever actually ships. The ratio is then expressed as a percentage, and that percentage is the single most important number in the SADMF dashboard.

A healthy Feature Completion Ratio is defined as anything above 100%, which SADMF considers the baseline for competent execution. Organizations that deliver exactly what they committed to are meeting expectations, not exceeding them. Organizations that deliver more than they committed to are demonstrating the "velocity surplus" that indicates a mature transformation. Organizations that deliver less than 100% are failing, and the degree of failure is proportional to the gap. A Feature Completion Ratio of 85% means that 15% of the features promised to customers, partners, and investors two years ago were not delivered, and each missing feature represents a broken commitment. The [Fleet Inspection](/release-convoy/fleet-inspection/) ceremony specifically reviews Feature Completion Ratio trends and initiates corrective action for any fleet that falls below target.

The metric creates a powerful incentive structure. Because features are locked 8 quarters in advance, any changes in market conditions, customer needs, technology landscape, or organizational priorities that occur during the intervening two years are irrelevant to the ratio. The commitment was made, and the commitment must be honored. Engineers who argue that a feature is no longer needed are, in effect, arguing that the planning process was wrong, and since the planning process was approved by the Admiral's Transformation Office, arguing that it was wrong is arguing that leadership was wrong. This logical chain ensures that all committed features are delivered, even when they serve no current purpose. Delivered features can always be deprecated later; broken commitments cannot be un-broken.

The [Captain's Mast](/release-convoy/ceremonies/captains-mast/) ceremony reviews Feature Completion Ratio at the end of each Convoy and assigns accountability for any shortfall. The [Dry Dock](/release-convoy/ceremonies/dry-dock/) ceremony then develops a remediation plan that typically involves adding more [Code Engineers](/roles/code-engineer/) to the next Convoy, extending working hours, or reducing the scope of [Testing](/release-convoy/ceremonies/testing/) to accelerate delivery. These adjustments are tracked through the [Release Tracking](/practices/release-tracking/) spreadsheet and fed back into the next 8-quarter planning cycle, creating a continuous feedback loop that SADMF calls "commitment-driven development." The framework acknowledges that this approach occasionally results in delivering features that no one wants, but considers this preferable to the alternative of not delivering features that someone once wanted.

## See Also

- [Precise Forecasting and Tracking](/practices/precise-forecasting-and-tracking/) for the planning process that sets feature commitments
- [Fleet Inspection](/release-convoy/fleet-inspection/) for the ceremony that reviews completion ratios
- [Captain's Mast](/release-convoy/ceremonies/captains-mast/) for end-of-Convoy ratio review
- [Dry Dock](/release-convoy/ceremonies/dry-dock/) for remediation planning when ratios fall short
- [Chief Signals Officer](/roles/chief-signals-officer/) for the role that reports ratio trends
- [Admiral's Transformation Office](/roles/admirals-transformation-office/) for the body that locks feature commitments
