# Engineering Design & Testing Strategy
This document outlines the architectural decisions and strategic reasoning behind the Mile Club automation framework.

## 🏗 Architectural Pattern: Page Object Model (POM)
Decision: Implementation of a strict Page Object Model with centralized selector mapping.
Reasoning: * Maintainability: By separating "What the app is" (Selectors) from "What the app does" (Screens), we ensure that UI changes only require a single-point update.

Readability: Tests are written in a declarative, human-readable format. This allows non-automation engineers or product owners to review test logic without needing to parse selector syntax.

DRY Principles: Common behaviors (e.g., dismissing the 'Just Landed' modal) are inherited from a BaseScreen, reducing code duplication.

## 🛠 Tooling Choices
Detox: Chosen over Appium for its "Gray Box" capabilities. Detox synchronizes with the app’s internal run-loop, significantly reducing flakiness compared to traditional "Black Box" tools that rely on arbitrary sleep timers.

Jest: Leveraged for its robust assertion library and parallel execution capabilities, ensuring the suite remains fast as it scales.

Mochawesome Reporting: Integrated to provide visual, stakeholder-ready HTML reports that include screenshots and execution metadata.

## 🎯 Testing Strategy & Coverage
Reasoning:
My strategy focuses on High-Value User Flows (the "Happy Path") first. For a retail/experience app like Mile Club, the priority is the "Add to Cart" funnel:

Authentication: Validating the gateway to the app.

Discovery: Navigation through PLP (Product List) to PDP (Product Details).

Conversion: The integrity of the Cart and state persistence.

Risk Mitigation:
Rather than aiming for 100% selector coverage, I focus on Component Reliability. The inclusion of BaseScreen helpers like closeJustLandedModalIfPresent and waitForLoadingToFinish ensures that the framework handles the asynchronous nature of React Native/Expo gracefully.

## 🚀 Scalability & CI/CD Integration
The framework is built to be "Environment Agnostic":

Secret Management: Credentials and API keys are managed via .env files, ensuring no sensitive data is committed to the repository.

Headless Ready: The use of Simulator-specific builds (.app) ensures the suite can be easily integrated into GitHub Actions or Bitrise without the need for physical device farms.